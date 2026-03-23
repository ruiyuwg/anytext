Improper firewall configuration on a cloud server is a common cause of inaccessible services or failed remote connections to an instance. This guide details a secure, standard procedure to manage the operating system (OS) firewall on a Linux instance. It covers how to check its status, enable it safely, open ports for specific services, and temporarily disable it for troubleshooting.

## How it works

A security group first filters all network traffic to and from an Elastic Compute Service (ECS) instance, and then the operating system firewall processes it. To reach the target application, traffic must be allowed by both the security group and the system firewall policies.

-   **Security group (cloud network layer)**
    
    -   **Function:** A [security group](/help/en/ecs/user-guide/overview-44) acts as a virtual firewall for your ECS, controlling inbound and outbound traffic for an instance. It operates outside the operating system and is the first line of defense.
        
    -   **Logic:** If a security group denies traffic on a specific port (such as port 22 for SSH), it blocks all external requests to that port, regardless of the instance's internal firewall settings.
        
-   **System firewall (instance layer)**
    
    -   **Function:** Firewall software, such as `firewalld` or `ufw`, runs inside the Linux operating system. It is **disabled by default**. It provides a second layer of granular control over traffic that the security group has already allowed.
        
    -   **Logic:** Traffic must first pass through the security group to reach the operating system firewall. The two have an "AND" relationship, meaning your application receives traffic only if both the security group and the OS firewall allow it.
        

## Instructions

### Check firewall status

Before making any changes, first check the current status of the firewall.

## **Alibaba Cloud Linux, CentOS, or Red Hat**

To check the status of the `firewalld` service, run the following command.

```
sudo firewall-cmd --state
```

-   `not running`: The firewall is disabled.
    
-   `running`: The firewall is enabled.
    
-   If the output is `command not found`, `firewalld` is not installed. You can install it by running `sudo yum install firewalld -y` or `sudo dnf install firewalld -y`.
    

## **Ubuntu or Debian**

To check the status of the `ufw` service, run the following command.

```
sudo ufw status
```

-   `Status: active`: The firewall is enabled.
    
-   `Status: inactive`: The firewall is disabled.
    
-   On Debian systems, if the output is `command not found`, `ufw` is not installed. We recommend running `sudo apt update && sudo apt install ufw -y` to install it for a more secure and convenient management experience.
    

### Enable the firewall

**Important**

Never enable the firewall before adding rules to allow necessary traffic. Doing so will sever your connection, potentially locking you out of the instance. Always follow the principle of "allow first, then enable."

## **Alibaba Cloud Linux, CentOS, or Red Hat**

1.  To ensure your remote management channel is not interrupted, permanently add the SSH service to the allow list.
    
    ```
    sudo firewall-cmd --permanent --add-service=ssh
    ```
    
2.  To apply the new configuration, reload the firewall rules.
    
    ```
    sudo firewall-cmd --reload
    ```
    
3.  Start the firewall service.
    
    ```
    sudo systemctl start firewalld
    ```
    
4.  **(Optional):** To ensure protection remains active after a reboot, set the firewall to start on boot.
    
    ```
    sudo systemctl enable firewalld
    ```
    

## **Ubuntu or Debian**

1.  Add a rule to allow all SSH connections.
    
    ```
    sudo ufw allow ssh
    ```
    
2.  Enable the firewall. When you enable `ufw`, it automatically loads existing `allow` rules and, by default, starts on boot.
    
    ```
    sudo ufw enable
    ```
    
    When you run this command, the system warns you that the operation may disrupt existing connections. Enter `y` to confirm. Because you have already allowed SSH, this will not interrupt your connection.
    

### Open a specific port or service

## **Alibaba Cloud Linux, CentOS, or Red Hat**

1.  **Open a specific port or service:**
    
    -   By service name (recommended):
        
        ```
        # Permanently allow the HTTP and HTTPS services
        sudo firewall-cmd --permanent --add-service=http
        sudo firewall-cmd --permanent --add-service=https
        ```
        
    -   By port number:
        
        ```
        # Permanently allow port 8080/TCP
        sudo firewall-cmd --permanent --add-port=8080/tcp
        ```
        
2.  **Apply the new rules:** You must reload the firewall after adding or removing rules.
    
    ```
    sudo firewall-cmd --reload
    ```
    
3.  **Verify that the rules are in effect:**
    
    This command lists all active rules in the current zone, including services, ports, and protocols.
    
    ```
    sudo firewall-cmd --list-all
    ```
    

## **Ubuntu or Debian**

With `ufw`, adding a rule makes it take effect immediately and permanently.

1.  **Open a specific port or service:**
    
    -   **By service name (recommended):**
        
        ```
        # Allow the HTTP and HTTPS services
        sudo ufw allow http
        sudo ufw allow https
        ```
        
    -   **By port number:**
        
        ```
        # Allow port 3306/TCP
        sudo ufw allow 3306/tcp
        ```
        
2.  **Verify that the rules are in effect:**
    
    To view enabled rules, including allowed and denied services, ports, and their status, run the following command.
    
    ```
    sudo ufw status
    ```
    

### **Disable the firewall**

To determine if a blocking policy on the instance is causing a network connectivity issue, you can temporarily disable the firewall for troubleshooting.

**Important**

Disabling the firewall is not recommended in a production environment. Re-enable it after you finish testing or resolve the issue.

## **CentOS, Red Hat, or Alibaba Cloud Linux**

```
sudo systemctl stop firewalld
```

## **Ubuntu or Debian**

```
sudo ufw disable
```

## Apply in production

-   **Best practices**
    
    -   **Principle of least privilege:** Only open the ports that are essential for your application. For core services like databases, you should only allow access from trusted IP addresses on the internal network and avoid exposure to the public Internet.
        
    -   **Maintain a backup connection:** Before making major changes to firewall rules, we recommend first establishing a [remote connection to the instance](/help/en/ecs/user-guide/connect-to-instance). An established session will persist even after firewall rules are changed, providing a backup channel to fix any issues.
        
-   **Risk prevention**
    
    -   **Logging and monitoring:** Regularly audit firewall logs to detect unusual access attempts.
        
        -   `firewalld`: The `journald` service typically manages these logs. To view them, use `sudo journalctl -u firewalld`.
            
        -   `ufw`: Logs are typically located in `/var/log/ufw.log`.
            

## FAQ

-   #### **Why is my service still inaccessible after I disabled the OS firewall?**
    
    This issue usually occurs when you overlook the cloud environment's first layer of protection. Please check the following in order:
    
    1.  **Check the security group:** Log on to the [ECS console - Security Groups page](https://ecs.console.alibabacloud.com/securityGroup), find the security group associated with your instance, and confirm that the inbound rules allow traffic on the required service port from the appropriate source IPs.
        
    2.  **Check the service listening status:** To confirm that your application has started successfully and is listening on the expected IP address (such as `0.0.0.0`) and port, run `ss -tunlp | grep <port_number>` or `netstat -tunlp | grep <port_number>` inside the instance.
        
    3.  **Check the network ACL:** If your instance is associated with a [network ACL](/help/en/vpc/network-acl-overview), check its rules to ensure they permit the relevant traffic.
        
-   #### **What should I do if I get a** `**command not found**` **error?**
    
    This indicates that the corresponding firewall management tool is not installed.
    
    -   On CentOS/Red Hat/Alibaba Cloud Linux, run `sudo yum install firewalld -y` or `sudo dnf install firewalld -y`.
        
    -   On Ubuntu/Debian, run `sudo apt update && sudo apt install ufw -y`.
