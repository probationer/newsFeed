## This is seperate MicroService

## Start Zookepper (required)
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties <Enter>

## Start kafka clusters (required)
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b1.properties <Enter>
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b2.properties <Enter>
kafka-server-start /<local_root_path>/newsFeed/backend/queueService/kafka/server.b3.properties <Enter>

## produce messages (optional)
kafka-console-producer --broker-list localhost:9092 --sync --topic newsFeed2 <Enter>
kafka-console-producer --broker-list localhost:9092 --sync --topic stats <Enter>

## consume messages (optional)
kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --topic newsFeed2 <Enter>
kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --topic stats <Enter>
