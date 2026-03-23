This topic describes the causes of and solutions to common errors that may occur when you use Object Storage Service (OSS) SDK for iOS.

## **What do I do if the HTTP status code 4099 is reported when I call the API operations of OSS SDK for iOS?**

### **Description**

```
[Client] Updating selectors after delegate addition failed with: Error Domain=NSCocoaErrorDomain Code=4099 "The connection to service with pid 91 named com.apple.commcenter.coretelephony.xpc was invalidated from this process." UserInfo={NSDebugDescription=The connection to service with pid 91 named com.apple.commcenter.coretelephony.xpc was invalidated from this process.}
```

### **Cause**

The configuration of the iOS system development simulator is invalid.

### **Solutions**

You can disable the log service feature to stop receiving messages and configure the com.apple.CoreTelephony subsystem at the system level using one of the following methods:

-   Method 1
    
    ```
    xcrun simctl spawn booted log config --mode "level:off" --subsystem com.apple.CoreTelephony
    ```
    
-   Method 2
    
    ```
    sudo log config --mode "level:off" --subsystem com.apple.CoreTelephony
    ```
