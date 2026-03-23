Gradient Boosting Decision Tree (GBDT) is an advanced machine learning algorithm. It uses an iterative method to build a collection of decision trees for regression analysis. By progressively optimizing a loss function, the algorithm can handle both linear and nonlinear regression problems and provide highly accurate prediction results.

## Configure the component

### Method 1: Visual configuration

Add the **GBDT Regression** component to the Designer workflow page. Then, configure the parameters in the pane on the right.

**Parameter type**

**Parameter**

**Description**

Fields setting

Input columns

The feature columns from the input data source used for training. Supports DOUBLE and BIGINT types.

**Note**

The number of feature columns cannot exceed 800.

Label column

Supports DOUBLE and BIGINT types.

Group column

Supports DOUBLE and BIGINT types. By default, the entire table is treated as one group.

Parameters setting

Loss function type

Supported types are **gbrank loss**, **lambdamart dcg loss**, **lambdamart ndcg loss**, and **regression loss**.

Tau parameter in gbrank loss

The value must be in the range of \[0,1\].

Exponent base in gbrank and regression loss

The value must be in the range of \[1,10\].

Metric type

Supported types are **NDCG** and **DCG**.

Number of trees

The value must be in the range of 1 to 10000.

Learning rate

The value must be in the range of (0,1).

Maximum number of leaf nodes

The value must be in the range of 1 to 1000.

Maximum depth of a tree

The value must be in the range of 1 to 11.

Minimum number of samples on a leaf node

The value must be in the range of 1 to 1000.

Sample sampling ratio

The value must be in the range of (0,1).

Feature sampling ratio during training

The value must be in the range of (0,1).

Ratio of test samples

The value must be in the range of \[0,1).

Seed for random number generator

The value must be in the range of \[0,10\].

Use Newton's method for learning

Specifies whether to use Newton's method.

Maximum number of splits for a feature

The value must be in the range of 1 to 1000.

Execution tuning

Number of computing cores

The system automatically allocates the number of training instances based on the input data volume.

Memory per core

The system automatically allocates memory based on the input data volume. The unit is MB.

### Method 2: Use PAI commands

Use PAI commands to configure the parameters for the **GBDT Regression** component. You can use the SQL Script component to call PAI commands. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#p-a45-911-tq1).

```
PAI -name gbdt
    -project algo_public
    -DfeatureSplitValueMaxSize="500"
    -DlossType="0"
    -DrandSeed="0"
    -DnewtonStep="0"
    -Dshrinkage="0.05"
    -DmaxLeafCount="32"
    -DlabelColName="campaign"
    -DinputTableName="bank_data_partition"
    -DminLeafSampleCount="500"
    -DsampleRatio="0.6"
    -DgroupIDColName="age"
    -DmaxDepth="11"
    -DmodelName="xlab_m_GBDT_83602"
    -DmetricType="2"
    -DfeatureRatio="0.6"
    -DinputTablePartitions="pt=20150501"
    -Dtau="0.6"
    -Dp="1"
    -DtestRatio="0.0"
    -DfeatureColNames="previous,cons_conf_idx,euribor3m"
    -DtreeCount="500"
```

**Parameter**

**Required**

**Default value**

**Description**

inputTableName

Yes

None

The name of the input table.

featureColNames

No

All numeric columns

The names of the feature columns in the input table used for training. Supports DOUBLE and BIGINT types.

labelColName

Yes

None

The name of the label column in the input table. Supports DOUBLE and BIGINT types.

inputTablePartitions

No

All partitions

The partitions in the input table used for training. The following formats are supported:

-   Partition\_name=value
    
-   name1=value1/name2=value2: multi-level partitions
    

**Note**

Use commas (,) to separate multiple partitions.

modelName

Yes

None

The name of the output model.

outputImportanceTableName

No

None

The name of the output table for feature importance.

groupIDColName

No

Full table

The data grouping column.

lossType

No

0

The loss function. The following types are supported:

-   0: GBRANK
    
-   1: LAMBDAMART\_DCG
    
-   2: LAMBDAMART\_NDCG
    
