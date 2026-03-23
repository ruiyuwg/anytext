This topic shows you how to manually install a specific version of MySQL on a Linux-based Elastic Compute Service (ECS) instancex.

## **Prerequisites**

-   A public IP address is automatically assigned to the ECS instance. Alternatively, an elastic IP address (EIP) is associated with the ECS instance. For instructions on how to enable public bandwidth, see [Enable public bandwidth](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth).
    
-   The security group for the instance must allow inbound traffic on port 22. For instructions, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    

## **Deploy MySQL**

## Alibaba Cloud Linux 3

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Install MySQL.
    
    ```
    # Install compat-openssl10, which is compatible with earlier versions of OpenSSL libraries. 
    sudo yum install -y compat-openssl10
    # Add an official MySQL repository.
    sudo rpm -Uvh https://repo.mysql.com/mysql84-community-release-el8-1.noarch.rpm
    # Install MySQL.
    sudo dnf install -y mysql-server
    # Start and configure MySQL to automatically start on system startup.
    sudo systemctl start mysqld
    sudo systemctl enable mysqld
    ```
    
3.  Retrieve the temporary root password.
    
    ```
    echo $(PASSWORD=$(sudo grep 'temporary password' /var/log/mysqld.log); PASSWORD=${PASSWORD##* }; echo $PASSWORD)
    ```
    
4.  Run the secure installation script.
    
    ```
    sudo mysql_secure_installation
    ```
    
    1.  Enter the temporary password for the `root` user.
        
        **Note**
        
        The password is not displayed as you type. Ensure you enter it correctly.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925654.png)
        
    2.  The root password has expired. The system prompts you to set a new password for the `root` user. Re-enter the password to confirm.
        
        **Important**
        
        The password policy requires the password to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925662.png)
        
    3.  When asked if you want to change the password again, enter `n`. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925964.png)
        
    4.  Enter `y` to remove anonymous users.
        
        **Note**
        
        Removing anonymous users helps prevent unauthorized access to your MySQL server.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925967.png)
        
    5.  Enter `y` to disallow remote root login.
        
        **Note**
        
        To allow remote root login, press any key other than `Y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925968.png)
        
    6.  Enter `y` to remove the `test` database.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925971.png)
        
    7.  Enter `y` to reload the privilege tables to apply your changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925972.png)
        

## Alibaba Cloud Linux 2

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Install MySQL.
    
    ```
    # Add an official MySQL repository.
    sudo rpm -Uvh https://repo.mysql.com/mysql84-community-release-el7-1.noarch.rpm
    # Install MySQL.
    sudo yum install -y mysql-server
    # Start and configure MySQL to automatically start on system startup.
    sudo systemctl start mysqld
    sudo systemctl enable mysqld
    ```
    
3.  Retrieve the temporary root password.
    
    ```
    echo $(PASSWORD=$(sudo grep 'temporary password' /var/log/mysqld.log); PASSWORD=${PASSWORD##* }; echo $PASSWORD)
    ```
    
4.  Run the secure installation script.
    
    ```
    sudo mysql_secure_installation
    ```
    
    1.  Enter the temporary password for the `root` user.
        
        **Note**
        
        The password is not displayed as you type. Ensure you enter it correctly.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925654.png)
        
    2.  The root password has expired. The system prompts you to set a new password for the `root` user. Re-enter the password to confirm.
        
        **Important**
        
        The password policy requires the password to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925662.png)
        
    3.  When asked if you want to change the password again, enter `n`. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925964.png)
        
    4.  Enter `y` to remove anonymous users.
        
        **Note**
        
        Removing anonymous users helps prevent unauthorized access to your MySQL server.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925967.png)
        
    5.  Enter `y` to disallow remote root login.
        
        **Note**
        
        To allow remote root login, press any key other than `Y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925968.png)
        
    6.  Enter `y` to remove the `test` database.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925971.png)
        
    7.  Enter `y` to reload the privilege tables to apply your changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925972.png)
        

## CentOS 8

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Install MySQL.
    
    ```
    # Add an official MySQL repository.
    sudo rpm -Uvh https://repo.mysql.com/mysql84-community-release-el8-1.noarch.rpm
    # Install MySQL.
    sudo dnf install -y mysql-server
    # Start and configure MySQL to automatically start on system startup.
    sudo systemctl start mysqld
    sudo systemctl enable mysqld
    ```
    
