Infrequent Access (IA), Archive, Cold Archive, and Deep Cold Archive storage classes each have a minimum storage duration. If you delete an object or convert its storage class before that period ends, OSS charges you for the storage usage of objects that are stored for less than the minimum storage duration.

To avoid unexpected charges, check whether an object meets the minimum storage duration requirement before deleting or converting its storage class.

## Minimum storage duration by storage class

**Storage class**

**Minimum storage duration**

**Duration calculated from**

Standard

None

N/A

Infrequent Access (IA)

30 days

Last modified time

Archive

60 days

Last modified time

Cold Archive

180 days

Time when the storage class was converted to Cold Archive

Deep Cold Archive

180 days

Time when the storage class was converted to Deep Cold Archive

**Important**

Two operations trigger early deletion charges: deleting an object and converting its storage class. Check that the object meets the minimum storage duration requirement before either operation.

## Check whether an object meets the minimum storage duration requirement

The following code samples query object metadata using the HeadObject operation and compare the `Last-Modified` or `x-oss-transition-time` header value against the current time. For Cold Archive and Deep Cold Archive objects, the duration is calculated from `x-oss-transition-time` (the time when the storage class was converted), not from `Last-Modified`.

## Python

```
import datetime
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
# Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
# Specify the name of the bucket.
bucket = oss2.Bucket(auth, 'https://oss-cn-hangzhou.aliyuncs.com', 'examplebucket')
# Specify the full path of the single object.
object_names = ['example.txt']

# The mapping between the storage class and the minimum storage duration. Unit: days.
minimum_retention_period = {
    'Standard': 0,
    'IA': 30,
    'Archive': 60,
    'ColdArchive': 180,
    'DeepColdArchive': 180
}

for object_name in object_names:
    object_name = object_name.strip()

    try:
        # Query all object metadata by using the head_object method.
        object_info = bucket.head_object(object_name)

        # Query the storage class and last modified time of the object.
        storage_class = object_info.headers['x-oss-storage-class']
        last_modified = object_info.headers['Last-Modified']

        # Change the last modified time to the datetime object.
        last_modified_time = datetime.datetime.strptime(last_modified, '%a, %d %b %Y %H:%M:%S GMT')

        transition_time_str = object_info.headers.get('x-oss-transition-time')
        transition_time = None
        if storage_class == 'ColdArchive' or storage_class == 'DeepColdArchive':
            if transition_time_str:
                last_modified_time = datetime.datetime.strptime(transition_time_str, "%a, %d %b %Y %H:%M:%S %Z")
            else:
                raise Exception(f"Storage class of '{object_name}': {storage_class}. x-oss-transition-time: {transition_time_str}.")


        # Query the current time.
        current_time = datetime.datetime.now()

        # Calculate the storage duration of the object. Unit: days.
        storage_duration = (current_time - last_modified_time).days

        # Display the object information.
        print(f "Object name: {object_name}")
        print(f "Storage class: {storage_class}")
        print(f "Created at: {last_modified}")
        print(f "Storage duration: {storage_duration} days")

        # Determine whether the object meets the minimum storage duration requirements.
        if storage_class in minimum_retention_period:
            min_retention = minimum_retention_period[storage_class]
            if storage_duration < min_retention:
                days_remaining = min_retention - storage_duration
                print(f"{object_name} does not meet the minimum storage duration requirements. The object needs to be stored for another {days_remaining} days. If you delete the object, you are charged {days_remaining} days of the storage usage for the object that is stored for less than the minimum storage duration.")
            else:
                days_exceeded = storage_duration - min_retention
                print(f"{object_name} meets the minimum storage duration requirements. The object is stored {days_exceeded} days more than the minimum storage duration. You are not charged for the storage usage for the object that is stored for less than the minimum storage duration.")
        else:
            print(f"The storage class of {object_name} is not recognized.")

        print("-" * 40) # The delimiter.

    except Exception as e:
        print(f "An error occurred when I query the metadata of {object_name}: {str(e)}")
        print("-" * 40) # The delimiter
```

