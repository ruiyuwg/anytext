This topic describes how to call the Java API operations of open source Apache Solr to access LindormSearch and provides examples.

## Prerequisites

-   JDK 1.6 or later is installed on a host.
    
-   The IP address of your client is added to the whitelist of your Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## **Usage notes**

Apache Solr API operations cannot be used to access LindormSearch over the **Internet**.

## Step 1: Download solr-solrj

Add a Maven dependency. If you create a project in a Maven repository, add the solr-solrj dependency to the pom.xml file. Example:

```
<dependency>
   <groupId>org.apache.solr</groupId>
   <artifactId>solr-solrj</artifactId>
   <version>8.9.0</version>
</dependency>
```

## Step 2: Create and initialize an instance

-   If you use the HttpSolrClient mode to access LindormSearch, contact the technical support (DingTalk ID: s0s3eg3) to obtain the VPC endpoint of LindormSearch over HTTP (**httpUrl**). The following code provides an example on how to use the HttpSolrClient mode to access LindormSearch:
    
    ```
        String httpUrl = "http://***:****/solr/";
        HttpSolrClient solrClient = new HttpSolrClient.Builder(httpUrl).build();
    ```
    
-   The following code provides an example on how to use the CloudSolrClient mode to access LindormSearch:
    
    ```
        String zkHost = "ld-bp16cf8611a4r****-proxy-zk.lindorm.rds.aliyuncs.com:2***/solr"
        CloudSolrClient solrClient = new CloudSolrClient.Builder(Collections.singletonList(zkHost), 
                                        Optional.empty()).build();
    ```
    
    **Note**
    
    -   CloudSolrClient ensures thread safety and allows multiple threads of an application to share the same object.
        
    -   In the preceding example, **zkHost** is the **LindormSearch endpoint for Solr**. For more information about how to obtain the endpoint, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#section-8ms-q0x-lbb).
        
    

## Step 3: Access LindormSearch

1.  The following code provides an example on how to write data:
    
    ```
        List docs = new ArrayList<>();
        SolrInputDocument doc = new SolrInputDocument();
        doc.addField("id", 1);
        doc.addField("name_s", "bob");
        doc.addField("age_i", 18);
        docs.add(doc);
        solrClient.add(docs);
    ```
    
2.  The following code provides an example on how to query data:
    
    ```
        SolrQuery solrQuery = new SolrQuery("name_s:bob");
        QueryResponse response = solrClient.query("your_index", solrQuery);
        SolrDocumentList documentList = response.getResults();
        for(SolrDocument doc : documentList){
            String id = (String)doc.getFieldValue("id");
            //do something
        }
        solrClient.close();
    ```
    
    **Note**
    
    For more information about sample code that shows how to query data, see [Sample code](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/blob/master/solr/src/main/java/com/aliyun/solr/SolrQueryDemo.java?spm=a2c4g.11186623.2.14.6ff37863nNOppg&file=SolrQueryDemo.java).
