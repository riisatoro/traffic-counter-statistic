from database.connection import db


class CollectionName:
    user = 'user'


User = db[CollectionName.user]
