Alibaba Cloud uses one of the following two methods to check the availability (health status) of your ApsaraDB RDS instance: short-lived connection and persistent connection. By default, long-lived connections are used.

-   If your application frequently establishes and closes connections to your RDS instance, we recommend that you use **short-lived connection** for the availability test.
-   If your application uses a data connection pool, we recommend that you use **persistent connection** for the availability test.

**Note** When you change the detection method, the workloads on your RDS instance continue to run as normal.
