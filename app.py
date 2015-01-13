from flask import Flask,request,redirect,render_template,session
from pymongo import Connection,MongoClient

app=Flask(__name__)

##### users #####

conn = Connection()
db = conn['free-food-finder']

def addUser(username, password):
    db.users.insert( {'name': username, 'password': password} )
    print "added"

def check(username, password):
    user = db.users.find( {'name':username, 'password':password} )

    if user == None:
        print "Check your username or password"
        return False
    else:
        return True

##### markers #####
    
def addMarker(name, location, time, people, food):
    db.markers.insert( {'name': name, 'location':location, 'time':time, 'people':people, 'food': food } )
    print "added"

def updateLocation(name, newLocation):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    time = marker['time']
    people = marker['people']
    food = marker['food']
    db.markers.update( {'name':name}, {'name':name, 'location':newLocation, 'time':time, 'people':people, 'food':food} )
    return True

def updateTime(name, newTime):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    location = marker['location']
    people = marker['people']
    food = marker['food']
    db.markers.update( {'name':name}, {'name':name, 'location':location, 'time':newTime, 'people':people, 'food':food} )
    return True

def updatePeople(name, newPeople):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    time = marker['time']
    location = marker['location']
    food = marker['food']
    db.markers.update( {'name':name}, {'name':name, 'location':location, 'time':time, 'people':newPeople, 'food':food} )
    return True

def updateFood(name, newFood):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    time = marker['time']
    people = marker['people']
    location = marker['location']
    db.markers.update( {'name':name}, {'name':name, 'location':location, 'time':time, 'people':people, 'food':newFood} )
    return True

def getLocation(name):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    location = marker['location']
    return location

def getTime(name):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    time = marker['time']
    return time

def getPeople(name):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    people = marker['people']
    return people

def getFood(name):
    cursor = db.markers.find({'name':name})
    marker = cursor.next()
    food = marker['food']
    return food



@app.route("/", methods=['GET','POST'])
def index():
    error = ""
    session["loggedIn"] = False
    
    if request.method == 'POST':
        
        #signing up
        if request.form['b'] == "signUp":
            name = request.form['uname']
            password = request.form['pword']
            user = db.users.find( {'name':name} ).count()
            if user > 0:
                error = "This username already exists"
            else:
                db.users.insert( {'name': name, 'password': password} )
                session['loggedIn'] = True

        ##logging in
        name = request.form["uname"]
        password = request.form["pword"]
            
        user = db.users.find( {'name':name, 'password':password} ).count()
        print user
        if user <= 0:
            error = "Check your username or password"
        else:
            session["loggedIn"] = True

    if session["loggedIn"]:
        print session
        return render_template("index.html", loggedIn = True, name = name, error = error)
    else:
        return render_template("index.html", loggedIn = False, error = error)

@app.route("/login", methods=['GET','POST'])
def login():
    return render_template("login.html")


if __name__=="__main__":
    app.secret_key = "12345"
    app.debug=True
    app.run(host="0.0.0.0",port=8000)
