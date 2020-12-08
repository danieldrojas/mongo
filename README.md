# Setting MongoDB server connetion (Mac OS Big Sur)

MongoDB shell version v4.2.8
NodeJs v14.15.1

## Usefull commands while troubleshooting

Mac OS Big Sur won't let the default location to store the data on Mongodb work therefore create different datapath 

create datapath: sudo mkdir -p /System/Volumes/Data/data/db

Permissions: sudo chown -R `id -un` System/Volumes/Data/data/db

open the mongod in the background with a different datapath:
mongod --dbpath=/System/Volumes/Data/data/db 


sudo lsof -t -i:27017

ps aux | grep -v grep | grep mongod

netstat -an | grep 27017

pgrep mongo :     find process by name


 ls -al /usr/local/bin/mong*

### Run mongodb in background:
brew services start mongodb-community
brew services run mongodb-community
brew services stop mongodb-community

brew tap mongodb/brew



