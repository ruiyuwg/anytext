The Lindorm search engine provides RESTful APIs that are compatible with Elasticsearch. You can use the **curl** command to call these APIs to manage search indexes and documents.

## **Prerequisites**

-   Activate the search engine. For more information, see [Activation guide](/help/en/lindorm/user-guide/activation-guide-elasticsearch-compatible-version).
    
-   Add the IP address of your client to the whitelist of your Lindorm instance. For more information, see [Configure a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## **Connect to the search engine**

Run the following command to connect to the search engine and view the index information in the cluster.

```
curl -XGET "http://<url>/_cat/indices?v" -u <username>:<password>  
```

**Parameter descriptions**

**Parameter**

**Description**

**url**

The **Elasticsearch-compatible** endpoint of the search engine. To obtain the endpoint, see [Elasticsearch-compatible endpoints](/help/en/lindorm/user-guide/view-endpoints#04d8c3c43foap).

**Important**

-   If your application is deployed on an ECS instance, access the Lindorm instance over a **virtual private cloud (VPC)** for higher security and lower network latency.
    
-   If your application is deployed locally, enable a public endpoint in the console before you connect to the Lindorm instance over the Internet. To enable a public endpoint, go to the console. In the navigation pane on the left, choose **Database Connections**. Click the **Search Engine** tab. In the upper-right corner of the tab, click **Enable Public Endpoint**.
    
-   To access the Lindorm instance over a VPC, set the **url** parameter to the Elasticsearch-compatible **VPC** endpoint. To access the Lindorm instance over the public network, set the **url** parameter to the Elasticsearch-compatible **Internet** endpoint.
    

**username**

The username and password to access the search engine.

To obtain the default username and password: In the navigation pane on the left of the console, select **Database Connections** and click the **Search Engine** tab. The credentials are provided on the **Search Engine** tab.

**password**

The following is a connection example:

```
curl -XGET "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/_cat/indices?v" -u <username>:<password>
```

After the connection is established, the following result is returned. Because no index is created, the result does not contain any index information.

```
health status index uuid pri rep docs.count docs.deleted store.size pri.store.size
```

## **Use the search engine**

The following sections provide common curl commands. For more information, see the [official Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html).

### **Manage indexes**

-   Create an index.
    
    Create an index named lindorm\_search in the search engine.
    
    ```
    curl -XPUT "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/lindorm_search" -u <username>:<password> -H 'Content-Type: application/json' -d '
    {        
     "settings": {
        "number_of_shards": 4         // Set the number of primary shards to 4
      }
    }'
    ```
    
    **Important**
    
    A single node in the search engine supports a maximum of `1000` shards. To increase this limit, contact Lindorm technical support (DingTalk ID: s0s3eg3).
    
    A successful operation returns the following result:
    
    ```
    {"acknowledged":true,"shards_acknowledged":true,"index":"lindorm_search"}
    ```
    
-   Set the index schema.
    
    Set the schema for the lindorm\_search index to `_mapping` and the type to `_doc`. The schema must include the `id`, `name`, and `describe` fields.
    
    ```
    curl -XPUT "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/lindorm_search/_doc/_mapping" -u <username>:<password> -H 'Content-Type: application/json' -d '
    {        
     "_doc":{
       "properties": {
            "id": {"type": "long"},
            "name":{"type":"keyword"},
            "describe": {"type": "text"}
          }
      }
    }'
    ```
    
    After successful configuration, the following result is returned:
    
    ```
    {"_index":"lindorm_search","_type":"_doc","_id":"_mapping","_version":1,"result":"created","_shards":{"total":1,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}
    ```
    
-   View the indexes in the instance.
    
    ```
    curl  -XGET "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/_cat/indices?v" -u <username>:<password>
    ```
    
    The following result is returned:
    
    ```
    health status index          uuid           pri rep docs.count docs.deleted store.size pri.store.size
    green  open   lindorm_search lindorm_search   1   0          0            0       208b           208b
    ```
    
    If no index exists in the current instance, the returned result does not contain any index information.
    
-   Delete an index.
    
    ```
    curl -XDELETE "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/lindorm_search" -u <username>:<password>
    ```
    
    If the index is deleted successfully, the following result is returned:
    
    ```
    {"acknowledged":true}
    ```
    

### **Manage documents**

-   Create a single document.
    
    Create a document with ID 1 in the lindorm\_search index.
    
    ```
    curl -XPOST "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/lindorm_search/_doc/1" -u <username>:<password> -H 'Content-Type: application/json' -d '
    { 
    "id":100,
    "name":"shenzhen",
    "describe":"just a test"
    }'
    ```
    
-   Create multiple documents.
    
    Create two documents with IDs 1 and 2 in the lindorm\_search index.
    
    ```
    curl -XPOST "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/_bulk" -u <username>:<password> -H 'Content-Type: application/json' -d'
    { "index" : { "_index": "lindorm_search", "_type" : "_doc", "_id" : "1" } }
    {"id":200,"name":"shanghai","describe":"just"}
    { "index" : { "_index": "lindorm_search", "_type" : "_doc", "_id" : "2" } }
    {"id":300,"name":"beijing","describe":"good luck"}
    '
    ```
    
-   Search for a document.
    
    Search for the document with ID 1.
    
    ```
    curl  -XGET "http://ld-t4n5668xk31ui****-proxy-search-public.lindorm.rds.aliyuncs.com:30070/lindorm_search/_doc/1?pretty" -u <username>:<password>
    ```
    
    The following result is returned:
    
    ```
    {
      "_index" : "lindorm_search",
      "_id" : "1",
      "_version" : 1,
      "_seq_no" : 0,
      "_primary_term" : 1,
      "found" : true,
      "_source" : {
        "id" : 100,
        "name" : "shenzhen",
        "describe" : "just a test"
      }
    }
    ```
