This topic describes the Support Vector Regression (SVR) algorithm.

## Background information

SVR is an application branch of support vector machine (SVM). SVR can be used to find a regression plane from which all data elements in a set have the shortest distance.

## Scenarios

SVR is a regression model that is primarily used to fit values and in scenarios with sparse features and a small number of features.

For example, an SVR model can be used to predict the temperature of a city. The input features may include various factors such as the historical average temperature of the city over a specific period, the percentage of greenery coverage, the number of lakes in the area, and the date. The output of the model can be the predicted temperature of the city during the period.

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

kernel

The kernel function, which is used to map low-dimensional data to high-dimensional space. Valid values:

-   rbf (default): the radial basis function. It can be used to map a sample to a high-dimensional space.
    
-   linear: the linear kernel function. It is mainly used in linear separation. The feature space has the same dimensions as the input space. It requires fewer parameters and provides higher speed.
    
-   poly: polynomial kernel function. It can be used to map low-dimensional input space to a high-dimensional feature space. It requires more parameters.
    
-   sigmoid: has a similar effect to that of a multi-layer neural network.
    

c

The penalty coefficient of the relaxation coefficient. It is a floating-point number greater than 0 and can be left empty. Default value: 1.

**Note**

In the case of low data quality, you can reduce the value of this parameter.

epsilon

The threshold of the SVR loss function. When the difference between the predicted value and the actual value is equal to the threshold, the loss of the sample is calculated. Default value: 0.1.

max\_iter

The maximum number of iterations. Valid values: positive integer and -1. Default value: -1.

**Note**

If you set the value to -1, there is no limit to the number of iterations. The iterations will continue until the value converges within the `epsilon`.

## Examples

Create an SVR model.

```
/*polar4ai*/CREATE MODEL svr1 WITH
( model_class = 'svr', x_cols = 'dx1,dx2', y_cols='y',
 model_parameter=(kernel='rbf')) AS (SELECT * FROM db4ai.testdata1);
```

Evaluate the model.

```
/*polar4ai*/SELECT dx1,dx2 FROM EVALUATE(MODEL svr1, 
SELECT * FROM db4ai.testdata1 LIMIT 10) WITH 
(x_cols = 'dx1,dx2',y_cols='y',metrics='r2_score');
```

Use the model for prediction.

```
/*polar4ai*/SELECT dx1,dx2 FROM
PREDICT(MODEL svr1, SELECT * FROM db4ai.testdata1 LIMIT 10)
WITH (x_cols = 'dx1,dx2');
```

**Note**

Data types of `x_cols` and `y_cols` must be floating-point or integer.
