from mongo import database
from operator import itemgetter


def chkMin(needs: list, budget: int, peeps: int, tym: int) -> bool:
    a = 0
    l = len(needs)

    for i in range(l):
        x = needs[i]

        bus = (x[-1]["Business"])
        if (bus == "Hall"):
            a += (int(x[-1]["Price"])) * tym
        elif (bus == "Photography"):
            a += (int(x[-1]["Price"])) * tym
        elif (bus == "Catering"):
            a += (int(x[-1]["Price"])) * peeps

    return (a <= budget)


def getList(collectionName) -> list:
    collection = database(collectionName)

    res = collection.find({})
    clients = []

    for i in res:
        clients.append(i)

    clients = sorted(clients, key=itemgetter("Price"), reverse=True)

    return clients


def entireList(needs: dict) -> list:
    services = list(needs.keys())
    services.remove("Budget")
    services.remove("People")
    services.remove("Hours")
    entireList = []

    for i in services:
        if needs[i]:
            entireList.append(getList(i))

    return entireList


def result(needs: dict, budget: int, peeps: int, tym: int) -> list:
    counter = []
    price = []
    res = []

    for i in needs:
        counter.append(1)
        bus = (i[0]["Business"])
        if (bus == "Hall"):
            price.append(int(i[0]["Price"]) * tym)
        elif (bus == "Photography"):
            price.append(int(i[0]["Price"]) * tym)
        elif (bus == "Catering"):
            price.append(int(i[0]["Price"]) * peeps)

        res.append({"id": i[0]["_id"],
                    "bus": i[0]["Business"]})

    x = 0
    l = len(needs)
    while (sum(price) > budget):
        x = x % l
        price[x] = int(needs[x][counter[x]]["Price"])
        res[x] = ({"id": str(needs[x][counter[x]]["_id"]),
                  "bus": needs[x][counter[x]]["Business"]})
        x += 1

    ret = []
    for i in res:
        cName = i["bus"]
        coll = database(cName)
        x = (coll.find_one({"_id": i["id"]}))
        del x["_id"]
        ret.append(x)

    return ret
