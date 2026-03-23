ApsaraDB for MongoDB supports the following MongoDB versions: 7.0, 6.0, 5.0, 4.4, 4.2, 4.0, and 3.4 (discontinued). We recommend that you use a driver running the same database version as your ApsaraDB for MongoDB instance to access the instance. You can download drivers in different languages from [Start Developing with MongoDB](https://docs.mongodb.org/ecosystem/drivers/).

**Note**

For more information about the differences among MongoDB versions, see [MongoDB versions and storage engines](/help/en/mongodb/product-overview/mongodb-versions-and-storage-engines#concept-qg2-xcr-52b).

## How do I view the database version of my ApsaraDB for MongoDB instance?

1.  Connect to a replica set instance by using the mongo shell. For more information, see [Connect to a replica set instance by using the mongo shell](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-mongo-shell#concept-qgf-hv4-dgb).
    
2.  Run the following command to view the database version:
    
    ```
    db.version()
    ```
    

## References

[Upgrade the major version of an instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb)
