## Create a topic

On the project details page, click Create Topic. You can create topics in two ways.

**Create a custom format**

**Note: If you enable shard extension mode, shards can be scaled horizontally. Merging and splitting operations are no longer supported. You can only increase the number of shards, not decrease it. After you enable this mode, you can use Kafka to consume the topic.**

You can create topics as needed. For more information about the parameters, see the Terms document.

**Create a topic by importing a MaxCompute table schema**

**Step 1**

Specify the parameters to access MaxCompute.

**Step 2**

Click Next to import the MaxCompute table schema. You can modify the topic name, field comments, and whether a field can be empty, as needed. **Note: If you enable shard extension mode, shards can be scaled horizontally. Merging and splitting operations are no longer supported. You can only increase the number of shards, not decrease it. After you enable this mode, you can use Kafka to consume the topic.**

## View a topic

1\. Go to the project page and click View.

2\. View the topic details, such as its storage size.

## Delete a topic

To delete a topic, click the Delete button in the topic list. Note: When you delete a topic, all its data and associated resources, such as shards and connectors, are also deleted. This operation cannot be undone. Proceed with caution.

## Add a version

DataHub lets you modify the fields of an existing topic and generate a new version.

#### Note: For data written to DataHub using DTS, the Logstash plugin, the Flume plugin, the OGG plugin, or the Fluentd plugin, SchemaRegister is not supported. You must add fields using the software development kit (SDK) [Manage topics](/help/en/datahub/developer-reference/datahub-sdk-for-java/#h2-topic-5) or the [Command line interface](/help/en/datahub/user-guide/console-command-line-tool).

**Terms:**

-   Version number: When you create a Tuple topic, a version number is automatically generated. The initial value is 0. Each time you modify the topic by cloning it or adding a version, the version number increases by 1.
    
-   Clone: Add new fields while retaining the original table schema.
    

### Clone (Recommended)

You can clone a schema to add or modify fields. This method is primarily used to add new fields.

#### Step 1

On the Schema Details tab, click **Clone**, and then click the Add Column button.Step 2

Enter the required information and click OK.

### Add a version

You can add a new version to create a new schema without inheriting the structure of the original one.

#### Step 1

On the Schema Details tab, click the **Add Version** button. In the dialog box that appears, click Add Column.

#### Step 2

Enter the required information and click OK. The new version is added.

## Modify the topic lifecycle

DataHub lets you **modify the lifecycle of a topic**. The following is sample code:

-   Parameters
    
    -   **projectName**: The name of the project.
        
    -   **topicName**: The name of the topic.
        
    -   **lifeCycle**: The lifecycle of the topic.
        
    -   **comment**: The comment for the topic.
        
-   Exceptions
    
    -   DatahubClientException
        
    -   InvalidParameterException
        
    -   AuthorizationFailureException
        
    -   ResourceNotFoundException
        
-   Example
    
    ```
    public static void updatetopic() {
      try {
          int lifeCycle = 7;
          String comment = "test";
          datahubClient.updateTopic(Constant.projectName, Constant.topicName, lifeCycle, comment );
          System.out.println("Update topic lifecycle success!");
      } catch (InvalidParameterException e) {
          System.out.println("Invalid parameter. Check your parameters.");
          System.exit(1);
      } catch (AuthorizationFailureException e) {
          System.out.println("AK error. Check your AccessKey ID and AccessKey secret.");
          System.exit(1);
      } catch (ResourceNotFoundException e) {
          System.out.println("Project or topic not found.");
          System.exit(1);
      } catch (DatahubClientException e) {
          System.out.println("Other error.");
          System.exit(1);
      }
    }
    ```
