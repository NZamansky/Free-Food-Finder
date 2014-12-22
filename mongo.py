from flask import Flask,request,redirect,render_template,session
from pymongo import Connection,MongoClient

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
    
def addMarker(location, time, people, food):
    db.markers.insert( {'location':location, 'time':time, 'people':people, 'food': food } )
    print "added"

#def updateLocation
#def updateTime
#def updatePeople
#def update food

##### testing #####

    
addUser('rebecca': 'hello')

