This topic describes how to list all objects, a specific number of objects, and objects whose names contain a specific prefix in an Object Storage Service (OSS) bucket.

## Listing methods

You can call the `list` or `listV2` method to list up to 1,000 objects in a bucket at a time. You can specify parameters to perform various listing operations, such as listing all objects after a specified starting point, listing objects and subdirectories in a specified directory, and paginating the results. The main differences between these two methods are as follows:

-   The `list` method returns owner information by default.
    
-   The `listV2` method requires you to set \`fetchOwner\` to include owner information in the result.
    
    **Note**
    
    For buckets with versioning enabled, use the `listV2` operation to list objects.
    

The following sections describe the parameters for the `list` and `listV2` methods.

-   List objects using the list method
    
    The parameters are described as follows:
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    prefix
    
    string
    
    Lists objects that have a specific prefix.
    
    delimiter
    
    string
    
    The character used to group object names.
    
    marker
    
    string
    
    Lists objects whose names are lexicographically after the marker.
    
    max-keys
    
    number | string
    
    Specifies the maximum number of objects to return.
    
    encoding-type
    
    'url' | ''
    
    Encodes the returned content. Set the encoding type to URL.
    
-   List objects using the listV2 method
    
    The following are the parameters for listV2:
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    prefix
    
    string
    
    Lists objects that have a specific prefix.
    
    continuation-token
    
    string
    
    Starts listing objects from this token.
    
    delimiter
    
    string
    
    The character used to group object names.
    
    max-keys
    
    number | string
    
    Specifies the maximum number of objects to return.
    
    start-after
    
    string
    
    Starts returning objects that are lexicographically after the value of \`start-after\`.
    
    fetch-owner
    
    boolean
    
    Specifies whether to include owner information in the result.
    
    encoding-type
    
    'url' | ''
    
    Encodes the returned content. Set the encoding type to URL.
    

## Simple object listing

The following code shows how to list objects in a specified bucket. By default, 100 objects are listed.

-   Using the list method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
        // If you do not specify any parameters, a maximum of 100 objects are returned by default.
        const result = await client.list();
        console.log(result);
    }
    
    list();
    ```
    
-   Using the listV2 method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
        // If you do not specify any parameters, a maximum of 100 objects are returned by default.
        const result = await client.listV2();
        console.log(result);
    }
    
    list();
    ```
    

## List a specified number of objects

The following code shows how to use the max-keys parameter to list a specified number of objects in a bucket.

-   Using the list method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
        const result = await client.list({
            // Set the maximum number of objects to return to 10. The objects are sorted lexicographically.
          "max-keys": 10
      });
        console.log(result);
    }
    
    list();
    ```
    
-   Using the listV2 method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
        const result = await client.listV2({
            // Set the maximum number of objects to return to 10. The objects are sorted lexicographically.
          "max-keys": 10
      });
        console.log(result);
    }
    
    list();
    ```
    

## List objects with a specified prefix

The following code shows how to use the prefix parameter to list objects in a bucket that have a specified prefix.

-   Using the list method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
      const result = await client.list({
        // List 10 objects.
        "max-keys": 10,
        // List objects whose names contain the prefix foo/.
        prefix: 'foo/'
      });
      console.log(result);
    }
    
    list();
    ```
    
-   Using the listV2 method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
      const result = await client.listV2({
        // List 10 objects.
        "max-keys": 10,
        // List objects whose names contain the prefix foo/.
        prefix: 'foo/'
      });
      console.log(result);
    }
    
    list();
    ```
    

## List objects after a specified object name

The following code shows how to list objects whose names are lexicographically after a specified string (marker or startAfter).

-   Using the list method
    
    The marker parameter specifies the file name.
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    // List objects that are lexicographically after 'test'. By default, 100 objects are listed.
    const marker = 'test'
    async function list () {
      const result = await client.list({
        marker
      });
      console.log(result);
    }
    
    list();
    ```
    
-   Using the listV2 method
    
    The startAfter parameter specifies the object name after which the listing begins.
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
      const result = await client.listV2({
        // List objects and subdirectories in the a/ folder that come after a/b.
        delimiter: '/',
        prefix: 'a/',
        'start-after': 'a/b'
      });
      console.log(result.objects, result.prefixes);
    }
    
    list();
    ```
    

## List all objects by page

The following code shows how to list all objects in a specified bucket by page. The number of objects to list per page is specified by max-keys.

-   The list method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    let marker = null; 
    
    // List 20 objects per page.
    const maxKeys = 20;
    
    async function list () {
      do {
        const result = await client.list({
          marker: marker, 
          'max-keys': maxKeys
        });
        marker = result.nextMarker;
        console.log(result);
      } while (marker);
    }
    
    list();
    ```
    
