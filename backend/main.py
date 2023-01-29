from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mongo import database
from utilities import *

app = FastAPI()

origins = ["http://localhost:3000", "localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/signup")
def signup(User: dict):
    collection = database("Users")
    collection.insert_one(
        {"Business": User["Business"], "Email": User["Email"], "Password": User["Password"]})

    return {"SignUp": "Success"}


@app.post("/signin")
def signin(User: dict):
    collection = database("Users")

    try:
        res = collection.find_one({"Email": User["Email"]})

        if (res["Password"] == User["Password"]):
            return {"Valid": True, "Business": res["Business"]}
        return {"Valid": False, "Reason": "Pass"}

    except:
        return {"Valid": False, "Reason": "Email"}


@app.post("/enlist")
def enlist(Details: dict):
    business = Details["Business"]
    collection = database(business)

    if (business == "Photography"):
        collection.insert_one({
            "Name": Details["Name"],
            "Phone": Details["Phone"],
            "Email": Details["Email"],
            "Website": Details["Website"],
            "Price": Details["Price"],
            "Business": business
        })

    if (business == "Hall"):
        collection.insert_one({
            "Name": Details["Name"],
            "Phone": Details["Phone"],
            "Email": Details["Email"],
            "Website": Details["Website"],
            "Price": Details["Price"],
            "Address": Details["Address"],
            "Business": business
        })

    if (business == "Catering"):
        collection.insert_one({
            "Name": Details["Name"],
            "Phone": Details["Phone"],
            "Email": Details["Email"],
            "Website": Details["Website"],
            "Price": Details["Price"],
            "Business": business
        })


@app.post('/client')
def client(needs: dict):
    services = entireList(needs)
    budget = int(needs["Budget"])
    peeps = int(needs["People"])
    tym = int(needs["Hours"])
    a = chkMin(services, budget, peeps, tym)

    if not a:
        return {"Valid": False}

    res = result(services, budget, peeps, tym)
    print(res)
    return {"Valid": True , "Result": res}