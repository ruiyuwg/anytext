Gradient Boosting Decision Trees (GBDT) Binary Classification is a classic supervised learning model based on gradient boosting. It is suitable for binary classification scenarios.

## Supported computing resources

You can use GBDT Binary Classification V2 based only on the computing resources of MaxCompute.

## **Algorithm**

GBDT Binary Classification is a classic supervised learning model based on gradient boosting. It can be used in binary classification scenarios.

### **Principle**

The gradient boosting decision tree model consists of multiple decision trees. Each decision tree corresponds to a weak learner. Combining these weak learners together can achieve better classification and regression results.

The following figure shows the basic recursive structure of gradient boosting.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634098.png)

In most cases, ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634116.png) is a CART decision tree, ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634119.png) are the parameters of the decision tree, and ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7730926861/p634121.png)is the step size. Each decision tree optimizes the objective function on the basis of the previous decision tree. After the preceding process, a model that contains multiple decision trees is obtained.

### **Scenario**

The algorithm includes optimizations such as second-order optimization provided by XGBoost and histogram approximation provided by LightGBM. This algorithm delivers high performance and interpretability, and can be used for common binary classification.

GBDT Binary Classification V2 supports input in the sparse vector format and the multiple feature column format. If you use the sparse vector format, you can select only one column of the string type. Each data entry is a key-value pair separated by a space. The values are separated by a colon. Example: `1:0.3 3:0.9`. If you use the multiple feature column format, you can select multiple columns of the double, bigint, and string type, including numerical features and categorical features. The algorithm bins the data of numerical features and uses a _many-vs-many_ splitting strategy to process categorical features. You do not need to perform one-hot encoding for categorical features.

The algorithm requires that the category of binary classification must be 0 and 1.

This component is used in pairs with the [GBDT Binary Classification Prediction V2](/help/en/pai/user-guide/gbdt-binary-classification-prediction-v2) component. After you run these components, you can deploy the trained model as an online service. For more information, see [Deploy a pipeline as an online service](/help/en/pai/user-guide/deploy-a-pipeline-as-an-online-service).

## **Configure the component in the Machine Learning Designer**

### **Input ports**

**Port (from left to right)**

**Data type**

**Recommended upstream component**

**Required**

Input Data

No parameters are returned.

[Read Table](/help/en/pai/user-guide/read-table)

Yes

### **Component parameters**

**Tab**

**Parameter**

**Required**

**Description**

**Default value**

**Fields Setting**

**Use Sparse Vector Format**

No

Specifies whether the feature columns used for training in the input table are in the sparse vector format. In the sparse vector format, each data entry is a key-value pair separated by a space. The values are separated by a colon. Example: `1:0.3 3:0.9`.

No

**Select Feature Columns**

Yes

The names of the feature columns that are selected from the input table for training. If the sparse vector format is not selected, you can select columns of the double, bigint, or string type. If the sparse vector format is selected, you can select only one column of the string type.

No parameters are returned.

**Select Categorical Feature Columns**

No

Select columns to be processed as categorical features. Columns not selected are processed as numerical features. This parameter is valid when the sparse vector format is not selected.

No parameters are returned.

**Select Label Column**

Yes

The names of the label columns that are selected from the input table for training.

No parameters are returned.

**Select Weight Column**

No

The name of the weight columns that are selected from the input table for training.

No parameters are returned.

**Parameter Setting**

**Number of Trees**

No

The number of trees in the model.

1

**Maximum Number of Leaf Nodes**

No

The maximum number of leaf nodes on each tree.

32

**Learning Rate**

No

The learning rate.

0.05

**Ratio of Samples**

No

The proportion of samples that are selected for training. Valid values: (0,1\].

0.6

**Ratio of Features**

No

The proportion of features that are selected for training. Valid values: (0,1\].

0.6

**Minimum Number of Samples in a Leaf Node**

No

The minimum number of samples on each leaf node.

500

