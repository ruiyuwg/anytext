This topic describes how to list all files (Objects) in a specified bucket, and how to list files and subdirectories in a specified directory.

## **Usage notes**

-   When you use packaging tools such as Webpack and Browserify, install OSS SDK for Browser.js by running the npm install ali-oss command.
    
-   If you want to access an OSS bucket from a browser but no CORS rules are configured for the bucket, the browser rejects the request. Therefore, you must configure CORS rules for a bucket if you want to access the bucket from a browser. For more information, see [Installation](/help/en/oss/developer-reference/installation#section-lc9-9ju-8da).
    
-   In most cases, OSS SDK for Browser.js is used in browsers. To prevent your AccessKey pair from being exposed, we recommend that you use temporary access credentials obtained from Security Token Service (STS) to access OSS.
    
    The temporary access credentials consist of an AccessKey pair and a security token. The AccessKey pair consists of an AccessKey ID and an AccessKey secret. For more information about how to obtain temporary access credentials, see [Use STS for temporary access authorization](/help/en/oss/developer-reference/authorize-access-6#section-iy3-bfe-7mn).
    

## List all files in a bucket

You can use the `list` function to list all files in the current bucket:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"></script>
  </head>
  <body>
    <script>      
      const client = new OSS({
        // Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set yourRegion to oss-cn-hangzhou.
        region: "yourRegion",
        authorizationV4: true,
        // The temporary AccessKey pair (AccessKey ID and AccessKey secret) obtained from Security Token Service (STS).
        accessKeyId: 'yourAccessKeyId',
        accessKeySecret: 'yourAccessKeySecret',
        // The security token (SecurityToken) obtained from STS.
        stsToken: 'yourSecurityToken',
        // Specify the bucket name. For example, examplebucket.
        bucket: "examplebucket",
      });

      async function list(dir) {
        try {
          // By default, a maximum of 1,000 files are returned.
          let result = await client.list();
          console.log(result);

          // Continue to obtain the file list starting from the file that follows the last file read in the previous list operation.
          if (result.isTruncated) {
            result = await client.list({ marker: result.nextMarker });
          }

          // List files that have the prefix 'ex'.
          result = await client.list({
            prefix: "ex",
          });
          console.log(result);

          // List files that have the prefix 'ex' and whose names come after 'example' in alphabetical order.
          result = await client.list({
            prefix: "ex",
            marker: "example",
          });
          console.log(result);
        } catch (e) {
          console.log(e);
        }
      }

      list();
    </script>
  </body>
</html>
          
```

## List files and subdirectories in a specified directory

OSS does not have a concept of directories. All elements are stored as Objects. To create a directory, you create a 0 KB Object with a name that ends in a forward slash (/). This Object can be uploaded and downloaded. The OSS console displays Objects that end with a forward slash (/) as directories. You can use the Delimiter and Prefix parameters to simulate directory functionality:

-   If you set Prefix to a directory name, you can list all files that start with this prefix. This recursively lists all files and subdirectories within that directory.
    
-   If you also set Delimiter to a forward slash (/), the response lists only the files and subdirectories in that directory. The names of the subdirectories are returned in the SubDir section. Files and directories within those subdirectories are not listed.
    

Assume a bucket contains the following files:

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

You can use the `listDir` function to list the files and subdirectories in a specified directory:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"></script>
  </head>
  <body>
    <script>
      const client = new OSS({
        // Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set yourRegion to oss-cn-hangzhou.
        region: 'yourRegion',
        authorizationV4: true,
        // The temporary AccessKey pair (AccessKey ID and AccessKey secret) obtained from STS.
        accessKeyId: 'yourAccessKeyId',
        accessKeySecret: 'yourAccessKeySecret',
        // The security token (SecurityToken) obtained from STS.
        stsToken: 'yourSecurityToken',
        // Specify the bucket name. For example, examplebucket.
        bucket: "examplebucket",
      });

      async function listDir(dir) {
        try {
          let result = await client.list({
            prefix: dir,
            // Set the delimiter for directories to a forward slash (/).
            delimiter: "/",
          });

          result.prefixes.forEach(function (subDir) {
            console.log("SubDir: %s", subDir);
          });
          result.objects.forEach(function (obj) {
            console.log("Object: %s", obj.name);
          });
        } catch (e) {
          console.log(e);
        }
      }

      listDir();
    </script>
  </body>
</html>
```

The returned file list is as follows:

```
> listDir('foo/')
=> SubDir: foo/bar/
   SubDir: foo/hello/
   Object: foo/x
   Object: foo/y

> listDir('foo/bar/')
=> Object: foo/bar/a
   Object: foo/bar/b

> listDir('foo/hello/C/')
=> Object: foo/hello/C/1
   Object: foo/hello/C/2
   ...
   Object: foo/hello/C/9999            
```

## References

For more information about the API operation, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb).
