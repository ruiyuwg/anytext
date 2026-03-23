Linear regression is a statistical method that models the linear relationship between a dependent variable and one or more independent variables. It fits an optimal linear curve to the data, minimizing the error between predicted and actual values. This process lets you estimate and analyze the dependent variable.

## Configure the component

### Method 1: Use the UI

Add the **Linear Regression** component to the workflow page in Designer, and configure its parameters in the pane on the right:

**Parameter type**

**Parameter**

**Description**

Fields setting

Select feature columns

The feature columns from the input data source to use for training.

Select label column

The DOUBLE and BIGINT types are supported.

Is sparse format

You can represent the sparse format in the KV format.

Separator between key-value pairs

The default separator is a comma (,).

Separator between key and value

The separator between keys and values. The default is a colon (:).

Parameters setting

Maximum iterations

The maximum number of iterations for the algorithm.

Minimum likelihood error

Uses log-likelihood as the convergence criterion. The algorithm stops if the difference in log-likelihood between two consecutive iterations is less than this value.

Regularization type

The regularization type. Supported types are **L1**, **L2**, and **None**.

Regularization coefficient

If **Regularization Type** is set to **None**, this parameter is ignored.

Generate model evaluation table

The metrics include R-Squared, Adjusted R-Squared, AIC, degrees of freedom, the standard deviation of the residuals, and bias.

Regression coefficient evaluation

Metrics include T-value, P-value, and the confidence interval \[2.5%,97.5%\]. This parameter is available only if the **Generate model evaluation table** check box is selected.

Execution tuning

Number of computing cores

By default, the system automatically allocates the cores.

Memory size per core

By default, the system automatically allocates the memory.

### Method 2: Use PAI commands

Use PAI commands to configure the parameters for the **Linear Regression** component. You can use the SQL script component to call PAI commands. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#p-a45-911-tq1).

```
PAI -name linearregression
    -project algo_public
    -DinputTableName=lm_test_input
    -DfeatureColNames=x
    -DlabelColName=y
    -DmodelName=lm_test_input_model_out;
```

**Parameter**

**Required**

**Default value**

**Description**

inputTableName

Yes

None

The name of the input table.

modelName

Yes

None

The name of the output model.

outputTableName

No

None

The name of the output model evaluation table. This parameter is required if enableFitGoodness is true.

labelColName

Yes

None

The dependent variable. DOUBLE and BIGINT types are supported. You can select only one column as the dependent variable.

featureColNames

Yes

None

The independent variables. If the input data is in dense format, DOUBLE and BIGINT types are supported. If the input data is in sparse format, the STRING type is supported.

inputTablePartitions

No

None

The partitions of the input table.

enableSparse

No

false

Specifies whether the input data is in sparse format. Valid values are {true,false}.

itemDelimiter

No

Comma (,)

The separator between key-value pairs. This parameter is used if enableSparse is true.

kvDelimiter

No

Colon (:)

The separator between a key and a value. This parameter is used if enableSparse is true.

maxIter

No

100

The maximum number of iterations for the algorithm.

epsilon

No

0.000001

The minimum likelihood error. The algorithm stops if the difference in log-likelihood between two consecutive iterations is less than this value.

regularizedType

No

None

The regularization type. Valid values are {l1,l2,None}.

regularizedLevel

No

1

The regularization coefficient. This parameter is not used if regularizedType is **None**.

enableFitGoodness

No

false

Specifies whether to generate a model evaluation table. Metrics include R-Squared, Adjusted R-Squared, AIC, degrees of freedom, standard deviation of residuals, and deviance. Valid values are {true,false}.

enableCoefficientEstimate

No

false

Specifies whether to evaluate the regression coefficient. Evaluation metrics include T-value, P-value, and the confidence interval \[2.5%,97.5%\]. This parameter is used if enableFitGoodness is true. Valid values are {true,false}.

lifecycle

No

\-1

The lifecycle of the output model evaluation table.

coreNum

No

System allocated

By default, the system automatically allocates the cores.

memSizePerCore

No

System allocated

By default, the system automatically allocates the memory.

## Examples

