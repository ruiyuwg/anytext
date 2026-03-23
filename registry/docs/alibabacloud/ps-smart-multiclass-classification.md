PS-SMART trains multiclass classification models using a GBDT-based algorithm that scales to billions of samples and thousands of nodes.

## Limitations

-   Target column accepts only numeric types. Convert STRING data in MaxCompute tables before training. Example: Convert Good/Medium/Bad to 0/1/2.
    
-   For KV format data, feature IDs must be positive integers and feature values must be real numbers. Convert string feature IDs using the serialize component. Apply feature engineering (such as discretization) to categorical string values.
    
-   Component handles hundreds of thousands of features but consumes significant resources and runs slowly. GBDT algorithms perform best with continuous features. Apply one-hot encoding to categorical features to filter low-frequency ones. Avoid discretizing continuous features.
    
-   PS-SMART introduces randomness through data sampling (data\_sample\_ratio), feature sampling (fea\_sample\_ratio), histogram approximation, and sketch merging order. Tree structures may differ across distributed workers, but model performance remains similar. Identical data and parameters may produce inconsistent results across runs.
    
-   Increasing **computing cores** accelerates training. Training starts only after all servers acquire necessary resources. Requesting more resources during cluster congestion increases wait time.
    

## Configure the component

### Method 1: Use GUI

Add **PS-SMART multiclass classification** to Designer workflow and configure parameters:

**Parameter type**

**Parameter**

**Description**

Fields setting

Is sparse format

Sparse format uses spaces to separate KV pairs and colons to separate key and value. Example: 1:0.3 3:0.9.

Feature columns

Feature columns from input table. For dense format, select only numeric columns (BIGINT or DOUBLE). For sparse KV format where both key and value are numeric, select only STRING columns.

Label column

Label column from input table. Accepts STRING and numeric types. Internal storage requires numeric types, such as 0 and 1 for binary classification.

Weight column

Weight column for each sample row. Accepts only numeric types.

Parameters setting

Number of classes

Number of classes for multiclass classification. If set to n, label column values must range from 0 to n-1.

Evaluation metric type

Evaluation metric types: multiclass negative log likelihood and multiclass classification error.

Number of trees

Number of trees (positive integer). Training time increases proportionally.

Maximum tree depth

Maximum tree depth. Default: 5 (allows up to 32 leaf nodes).

Data sampling ratio

Proportion of data sampled when building each tree. Creates weak learners and accelerates training.

Feature sampling ratio

Proportion of features sampled when building each tree. Creates weak learners and accelerates training.

L1 penalty coefficient

L1 penalty coefficient. Controls leaf node size distribution. Larger values produce more uniform distribution. Increase to prevent overfitting.

L2 penalty coefficient

L2 penalty coefficient. Controls leaf node size distribution. Larger values produce more uniform distribution. Increase to prevent overfitting.

Learning rate

Learning rate. Range: (0,1).

Approximate sketch precision

Quantile threshold for sketch construction. Smaller values create more buckets. Default: 0.03. Manual configuration not required.

Minimum split loss change

Minimum loss reduction required to split a node. Larger values produce more conservative splits.

Number of features

Number of features or maximum feature ID. Used for resource estimation.

Global bias

Initial prediction value for all samples. Also known as base score.

Random number generator seed

Random seed (integer).

Feature importance type

Feature importance calculation types:

-   Split count: Number of times feature is used for splitting.
    
-   Information gain: Information gained from feature.
    
-   Sample coverage: Number of samples covered by feature at split nodes.
    

Execution tuning

Number of cores

Number of computing cores. System allocates automatically by default.

Memory size per core

Memory per core (MB). System allocates automatically. Manual configuration rarely needed.

### Method 2: Use PAI commands

