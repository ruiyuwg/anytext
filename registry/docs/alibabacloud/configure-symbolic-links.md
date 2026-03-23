A symbolic link is a pointer to an object in a bucket—similar to a shortcut on your desktop. Accessing the symbolic link gives you access to the target object, without duplicating the object's content.

## Use cases

-   **Shorter, human-readable aliases**: Create a concise, descriptive name for an object with a long or complex key.
    
-   **Backward-compatible paths**: Point old paths to new object locations after reorganizing your bucket structure.
    
-   **Multiple logical paths, one object**: Have several symbolic links point to the same object to avoid storing duplicate data.
    

## Limits and behavior

-   Symbolic links to Standard or Infrequent Access (IA) objects are immediately accessible.
    
-   To access an Archive, Cold Archive, or Deep Cold Archive object through a symbolic link, restore the object first. See [Restore objects](/help/en/oss/user-guide/restore-objects-for-access#concept-wx5-szt-tdb).
    
-   A symbolic link stores the target object's path, not its content. Storage is billed based on the path length. For example, a symbolic link pointing to `image.jpg` (1 MB) uses approximately 0.009 KB of storage.
    
-   Server-side encryption is not supported for symbolic links.
    
-   Access control follows the principle of least privilege:
    
    -   **Bucket policy or Resource Access Management (RAM) policy**: The user must have permission on both the symbolic link and its target object. If either permission is missing, access is denied.
        
    -   **Access control list (ACL)**: The more restrictive ACL applies. A `private` symbolic link blocks access to a `public-read` target, and a `private` target blocks access even through a `public-read` symbolic link.
        

## Create a symbolic link

### **Use the OSS console**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  Find the target object, then choose **!\[more\](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5768984671/p391889.jpg)** > **Configure Symbolic Link** in the Actions column.
    
5.  In the **Configure Symbolic Link** panel, set **Symbolic Link File or Folder** and click **OK**.
    

**Path behavior**: Assume the target object is in the `/test/` directory.

**Option**

**Symbolic link name**

**Resulting path**

**Absolute Path**

`t1-symlink`

`/t1-symlink`

**Relative Path**

`t2-symlink`

`/test/t2-symlink`

**Important**

If the symbolic link name omits the file extension (for example, `myphoto` instead of `myphoto.jpg`), previewing the object in the OSS console or by URL still works. However, when you download the symbolic link object using an OSS tool or the OSS console, the downloaded file has no extension and cannot be opened directly. Add the correct extension to the symbolic link name to avoid this.

### **Use ossbrowser**

Before you begin, [install](/help/en/oss/developer-reference/installing-the-ossbrowser-2-0) and [log on to ossbrowser 2.0](/help/en/oss/developer-reference/login-to-ossbrowser-2-0).

1.  Click the bucket name and find the target object.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1035537571/p903200.png) icon to the right of the object, then click **Set Symbolic Link**.
    
3.  Enter the full path of the symbolic link, including the object name, then click **OK**. For example, to create a symbolic link named `symlink` in the `exampledir/` directory, enter `exampledir/symlink`.
    

### **Use ossutil**

[Install ossutil](/help/en/oss/developer-reference/installing-the-ossbrowser-2-0), then run the following command to create a symbolic link named `examplelink` that points to `targetobject`:

```
ossutil api put-symlink --bucket examplebucket --key examplelink --symlink-target targetobject
```

For parameter details, see [put-symlink](/help/en/oss/developer-reference/put-symlink).

### **Use OSS SDKs**

