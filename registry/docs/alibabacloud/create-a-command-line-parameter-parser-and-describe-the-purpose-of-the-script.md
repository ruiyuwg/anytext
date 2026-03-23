MetaSearch is an Object Storage Service (OSS) feature that indexes object metadata, enabling you to filter and retrieve objects based on specific conditions. This simplifies data management and helps you efficiently query, analyze, and manage objects at scale.

## Use cases

### **Data auditing**

MetaSearch lets you quickly locate objects to meet data auditing or regulatory requirements. For example, in the financial services industry, you can filter objects by metadata such as custom tags and access permissions. This helps you identify objects with specific sensitivity levels or permissions and improves the efficiency of data audits.

### **Enterprise data backup and archiving**

When you back up and archive enterprise data, you can use MetaSearch to quickly retrieve objects from a specific date or of a specific type. You can filter by metadata such as creation time, storage class, or custom tags. This lets you quickly recover historical data or archived records.

## Limitations

-   Region limits
    
    The MetaSearch feature is available for buckets in the China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Ulanqab), China (Hong Kong), Singapore, Indonesia (Jakarta), Germany (Frankfurt), US (Virginia), US (Silicon Valley), and UK (London) regions.
    
-   Bucket limits
    
    A bucket with MetaSearch enabled can contain a maximum of 50 billion objects. If the number of objects in a bucket exceeds 50 billion, retrieval performance may degrade. To process larger-scale data, contact [Technical Support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) for an evaluation.
    
-   Multipart upload
    
    For objects created using multipart upload, query results display only complete objects that are assembled from parts using the CompleteMultipartUpload operation. Parts that are initialized but not completed or aborted are not included in the results.
    

## **Performance reference**

The following performance data for OSS MetaSearch is for reference only.

-   **Reference for existing object index generation time**
    
    -   100 million objects in a single bucket: 4 hours
        
    -   1 billion objects in a single bucket: about 10 hours
        
    -   10 billion objects in a single bucket: about 1 to 3 days
        
    -   20 billion objects in a single bucket: about 2 to 4 days
        
    -   30 billion objects in a single bucket: about 3 to 6 days
        
    -   50 billion objects in a single bucket: about 6 to 10 days
        
    -   If your bucket contains more than 1 billion objects and the objects have tags, index generation takes longer than the times listed above.
        
-   **Reference for incremental object index update time**
    
    By default, OSS provides an additional 5,000 queries per second (QPS) for MetaSearch mode. This means that OSS can process 5,000 object index update requests per second. This QPS does not affect your bucket's Quality of Service (QoS). If the QPS for additions, modifications, or deletions in the bucket is less than the default of 5,000, the latency from the time an object is uploaded or modified to the time the object is retrievable is typically several minutes. If the QPS exceeds the default of 5,000, contact [Technical Support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex). We will evaluate your situation and provide technical assistance.
    
-   **Object retrieval response performance**
    
    Retrieval results are returned in seconds. The default timeout period is 30 seconds.
    

## **Enable MetaSearch**

## Use the OSS console

The steps to enable MetaSearch vary depending on the region where your bucket is located.

## For buckets in the China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Indonesia (Jakarta), and Germany (Frankfurt) regions

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Object Management** > **Data Indexing**.
    
4.  On the **Data Indexing** page, if you are using the data indexing feature for the first time, follow the prompts to grant permissions to the AliyunMetaQueryDefaultRole role. This allows the OSS service to manage data in your bucket. After you grant the permissions, click **Enable Data Indexing**.
    
5.  Select **MetaSearch**, and then click **Enable**.
    
    **Note**
    
    Enabling MetaSearch takes some time. The exact duration depends on the number of objects in the bucket.
    

## For buckets in the UK (London), China (Ulanqab), US (Virginia), and US (Silicon Valley) regions

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Object Management** > **Data Indexing**. If you are using the data indexing feature for the first time, follow the prompts to grant permissions to the AliyunMetaQueryDefaultRole role. This allows the OSS service to manage data in your bucket.
    
4.  Turn on **Metadata Management**.
    
    **Note**
    
    Enabling metadata management takes some time. The exact duration depends on the number of objects in the bucket.
    

## Use an Alibaba Cloud SDK

Before you use the MetaSearch feature, you must enable the **Metadata Management** feature for the specified bucket. The following code provides an example.

## Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.MetaQueryMode;

