Train gradient boosting models for classification and regression tasks using XGBoost algorithm.

PAI extends the open-source XGBoost library with distributed computing support and platform integration.

## Compute resources

Supported compute resources:

-   MaxCompute
    
-   Flink
    
-   Deep Learning Containers (DLC)
    

## Data formats

Accepted input formats: Table or LibSVM. Specify through the **Field Setting** tab: **featureCols** for Table format, **vectorCol** for LibSVM format (mutually exclusive).

### Table format

Each row represents one training instance. Columns store feature values and label.

**f0**

**f1**

**label**

0.1

1

0

0.9

2

1

### LibSVM format

Each row contains sparse feature-value pairs in `index:value` format. Example:

```
2:1 9:1 10:1 20:1 29:1 33:1 35:1 39:1 40:1 52:1 57:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 101:1 104:1 116:1 123:1
0:1 9:1 18:1 20:1 23:1 33:1 35:1 38:1 41:1 52:1 55:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 101:1 105:1 115:1 121:1
2:1 8:1 18:1 20:1 29:1 33:1 35:1 39:1 41:1 52:1 57:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 101:1 104:1 116:1 123:1
2:1 9:1 13:1 21:1 28:1 33:1 36:1 38:1 40:1 53:1 57:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 97:1 105:1 113:1 119:1
0:1 9:1 18:1 20:1 22:1 33:1 35:1 38:1 44:1 52:1 55:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 101:1 104:1 115:1 121:1
0:1 8:1 18:1 20:1 23:1 33:1 35:1 38:1 41:1 52:1 55:1 64:1 68:1 76:1 85:1 87:1 91:1 94:1 101:1 105:1 116:1 121:1
```

## Configuration

Configure the component using three tabs:

-   **Field Setting**: Input data structure and model storage location
    
-   **Parameter Setting**: XGBoost training algorithm hyperparameters
    
-   **Execution Tuning**: Distributed training resources
    

### Field Setting

**Parameter**

**Type**

**Description**

**labelCol**

String

Label column name.

**featureCols**

String array

Feature columns in Table format. Mutually exclusive with **vectorCol**. Requires Table-formatted input data.

**vectorCol**

String

Vector column name in LibSVM format. Mutually exclusive with **featureCols**. Requires LibSVM-formatted input data.

**weightCol**

String

Weight column name.

**set the model file path**

String

OSS bucket path for storing the trained model.

### Parameter Setting

Standard XGBoost hyperparameters.

#### Training objective

**Parameter**

**Type**

**Default**

**Description**

**The number of rounds for boosting**

Integer

\--

Number of boosting iterations.

**objective**

String

**binary:logistic**

Learning task and corresponding learning objective.

**Base score**

Floating-point number

**0.5**

Global bias used as initial prediction score for all instances.

**The number of classes**

Integer

\--

Number of classes. Required for multi-class classification.

#### Tree construction

**Parameter**

**Type**

**Default**

**Description**

**Tree Method**

String

**auto**

Tree construction algorithm. Valid values: **auto**, **exact**, **approx**, **hist**.

**Maximum depth of a tree**

Integer

**6**

Maximum tree depth. Higher values increase model complexity and overfitting risk.

**Max leaves**

Integer

**0**

Maximum number of leaf nodes. 0 means no limit.

**Grow Policy**

String

**depthwise**

Node addition strategy. Valid values: **depthwise**, **lossguide**.

**Maximum number of discrete bins to bucket continuous features**

Integer

**256**

Maximum number of discrete bins for continuous features. Applies only when **Tree Method** is **hist**.

**sketch\_eps**

Floating-point number

**0.03**

Accuracy of binning in the sketching algorithm. Applies only when **Tree Method** is **approx**.

#### Regularization

**Parameter**

**Type**

**Default**

**Description**

**L1 regularization term on weights**

Floating-point number

**0.0**

L1 regularization on weights. Higher values produce more conservative models.

**L2 regularization term on weights**

Floating-point number

**1.0**

L2 regularization on weights. Higher values produce more conservative models.

**gamma**

Floating-point number

**0.0**

Minimum loss reduction required for further leaf node partition.

**Min child weight**

Floating-point number

**1.0**

Minimum sum of instance weights required in a child node.

**Max delta step**

Floating-point number

**0.0**

Maximum delta step per leaf node. Controls model update granularity.

#### Learning rate and sampling

**Parameter**

**Type**

**Default**

**Description**

**eta**

Floating-point number

**0.3**

Learning rate. Lower values improve robustness but require more boosting rounds.

**scale\_pos\_weight**

Floating-point number

**1.0**

Weight ratio for balancing positive and negative classes. Useful for imbalanced datasets.

**Subsample ratio of the training instances**

Floating-point number

**1**

Fraction of training instances sampled before each boosting round.

**Sampling method**

String

**GRADIENT\_BASED**

Sampling method for training instances. Valid values: **GRADIENT\_BASED**, **UNIFORM**.

**Subsample ratio of columns for each level**

Floating-point number

**1.0**

Fraction of columns sampled per tree level.

**Subsample ratio of columns for each node (split)**

Floating-point number

**1.0**

Fraction of columns sampled per node split.

**Subsample ratio of columns when constructing each tree**

Floating-point number

**1.0**

Fraction of columns sampled per tree.

#### Constraints and distribution

**Parameter**

**Type**

**Default**

**Description**

**Interaction constraints**

String

\--

Feature groups allowed to interact.

**Monotone constraints**

String

\--

Monotonicity constraints per feature.

**Tweedie variance power**

Floating-point number

**1.5**

Variance power of the Tweedie distribution. Applies only when objective uses Tweedie distribution.

### Execution Tuning

**Parameter**

**Type**

**Valid values**

**Description**

**Number of Workers**

Positive integer

\[1, 9999\]

Number of worker nodes. Configure with **Memory per worker, unit MB**.

**Memory per worker, unit MB**

Positive integer

\[1024, 64 x 1024\]

Memory allocated per worker node, in MB.

## Usage example

This example demonstrates XGBoost classification on Higgs boson event data using a preset template. To create this pipeline from the **Use XGBoost algorithm to identify the Higgs boson** template, see [Create a pipeline from a preset template](/help/en/pai/user-guide/create-a-pipeline-from-a-preset-template).

### Convert the output format for evaluation

The component outputs JSON strings serialized from the open-source XGBoost library. Convert this output to enable evaluation components to process predictions.

Add an [SQL Script](/help/en/pai/user-guide/sql-script) component downstream of **XGboost Predict**. The SQL Script converts predictions into the format required by **Binary classification Evaluation V2**. Use this code:

```
set odps.sql.udf.getjsonobj.new=true;

select *, CONCAT("{\"0\":", 1.0-prob, ",\"1\":", prob, "}") as detail
FROM (
select *, cast(get_json_object(pred, '$[0]') as double) as prob FROM ${t1})
```

## References

-   For offline inference with a trained model, use XGboost Predict component. See [XGboost Predict](/help/en/pai/user-guide/xgboost-predict).
    
-   For the complete list of algorithm components, see [Component reference: Overview of all components](/help/en/pai/user-guide/overview-of-all-components).
