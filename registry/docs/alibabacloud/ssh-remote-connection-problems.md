This topic describes the issues that may occur when you connect to an Elastic Compute Service (ECS) instance.

## **Troubleshooting methods**

[What do I do if I cannot connect to a Linux instance?](/help/en/ecs/troubleshooting-guidelines-when-you-cannot-remotely-log-on-to-a-linux-instance-through-ssh)

## **Common issues and solutions**

### **Common instance logon issues and solutions**

-   #### **Workbench-based logon issues**
    
    -   [What do I do if a timeout error occurs when I use Workbench to connect to a Linux instance?](/help/en/ecs/ssh-connection-issues-to-linux-instances-through-workbench#da664720196a6)
        
    -   [What do I do if the error message "Logon failed because password-based logon is disabled in the operating system" appears in Workbench?](/help/en/ecs/use-the-password-can-t-login-the-linux-cloud-server-ecs-what-should-i-do)
        
    -   [What do I do if I am prompted with an incorrect username or password when I use Workbench to connect to a Linux instance?](/help/en/ecs/ssh-connection-issues-to-linux-instances-through-workbench#119e052019y78)
        
    -   [What do I do if the "DefaultConnectFuture\[root@/xxx.xxx.xx.xxx:22\]: Failed (AnnotatedConnectException) to execute: Connection refused: /xxx.xxx.xx.xxx:22" error message appears when I use Workbench to connect to a Linux instance?](/help/en/ecs/ssh-connection-issues-to-linux-instances-through-workbench#f6ff23c019x1b)
        
-   #### **SSH client-based logon issues**
    
    -   [What do I do if the "User root not allowed because not listed in" error message appears when I connect to a Linux instance by using an SSH command?](/help/en/ecs/the-user-root-not-allowed-because-not-listed-in-error-occurs-when-you-log-on-to-a-linux-instance-by-using-ssh-commands)
        
    -   [What do I do if the "Permission denied, please try again" error message appears when I connect to a Linux instance from an SSH client?](/help/en/ecs/how-to-fix-the-permission-denied-please-try-again-error-when-you-log-on-to-a-linux-instance-using-ssh)
        
    -   [What do I do if the "ssh\_exchange\_identification: read: Connection reset by peer" error message appears when I connect to a Linux instance from an SSH client?](/help/en/ecs/the-ssh-exchange-identification-read-connection-reset-by-peer-error-is-displayed-when-you-log-on-to-an-ecs-instance-through-ssh)
        
    -   [What do I do if the "No supported authentication methods available (server sent: publickey, gssapi-keyex, gssapi-with-mic)" error message appears when I connect to a Linux ECS instance by using a third-party SSH client?](/help/en/ecs/the-disconnected-no-supported-authentication-methods-available-error-occurs-when-you-log-on-to-a-linux-instance-by-ssh)
        
    -   [What do I do if the "Too many authentication failures" error message appears when I connect to an instance by using a third-party SSH client?](/help/en/ecs/the-too-many-authentication-failures-for-root-error-occurs-when-you-log-on-to-an-instance-through-ssh)
        
    -   [What do I do if the "Host key verification failed" error message appears when I log on to a Linux instance by using SSH?](/help/en/ecs/the-system-prompts-host-key-verification-failed-when-logging-on-to-the-ecs-instance-over-ssh)
        
    -   [What do I do if the "error: Unable to load host key: /etc/ssh/ssh\_host\_rsa\_key" error message appears when I connect to a Linux by using an SSH client?](/help/en/ecs/the-no-supported-key-exchange-algorithms-error-occurs-when-you-log-on-to-a-linux-instance-by-using-ssh-commands)
        
    -   [What do I do if the "Maximum amount of failed attempts was reached" error message appears when I connect to a Linux ECS instance by using an SSH client?](/help/en/ecs/multiple-consecutive-incorrect-password-accesses-to-linux-instances-through-ssh)
        
    -   [What do I do if the "could not set limit for 'nofile': Operation not permitted" error message appears?](/help/en/ecs/a-system-exception-occurs-on-linux-instances-after-ssh-logon-due-to-ulimit)
        
    -   [What do I do if an error message, such as "This account is currently not available", appears when I connect to a Linux ECS instance by using SSH?](/help/en/ecs/an-error-is-reported-when-you-log-on-to-an-ecs-instance-of-the-linux-system-by-using-ssh-commands)
        
    -   [What do I do if the "could not set limit for 'nofile': Operation not permitted" error message appears?](/help/en/ecs/a-system-exception-occurs-on-linux-instances-after-ssh-logon-due-to-ulimit)
        
    -   [What do I do if the "fatal: mm\_request\_send: write: Broken pipe" error message appears when the SSH service does not run as expected due to viruses?](/help/en/ecs/the-system-prompts-fatal-mm-request-send-write-broken-pipe-error-when-the-ssh-service-runs-abnormally-caused-by-viruses)
        
-   #### **SFTP client-based logon issues**
    
    -   [What do I do if the "Received unexpected end-of-file from SFTP server" error message appears when I log on to a Linux instance by using an SFTP tool?](/help/en/ecs/login-using-sftp-linux-instance-prompt-received-unexpected-end-of-file-from-sftp-server-error)
        
-   #### **Other logon issues**
    
    -   [What do I do if I cannot connect to an ECS instance by using SSH or Workbench due to incorrect port configurations?](/help/en/ecs/because-of-using-ssh-port-configuration-error-or-are-unable-to-connect-to-ecs-workbench-instance)
        
    -   [What do I do if I cannot connect to a Linux instance because SSH is not started?](/help/en/ecs/linux-system-can-not-connect-with-ssh-remote-instances-of-ecs)
        
    -   [What do I do if I cannot log on to a Linux instance after I enable PAM?](/help/en/ecs/what-do-i-do-when-i-cannot-log-on-to-a-linux-instance-after-the-pam-authentication-module-is-enabled)
        
    -   [What do I do if I cannot use the root user and the new password to log on to a Linux instance after I change the password of the root user?](/help/en/ecs/after-modifying-the-linux-ecs-instances-root-password-cannot-use-the-password-login-example)
        

### **SSH startup issues and solutions**

-   [What do I do if I cannot connect to an ECS instance due to an sshd configuration error?](/help/en/ecs/sshd-configuration-error-cannot-connect-remotely-ecs-how-should-solve)
    
-   [What do I do if the "error while loading shared libraries" error message appears when I start the SSH service on a Linux ECS instance?](/help/en/ecs/the-error-while-loading-shared-libraries-error-occurs-when-you-start-the-ssh-service)
    
-   [What do I do if an error message that contains "fatal: Cannot bind any address" appears when I start the SSH service on a Linux ECS instance?](/help/en/ecs/in-linux-ecs-instances-the-following-error-fatal-cannot-bind-any-address-occurs-when-the-ssh-service-is-started)
    
-   [What do I do if an error message that contains "bad configuration options" appears when I start the SSH service on a Linux ECS instance?](/help/en/ecs/the-bad-configuration-options-error-occurs-when-the-ssh-service-is-started)
    
-   [What do I do if the "Failed to start OpenSSh server daemon" error message appears when I start the SSH service?](/help/en/ecs/the-ssh-service-cannot-be-started-due-to-port-occupation)
    
-   [What do I do if the "must be owned by root and not group or world-writable" error message appears when I start the SSH service on a Linux ECS instance?](/help/en/ecs/what-should-i-do-if-the-must-be-owned-by)
    
-   [What do I do if I cannot start the SSH service on a Linux ECS instance and a message that contains "main process exited, code=exited" appears?](/help/en/ecs/main-process-exited-code-exited-error-when-ssh-service-is-started)
    

### **Other issues and solutions**

-   [How do I keep processes running on a Linux ECS instance after an SSH client is disconnected?](/help/en/ecs/configure-linux-to-keep-the-process-running-after-the-ssh-client-is-disconnected)
    
-   [What do I do if the logon is stuck when I connect to a Linux instance?](/help/en/ecs/remote-connection-to-a-linux-instance)
    
-   [What do I do if the SSH logon or data transfer is slow on a Linux ECS instance on which UseDNS is enabled for SSH?](/help/en/ecs/using-usedns-to-enable-ssh-slows-down-ssh-logon-or-data-transfer)
    
-   [What do I do when I cannot change the password of a Linux instance and the "passwd: Module is unknown" error message appears?](/help/en/ecs/unable-to-reset-linux-instance-password-due-to-unknown-module-error)