-   3: LEAST\_SQUARE
    

metricType

No

0

The types include the following:

-   0: NDCG (Normalized Discounted Cumulative Gain)
    
-   1: DCG (Discounted Cumulative Gain)
    
-   2: AUC. This type applies only when the label value is 0/1. This type is deprecated.
    

treeCount

No

500

The number of trees. The value must be in the range of 1 to 10000.

shrinkage

No

0.05

The learning rate. The value must be in the range of (0,1).

maxLeafCount

No

32

The maximum number of leaf nodes. The value must be in the range of 1 to 1000.

maxDepth

No

10

The maximum depth of a tree. The value must be in the range of 1 to 11.

minLeafSampleCount

No

500

The minimum number of samples on a leaf node. The value must be in the range of 1 to 1000.

sampleRatio

No

0.6

The sampling ratio for samples during training. The value must be in the range of (0,1).

featureRatio

No

0.6

The sampling ratio for features during training. The value must be in the range of (0,1).

tau

No

0.6

The Tau parameter in GBRank Loss. The value must be in the range of \[0,1\].

p

No

1

The p parameter in GBRank Loss. The value must be in the range of \[1,10\].

randSeed

No

0

The seed for the random number generator. The value must be in the range of \[0,10\].

newtonStep

No

1

Specifies whether to use the Newton iteration method. The value can be {0,1}.

featureSplitValueMaxSize

No

500

The maximum number of splits for a feature. The value must be in the range of 1 to 1000.

lifecycle

No

None

The lifecycle of the output table.

## Example

1.  Use an SQL statement to generate test data.
    
    ```
    drop table if exists gbdt_ls_test_input;
    create table gbdt_ls_test_input
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
    
    The generated test data table gbdt\_ls\_test\_input is as follows.
    
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
    
2.  Use a PAI command to submit the training parameters for the GBDT Regression component.
    
    ```
    drop offlinemodel if exists gbdt_ls_test_model;
    PAI -name gbdt
        -project algo_public
        -DfeatureSplitValueMaxSize="500"
        -DlossType="3"
        -DrandSeed="0"
        -DnewtonStep="1"
        -Dshrinkage="0.5"
        -DmaxLeafCount="32"
        -DlabelColName="label"
        -DinputTableName="gbdt_ls_test_input"
        -DminLeafSampleCount="1"
        -DsampleRatio="1"
        -DmaxDepth="10"
        -DmetricType="0"
        -DmodelName="gbdt_ls_test_model"
        -DfeatureRatio="1"
        -Dp="1"
        -Dtau="0.6"
        -DtestRatio="0"
        -DfeatureColNames="f0,f1,f2,f3"
        -DtreeCount="10"
    ```
    
3.  Use a PAI command to submit the parameters for the Prediction component.
    
    ```
    drop table if exists gbdt_ls_test_prediction_result;
    PAI -name prediction
        -project algo_public
        -DdetailColName="prediction_detail"
        -DmodelName="gbdt_ls_test_model"
        -DitemDelimiter=","
        -DresultColName="prediction_result"
        -Dlifecycle="28"
        -DoutputTableName="gbdt_ls_test_prediction_result"
        -DscoreColName="prediction_score"
        -DkvDelimiter=":"
        -DinputTableName="gbdt_ls_test_input"
        -DenableSparse="false"
        -DappendColNames="label"
    ```
    
4.  View the prediction result table gbdt\_ls\_test\_prediction\_result.
    
    **label**
    
    **prediction\_result**
    
    **prediction\_score**
    
    **prediction\_detail**
    
    0
    
    NULL
    
    0.0
    
    {“label”: 0}
    
    0
    
    NULL
    
    0.0
    
    {“label”: 0}
    
    1
    
    NULL
    
    0.9990234375
    
    {“label”: 0.9990234375}
    
    1
    
    NULL
    
    0.9990234375
    
    {“label”: 0.9990234375}
    
    0
    
    NULL
    
    0.0
    
    {“label”: 0}
    
    0
    
    NULL
    
    0.0
    
    {“label”: 0}
