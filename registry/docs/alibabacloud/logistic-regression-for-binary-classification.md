The common logistic regression algorithm is used for binary classification. The Logistic Regression for Binary Classification component supports both the sparse and dense formats.

## Configure the component

You can use one of the following methods to configure the Logistic Regression for Binary Classification component.

### Method 1: Configure the component in Machine Learning Designer

Configure the component on the pipeline configuration tab of Machine Learning Designer in the Machine Learning Platform for AI (PAI) console. The following table describes the component parameters.

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

**Positive Class Value**

N/A

**Use Sparse Format**

Specifies whether the input data is in the sparse format.

**Parameters Setting**

**Regularization Type**

The regularization type. Valid values: **None**, **L1**, and **L2**.

**Maximum Iterations**

The maximum number of iterations. Default value: 100.

**Regularization Coefficient**

If the Regularization Type is set to None, this parameter is invalid.

**Minimum Convergence Deviance**

The minimum convergence deviance. Default value: 0.000001.

**Tuning**

**Cores**

The system automatically sets the value.

**Memory Size per Core**

The system automatically sets the value.

### Method 2: Configure the component by PAI commands

Configure the component parameters by using PAI commands. You can use the SQL Script component to run PAI commands. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#concept-2325896). The following table describes the parameters of the command.

```
PAI -name logisticregression_binary
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

The label column that is selected from the input table.

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

The regularization coefficient. This parameter is invalid if the regularizedType parameter is set to None.

1.0

maxIter

No

The maximum number of iterations of the limited-memory BFGS (L-BFGS) algorithm.

100

epsilon

No

The convergence error. This parameter indicates the condition to terminate the iterations of the L-BFGS algorithm. If log-likelihood between two iterations is smaller than this value, the iterations are terminated.

1.0e-06

goodValue

No

The objective reference value. This parameter specifies the value of label that corresponds to the training coefficient in binary classification. The system randomly allocates a value if this parameter is not specified.

N/A

enableSparse

No

Specifies whether the input data is sparse. Valid values: {true, false}.

false

itemDelimiter

No

The delimiter that is used to separate key-value pairs if data in an input table is in the sparse format.

Comma (,)

kvDelimiter

No

The delimiter that is used to separate keys and values if data in an input table is in the sparse format.

Colon (:)

coreNum

No

The number of cores.

Automatically allocated

memSizePerCore

No

The memory size of each core. Unit: MB.

Automatically allocated

In Machine Learning Designer, sparse data is presented in the key-value format. The following table describes specific examples. The itemDelimiter parameter specifies the delimiter used to separate key-value pairs. The kvDelimiter parameter specifies the delimiter used to separate keys and values.

**key\_value**

1:100,4:200,5:300

1:10,2:20,3:30

**Note**

For the key-value format,keys are indicated from 0 by using indexes. If characters are used to indicate the values of keys, the system reports an error.

## Example

1.  Execute the following SQL statements to generate training data:
    
    ```
    drop table if exists lr_test_input;
    create table lr_test_input
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
                cast(1 as bigint) as label
        union all
            select
                cast(0 as double) as f0,
                cast(0 as double) as f1,
                cast(0 as double) as f2,
                cast(1 as double) as f3,
                cast(1 as bigint) as label
        union all
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
    ) a;
    ```
    
    The following training data table lr\_test\_input is generated.
    
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
    
    1
    
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
    
    1.0
    
    0.0
    
    0.0
    
    0.0
    
    0
    
    0.0
    
    1.0
    
    0.0
    
    0.0
    
    0
    
2.  Run the following PAI command to submit the training parameters configured for the Logistic Regression for Binary Classification component:
    
    ```
    drop offlinemodel if exists lr_test_model;
    PAI -name logisticregression_binary
        -project algo_public
        -DmodelName="lr_test_model"
        -DitemDelimiter=","
        -DregularizedLevel="1"
        -DmaxIter="100"
        -DregularizedType="None"
        -Depsilon="0.000001"
        -DkvDelimiter=":"
        -DlabelColName="label"
        -DfeatureColNames="f0,f1,f2,f3"
        -DenableSparse="false"
        -DgoodValue="1"
        -DinputTableName="lr_test_input";
    ```
    
3.  Run the following PAI command to submit the parameters configured for the Prediction component: For more information about the parameters, see [Prediction](/help/en/pai/user-guide/prediction#concept-2567191).
    
    ```
    drop table if exists lr_test_prediction_result;
    PAI -name prediction
        -project algo_public
        -DdetailColName="prediction_detail"
        -DmodelName="lr_test_model"
        -DitemDelimiter=","
        -DresultColName="prediction_result"
        -Dlifecycle="28"
        -DoutputTableName="lr_test_prediction_result"
        -DscoreColName="prediction_score"
        -DkvDelimiter=":"
        -DinputTableName="lr_test_input"
        -DenableSparse="false"
        -DappendColNames="label";
    ```
    
4.  The prediction result table lr\_test\_prediction\_result is generated.
    
    **label**
    
    **prediction\_result**
    
    **prediction\_score**
    
    **prediction\_detail**
    
    0
    
    0
    
    0.9999998793434426
    
    {"0": 0.9999998793434426, "1": 1.206565574533681e-07}
    
    1
    
    1
    
    0.999999799574135
    
    {"0": 2.004258650156743e-07, "1": 0.999999799574135}
    
    1
    
    1
    
    0.999999799574135
    
    {"0": 2.004258650156743e-07, "1": 0.999999799574135}
    
    0
    
    0
    
    0.9999998793434426
    
    {"0": 0.9999998793434426, "1": 1.206565574533681e-07}
    
    0
    
    0
    
    0.9999998793434426
    
    {"0": 0.9999998793434426, "1": 1.206565574533681e-07}
    
    0
    
    0
    
    0.9999998793434426
    
    {"0": 0.9999998793434426, "1": 1.206565574533681e-07}
