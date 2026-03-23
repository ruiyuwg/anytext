Elastic Desktop Service (Enterprise Edition) provides services that are mainly used by administrators and end users. This topic describes the definition and naming conventions of end users.

## What is an end user?

Elastic Desktop Service (Enterprise Edition) is typically used by enterprise customers. The process of using Elastic Desktop Service (Enterprise Edition) is designed based on different roles, including administrators and end users.

-   End users: individuals who access cloud computers from Alibaba Cloud Workspace terminals. Example: Jack, a designer from a design company.
    
-   Administrators: O&M personnel who are responsible for resource purchase and renewal, resource creation and assignment, policy creation and binding, O&M and monitoring, and end user management. Example: Steven, the IT administrator of the company in which the designer Jack works.
    

The following section describes how administrators and end users use cloud computers:

1.  **Create and assign cloud computers as an administrator**
    
    An administrator creates an account and a cloud computer for an end user, and then assigns the cloud computer to the account.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3300093961/p704535.png)
    
2.  **Connect to and use cloud computers as an end user**
    
    After the administrator assigns the cloud computer to an end user, the Elastic Desktop Service (Enterprise Edition) system sends logon credentials to the email address of the end user. Then, the end user can use the logon credentials to log on to an Alibaba Cloud Workspace terminal and connect to the cloud computer.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2300093961/p704540.png)
    

## **Account systems**

Elastic Desktop Service (Enterprise Edition) supports the following account systems:

-   Convenience account
    
    The convenience account system is dedicated to Elastic Desktop Service (Enterprise Edition) and is suitable for non-Active Directory (AD) scenarios. Users that are created based on the convenience account system are convenience users. Administrators can create and manage convenience users in the Elastic Desktop Service (Enterprise Edition) console.
    
-   Enterprise AD account
    
    The enterprise AD account system is suitable for AD scenarios. That is, Elastic Desktop Service (Enterprise Edition) uses AD connectors to connect to enterprise AD systems and AD domain controllers to manage user permissions and resources in a centralized manner. Users that are created based on the enterprise AD account systems are AD users.
    
    **Important**
    
    When you use Elastic Desktop Service (Enterprise Edition) to connect to enterprise AD systems, you are charged for AD connectors. For more information about the billing on AD connectors, see [Billable items](/help/en/wuying-workspace/billable-items#task-2242224).
    

## **Naming conventions of convenience users**

When you specify a username for a convenience user, comply with the following naming conventions:

-   It must contain 3 to 25 characters in length and must start with a lowercase letter or digit. It can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   It cannot contain only digits.
    
-   It cannot be a built-in name in an operating system (OS). The following table describes built-in names in Windows and Linux OSs.
    

**OS**

**Built-in name**

Windows (Built-in names are not case-sensitive.)

-   administrator
    
-   administrators
    
-   anonymous
    
-   batch
    
-   builtin
    
-   defaultaccount
    
-   dialup
    
-   everyone
    
-   guest
    
-   guests
    
-   iis\_iusrs
    
-   interactive
    
-   iusr
    
-   local
    
-   localservice
    
-   network
    
-   networkservice
    
-   none
    
-   proxy
    
-   replicator
    
-   restricted
    
-   self
    
-   service
    
-   system
    
-   users
    
-   wdagutilityaccount
    

Linux (Built-in names are case-sensitive.)

-   \_apt
    
-   \_chrony
    
-   avahi
    
-   avahi-autoipd
    
-   backup
    
-   bin
    
-   colord
    
-   cups-pk-helper
    
-   daemon
    
-   dnsmasq
    
-   fwupd-refresh
    
-   games
    
-   gdm
    
-   geoclue
    
-   gnats
    
-   gnome-initial-setup
    
-   irc
    
-   kernoops
    
-   list
    
-   lp
    
-   mail
    
-   man
    
-   messagebus
    
-   news
    
-   nm-openvpn
    
-   nobody
    
-   ntp
    
-   proxy
    
-   pulse
    
-   root
    
-   rtkit
    
-   saned
    
-   speech-dispatcher
    
-   sshd
    
-   sync
    
-   sys
    
-   syslog
    
-   systemd-coredump
    
-   systemd-network
    
-   systemd-resolve
    
-   systemd-timesync
    
-   tcpdump
    
-   tss
    
-   usbmux
    
-   uucp
    
-   uuidd
    
-   whoopsie
    
-   www-data
    

## **References**

-   [Create an organization](/help/en/wuying-workspace/user-guide/create-an-organization)
    
-   [Create a convenience user](/help/en/wuying-workspace/user-guide/create-a-convenience-user)
    
-   [Manage convenience users](/help/en/wuying-workspace/user-guide/manage-convenience-users-1)
    
-   [Create, modify, and delete AD users](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users)