public class OpenMetaQuery {
    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        // In this example, the endpoint of the China (Hangzhou) region is used.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. 
        // Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        //Call the shutdown method to release associated resources when the OSSClient instance is no longer used.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Enable the MetaSearch feature.
            ossClient.openMetaQuery(bucketName);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            if(ossClient != null){
                ossClient.shutdown();
            }
        }
    }
}
```

## Python

```
import argparse
import alibabacloud_oss_v2 as oss

# Create a command-line parameter parser and describe the purpose of the script.
parser = argparse.ArgumentParser(description="open meta query sample")
# Specify the --region parameter to indicate the region in which the bucket is located. This parameter is required.
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
# Specify the --bucket parameter to indicate the bucket. This parameter is required.
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
# Specify the --endpoint parameter to indicate the endpoint for accessing OSS. This parameter is required.
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    # Parse the command-line arguments.
    args = parser.parse_args()

    # From the environment variables, load the authentication information required to access OSS.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Use the default configuration of the SDK.
    cfg = oss.config.load_default()
    # Specify the credential provider.
    cfg.credentials_provider = credentials_provider
    # Set the region to the one provided from the command line.
    cfg.region = args.region
    # If a custom endpoint is provided, update the endpoint attribute of the cfg object with the provided endpoint.
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Create an OSS client.
    client = oss.Client(cfg)

    # Initiate a request to enable metadata-based query.
    result = client.open_meta_query(oss.OpenMetaQueryRequest(
            bucket=args.bucket,
    ))

    # Display the HTTP status code and request ID.
    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          )

# Call the main function when the script is directly run.
if __name__ == "__main__":
    main()
```

## Go

```
package main

import (
	"context"
	"flag"   
	"log"     

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"          
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials" 
)

var (
	region     string // Specify a variable to store the region information obtained from the command lines.
	bucketName string // Specify a variable to store the bucket name obtained from the command lines.
)

// The init function is executed before the main function to initialize the program.
func init() {
	// Use a command line parameter to specify the region.
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	// Use a command line parameter to specify the bucket name.
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	flag.Parse() // Parse command line parameters.

	// Check if the bucket name is specified. If not, the program outputs default parameters and terminates.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required") // Log the error message and terminate the program.
	}

	// Check whether the region is specified. If the region is not specified, output the default parameters and exit the program.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required") // Log the error message and terminate the program.
	}

	// Create and configure a client and use environment variables to pass the credential provider.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg) // Use the client configurations to create a new OSSClient instance.

	// Create an OpenMetaQuery request to enable the metadata management feature for a specific bucket.
	request := &oss.OpenMetaQueryRequest{
		Bucket: oss.Ptr(bucketName), // Specify the name of the bucket.
	}
	result, err := client.OpenMetaQuery(context.TODO(), request) // Execute the request to enable the metadata management feature for the bucket.
	if err != nil {
		log.Fatalf("failed to open meta query %v", err) // If an error occurs, record the error message and terminate the program.
	}

	log.Printf("open meta query result:%#v\n", result) // Display the result.
}
```

## PHP

```
<?php

// Import the autoloader file to ensure that dependency libraries can be correctly loaded.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the description of command line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region in which the bucket is located. This parameter is required.
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint that other services can use to access OSS. This parameter is optional.
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The name of the bucket. This parameter is required.
];

// Convert the argument description to the long option format required by getopt.
// A colon (:) after each argument indicates that the argument requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command line arguments.
$options = getopt("", $longopts);

// Check whether the required arguments are specified.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information of the argument.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is not specified, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region in which the bucket is located.
$bucket = $options["bucket"]; // The name of the bucket.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region in which the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create an OpenMetaQueryRequest object to enable the scalar retrieval feature for the bucket.
$request = new Oss\Models\OpenMetaQueryRequest(
    bucket: $bucket
);

// Execute the operation to enable the scalar retrieval feature.
$result = $client->openMetaQuery($request);

