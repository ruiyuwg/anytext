The common logistic regression algorithm is used for binary classification. Machine Learning Platform for AI (PAI) allows you to use the logistic regression algorithm for multiclass classification. The Logistic Regression for Multiclass Classification component supports both the sparse and dense data formats.

## Configure the component

You can use one of the following methods to configure the Logistic Regression for Multiclass Classification component.

### Method 1: Configure the component on the pipeline page

You can configure the parameters of the Logistic Regression for Multiclass Classification component on the pipeline page of Machine Learning Designer of Machine Learning Platform for AI (PAI). Machine Learning Designer is formerly known as Machine Learning Studio. The following table describes the parameters.

**Tab**

**Parameter**

**Description**

**Fields Setting**

**Training Feature Columns**

The feature columns that are selected from the data source for training. The columns of the DOUBLE and BIGINT types are supported.

**Note**

A maximum of 20 million features are supported.

**Target Columns**

The objective columns in the input table.

**Sparse Format**

Specifies whether the input data is in the sparse format.

**Parameters Setting**

**Regularization Type**

Valid values: **L1**, **L2**, and **None**.

**Maximum Number of Iterations**

The maximum number of iterations. Default value: 100.

**Regularization Coefficient**

If the Regularization Type parameter is set to None, this parameter is invalid.

**Minimum Convergence Deviance**

The minimum convergence deviance. Default value: 0.000001.

### Method 2: Use PAI commands

Configure the component parameters by using PAI commands. You can use the SQL Script component to call PAI commands. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#concept-2325896).

```
PAI -name logisticregression_multi
    -project algo_public
    -DmodelName="xlab_m_logistic_regression_6096"
    -DregularizedLevel="1"
    -DmaxIter="100"
    -DregularizedType="l1"
    -Depsilon="0.000001"
    -DlabelColName="y"
    -DfeatureColNames="pdays,emp_var_rate"
    -DgoodValue="1"
    -DinputTableName="bank_data"
```

**Parameter**

**Required**

**Description**

**Default value**

inputTableName

Yes

The name of the input table.

N/A

featureColNames

No

The feature columns that are selected from the input table for training.

**Note**

A maximum of 20 million features are supported.

All columns of numeric data types

labelColName

Yes

The name of the label column that is selected from the input table.

N/A

inputTablePartitions

No

The partitions that are selected from the input table for training. Specify this parameter in one of the following formats:

-   partition\_name=value
    
-   name1=value1/name2=value2: multi-level partitions
    

**Note**

If you specify multiple partitions, separate them with commas (,).

Full table

modelName

Yes

The name of the output model.

N/A

regularizedType

No

The regularization type. Valid values: l1, l2, and None.

l1

regularizedLevel

No

The regularization coefficient. If the regularizedType parameter is set to None, this parameter is invalid.

1.0

maxIter

No

The maximum number of iterations of the limited-memory BFGS (L-BFGS) algorithm.

100

epsilon

No

The convergence error. This parameter specifies the conditions to terminate the L-BFGS algorithm. If the difference of log-likelihood between two iterations is less than the value specified by this parameter, the iteration of the L-BFGS algorithm is terminated.

1.0e-06

enableSparse

No

Specifies whether the input data is in the sparse format. Valid values: true and false.

false

itemDelimiter

No

The delimiter that is used to separate key-value pairs when data in the input data is in the sparse format.

,

kvDelimiter

No

The delimiter that is used to separate keys and values when data in the input table is in the sparse format.

:

coreNum

No

The number of cores.

Determined by the system

memSizePerCore

No

The memory size of each core. Unit: MB.

Determined by the system

## Example

1.  Execute the following SQL statements to generate training data:
    
    ```
    drop table if exists multi_lr_test_input;
    create table multi_lr_test_input
    as
    select
        *
    from
    (
        select
            cast(1 as double) as f0,
            cast(0 as double) as f1,
            cast(0 as double) as f2,
            cast(0 as double) as f3,
            cast(0 as bigint) as label
        union all
            select
                cast(0 as double) as f0,
                cast(1 as double) as f1,
                cast(0 as double) as f2,
                cast(0 as double) as f3,
                cast(0 as bigint) as label
        union all
            select
                cast(0 as double) as f0,
                cast(0 as double) as f1,
                cast(1 as double) as f2,
                cast(0 as double) as f3,
                cast(2 as bigint) as label
        union all
            select
                cast(0 as double) as f0,
                cast(0 as double) as f1,
                cast(0 as double) as f2,
                cast(1 as double) as f3,
                cast(1 as bigint) as label
    ) a;
    ```
    
    The following table provides the generated training data in the multi\_lr\_test\_input table.
    
    **f0**
    
    **f1**
    
    **f2**
    
    **f3**
    
    **label**
    
    1.0
    
    0.0
    
    0.0
    
    0.0
    
    0
    
    0.0
    
    0.0
    
    1.0
    
    0.0
    
    2
    
    0.0
    
    0.0
    
    0.0
    
    1.0
    
    1
    
    0.0
    
    1.0
    
    0.0
    
    0.0
    
    0
    
2.  Run the following PAI command to submit the parameters of the Logistic Regression for Multiclass Classification component:
    
    ```
    drop offlinemodel if exists multi_lr_test_model;
    PAI -name logisticregression_multi
        -project algo_public
        -DmodelName="multi_lr_test_model"
        -DitemDelimiter=","
        -DregularizedLevel="1"
        -DmaxIter="100"
        -DregularizedType="None"
        -Depsilon="0.000001"
        -DkvDelimiter=":"
        -DlabelColName="label"
        -DfeatureColNames="f0,f1,f2,f3"
        -DenableSparse="false"
        -DinputTableName="multi_lr_test_input";
    ```
    
3.  Run the following PAI command to submit the parameters of the Prediction component:
    
    ```
    drop table if exists multi_lr_test_prediction_result;
    PAI -name prediction
        -project algo_public
        -DdetailColName="prediction_detail"
        -DmodelName="multi_lr_test_model"
        -DitemDelimiter=","
        -DresultColName="prediction_result"
        -Dlifecycle="28"
        -DoutputTableName="multi_lr_test_prediction_result"
        -DscoreColName="prediction_score"
        -DkvDelimiter=":"
        -DinputTableName="multi_lr_test_input"
        -DenableSparse="false"
        -DappendColNames="label";
    ```
    
4.  View the multi\_lr\_test\_prediction\_result table.
    
    **label**
    
    **prediction\_result**
    
    **prediction\_score**
    
    **prediction\_detail**
    
    0
    
    0
    
    0.9999997274902165
    
    {"0": 0.9999997274902165, "1": 2.324679066261573e-07, "2": 2.324679066261569e-07}
    
    0
    
    0
    
    0.9999997274902165
    
    {"0": 0.9999997274902165, "1": 2.324679066261573e-07, "2": 2.324679066261569e-07}
    
    2
    
    2
    
    0.9999999155958832
    
    {"0": 2.018833979850994e-07, "1": 2.324679066261573e-07, "2": 0.9999999155958832}
    
    1
    
    1
    
    0.9999999155958832
    
    {"0": 2.018833979850994e-07, "1": 0.9999999155958832, "2": 2.324679066261569e-07}
