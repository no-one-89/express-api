# mongoDB使用教程

### 一 .mongoDB安装
1.[Ubuntu链接](http://docs.mongoing.com/manual-zh/tutorial/install-mongodb-on-ubuntu.html)

1)  Import the public key used by the package management system.
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```
2)  Create a list file for MongoDB. & Ubuntu 14.04
```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```
3)  Reload local package database.
```
sudo apt-get update
```
4)  	
Install the MongoDB packages.
```
sudo apt-get install -y mongodb-org
```
### 二 . mongoDB使用

1. 创建一个mongoDB文件夹
```
mkdir -p data/db
```
2. 启动mongoDB
```
mongod --dbpath=./data/db
```
3. 进入mongo shell
```
xh@xh-pc:~$ mongo
```
4. 创建库 use database
```
> use api
switched to db api
```
5. 创建集合 db.createCollection()
```
> db.createCollection('posts')
{ "ok" : 1 }
```
6. 往集合中添加内容 db._collection.insert()
```
> db.posts.insert({name:'peter'})
WriteResult({ "nInserted" : 1 })
```
7. 查看所有库 show dbs
```
> show dbs
api       0.000GB
local     0.000GB
work10-6  0.000GB
```
8. 显示当前操作库 db
```
> db
api
```
9. 查看所有集合 show collections
```
> show collections
posts
```
10. 查看集合中内容 db._collection.find()
```
> db.posts.find()
{ "_id" : ObjectId("57f70c936b717c029570a2bc"), "name" : "peter" }
```
11. 删除集合 db._collection.drop()
```
> db.posts.drop()
true
```
12. 删除当前库 db.dropDatabase()
```
> db.dropDatabase()
{ "dropped" : "api", "ok" : 1 }
```
