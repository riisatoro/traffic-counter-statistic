import os

from pymongo import MongoClient


client = MongoClient(
    os.getenv('MONGO_HOST'),
    int(os.getenv('MONGO_PORT')),
    username=os.getenv('MONGO_INITDB_ROOT_USERNAME'),
    password=os.getenv('MONGO_INITDB_ROOT_PASSWORD'),
)

db = client[
    os.getenv('MONGO_DATABASE_NAME')
]
