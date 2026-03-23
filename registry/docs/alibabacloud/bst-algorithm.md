The Behavior Sequence Transformer (BST) algorithm leverages the powerful Transformer framework to capture long-term time series information from user behavior sequences. It extracts implicit features from behavior sequences and generates predictions. The BST algorithm offers significant benefits in business scenarios related to behavior sequences, such as recommendation systems and user lifecycle value mining.

## Scenarios

The BST algorithm supports various prediction tasks, including classification and regression:

-   The input is typically a behavior sequence with time series characteristics, stored in the database as `LONGTEXT` type, such as user click behaviors in the past seven days.
    
-   The BST algorithm outputs predictions, which are integers or floating-point numbers, such as the expected user payment amounts, user churn occurrences, or payment confirmations.
    
-   Sample classification scenarios:
    
    Predict the number of new paying users and potential churns of regular-paying and high-paying users in gaming scenarios. For example, the in-game behaviors of paying users over the previous 14 days in a gaming operation scenario are constructed into the behavior sequence input of the BST algorithm. The algorithm extracts relevant features from these behavior sequences to predict potential churns in the following 14 days. A user is considered to have churned if they do not log on for 14 consecutive days.
    
-   Sample regression scenarios:
    
    Predict the total spending of new users in a gaming scenario. For example, the in-game behaviors of new users within the first 24 hours in a gaming operation scenario are constructed into the behavior sequence input of the BST algorithm. The algorithm extracts relevant features from these behavior sequences to predict the total spending of new users in the following seven days.
    

## Limits

The BST algorithm works effectively when the input data is balanced in terms of class distribution. If the input data is imbalanced, such as when a majority class has more than 20 times the samples of the minority classes, we recommend that you use the K-means clustering algorithm provided in PolarDB for AI to preprocess the imbalanced classes, such as the non-paying group, and provide a balanced overall data distribution across classes. For more information, see [K-means clustering algorithm (K-Means)](/help/en/polardb/polardb-for-mysql/k-means-clustering-algorithm).

## **Format of the data table for model creation**

**Column name**

**Required/Optional**

**Column type**

**Column description**

**Example**

uid

Required

VARCHAR

The ID of each data entry, such as the user ID or product ID.

253460731706911258

event\_list

Required

LONGTEXT

The behavior sequence used to create the model in the input table. The data in the sequence is separated by commas (,). Each behavior in the sequence is represented by a unique integer ID. The behaviors in the sequence are sorted in ascending order based on their timestamps.

"\[183, 238, 153, 152\]"

target

Required

INT, FLOAT, DOUBLE

The label of the sample that is used to measure the algorithm model metrics.

0

val\_row

Optional

INT

To prevent the model from overfitting, you can specify a validation set. Valid values:

-   0: labels the row as model creation data.
    
-   1: labels the row as validation data.
    

**Note**

This parameter is typically used in conjunction with the version and val\_flag parameters in the model creation parameter configuration. The following rules apply:

-   When the version parameter is set to 1 and the val\_flag parameter is set to 1, the val\_row parameter takes effect.
    
-   When the val\_flag parameter is set to 0, if the val\_row parameter is specified, only the data with val\_row=0 is used as model creation data.
    

1

other\_feature

Optional

INT, FLOAT, DOUBLE, LONGTEXT

Other features of the model. When using this parameter, you need to include the required feature column names in the x\_value\_cols and x\_statics\_cols configurations of the model creation parameters.

**Note**

-   When other\_feature is of the LONGTEXT type, the text supports the following formats: JSON, list, or a string separated by `,`.
    
-   You can specify multiple other\_feature parameters, such as other\_feature1 and other\_feature2.
    

2

val\_x\_cols

Optional

LONGTEXT

A sequence of behaviors for model validation and parameter tuning. Each behavior in the sequence is represented by a unique integer ID. The behaviors in the sequence are separated by commas (,) and sorted in ascending order based on their timestamps.

**Note**

