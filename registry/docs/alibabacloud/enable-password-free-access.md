Tair (Redis OSS-compatible) lets you enable password-free access for instances deployed in virtual private clouds (VPCs). This feature provides a secure and convenient method to connect to an instance. After you enable password-free access for a VPC-deployed instance, clients within the same VPC can access the instance without passwords. You can still use a username and password to connect to the instance if needed.

## Prerequisites

The instance you want to manage is deployed in a VPC.

## Precautions

-   After you enable password-free access for an instance, the default account is used to connect to the instance. The username of the default account is the same as the instance ID, such as r-bp1zxszhcgatnx\*\*\*\*. The default account has read and write permissions on the instance.
    
-   If two VPCs are connected through [CEN](/help/en/cen/product-overview/what-is-cen/), they are considered as the same VPC.
    
-   If you use a public endpoint to connect to your instance after enabling password-free access, you still need to enter a password to ensure security.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the upper-right corner of the **Connection Information** section, click **Enable Password-free Access**.
    
3.  In the panel that appears, read the prompt and click **OK**.
    
    Refresh the page. If the text that is displayed on the button is changed from **Enable Password-free Access** to **Disable Password-free Access**, password-free access is enabled.
    
4.  If the instance is deployed in cloud-native mode, add the IP addresses of clients within the same VPC as the instance to a whitelist of the instance to connect the clients to the instance without using passwords.
    
    If the instance is deployed in classic mode, you can connect a client to the instance without the need to add the IP address of the client to a whitelist of the instance. You can use the `#no_loose_check-whitelist-always` parameter to control access to classic instances. By default, the `#no_loose_check-whitelist-always` parameter is set to `no`. In this case, after password-free access is enabled for a Tair instance, clients within the same VPC as the instance can connect to the instance without the need to add their IP addresses to a whitelist of the instance. For more information, see [Parameters that can be configured for Redis Open-Source Edition instances](/help/en/redis/user-guide/supported-parameters#concept-2087327).
    
    **Note**
    
    You cannot configure the `#no_loose_check-whitelist-always` parameter for cloud-native instances.
    

## Examples

The following code provides an example of how to connect to an instance that has password-free access enabled:

**Note**

For information about how to obtain the endpoint and password used to connect to an instance, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).

## Redis-cli password-free logon

```
redis-cli -h host -p port
// Example: redis -h r-bp10noxlhcoim2****.redis.rds.aliyuncs.com -p 6379 
```

## Jedis password-free logon

```
JedisPoolConfig config = new JedisPoolConfig();
// Specify the maximum number of idle connections as needed. The value cannot exceed the maximum number of connections supported by the instance.
config.setMaxIdle(100);
// Specify the maximum number of connections as needed. The value cannot exceed the maximum number of connections supported by the instance.
config.setMaxTotal(200);
config.setTestOnBorrow(false);
config.setTestOnReturn(false);
// Replace the values of the host and port parameters with the endpoint and port number of the instance. The password parameter is not required.
String host = "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com";
int port = 6379;
JedisPool pool = new JedisPool(config, host, port);
Jedis jedis = null;
try
{
    jedis = pool.getResource();
    /// ... do stuff here ... for example
    jedis.set("foo", "bar");
    System.out.println(jedis.get("foo"));
    jedis.zadd("sose", 0, "car");
    jedis.zadd("sose", 0, "bike");
    System.out.println(jedis.zrange("sose", 0, -1));
}
finally
{
    if(jedis != null)
    {
        // Close connections after each API operation is complete. To close a connection, release the connection to the connection pool instead of destroying the connection.
        jedis.close();
    }
}
// Call this method only once when you exit.
pool.destroy();
```

## Related operations

Click **Disable Password-free Access** to disable password-free access.

**Important**

If you disable password-free access for an instance, clients cannot use the password-free access feature to connect to the instance.

To prevent this impact on your client, you can change the connection verification method of your client to account and password logon in advance.

## Related API operations

**API operation**

**Description**

[ModifyInstanceVpcAuthMode](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancevpcauthmode-redis#main-107864)

Enables or disables password-free access for an instance that is deployed in a VPC.

## FAQ

-   Q: Why does the `WRONGPASS invalid username-password pair` error message appear after I enable password-free access for an instance deployed in a VPC?
    
    A: If you enter an incorrect password to connect to a Redis Open-Source Edition 6.0 instance for which password-free access is enabled, the preceding error message is returned. Enter the correct password or leave the password field empty.
    
    **Note**
    
    Enter a password based on the following rules:
    
    -   If you use the default account whose username is the same as the instance ID, you can enter only the password.
        
    -   If you use a custom account, enter the password in the `<user>:<password>` format. Example: `testaccount:Rp829dlwa`.
        
    
-   Why is the `(error) ERR illegal address` error reported when I use a client to connect to a Tair instance for which password-free access is enabled?
    
    The IP address of the client is not added to a whitelist of the instance. You can add the IP address of the client to a whitelist of the instance and try again.