**Maximum Number of Bins**

No

Maximum number of bins allowed when discretizing continuous features. A larger value indicates more precise splits. More precise splits generate higher costs.

32

**Maximum Number of Distinct Categories**

No

Maximum number of distinct categories allowed for categorical features. For each categorical feature, the categories are sorted based on frequencies. The categories with ranks larger than this value are combined to one bucket. A larger value indicates more precise splits. More precise splits incurs higher possibilities of over-fitting and higher costs.

1024

**Number of features**

No

This parameter is valid when the sparse vector format is selected. Specify the parameter as the value of the maximum feature ID + 1. The system automatically scans data to calculate if this parameter is left empty.

The number is automatically calculated based on the input data.

**Initial Prediction**

No

The probability of positive samples. The system automatically scans the data to estimate if this parameter is left empty.

The number is automatically calculated based on the input data.

**Random Seed**

No

The random seed, which is used for sampling.

0

**Tuning**

**Choose Running Mode**

No

Choose Running Mode. Valid values:

-   MaxCompute
    
-   Flink
    

MaxCompute

**Number of Instances**

No

The number of instances that are used to run the job.

The number is automatically calculated based on the input data.

**Memory Per Instance**

No

The memory size of each instance. Unit: MB.

The number is automatically calculated based on the input data.

**Num of Threads**

No

If multi-threading is used, higher costs are incurred. In most cases, performance does not linearly increase with the number of threads. If more threads than the optimum thread number are used, performance decreases.

1

### **Output ports**

**Output port**

**Storage location**

**Recommended downstream component**

**Data type**

Output Model

N/A

[GBDT Binary Classification Prediction V2](/help/en/pai/user-guide/gbdt-binary-classification-prediction-v2)

MaxCompute table

Output Feature Importance

N/A

No parameters are returned. Downstream components cannot be connected to PAI command-based components, such as GBDT Feature Importance V2.

MaxCompute table

### **Comparison with PS-SMART Binary Classification Training**

If you encounter issues that are hard to handle when you use the PS-SMART Binary Classification Training component, you can use the GBDT Binary Classification V2 component. For more information, see [PS-SMART Binary Classification Training](/help/en/pai/user-guide/ps-smart-binary-classification-training). The following table describes the features and parameters of the two components.

**Parameters of PS-SMART Binary Classification Training**

**GBDT Binary Classification V2**

**Use Sparse Format**

**Use Sparse Vector Format**

**Feature Columns**

**Feature Columns**

**Label Column**

**Label Column**

**Weight Column**

**Select Weight Column**

**Evaluation Indicator Type**

Not supported. Area under curve (AUC) is used by default. You can view the metrics in the worker log.

**Trees**

**Number of Trees**

**Maximum Tree Depth**

**Maximum Number of Leaf Nodes:** `Maximum Number of Leaf Nodes = 2 ^ (Maximum Tree Depth - 1)`.

**Data Sampling Fraction**

**Ratio of Samples**

**Feature Sampling Fraction**

**Ratio of Features**

**L1 Penalty Coefficient**

Not supported

**L2 Penalty Coefficient**

Not supported

**Learning Rate**

**Learning Rate**

**Sketch-based Approximate Precision**

**Maximum Number of Bins:** `Maximum Number of Bins = 1/Sketch-based Approximate Precision`.

**Minimum Split Loss Change**

**Minimum Number of Samples in a Leaf Node:** cannot be converted to Minimum Split Loss Change directly, but both parameters can be used to prevent overfitting.

**Features**

**Features**

**Global Offset**

**Global Offset**

**Random Seed**

**Random Seed**

**Feature Importance Type**

N/A. Default value: gain.

**Cores**

**Number of Instances:** not the same value as Cores. We recommend that you adjust the number based on the value automatically generated by the system.

**Memory Size per Core**

**Memory per Instance:** not the same value as Memory Size per Core. We recommend that you adjust the number based on the value automatically generated by the system.
