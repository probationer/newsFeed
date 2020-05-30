# newsFeed
Get News and Tweet and aggregate feeds


# Step to run 
Required Kafka to be install in local machine
* $ brew cask install java
* $ brew install kafka
⋅⋅* cd newsFeed
⋅⋅* Start Zookepper (follow zookepper commands)
⋅⋅* Start kafka clusters (follow start kafka commands)
..* cd backend/apiGateway
..* npm install
..* cd ../ (back to backend folder)
..* cd backend/queueService/kafka-setup
..* npm install 
..* cd ../../ (back to newsFeed folder)
..* cd frontend
..* yarn install or npm install 
..* yarn start or npm start

## Start Zookepper (required)
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties <Enter>

## Start kafka clusters (required)
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b1.properties <Enter>
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b2.properties <Enter>
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b3.properties <Enter>


## start node consumers (required)
nodemon backend/queueService/kafka-setup/consumers/staticsConsumer.js
nodemon backend/queueService/kafka-setup/consumers/newFeedConsumer.js

## start backend node server
nodemon backend/apiGateway/app.js

## start frontend 
cd frontend/
yarn start 