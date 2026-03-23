redis-cli is a command-line tool that is included with Redis. You can use redis-cli to connect to and manage Tair and Redis instances from an ECS instance or an on-premises device. This topic describes how to install redis-cli, connect to an instance, and troubleshoot common connection errors.

## **Free trial**

Alibaba Cloud offers a free trial that allows new, eligible users to try Alibaba Cloud products for a limited time. For more information, see [Free Trial](https://free.aliyun.com/?searchKey=redis).

## Connection workflow

**Procedure**

**Description**

1\. Set the password for the instance account.

You can choose one of the following methods:

-   Set the password for the default account of the instance. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
    
-   Create a new account and set a password. For more information, see [Create and manage accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).
    

2\. Add IP addresses to a whitelist.

Only IP addresses in the whitelist can connect to the instance. You must determine the network type based on your device and add the corresponding IP address to the instance whitelist.

-   [ECS](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome) (recommended): Use a virtual private cloud (VPC).
    
    Ensure that the ECS instance and your instance are in the same VPC. Then, add the [private IP address of the ECS instance](/help/en/ecs/user-guide/ip-address/#10a7bff6c9th3) to the instance whitelist.
    
    **Note**
    
    If the ECS instance and your instance are in different VPCs, such as in different regions, you must add the public IP address of the ECS instance to the whitelist. You can then connect from the ECS instance to the public endpoint of your instance.
    
-   On-premises device: Use the internet.
    
    Add the [public IP address of the on-premises device](/help/en/redis/user-guide/use-a-public-endpoint-to-connect-to-an-apsaradb-for-redis-instance#section-bw4-scz-x52) to the instance whitelist.
    

For more information about how to add IP addresses to a whitelist, see [Set IP whitelists](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).

3\. Obtain the connection information of the instance.

-   When connecting over a VPC: Obtain the **VPC** endpoint of the instance in the console.
    
-   When connecting over the internet: Apply for and obtain a [public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127) for the instance in the console.
    
    **Note**
    
    By default, instances have only **VPC** endpoints. To connect over the internet, you must apply for a public endpoint.
    

For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).

4\. Use redis-cli to connect to the instance.

In the directory where you unzipped redis-cli, run the relevant commands.

-   Connection command: `redis-cli -h hostname -p port`
    
    Example connection command: `redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379`
    
-   Password command: `AUTH user:password`
    
    Example password command: `AUTH testaccount:Rp829dlwa`
    

For more information, see [Connect to a Redis or Tair instance](#section-o3i-g1m-xis) in this topic.

## **Install redis-cli**

If redis-cli is not installed on your device, you can follow these instructions to install it.

redis-cli installation instructions

When you install Redis on an ECS instance or an on-premises device, redis-cli is also installed. The version of redis-cli does not need to match the version of your Tair (Redis OSS-compatible) instance.

1.  Log on to the device where you want to install redis-cli, such as an ECS instance or an on-premises device.
    
2.  Download and install redis-cli.
    
    ## Linux
    
    Run the following command to install GCC dependencies.
    
    ```
    sudo yum -y install gcc
    ```
    
    Run the following command to download the Redis source file.
    
    ```
    wget https://download.redis.io/releases/redis-7.2.0.tar.gz
    ```
    
    **Note**
    
    This topic uses Redis 7.2.0 as an example. You can also install other versions. For more information, see the [Redis official website](https://redis.io/download).
    
    Run the following command to unzip the Redis source file.
    
    ```
    tar xzf redis-7.2.0.tar.gz
    ```
    
    Run the following command to go to the unzipped directory. Then, compile and install the Redis source files:
    
    ```
    cd redis-7.2.0&&make
    ```
    
    **Note**
    
    Compilation and installation take some time, typically 2 to 3 minutes.
    
    ## macOS
    
    On macOS, you can use the Homebrew package manager to install the Redis client.
    
    **Install Homebrew (if not already installed)**
    
    1.  Open Terminal.
        
    2.  Copy and paste the following command into Terminal, and then press Enter. This command downloads and runs the Homebrew installation script.
        
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    
    3.  Follow the on-screen instructions. You may need to enter your password.
        
    
    **Use Homebrew to install Redis**
    
    In Terminal, run the following command to install the Redis toolset, which includes redis-cli:
    
    ```
    brew install redis
    ```
    
    This command downloads and installs the latest stable version of Redis on your system. After the installation is complete, you can run the command `which redis-cli` in Terminal to find the location of redis-cli.
    
    ## Windows
    
    Only 64-bit Windows systems are supported.
    
    1.  Download the [Redis-x64-3.2.100.zip](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/109395/cn_zh/1608025472468/Redis-x64-3.2.100.zip) file.
        
        **Note**
        
        This topic uses Redis 3.2 as an example. You can also install other versions. For more information, see [MicrosoftArchive-Redis](https://github.com/MicrosoftArchive/redis/tags).
        
    2.  Unzip the Redis-x64-3.2.100.zip file to your target installation directory.
        
    

## Connect to a Redis or Tair instance

1.  Go to the directory where redis-cli is installed.
    
    ## Linux
    
    Go to the ..\\redis-7.2.0\\src directory. For example, run `cd /home/redis-7.2.0/src`.
    
    ## macOS
    
    Go to the ../redis-cli directory. For example, run `cd /opt/homebrew/bin`.
    
    ## Windows
    
    Open the command-line window and go to the directory where redis-cli is located.
    
2.  Run the following command to connect to the instance using redis-cli:
    
    ```
    ./redis-cli -h <hostname> -p <port> [-c]
    ```
    
    **Note**
    
    To start redis-cli in Windows PowerShell, you can run the command `.\redis-cli -h hostname -p port [-c]`.
    
    Table 1. Parameters
    
    **Parameter**
    
    **Description**
    
    **How to obtain**
    
    _hostname_
    
    The endpoint of the instance.
    
    -   When connecting over a VPC: Get the VPC endpoint of the instance.
        
    -   When connecting over the internet: Get the public endpoint of the instance.
        
    
    For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).
    
    _port_
    
    The port number of the instance.
    
    The default port number is 6379. You can also customize the port number. For more information, see [Change the endpoint or port](/help/en/redis/user-guide/change-the-endpoint-or-port-number-of-an-instance#concept-yyt-svt-j2b).
    
    \-c
    
    Enable cluster mode.
    
    This mode is available only for [cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb) instances when you connect using a [direct connection address](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225).
    
    Connection examples:
    
    -   Default endpoint (for endpoints of standard architecture instances or proxy endpoints of cluster architecture instances):
        
        ```
        ./redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379
        ```
        
    -   Direct connection endpoint for cluster architecture instances:
        
        ```
        ./redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379 -c
        ```
        
    
3.  Run the following command to complete password authentication:
    
    ```
    AUTH <password>
    ```
    
    Table 2. Parameters
    
    **Parameter**
    
    **Description**
    
    _password_
    
    Enter the account and password based on the account type:
    
    -   Default account (usually named `default` or with the instance ID): Enter only the password.
        
    -   Standard account: The password format is `user:password`. For example, if the custom account is `testaccount` and the password is `Rp829dlwa`, you must enter the password as `testaccount:Rp829dlwa`.
        
    
    **Note**
    
    -   If you forgot your password or have not set one, reset it. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
        
    -   If [password-free access over a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is enabled for the instance, password authentication is not required when you connect to the instance over the VPC. You can run commands directly.
        
    
    Example:
    
    ```
    AUTH testaccount:Rp829dlwa
    ```
    
    A response of `OK` indicates that the connection is successful and you can run commands.
    
    -   If an error occurs, see [Common errors](#section-6nz-rd6-1t8).
        
    -   For information about the commands that the instance supports, see [Command overview](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb).
        
    

## Common errors

**Note**

If the minor version of your instance is outdated, the returned error messages may be different from those in the following table. You can upgrade the instance to the latest minor version. For more information, see [Update the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

**Error message**

**Cause and solution**

`(error) ERR illegal address`

The correct IP address is not added to the whitelist. You can add the correct IP address to the whitelist as described in Step 2 of the [Connection workflow](#a6535a1606r21) section.

`(error) ERR client ip is not in whitelist`

-   `(error) ERR invalid password`
    
-   `(error) WRONGPASS invalid username-password pair`
    

The password is incorrect. Use the correct password and format. The password format varies based on the account type.

-   Default account (usually named `default` or with the instance ID): Enter only the password.
    
-   Standard account: The password format is `user:password`. For example, if the custom account is `testaccount` and the password is `Rp829dlwa`, you must enter the password as `testaccount:Rp829dlwa`.
    

**Note**

-   If you use a third-party database management tool, such as RDM, to connect to an instance, you must enter the password in the `user:password` format in the password field.
    
-   If you forgot your password, you can reset it. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
