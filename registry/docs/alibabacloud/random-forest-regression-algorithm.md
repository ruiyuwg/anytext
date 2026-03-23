This topic describes the random forest regression algorithm.

## Background information

Random forest regression is an application branch of random forest. The random forest regression model establishes multiple unrelated decision trees by randomly selecting samples and features, and obtains prediction results in parallel. Each decision tree can draw a prediction result by using samples and features. The regression prediction result of the whole forest is obtained by averaging the results of all trees.

## Scenarios

Random forest regression can be used in the scenario which requires tens of data dimensions and high accuracy.

For example, the random forest regression model can be used to predict the popularity of a topic on Twitter. The input of the model can be the features of the topic, such as the number of discussion groups for the topic, the number of persons discussing the topic, and the attention of the topic. The output of the model is the average number of active discussion groups per hour. This is a positive floating point number to indicate the popularity.

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

n\_estimators

The number of iterations. A higher number of iterations indicates a better fitting. It is usually a positive integer. The default value is 100.

objective

The learning task and its learning objectives. Valid values:

-   mse (default): uses the mean squared error.
    
-   mae: uses the mean absolute error.
    

max\_features

The maximum number of features to consider when deciding the split.

-   If the value is "sqrt" (default), the maximum number of features is `sqrt(n_features)`.
    
-   If the value is an integer, the maximum number of features is `max_features`, which must be between `0 and n_features`, `n_features` included. `n_features` is the number of features used during modeling.
    
-   If the value is a floating point number, the maximum number of features is `max_features*n_features`.
    
-   If the value is "log2", the maximum number of features is `log2(n_features)`.
    

random\_state

The random state. This parameter is usually a positive integer. Default value: 1.

n\_jobs

The number of parallel threads. A large number indicates a high model creation speed. This parameter is usually a positive integer. Default value: 4.

max\_depth

The maximum depth of each tree. This parameter is usually a positive integer. Default value: None.

**Note**

If this parameter is set to None, the depth of the tree is not specified.

## Examples

Create a random forest regression model.

```
/*polar4ai*/CREATE MODEL randomforestreg1 WITH
( model_class = 'randomforestreg', x_cols = 'dx1,dx2', y_cols='y',
 model_parameter=(objective='mse')) AS (SELECT * FROM db4ai.testdata1);
```

Evaluate the model.

```
/*polar4ai*/SELECT dx1,dx2 FROM EVALUATE(MODEL randomforestreg1, 
SELECT * FROM db4ai.testdata1 LIMIT 10) WITH 
(x_cols = 'dx1,dx2',y_cols='y',metrics='r2_score');
```

Use the model for prediction.

```
/*polar4ai*/SELECT dx1,dx2 FROM
PREDICT(MODEL randomforestreg1, SELECT * FROM db4ai.testdata1 LIMIT 10)
WITH (x_cols = 'dx1,dx2');
```

**Note**

The columns in `x_cols` and `y_cols` must use floating-point or integer.
