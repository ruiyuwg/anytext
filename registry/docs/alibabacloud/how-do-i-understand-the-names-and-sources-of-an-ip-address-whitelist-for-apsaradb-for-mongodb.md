This topic describes the names and sources of an IP address whitelist for ApsaraDB for MongoDB. After you create an ApsaraDB for MongoDB instance, the instance has the default IP address whitelist. When you configure data migration or perform operations, more whitelists are generated.

![IP address whitelists](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3471166951/p69175.png)

**Note** You can open the Whitelist Settings page by following the instructions provided in [Configure a whitelist or an ECS security group for an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b "This topic describes how to configure an IP address whitelist or an ECS security group for an ApsaraDB for MongoDB instance. After you create an ApsaraDB for MongoDB instance, you must configure an IP address whitelist or add an ECS security group to allow access only from authorized devices. The default whitelist contains only the IP address 127.0.0.1, which indicates that no devices can access the ApsaraDB for MongoDB instance.").

 

IP address whitelist name

Source

default

The default IP address whitelist, which cannot be deleted.

ddsdts

The IP address whitelist automatically generated when you migrate your ApsaraDB for MongoDB instance. It contains the IP addresses of DTS servers.

**Note** When you migrate data, do not delete this IP address whitelist. Otherwise, data migration fails.
