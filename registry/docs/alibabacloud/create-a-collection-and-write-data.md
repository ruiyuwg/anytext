This topic describes how to create a database and collection in an ApsaraDB for MongoDB instance and write data to the collection.

## **Prerequisites**

You have successfully [connected to the instance](/help/en/mongodb/getting-started/connection-instance) by following steps in Getting Started.

## **Procedure**

## DMS

1.  Create a database named `test`.
    
    Enter the following command and click **Execute**.
    
    ```
    use test
    ```
    
    ![2025-05-14_16-57-43](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p954935.png)
    
    After the database is created, click the database name in **Execution History** to go to the database environment.
    
2.  Create a collection named`mongo` in the `test` database.
    
    Enter the following command and click **Execute**. If the **Execution Confirmation** dialog box appears, click **OK**.
    
    ```
    db.createCollection("mongo")
    ```
    
    If the value of `ok` in the returned result is `1.0`, the collection is created. Other values indicate that the creation failed.![2025-05-14_17-01-08](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p954959.png)
    
3.  Write two sets of data `{"name": "test"}` and `{"count": "10"}` to the `mongo` collection.
    
    Enter the following command and click **Execute**. If the **Execution Confirmation** dialog box appears, click **OK**.
    
    ```
    db.runCommand({insert: "mongo", documents: [{"name": "test"},{"count": "10"}]})
    ```
    
    ![2025-05-14_17-09-44](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p954963.png)
    
4.  Query data in the `mongo` collection.
    
    Enter the following command and click **Execute**.
    
    ```
    db.getCollection("mongo").find({})
    ```
    
    ![2025-05-14_17-01-08](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p954967.png)
    

## MongoDB shell

1.  Create a database named `test` and switch to it.
    
    ```
    use test
    ```
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p957698.png)
    
2.  Create a collection named `mongo` in the `test` database.
    
    ```
    db.createCollection("mongo")
    ```
    
    When the value of `ok` in the returned result is `1.0`, the collection is created. Other values indicate that the creation failed.
    
    ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p957700.png)
    
3.  Write two sets of data `{"name": "test"}` and `{"count": "10"}` to the `mongo` collection.
    
    ```
    db.runCommand({insert: "mongo", documents: [{"name": "test"},{"count": "10"}]})
    ```
    
    ![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p957701.png)
    
4.  Query data in the `mongo` collection.
    
    ```
    db.getCollection("mongo").find({})
    ```
    
    ![4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0467298471/p957702.png)
