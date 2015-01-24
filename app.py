from flask import Flask,request,redirect,render_template
from pymongo import Connection,MongoClient
import time

app=Flask(__name__)

conn = Connection()
db = conn['free-food-finder']

##### markers #####
    
def addMarker(name, location, time, people, food):
    db.markers.insert( {'name': name, 'location':location, 'time':time, 'people':people, 'food': food } )
   


def removeMarker(name):
    db.markers.remove( {'name':name} )
    

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
    counter=0;
    for marker in db.markers.find():
	
        script+="""
        var infowindow"""+str(counter)+""" = new google.maps.InfoWindow({
            content: '"""+str(marker['food'])+"""',
            //pixelOffset: 10
            });

        var marker"""+str(counter)+""" = new google.maps.Marker({
        position: new google.maps.LatLng("""+str(marker['location'])+"""),
         map: map,
                });

        google.maps.event.addListener(marker"""+str(counter)+""", 'click', function(){infowindow"""+str(counter)+""".open(map,marker"""+str(counter)+""");});"""
        counter = counter + 1
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

    ti = time.asctime( time.localtime(time.time() ) )
   # print ti
    ti = ti[11:19] # gets just the time
    hours = ti[0:2]
    minutes = ti[3:5]
    minutes = int(minutes)
    seconds = ti[6:9]
    seconds = int(seconds)
        
    if request.method == 'POST':
        

       
        if request.form['b']=="Submit":
            tim = time.asctime( time.localtime(time.time() ) )
            tim = ti[11:19]
            #addMarker(name, location, time, people, food)
            addMarker(request.form['name'],request.form['coordinates'],tim,request.form['people'],request.form['type'])
            
    #go through markers, if more than 2 seconds, delete marker
    
    #addMarker('t1', 'here', '11:25:30', 20, 'yummy')
    #removeMarker('t2')
    #removeMarker('t1')
    for marker in db.markers.find():
        n = marker['name']
        #removeMarker(n)
        #print n
        t = marker['time']
        #print "marker time" 
        #print t
        t = t[3:5]
        #print t
        markermin = int(t)
        #print markermin
        #print minutes - markermin
        if (minutes - markermin) > 2:
            removeMarker(n)
            print "removed"
    return render_template("index.html", error = error)
            


if __name__=="__main__":
    app.secret_key = "12345"
    app.debug=True
    app.run()
