In scenarios that use a large number of ports or dynamically assigned ports, configuration management becomes significantly complex if you configure listeners one by one. In addition, configurations errors may result in security risks. Network Load Balancer (NLB) supports the multi-port listening feature, which allows NLB to listen by port range and forward network traffic by using multiple ports of a listener. Multi-port listening simplifies configuration management and reduces security risks.

## What is multi-port listening?

Multi-port listening allows NLB to listen by port range and forward network traffic destined for the port range. Listening is no longer limited to a specific port.

After you enable multi-port listening for an NLB instance, the NLB instance listens on all ports that fall into the specified port range and automatically forwards requests directly to the same ports on backend servers.

Multi-port listening allows you to flexibly manage network traffic on multiple ports and significantly simplifies configuration management. Multi-port listening is ideal for scenarios that use a large number of ports or dynamically assigned ports.

### **Key features**

1.  Listening by port range: Multi-port listening allows you to specify a port range that contains consecutive port numbers, such as `1000 to 2000`. NLB listens on all ports that fall into the specified port range.
    
2.  Simplified configurations: Multi-port listening eliminates the need to configure listeners one by one. Multi-port listening is ideal for scenarios that use a large number of ports which remain the same between listeners and backend servers. Multi-port listening allows you to flexibly manage network traffic even if the service ports are frequently changed or scaled out. You do not need to add or change ports one by one.
    

### **Use scenarios**

Multi-port listening is ideal for scenarios that use a large number of ports or dynamically assigned ports, such as:

-   Online games, including online single-player role-playing games (RPGs), player versus environment (PvE) games, and simulation games (SLGs). In the preceding scenarios, a large number of ports are used to process game data in different scenarios. Ports are assigned to different game scenarios or game rooms.
    
-   Real-time communication, including video conferencing and online education. In the preceding scenarios, a large number of ports are used to process real-time audio and video data and signaling data.
    

## Sample scenario

A company created a virtual private cloud (VPC) in the China (Hangzhou) region. An NLB instance is deployed in the VPC. Two Elastic Compute Service (ECS) instances named ECS01 and ECS02 are added to the server group of the NLB instance. Accessible applications are deployed on the ECS instances.

The company wants to enable multi-port listening for the NLB instance to listen on ports 8080 to 8090. The ports are assigned to different services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8855422371/CAEQJxiBgICt4ICKgBkiIGRlZWY4NjJiYmRlZDQ1MTRhMzk3NTU3OWUyOTI3OTE34052369_20231028200522.133.svg)

## **Limits**

To enable multi-port listening for an NLB instance, you must associate the NLB instance with a server group that has multi-port listening enabled. You cannot change the status of multi-port listening for listeners or server groups. To enable multi-port listening, you must create a server group and a listener and enable multi-port listening.

## Prerequisites

-   A VPC is created in the China (Hangzhou) region. A vSwitch is created in each of two zones. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#title-gcw-98r-tyn).
    