1.  Generate test data using an SQL statement.
    
    ```
     drop table if exists lm_test_input;
      create table lm_test_input as
      select
        *
      from
      (
        select 10 as y, 1.84 as x1, 1 as x2, '0:1.84 1:1' as sparsecol1
          union all
        select 20 as y, 2.13 as x1, 0 as x2, '0:2.13' as sparsecol1
          union all
        select 30 as y, 3.89 as x1, 0 as x2, '0:3.89' as sparsecol1
          union all
        select 40 as y, 4.19 as x1, 0 as x2, '0:4.19' as sparsecol1
          union all
        select 50 as y, 5.76 as x1, 0 as x2, '0:5.76' as sparsecol1
          union all
        select 60 as y, 6.68 as x1, 2 as x2, '0:6.68 1:2' as sparsecol1
          union all
        select 70 as y, 7.58 as x1, 0 as x2, '0:7.58' as sparsecol1
          union all
        select 80 as y, 8.01 as x1, 0 as x2, '0:8.01' as sparsecol1
          union all
        select 90 as y, 9.02 as x1, 3 as x2, '0:9.02 1:3' as sparsecol1
          union all
        select 100 as y, 10.56 as x1, 0 as x2, '0:10.56' as sparsecol1
      ) tmp;
    ```
    
2.  Submit the parameters for the linear regression component using a PAI command.
    
    ```
    PAI -name linearregression
        -project algo_public
        -DinputTableName=lm_test_input
        -DlabelColName=y
        -DfeatureColNames=x1,x2
        -DmodelName=lm_test_input_model_out
        -DoutputTableName=lm_test_input_conf_out
        -DenableCoefficientEstimate=true
        -DenableFitGoodness=true
        -Dlifecycle=1;
    ```
    
3.  Submit the parameters for the prediction component using a PAI command.
    
    ```
    pai -name prediction
        -project algo_public
        -DmodelName=lm_test_input_model_out
        -DinputTableName=lm_test_input
        -DoutputTableName=lm_test_input_predict_out
        -DappendColNames=y;
    ```
    
4.  View the output model evaluation table lm\_test\_input\_conf\_out.
    
    ```
    +------------+------------+------------+------------+--------------------+------------+
    | colname    | value      | tscore     | pvalue     | confidenceinterval | p          |
    +------------+------------+------------+------------+--------------------+------------+
    | Intercept  | -6.42378496687763 | -2.2725755951390028 | 0.06       | {"2.5%": -11.964027, "97.5%": -0.883543} | coefficient |
    | x1         | 10.260063429838898 | 23.270944360826963 | 0.0        | {"2.5%": 9.395908, "97.5%": 11.124219} | coefficient |
    | x2         | 0.35374498323846265 | 0.2949247320997519 | 0.81       | {"2.5%": -1.997160, "97.5%": 2.704650} | coefficient |
    | rsquared   | 0.9879675667384592 | NULL       | NULL       | NULL               | goodness   |
    | adjusted_rsquared | 0.9845297286637332 | NULL       | NULL       | NULL               | goodness   |
    | aic        | 59.331109494251805 | NULL       | NULL       | NULL               | goodness   |
    | degree_of_freedom | 7.0        | NULL       | NULL       | NULL               | goodness   |
    | standardErr_residual | 3.765777749448906 | NULL       | NULL       | NULL               | goodness   |
    | deviance   | 99.26757440771128 | NULL       | NULL       | NULL               | goodness   |
    +------------+------------+------------+------------+--------------------+------------+
    ```
    
5.  View the prediction result table lm\_test\_input\_predict\_out.
    
    ```
    +------------+-------------------+------------------+-------------------+
    | y          | prediction_result | prediction_score | prediction_detail |
    +------------+-------------------+------------------+-------------------+
    | 10         | NULL              | 12.808476727264404 | {"y": 12.8084767272644} |
    | 20         | NULL              | 15.43015013867922 | {"y": 15.43015013867922} |
    | 30         | NULL              | 33.48786177519568 | {"y": 33.48786177519568} |
    | 40         | NULL              | 36.565880804147355 | {"y": 36.56588080414735} |
    | 50         | NULL              | 52.674180388994415 | {"y": 52.67418038899442} |
    | 60         | NULL              | 62.82092871092313 | {"y": 62.82092871092313} |
    | 70         | NULL              | 71.34749583130122 | {"y": 71.34749583130122} |
    | 80         | NULL              | 75.75932310613193 | {"y": 75.75932310613193} |
    | 90         | NULL              | 87.1832221199846 | {"y": 87.18322211998461} |
    | 100        | NULL              | 101.92248485222113 | {"y": 101.9224848522211} |
    +------------+-------------------+------------------+-------------------+
    ```
