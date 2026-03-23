Common causes for the primary/secondary switchover for an ApsaraDB for MongoDB instance:

-   Manual switchover: You or an authorized Alibaba Cloud technical expert can manually trigger a primary/secondary switchover.
-   Hidden risks: Alibaba Cloud detects that the instance has potential risks which may affect the normal use of the instance. In this case, ApsaraDB for MongoDB fixes the vulnerabilities and performs primary/secondary switchover during the specified maintenance window.
-   Host is offline: An exception occurs on the host where the primary node in the ApsaraDB for MongoDB instance is deployed, which may affect the normal use of the instance. ApsaraDB for MongoDB considers that the host is offline and triggers primary/secondary switchover to replace the risky node.
-   Instance is faulty: When Alibaba Cloud detects that the instance is faulty and cannot be used normally, ApsaraDB for MongoDB immediately triggers primary/secondary switchover to recover the instance in a timely manner and shorten the faulty period.

If a host is offline or an instance is faulty, you are notified in the form of an internal message or email in the following format:

\[Alibaba Cloud\] Dear \*\*\*\*: Your ApsaraDB for MongoDB instance dds-bp\*\*\*\* (name: \*\*\*\*) has an error. A switchover is triggered to ensure stable running of your instance. We recommend that you check whether your application is still connected to your instance and configure your application to automatically reconnect to your instance.
