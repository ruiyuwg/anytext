Simple Log Service (SLS) supports data consumption using Logstash. Configure the Input plugin for SLS to integrate with Logstash, which lets you retrieve data from SLS and write the data to other systems, such as Kafka and HDFS.

## Features

-   Distributed consumption: Configure multiple servers to consume data from a single logstore simultaneously.
    
-   High performance: Based on the Java ConsumerGroup implementation, the consumption speed of a single core can reach 20 MB/s before compression.
    
-   High reliability: Consumption progress is saved on the server. If an exception occurs, consumption automatically resumes from the last checkpoint after recovery.
    
-   Automatic load balancing: Shards are automatically allocated based on the number of consumers. The load is automatically balanced when consumers are added or removed.
    

## Procedure

Download the Logstash installation package for your operating system from [Logstash](https://www.elastic.co/downloads/logstash).

This topic uses Linux as an example:

1.  Install Logstash. For more information, see [Logstash](https://www.elastic.co/docs/reference/logstash/installing-logstash#_yum).
    
    1.  Download and install the public signature key.
        
        ```
        sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
        ```
        
    2.  In the `/etc/yum.repos.d/` directory, create a file with a `.repo` suffix. For example, you can create a `logstash.repo` file and add the following content:
        
        ```
        [logstash-9.x]
        name=Elastic repository for 9.x packages
        baseurl=https://artifacts.elastic.co/packages/9.x/yum
        gpgcheck=1
        gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
        enabled=1
        autorefresh=1
        type=rpm-md
        ```
        
    3.  Download and install Logstash.
        
        ```
        sudo yum install logstash
        ```
        
2.  Install the input plug-in.
    
    1.  Download the input plug-in from [logstash-input-sls](https://github.com/aliyun/logstash-input-logservice).
        
    2.  Install the input plug-in.
        
        ```
        /usr/share/logstash/bin/logstash-plugin install logstash-input-sls.zip
        ```
        
        **Note**
        
        For information about potential installation failures and their solutions, see [Plug-in installation and configuration](https://rubygems.org/gems/logstash-input-sls).
        
3.  Create the `logstash` user. Logstash must run as a non-root user.
    
    1.  Create the `logstash` user.
        
        ```
        sudo adduser --system --no-create-home --group logstash
        ```
        
    2.  Set permissions for the logstash user. Ensure that the `logstash` user owns the Logstash-related directories, such as `/usr/share/logstash`, `/etc/logstash`, and `/var/log/logstash`.
        
        ```
        sudo chown -R logstash:logstash /usr/share/logstash /etc/logstash /var/log/logstash
        ```
        
    3.  Verify that the `logstash` user is created.
        
        ```
        id logstash
        ```
        
        The output displays the User ID (UID) and Group ID (GID) of the `logstash` user. This indicates that the user is created.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1983054571/p974481.png)
        
4.  Start Logstash as the `logstash` user.
    
    1.  In the `/etc/logstash` directory, create a file with a .conf suffix. This topic uses a source file named `logstash-sample.conf` in this directory as an example.
        
    2.  In the `logstash-sample.conf` file, add the sample code and start Logstash as the `logstash` user.
        
        ```
        sudo -u logstash /usr/share/logstash/bin/logstash -f /etc/logstash/logstash-sample.conf
        ```
        
        The following example shows how to configure Logstash to consume data from a logstore and print the data to standard output. The parameters are also described:
        
        #### **Parameter descriptions**
        
        ## **Sample code**
        
        ```
        input {
          logservice{
          endpoint => "your project endpoint"
          access_id => "your_accesskey_id"
          access_key => "your_accesskey_secret"
          project => "your project name"
          logstore => "your logstore name"
          consumer_group => "consumer group name"
          consumer_name => "consumer name"
          position => "end"
          checkpoint_second => 30
          include_meta => true
          consumer_name_with_ip => true
          }
        }
        
        output {
          stdout {}
        }
        ```
        
        **endpoint**`_string_` (Required)
        
        The endpoint of the project in SLS. For more information, see [Service endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
        
        **access\_id**`_string_` (Required)
        
        The AccessKey ID of your Alibaba Cloud account. The AccessKey ID must have permissions to manage consumer groups. For more information, see [Grant permissions to consume data from a logstore](/help/en/sls/use-custom-policies-to-grant-permissions-to-a-ram-user#4f866f00249iy).
        
        **access\_key**`_string_` (Required)
        
        The AccessKey secret of your Alibaba Cloud account. The AccessKey secret must have permissions to manage consumer groups. For more information, see [Grant permissions to consume data from a logstore](/help/en/sls/use-custom-policies-to-grant-permissions-to-a-ram-user#4f866f00249iy).
        
        **project**`_string_` (Required)
        
        The name of the SLS project.
        
        **logstore**`_string_` (Required)
        
        The name of the logstore.
        
        **consumer\_group**`_string_` (Required)
        
        The name of the consumer group.
        
        **consumer\_name**`_string_` (Required)
        
        The name of the consumer. The consumer name must be unique within the same consumer group.
        
        **position**`_string_` (Required)
        
        The position from which to start consumption.
        
        -   **begin**: Start consumption from the first piece of data written to the logstore.
            
        -   **end**: Start consumption from the current point in time.
            
        -   **yyyy-MM-dd HH:mm:ss**: Start consumption from a specified point in time.
            
        
        **checkpoint\_second**`number` (Optional)
        
        The interval, in seconds, at which checkpoints are created. The value must be an integer from 10 to 60. The default value is 30.
        
        **include\_meta**`boolean` (Optional)
        
        Specifies whether to include metadata in the data. Metadata includes the source, time, tag, and topic. The default value is true.
        
        **consumer\_name\_with\_ip**`boolean` (Optional)
        
        Specifies whether to include an IP address in the consumer name. The default value is true. For distributed consumption, you must set this parameter to true.