Call PAI commands from a SQL script component. For details, see [Scenario 4: Execute PAI commands in a SQL script component](/help/en/pai/user-guide/sql-script#p-a45-911-tq1).

```
--Train
PAI -name ps_smart
    -project algo_public
    -DinputTableName="smart_multiclass_input"
    -DmodelName="xlab_m_pai_ps_smart_bi_545859_v0"
    -DoutputTableName="pai_temp_24515_545859_2"
    -DoutputImportanceTableName="pai_temp_24515_545859_3"
    -DlabelColName="label"
    -DfeatureColNames="features"
    -DenableSparse="true"
    -Dobjective="multi:softprob"
    -Dmetric="mlogloss"
    -DfeatureImportanceType="gain"
    -DtreeCount="5"
    -DmaxDepth="5"
    -Dshrinkage="0.3"
    -Dl2="1.0"
    -Dl1="0"
    -Dlifecycle="3"
    -DsketchEps="0.03"
    -DsampleRatio="1.0"
    -DfeatureRatio="1.0"
    -DbaseScore="0.5"
    -DminSplitLoss="0"
--Predict
PAI -name prediction
    -project algo_public
    -DinputTableName="smart_multiclass_input";
    -DmodelName="xlab_m_pai_ps_smart_bi_545859_v0"
    -DoutputTableName="pai_temp_24515_545860_1"
    -DfeatureColNames="features"
    -DappendColNames="label,features"
    -DenableSparse="true"
    -DkvDelimiter=":"
    -Dlifecycle="28"
```

**Module**

**Parameter**

**Required**

**Default**

**Description**

Data parameters

featureColNames

Yes

None

Feature columns from input table. For dense format, select only numeric columns (BIGINT or DOUBLE). For sparse KV format where key and value are numeric, select only STRING columns.

labelColName

Yes

None

Label column from input table. Accepts STRING and numeric types. Internal storage requires numeric types. For multiclass classification, values must range from 0 to n-1, where n is the number of classes.

weightCol

No

None

Weight column for each sample row. Accepts only numeric types.

enableSparse

No

false

Whether data is in sparse format. Values: true or false. Sparse format uses spaces to separate KV pairs and colons to separate key and value. Example: 1:0.3 3:0.9.

inputTableName

Yes

None

Name of input table.

modelName

Yes

None

Name of output model.

outputImportanceTableName

No

None

Name of output table for feature importance.

inputTablePartitions

No

None

Format: ds=1/pt=1.

outputTableName

No

None

Output table in MaxCompute. Binary format, not directly readable. Accessible only through SMART prediction component.

lifecycle

No

3

Lifecycle of output table (in days).

Algorithm parameters

classNum

Yes

None

Number of classes for multiclass classification. If set to n, label column values must range from 0 to n-1.

objective

Yes

None

Objective function type. For multiclass classification training, use multi:softprob.

metric

No

None

Evaluation metric type for training dataset. Output written to stdout in Logview Coordinator area. Types:

-   mlogloss: Multiclass negative log likelihood (corresponds to GUI option).
    
-   merror: Multiclass classification error (corresponds to GUI option).
    

treeCount

No

1

Number of trees (positive integer). Training time increases proportionally.

maxDepth

No

5

Maximum tree depth. Range: 1 to 20.

sampleRatio

No

1.0

Data sampling ratio. Range: (0,1\]. Value 1.0 disables sampling.

featureRatio

No

1.0

Feature sampling ratio. Range: (0,1\]. Value 1.0 disables sampling.

l1

No

0

L1 penalty coefficient. Larger values produce more uniform leaf node distribution. Increase to prevent overfitting.

l2

No

1.0

L2 penalty coefficient. Larger values produce more uniform leaf node distribution. Increase to prevent overfitting.

shrinkage

No

0.3

Learning rate. Range: (0,1).

sketchEps

No

0.03

Quantile threshold for sketch construction. Bucket count: O(1.0/sketchEps). Smaller values create more buckets. Use default value. Manual configuration not required. Range: (0,1).

minSplitLoss

No

0

Minimum loss reduction required to split a node. Larger values produce more conservative splits.

featureNum

No

None

Number of features or maximum feature ID. Used for resource estimation.

baseScore

No

0.5

Initial prediction value for all samples. Also known as global bias.

randSeed

No

None

Random seed (integer).

featureImportanceType

No

gain

Feature importance calculation types:

-   weight: Split count - number of times feature is used for splitting.
    
-   gain: Information gain from feature.
    
-   cover: Sample coverage - number of samples covered by feature at split nodes.
    

Tuning parameters

coreNum

No

System allocated

Number of computing cores. Larger values accelerate execution.

memSizePerCore

No

System allocated

Memory per core in MB.

## Model deployment

To deploy model generated by PS-SMART component as online service, add **General-purpose Model Export** component downstream of PS-SMART component. Configure component parameters same way as other PS-series components. For more information, see [General-purpose Model Export](/help/en/pai/user-guide/model-export-1#concept-2241960).

Upon successful execution, deploy model service on **PAI-EAS Model Online Service** page. For more information, see [Deploy a service in the console](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/#multiTask1281).
