In Lindorm, the LindormTable engine supports access through HBase non-Java APIs, including C++, Python, and Go. This topic describes these access operations.

## Prerequisites

-   Download the [Thrift installation package](https://www.apache.org/dyn/closer.cgi?path=/thrift/0.12.0/thrift-0.12.0.tar.gz).
    
-   Download the [Thrift2 definition file for ApsaraDB for HBase](https://hbaseuepublic.oss-cn-beijing.aliyuncs.com/hbase.thrift).
    
-   The LindormTable endpoint that is displayed after **Access by Using HBase non-Java API** on the Wide Table Engine tab of the Lindorm console is obtained. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).![查看地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9227421661/p416030.png)
    

## Use the ApsaraDB for HBase API for a non-Java language, such as Python, to connect to LindormTable

For more information about using the Thrift installation package, see the [Apache Thrift official documentation](https://thrift.apache.org/tutorial/). The following steps describe how to use Thrift to access the Lindorm wide table engine:

1.  Execute the following statement to use the Thrift2 definition file for ApsaraDB for HBase to generate an interface definition language (IDL) file in the corresponding language:
    
    ```
    thrift --gen <language> Hbase.thrift
    ```
    
    **Note**
    
    The `language` parameter specifies the programming language you want to use. You can set this parameter to python, php, cpp, or py.
    
    Sample statement:
    
    ```
    thrift --gen py Hbase.thrift
    ```
    
2.  Create a client to access LindormTable.
    
    The Thrift server in Lindorm uses HTTP in the transport layer. The ThttpClient of Thrift is required when you create a client. The method of creating the client varies based on the languages. If the Access Control List (ACL) is enabled, specify the username and password in two headers in the ThttpClient for authentication. The username and password are not required if ACL is disabled. Thrift lets you call a function for a language to specify a custom header in ThttpClient. In the following example, Python is used. You can execute the following statements to create a client and connect to LindormTable:
    
    ```
     # -*- coding: utf-8  -*-
     # You can run the pip install thrift command to generate the following two modules:
     from thrift.protocol import TBinaryProtocol
     from thrift.transport import THttpClient
    
     # You can run the thrift --gen py hbase.thrift command to generate the following two modules:
     from hbase import THBaseService
     from hbase.ttypes import TColumnValue, TColumn, TTableName, TTableDescriptor, TColumnFamilyDescriptor, TNamespaceDescriptor, TGet, TPut, TScan
    
     # Specify the endpoint of LindormTable.
     url = "http://ld-bp17j28j2y7pm****-proxy-lindorm.lindorm.rds.aliyuncs.com:9190"
     transport = THttpClient.THttpClient(url)
     headers = {}
     # Specify the username.
     headers["ACCESSKEYID"]="testuser";
     # Specify the password that corresponds to the username.
     headers["ACCESSSIGNATURE"]="password"
     transport.setCustomHeaders(headers)
     protocol = TBinaryProtocol.TBinaryProtocolAccelerated(transport)
     client = THBaseService.Client(protocol)
     transport.open()
     # Close the connection.
     transport.close()
    ```
    

## Sample code in other languages

To obtain complete sample code for other non-Java languages, click one of the following download links to download sample code for a language from GitHub:

-   [Python](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/hbase/thrift2/python)
    
-   [Go](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/hbase/thrift2/go)
    
-   [C++](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/hbase/thrift2/cpp)
    
-   [node.js](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/hbase/thrift2/nodejs)
    
-   [PHP](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/hbase/thrift2/php)
