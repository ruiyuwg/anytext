Each Elastic Compute Service (ECS) instance in a Virtual Private Cloud (VPC) has a DNS query limit of 5,000 queries per second. If the number of DNS queries from a single instance exceeds this threshold, the instance is subject to rate limiting. This means that the Service-Level Agreement (SLA) for availability cannot be guaranteed. To mitigate this issue, consider the following two approaches:

-   Increase the number of ECS instances so that DNS query requests can be distributed across more ECS instances, thereby reducing the number of DNS query requests for each ECS instance.
    
-   Enable the nscd (Name Service Cache Daemon) service on the ECS host for cache acceleration.
    
    **Note**
    
    When the nscd service is enabled, it will take longer for changes to DNS records to take effect.
    

## **What is nscd?**

nscd is a system cache service that caches name service information, such as passwd, group, hosts, services, and netgroup. It improves the system's cache hit ratio by reducing the number of name service queries and the amount of traffic, which results in faster service responses. This guide focuses on the hosts configuration, which is used to reduce the number of DNS queries from ECS instances.

## **Common Linux commands for nscd**

**Command**

**Description**

yum install -y nscd

Install nscd.

systemctl start nscd

Start nscd.

systemctl stop nscd

Stop nscd.

systemctl restart nscd

Restart nscd.

systemctl status nscd

Query the operational status of nscd.

nscd -g

Outputs the configuration status of various parameters and cache hit ratio statistics after they take effect.

nscd -i

Invalidates the specified cache. You can specify passwd, group, hosts, services, netgroup, etc. For example: nscd -i hosts.

cat /etc/nscd.conf

Query the current nscd configuration details.

vi /etc/nscd.conf

Modify nscd configuration parameters.

## **Installing nscd**

nscd is generally installed by default in Linux operating systems. If you are not sure whether nscd is already installed on your current ECS instance, you can execute the following command to check:

```
systemctl status nscd # Check the running status of nscd.
```

If the detection result is as follows, it means nscd is not installed.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705255.png)

Execute the following command to install:

```
yum install -y nscd
```

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705269.png)

Now execute the command again to check the running status of nscd. nscd is installed but not running.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807303071/p705311.png)

## **Enabling the nscd service**

Enter the following command to enable the nscd service:

```
systemctl start nscd
```

Now execute the command again to check the running status of nscd. nscd is now running.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5807303071/p705299.png)

**Note**

To install nscd on a CentOS or Red Hat operating system, run the command: `yum install -y nscd`.

To install nscd on a Debian or Ubuntu operating system, run the command: `apt-get install -y nscd`.

### **Nscd configuration parameters**

The default configuration file path for nscd is `/etc/nscd.conf`. You can view the nscd configuration by executing the following command:

```
cat /etc/nscd.conf
```

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p706160.png)

### **Key configuration parameter descriptions**

**Configuration parameter**

**Description**

debug-level

reload-count

Related to active cache refresh. This configuration parameter determines the number of times a successful request cache actively queries and updates the cache.

paranoia

Paranoia mode. If enabled, nscd will restart periodically.

restart-interval

If paranoia is enabled, this parameter indicates the restart interval time.

enable-cache

Enable cache service.

positive-time-to-live

The time-to-live for successful response caches.

negative-time-to-live

The time-to-live for failed response caches. It is recommended to set it to 0 to prevent failed caches from affecting business requests.

check-files

Periodically check the modification time of cache files such as /etc/passwd, /etc/group, /etc/hosts. If the file has been changed since the last check, the cache is invalidated.

persistent

When enabled, nscd retains the previous cache content after restart. If paranoia is enabled, it is recommended to enable this feature.

shared

The memory mapping for serving the nscd database is shared with clients. The default is yes. If you want to use the `nscd -g` command to query the cache hit ratio, shared needs to be set to no.

max-db-size

The maximum size of the nscd cache database, in bytes.

**Important**

-   positive-time-to-live has no practical significance. The TTL value is based on the TTL returned by the DNS query request.
    

## **Testing nscd cache effectiveness**

### **Testing with nscd disabled**

1.  Execute the following command on the ECS instance to capture UDP packets on port 53:
    
    ```
    tcpdump -i any udp and port 53
    ```
    
2.  Then, with nscd disabled, execute the following command on the ECS instance multiple times, testing three times consecutively.
    
    ```
    ping -c 1 -n www.taobao.com # Send one ping command to the domain name www.taobao.com.
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705927.png)
    
3.  Check the corresponding packet capture results. You can see three DNS query requests on port 53, and each DNS query request returns a domain name resolution record. This proves that the DNS query records are not being cached, and the ECS instance needs to send DNS query requests through port 53 each time.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705929.png)
    

### **Testing with nscd enabled**

1.  Execute the start command to enable the nscd service, and confirm that nscd is enabled using the status query command.
    
2.  With nscd enabled, execute the following command on the ECS instance, testing six times consecutively. At the same time, capture packets on port 53 of the ECS instance.
    
    ```
    ping -c 1 -n www.taobao.com
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705936.png)
    
3.  Check the corresponding packet capture results. You can see that only one DNS query request is captured on port 53, proving that the DNS query requests hit the nscd cache and did not send DNS query requests through port 53.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705939.png)
    
    **Important**
    
    During packet capture, you may notice that even after the ping command has completed, tcpdump still captures DNS query request packets for the relevant domain name at intervals. This is due to the active refresh mechanism of nscd and is normal behavior. You can disable the active refresh mechanism by setting the reload-count parameter to 0.
    
4.  You can also check the cache hit statistics. Run the ping command multiple times over a period of time. Then, run the following command to view the statistics:
    
    ```
    nscd -g # Output the configuration of all active parameters and cache hit ratio statistics.
    ```
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807303071/p705950.png)
