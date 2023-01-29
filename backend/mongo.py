import pymongo
import config

def database(collectionName: str):
    cluster = pymongo.MongoClient(
        "mongodb+srv://Rithik:" + config.pw + "@rithik.jeev3ut.mongodb.net/?retryWrites=true&w=majority")
    db = cluster["Event-Hog"]
    collection = db[collectionName]
    return collection