## Java

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.common.utils.DateUtil;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.HeadObjectRequest;
import com.aliyuncs.exceptions.ClientException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Demo {

    public static void main(String[] args) throws ClientException {
        // Specify the endpoint of the region in which the bucket is located.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the ID of the region that maps to the endpoint. Example: cn-hangzhou.
        String region = "cn-hangzhou";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket.
        String bucketName = "examplebucket";

        // Create an OSSClient instance.
        // Call the shutdown method to release resources when the OSSClient is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        // Explicitly declare the use of the V4 signature algorithm.
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        // Specify the full path of the object.
        String[] objectNames = {"example.txt"};

        // The mapping between the storage class and the minimum storage duration. Unit: days.
        Map<String, Integer> minimumRetentionPeriod = new HashMap<>();
        minimumRetentionPeriod.put("Standard", 0);
        minimumRetentionPeriod.put("IA", 30);
        minimumRetentionPeriod.put("Archive", 60);
        minimumRetentionPeriod.put("ColdArchive", 180);
        minimumRetentionPeriod.put("DeepColdArchive", 180);

        for (String objectName : objectNames) {
            objectName = objectName.trim();
            try {
                // Query object metadata.
                HeadObjectRequest headObjectRequest = new HeadObjectRequest(bucketName, objectName);
                ObjectMetadata objectMetadata = ossClient.headObject(headObjectRequest);

                // Query the storage class and last modified time of the object.
                String storageClass = String.valueOf(objectMetadata.getObjectStorageClass());
                String lastModifiedStr = objectMetadata.getLastModified().toString();
                Date lastModified = objectMetadata.getLastModified();

                if ("ColdArchive".equals(storageClass) || "DeepColdArchive".equals(storageClass)) {
                    Object transitionTimeObj = objectMetadata.getRawMetadata().get("x-oss-transition-time");
                    String transitionTimeStr = String.valueOf(transitionTimeObj);
                    Date transitionTime = DateUtil.parseRfc822Date(transitionTimeStr);

                    if (transitionTime != null) {
                        lastModified = transitionTime;
                    } else {
                        throw new Exception(Storage class of "Object '" + objectName + '": "+ storageClass
                                + ", x-oss-transition-time" + transitionTimeStr + ". ");
                    }
                }

                // Query the current time.
                Date currentTime = new Date();

                // Calculate the storage duration of the object. Unit: days.
                long storageDuration = (currentTime.getTime() - lastModified.getTime()) / (1000 * 60 * 60 * 24);

                // Display the object information.
                System.out.println("Object name: " + objectName);
                System.out.println("Storage class: " + storageClass);
                System.out.println("Created at: " + lastModifiedStr);
                System.out.println("Storage duration: " + storageDuration + "Day");

                // Determine whether the object meets the minimum storage duration requirements.
                if (minimumRetentionPeriod.containsKey(storageClass)) {
                    int minRetention = minimumRetentionPeriod.get(storageClass);
                    if (storageDuration < minRetention) {
                        int daysRemaining = minRetention - (int) storageDuration;
                        System.out.println(objectName + " does not meet the minimum storage duration requirements. The object needs to be stored for another " + daysRemining + " days. If you delete the object, you are charged"
                                + daysRemining + " days of the storage usage for the object that is stored for less than the minimum storage duration.");
                    } else {
                        int daysExceeded = (int) storageDuration - minRetention;
                        System.out.println(objectName + " meets the minimum storage duration requirements. The object is stored " + daysExceeded + " days more than the minimum storage duration. You are not charged for the storage usage for the object that is stored for less than the minimum storage duration.");
                    }
                } else {
                    System.out.println(The storage class of the objectName + " is not recognized.");
                }
                System.out.println("----------------------------------------"); // The delimiter.
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("An error occurred when I query the metadata of" + objectName + ": " + e.getMessage());
                System.out.println("----------------------------------------"); // The delimiter.
            }
        }

        // Shut down the OSSClient instance.
        ossClient.shutdown();
    }
}
```

### Go

```
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