This parameter takes effect only when `version=0`. For more information, see [version](#eac5a91ecf3sb).

"\[183, 238, 153, 152\]"

val\_y\_cols

Optional

INT, FLOAT, DOUBLE

The label of the sample for the behavior sequence used for parameter tuning.

**Note**

This parameter takes effect only when `version=0`. For more information, see [version](#eac5a91ecf3sb).

1

The parameters in the following table are values of the `model_parameter` parameter in the `CREATE MODEL` syntax for creating an algorithm model. You can select the appropriate parameters based on your current requirements.

**Parameter name**

**Parameter description**

version

Specifies the model version. We recommend that you use the new version. Valid values:

-   0 (default): the old version.
    
-   1: the new version.
    

**Note**

In the old version (version=0), the val\_x\_cols and val\_y\_cols parameters in the model creation data table take effect, but the val\_row parameter does not take effect. The old version does not support multiclass classification tasks or the stacking model enhancement feature.

model\_task\_type

The task type. Valid values:

-   classification (default)
    
-   regression
    
-   multi\_classification
    

num\_classes

The number of prediction categories. Default value: 2. This parameter applies to multiclass classification tasks. When using this parameter, make sure that the sample labels in the target start with zero-based numbering and that the number of label categories is less than the value of this parameter.

For example, when num\_classes=3, the sample label categories in the dataset should only be {0, 1, 2}.

batch\_size

The batch size. A small batch size can increase the risk of overfitting in a model. Default value: 16.

window\_size

Used for embedded encoding of behavior IDs. The value must be greater than or equal to the maximum behavior ID value plus one. Otherwise, a parsing error occurs.

sequence\_length

The length of the behavior sequence involved in algorithm model calculations. The value must not exceed 3000. If the window\_size parameter is greater than 900, do not set the sequence\_length parameter to a value that is excessively large.

success\_id

The ID of the behavior for which the model makes a prediction.

max\_epoch

The maximum number of iterations. Default value: 1.

learning\_rate

The learning rate. Default value: 0.0002.

loss

The loss function. Valid values:

-   CrossEntropyLoss (default): used for binary classification issues.
    
-   mse: used for regression tasks.
    
-   mae: used for regression tasks.
    
-   msle: used for regression tasks.
    

val\_flag

Specifies whether to perform validation after each iteration during model creation. Valid values:

-   0 (default): does not perform validation. You do not need to specify the val\_metric parameter or the val\_row parameter in the model creation table. The algorithm model from the last iteration of model creation is saved.
    
-   1: performs validation during model creation. The val\_metric parameter and the val\_row parameter in the model creation table are required. The algorithm model with the best validation metric is saved.
    

val\_metric

The metric used for validation. Valid values:

-   loss (default): the same as the loss parameter used during model creation. This metric can be used for classification (including multiclass classification) and regression tasks.
    
-   f1score: the harmonic mean of precision and recall. This metric can be used for classification (including multiclass classification) tasks.
    
-   r2\_score: the coefficient of determination. This metric can be used for regression tasks.
    
-   mse: the mean square error. This metric can be used for regression tasks.
    
-   mape: the mean absolute percentage error. This metric can be used for regression tasks.
    
-   mape\_plus: a variant of MAPE that measures only the error of positive labels. This metric can be used for regression tasks.
    

auto\_data\_statics

Specifies whether to automatically generate statistical features. Valid values:

-   on: counts the occurrences of IDs in the sequence and generates statistical features.
    
-   off (default): does not count the occurrences of IDs in the sequence.
    

auto\_heads

Specifies whether to automatically specify the number of multi-attention headers. Valid values:

-   1 (default): automatically specifies the number of multi-attention headers.
    
-   0: manually specifies the number of multi-attention headers.
    

**Note**

-   If you set this parameter to 1, an insufficient video memory risk may occur.
    
-   Make sure that the calculation result of int(sqrt{window\_size})+int(sqrt{sequence\_length})+2 is not a prime number.
    

num\_heads

If you set the auto\_heads parameter to 0, you must specify this parameter. Default value: 4.

x\_value\_cols

Specifies specific columns as numeric discrete features. This parameter cannot be empty.

**Note**

-   Example: `x_value_cols='num_events, max_level, max_viplevel'` indicates that the `num_events, max_level, max_viplevel` columns are used as numeric discrete features.
    
-   The values in each column must be integers or floating-point numbers.
    

x\_statics\_cols

Specifies specific columns as statistical features. This parameter cannot be empty, and the length of the data in each row of the specified columns must be consistent (fixed-length).

**Note**

-   Example: `x_statics_cols='stats_item_list, stats_event_list'` indicates that the `stats_item_list, stats_event_list` columns are used as statistical features.
    
-   Each column must be of the LONGTEXT type. The text supports the following formats: JSON, list, or a string separated by `,`. In JSON strings, the values in the key-value pairs are used as statistical features. The JSON format can be `{"money":30,"level":21}`. If the format is a list or a string separated by `,`, each value must be of the `INT` or `FLOAT` type. Examples:
    
    -   `stats_event_list="[1,2,4,23,2]"`
        
    -   `stats_item_list="232,23123,232,2"`
        

x\_seq\_cols

Specifies specific columns as sequence features.

**Note**

-   Example: `x_seq_cols='event_list'`
    
-   Each column must be of the LONGTEXT type. The text supports the following formats: list or a string separated by `,`. Example: `"[183, 238, 153, 152]"`
    

data\_normalization

Specifies whether to normalize data in the columns specified by the x\_value\_cols parameter. Valid values:

-   0 (default): does not perform the normalization operation.
    
-   1: performs the normalization operation.
    

remove\_seq\_adjacent\_duplicates

Specifies whether to remove adjacent duplicate values from the columns specified by the x\_seq\_cols parameter. Valid values:

-   off (default): does not perform the deduplication operation.
    
-   on: performs the deduplication operation.
    

stacking

Specifies whether to enhance the BST algorithm through model fusion. This parameter is valid only when model\_task\_type='classification'. Valid values:

-   off (default): does not perform model fusion.
    
-   on: performs model fusion and deduplication.
    

stacking\_model

Specifies the models to be fused for model fusion enhancement. This parameter is valid only when stacking='on'. The valid set is {'bst', 'gbdt', 'svc', 'rt'}, and this parameter cannot be empty. Default value: 'gbdt,svc,rt'.

## Format of the data table for algorithm model evaluation

**Column name**

**Required/Optional**

**Column type**

**Column description**

**Example**

uid

Required

VARCHAR(255)

The ID of each data entry, such as the user ID or product ID.

123213

event\_list

Required

LONGTEXT

The behavior sequence used to create the model in the input table. The data in the sequence is separated by commas (,). Each behavior in the sequence is represented by a unique integer ID. The behaviors in the sequence are sorted in ascending order based on their timestamps.

"\[183, 238, 153, 152\]"

target

Required

INT, FLOAT, DOUBLE

The label of the sample used to calculate the errors of the algorithm model.

0

other\_feature

Optional

INT, FLOAT, DOUBLE, LONGTEXT

Other features of the model, which are consistent with those for model construction. When using this parameter, you need to include the required feature column names in the x\_value\_cols and x\_statics\_cols configurations of the model creation parameters.

**Note**

-   When other\_feature is of the LONGTEXT type, the text supports the following formats: JSON, list, or a string separated by `,`.
    
-   You can specify multiple other\_feature parameters, such as other\_feature1 and other\_feature2.
    

2

The parameters in the following table are values of the `metrics` parameter in the `EVALUATE` syntax for algorithm model evaluation. You can select the appropriate evaluation metric parameters based on your current requirements.

**Parameter name**

**Parameter description**

metrics

The metric used for validation. Valid values:

-   acc: accuracy. This metric can be used for classification (including multiclass classification) tasks.
    
-   auc: the area under the receiver operating characteristic curve. This metric can be used for classification (including multiclass classification) tasks.
    
-   Fscore: the harmonic mean of precision and recall. This metric can be used for classification (including multiclass classification) tasks.
    
-   r2\_score: the coefficient of determination. This metric can be used for regression tasks.
    
-   mse: the mean square error. This metric can be used for regression tasks.
    
-   mape: the mean absolute percentage error. This metric can be used for regression tasks.
    
-   mape\_plus: a variant of MAPE that measures only the error of positive labels. This metric can be used for regression tasks.
    

## Format of the data table for algorithm model prediction

**Column name**

**Required/Optional**

**Column type**

**Column description**

**Example**

uid

Required

VARCHAR(255)

The ID of each data entry, such as the user ID or product ID.

123213

event\_list

Required

LONGTEXT

The behavior sequence used to create the model in the input table. The data in the sequence is separated by commas (,). Each behavior in the sequence is represented by a unique integer ID. The behaviors in the sequence are sorted in ascending order based on their timestamps.

"\[183, 238, 153, 152\]"

other\_feature

Optional

INT, FLOAT, DOUBLE, LONGTEXT

Other features of the model, which are consistent with those for model construction. When using this parameter, you need to include the required feature column names in the x\_value\_cols and x\_statics\_cols configurations of the model creation parameters.

**Note**

-   When other\_feature is of the LONGTEXT type, the text supports the following formats: JSON, list, or a string separated by `,`.
    
-   You can specify multiple other\_feature parameters, such as other\_feature1 and other\_feature2.
    

2

## Example

**Note**

Classification tasks are used in the following examples. For more task types, see [model task type](#9f8ef9bc45ybk).

### **Model creation and offline learning**

```
/*polar4ai*/CREATE MODEL sequential_bst WITH (
model_class = 'bst', 
x_cols = 'event_list,other_feature1', 
y_cols='target',
model_parameter=(
  batch_size=128,
   window_size=900, 
   sequence_length=3000, 
   success_id=900, 
   max_epoch=2, 
   learning_rate=0.0008, 
   val_flag=1, 
   x_seq_cols='event_list', 
   x_value_cols='other_feature1', 
   val_metric='f1score', 
   auto_data_statics='on', 
   data_normalization=1, 
   remove_seq_adjacent_duplicates='on', 
   version=1)) AS (SELECT * FROM seqential_train);
```

**Note**

In this example, `seqential_train` is the model creation data table.

### **Model evaluation**

```
/*polar4ai*/SELECT uid,target FROM evaluate(MODEL sequential_bst,
SELECT * FROM seqential_eval) WITH 
(x_cols = 'event_list,other_feature1', y_cols='target', metrics='Fscore');
```

**Note**

In this example, `seqential_eval` is the model evaluation data table.

### **Model prediction**

```
/*polar4ai*/SELECT uid,target FROM PREDICT(MODEL sequential_bst, SELECT * FROM seqential_test) WITH 
(x_cols= 'event_list,other_feature1',mode='async');
```

**Note**

In this example, `seqential_test` is the model prediction data table.
