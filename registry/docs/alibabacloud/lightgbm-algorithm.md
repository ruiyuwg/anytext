This topic describes the light gradient boosting machine (LightGBM) algorithm.

## Background information

LightGBM is a distributed gradient lifting framework based on decision tree algorithms. LightGBM is designed as a fast, efficient, low-memory, and high-accuracy tool that supports parallel and large-scale data processing. LightGBM can reduce the amount of memory occupied by data, lower communication costs, improve the efficiency of multi-node elastic parallel query (ePQ), and achieve linear acceleration in data computing.

## Scenarios

LightGBM is an algorithm framework that includes GBDT models, random forests, and logistic regression models. LightGBM is primarily used in scenarios such as binary classification, multiclass classification, and sorting.

For example, in most personalized commodity recommendation scenarios, click prediction models are required. Click prediction models are used to predict user clicks or purchases based on historical user behavior data such as clicks, non-clicks, and purchases. The following features are extracted based on user behavior and user attributes:

-   Categorical feature: a string type, such as gender (male or female).
    
-   Commodity category: categories such as clothing, toys, or electronics.
    
-   Numerical feature: integer or floating-point data type, such as user activity or commodity prices.
    

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

boosting\_type

The type of the weak learner. Valid values:

-   **gbdt** (default): uses the gradient-boosted decision tree model.
    
-   **gblinear**: uses the linear model.
    
-   **rf**: uses the random forest model.
    
-   **dart**: uses the dropout technique to delete some trees to prevent overfitting.
    
-   **goss**: uses the gradient-based one side sampling algorithm. This type is fast, but may cause underfitting.
    

**Note**

When you specify a value for this parameter value, enclose the value in single quotation marks ('). Example: `boosting_type='gbdt'`

n\_estimators

The number of iterations. The value must be an integer. Default value: 100.

loss

The learning task and the learning objectives of the task. Valid values:

-   **binary** (default): binary classification.
    
-   **regression**: uses the L2-regularization regression model.
    
-   **regression\_l1**: uses the L1-regularization regression model.
    
-   **multiclass**: multiclass classification.
    

num\_leaves

The number of leaves. The value must be an integer. Default value: 128.

max\_depth

The maximum depth of the tree. The value must be an integer. Default value: 7.

**Note**

If this parameter is set to -1, the depth of the tree is not specified. We recommend that you specify this parameter with caution to prevent overfitting.

learning\_rate

The learning rate. The value must be a floating-point number. Default value: 0.06.

max\_leaf\_nodes

The maximum number of leaf nodes in the tree. The value can be an integer or be left empty. By default, this parameter is left empty, which indicates that the number of leaf nodes in the tree is not limited.

min\_samples\_leaf

The minimum number of sample leaf nodes in the tree. The value must be an integer. Default value: 20.

**Note**

If the number of leaf nodes is less than the minimum number of sample leaf nodes, the nodes are pruned together with sibling nodes.

subsample

The ratio of samples used for model creation to all samples. The value must be a floating-point number. Valid values: 0 to 1. Default value: 1.

**Note**

If the value of this parameter is less than 1, only the specified proportion of the samples are used for model creation.

max\_features

The proportion of model creation features to all features. The value must be a floating-point number. Valid values: 0 to 1. Default value: 1.

max\_depth

The maximum depth of the tree. The value must be an integer. Default value: 7.

**Note**

A greater value specifies the higher precision. However, overfitting may occur.

random\_state

The random number seed. The value must be an integer. Default value: 1.

**Note**

If different values exist, the construction of the tree and the segmentation of model-creating data may be affected.

model\_type

The storage type of the model. Valid values:

-   **pkl** (default): PKL file.
    
-   **pmml**: PMML file. This type can display tree-related information such as the structure of the tree.
    

n\_jobs

The number of threads used for creating the model. The value must be an integer. Default value: 4.

**Note**

The more threads used for model creation, the faster the model is created.

is\_unbalance

Specifies whether to increase the weight of the category with a small number of samples to address sample imbalance. Valid values:

-   **False** (default): does not increase the weight of the category with a small number of samples.
    
-   **True**: increases the weight of the category with a small number of samples.
    

categorical\_feature

The categorical feature. The value must be a string array. In most cases, LightGBM determines the data type to automatically configure the categorical\_feature parameter. You can also configure this parameter.

For example, if the `categorical_feature` parameter is set to 'AirportTo,DayOfWeek', the value 'AirportTo,DayOfWeek' indicates two categorical features.

automl

Specifies whether to enable the automatic parameter tuning feature. Valid values:

-   **False** (default): The automatic parameter tuning feature is disabled.
    
-   **True**: The automatic parameter tuning feature is enabled. By default, after the automatic parameter tuning feature is enabled, the early stopping technique is used to stop iteration when the learning task and the learning objectives of the task specified by the `loss` parameter remain unchanged.
    

automl\_train\_tag

The model creation label.

automl\_test\_tag

The model testing label.

automl\_column

The name of the column in the model creation set or development set that is specified by the automatic parameter tuning feature. You must configure the `automl_column` and `automl_test_tag` parameters. The data volume of the `automl_train_tag` parameter must be 4 to 9 times that of the `automl_test_tag` parameter.

**Note**

After you configure the `automl_column` parameter, automatic searching for the optimal parameter combination is enabled. In this case, you can add the `automl_` prefix before the `learning_rate` and `subsample` parameters. This way, you can search for existing parameters to locate the optimal parameter. Example:

`automl_column='automl_column',automl_train_tag='train',automl_test_tag='test',automl_learning_rate='0.05,0.04,0.03,0.01',automl_subsample='0.6,0.5'`

The optimal parameter is obtained from the learning rate set "0.05, 0.04, 0.03, and 0.01" and the sample sampling parameters "0.6 and 0.5".

## Examples

Create a LightGBM model.

```
/*polar4ai*/CREATE MODEL airline_gbm WITH
(model_class = 'lightgbm',
x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length',
y_cols='Delay',model_parameter=(boosting_type='gbdt'))
AS (SELECT * FROM db4ai.airlines);
```

Evaluate the model.

```
/*polar4ai*/SELECT Airline FROM EVALUATE(MODEL airline_gbm, 
SELECT * FROM db4ai.airlines LIMIT 20) WITH 
(x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length',y_cols='Delay',metrics='acc');
```

Use the model for prediction.

```
/*polar4ai*/SELECT Airline FROM PREDICT(MODEL airline_gbm,
SELECT * FROM db4ai.airlines limit 20) WITH
(x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length');
```