func main() {
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion("cn-hangzhou").
		WithEndpoint("https://oss-cn-hangzhou.aliyuncs.com")

	client := oss.NewClient(cfg)

	// Specify the full paths of the objects to check.
	objectNames := []string{"example.txt"}

	// Define the minimum storage duration (in days) for each storage class.
	minimumRetentionPeriod := map[string]int{
		"Standard":        0,
		"IA":              30,
		"Archive":         60,
		"ColdArchive":     180,
		"DeepColdArchive": 180,
	}

	// Specify the name of the bucket.
	bucketName := "examplebucket"

	for _, objectName := range objectNames {
		objectName = strings.TrimSpace(objectName)
		if objectName == "" {
			continue
		}

		// Query the object metadata.
		objectInfo, err := client.HeadObject(context.TODO(), &oss.HeadObjectRequest{
			Bucket: oss.Ptr(bucketName),
			Key:    oss.Ptr(objectName),
		})
		if err != nil {
			log.Printf("An error occurred when querying the metadata of %s: %v\n", objectName, err)
			continue
		}

		// Check if storageClass is nil.
		if objectInfo.StorageClass == nil {
			log.Printf("Warning: The storage class of %s is nil. Skipping this object.\n", objectName)
			continue
		}

		storageClass := *objectInfo.StorageClass
		currentTime := time.Now().Unix()

		// Calculate storage duration in days.
		storageDuration := (currentTime - objectInfo.LastModified.Unix()) / (60 * 60 * 24)

		// For Cold Archive and Deep Cold Archive, use transition time if available.
		if storageClass == "ColdArchive" || storageClass == "DeepColdArchive" {
			transitionTimeStr := objectInfo.Headers.Get("x-oss-transition-time")
			if transitionTimeStr != "" {
				transitionTime, err := time.Parse(http.TimeFormat, transitionTimeStr)
				if err != nil {
					log.Printf("Warning: Failed to parse x-oss-transition-time for %s: %v. Using creation time instead.\n", objectName, err)
				} else {
					storageDuration = (currentTime - transitionTime.Unix()) / (60 * 60 * 24)
				}
			}
		}

		// Print object basic information.
		fmt.Printf("Object name: %s\n", objectName)
		fmt.Printf("Storage class: %s\n", storageClass)
		fmt.Printf("Created at: %s\n", objectInfo.LastModified.Format("2006-01-02 15:04:05"))
		fmt.Printf("Storage duration: %d days\n", storageDuration)

		// Check if the minimum storage duration requirement is met.
		minRetention, exists := minimumRetentionPeriod[storageClass]
		if !exists {
			fmt.Printf("The storage class of %s is not recognized.\n", objectName)
			fmt.Println("----------------------------------------")
			continue
		}

		if minRetention == 0 {
			// Standard storage class has no minimum storage duration requirement.
			fmt.Printf("%s uses the Standard storage class, which has no minimum storage duration requirement. You can delete the object without incurring charges for insufficient storage duration.\n", objectName)
		} else {
			daysRemaining := minRetention - int(storageDuration)
			if daysRemaining > 0 {
				// The object has not met the minimum storage duration requirement.
				fmt.Printf("%s does not meet the minimum storage duration requirement. The object needs to be stored for another %d days. If you delete the object now, you are charged for %d days of storage usage for the object that is stored for less than the minimum storage duration.\n",
					objectName, daysRemaining, daysRemaining)
			} else {
				// The object has met the minimum storage duration requirement.
				fmt.Printf("%s has met the minimum storage duration requirement (stored for %d days, required %d days). You can delete the object without incurring charges for insufficient storage duration.\n",
					objectName, int(storageDuration), minRetention)
			}
		}

		fmt.Println("----------------------------------------")
	}
}
```

### PHP

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\Credentials\EnvironmentVariableCredentialsProvider;
use OSS\OssClient;
use OSS\Core\OssException;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
$endpoint = 'http://oss-cn-hangzhou.aliyuncs.com';
// Specify the name of the bucket.
$bucketName = 'examplebucket';

// Create an OSSClient instance.
try {
    // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
    $provider = new EnvironmentVariableCredentialsProvider();
    $config = array(
        "provider" => $provider,
        "endpoint" => $endpoint,
    );
    $ossClient = new OssClient($config);
	// Specify the full path of the object.
    $objectNames = ['example.txt'];
    $minimumRetentionPeriod = [
        'Standard' => 0,
        'IA' => 30,
        'Archive' => 60,
        'ColdArchive' => 180,
        'DeepColdArchive' => 180,
    ];

    foreach ($objectNames as $objectName) {
        $objectName = trim($objectName);
        try {
            // Query all metadata of an object by using the headObject method.
            $objectInfo = $ossClient->getObjectMeta($bucketName, $objectName);

            // Query the storage class and last modified time of the object.
            $storageClass = $objectInfo['x-oss-storage-class'];
            $lastModified = $objectInfo['last-modified'];

            // Convert the last modified time of the object to a timestamp.
            $lastModifiedTime = strtotime($lastModified);

            if (in_array($storageClass, array("ColdArchive", "DeepColdArchive")) && isset($objectInfo["x-oss-transition-time"])) {
                $lastModifiedTime = strtotime($objectInfo["x-oss-transition-time"]);
            }

            // Query the current time.
            $currentTime = time();

            // Calculate the storage duration of the object. Unit: days.
            $storageDuration = floor(($currentTime - $lastModifiedTime) / (60 * 60 * 24));

            // Display the object information.
            echo "Object name: $objectName\n";
            echo "Storage class: $storageClass\n";
            echo "Created at: $lastModified\n";
            echo "Storage duration: $storageDuration days\n";

            // Determine whether the object meets the minimum storage duration requirements.
            if (isset($minimumRetentionPeriod[$storageClass])) {
                $minRetention = $minimumRetentionPeriod[$storageClass];
                if ($storageDuration < $minRetention) {
                    $daysRemaining = $minRetention - $storageDuration;
                    echo "$objectName does not meet the minimum storage duration requirements. The object needs to be stored for another $daysRemaining days. If you delete the object, you are charged $daysRemaining days of the storage usage for the object that is stored for less than the minimum storage duration. \n";
                } else {
                    $daysExceeded = $storageDuration - $minRetention;
                    System.out.println(echo "$objectName meets the minimum storage duration requirements. The object is stored $daysExceeded days more than the minimum storage duration. You are not charged for the storage usage for the object that is stored for less than the minimum storage duration. \n";
                }
            } else {
                The storage class of echo "$objectName is not recognized. \n";
            }
            echo str_repeat("-", 40) . "\n"; // The delimiter.
        } catch (OssException $e) {
            echo "An error occurred when I query the metadata of $objectName: " . $e->getMessage() . "\n";
            echo str_repeat("-", 40) . "\n"; // The delimiter.
        }
    }
} catch (OssException $e) {
    printf(__FUNCTION__ . ": FAILED\n");
    printf($e->getMessage() . "\n");
    return;
}
```

