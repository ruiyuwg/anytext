This topic describes the linear regression (LR) algorithm.

## Background information

LR is a regression analysis that uses the least square function of a linear regression equation to model the relationship between one or more independent variables and the dependent variable.

## Scenarios

LR is a regression model that is primarily used to fit values. The model is simple but highly interpretable.

LR is suitable for fitting trend lines. A trend line represents the long-term trend of time series data. It indicates whether a set of data (such as stock prices, GMV, and sales volume) has increased or decreased over a period of time. Although trend lines can be drawn based on visual inspection of data points in the coordinate system, it is more appropriate to use LR to calculate the position and gradient of the trend line.

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

epoch

The number of iterations. This parameter is usually a positive integer. Default value: -1.

**Note**

If this parameter is set to -1, the iteration continues until it converges.

normalize

Specifies whether normalization is required. Valid values:

-   False (default): normalizes data before model creation.
    
-   True: does not normalize data before model creation.
    

## Examples

Create an LR model.

```
/*polar4ai*/CREATE MODEL linearreg1 WITH
( model_class = 'linearreg', x_cols = 'dx1,dx2', y_cols='y',
 model_parameter=(epoch=3)) AS (SELECT * FROM db4ai.testdata1);
```

Evaluate the model.

```
/*polar4ai*/SELECT dx1,dx2 FROM EVALUATE(MODEL linearreg1, 
SELECT * FROM db4ai.testdata1 LIMIT 10) WITH 
(x_cols = 'dx1,dx2',y_cols='y',metrics='r2_score');
```

Use the model for prediction.

```
/*polar4ai*/SELECT dx1,dx2 FROM
PREDICT(MODEL linearreg1, SELECT * FROM db4ai.testdata1 LIMIT 10)
WITH (x_cols = 'dx1,dx2');
```

**Note**

Data types of `x_cols` and `y_cols` must be floating-point or integer.
