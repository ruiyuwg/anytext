To use the Simple Log Service SDK for Go, you need to install it first. This topic explains the installation process.

## Prerequisites

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
    
    An Alibaba Cloud account has permissions to call all API operations. If you use the AccessKey pair of an Alibaba Cloud account, security risks may occur. We recommend that you create and use a RAM user to call API operations or perform routine O&M. Make sure that the RAM user is granted the permissions to perform operations on Simple Log Service resources. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).
    
-   Go are installed. For more information, see [Install Go](https://golang.org/doc/install).
    

## Install or upgrade Simple Log Service SDK for Go

Run the following command as an administrator in the command-line interface (CLI) to install or upgrade Simple Log Service SDK for Go:

```
go get -u github.com/aliyun/aliyun-log-go-sdk
```

**Note**

No messages appear during the installation. The installation process requires a few minutes to complete. If the installation fails, run the preceding command again.

If the command is executed and no error is returned, Simple Log Service SDK for Go is installed or upgraded.

## What to do next

After installing the Simple Log Service SDK for Go, you need to [configure access credentials](/help/en/sls/developer-reference/configure-access-credentials1).
