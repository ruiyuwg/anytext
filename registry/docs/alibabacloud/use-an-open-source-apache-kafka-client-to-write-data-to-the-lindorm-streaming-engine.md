The API for the Lindorm streaming engine is fully compatible with the API for open source Apache Kafka. You can use the Apache Kafka API to allow programs to write data to the Lindorm streaming engine. You can also use open source third-party tools such as Fluentd and Debezium to collect data and write data to the Lindorm streaming engine. This topic describes how to use an open source Apache Kafka client to connect to the Lindorm streaming engine and how to write data to the Lindorm streaming engine. This topic also provides some sample code.

## Prerequisites

-   A Java environment is installed by using Java Development Kit (JDK) 1.7 or later.
-   The IP address of your client is added to the allowlist of your Lindorm instance. For more information, see [Configure a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184 "To ensure the security and stability of ApsaraDB for Lindorm (Lindorm), the system prevents devices from accessing Lindorm instances by default. Before you use a Lindorm instance, configure a whitelist for the instance to allow external devices to access the instance. The security of Lindorm instances can be enhanced if you properly configure whitelists. We recommend that you maintain your whitelists on a regular basis.").
-   The value of Lindorm Stream Kafka Endpoint is obtained. For more information, see [View endpoints](/help/en/lindorm/view-connection-address-2#task-2190768 "This topic describes how to view the virtual private cloud (VPC) endpoints and the public endpoint of your streaming engine in the Lindorm console.").
    
    **Note** Lindorm Stream Kafka Endpoint specifies a virtual private cloud (VPC) endpoint of your Lindorm streaming engine. Make sure that your application and your Lindorm instance are deployed in the same VPC.
    

## Procedure

1.  Download an open source Apache Kafka client. Add Maven dependencies to the pom.xml file. The following sample code is provided:
    
    ```
    <dependency>
        <groupId>org.apache.kafka</groupId>
        <artifactId>kafka-clients</artifactId>
        <version>0.10.2.2</version>
    </dependency>
    ```
    
2.  Connect to the Lindorm streaming engine and write data to the engine. The complete sample code is provided:
    
    **Note**
    
    -   Data in the JSON, Avro, or CSV format can be written to the Lindorm streaming engine.
    -   The value of Lindorm Stream Kafka Endpoint in the sample code is a VPC endpoint. For information about how to obtain the endpoint, see [View endpoints](/help/en/lindorm/view-connection-address-2#task-2190768 "This topic describes how to view the virtual private cloud (VPC) endpoints and the public endpoint of your streaming engine in the Lindorm console.").
    
    ```
    import org.apache.kafka.clients.producer.KafkaProducer;
    import org.apache.kafka.clients.producer.ProducerConfig;
    import org.apache.kafka.clients.producer.ProducerRecord;
    import org.apache.kafka.clients.producer.RecordMetadata;
    import org.codehaus.jettison.json.JSONObject;
    
    import java.util.Properties;
    import java.util.concurrent.Future;
    
    public class KafkaToLindormStreamDemo {
    
        public static void main(String[] args) {
            Properties props = new Properties();
    
            // Configure Lindorm Stream Kafka Endpoint. The value of Lindorm Stream Kafka Endpoint is a VPC endpoint. Make sure that your application and your Lindorm instance are deployed in the same VPC. 
            props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "Lindorm Stream Kafka Endpoint");
           // Specify the topic in which you want to store the physical data of your streaming data table.
            String topic = "log_topic";
    
            props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
            props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
            KafkaProducer<String, String> producer = new KafkaProducer<String, String>(props);
            try {
                JSONObject json = new JSONObject();
                // Write data to the streaming engine.
                json.put("timestamp", System.currentTimeMillis());
                json.put("loglevel", "ERROR");
                json.put("thread", "[ReportFinishedTask7-thread-4]");
                json.put("class", "engine.ImporterTaskManager(318)");
                json.put("detail", "Remove tasks fail: job name=e35318e5-52ea-48ab-ad2a-0144ffc6955e , task name=prepare_e35318e5-52ea-48ab-ad2a-0144ffc6955e , runningTasks=0");
                Future<RecordMetadata> future = producer.send(
              new ProducerRecord<String, String>(topic, json.getString("thread") + json.getLong("timestamp"),
                  json.toString()));
                producer.flush();
                try {
                    RecordMetadata recordMetadata = future.get();
                    System.out.println("Produce ok:" + recordMetadata.toString());
                } catch (Throwable t) {
                    System.out.println("Produce exception " + t.getMessage());
                    t.printStackTrace();
                }
            } catch (Exception e) {
                System.out.println("Produce exception " + e.getMessage());
                e.printStackTrace();
            }
        }
    }
    ```