3.  Run the secure installation script.
    
    ```
    sudo mysql_secure_installation
    ```
    
    1.  Enter `y` to use the `VALIDATE PASSWORD` component.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926733.png)
        
    2.  Enter `2` to set the password validation policy to `STRONG`. This policy requires passwords to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926747.png)
        
    3.  Set a new password for the `root` user and enter it twice to confirm.
        
        **Important**
        
        The password must meet the requirements of the validation policy you selected.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926752.png)
        
    4.  Enter `y` to continue with the password you provided.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926761.png)
        
    5.  Enter `y` to remove anonymous users.
        
        **Note**
        
        Removing anonymous users helps prevent unauthorized access to your MySQL server.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925967.png)
        
    6.  Enter `y` to disallow remote root login.
        
        **Note**
        
        To allow remote root login, press any key other than `Y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925968.png)
        
    7.  Enter `y` to remove the `test` database.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925971.png)
        
    8.  Enter `y` to reload the privilege tables to apply your changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925972.png)
        

## CentOS 7

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Install MySQL.
    
    ```
    # Add an official MySQL repository.
    sudo rpm -Uvh https://repo.mysql.com/mysql84-community-release-el7-1.noarch.rpm
    # Install MySQL.
    sudo yum install -y mysql-server
    # Start and configure MySQL to automatically start on system startup.
    sudo systemctl start mysqld
    sudo systemctl enable mysqld
    ```
    
3.  Retrieve the temporary root password.
    
    ```
    echo $(PASSWORD=$(sudo grep 'temporary password' /var/log/mysqld.log); PASSWORD=${PASSWORD##* }; echo $PASSWORD)
    ```
    
4.  Run the secure installation script.
    
    ```
    sudo mysql_secure_installation
    ```
    
    1.  Enter the temporary password for the `root` user.
        
        **Note**
        
        The password is not displayed as you type. Ensure you enter it correctly.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925654.png)
        
    2.  The root password has expired. The system prompts you to set a new password for the `root` user. Re-enter the password to confirm.
        
        **Important**
        
        The password policy requires the password to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925662.png)
        
    3.  When asked if you want to change the password again, enter `n`. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925964.png)
        
    4.  Enter `y` to remove anonymous users.
        
        **Note**
        
        Removing anonymous users helps prevent unauthorized access to your MySQL server.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925967.png)
        
    5.  Enter `y` to disallow remote root login.
        
        **Note**
        
        To allow remote root login, press any key other than `Y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925968.png)
        
    6.  Enter `y` to remove the `test` database.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925971.png)
        
    7.  Enter `y` to reload the privilege tables to apply your changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925972.png)
        

## Ubuntu or Debian

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Update your system's package index.
    
    ```
    sudo apt-get update
    ```
    
3.  Install the MySQL APT repository.
    
    ```
    # Download the APT configuration package.
    sudo wget https://dev.mysql.com/get/mysql-apt-config_0.8.33-1_all.deb
    # Run the dpkg command to install the MySQL APT configuration package that you downloaded.
    sudo dpkg -i mysql-apt-config_0.8.33-1_all.deb
    ```
    
    1.  Optional. If `mysql-apt-config` detects an unsupported OS version, an interface appears. Select the closest supported version to continue the installation.
        
        **Note**
        
        To find your system's codename, see [What do I do if I cannot start MySQL due to the "Permission denied" error?](/help/en/ecs/user-guide/mysql-deployment-faq#8fb85c1d3dz2d)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p924854.png)
        
    2.  The configuration page lists all components to be installed. Verify that the correct version and components are selected, then use the arrow keys to navigate to `Ok` and press Enter.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p924856.png)
        
4.  Install the MySQL server.
    
    **Important**
    
    During the installation, you must set a password for the MySQL `root` user. The password policy requires the password to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long. Enter the password and press Enter. You must re-enter it to confirm. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p927008.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p927079.png)
    
    ```
    # Update the package list.
    sudo apt update
    # Install the MySQL server.
    sudo apt install -y mysql-server
    # Start the MySQL service.
    sudo systemctl start mysql
    # Check the startup status.
    sudo systemctl status mysql
    # Configure MySQL to automatically start on system startup. 
    sudo systemctl enable mysql
    ```
    
5.  Run the secure installation script.
    
    ```
    sudo mysql_secure_installation
    ```
    
    1.  Enter the `root` user password you set during installation. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p927710.png)
        
    2.  Enter `y` to use the `VALIDATE PASSWORD` component.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926733.png)
        
    3.  Enter `2` to set the password validation policy to `STRONG`. This policy requires passwords to contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p926747.png)
        
    4.  Enter n to skip changing the password of the root user.
        
        **Note**
        
        To change the password of the `root` user, enter `y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925964.png)
        
    5.  Enter `y` to remove anonymous users.
        
        **Note**
        
        Removing anonymous users helps prevent unauthorized access to your MySQL server.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925967.png)
        
    6.  Enter `y` to disallow remote root login.
        
        **Note**
        
        To allow remote root login, press any key other than `Y`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925968.png)
        
    7.  Enter `y` to remove the `test` database.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925971.png)
        
    8.  Enter `y` to reload the privilege tables to apply your changes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778881471/p925972.png)
        

## **Add a MySQL user for remote access**

1.  Connect to an ECS instance. For more information, see [Connect to Linux](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  By default, MySQL listens on port 3306. Ensure the instance's security group allows inbound traffic on port 3306. If you use a different port, adjust the security group rules accordingly. For instructions, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
3.  Run the following command to create a user who can connect from any host and grant the user privileges on all databases.
    
    **Important**
    
    -   Replace `<username>` with the new username.
        
    -   Replace `<password>` with the password for the new user. The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.
        
    
    ```
    # After you run the command, enter the password of the root user.
    sudo mysql -uroot -p \
    -e "CREATE USER '<username>'@'%' IDENTIFIED BY '<password>';" \
    -e "GRANT ALL PRIVILEGES ON *.* TO '<username>'@'%' WITH GRANT OPTION;" \
    -e "FLUSH PRIVILEGES;"
    ```
    
4.  Verify the connection with the new user's credentials.
    
    ```
    # Replace <username> with the username of the user that you created. After you run the command, enter the password of the new user.
    sudo mysql -u<username> -p
    ```
    

## **Reference**

[MySQL deployment FAQ](/help/en/ecs/user-guide/mysql-deployment-faq)
