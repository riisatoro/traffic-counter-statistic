def find_document(collection, filters, multiple=False):
    if multiple:
        return [item for item in collection.find(filters)]
    return collection.find_one(filters)


def insert_document(collection, data):
    return collection.insert_one(data)


def update_document(collection, filters, data):
    return collection.update(filters, {'$set': data})


def delete_document(collection, filters):
    return collection.delete(filters)