// Print the result of enabling the scalar retrieval feature.
printf(
    'status code:' . $result->statusCode . PHP_EOL . // The HTTP status code. For example, 200 indicates that the request is successful.
    'request id:' . $result->requestId . PHP_EOL     // The request ID, which is used to debug or track requests.
);
```

## Use ossutil

The following example shows how to enable the metadata management feature for the bucket named `examplebucket`.

```
ossutil api open-meta-query --bucket examplebucket
```

For more information about this command, see [open-meta-query](/help/en/oss/developer-reference/open-meta-query).

## **Query objects with MetaSearch**

## Use the OSS console

The following example shows how to find all objects that are smaller than 500 KB and were last updated between 00:00 on September 11, 2024, and 00:00 on September 12, 2024. The output is sorted by object size in ascending order, and the maximum object size is calculated.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Object Management** > **Data Indexing**.
    
4.  Configure the following parameters and keep the default settings for the other parameters.
    
    -   Set **Last Modified At** to the range from 00:00 on September 11, 2024, to 00:00 on September 12, 2024.
        
    -   Set **Object Size** to less than 500 KB.
        
5.  Click **Search result settings**.
    
    -   For **Object Sort Order**, select **Ascending** and **Object Size**.
        
    -   For **Data Aggregation**, select **Object Size** and **Maximum**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5129915671/p859209.png)
    
6.  Click **Query Now**. Two objects meet the query conditions. As shown in the following figure, the maximum object size is 434 KB.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1776780571/p847950.png)
    
    For more information about all query conditions and output settings, see **[Query conditions and output settings](#a65dfb07aaurf)**.
    

## Use an Alibaba Cloud SDK

The following code shows how to use the MetaSearch feature to **query objects that meet specified conditions**.

## Java

For more code examples, see [MetaSearch using OSS SDK for Java](/help/en/oss/developer-reference/data-indexing-2).

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class DoMetaQuery {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. 
        // Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call the shutdown method to release associated resources when the OSSClient instance is no longer used.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Query objects that meet specific conditions and return objects based on specific fields and in the specified sorting order.
            int maxResults = 20;
            // Query objects that are smaller than 1,048,576 bytes in size, return up to 20 objects at a time, and sort the objects in ascending order.
            String query = "{\"Field\": \"Size\",\"Value\": \"1048576\",\"Operation\": \"lt\"}";
            String sort = "Size";
            DoMetaQueryRequest doMetaQueryRequest = new DoMetaQueryRequest(bucketName, maxResults, query, sort);
            Aggregation aggregationRequest = new Aggregation();
            Aggregations aggregations = new Aggregations();
            List<Aggregation> aggregationList = new ArrayList<Aggregation>();
            // Specify the name of the field that is used in the aggregate operation.
            aggregationRequest.setField("Size");
            // Specify the operator that is used in the aggregate operation. max indicates the maximum value.
            aggregationRequest.setOperation("max");
            aggregationList.add(aggregationRequest);
            aggregations.setAggregation(aggregationList);

            // Specify the aggregate operation.
            doMetaQueryRequest.setAggregations(aggregations);
            doMetaQueryRequest.setOrder(SortOrder.ASC);
            DoMetaQueryResult doMetaQueryResult = ossClient.doMetaQuery(doMetaQueryRequest);
            if(doMetaQueryResult.getFiles() != null){
                for(ObjectFile file : doMetaQueryResult.getFiles().getFile()){
                    System.out.println("Filename: " + file.getFilename());
                    // Query the ETag value that is used to identify the content of the object.
                    System.out.println("ETag: " + file.getETag());
                    // Query the access control list (ACL) of the object.
                    System.out.println("ObjectACL: " + file.getObjectACL());
                    // Query the type of the object.
                    System.out.println("OssObjectType: " + file.getOssObjectType());
                    // Query the storage class of the object.
                    System.out.println("OssStorageClass: " + file.getOssStorageClass());
                    // Query the number of tags of the object.
                    System.out.println("TaggingCount: " + file.getOssTaggingCount());
                    if(file.getOssTagging() != null){
                        for(Tagging tag : file.getOssTagging().getTagging()){
                            System.out.println("Key: " + tag.getKey());
                            System.out.println("Value: " + tag.getValue());
                        }
                    }
                    if(file.getOssUserMeta() != null){
                        for(UserMeta meta : file.getOssUserMeta().getUserMeta()){
                            System.out.println("Key: " + meta.getKey());
                            System.out.println("Value: " + meta.getValue());
                        }
                    }
                }
            } else if(doMetaQueryResult.getAggregations() != null){
                for(Aggregation aggre : doMetaQueryResult.getAggregations().getAggregation()){
                    // Query the field by which the aggregation is performed.
                    System.out.println("Field: " + aggre.getField());
                    // Query the aggregation operator.
                    System.out.println("Operation: " + aggre.getOperation());
                    // Query the result of the aggregate operation.
                    System.out.println("Value: " + aggre.getValue());
                    if(aggre.getGroups() != null && aggre.getGroups().getGroup().size() > 0){
                        // Query the value of the aggregation.
                        System.out.println("Groups value: " + aggre.getGroups().getGroup().get(0).getValue());
                        // Query the total number of the aggregations.
                        System.out.println("Groups count: " + aggre.getGroups().getGroup().get(0).getCount());
                    }
                }
            } else {
                System.out.println("NextToken: " + doMetaQueryResult.getNextToken());
            }
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            ossClient.shutdown();
        }
    }
}
```

