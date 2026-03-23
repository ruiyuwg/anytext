To ensure data security, you can use the access control policies of Lindorm to allow only authorized users to access resources. This topic describes the access control policies provided by Lindorm.

## Overview

Lindorm provides the following access control policies:

-   Configure a whitelist.
    
-   Configure a security group.
    
-   Use tags to classify resources.
    

## **Configure a whitelist**

By default, a Lindorm instance cannot be accessed by any device to ensure the security and stability of Lindorm. Therefore, you must configure a whitelist for the Lindorm instance in advance to allow specific devices to access the instance. The security of Lindorm instances can be enhanced if whitelists are properly configured. We recommend that you update the whitelists on a regular basis. For more information, see [Configure a whitelist](/help/en/lindorm/user-guide/configure-whitelist).

## **Configure a security group**

A security group is a virtual firewall that is used to manage the inbound and outbound traffic of specific Elastic Compute Service (ECS) instances. After a security group is added to the whitelist of a Lindorm instance, the ECS instances in the security group can access the Lindorm instance. For more information, see [Add a security group](/help/en/lindorm/user-guide/add-a-security-group).

## **Use tags to classify resources**

If a large number of Lindorm instances exist, you can use tags to classify and filter Lindorm instances. For more information, see [Manage tags](/help/en/lindorm/user-guide/manage-tags/).
