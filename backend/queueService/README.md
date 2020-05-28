## This is seperate MicroService

## Start kafka servers
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b1.properties
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b2.properties
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b3.properties

## produce messages
kafka-console-producer --broker-list localhost:9092 --sync --topic newsFeed2
kafka-console-producer --broker-list localhost:9092 --sync --topic stats

## consume messages
kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --topic newsFeed1
kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --topic stats