## Python

For more code examples, see [MetaSearch](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-python-v2#018d8ebe49hru).

```
import argparse
import alibabacloud_oss_v2 as oss

# Create a command-line parameter parser for parsing arguments from the command line.
parser = argparse.ArgumentParser(description="do meta query sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    # Parse the command-line arguments.
    args = parser.parse_args()

    # Obtain access credentials from environment variables.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Use the default configuration of the SDK.
    cfg = oss.config.load_default()
    # Specify the credential provider.
    cfg.credentials_provider = credentials_provider
    # Set the region to the one provided from the command line.
    cfg.region = args.region
    # If a custom endpoint is provided, update the endpoint attribute of the cfg object with the provided endpoint.
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Create an OSS client.
    client = oss.Client(cfg)

    # Perform the metadata-based query.
    result = client.do_meta_query(oss.DoMetaQueryRequest(
            bucket=args.bucket,  # The bucket that stores the objects to be queried.
            meta_query=oss.MetaQuery(  # Specify query settings.
                aggregations=oss.MetaQueryAggregations(  # Specify aggregatios.
                    aggregations=[  # The aggregation list.
                        oss.MetaQueryAggregation(  # The first aggregation: the total object size.
                            field='Size',
                            operation='sum',
                        ),
                        oss.MetaQueryAggregation(  # The second aggregation: the maximum object size.
                            field='Size',
                            operation='max',
                        )
                    ],
                ),
                next_token='',  # The pagination token.
                max_results=80369,  # The maximum number of entries that can be returned.
                query='{"Field": "Size","Value": "1048576","Operation": "gt"}',  # The query condition.
                sort='Size',  # The sorting field.
                order=oss.MetaQueryOrderType.DESC,  # The sorting order.
            ),
    ))

    # Display the basic response information.
    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          # You can uncomment the one or more of the following lines to display more details.
          # f' files: {result.files},'
          # f' file: {result.files.file},'
          # f' file modified time: {result.files.file.file_modified_time},'
          # f' etag: {result.files.file.etag},'
          # f' server side encryption: {result.files.file.server_side_encryption},'
          # f' oss tagging count: {result.files.file.oss_tagging_count},'
          # f' oss tagging: {result.files.file.oss_tagging},'
          # f' key: {result.files.file.oss_tagging.taggings[0].key},'
          # f' value: {result.files.file.oss_tagging.taggings[0].value},'
          # f' key: {result.files.file.oss_tagging.taggings[1].key},'
          # f' value: {result.files.file.oss_tagging.taggings[1].value},'
          # f' oss user meta: {result.files.file.oss_user_meta},'
          # f' key: {result.files.file.oss_user_meta.user_metas[0].key},'
          # f' value: {result.files.file.oss_user_meta.user_metas[0].value},'
          # f' key: {result.files.file.oss_user_meta.user_metas[1].key},'
          # f' value: {result.files.file.oss_user_meta.user_metas[1].value},'
          # f' filename: {result.files.file.filename},'
          # f' size: {result.files.file.size},'
          # f' oss object type: {result.files.file.oss_object_type},'
          # f' oss storage class: {result.files.file.oss_storage_class},'
          # f' object acl: {result.files.file.object_acl},'
          # f' oss crc64: {result.files.file.oss_crc64},'
          # f' server side encryption customer algorithm: {result.files.file.server_side_encryption_customer_algorithm},'
          # f' aggregations: {result.aggregations},'
          f' field: {result.aggregations.aggregations[0].field},'
          f' operation: {result.aggregations.aggregations[0].operation},'
          f' field: {result.aggregations.aggregations[1].field},'
          f' operation: {result.aggregations.aggregations[1].operation},'
          f' next token: {result.next_token},'
    )

    # If matched objects are found, display tags and user metadata.
    if result.files:
        if result.files.file.oss_tagging.taggings:
            for r in result.files.file.oss_tagging.taggings:
                print(f'result: key: {r.key}, value: {r.value}')
        if result.files.file.oss_user_meta.user_metas:
            for r in result.files.file.oss_user_meta.user_metas:
                print(f'result: key: {r.key}, value: {r.value}')
    # Display all aggregations.
    if result.aggregations.aggregations:
        for r in result.aggregations.aggregations:
            print(f'result: field: {r.field}, operation: {r.operation}')

if __name__ == "__main__":
    main()
```

## Go

For more code examples, see [MetaSearch using OSS SDK for Go 2.0](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-go-v2).

```
package main

import (
	"context"
	"flag"
	"fmt"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

var (
	region     string // Specify a variable to store the region information obtained from the command lines.
	bucketName string // Specify a variable to store the bucket name obtained from the command lines.
)

// The init function is executed before the main function to initialize the program.
func init() {
	// Use a command line parameter to specify the region. By default, the parameter is an empty string.
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	// Use a command line parameter to specify the bucket name. By default, the parameter is an empty string.
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	flag.Parse() // Parse command line parameters.

	// Check if the bucket name is specified. If not, the program outputs default parameters and terminates.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	// Check if the region is specified. If not, the program outputs default parameters and terminates.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Create and configure a client and use environment variables to pass the credential provider and the region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg) // Use the client configurations to create a new OSSClient instance.

	// Create a DoMetaQuery request to query the objects that meet specific conditions.
	request := &oss.DoMetaQueryRequest{
		Bucket: oss.Ptr(bucketName), // Specify the name of the bucket.
		MetaQuery: &oss.MetaQuery{
			Query: oss.Ptr(`{"Field": "Size","Value": "1048576","Operation": "gt"}`), // Query objects whose size is larger than 1 MB.
			Sort:  oss.Ptr("Size"),                                                  // List the objects by size.
			Order: oss.Ptr(oss.MetaQueryOrderAsc),                                  // Sort the objects in ascending order.
		},
	}
	result, err := client.DoMetaQuery(context.TODO(), request) // Execute the request to query the objects that meet the preceding conditions.
	if err != nil {
		log.Fatalf("failed to do meta query %v", err)
	}

	// Display the token used to query data on the next page.
	fmt.Printf("NextToken:%s\n", *result.NextToken)

	// Traverse the returned results and display the details of each object.
	for _, file := range result.Files {
		fmt.Printf("File name: %s\n", *file.Filename)
		fmt.Printf("size: %d\n", file.Size)
		fmt.Printf("File Modified Time:%s\n", *file.FileModifiedTime)
		fmt.Printf("Oss Object Type:%s\n", *file.OSSObjectType)
		fmt.Printf("Oss Storage Class:%s\n", *file.OSSStorageClass)
		fmt.Printf("Object ACL:%s\n", *file.ObjectACL)
		fmt.Printf("ETag:%s\n", *file.ETag)
		fmt.Printf("Oss CRC64:%s\n", *file.OSSCRC64)
		if file.OSSTaggingCount != nil {
			fmt.Printf("Oss Tagging Count:%d\n", *file.OSSTaggingCount)
		}

		// Display the tags of the objects.
		for _, tagging := range file.OSSTagging {
			fmt.Printf("Oss Tagging Key:%s\n", *tagging.Key)
			fmt.Printf("Oss Tagging Value:%s\n", *tagging.Value)
		}

		// Display the user metadata.
		for _, userMeta := range file.OSSUserMeta {
			fmt.Printf("Oss User Meta Key:%s\n", *userMeta.Key)
			fmt.Printf("Oss User Meta Key Value:%s\n", *userMeta.Value)
		}
	}
}
```

## PHP

For more code examples, see [MetaSearch using OSS SDK for PHP 2.0](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-php-v2).

```
<?php

// Import the autoloader file to ensure that dependency libraries can be correctly loaded.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the description of command line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region in which the bucket is located. This parameter is required.
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint that other services can use to access OSS. This parameter is optional.
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The name of the bucket. This parameter is required.
];

// Convert the argument description to the long option format required by getopt.
// A colon (:) after each argument indicates that the argument requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command line arguments.
$options = getopt("", $longopts);

// Check whether the required arguments are specified.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information of the argument.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is not specified, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region in which the bucket is located.
$bucket = $options["bucket"]; // The name of the bucket.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region in which the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a DoMetaQueryRequest object to perform a metadata query operation.
$request = new \AlibabaCloud\Oss\V2\Models\DoMetaQueryRequest(
    bucket: $bucket,
    metaQuery: new \AlibabaCloud\Oss\V2\Models\MetaQuery(
        maxResults: 5, // The maximum number of results to return.
        query: "{'Field': 'Size','Value': '1048576','Operation': 'gt'}", // Query condition: objects whose size is greater than 1 MB.
        sort: 'Size', // Sort by object size.
        order: \AlibabaCloud\Oss\V2\Models\MetaQueryOrderType::ASC, // Sort in ascending order.
        aggregations: new \AlibabaCloud\Oss\V2\Models\MetaQueryAggregations( // Aggregate operation
            aggregations: [
                new \AlibabaCloud\Oss\V2\Models\MetaQueryAggregation(
                    field: 'Size', // The object size field.
                    operation: 'sum' // Aggregate operation: sum.
                ),
                new \AlibabaCloud\Oss\V2\Models\MetaQueryAggregation(
                    field: 'Size', // The object size field.
                    operation: 'max' // Aggregate operation: maximum value.
                ),
            ]
        )
    )
);

// Perform the metadata query operation.
$result = $client->doMetaQuery($request);

// Print the result of the metadata query.
printf(
    'status code:' . $result->statusCode . PHP_EOL . // The HTTP status code. For example, 200 indicates that the request is successful.
    'request id:' . $result->requestId . PHP_EOL .   // The request ID, which is used to debug or track requests.
    'result:' . var_export($result, true) . PHP_EOL  // The query result, which contains the matched objects and their aggregate data.
);
```

## Use ossutil

You can use the ossutil command-line interface (CLI) to query objects that meet specified conditions using the MetaSearch feature. To install ossutil, see [Install ossutil](/help/en/oss/install-ossutil2#DAS).

The following example shows how to query objects that meet specified conditions in the bucket named `examplebucket`.

```
ossutil api do-meta-query --bucket examplebucket --meta-query "{\"MaxResults\":\"5\",\"Query\":\"{\\\"Field\\\": \\\"Size\\\",\\\"Value\\\": \\\"1048576\\\",\\\"Operation\\\": \\\"gt\\\"}\",\"Sort\":\"Size\",\"Order\":\"asc\",\"Aggregations\":{\"Aggregation\":[{\"Field\":\"Size\",\"Operation\":\"sum\"},{\"Field\":\"Size\",\"Operation\":\"max\"}]}}"
```

For more information about this command, see [do-meta-query](/help/en/oss/developer-reference/do-meta-query).

## **Disable MetaSearch**

-   Disabling MetaSearch does not affect objects already stored in OSS. If you re-enable MetaSearch, the system rescans all existing objects and rebuilds the index. This process takes time, and the duration depends on the number of objects in your bucket.
    
-   Billing stops in the hour after you disable MetaSearch. However, bill generation may be delayed. We recommend that you monitor your bills.
    

## Use the OSS console

Log in to the [OSS console](https://oss.console.alibabacloud.com/). On the Data Indexing page, click **Disable** next to Metadata Management and follow the prompts to confirm the action.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2137441571/p980429.png)

## Use an Alibaba Cloud SDK

## Java

For more code examples, see [MetaSearch using OSS SDK for Java](/help/en/oss/developer-reference/data-indexing-2).

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class CloseMetaQuery {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. 
        // Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call the shutdown method to release associated resources when the OSSClient instance is no longer used.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Disable the MetaSearch feature for the bucket.
            ossClient.closeMetaQuery(bucketName);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            if(ossClient != null){
                ossClient.shutdown();
            }
        }
    }
}
```

## Python

For more code examples, see [MetaSearch](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-python-v2#018d8ebe49hru).

```
import argparse
import alibabacloud_oss_v2 as oss

# Create an ArgumentParser object for processing command-line arguments.
parser = argparse.ArgumentParser(description="close meta query sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    # Parse the command-line arguments.
    args = parser.parse_args()

    # Obtain access credentials from environment variables.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Use the default configuration of the SDK.
    cfg = oss.config.load_default()
    # Set the credential provider to the credential provider obtained from the environment variables.
    cfg.credentials_provider = credentials_provider
    # Set the region in the configuration to the one specified in the command line.
    cfg.region = args.region
    # If a custom endpoint is provided, update the endpoint attribute of the cfg object with the provided endpoint.
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Create an OSS client.
    client = oss.Client(cfg)

    # Call the close_meta_query method to disable the metadata query feature for the specified bucket.
    result = client.close_meta_query(oss.CloseMetaQueryRequest(
            bucket=args.bucket,
    ))

    # Display the HTTP status code and request ID.
    print(f'status code: {result.status_code}, request id: {result.request_id}')

# Call the main function when the script is directly run.
if __name__ == "__main__":
    main()
```

## Go

For more code examples, see [MetaSearch using OSS SDK for Go 2.0](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-go-v2).

```
package main

import (
	"context"
	"flag"    
	"log"    

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"          
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials" 
)

var (
	region     string // Specify a variable to store the region information obtained from the command lines.
	bucketName string // Specify a variable to store the bucket name obtained from the command lines.
)

// The init function is executed before the main function to initialize the program.
func init() {
	// Use a command line parameter to specify the region.
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	// Use a command line parameter to specify the bucket name.
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}


func main() {
	flag.Parse() // Parse command line parameters.

	// Check if the bucket name is specified. If not, the program outputs default parameters and terminates.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required") // Log the error message and terminate the program.
	}

	// Check if the region is specified. If not, the program outputs default parameters and terminates.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required") // Log the error message and terminate the program.
	}

	// Create and configure a client and use environment variables to pass the credential provider and the region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg) // Create a new OSSClient instance.

	// Create a CloseMetaQuery request to disable the metadata management feature for the bucket.
	request := &oss.CloseMetaQueryRequest{
		Bucket: oss.Ptr(bucketName), // Specify the name of the bucket.
	}
	result, err := client.CloseMetaQuery(context.TODO(), request) // Execute the request.
	if err != nil {
		log.Fatalf("failed to close meta query %v", err) // If an error occurs, record the error message and exit the program.
	}

	log.Printf("close meta query result:%#v\n", result)
}
```

## PHP

For more code examples, see [MetaSearch using OSS SDK for PHP 2.0](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-php-v2).

```
<?php

