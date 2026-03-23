The default version of curl for Alibaba Cloud Linux 2 is 7.29.0. If your business requires a later version of curl, you can install and enable `curl-7.61.1` by performing the operations described in this topic.

## Background information

To avoid incompatibility issues, Alibaba Cloud Linux 2 does not support curl upgrades within the system but provides a way to install and enable the version of `curl-7.61.1`.

## Procedure

1.  Run the following command to install the Alibaba Cloud experimentals repository:
    
    ```
    sudo yum install -y alinux-release-experimentals
    ```
    
2.  Run the following commands in sequence to install curl and its dependency:
    
    1.  Install curl.
        
        ```
        sudo yum install -y httpd24-curl
        ```
        
    2.  Install the curl dependency httpd24-libcurl-devel.
        
        ```
        sudo yum install -y httpd24-libcurl-devel
        ```
        
    
3.  Run the following command to enable curl:
    
    ```
    source /opt/rh/httpd24/enable
    ```
    
4.  Run the following command to check the version of curl:
    
    ```
    curl --version
    ```
    
    The command output shown in the following figure indicates that `curl-7.61.1` is installed. ![al2-curl](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0572928161/p253998.png)
