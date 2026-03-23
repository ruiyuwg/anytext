Each Elastic Compute Service (ECS) instance in a virtual private cloud (VPC) is allowed to initiate up to 5,000 Domain Name System (DNS) requests per second. Once the upper limit is exceeded, throttling may be triggered, and the availability stipulated in the service level agreement (SLA) cannot be guaranteed. To address this issue, we recommend that you adopt one of the following two methods:

-   Increase the number of ECS instances. In this way, DNS requests can be initiated by more ECS instances, and the number of DNS requests initiated by each ECS instance is reduced.
    
-   Enable the Name Service Cache Daemon (nscd) service for ECS instances for cache acceleration.
    
    **Note**
    
    If nscd is enabled, the update of a DNS record takes effect for a longer period of time.
    

## **What is nscd?**

As a cache service of operating systems, nscd provides caching for name service requests, such as requests for the passwd, group, hosts, services, and netgroup databases. nscd increases the cache hit ratio. In this way, the requests for name services are reduced and service responses are accelerated. This topic describes how to configure the hosts database to reduce DNS requests initiated by ECS instances.

## **Common nscd-related Linux commands**

**Command**

**Description**

yum install -y nscd

Installs nscd.

systemctl start nscd

Starts nscd.

systemctl stop nscd

Stops nscd.

systemctl restart nscd

Restarts nscd.

systemctl status nscd

Queries the status of nscd.

nscd -g

Returns the configuration of each parameter and the cache hit ratio after the configuration takes effect.

nscd -i

Invalidates the specified cached data. You can invalidate the cached data in the passwd, group, hosts, services, or netgroup databases. For example, you can run the nscd -i hosts command to invalidate the cached data in the hosts database.

cat /etc/nscd.conf

Queries the configurations of nscd.

vi /etc/nscd.conf

Modifies the configurations of nscd.

## **Install nscd**

By default, nscd is generally installed in Linux operating systems. If you are not sure whether nscd is installed on an ECS instance, you can run the following command:

```
systemctl status nscd#Check the status of nscd.
```

If the result shown in the following figure is returned, nscd is not installed.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705255.png)

Run the following command to install nscd:

```
yum install -y nscd
```

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705269.png)

Run the command shown in the following figure to check the status of nscd. If the result shown in the following figure is returned, nscd is installed but is not started.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807303071/p705311.png)

## **Enable nscd**

Run the following command to enable nscd:

```
systemctl start nscd
```

Run the command shown in the following figure to check the status of nscd. If the result shown in the following figure is returned, nscd is running.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807303071/p705299.png)

**Note**

To install nscd in Community Enterprise Operating System (CentOS) or Red Hat Enterprise Linux, run the yum install -y nscd command.

To install nscd in Debian or Ubuntu, run the apt-get install -y nscd command.

### **Configurations of nscd**

The `/etc/nscd.conf` file is the default configuration file of nscd. You can run the following command to view the configurations of nscd:

```
cat /etc/nscd.conf
```

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p706160.png)

### **Key parameters**

**Parameter**

**Description**

debug-level

reload-count

Specifies the maximum number of times the system automatically queries the cached data of successful DNS requests and updates the cached data.

paranoia

Specifies whether to enable the paranoia mode. If this mode is enabled, nscd periodically restarts.

restart-interval

Specifies the interval of restarts if the paranoia mode is enabled.

enable-cache

Specifies whether to enable the cache service.

positive-time-to-live

Specifies the time-to-live (TTL) of the cached data of successful DNS requests.

negative-time-to-live

Specifies the TTL of the cached data of unsuccessful DNS requests. We recommend that you set this parameter to 0 to prevent your service from being affected.

check-files

Specifies whether to check the modification time of the cached files. The files include the /etc/passwd, /etc/group, and /etc/hosts files. If the files are modified after the last check, the cached files are cleared.

persistent

Specifies whether to retain the cached data after nscd restarts. We recommend that you enable this feature if the paranoia mode is enabled.

shared

Specifies whether to share the memory mapping of the nscd databases with clients. The default value is yes. If you want to run the `nscd -g` command to query the cache hit ratio, set shared to no.

max-db-size

The maximum size of an nscd database. Unit: bytes.

**Important**

-   positive-time-to-live can be ignored. The TTL returned by DNS requests shall prevail.
    
-   You can run the `nscd -g` command to query the cache hit ratio only when shared is set to no.
    

## **Check the caching result of nscd**

### **Caching result When nscd is disabled**

1.  Run the following command on the ECS instance to capture UDP packets on port 53:
    
    ```
    tcpdump -i any udp and port 53
    ```
    
2.  Run the following command on the ECS instance three times when nscd is disabled:
    
    ```
    ping -c 1 -n www.taobao.com#Ping the domain name www.taobao.com.
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705927.png)
    

3.  View the corresponding captured UDP packets. You can find that three DNS requests are sent over port 53, and each DNS request is responded with a DNS record. This indicates that the DNS records are not cached. As a result, the ECS instance needs to send the DNS request to port 53 every time.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705929.png)
    

### **Caching result when nscd is enabled**

1.  Run commands to enable nscd and check whether nscd is enabled.
    
2.  Run the following command on the ECS instance consecutively six times when nscd is enabled: Capture packets on port 53 of the ECS instance.
    
    ```
    ping -c 1 -n www.taobao.com
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705936.png)
    
3.  View the corresponding captured packets. You can find that only the first DNS request is sent to port 53. This indicates that the subsequent DNS requests hit the DNS record cached by nscd and are not sent over port 53.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705939.png)
    
    **Important**
    
    During packet capture, you will find that even if you have pinged the domain name, the tcpdump command can still capture the packets of DNS requests for the domain name at regular intervals. This is caused by the automatic reload mechanism of nscd, which is a normal phenomenon. You can set reload-count to 0 to disable the automatic reload mechanism.
    
4.  You can run the following command to query the cache hit situation after you consecutively ping a domain name several times:
    
    ```
    nscd -g# Return the configuration of each parameter and the cache hit ratio after the configuration takes effect.
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705950.png)
