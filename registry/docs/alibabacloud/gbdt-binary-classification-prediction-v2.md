The GBDT Binary Classification Prediction V2 component of Platform for AI (PAI) provides the prediction feature based on the GBDT Binary Classification V2 component. Gradient boosting decision trees are used to predict the binary classification results. This topic describes how to configure the GBDT Binary Classification Prediction V2 component.

## Supported computing resources

You can use the GBDT Binary Classification Prediction V2 component based on the computing resources of MaxCompute and Flink.

## **Principle**

The gradient boosting decision tree model consists of multiple decision trees. Each decision tree corresponds to a weak learner. Combining these weak learners together can achieve better classification and regression results.

The following figure shows the basic recursive structure of gradient boosting.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634098.png)

In most cases, ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634116.png) is a CART decision tree, ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634119.png) are the parameters of the decision tree, and ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634121.png)is the step size. Each decision tree optimizes the objective function on the basis of the previous decision tree. After the preceding process, a model that contains multiple decision trees is obtained.

## Configure the component in the PAI console

-   Input ports
    
    **Input port (from left to right)**
    
    **Data type**
    
    **Recommended upstream component**
    
    **Required**
    
    Input
    
    N/A
    
    [GBDT binary classification V2](/help/en/pai/user-guide/gbdt-binary-classification-v2)
    
    Yes
    
    Predicted Data Table
    
    N/A
    
    [Read table](/help/en/pai/user-guide/read-table)
    
    Yes
    
-   Parameters
    
    **Tab**
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Default value**
    
    **Fields Information**
    
    **Prediction result column name**
    
    Yes
    
    The name of the prediction result column.
    
    prediction\_result
    
    **predictionDetailCol**
    
    No
    
    The name of the prediction details column.
    
    prediction\_detail
    
    **Reserved Columns**
    
    No
    
    The names of reserved columns. By default, all columns are reserved.
    
    N/A
    
    **Tuning**
    
    **Number of Instances**
    
    No
    
    The number of instances that are used to run the job.
    
    The value is automatically calculated based on the input data.
    
    **Memory Per Instance**
    
    No
    
    The memory size of each instance. Unit: MB. Valid values: \[100,65536\].
    
    The value is automatically calculated based on the input data.
    
-   Output ports
    
    **Port**
    
    **Storage location**
    
    **Recommended downstream component**
    
    **Model type**
    
    Output
    
    N/A
    
    [Binary classification evaluation](/help/en/pai/user-guide/binary-classification-evaluation)
    
    N/A
    

## **References**

-   This component performs prediction based on the model trained by the [GBDT binary classification V2](/help/en/pai/user-guide/gbdt-binary-classification-v2) component.
    

-   For information about Machine Learning Designer components, see [Designer overview](/help/en/pai/user-guide/machine-learning-designer-overview).
    
-   Machine Learning Designer provides various preset algorithm components. You can select a component for data processing based on your business requirements. For more information, see [Overview of Designer components](/help/en/pai/user-guide/overview-of-all-components).
