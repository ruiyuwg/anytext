The Object Storage Service (OSS) retention policy, also known as Write Once Read Many (WORM), makes data immutable, preventing it from being modified or deleted by any user, including the bucket owner. During the retention period, you can only upload and read objects. Objects can be modified or deleted only after the retention period expires.

## Use cases

WORM helps enterprises meet the regulatory and compliance requirements of the U.S. Securities and Exchange Commission (SEC) and the Financial Industry Regulatory Authority (FINRA). This feature is suitable for sectors such as finance, insurance, healthcare, and securities, and for scenarios such as Multi-Layer Protection Scheme (MLPS) audits of log data.

**Note**

OSS is accredited and audited by Cohasset Associates and meets the stringent requirements for the retention of electronic records. OSS buckets with configured retention policies comply with regulations, such as SEC Rule 17a-4(f), FINRA Rule 4511, and Commodity Futures Trading Commission (CFTC) Rule 1.31. For more information, see the [OSS Cohasset Assessment Report](https://gosspublic.alicdn.com/OSSCohassetAssessmentReport.pdf).

## **Prerequisites**

Ensure that versioning is either enabled or disabled for the bucket where you want to set a retention policy. You cannot set a retention policy if versioning is suspended. For more information about versioning, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

## Usage notes

-   You can configure retention policies only for buckets.
    
-   You cannot enable OSS-HDFS and configure a retention policy for the same bucket.
    
-   During the retention period, you can [configure lifecycle rules](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db) to change the storage classes of objects in the bucket to reduce storage costs and ensure compliance.
    

## Retention policy description

-   Implementation
    
    After creation, a retention policy enters a 24-hour InProgress state. During this time, the data is protected, but the policy itself can be modified or deleted.
    
    -   Within 24 hours after the retention policy is created
        
        -   If the retention policy is not locked, the bucket owner and authorized users can delete the policy.
            
        -   If the retention policy is locked, the policy cannot be deleted and its retention period cannot be shortened. However, the retention period can be extended. Data in the bucket is protected by the retention policy. If you attempt to delete or modify data in the bucket, the `409 FileImmutable` error is returned.
            
    -   More than 24 hours after the retention policy is created
        
        If a policy is not locked within this 24-hour window, it automatically expires and becomes invalid.
        
-   Deletion
    
    -   A time-based retention policy is a metadata attribute of a bucket. If a bucket is deleted, the retention policy of the bucket is also deleted.
        
    -   If the retention policy is not locked within 24 hours after the policy is created, the bucket owner and authorized users can delete the policy.
        
    -   If a bucket contains objects that are protected by the retention policy, you cannot delete the bucket or the retention policy.
        
-   Example
    
    Suppose you create a retention policy with a 30-day retention period for a bucket on June 1, 2022, and lock the policy immediately. You upload three objects, file1.txt, file2.txt, and file3.txt, at different times. The following table lists the upload dates and expiration dates of the objects.
    
    **Object name**
    
    **Upload date**
    
    **Expiration date**
    
    file1.txt
    
    April 1, 2022
    
    April 30, 2022
    
    file2.txt
    
    June 1, 2022
    
    June 30, 2022
    
    file3.txt
    
    September 1, 2022
    
    September 30, 2022
    

## **Methods**

### **Use the OSS console**

1.  Create a retention policy.
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
        
    2.  Click **Buckets**, and then click the name of the destination bucket.
        
    3.  In the navigation pane on the left, choose **Content Security** > **Retention Policy**.
        
    4.  On the **Retention Policy** page, click **Create Policy**.
        
    5.  In the **Create Policy** dialog box, specify a **Retention Period**.
        
        **Note**
        
        The retention period is measured in days. Valid values: 1 to 25,550.
        
    6.  Click **OK**.
        
        **Note**
        
        The policy state is InProgress. This state is valid for 24 hours. During this period, the bucket's resources are protected. If you decide not to keep the policy, delete it within 24 hours.
        
2.  Lock the retention policy.
    
    1.  Click **Lock**.
        
    2.  In the dialog box that appears, click **OK**.
        
        **Important**
        
        After a retention policy is locked, you cannot modify or delete it. You also cannot modify or delete data in the bucket during the retention period.
        
3.  (Optional) Modify the retention period.
    
    1.  Click **Edit**.
        
    2.  In the dialog box that appears, modify the retention period.
        
        **Important**
        
        You can only extend the retention period. You cannot shorten it.
        

### **Use OSS SDKs**

The following sample code provides examples of how to configure retention policies using OSS SDKs for common programming languages. For more information about sample code for other programming languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

#### **Java**

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.InitiateBucketWormRequest;
import com.aliyun.oss.model.InitiateBucketWormResult;

public class Demo {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSSClient instance. 
        // Call the shutdown method to release resources when the OSSClient is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Create an InitiateBucketWormRequest object. 
            InitiateBucketWormRequest initiateBucketWormRequest = new InitiateBucketWormRequest(bucketName);
            // Set the retention period to 1 day. 
            initiateBucketWormRequest.setRetentionPeriodInDays(1);

            // Create a retention policy. 
            InitiateBucketWormResult initiateBucketWormResult = ossClient.initiateBucketWorm(initiateBucketWormRequest);

            // Display the ID of the retention policy. 
            String wormId = initiateBucketWormResult.getWormId();
            System.out.println(wormId);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

#### **PHP**

```
<?php

// Introduce autoload files to load dependent libraries.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Specify descriptions for command line parameters.
$optsdesc = [
    "region" => ['help' => The region in which the bucket is located.', 'required' => True], // (Required) Specify the region in which the bucket is located.
    "endpoint" => ['help' => The domain names that other services can use to access OSS', 'required' => False], // (Optional) Specify the endpoint that can be used by other services to access OSS.
    "bucket" => ['help' => The name of the bucket, 'required' => True], // (Required) Specify the name of the bucket.
];

// Generate a long options list to parse the command line parameters.
$longopts = \array_map(function ($key) {
    return "$key:"; // Add a colon (:) to the end of each parameter to indicate that a value is required.
}, array_keys($optsdesc));

// Parse the command line parameters.
$options = getopt("", $longopts); 

// Check whether the required parameters are configured.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help'];
        echo "Error: the following arguments are required: --$key, $help"; // Specify that the required parameters are not configured.
        exit(1); 
    }
}

// Obtain the values of the command line parameters.
$region = $options["region"]; // The region in which the bucket is located.
$bucket = $options["bucket"]; // The name of the bucket.

// Use environment variables to load the AccessKey ID and AccessKey secret.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();

// Specify the credential provider.
$cfg->setCredentialsProvider($credentialsProvider);

// Specify the region.
$cfg->setRegion($region);

// Specify the endpoint if an endpoint is provided.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

// Create an OSSClient instance.
$client = new Oss\Client($cfg);

// Create an InitiateBucketWormRequest object to create a retention policy for the bucket and set the retention period of the retention policy to three days.
$request = new Oss\Models\InitiateBucketWormRequest(
    bucket: $bucket, 
    initiateWormConfiguration: new Oss\Models\InitiateWormConfiguration(
        retentionPeriodInDays: 3 // Set the retention period to three days.
));

// Use the initiateBucketWorm method to create a retention policy for the bucket.
$result = $client->initiateBucketWorm($request);

// Display the returned result.
printf(
    'status code:' . $result->statusCode . PHP_EOL . // The returned HTTP status code.
    'request id:' . $result->requestId . PHP_EOL . // The request ID of the request, which is the unique identifier of the request.
    'worm id:' . $result->wormId // The ID of the retention policy.
);
```

#### **Node.js**

```
const OSS = require('ali-oss');

const client = new OSS({
  // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to oss-cn-hangzhou. 
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,  
  authorizationV4: true,
  // Specify the name of your bucket.
  bucket: 'yourBucketName',
});
// Create a retention policy. 
async function initiateBucketWorm() {
 // Specify the name of the bucket. 
  const bucket = 'yourbucketname'
  // Specify the retention period of the retention policy. 
  const days = '<Retention Days>'
    const res = await client.initiateBucketWorm(bucket, days)
  console.log(res.wormId)
}

initiateBucketWorm()
```

#### **Python**

```
import argparse
import alibabacloud_oss_v2 as oss

# Create a command line parameter parser and describe the purpose of the script. The example describes how to use the Write Once Read Many (WORM) feature to create a retention policy for a bucket.
parser = argparse.ArgumentParser(description="initiate bucket worm sample")

# Specify the --region parameter, which specifies the region in which the bucket is located. This command line parameter is required.
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
# Specify the --bucket parameter, which specifies the name of the bucket. This command line parameter is required.
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
# Specify the --endpoint parameter, which specifies the endpoint of the region in which the bucket is located. This command line parameter is optional.
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')
# Specify the --retention_period_in_days parameter, which specifies the number of days for which objects can be retained. This command line parameter is required.
parser.add_argument('--retention_period_in_days', help='The number of days for which objects can be retained.', required=True)

def main():
    # Parse the command line parameters to obtain the values specified by the user.
    args = parser.parse_args()

    # Load the authentication information required to access OSS from the environment variables.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Use the default configurations of the SDK to create a configuration object and specify the credential provider.
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region

    # If a custom endpoint is provided, modify the endpoint parameter in the configuration object.
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Use the preceding configurations to initialize the OSSClient instance and allow the instance to interact with OSS.
    client = oss.Client(cfg)

    # Send a request to create a retention policy for the bucket.
    result = client.initiate_bucket_worm(oss.InitiateBucketWormRequest(
        bucket=args.bucket, # The name of the bucket.
        initiate_worm_configuration=oss.InitiateWormConfiguration(
            retention_period_in_days=int(args.retention_period_in_days), # The number of days for which objects can be retained. Set the value to an integer.
        ),
    ))

    # Display the HTTP status code of the operation, request ID, and retention policy ID to check the request status.
    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
          f' worm id: {result.worm_id}'
    )

# Call the main function to start the processing logic when the script is directly run.
if __name__ == "__main__":
    main() # Specify the entry points in the functions of the script. The control program flow starts here.
```

#### **Go**

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Error creating credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the Endpoint of the bucket. For example, for the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, use the actual Endpoint.
	// Set yourRegion to the region where the bucket is located. For example, for the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, use the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Error creating OSS client: %v", err)
	}

	// Specify the name of the bucket for which you want to configure a retention policy.
	bucketName := "<yourBucketName>"

	// Set the retention period for objects to 60 days.
	result, err := client.InitiateBucketWorm(bucketName, 60)
	if err != nil {
		log.Fatalf("Error initiating bucket WORM: %v", err)
	}

	log.Println("WORM policy initiated successfully:", result)
}
```

#### **C++**

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize information about the account that is used to access OSS. */
            
    /* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the name of the bucket. Example: examplebucket. */
    std::string BucketName = "examplebucket";

      /* Initialize resources, such as network resources. */
      InitializeSdk();

      ClientConfiguration conf;
      conf.signatureVersion = SignatureVersionType::V4;
      /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);
  
      /* Create a retention policy and set the retention period to 1 day. */
      auto outcome = client.InitiateBucketWorm(InitiateBucketWormRequest(BucketName, 1));

      if (outcome.isSuccess()) {      
            std::cout << " InitiateBucketWorm success " << std::endl;
            std::cout << "WormId:" << outcome.result().WormId() << std::endl;
      }
      else {
        /* Handle exceptions. */
        std::cout << "InitiateBucketWorm fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
      }

      /* Release resources, such as network resources. */
      ShutdownSdk();
      return 0;
}
```

