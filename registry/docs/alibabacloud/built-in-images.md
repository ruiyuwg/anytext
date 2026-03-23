MaxCompute provides built-in images for data analytics, scientific computing, and machine learning, such as Pandas, Numpy, Scikit-learn, and Xgboost. You can reference these images directly to simplify your development process. This topic describes how to view and use built-in images.

## **View built-in images**

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Images**.
    
3.  On the **Images** page, click the **Built-in Images** tab.
    
    You can view the list of built-in MaxCompute images and their version information.
    

## **Built-in image details**

**Category**

**Image name**

**Built-in third-party package and version**

**Programming language and version**

**Description**

Base image

common

numpy==1.21.6

pandas==1.3.5

Python 3.7

The base image. It includes basic third-party packages such as Pandas and NumPy.

numpy==1.26.4

pandas==2.2.2

Python 3.11

Base image

ubuntu

ubuntu==20.04

Python 3.7

Python 3.11

A base operating system (OS) image. It supports seamless use in user-defined function (UDF) development and MaxFrame framework integration. This improves cross-platform code portability and execution performance.

Scientific computing

scipy

scipy==1.7.3

Python 3.7

A scientific computing library that provides advanced scientific computing features, including statistical analysis and linear algebra.

scipy==1.13.0

Python 3.11

Statistical modeling

statsmodels

statsmodels==0.13.5

Python 3.7

Statistical modeling

statsmodels==0.14.1

Python 3.11

A library for statistical modeling and econometrics.

Machine learning

sklearn

scikit-learn==1.0.2

Python 3.7

Provides machine learning algorithms such as classification, regression, and clustering.

scikit-learn==1.4.2

Python 3.11

xgboost

xgboost==1.6.2

Python 3.7

A distributed gradient boosting library.

xgboost==2.0.3

Python 3.11

pytorch

torch==1.13.1

Python 3.7

Natural Language Processing.

torch==2.3.0

Python 3.11

tensorflow

tensorflow==2.11.0

Python 3.7

Used for programming various machine learning algorithms.

tensorflow==2.16.1

Python 3.11

All built-in images include development packages from the base image, such as numpy and pandas. They also include common basic development packages, such as cloudpickle 2.2.1, pickle 5.0.12, requests 2.31.0, and setuptools 68.0.0.

## **Use built-in images**

You can use built-in images in MaxCompute SQL user-defined function (UDF), PyODPS, or MaxFrame development.

**Important**

To prevent conflicts, specify only one image for each development job.

-   When you call a UDF, specify the dependent image and Python version at the SQL session level using a flag. Use the following commands:
    
    ```
    -- If you use Python 3.11, set odps.sql.python.version=cp311;
    set odps.sql.python.version=cp37;
    set odps.session.image = <image_name>;
    ```
    
-   In PyODPS development, specify an existing image using the image parameter of the execute or persist method. For an example, see [Use images in PyODPS development](/help/en/maxcompute/user-guide/image-management-scene-practice#31ff94f51fub7). Use the following command:
    
    ```
    image='<image_name>'
    ```
    
    **Note**
    
    To reference an image for PyODPS development, upgrade PyODPS to V0.11.5 or a later version.
    
-   In MaxFrame development, specify an existing image for the current job. The relevant parameters are as follows:
    
    ```
    config.options.sql.settings = {
        "odps.session.image": "<image_name>"
    }
    ```
