## Configure a downgrade policy

You can configure a degradation policy to switch the domain name resolution method to native DNS resolution.

**Important**

The degradation policy determines which domain names require native DNS resolution. For these domain names, the SDK provides empty resolution results. The business code completes the specific degradation operation after receiving these empty results, following the same logic as when the SDK cannot resolve domain names. The SDK does not employ the local DNS server for resolution.

**Interface Definition**

```
void setDegradationFilter(DegradationFilter filter);
public interface DegradationFilter {
    /**
     * Degradation filter
     *
     * @param hostName The domain name that you want to resolve, such as www.aliyun.com. You can filter the domain names that are not resolved by HTTPDNS.
     * @return Specify whether to perform native DNS resolution.
     */
    boolean shouldDegradeHttpDNS(String hostName);
}
```

**Parameter Description**

Parameter

Type

Required

Description

filter

DegradationFilter

Yes

Downgrade proxy

**Code Example**

```
// httpdns is the service instance obtained during initialization
DegradationFilter filter = new DegradationFilter() {
  @Override
  public boolean shouldDegradeHttpDNS(String hostName) {
    // You can specify custom degradation logic. In this example, HTTPDNS resolution is not used for www.aliyuno.com
    // Refer to the HTTPDNS API documentation. If an intermediate HTTP proxy exists, use the local DNS server for resolution.
    return hostName.equals("www.aliyuno.com");
  }
};
// Import the filter to HTTPDNS. The shouldDegradeHTTPDNS method is called during resolution to check whether HTTPDNS is used
httpdns.setDegradationFilter(filter);
```

## Configure a degradation filter

Apply a degradation filter to domain names.

**Interface Definition**

```
boolean shouldDegradeHttpDNS(String hostName);
```

**Parameter Description**

Parameter

Type

Required

Description

hostname

String

Yes

The domain name that you want to resolve, such as www.aliyun.com. You can filter the domain names that are not resolved by HTTPDNS.

return

Boolean

No

Specifies whether to perform native DNS resolution.

**Code Example**

```
DegradationFilter filter = new DegradationFilter() {
  @Override
  public boolean shouldDegradeHttpDNS(String hostName) {
    // You can specify custom degradation logic. In this example, HTTPDNS resolution is not used for www.aliyuno.com
    // Refer to the HTTPDNS API documentation. If an intermediate HTTP proxy exists, use the local DNS server for resolution.
    return hostName.equals("www.aliyuno.com");
  }
};
```