-   An ECS instance is created in each of the vSwitches. Applications that use ports 8080 to 8090 are deployed on the ECS instances.
    
    Sample code for deploying test applications
    
    In this example, CentOS 7.9 and NGINX 1.20.1 are used. The following sample script shows how to deploy test applications that use port 8080 to port 8090.
    
    1.  Log on to ECS01.
        
        1.  Run the `vi ECS01_server_install.sh` command and press the `I` key to open the editor.
            
        2.  Copy and paste the following commands:
            
            ```
            #!/bin/bash
            
            # Install NGINX
            yum install -y nginx
            
            # Specify a directory for the NGINX server block
            NGINX_CONF_DIR=/etc/nginx/conf.d
            
            # Specify a directory for the index.html file
            HTML_DIR=/usr/share/nginx/html
            
            # Recursively create and configure HTML files
            for PORT in $(seq 8080 8090); do
              CONF_FILE=${NGINX_CONF_DIR}/app_${PORT}.conf
              HTML_FILE=${HTML_DIR}/index_app${PORT}.html
              
              # Create HTML content
              echo "Hello World! This is ECS01, server port is ${PORT}." > ${HTML_FILE}
              
              # Add NGINX server block configurations
              cat > ${CONF_FILE} << EOF
            server {
                listen ${PORT};
                server_name localhost;
            
                location / {
                    root ${HTML_DIR};
                    index index_app${PORT}.html;
                }
            }
            EOF
            
            done
            
            # Test whether the NGINX configuration file is correct
            nginx -t && systemctl start nginx
            
            echo "Nginx has been configured to listen on ports 8080 to 8090."
            
            # Repeatedly run the curl command to access ports 8080 to 8090 of localhost
            for PORT in $(seq 8080 8090); do
              echo "Accessing http://localhost:${PORT}"
              curl http://localhost:${PORT}
            done
            ```
            
        3.  Press the `Esc` key and enter `:wq` to save the modifications.
            
        4.  Run the `sudo sh ECS01_server_install.sh` command to execute the script.
            
        5.  The following response shows that ports 8080 to 8090 are accessible:
            
            ```
            ...
            Nginx has been configured to listen on ports 8080 to 8090.
            Accessing http://localhost:8080
            Hello World! This is ECS01, server port is 8080.
            Accessing http://localhost:8081
            Hello World! This is ECS01, server port is 8081.
            Accessing http://localhost:8082
            Hello World! This is ECS01, server port is 8082.
            Accessing http://localhost:8083
            Hello World! This is ECS01, server port is 8083.
            Accessing http://localhost:8084
            Hello World! This is ECS01, server port is 8084.
            Accessing http://localhost:8085
            Hello World! This is ECS01, server port is 8085.
            Accessing http://localhost:8086
            Hello World! This is ECS01, server port is 8086.
            Accessing http://localhost:8087
            Hello World! This is ECS01, server port is 8087.
            Accessing http://localhost:8088
            Hello World! This is ECS01, server port is 8088.
            Accessing http://localhost:8089
            Hello World! This is ECS01, server port is 8089.
            Accessing http://localhost:8090
            Hello World! This is ECS01, server port is 8090.
            ```
            
            If a port is inaccessible by using the curl command, check whether the port is occupied or whether the command is incorrect.
            
        
    2.  Log on to ECS02.
        
        1.  Run the `vi ECS02_server_install.sh` command and press the `I` key to open the editor.
            
        2.  Copy and paste the following commands:
            
            ```
            #!/bin/bash
            
            # Install NGINX
            yum install -y nginx
            
            # Specify a directory for the NGINX server block
            NGINX_CONF_DIR=/etc/nginx/conf.d
            
            # Specify a directory for the index.html file
            HTML_DIR=/usr/share/nginx/html
            
            # Recursively create and configure HTML files
            for PORT in $(seq 8080 8090); do
              CONF_FILE=${NGINX_CONF_DIR}/app_${PORT}.conf
              HTML_FILE=${HTML_DIR}/index_app${PORT}.html
              
              # Create HTML content
              echo "Hello World! This is ECS02, server port is ${PORT}." > ${HTML_FILE}
              
              # Add NGINX server block configurations
              cat > ${CONF_FILE} << EOF
            server {
                listen ${PORT};
                server_name localhost;
            
                location / {
                    root ${HTML_DIR};
                    index index_app${PORT}.html;
                }
            }
            EOF
            
            done
            
            # Test whether the NGINX configuration file is correct
            nginx -t && systemctl start nginx
            
            echo "Nginx has been configured to listen on ports 8080 to 8090."
            
            # Repeatedly run the curl command to access ports 8080 to 8090 of localhost
            for PORT in $(seq 8080 8090); do
              echo "Accessing http://localhost:${PORT}"
              curl http://localhost:${PORT}
            done
            ```
            
        3.  Press the `Esc` key and enter `:wq` to save the modifications.
            
        4.  Run the `sudo sh ECS02_server_install.sh` command to execute the script.
            
        5.  The following response shows that ports 8080 to 8090 are accessible:
            
            ```
            ...
            Nginx has been configured to listen on ports 8080 to 8090.
            Accessing http://localhost:8080
            Hello World! This is ECS02, server port is 8080.
            Accessing http://localhost:8081
            Hello World! This is ECS02, server port is 8081.
            Accessing http://localhost:8082
            Hello World! This is ECS02, server port is 8082.
            Accessing http://localhost:8083
            Hello World! This is ECS02, server port is 8083.
            Accessing http://localhost:8084
            Hello World! This is ECS02, server port is 8084.
            Accessing http://localhost:8085
            Hello World! This is ECS02, server port is 8085.
            Accessing http://localhost:8086
            Hello World! This is ECS02, server port is 8086.
            Accessing http://localhost:8087
            Hello World! This is ECS02, server port is 8087.
            Accessing http://localhost:8088
            Hello World! This is ECS02, server port is 8088.
            Accessing http://localhost:8089
            Hello World! This is ECS02, server port is 8089.
            Accessing http://localhost:8090
            Hello World! This is ECS02, server port is 8090.
            ```
            
            If a port is inaccessible by using the curl command, check whether the port is occupied or whether the command is incorrect.
            
        
    
