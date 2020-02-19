"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jorm;
(function (jorm) {
    class Open {
        constructor(dbinit) {
            this.db = {};
            this.db = dbinit;
        }
        Regist(collectionName, newCollection) {
            try {
                this.db[collectionName] = newCollection;
            }
            catch (error) {
                console.error(error.message);
            }
            return this.Find(collectionName);
        }
        Create(collectionName, newDoc) {
            try {
                this.db[collectionName].push(newDoc);
            }
            catch (error) {
                console.error(error.message);
            }
            return this.Find(collectionName);
        }
        Update(collectionName, targetDoc) {
            const id = targetDoc.id;
            let doc = targetDoc;
            delete doc.id;
            try {
                for (const i in this.db[collectionName]) {
                    if (this.db[collectionName][i].id != id)
                        continue;
                    for (const docKey in doc) {
                        this.db[collectionName][i][docKey] = doc[docKey];
                    }
                }
            }
            catch (error) {
                console.error(error.message);
            }
            return this.Find(collectionName);
        }
        Delete(collectionName, targetDoc) {
            try {
                for (const i in this.db[collectionName]) {
                    if (this.db[collectionName][i].id != targetDoc.id)
                        continue;
                    this.db[collectionName].splice(i, 1);
                }
            }
            catch (error) {
                console.error(error.message);
            }
            return this.Find(collectionName);
        }
        Find(collectionName, targetDoc = null) {
            let collection = [];
            try {
                if (targetDoc) {
                    for (const i in this.db[collectionName]) {
                        if (this.db[collectionName][i].id != targetDoc.id) {
                            continue;
                        }
                        else {
                            collection.push(this.db[collectionName][i]);
                            break;
                        }
                    }
                }
                else {
                    collection = this.db[collectionName];
                }
            }
            catch (error) {
                console.error(error.message);
            }
            return collection;
        }
        Show() {
            console.dir(this.db);
        }
    }
    jorm.Open = Open;
})(jorm = exports.jorm || (exports.jorm = {}));
