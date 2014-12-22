from flask import Flask,request,redirect,render_template,session
from pymongo import Connection,MongoClient

#using mongo stuff

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

def addMarker(location, people, 
    

addUser('rebecca': 'hello')

##add marker
##update marker