### **Use ossutil**

Use ossutil to create a WORM policy. For more information, see [Install ossutil](/help/en/oss/install-ossutil2#DAS).

The following command creates a new WORM policy in the `examplebucket` and sets the retention period to 365 days.

```
ossutil api initiate-bucket-worm --bucket examplebucket --initiate-worm-configuration "{\"RetentionPeriodInDays\":\"365\"}"
```

For more information about this command, see [initiate-bucket-worm](/help/en/oss/developer-reference/initiate-bucket-worm).

## Related API

The preceding operations are based on API operations. If your program has high customization requirements, you can directly make REST API requests. To make REST API requests, you must manually write code to calculate signatures. For more information, see [InitiateBucketWorm](/help/en/oss/developer-reference/initiatebucketworm#reference-2536872).

## Working with versioning

For use cases like protecting backups (such as Veeam), tracking asset modifications, or meeting financial compliance, you often need to allow data updates while making all historical versions immutable. To achieve this, enable both a retention policy and versioning on your bucket. Versioning retains old versions when an object is overwritten or deleted, rather than permanently erasing them. The retention policy then applies a protection period to all versions, making them unchangeable and non-deletable.

When versioning and retention policies are configured to work together, they follow these principles:

-   **Order of enabling features**: There are no constraints on the order in which you enable versioning and retention policies. Configure them flexibly as needed.
    
-   **State transition constraints**:
    
    -   After a retention policy is locked, you cannot change the versioning state from Enabled to Suspended.
        
    -   You can enable a retention policy for a bucket whose versioning is Suspended. After the policy is enabled, you can change the versioning state to Enabled.
        
-   **Object version protection mechanism**:
    
    -   A retention policy protects all versions of an object. No version can be deleted or modified during the protection period.
        
    -   You can upload an object with the same name to create a new version. The new version is also protected by the retention policy.
        
    -   Retention policies do not apply to delete markers. The deletion of delete markers is not restricted by retention policies.
        
-   **Data replication synergy**:
    
    -   Both the source and destination buckets support independent configurations for versioning and retention policies.
        
    -   Version information is transmitted normally during replication. The destination bucket manages versions based on its own configuration.
        
    -   Version deletion operations in the source bucket are not synchronized to a destination bucket that has a retention policy enabled.
        

## FAQ

### How are object deletion operations handled when a retention policy and versioning are enabled at the same time?

When a retention policy and versioning are enabled at the same time, deleting an object has the following effects:

-   The deletion operation creates a delete marker but does not physically delete the historical versions of the object.
    
-   The retention policy does not protect delete markers. Delete markers can be deleted.
    
-   All object versions cannot be deleted during the retention policy's protection period, even if a delete marker exists.
    
-   Lifecycle management can delete dangling delete markers, but it cannot delete object versions protected by a retention policy.
    

### After a retention policy is enabled, can the versioning state still be modified?

After a retention policy is enabled, the following constraints apply to modifying the versioning state:

-   **Enabled to Suspended**: If the versioning state is "Enabled", you cannot change it to "Suspended" after the retention policy is locked.
    
-   **Suspended to Enabled**: If the versioning state is "Suspended", you can still change it to "Enabled" after enabling the retention policy.
    
-   **Disabled to Enabled**: For a bucket with versioning disabled, you can enable versioning after you configure a retention policy.
    

### Does using a retention policy with versioning increase storage costs?

This incurs the following additional storage costs:

-   All object versions are retained during the retention policy's protection period and cannot be deleted by lifecycle rules.
    
-   The accumulation of versions can lead to a significant increase in storage usage, especially for frequently updated objects.
    
-   Set a reasonable retention period for the retention policy and use lifecycle rules to manage storage class transitions to optimize costs.
    

### **What are the benefits of a retention policy?**

A retention policy provides secure and compliant data storage. Within the retention period of a retention policy, data cannot be modified or deleted. If you use Resource Access Management (RAM) policies and bucket policies to protect data, data can still be modified or deleted.

### **In what scenarios do I need a retention policy?**

Configure a retention policy for a bucket if you want to store important data, such as medical records, technical documents, and contracts, for a long period and prevent the data from being modified or deleted.

### **Can I delete a retention policy?**

It depends on the status of the retention policy.

-   Not locked: The bucket owner and authorized users can delete the policy.
    
-   Locked: No one can delete the policy.
    

### Can I configure a retention policy for an object?

No. You can configure retention policies only for buckets, not for directories or individual objects.

### How do I calculate the retention time of an object**?**

The retention expiration time is calculated based on the last modified time of the object and the retention period of the retention policy. For example, if a bucket has a retention policy of 10 days and an object in the bucket was last modified on February 15, 2022, the object is retained until February 25, 2022.

### **How do I delete a bucket that has a retention policy?**

-   If an object is not stored, delete it directly.
    
-   If the bucket contains objects and their protection period has expired, you must first delete all objects before deleting the bucket.
    
-   You cannot delete an object during its protection period.
    

### If my account has an overdue payment, are my WORM-protected objects safe?

No. If your account has an overdue payment, all data may be deleted according to Alibaba Cloud's [service suspension rules for overdue payments](/help/en/oss/overdue-payments), regardless of any retention policy.

### Can an authorized RAM user configure a retention policy?

Yes. Retention policy APIs are available and support RAM policies. An authorized RAM user can create or delete a retention policy in the console or using APIs or SDKs.