### Node.js

```
const OSS = require("ali-oss");

// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
const config = {
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to oss-cn-hangzhou.
  region: "oss-cn-hangzhou",
  // Specify the name of the bucket.
  bucket: "examplebucket",
};
const client = new OSS(config);

// The mapping between the storage class and the minimum storage duration. Unit: days.
const minimum_retention_period = {
  Standard: 0,
  IA: 30,
  Archive: 60,
  ColdArchive: 180,
  DeepColdArchive: 180,
};

// Calculate the time difference in days.
function getDays(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    throw new Error("Need to pass valid Date objects");
  }
  const timestamp1 = date1.getTime();
  const timestamp2 = date2.getTime();
  const diffInMilliseconds = Math.abs(timestamp2 - timestamp1);
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.round(diffInDays);
}

// Specify the full path of the object.
const object_names = ["example.jpg"];

(async () => {
  for (const object_name of object_names) {
    try {
      // Query all metadata of the object by using the head method.
      const object_info = await client.head(object_name);
      const { headers } = object_info.res;

      // Query the storage class and last modified time of the object.
      const storage_class = headers["x-oss-storage-class"];
      const last_modified = headers["last-modified"];

      let last_modified_time = new Date(last_modified);
      const transition_time_str = headers["x-oss-transition-time"];
      if (["ColdArchive", "DeepColdArchive"].includes(storage_class)) {
        if (transition_time_str)
          last_modified_time = new Date(transition_time_str);
        else {
          const errorStr = Storage class of 'Object '${object_name}': ${storage_class}. x-oss-transition-time: ${transition_time_str}. x-oss-transition-time is available only for objects whose storage class is converted to Cold Archive or Deep Cold Archive based on lifecycle rules.
          throw new Error(errorStr);
        }
      }

      const current_time=new Date(); // Query the current time.
      const storage_duration=getDays (current_time, last_modified_time); // Calculate the storage duration of the object. Unit: days.
      // Display the object information.
      console.log ('Object name: ${object_name}');
      console.log ('Storage class: ${storage_class}');
      console.log ('Created at: ${last_modified}');
      console.log ('Storage duration: ${storage_duration} days ');

      // Determine whether the object meets the minimum storage duration requirements.
      if (Object.keys(minimum_retention_period).includes(storage_class)) {
        min_retention = minimum_retention_period[storage_class];
        if (storage_duration < min_retention) {
          const days_remaining = min_retention - storage_duration;
          console.log(
            '${object_name} does not meet the minimum storage duration requirements. The object needs to be stored for another ${days_remaining} days. If you delete the object, you are charged ${days_remaining} days of the storage usage for the object that is stored for less than the minimum storage duration. `
          );
        } else {
          const days_exceeded = storage_duration - min_retention;
          console.log(
            '${object_name} meets the minimum storage duration requirements. The object is stored ${days_exceeded} days more than the minimum storage duration. You are not charged for the storage usage for the object that is stored for less than the minimum storage duration. `
          );
        }
      } else console.log(The storage class of the '${object_name} is not recognized. `);
    } catch (e) {
      console.log ('An error occurred when I query the metadata of ${object_name}:', e);
    }
  }
})();
```

## Check minimum storage duration for multiple objects

To check multiple objects at once, use the [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects), [ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions), or [ListBucketInventory](/help/en/oss/developer-reference/listbucketinventory) operations to retrieve object metadata in bulk.
