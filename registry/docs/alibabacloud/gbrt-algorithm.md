This topic describes the gradient boosting regression tree (GBRT) algorithm.

## Background information

The GBRT algorithm is a member of the boosting family. It uses the forward distribution algorithm, but the weak learner is limited to the CART regression tree model. The philosophy of the forward distribution algorithm: An appropriate decision tree function is selected based on the current model and fitting function to minimize the loss function.

GBRT consists of the following parts:

-   Regression tree (RT): one of the decision tree categories. It is used to predict actual values. GBRT is an iterative regression tree algorithm that consists of multiple regression trees. The conclusions of all regression trees accumulated to obtain the final result.
    
-   Gradient boosting (GB): The final result is determined by iterating multiple trees. Each tree learns from the conclusions and residuals of the previous trees.
    

## Scenarios

GBRT is a regression model that is primarily used to fit values.

GBRT can be applied to epidemiology. For example, the early evidence of human mortality and morbidity comes from observational studies of regression analysis. Suppose there is a regression model in which mortality (or morbidity) is `y_cols`, the variable to be fitted, then socioeconomic status, education, or income can be used as its dependent variables.

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

n\_estimators

The number of iterations. A higher number of iterations indicates a better fitting. It is usually a positive integer. The default value is 100.

objective

The learning task and its learning objectives. Valid values:

-   ls (default): least-squares.
    
-   lad: least absolute deviation.
    
-   huber: combines least-squares and least absolute deviation.
    

max\_depth

The maximum depth of the tree. Default value: 7.

**Note**

If this parameter is set to -1, the depth of the tree is not specified. We recommend that you specify this parameter with caution to prevent overfitting.

random\_state

The random state. This parameter is usually a positive integer. Default value: 1.

## Examples

Create a GBRT model.

```
/*polar4ai*/CREATE MODEL gbrt1 WITH
( model_class = 'gbrt', x_cols = 'dx1,dx2', y_cols='y',
 model_parameter=(objective='ls')) AS (SELECT * FROM db4ai.testdata1);
```

Evaluate the model.

```
/*polar4ai*/SELECT dx1,dx2 FROM EVALUATE(MODEL gbrt1, 
SELECT * FROM db4ai.testdata1 LIMIT 10) WITH 
(x_cols = 'dx1,dx2',y_cols='y',metrics='r2_score');
```

Use the model for prediction.

```
/*polar4ai*/SELECT dx1,dx2 FROM
PREDICT(MODEL gbrt1, SELECT * FROM db4ai.testdata1 LIMIT 10)
WITH (x_cols = 'dx1,dx2');
```

**Note**

Data types of `x_cols` and `y_cols` must be floating-point or integer.