// Import the autoloader file to ensure that dependency libraries can be correctly loaded.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the description of command line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region in which the bucket is located. This parameter is required.
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint that other services can use to access OSS. This parameter is optional.
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The name of the bucket. This parameter is required.
];

// Convert the argument description to the long option format required by getopt.
// A colon (:) after each argument indicates that the argument requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command line arguments.
$options = getopt("", $longopts);

// Check whether the required arguments are specified.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information of the argument.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is not specified, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region in which the bucket is located.
$bucket = $options["bucket"]; // The name of the bucket.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region in which the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a CloseMetaQueryRequest object to disable the retrieval feature for the bucket.
$request = new \AlibabaCloud\Oss\V2\Models\CloseMetaQueryRequest(
    bucket: $bucket
);

// Execute the operation to disable the retrieval feature.
$result = $client->closeMetaQuery($request);

// Print the result of disabling the retrieval feature.
printf(
    'status code:' . $result->statusCode . PHP_EOL . // The HTTP status code. For example, 200 indicates that the request is successful.
    'request id:' . $result->requestId . PHP_EOL     // The request ID, which is used to debug or track requests.
);
```

## Use ossutil

The following sample command shows how to disable the metadata management feature for the bucket named `examplebucket`.

```
ossutil api close-meta-query --bucket examplebucket
```

For more information about this command, see [close-meta-query](/help/en/oss/developer-reference/close-meta-query).

## **Query conditions and output settings**

### **Query conditions**

The following table describes all query conditions. You can set them individually or in combination as needed.

**OSS Metadata Condition**

**Query condition**

**Description**

**Storage Class**

By default, all OSS storage classes are selected: Standard, Infrequent Access (IA), Archive, Cold Archive, and Deep Cold Archive. You can select the storage classes of the objects that you want to display in the query results.

**ACL**

By default, all four access control lists (ACLs) supported by OSS are selected: Inherit from Bucket, Private, Public Read, and Public Read/Write. You can select the ACLs of the objects that you want to display in the query results.

**Object Name**

Supports **Fuzzy Match** and **Equal To**. If you want to display a specific object, such as exampleobject.txt, in the query results, you can match the object in one of the following ways:

-   Select **Equal To**, and then enter the full object name exampleobject.txt.
    
-   Select **Fuzzy Match**, and then enter a prefix or suffix, such as example or .txt.
    
    **Important**
    
    A fuzzy match can hit any character in the object name. For example, if you enter test, the query results will include localfolder/test/.example.jpg and localfolder/test.jpg.
    

**Upload Type**

By default, all four object types supported by OSS are selected. You can select the object types that you want to display in the query results. The object types are described as follows:

-   **Normal**: An object created by a simple upload.
    
-   **Multipart**: An object created by a multipart upload.
    
-   **Appendable**: An object created by an append upload.
    
-   **Symlink**: A symbolic link created for quick access to an object.
    

**Last Modified At**

Specify the **Start Date** and **End Date** of the last modification time for the object. The time is accurate to the second.

**Object Size**

Supports five filter conditions: **Equal To**, **Greater Than**, **Greater Than or Equal To**, **Less Than**, and **Less Than or Equal To**. The file size unit is KB.

**Object Versions**

Only the current version of an object can be queried.

**Object ETag and Tag Condition**

To filter and find objects based on their ETag and tags, enter the ETag or tag information for the objects that you want to display in the query results.

-   ETag supports only an exact match. The ETag must be enclosed in quotation marks. For example: "5B3C1A2E0563E1B002CC607C6689". You can enter multiple ETags, with one ETag per line.
    
-   Specify **Object Etags** as a key-value pair. Both the key and value of an object tag are case-sensitive. For more information about tag rules, see [Object tagging](/help/en/oss/user-guide/object-tagging-8#concept-zxf-jpy-pgb).
    

### Search result settings

You can sort the output results and perform simple statistical analysis.

-   **Object Sort Order**: You can sort by last modified time, object name, or object size in ascending, descending, or default order. You can sort the query results as needed to quickly find the required objects.
    
-   **Data Aggregation**: Supports various output types. You can perform calculations on the query results, such as deduplication, group counting, finding the maximum or minimum value, calculating the average, and summing values. This allows for efficient data analysis and management.
    

## Related API operations

The preceding operations are based on API operations. If your program has high customization requirements, you can directly make REST API requests. If you make REST API requests, you must manually write code to calculate signatures.

For more information about enabling the metadata management feature, see [OpenMetaQuery](/help/en/oss/developer-reference/openmetaquery).

To query objects that meet specified conditions, see [DoMetaQuery](/help/en/oss/developer-reference/dometaquery#concept-2127484).

For more information about disabling the metadata management feature, see [CloseMetaQuery](/help/en/oss/developer-reference/closemetaquery).

## **Billing**

-   MetaSearch fees consist of the following two parts:
    
    -   MetaSearch feature fees
        
        This includes object metadata management fees. You are charged based on the pricing of OSS data indexing. For more information, see [Data indexing fees](/help/en/oss/data-indexing-fees#concept-2134272).
        
    -   API request fees
        
        API request fees are generated during incremental object index updates. You are charged based on the number of API calls. The related API requests are as follows:
        
        **Behavior**
        
        **API**
        
        **Count**
        
        Build an index for objects in a bucket
        
        HeadObject and GetObject
        
        Called once for each object
        
        An object in the bucket has a tag
        
        GetObjectTag
        
        Called once for each object with a tag
        
        An object in the bucket has custom metadata
        
        GetObjectMeta
        
        Called once for each object with custom metadata
        
        A symbolic link object exists in the bucket
        
        GetSymlink
        
        Called once for each symbolic link object
        
        Scan objects in a bucket
        
        ListObjects
        
        Called once for every 1,000 objects scanned
        
        For more information about OSS API request fees, see [Request fees](/help/en/oss/api-operation-calling-fees).
        
-   To stop billing, you must [disable MetaSearch](#32fc1ebef9k8x).
    

## FAQ

### Why does it take a long time to build a data index for a bucket that contains hundreds of millions of objects?

An index can be built for approximately 600 incremental objects per second. You can estimate the time required to build the index based on the number of objects in your bucket.

### **How do I query the total size of objects in a specified prefix or directory?**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Object Management** > **Data Indexing**.
    
4.  Set **Object Name** to Prefix Match and enter `random_files/` as the prefix. Leave the other parameters at their default settings.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1776780571/p976633.png)
    
5.  Click **Search Result Settings**.
    
    -   For **Object Sort Order**, select **Default**.
        
    -   For **Data Aggregation**, select **Object Size** and **Sum**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1776780571/p976634.png)
        
6.  Click **Query Now**. You can view the final statistics, including the total number of objects and their total size in the `random_files/` directory.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1776780571/p976635.png)
    

## **Reference**

MetaSearch supports multiple filter conditions, such as last modified time, storage class, access control list, and object size. If you want to filter objects within a specific time range from many objects in an OSS bucket, see [How to filter files in OSS within a specified time range](/help/en/oss/how-to-filter-files-within-a-specified-time-range-in-oss).
