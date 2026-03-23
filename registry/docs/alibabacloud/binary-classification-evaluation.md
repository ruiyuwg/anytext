Binary Classification Evaluation is a technique used to assess the performance of binary classification models by calculating metrics such as Area Under the Curve (AUC), Kolmogorov-Smirnov (KS), and F1 Score. The evaluation outputs include KS curves, precision-recall (PR) curves, receiver operating characteristic (ROC) curves, LIFT Charts, and Gain Charts. These outputs provide a comprehensive view of the model's classification performance.

## Configure the component

### Method 1: Use the GUI

On the Designer workflow page, add the **Binary Classification Evaluation** component and configure its parameters in the pane on the right:

**Parameter**

**Description**

Label column name

The name of the target column.

Score column name

The prediction score column. This is usually the prediction\_score column.

Positive sample label value

Classifying positive samples.

Number of bins for equal frequency binning

Specifies the number of buckets for equal-frequency partitioning.

Group column name

The group ID column. Evaluation metrics are calculated separately for the data in each group. This applies to evaluation-by-group scenarios.

Advanced options

If you select the **Advanced options** check box, the **Prediction detail column**, **Are prediction and evaluation targets consistent**, and **Save performance metrics** parameters become available.

Prediction detail column

The name of the column that contains prediction details.

Are prediction and evaluation targets consistent

For example, in a finance scenario, a training program predicts the probability that a customer is "bad". A higher value means the customer is more likely to be bad. A related metric, such as LIFT, evaluates the rate at which bad customers are detected. In this case, the prediction target is consistent with the evaluation target. In a credit score scenario, a training program predicts the probability that a customer is "good". A higher value means the customer is more likely to be good. However, the related metric still evaluates the rate at which bad customers are detected. In this case, the prediction target is inconsistent with the evaluation target.

Save performance metrics

Specifies whether to save the performance metrics.

### Method 2: Use PAI commands

You can use PAI commands to configure the parameters for the **Binary Classification Evaluation** component. You can call PAI commands using the SQL Script component. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#p-a45-911-tq1).

```
PAI -name=evaluate -project=algo_public
    -DoutputMetricTableName=output_metric_table
    -DoutputDetailTableName=output_detail_table
    -DinputTableName=input_data_table
    -DlabelColName=label
    -DscoreColName=score
```

**Parameter**

**Required**

**Default Value**

**Description**

inputTableName

Yes

N/A

The name of the input table.

inputTablePartitions

No

Full table

The partitions in the input table.

labelColName

Yes

N/A

The name of the target column.

scoreColName

Yes

N/A

The name of the score column.

groupColName

No

N/A

The name of the group column. Use this parameter for evaluation-by-group scenarios.

binCount

No

1000

The number of equal-frequency bins for calculating metrics such as KS and PR.

outputMetricTableName

Yes

N/A

The output table for metrics, which includes AUC, KS, and F1 Score.

outputDetailTableName

No

N/A

The detailed data table used to plot graphs.

positiveLabel

No

1

The label for positive samples.

lifecycle

No

N/A

The lifecycle of the output table.

coreNum

No

Automatically calculated by the system

The number of cores.

memSizePerCore

No

Automatically calculated by the system

The memory size per core.
