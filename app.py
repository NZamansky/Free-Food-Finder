from flask import Flask,request,redirect,render_template,session
from pymongo import Connection,MongoClient

app=Flask(__name__)

conn = Connection()
db = conn['free-food-finder']

##### markers #####
    
def addMarker(name, location, time, people, food):
    db.markers.insert( {'name': name, 'location':location, 'time':time, 'people':people, 'food': food } )
    print "added"

#Test markers
addMarker("Test","0,0","12:10","Me","Doughnuts");
addMarker("Test","1,0","12:10","You","Blintzes");
addMarker("Test","0,1","12:10","Some Guy","Fried Food");

#updating fields
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


#get methods

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
    
##### ^^^^^ markers ^^^^^ #####

#Pulls markers from the database and makes something usable out of them.
def getMarkers():
    script= ""
    for marker in db.markers.find():
        script+="""var marker = new google.maps.Marker({
        position: new google.maps.LatLng("""+marker['location']+"""),
        map: map,
                });"""
    return script

#Putting these into the read js file.
f = open("static/script.js",'r')
script = f.read()
f.close()

script = script.replace("//Insert markers here",getMarkers())

f = open("static/run.js",'w')
f.write(script)
f.close()

markers = getMarkers()

##### web app #####

@app.route("/", methods=['GET','POST'])
def index():
    error = ""
    #session["loggedIn"] = False

    print 1
    if request.method == 'POST':
        '''
        #signing up
        if request.form['b'] == "signUp":

            name = request.form['uname']
            password = request.form['pword']

            #initializing the database
            db.users.insert( {'name': "rebecca"})
            
            #finds (and counts) the number of times a username is in the database
            user = db.users.find( {'name':name} ).count()

            if user > 0:
                #the number of documents in the database with that same name is not zero
                error = "This username already exists"
            else: #creating a new document in the data base
                db.users.insert( {'name': name, 'password': password} )
                session['loggedIn'] = True

        #logging in
        #note: once you sign in, we log you in'''

        #print 2
        if request.form['b']=="Submit":
            #def addMarker(name, location, time, people, food):
            addMarker(request.form['foodName'],request.form['coordinates'],'','','')
        '''
       # name = request.form["uname"]
       # password = request.form["pword"]
            
        user = db.users.find( {'name':name, 'password':password} ).count()
        #print user
        if user <= 0:
	    if error!="This username already exists":
                error = "Check your username or password"
        else:
            session["loggedIn"] = True #you are logged in!

    if session["loggedIn"]:
        return render_template("index.html", loggedIn = True, name = name, error = error)
    else:
        return render_template("index.html", loggedIn = False, error = error)
'''
        #print 3
    return render_template("index.html", error = error)
            


'''
#login page
@app.route("/login", methods=['GET','POST'])
def login():
    return render_template("login.html")'''


if __name__=="__main__":
    app.secret_key = "12345"
    app.debug=True
    app.run()
