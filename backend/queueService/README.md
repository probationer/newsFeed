## Start kafka servers
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b1.properties
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b2.properties
kafka-server-start /Users/admin/Documents/program/newsFeed/backend/queueService/kafka/server.b3.properties

## produce messages
kafka-console-producer --broker-list localhost:9092,localhost:9093,localhost:9094 --sync --topic newsFeed

## consume messages
kafka-console-consumer --bootstrap-server localhost:9092,localhost:9093,localhost:9094 --from-beginning --topic newsFeed