-   The security group of ECS01 and ECS02 allow requests to ports 8080 to 8090.
    
-   An Internet-facing NLB instance is created and **running** in the VPC. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922).
    
-   A domain name is registered and an Internet content provider (ICP) number is obtained for the domain name. For more information, see [Register a generic domain name](/help/en/dws/user-guide/how-to-register-a-domain-name) and [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    

## Step 1: Create a server group that supports multi-port listening

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  In the left-side navigation pane, choose **NLB** **\>** **Server Groups**.
    
4.  On the **Server Groups** page, click **Create Server Group**.
    
5.  Configure the server group. The following table describes some of the parameters. Other parameters use the default values. For more information, see [Create and manage a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group).
    
    **Parameter**
    
    **Description**
    
    **Server Group Type**
    
    Select the type of server group that you want to create.
    
    **Server Group Name**
    
    Enter a name for the server group.
    
    **VPC**
    
    Select the VPC of the NLB instance from the drop-down list. Only servers in the VPC of the NLB instance can be added to the server group.
    
    **Multi-port Forwarding**
    
    **Turn on** multi-port forwarding.
    
    After you enable the multi-port forwarding feature, you do not need to specify ports when you add servers to the server group. NLB forwards requests directly to the backend servers based on the requested ports.
    
    **Important**
    
    If you enable multi-port forwarding for a listener, you can associate the listener only with server groups that have multi-port forwarding enabled.
    
    **Configure Health Check**
    
    **Turn on** health checks.
    
    **Health Check Port**
    
    To enable multi-port forwarding, you must specify a health check port.
    
    Health checks probe the port to check the health status of backend servers. If the port does not return a valid response, the backend server is declared unhealthy.
    
    In this example, the health check port is set to port **8080**.
    

6.  After you complete the configurations, click **Create**. After the server group is created, click **Add Backend Server** in the message that appears.
    
7.  Select ECS01 and ECS02 as backend servers. Other parameters use the default values. You do not need to specify server ports if multi-port listening is enabled. Click **OK**.
    

## Step 2: Create a listener that supports multi-port listening

**Note**

In this example, a TCP listener is created.

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region where the NLB instance is deployed.
    
3.  On the **Instances** page, find the NLB instance that you want to manage and click **Create Listener** in the **Actions** column.
    
4.  Configure the listener. The following table describes some of the parameters. Other parameters use the default values. For more information, see [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener). After you complete the configurations, click **Submit**.
    
    Configure the listener:
    
    **Parameter**
    
    **Description**
    
    **Multi-port Listening/Forwarding**
    
    **Turn on** multi-port listening and forwarding.
    
    **Listener Port Range**
    
    Specify the first and last ports of the port range that you want to listen on. In this example, the port range starts with port **8080** and ends with port **8090**.
    
    NLB listens on all ports that fall into the specified port range and forwards requests destined for the ports directly to the backend server ports.
    
    **Important**
    
    After you create a listener that supports multi-port listening, the listener port range cannot be modified.
    
    Associate the listener with a server group:
    
    **Parameter**
    
    **Description**
    
    **Server Group**
    
    Select the server group that contains ECS01 and ECS02 and supports multi-port listening.
    
    **Important**
    
    Make sure that multi-port forwarding is enabled for the server group. Otherwise, the server group fails to be associated with the listener.
    

## Step 3: Add a DNS record

In actual business scenarios, we recommend that you use CNAME records to map custom domain names to the domain name of your NLB instance.

1.  In the left-side navigation pane, choose **NLB** > **Instances**.
    
2.  On the **Instances** page, copy the domain name of the NLB instance that you want to manage.
    
3.  Perform the following steps to create a CNAME record:
    
    **Note**
    
    If your domain name is not registered by using Alibaba Cloud Domains, you must add your domain name to Alibaba Cloud DNS before you can configure a DNS record. For more information, see [Manage domain names](/help/en/dns/domain-management#topic-2035895). If your domain name is registered by using Alibaba Cloud Domains, skip this step.
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/#/dns/domainList).
        
    2.  On the **Authoritative DNS Resolution** page, find your domain name and click **DNS Settings** in the **Actions** column.
        
    3.  On the **DNS Settings** tab of the domain name details page, click **Add DNS Record**.
        
    4.  In the **Add DNS Record** panel, configure the parameters and click **OK**. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Record Type**
        
        Select **CNAME** from the drop-down list.
        
        **Hostname**
        
        The prefix of the domain name. In this example, @ is entered.
        
        **Note**
        
        If the domain name is a root domain name, enter @.
        
        **DNS Request Source**
        
        Select Default.
        
        **Record Value**
        
        Enter the CNAME, which is the domain name of the NLB instance.
        
        **TTL**
        
        Specify a time-to-live (TTL) value for the CNAME record to be cached on the DNS server. In this example, the default value is used.
        

## Step 4: Test multi-port listening

1.  Test the availability of the NLB instance.
    
    1.  In this example, a Linux client is used. If you use CentOS and telnet is not installed, run the `yum install -y telnet` command to install telnet.
        
    2.  Run the `telnet domain name port` command multiple times. The port number must fall into 8080 to 8090. If you receive a response packet that includes **Connected to ...**, the NLB instance can forward requests to backend servers.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'
        ```
        
        Access the domain name and a port that falls into 8080 to 8090 from a browser, such as `http://domain name:8080`. If you receive a response as shown in the following figure, the client can access the application.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109208171/p796461.png)
        
2.  Simulate faults.
    
    1.  Stop the application on ECS01. Run the `systemctl stop nginx.service` command on ECS01 to stop the application.
        
    2.  Wait a few minutes and run the `telnet domain name port` command on the client again. The port number must fall into 8080 to 8090. You can still receive a response packet that includes **Connected to ...**.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'
        ```
        
        Access the domain name and a port that falls into 8080 to 8090 from a browser, such as `http://domain name:8080`. If you receive a response as shown in the following figure, the client can access the application.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109208171/p796474.png)
        
    3.  Start the application on ECS01 and stop the application on ECS02. Run the `systemctl start nginx.service` command on ECS01 to restart the application, and run the `systemctl stop nginx.service` command on ECS02 to stop the application.
        
    4.  Wait a few minutes and run the `telnet domain name port` command on the client again. The port number must fall into 8080 to 8090. You can still receive a response packet that includes **Connected to ...**.
        
        ```
        Trying *.*.*.*...
        Connected to www.example.com.
        Escape character is '^]'
        ```
        
        Access the domain name and a port that falls into 8080 to 8090 from a browser, such as `http://domain name:8080`. If you receive a response as shown in the following figure, the client can access the application.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109208171/p796461.png)
        
3.  The preceding tests show that the single point of failure (SPOF) caused by a single server does not compromise the availability of the NLB instance, and the applications on the backend servers are accessible over any port that falls into 8080 to 8090.
