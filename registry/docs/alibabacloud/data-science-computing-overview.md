MaxFrame is a distributed science computing framework that is developed by Alibaba Cloud. It is an evolution from PyODPS and Mars, provides APIs that are compatible with Pandas interfaces, and allows you to use MaxCompute in the similar manner that you use Python. This topic describes the background information and development history of the Python development ecosystem that is provided by MaxCompute.

## **Background information**

As the mainstream programming language for machine learning and AI model development, Python provides rich science computing and visualization libraries such as NumPy (multidimensional array operations), Pandas (data analytics), Matplotlib (two-dimensional drawing), and scikit-learn (data analytics and mining algorithms). Python also supports a wide range of training frameworks such as TensorFlow, PyTorch, XGBoost, and LightGBM.

MaxCompute provides a Python development ecosystem to meet the requirements for processing, analytics, mining, and model training of large amounts of data. You can use centralized Python APIs to perform data processing and mining in a comprehensive and efficient manner.

## **Development history**

The following figure shows the development history of the Python development ecosystem that is provided by MaxCompute.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8590846371/p732119.png)

### **PyODPS**

PyODPS was officially released in 2015 and works as MaxCompute SDK for Python. You can use Python interfaces to perform operations on data in MaxCompute. After the iterative development of multiple versions, PyODPS supports DataFrame. PyODPS also provides Pandas-like syntax and built-in operators for data aggregation, sorting, and deduplication.

Core features of PyODPS:

-   Support for basic operations on MaxCompute objects (in 2015):
    
    -   PyODPS supports access to MaxCompute objects, such as tables, resources, and functions.
        
    -   PyODPS allows you to submit SQL requests by using the `run_sql` or `execute_sql` method.
        
    -   PyODPS allows you to run Platform for AI (PAI) commands to run machine learning tasks by using the `run_xflow` or `execute_xflow` method.
        
    -   PyODPS allows you to use the `open_write`, `open_reader`, or cloud-native Tunnel API operations to upload and download data.
        
    
-   Support for DataFrame APIs and Pandas-like interfaces to fully utilize the computing capabilities of MaxCompute for DataFrame computing (from 2016 to 2022):
    
    -   PyODPS DataFrame allows you to use Python to perform data operations. This way, you can easily leverage the language features of Python.
        
    -   PyODPS DataFrame provides a large number of Pandas-like interfaces that have extended syntax. For example, MapReduce APIs are added to adapt to the big data environment.
        
    -   PyODPS DataFrame provides built-in functions for common operations such as data aggregation, data sorting, data deduplication, data sampling, and visual drawing.
        
    

### **Mars**

The Python ecosystem contains rich science computing libraries, such as NumPy, Pandas, and scikit-learn. The libraries provide convenient data analytics and mining operators. However, most of the libraries are restricted by standalone resources. Mars is a tensor-based centralized distributed computing framework that implements approximately 70% of the interfaces of NumPy in a distributed manner. Mars significantly reduces the difficulty in writing distributed science computing code and improves performance.

Core features of Mars:

Compatibility and distributed capability: Mars was officially open sourced in January 2019. Mars enables NumPy, Pandas, scikit-learn, and Python functions to be executed in a distributed manner and is compatible with most interfaces.

### **MaxFrame**

Mars and PyODPS are suitable for different scenarios. For example, users who are familiar with Pandas and want to run NumPy or scikit-learn in a parallel and distributed manner are more suitable to use Mars. Users who are familiar with DataFrame and have high requirements for stability and data amount (terabytes-level or higher) are suitable to use PyODPS. However, the complexity of the architecture also brings difficulties to users.

MaxFrame is a distributed science computing framework that is developed by Alibaba Cloud. It is fully compatible with Pandas interfaces and can automatically select the optimal underlying engine to execute jobs, improving performance and development efficiency. Users no longer need to focus on the selection of the underlying execution engine, enabling them to efficiently complete the entire process from data development and analytics to AI training and inference. The following figure shows the architecture.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0015475471/CAEQMhiBgMD5qP.fpBkiIGFlYWVlZDRlNjEwZTQyZjhiZWQ5YzA3ZTkwZGY3N2E24053635_20231025180726.318.svg)

Core features of MaxFrame:

-   More familiar development habits
    
    MaxFrame is compatible with the Python development ecosystem and provides unified development interfaces for the Python ecosystem of MaxCompute. You can use the same Python code to implement a complete data and AI development process.
    
    MaxFrame can directly reference third-party libraries such as NumPy, SciPy, Pandas, and Matplotlib to perform operations such as scientific computing, data analysis, and visualization. This reduces the operation costs of users.
    
-   Higher processing performance
    
    MaxFrame allows you to directly access MaxCompute data. When you run MaxFrame, you do not need to pull data to your on-premises machine. This eliminates the need for data transfers and improves execution efficiency.
    
    MaxFrame can directly use huge amounts of elastic computing resources in MaxCompute. MaxFrame supports automatic distribution and parallel processing. This significantly reduces the data processing time.
    
-   More convenient development experience
    
    MaxFrame is integrated with MaxCompute Notebook and DataWorks. You can directly use MaxFrame in MaxCompute Notebook or DataWorks without the need to configure the environment. You can also install and use MaxFrame on your on-premises environment.
    
    MaxFrame allows you to directly reference built-in images and custom images in MaxCompute. This reduces the time to prepare for a development environment and prevents conflicts between environment versions.
    
-   Improved operator support
    
    MaxFrame is fully compatible with Pandas interfaces and automatically performs distributed processing. This ensures powerful data processing capabilities and significantly improves data processing and computing efficiency.