-   Using the listV2 method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    async function list () {
      let continuationToken = null;
      // List 20 objects per page.
      const maxKeys = 20;
      do {
        const result = await client.listV2({
          'continuation-token': continuationToken,
          'max-keys': maxKeys
          });
        continuationToken = result.nextContinuationToken;
            console.log(result);
      }while(continuationToken)
    }
    
    list();
    ```
    

## Include owner information in the listing result

The following code shows how to include owner information in the listing result:

```
const OSS = require('ali-oss');

const client = new OSS({
  // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Replace yourbucketname with the bucket name.
  bucket: 'yourbucketname'
});

// By default, the information about listed objects does not include owner information. To include owner information, set the fetch-owner parameter to true.
async function list () {
  const result = await client.listV2({
    'fetch-owner': true
  });
  console.log(result.objects);
}

list();
```

## List objects and subdirectories in a specified directory

OSS does not have a native folder structure. Instead, all elements are stored as objects. Creating a folder is equivalent to creating a zero-byte object that ends with a forward slash (/). The OSS console displays objects that end with a forward slash (/) as folders.

The delimiter and prefix parameters simulate folder functionality:

-   If you set the prefix parameter to a folder name, objects that start with this prefix are listed. This means all objects and subdirectories within that folder are returned in the objects list.
-   If you set the prefix parameter and set the delimiter parameter to a forward slash (/), only the objects and subdirectories directly within that folder are listed. The subdirectories are returned in the CommonPrefixes list. Objects and folders within these subdirectories are not listed.

Assume a bucket contains the following objects:

```
foo/x
foo/y
foo/bar/a
foo/bar/b
foo/hello/C/1
foo/hello/C/2
...
foo/hello/C/9999
```

The following code shows how to use the `list` or `listV2` method to list objects and subdirectories in a specified directory.

-   Using the list method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    // Call the listDir function and set different prefixes to list different destination objects.
    async function listDir(dir) {
      try {
        const result = await client.list({
          prefix: dir,
          delimiter: '/'
        });
        if (result && result.prefixes) {
          result.prefixes.forEach(subDir => {
            console.log('SubDir: %s', subDir);
          });
        }
        if (result && result.objects) {
          result.objects.forEach(obj => {
            console.log('Object: %s', obj.name);
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    
    listDir('foo/');
    // Expected output:
    // SubDir: foo/bar/
    // SubDir: foo/hello/
    // Object: foo/x
    // Object: foo/y
    
    listDir('foo/bar/');
    // Expected output:
    // Object: foo/bar/a
    // Object: foo/bar/b
    
    listDir('foo/hello/C/');
    // Expected output:
    // Object: foo/hello/C/1
    // Object: foo/hello/C/2
    // ...
    // Object: foo/hello/C/9999
    ```
    
-   Using the listV2 method
    
    ```
    const OSS = require('ali-oss');
    
    const client = new OSS({
      // Replace yourregion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
      region: 'yourregion',
      // Obtain access credentials from environment variables. Before running this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      authorizationV4: true,
      // Replace yourbucketname with the bucket name.
      bucket: 'yourbucketname'
    });
    
    // Call the listV2Dir function and set different prefixes to list different destination objects.
    async function listV2Dir(dir) {
      try {
        const result = await client.listV2({
          prefix: dir,
          delimiter: '/'
        });
        if (result && result.prefixes) {
          result.prefixes.forEach(subDir => {
            console.log('SubDir: %s', subDir);
          });
        }
        if (result && result.objects) {
          result.objects.forEach(obj => {
            console.log('Object: %s', obj.name);
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    
    listDir('foo/');
    // Expected output
    // SubDir: foo/bar/
    // SubDir: foo/hello/
    // Object: foo/x
    // Object: foo/y
    
    listDir('foo/bar/');
    // Expected output
    // Object: foo/bar/a
    // Object: foo/bar/b
    
    listDir('foo/hello/C/');
    // Expected output
    // Object: foo/hello/C/1
    // Object: foo/hello/C/2
    // ...
    // Object: foo/hello/C/9999
    ```
    

## References

-   For complete sample code for listing objects, see [GitHub examples](https://github.com/ali-sdk/ali-oss?spm=a2c4g.11186623.0.0.13994772cq23ae#listquery-options).
    
-   For more information about the API operations for listing objects, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) and [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881).
