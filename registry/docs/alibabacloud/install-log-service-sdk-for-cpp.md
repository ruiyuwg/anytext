Before you can use Simple Log Service SDK for C++ to call the API operations of Simple Log Service, you must install Simple Log Service SDK for C++. This topic describes how to install Simple Log Service SDK for C++.

## Prerequisites

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
    
    An Alibaba Cloud account has permissions to call all API operations. If you use the AccessKey pair of an Alibaba Cloud account, security risks may occur. We recommend that you create and use a RAM user to call API operations or perform routine O&M. Make sure that the RAM user is granted the permissions to perform operations on Simple Log Service resources. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).
    
-   The following dependencies are imported:
    
    -   protobuf 2.4.1
        
    -   curl
        
    -   lz4
        

## Procedure

1.  [Download the latest installation package of Simple Log Service SDK for C++](https://github.com/aliyun/aliyun-log-cpp-sdk).
    
2.  Decompress the aliyun-log-cpp-sdk-master.zip package.
    
    ```
    unzip aliyun-log-cpp-sdk-mater.zip
    ```
    
    You can run the `yum install unzip` command to install unzip.
    
3.  Copy the decompressed directory that is obtained in Step [2](#step-jty-auj-v49) to the project folder.
    
4.  Install dependencies.
    
    **Important**
    
    In this step, you can install only the dependencies that are required in your system. The following operations are provided for reference only.
    
    1.  Install g++.
        
        ```
        yum install g++
        ```
        
        After g++ is installed, you can run the `g++ --version` command to view the version of g++.
        
        ```
        g++ (GCC) 10.2.1 20200825 (Alibaba 10.2.1-3 2.32)
        Copyright (C) 2020 Free Software Foundation, Inc.
        This is free software; see the source for copying conditions.  There is NO
        warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
        ```
        
    2.  Download and install protobuf 2.4.1.
        
        ```
        wget https://github.com/google/protobuf/releases/download/v2.4.1/protobuf-2.4.1.tar.gz
        tar zxvf protobuf-2.4.1.tar.gz
        cd protobuf-2.4.1
        ./configure
        make
        make check
        make install
        ```
        
    3.  Copy protoc to the directory that stores executable programs.
        
        ```
        # Copy protoc to the directory that stores executable programs. Run the cd command to change the current directory to the bin directory in the decompressed directory, and then run the following mv command:
        mv protoc /usr/local/bin
        
        # Copy the content of the include directory to the directory that stores executable programs. Run the cd command to change the current directory to the include directory in the decompressed directory, and then run the following cp command:
        cp -r google /usr/local/include
        ```
        
5.  Go to the project folder and run the make command to compile the SDK.
    
    **Important**
    
    In this step, you must write the make commands and handle exceptions based on debugging.
    
    After you compile the SDK, the following files are generated. Then, you can use the files when you run your C++ program.
    
    ```
    lib/libslssdk.a 
    lib/libsls_logs_pb.a
    lib/liblz4.a
    ```
    
6.  Develop and run your program.
    
    The following code shows how to run a program:
    
    ```
    g++ -o your_program your_program.o   -O2 -L./lib/   -lslssdk -llz4 -lcurl -lprotobuf 
    ```
    
    For more information, see [Simple Log Service SDK for C++ README](https://github.com/aliyun/aliyun-log-cpp-sdk/blob/master/README.md).
