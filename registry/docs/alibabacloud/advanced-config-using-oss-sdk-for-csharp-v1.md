This topic describes how to configure access credentials and the .NET client to ensure secure access to OSS resources and optimize client performance.

## **Configure access credentials**

Before you send OSS requests using the .NET SDK, you must configure your access credentials. Alibaba Cloud services use these credentials to authenticate your identity and access permissions. This section explains how to choose the appropriate authentication and authorization methods for your scenario. This ensures that your data is secure and that access is authorized. You will also learn about credential configuration methods for different scenarios and how to manage and protect your AccessKey pairs.

## Configure the C# client

You can initialize an OSSClient instance to manage OSS resources from your .NET program. For example, you can create or delete buckets, and upload or download files. This section describes how to create and configure an OSSClient instance. It also covers how to set parameters, such as the network timeout and connection pool size, to meet the requirements of different scenarios.
