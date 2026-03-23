Tracking which objects are genuinely cold is hard when storage grows into the billions. Lifecycle rules based on last access time solve this by monitoring how recently each object was accessed and automatically moving cold data to lower-cost storage—without log analysis or manual intervention. Enable access tracking on your bucket, configure a rule, and OSS handles the rest.

## How it works

After you enable access tracking, OSS records a `LastAccessTime` for every object. When a lifecycle rule runs, it checks `LastAccessTime` and transitions objects that haven't been accessed within the specified number of days.

**Storage class transitions**

Objects move down the storage tier hierarchy as they become less active:

**Transition**

**Trigger**

**Automatic return to Standard on access?**

Standard → Infrequent Access (IA)

N days since last access

Optional (configurable)

Standard or IA → Archive

N days since last access

No

Standard or IA → Cold Archive

N days since last access

No

Standard or IA → Deep Cold Archive

N days since last access

No

Archive → Cold Archive

N days since last access

No

Archive → Deep Cold Archive

N days since last access

No

The Standard → IA transition is unique: you can configure whether the object automatically reverts to Standard when accessed again, or stays in IA.

**Important**

Transitions to Archive, Cold Archive, or Deep Cold Archive require permission. [Submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to apply before creating such rules.

**How \`LastAccessTime\` is tracked**

-   When you enable access tracking, `LastAccessTime` is initialized to the current timestamp for all existing objects.
    
-   Object downloads and overwrites update `LastAccessTime`. For the full list of operations that do and do not update `LastAccessTime`, see [How do common operations affect LastAccessTime of objects?](/help/en/oss/user-guide/which-operations-update-the-lastaccestime-of-an-object-and-which-operations-do-not-update-the-lastaccestime-of-an-object#main-2300726)
    
-   `LastAccessTime` is updated asynchronously, typically within 24 hours.
    
-   If an object is accessed multiple times within a 24-hour window, only the first access updates `LastAccessTime`.
    
-   If an object is never accessed after you enable tracking, its `LastAccessTime` remains the initialization timestamp (the time you enabled tracking). Lifecycle rules apply based on that timestamp.
    

**When rules run**

OSS loads a new lifecycle rule within 24 hours of creation. After loading, OSS runs the rule every day at 08:00:00 (UTC+8). Transitions are typically completed within 24 hours, with these object count limits:

-   China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and Singapore: up to 1 billion objects
    
-   All other regions: up to 100 million objects
    

Under heavy load—large object counts, many tags, numerous versions, or high write volume—rule execution can take several days to several weeks.

> When versioning is enabled, each object version counts separately toward the limit.

## Use cases

-   **Multimedia hosting**: Store images and videos in Standard for fresh content, then automatically transition older, rarely accessed files to IA. Frequently accessed content stays in Standard; only cold data transitions.
    
-   **Photo albums and network drives**: Keep all data accessible in real time, but reduce storage costs for inactive content by moving it to IA automatically after a defined number of days.
    
-   **Life science and genomics**: Gene sequencing generates large volumes of data whose activity is better measured by access time than by creation time. Access-time lifecycle rules automatically identify and tier cold data without manual log analysis. For finer control, combine access-time policies and last-modified-time policies in the same rule.
    

## Limitations

**Constraint**

**Details**

**No deletion**

Lifecycle rules based on last access time cannot delete objects.

**Matching conditions**

Rules match on prefixes and tags only. Wildcard, suffix, and regex matching are not supported.

**Overlapping part policies**

Two lifecycle rules that both contain a part expiration policy cannot have overlapping prefixes. For example, if one rule with a part policy applies to the whole bucket, you cannot add another rule with a part policy for any prefix in that bucket.

**Maximum rules per bucket**

1,000 lifecycle rules per bucket. A single rule can combine last-modified-time and last-access-time policies.

## Billing

**Object monitoring and management fees**

After you enable access tracking, OSS generates object monitoring and management fees. These fees are not charged.

**IA minimum storage duration**

IA objects have a 30-day minimum storage duration. If an IA object is transitioned away before 30 days, you are charged for the remainder:

-   \*Example 1:\* OSS converts an object to IA 10 days after creation, then converts it back to Standard 5 days later. You are charged for 15 days of IA storage (the shortfall to 30 days).
    
-   \*Example 2:\* OSS converts an object to IA 10 days after creation, then deletes it after 15 more days. You are charged for 5 days of IA storage (the shortfall to 30 days).
    

For more information, see [Storage fees](/help/en/oss/storage-fees).

**Data retrieval fees**

Accessing IA objects incurs retrieval fees based on the amount of data retrieved. See [Data processing fees](/help/en/oss/data-processing-fees).

**API operation fees**

Storage class transitions via lifecycle rules incur API operation fees. See [API operation calling fees](/help/en/oss/api-operation-calling-fees).

## Usage notes

**Overwrite semantics**

`PutBucketLifecycle` replaces all existing lifecycle rule configurations for a bucket. To add a rule without losing existing rules:

1.  Call `GetBucketLifecycle` to retrieve all existing rules.
    
2.  Add the new rule to the retrieved configuration.
    
3.  Call `PutBucketLifecycle` with the complete updated configuration.
    

**OSS-HDFS buckets**

If OSS-HDFS is enabled on the bucket, use the NOT element to exclude objects in the `.dlsdata/` directory. Without this exclusion, the lifecycle rule may apply to OSS-HDFS data and disrupt read/write operations.

![Lifecycle rule configuration for OSS-HDFS buckets showing NOT element excluding .dlsdata/ directory](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9405172171/p669410.jpeg)

**Archive transitions and last access time**

After a lifecycle rule moves an object from Standard or IA to Archive, Cold Archive, or Deep Cold Archive, the object's `LastAccessTime` is set to the time when access tracking was enabled for the bucket—not the time of the transition.

## Create a lifecycle rule

### Prerequisites

Before you begin, make sure that you have:

-   An OSS bucket
    
-   For transitions to Archive, Cold Archive, or Deep Cold Archive: approved access (submit a ticket first)
    

### **Use the OSS console**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Data Management** > **Lifecycle**.
    
4.  On the **Lifecycle** page, turn on **Enable Access Tracking**, then click **Create Rule**.
    
5.  In the **Create Rule** panel, configure the parameters. **Parameters specific to versioned buckets** Configure **Basic Settings** and **Policy for Parts** the same way as for unversioned buckets. The following parameters differ:
    
    **Parameters for unversioned buckets**
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Basic Settings**
    
    **Status**
    
    Set to **Enabled** to activate the rule, or **Disabled** to pause it.
    
    **Basic Settings**
    
    **Applied To**
    
    Select **Objects with Specified Prefix** to target objects by prefix, or **Whole Bucket** to apply the rule bucket-wide.
    
    **Basic Settings**
    
    **Allow Overlapped Prefixes**
    
    By default, OSS rejects rules with overlapping prefixes. Select this option to allow overlap. For example, if Rule 1 applies to `dir1/` and Rule 2 applies to `dir1/dir2/`, selecting this option lets both rules coexist. Objects in `dir1/dir2/` match Rule 2; other objects in `dir1/` match Rule 1.
    
    **Basic Settings**
    
    **Prefix**
    
    The prefix that object names must match. For example, `img` matches `imgtest.png` and `img/example.jpg`; `img/` matches only objects under that path.
    
    **Basic Settings**
    
    **Tag**
    
    Restrict the rule to objects with specific tags. Tags are combined with the prefix as an AND condition.
    
    **Basic Settings**
    
    **NOT**
    
    Exclude objects with the specified prefix and tag from the rule. At least one of Prefix or Tag must be set when NOT is enabled. The NOT tag key cannot duplicate the Tag key. Rules with NOT cannot include part expiration policies.
    
    **Basic Settings**
    
    **Object Size**
    
    Apply the rule only to objects within a size range. **Minimum Size** must be greater than 0 B and less than 5 TB; **Maximum Size** must be greater than 0 B and up to 5 TB, and must exceed Minimum Size. Rules with both size constraints cannot include part expiration policies or delete-marker removal.
    
    **Policy for Objects**
    
    **Object Lifecycle**
    
    Configure object expiration: **Validity Period (Days)**, **Expiration Date**, or **Disabled** (no expiration).
    
    **Policy for Objects**
    
    **Lifecycle-based Rules**
    
    Select the target storage class for the transition. Options: **IA (Not Converted After Access)**, **IA (Converted to Standard After Access)**, **Archive**, **Cold Archive**, **Deep Cold Archive**. For example, if you select **Access Time**, set **Validity Period** to 30, and choose **IA (Not Converted After Access)**, objects last accessed on September 1, 2021 transition to IA on October 1, 2021.
    
    **Policy for Parts**
    
    **Part Lifecycle**
    
    Set part expiration: **Validity Period (Days)**, **Expiration Date**, or **Disabled**. Unavailable when Tag is enabled. A rule must include at least one of an object policy or a part policy.
    
    **Policy for Parts**
    
    **Rules for Parts**
    
    The validity period or expiration date for parts. Expired parts are deleted and cannot be recovered.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Policy for Current Versions**
    
    **Removal of Delete Marker**
    
    If an object's only remaining version is a delete marker, OSS treats the marker as expired and removes it. If an object has multiple versions and the current version is a delete marker, OSS retains the marker.
    
    **Policy for Previous Versions**
    
    **Object Lifecycle**
    
    Set expiration for noncurrent versions: **Validity Period (Days)** or **Disabled**.
    
    **Policy for Previous Versions**
    
    **Lifecycle-based Rules**
    
    The number of days after an object becomes a noncurrent version before it is moved to the specified storage class. The transition date is calculated from when the next version was created. For example, if set to 30, an object that became a noncurrent version on September 1, 2021 transitions on October 1, 2021.
    
6.  Click **OK**.
    

The rule appears in the lifecycle rule list.

### **Use OSS SDKs**

Only OSS SDK for Java and OSS SDK for Go support creating lifecycle rules based on last access time. Enable access tracking on the bucket before creating the rule.

For the full SDK reference and additional language examples, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

## Java

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Replace with your actual endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            // Enable access tracking on the bucket.
            ossClient.putBucketAccessMonitor(bucketName, AccessMonitor.AccessMonitorStatus.Enabled.toString());

            List<LifecycleRule> lifecycleRuleList = new ArrayList<LifecycleRule>();
            SetBucketLifecycleRequest setBucketLifecycleRequest = new SetBucketLifecycleRequest(bucketName);

            // Rule 1: Transition objects with the "logs" prefix to IA 30 days after last access.
            // Objects remain in IA when accessed again (ReturnToStdWhenVisit = false).
            LifecycleRule lifecycleRule = new LifecycleRule("rule1", "logs", LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.StorageTransition storageTransition = new LifecycleRule.StorageTransition();
            storageTransition.setStorageClass(StorageClass.IA);
            storageTransition.setExpirationDays(30);
            storageTransition.setIsAccessTime(true);
            storageTransition.setReturnToStdWhenVisit(false);
            storageTransition.setAllowSmallFile(true);
            List<LifecycleRule.StorageTransition> storageTransitionList = new ArrayList<LifecycleRule.StorageTransition>();
            storageTransitionList.add(storageTransition);
            lifecycleRule.setStorageTransition(storageTransitionList);
            lifecycleRuleList.add(lifecycleRule);

            // Rule 2: Transition noncurrent versions of objects with the "dir" prefix to IA 10 days
            // after last access. Objects return to Standard when accessed again (ReturnToStdWhenVisit = true).
            LifecycleRule lifecycleRule2 = new LifecycleRule("rule2", "dir", LifecycleRule.RuleStatus.Enabled);
            LifecycleRule.NoncurrentVersionStorageTransition noncurrentVersionStorageTransition = new LifecycleRule.NoncurrentVersionStorageTransition();
            noncurrentVersionStorageTransition.setStorageClass(StorageClass.IA);
            noncurrentVersionStorageTransition.setNoncurrentDays(10);
            noncurrentVersionStorageTransition.setIsAccessTime(true);
            noncurrentVersionStorageTransition.setReturnToStdWhenVisit(true);
            noncurrentVersionStorageTransition.setAllowSmallFile(false);
            List<LifecycleRule.NoncurrentVersionStorageTransition> noncurrentVersionStorageTransitionList = new ArrayList<LifecycleRule.NoncurrentVersionStorageTransition>();
            noncurrentVersionStorageTransitionList.add(noncurrentVersionStorageTransition);
            lifecycleRule2.setNoncurrentVersionStorageTransitions(noncurrentVersionStorageTransitionList);
            lifecycleRuleList.add(lifecycleRule2);

            setBucketLifecycleRequest.setLifecycleRules(lifecycleRuleList);
            ossClient.setBucketLifecycle(setBucketLifecycleRequest);

        } catch (OSSException oe) {
            System.out.println("OSS error: " + oe.getErrorMessage() + " (Code: " + oe.getErrorCode() + ", RequestId: " + oe.getRequestId() + ")");
        } catch (ClientException ce) {
            System.out.println("Client error: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
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

parser = argparse.ArgumentParser(description="put bucket lifecycle sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    args = parser.parse_args()

    # Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    # All transitions use IsAccessTime=True to apply based on last access time.
    result = client.put_bucket_lifecycle(oss.PutBucketLifecycleRequest(
        bucket=args.bucket,
        lifecycle_configuration=oss.LifecycleConfiguration(
            rules=[
                oss.LifecycleRule(
                    # Rule 1: Transition objects with prefix "data/" to IA 200 days after last access.
                    # Objects remain in IA when accessed again.
                    id='rule1',
                    status='Enabled',
                    prefix='data/',
                    transitions=[oss.LifecycleRuleTransition(
                        days=200,
                        storage_class=oss.StorageClassType.IA,
                        is_access_time=True,
                        return_to_std_when_visit=False
                    )],
                ),
                oss.LifecycleRule(
                    # Rule 2: Transition objects with prefix "log/" to IA at 120 days, then Archive at 250 days.
                    # Both transitions are based on last access time.
                    id='rule2',
                    status='Enabled',
                    prefix='log/',
                    transitions=[
                        oss.LifecycleRuleTransition(
                            days=120,
                            storage_class=oss.StorageClassType.IA,
                            is_access_time=True,
                            return_to_std_when_visit=False
                        ),
                        oss.LifecycleRuleTransition(
                            days=250,
                            storage_class=oss.StorageClassType.ARCHIVE,
                            is_access_time=True,
                            return_to_std_when_visit=False
                        )
                    ],
                )
            ]
        ),
    ))

    print(f'status code: {result.status_code}, request id: {result.request_id}')

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
    region     string
    bucketName string
)

func init() {
    flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
    flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
    flag.Parse()

    if len(bucketName) == 0 {
        flag.PrintDefaults()
        log.Fatalf("invalid parameters, bucket name required")
    }
    if len(region) == 0 {
        flag.PrintDefaults()
        log.Fatalf("invalid parameters, region required")
    }

    // Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
    cfg := oss.LoadDefaultConfig().
        WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
        WithRegion(region)

    client := oss.NewClient(cfg)

    // All transitions use IsAccessTime=true to apply based on last access time.
    request := &oss.PutBucketLifecycleRequest{
        Bucket: oss.Ptr(bucketName),
        LifecycleConfiguration: &oss.LifecycleConfiguration{
            Rules: []oss.LifecycleRule{
                {
                    // Rule 1: Transition objects with prefix "data/" to IA 200 days after last access.
                    // Objects remain in IA when accessed again.
                    ID:     oss.Ptr("rule1"),
                    Status: oss.Ptr("Enabled"),
                    Prefix: oss.Ptr("data/"),
                    Transitions: []oss.LifecycleRuleTransition{
                        {
                            Days:                 oss.Ptr(int32(200)),
                            StorageClass:         oss.StorageClassIA,
                            IsAccessTime:         oss.Ptr(true),
                            ReturnToStdWhenVisit: oss.Ptr(false),
                        },
                    },
                },
                {
                    // Rule 2: Transition objects with prefix "log/" to IA at 120 days, then Archive at 250 days.
                    ID:     oss.Ptr("rule2"),
                    Status: oss.Ptr("Enabled"),
                    Prefix: oss.Ptr("log/"),
                    Transitions: []oss.LifecycleRuleTransition{
                        {
                            Days:                 oss.Ptr(int32(120)),
                            StorageClass:         oss.StorageClassIA,
                            IsAccessTime:         oss.Ptr(true),
                            ReturnToStdWhenVisit: oss.Ptr(false),
                        },
                        {
                            Days:                 oss.Ptr(int32(250)),
                            StorageClass:         oss.StorageClassArchive,
                            IsAccessTime:         oss.Ptr(true),
                            ReturnToStdWhenVisit: oss.Ptr(false),
                        },
                    },
                },
            },
        },
    }

    result, err := client.PutBucketLifecycle(context.TODO(), request)
    if err != nil {
        log.Fatalf("failed to put bucket lifecycle: %v", err)
    }

    log.Printf("put bucket lifecycle result: %#v\n", result)
}
```

## PHP

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;
use AlibabaCloud\Oss\V2\Models\LifecycleConfiguration;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located', 'required' => true],
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS', 'required' => false],
    "bucket"   => ['help' => 'The name of the bucket', 'required' => true],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === true && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'];
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];

// Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);

if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

// Transition objects with prefix "log/" to IA 30 days after last access.
$lifecycleRule = new Oss\Models\LifecycleRule(
    prefix: 'log/',
    transitions: [
        new Oss\Models\LifecycleRuleTransition(
            days: 30,
            storageClass: 'IA',
            IsAccessTime: 'true',        // Apply based on last access time.
            ReturnToStdWhenVisit: 'false' // Objects remain in IA when accessed again.
        )
    ],
    id: 'rule',
    status: 'Enabled'
);

$lifecycleConfiguration = new LifecycleConfiguration(rules: [$lifecycleRule]);
$request = new Oss\Models\PutBucketLifecycleRequest(
    bucket: $bucket,
    lifecycleConfiguration: $lifecycleConfiguration
);

$result = $client->putBucketLifecycle($request);
printf("status code: %s\nrequest id: %s\n", $result->statusCode, $result->requestId);
```

### **Use ossutil**

For setup instructions, see [Install ossutil](/help/en/oss/install-ossutil2#DAS).

The following command configures a lifecycle rule for `examplebucket`:

```
ossutil api put-bucket-lifecycle --bucket examplebucket --lifecycle-configuration "{\"Rule\":{\"ID\":\"rule1\",\"Prefix\":\"tmp/\",\"Status\":\"Enabled\",\"Expiration\":{\"Days\":\"10\"},\"Transition\":{\"Days\":\"5\",\"StorageClass\":\"IA\"},\"AbortMultipartUpload\":{\"Days\":\"10\"}}}"
```

For full parameter reference, see [put-bucket-lifecycle](/help/en/oss/developer-reference/put-bucket-lifecycle).

## API reference

To call the OSS RESTful API directly, see [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb). Direct API calls require signature calculation in your code.

## FAQ

**What happens if a bucket has both a last-modified-time rule and a last-access-time rule for overlapping prefixes?**

OSS applies whichever rule costs the user less. For example, if one rule deletes objects 30 days after last modification and another converts them to IA 30 days after last access, OSS applies the deletion rule—because deleting stops all storage charges, while converting to IA still incurs storage and retrieval fees.

**If I modify a lifecycle rule, when does the change take effect, and what happens to objects already in IA?**

The new rule takes effect within 24 hours. Objects that have already transitioned under the old rule are not affected by the rule change. For example, if you change the rule prefix from `er` to `re` after some objects with the `er` prefix have already been converted to IA, those objects stay in IA—the original rule no longer applies to them, and the new rule doesn't cover their prefix. For objects matching the new `re` prefix, `LastAccessTime` is set to the time access tracking was enabled.

**How does versioning interact with last-access-time lifecycle rules?**

Each version of an object has a unique version ID and is managed independently. A lifecycle rule may transition the current version and a noncurrent version of the same object to different storage classes.

**Can I disable access tracking?**

Yes. Before disabling, make sure no lifecycle rules based on last access time are active for the bucket. After you disable tracking, OSS stops updating `LastAccessTime`. If you re-enable tracking later, `LastAccessTime` is re-initialized to the new timestamp for all objects.

## What's next

-   [How do common operations affect LastAccessTime of objects?](/help/en/oss/user-guide/which-operations-update-the-lastaccestime-of-an-object-and-which-operations-do-not-update-the-lastaccestime-of-an-object)
    
-   [Storage fees](/help/en/oss/storage-fees)
    
-   [PutBucketLifecycle API reference](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb)