The following examples show how to create a symbolic link using OSS SDKs. For other programming languages, see [Overview](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

<details> <summary>Java</summary>

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Replace with the endpoint of the region where your bucket is located.
        // Example: https://oss-cn-hangzhou.aliyuncs.com
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load credentials from environment variables.
        // Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String symLink = "examplesymlink";
        String destinationObjectName = "exampleobject.txt";
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
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType("text/plain");
            metadata.addUserMetadata("property", "property-value");

            // Optional: prevent overwriting an existing object with the same name.
            // metadata.setHeader("x-oss-forbid-overwrite", "true");
            // Optional: set the ACL of the symbolic link.
            // metadata.setHeader(OSSHeaders.OSS_OBJECT_ACL, CannedAccessControlList.Default);
            // Optional: set the storage class of the symbolic link.
            // metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard);

            CreateSymlinkRequest createSymlinkRequest = new CreateSymlinkRequest(bucketName, symLink, destinationObjectName);
            createSymlinkRequest.setMetadata(metadata);
            ossClient.createSymlink(createSymlinkRequest);

        } catch (OSSException oe) {
            System.out.println("OSS rejected the request: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error (e.g., network issue): " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

</details>

<details> <summary>Node.js</summary>

```
const OSS = require('ali-oss');

const client = new OSS({
  // Replace with the region where your bucket is located.
  // Example: oss-cn-hangzhou
  region: 'oss-cn-hangzhou',
  // Load credentials from environment variables.
  // Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  bucket: 'examplebucket',
});

// Optional headers
const headers = {
  'x-oss-storage-class': 'Standard',
  'x-oss-object-acl': 'private',
  // Prevent overwriting an existing object with the same name.
  'x-oss-forbid-overwrite': 'true',
};

async function put() {
  try {
    // Create a symbolic link named symlinkobject.txt pointing to exampleobject.txt.
    const result = await client.putSymlink('symlinkobject.txt', 'exampleobject.txt'
      // , { headers }
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

put();
```

</details>

<details> <summary>JavaScript (browser)</summary>

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
</head>
<body>
  <button id='upload'>Upload</button>
  <button id='symlink'>Create symbolic link</button>
  <!-- Import the OSS SDK -->
  <script type="text/javascript" src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"></script>
  <script type="text/javascript">
    const client = new OSS({
      region: 'oss-cn-hangzhou',
      authorizationV4: true,
      // Use STS temporary credentials for browser-side access.
      accessKeyId: 'yourAccessKeyId',
      accessKeySecret: 'yourAccessKeySecret',
      stsToken: 'yourSecurityToken',
      bucket: 'examplebucket',
    });

    const file = new Blob(['examplecontent']);
    const fileName = 'exampleobject.txt';

    document.getElementById('upload').addEventListener('click', () => {
      client.put(fileName, file).then(r => console.log(r));
    });

    // Create a symbolic link named symlink.txt pointing to exampleobject.txt.
    document.getElementById('symlink').addEventListener('click', () => {
      client.putSymlink('symlink.txt', fileName).then(r => console.log(r));
    });
  </script>
</body>
</html>
```

</details>

<details> <summary>C#</summary>

```
using Aliyun.OSS;
using System.Text;
using Aliyun.OSS.Common;

// Replace with the endpoint of the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Load credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var targetObjectName = "exampleobject.txt";
var symlinkObjectName = "examplesymlink";
var objectContent = "More than just cloud.";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Upload the target object.
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    client.PutObject(bucketName, targetObjectName, requestContent);

    // Create the symbolic link.
    client.CreateSymlink(bucketName, symlinkObjectName, targetObjectName);

    // Retrieve the target object name from the symbolic link.
    var ossSymlink = client.GetSymlink(bucketName, symlinkObjectName);
    Console.WriteLine("Target object is {0}", ossSymlink.Target);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

</details>

<details> <summary>Android (Java)</summary>

```
// Create a symlink request.
PutSymlinkRequest putSymlink = new PutSymlinkRequest();
putSymlink.setBucketName("examplebucket");
putSymlink.setObjectKey("examplesymlink");
putSymlink.setTargetObjectName("exampleobject.txt");

ObjectMetadata metadata = new ObjectMetadata();
// Optional: prevent overwriting an existing object with the same name.
// metadata.setHeader("x-oss-forbid-overwrite", "true");
// Optional: set the ACL of the symbolic link.
// metadata.setHeader("x-oss-object-acl", "private");
// Optional: set the storage class of the symbolic link.
// metadata.setHeader("x-oss-storage-class", "Standard");
putSymlink.setMetadata(metadata);

OSSAsyncTask task = oss.asyncPutSymlink(putSymlink, new OSSCompletedCallback<PutSymlinkRequest, PutSymlinkResult>() {
    @Override
    public void onSuccess(PutSymlinkRequest request, PutSymlinkResult result) {
        Log.d("PutSymlink", "PutSymlink success");
    }

    @Override
    public void onFailure(PutSymlinkRequest request, ClientException clientException,
                          ServiceException serviceException) {
        if (clientException != null) {
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
task.waitUntilFinished();
```

</details>

<details> <summary>Objective-C</summary>

```
OSSPutSymlinkRequest *request = [OSSPutSymlinkRequest new];
// Specify the bucket name. Example: examplebucket.
request.bucketName = @"examplebucket";
// Specify the symbolic link name.
request.objectKey = @"examplesymlink";
// Specify the full path of the target object. Do not include the bucket name.
request.targetObjectName = @"exampleobject.txt";

OSSTask *putSymlinkTask = [client putSymlink:request];
[putSymlinkTask continueWithBlock:^id _Nullable(OSSTask * _Nonnull task) {
    if (!task.error) {
        NSLog(@"put symlink success");
    } else {
        NSLog(@"put symlink failed, error: %@", task.error);
    }
    return nil;
}];
// [putSymlinkTask waitUntilFinished];
```

</details>

<details> <summary>C++</summary>

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Replace with the endpoint of the region where your bucket is located.
    // Example: https://oss-cn-hangzhou.aliyuncs.com
    std::string Endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    std::string Region = "cn-hangzhou";
    std::string BucketName = "examplebucket";
    // Full path of the target object. Do not include the bucket name.
    // Example: exampledir/exampleobject.txt
    std::string ObjectName = "exampledir/exampleobject.txt";
    // Full path of the symbolic link. Example: shortcut/myobject.txt
    std::string LinkName = "shortcut/myobject.txt";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    // Load credentials from environment variables.
    // Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    auto meta = ObjectMetaData();
    meta.setContentType("text/plain");
    meta.UserMetaData()["meta"] = "meta-value";

    CreateSymlinkRequest request(BucketName, ObjectName, meta);
    request.SetSymlinkTarget(LinkName);
    auto outcome = client.CreateSymlink(request);

    if (!outcome.isSuccess()) {
        std::cout << "CreateSymlink failed"
            << ", code: " << outcome.error().Code()
            << ", message: " << outcome.error().Message()
            << ", requestId: " << outcome.error().RequestId() << std::endl;
        ShutdownSdk();
        return -1;
    }

    ShutdownSdk();
    return 0;
}
```

</details>

<details> <summary>C</summary>

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint of the region where your bucket is located. */
const char *endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name = "examplebucket";
/* Full path of the target object. Do not include the bucket name.
   Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";
/* Full path of the symbolic link to create. */
const char *link_object_name = "examplesymlink";
const char *region = "cn-hangzhou";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Load credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket;
    aos_string_t object;
    aos_string_t sym_object;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&sym_object, link_object_name);

    resp_status = oss_put_symlink(oss_client_options, &bucket, &sym_object, &object, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put symlink succeeded\n");
    } else {
        printf("put symlink failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

</details>

## API reference

These methods are built on the PutSymlink RESTful API. Call the API directly if your use case requires custom request handling. See [PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb).

## FAQ

### Can I create a symbolic link that points to a private object?

Yes. A symbolic link can point to an object with any ACL: `private`, `public-read`, or `public-read-write`. Access control follows the principle of least privilege—the more restrictive permission between the symbolic link and its target always applies.

### How do I check whether an object is a symbolic link?

Call [HeadObject](/help/en/oss/developer-reference/headobject) or [GetObject](/help/en/oss/developer-reference/getobject) on the object. If it's a symbolic link, OSS returns the content of the target object. The `Content-Length`, `ETag`, and `Content-MD5` headers reflect the target object's metadata, not the symbolic link itself.

### Does deleting a symbolic link also delete the target object?

No. Deleting a symbolic link removes only the link. The target object is not affected.
