# newsFeed
Get News and Tweet and aggregate feeds


# Step to run 
Required Kafka to be install in local machine
```
* $ brew cask install java
* $ brew install kafka
* cd newsFeed
* Start Zookepper (follow zookepper commands)
* Start kafka clusters (follow start kafka commands)
* cd backend/apiGateway
* npm install
* node app.js
* cd ../ (back to backend folder)
* cd queueService/kafka-setup
* npm install 
* start consumers (follow consumers start commands given below)
* open new terminal
* cd ../../ (back to newsFeed folder)
* cd frontend
* yarn install or npm install 
* yarn start or npm start
```

## Start Zookepper (required)
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties 

## Start kafka clusters (required)
kafka-server-start ./backend/queueService/kafka/server.b1.properties 
kafka-server-start ./backend/queueService/kafka/server.b2.properties 
kafka-server-start ./backend/queueService/kafka/server.b3.properties 



## Start node consumers (required)
node ./consumers/staticsConsumer.js
node ./consumers/newFeedConsumer.js

## Start backend node server
node backend/apiGateway/app.js

## Start frontend 
cd frontend/
yarn start 
