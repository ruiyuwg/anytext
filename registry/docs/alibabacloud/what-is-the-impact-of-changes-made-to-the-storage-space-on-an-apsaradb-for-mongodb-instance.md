When you change the storage space of an ApsaraDB for MongoDB instance, there is a brief disconnection of about 30 seconds. This brief disconnection does not affect data in the instance.

If the storage space of an ApsaraDB for MongoDB instance is insufficient, you can expand the storage space. For more information, see [Overview](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).

**Note** If your application is in a production environment, we recommend that you use a connection string URI to connect to the instance. This way, the read/write operations of your application remain available even if there is a primary/secondary switchover. For more information, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh).
