This topic describes how to use Amazon S3 SDK for a non-Java language such as Go or Python to connect to and use LindormTable based on the Amazon S3 protocol and provides corresponding examples.

## Prerequisites

-   An endpoint that corresponds to S3 Compatibility Address on the Wide Table Engine tab in the Lindorm console is obtained. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).![查看连接地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9044131661/p423319.png)
    
-   The IP address of your client is added to the whitelist of your Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## Procedure

### Use Amazon S3 SDK for Go to connect to and use LindormTable

1.  Install Amazon S3 SDK for Go.
    
    ```
    go get github.com/aws/aws-sdk-go
    ```
    
2.  Use Amazon S3 SDK for Go to connect to and use LindormTable.
    
    ```
    package main
    
    import (
     "log"
     "strings"
    
     "github.com/aws/aws-sdk-go/aws"
     "github.com/aws/aws-sdk-go/aws/credentials"
     "github.com/aws/aws-sdk-go/aws/session"
     "github.com/aws/aws-sdk-go/service/s3"
    )
    
    const (
        s3endpoint = "http://ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com:9053" // Specify the endpoint that corresponds to S3 Compatibility Address on the Wide Table Engine tab.
    )
    
    func main() {
     conf := &aws.Config{
      Credentials:      credentials.NewStaticCredentials("AK", "SK", ""),
      Region:           aws.String("lindorm"),
      Endpoint:         aws.String(s3endpoint),
      S3ForcePathStyle: aws.Bool(true),
     }
    
     sess, err := session.NewSession(conf)
    
    // Establish a connection.
     svc := s3.New(sess)
    
    // List all buckets.
     input := &s3.ListBucketsInput{}
    
     result, err := svc.ListBuckets(input)
     if err != nil {
      panic(err.Error())
     }
     println(result.String())
    
     bucket := "testbucketgo"
     key := "testObjectGo"
    
    // Create a bucket.
     out, err := svc.CreateBucket(&s3.CreateBucketInput{Bucket: &bucket})
     log.Println(out)
     if err != nil {
      log.Println("Failed to create bucket", err)
      return
     }
    
     if err = svc.WaitUntilBucketExists(&s3.HeadBucketInput{Bucket: &bucket}); err != nil {
      log.Printf("Failed to wait for bucket to exist %s, %s\n", bucket, err)
      return
     }
    
    // Write an object to the bucket.
     _, err = svc.PutObject(&s3.PutObjectInput{
      Body:   strings.NewReader("Hello World!"),
      Bucket: &bucket,
      Key:    &key,
     })
     if err != nil {
      log.Printf("Failed to upload data to %s/%s, %s\n", bucket, key, err)
      return
     }
    }
    ```
    
    **Note**
    
    Replace the AK and SK fields in the sample code with the AccessKey ID and AccessKey secret that you actually use to connect LindormTable. We recommend that you configure the AccessKey ID and AccessKey secret as environment variables or specify them in the configuration file rather than hardcoding them.
    

### Use Amazon S3 SDK for Python to connect to and use LindormTable

1.  Install Amazon S3 SDK for Python.
    
    ```
    pip install boto3
    ```
    
2.  Use Amazon S3 SDK for Python to connect to and use LindormTable.
    
    ```
    import boto3
    from botocore.client import Config
    s3endpoint = 'http://ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com:9053' # Specify the endpoint that corresponds to S3 Compatibility Address on the Wide Table Engine tab.
     
    # Establish a connection.
    s3client = boto3.client(
        's3',
        aws_access_key_id="AK", 
        aws_secret_access_key="SK",
        endpoint_url = s3endpoint,
        config=Config(s3={'addressing_style': 'path'})
    )
    
    # Create a bucket. 
    s3client.create_bucket(Bucket="testbucketpython")
    
    # List all buckets.
    buckets = s3client.list_buckets()
    
    # Display all buckets.
    for bucket in buckets['Buckets']:
        print(bucket["Name"])
    
    # Upload an object.
    response = s3client.upload_file("demo.py", "testbucketpython", "demo.py")
    
    # Download the object.
    s3client.download_file('testbucketpython', 'demo.py', 'demo.py.download')
    ```
    
    **Note**
    
    Replace the AK and SK fields in the sample code with the AccessKey ID and AccessKey secret that you actually use to connect LindormTable. We recommend that you configure the AccessKey ID and AccessKey secret as environment variables or specify them in the configuration file rather than hardcoding them.
