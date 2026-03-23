To connect to an ApsaraDB RDS for MariaDB instance, you must enter the internal or public endpoint and port number of the RDS instance. This topic describes how to view and change the internal and public endpoints and port numbers of an RDS instance in the ApsaraDB RDS console.

## Internal endpoint and public endpoint

The endpoints are suitable for all connection scenarios.

-   Internal endpoint: provides low latency and high stability. For example, you can connect an Elastic Compute Service (ECS) instance and an RDS instance that reside in the same virtual private cloud (VPC) over an internal network.
    
-   Public endpoint: allows you to connect to an RDS instance over the Internet.
    

## View and change the internal or public endpoint and port number of an RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Database Connection**.
    
3.  On the page that appears, click **Modify Endpoint**.
    
4.  In the dialog box that appears, select a connection type, enter the prefix of the new endpoint, specify the port number, and then click **OK**.
    
    **Note**
    
    -   The prefix can contain lowercase letters, digits, and hyphens (-). The prefix must start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   The prefix must contain at least 8 characters, and the total length of the endpoint cannot exceed 63 characters. The total length includes the prefix and suffix of the endpoint.
        
    -   The port number must be a value within the range of 1000 to 65534.
        
    

## FAQ

-   After I change an endpoint or a port number of my RDS instance, do I need to update the endpoint or port number information in my application?
    
    Yes, after you change an endpoint or a port number of your RDS instance, you must update the endpoint or port number information on your application. If you do not update the information, your application cannot connect to your RDS instance.
    
-   Do I need to restart an RDS instance when I change the endpoint or port of the instance?
    
    No, you do not need to restart the RDS instance.
    
-   After I change or release an endpoint of my RDS instance, can I use the endpoint for another RDS instance?
    
    Yes, you can use the endpoint for another RDS instance.
