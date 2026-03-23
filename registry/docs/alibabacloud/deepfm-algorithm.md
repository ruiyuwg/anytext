This topic describes the DeepFM algorithm.

## Overview

Deep Factorization Machine (DeepFM) combines the strengths of the deep neural network (DNN) and factorization machine (FM) models. It can capture both lower-order explicit feature interactions and higher-order implicit feature interactions, eliminating the need for manual feature engineering. DeepFM is often used in recommendation or advertising systems.

-   The input features to a DeepFM model can be broadly categorized into two types:
    
    -   Categorical feature: represented as strings, such as gender (male or female) and commodity category (such as clothing, toys, or electronics).
        
    -   Numerical feature: represented as integers or floating-point numbers, such as user activity or commodity prices.
        
-   Floating-point numbers between 0 and 1 are often returned, which indicates the probability that the value is 1. They can be used for sorting or binary classification.
    

## Scenarios

In most cases, DeepFM is used in classification and sorting scenarios, particularly effective in scenarios in which features are manually built but do not directly reflect results. In recommendation scenarios, low-order feature interactions or high-order feature interactions affect the final behaviorof users. However, you may not be able to identify feature interactions. DeepFM can automatically capture the interactions.

For example, in many personalized commodity recommendation scenarios, click prediction models are used to predict user clicks or purchases. The click prediction models are built based on historical user behavior data, which includes records of clicks, non-clicks, and purchases. If users have a substantial history of behaviors that cannot directly indicate their future clicks or purchases, DeepFM can effectively integrate user behaviors and transform sparse features into high-dimensional dense features.

## Parameters

The values of the parameters described in the following table are the same as those of the `model_parameter` parameter specified in the `CREATE MODEL` statement that is used to create a model. You can configure the parameters based on your business requirements.

**Parameter**

**Description**

metrics

The metrics used to evaluate the model. Valid values:

-   accuracy (default): the accuracy. This metric is used to evaluate classification models.
    
-   binary\_crossentropy: the cross-entropy. This metric is used to evaluate binary classification problems.
    
-   mse: the mean squared error. This metric is used to evaluate regression models.
    

loss

The learning task and the learning objectives of the task. Valid values:

-   binary\_crossentropy (default): the cross-entropy. It is used for binary classification problems.
    
-   mean\_squared\_error: the mean squared error. It is used for regression models.
    

optimizer

The optimizer. Valid values:

-   adam (default): This algorithm combines the advantages of AdaGrad and gradient descent with momentum. It can adapt to sparse gradients ((problems with natural language and computer vision) and alleviate gradient oscillation.
    
-   sgd: stochastic gradient descent.
    
-   rmsdrop: This algorithm improves the AdaGrad algorithm by introducing a weight parameter and modifying the accumulation of step components to the weighted sum.
    

validation\_split

The ratio of cross-validation data. Default value: 0.2.

epochs

The number of iterations. Default value: 6.

batch\_size

The length of the batch. A short batch is prone to overfitting. Default value: 64.

task

The type of the task. Valid values:

-   binary (default): the binary classification model.
    
-   regression: the regression model.
    

## Examples

Create a DeepFM model.

```
/*polar4ai*/CREATE MODEL airline_deepfm WITH
(model_class = 'deepfm',
x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length',
y_cols='Delay',model_parameter=(epochs=6))
AS (SELECT * FROM db4ai.airlines);
```

Evaluate the model.

```
/*polar4ai*/SELECT Airline FROM EVALUATE(MODEL airline_deepfm, 
SELECT * FROM db4ai.airlines LIMIT 20) WITH 
(x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length',y_cols='Delay',metrics='acc');
```

Use the model for prediction.

```
/*polar4ai*/SELECT Airline FROM PREDICT(MODEL airline_deepfm,
SELECT * FROM db4ai.airlines limit 20) WITH
(x_cols = 'Airline,Flight,AirportFrom,AirportTo,DayOfWeek,Time,Length');
```
