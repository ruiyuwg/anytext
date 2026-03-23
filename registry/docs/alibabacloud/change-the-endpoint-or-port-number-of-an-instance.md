Tair (Redis OSS-compatible) lets you modify the endpoint prefix and port number of an instance. Change the endpoint to match a replacement instance to the original without updating your application, or change the port number to meet security requirements.

## Prerequisites

The instance is in the **Running** state.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  On the **Instance Information** page, in the **Connection Information** section, locate the connection type that you want to modify and click **Modify** in the **Actions** column.
    
3.  In the panel that appears, specify a new endpoint prefix and port number.
    
    **Parameter**
    
    **Description**
    
    **Endpoint**
    
    Only the prefix is modifiable. The default prefix is the instance ID. The prefix must be 8 to 63 characters in length, contain only lowercase letters and digits, and start with a lowercase letter.
    
    **Port Number**
    
    The port number ranges from 1 to 65535.
    
4.  Click **OK**.
    

## Verify the change

After the modification completes, check the **Connection Information** section on the **Instance Information** page to confirm that the new endpoint and port number are displayed.

## Related API operations

**API**

**Description**

[ModifyDBInstanceConnectionString](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifydbinstanceconnectionstring-redis)

Changes the endpoint and port number of an instance.
