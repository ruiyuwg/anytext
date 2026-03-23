OSS SDK for Go lets you programmatically manage resources in Object Storage Service (OSS). For example, you can manage buckets, upload objects, download objects, and process images. This topic describes how to install OSS SDK for Go.

## Environment preparations

-   Environment requirements
    
    OSS SDK for Go 1.13 or later is recommended.
    
    For more information about how to download and install the environment for OSS SDK for Go, visit [Installing Go from source](https://golang.org/doc/install/source).
    
    -   If you use Go 1.13 or later, Go modules are enabled by default to manage package dependencies. You do not need to manually set the `GOPATH` environment variable.
        
    -   If you use Go 1.12 or earlier, you must set the `GOPATH` system variable to your code folder. For more information about GOPATH, run the `go help gopath` command.
        
-   View available languages
    
    To check your Go version, run the `go version` command.
    

## Download SDK

-   [Download from GitHub](https://github.com/aliyun/aliyun-oss-go-sdk)
    
-   [Download previous versions](https://github.com/aliyun/aliyun-oss-go-sdk/releases)
    

## Install SDK

## Go mod

Add the following dependency to your `go.mod` file. The following example uses version 3.0.2. Replace the version number with the one you require.

```
require (
    github.com/aliyun/aliyun-oss-go-sdk v3.0.2+incompatible
)
```

## Source code

```
go get github.com/aliyun/aliyun-oss-go-sdk/oss
```

**Note**

No messages appear during the installation. The installation process requires a few minutes to complete. If the installation fails, run the preceding command again.

## Authenticate the SDK

Run the following code to query the version of OSS SDK for Go:

```
package main

import (
  "fmt"
  "github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
  fmt.Println("OSS Go SDK Version: ", oss.Version)
}
            
```

## **What to do next**

After you install OSS SDK for Go, you need to configure access credentials. For more information, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
