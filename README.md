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
* node backend/apiGateway/app.js
* npm install
* cd ../ (back to backend folder)
* cd backend/queueService/kafka-setup
* npm install 
* cd ../../ (back to newsFeed folder)
* start consumers (follow consumers start commands given below)
* cd frontend
* yarn install or npm install 
* yarn start or npm start
```

## Start Zookepper (required)
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties 

## Start kafka clusters (required)
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b1.properties 

kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b2.properties 

kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b3.properties 



## Start node consumers (required)
node backend/queueService/kafka-setup/consumers/staticsConsumer.js

node backend/queueService/kafka-setup/consumers/newFeedConsumer.js

## Start backend node server
node backend/apiGateway/app.js

## Start frontend 
cd frontend/
yarn start 
