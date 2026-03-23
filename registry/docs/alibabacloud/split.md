Machine Learning Designer of Platform for AI (PAI) provides the Split component, which is used to randomly split data by proportion or threshold to generate training and test sets.

## Configure the component

You can use one of the following methods to configure the Split component. After you configure the Split component, two data tables are generated based on the configurations.

### Method 1: Use the PAI console

On the pipeline details page, find the **Split** component in the left-side component list, drag the component to the canvas, and then connect the component to an upstream node. Then, click the Split component to configure component parameters.

**Note**

If you configure parameters for the threshold-based splitting method and the proportion-based splitting method, the threshold-based splitting method takes precedence.

**Tab**

**Parameter**

**Description**

**Parameters Setting**

**Splitting Method**: Split by Ratio

**Splitting Fraction**

The proportion of data in Output Table 1 to the original data. Valid values: (0,1).

**Random Seed**

The random seed can fix the state of the random generator. This helps achieve the same data splitting result for a pipeline that runs multiple times based on the same random seed. If you do not configure this parameter, the system automatically generates a value.

**ID Column (Do Not Split Columns with the Same ID)**

You can configure this parameter only if you select **Advanced Options**.

You can select only one column. Data in the columns that have the same ID is not split but randomly allocated to **Output Table 1** or **Output Table 2**.

**Splitting Method**: Split by Threshold

**Threshold Column**

Data in this column is split by threshold. Data in the columns of the STRING type cannot be split by threshold.

**Threshold**

Data in the threshold column is fully split by threshold. The value in the threshold column in **Output Table 1** is less than the threshold, and the value in the threshold column in **Output Table 2** is greater than or equal to the threshold.

**Tuning**

**Cores**

The system automatically allocates cores used for training based on the amount of input data. By default, the system determines the value.

**Memory Size per Core**

The system automatically allocates the memory based on the amount of input data. Unit: MB. By default, the system determines the value.

### Method 2: Run PAI commands

On the pipeline details page, find the **SQL Script** component in the left-side component list and drag the component to the canvas. Then, click the component to configure the component parameters. In the Parameters Setting panel, clear **Whether the system adds a create table statement**, enter the following script in the SQL Script text editor, and then run PAI commands to configure the component. For more information, see [SQL Script](/help/en/pai/user-guide/sql-script#concept-2325896).

```
PAI -name split -project algo_public
    -DinputTableName=wbpc
    -Doutput1TableName=wpbc_split1
    -Doutput2TableName=wpbc_split2
    -Dfraction=0.25;
```

**Note**

You cannot configure the parameters required by the proportion-based splitting method and the threshold-based splitting method at the same time.

**Category**

**Parameter**

**Required**

**Description**

**Default value**

Common parameters

inputTableName

Yes

The name of the input table.

None

inputTablePartitions

No

The partitions selected from the input table for training. The following formats are supported:

-   Partition\_name=value
    
-   name1=value1/name2=value2: multi-level partitions
    

**Note**

If you specify multiple partitions, separate the partitions with commas (,).

All partitions

output1TableName

Yes

Output Table 1.

None

output1TablePartition

No

The names of the partitions in Output Table 1.

Non-partitioned table

output2TableName

Yes

Output Table 2.

None

output2TablePartition

No

The names of the partitions in Output Table 2.

Non-partitioned table

lifecycle

No

The lifecycle of the output table. Valid values: \[1,3650\].

None

coreNum

No

The number of cores. This parameter is a tuning parameter. The system automatically allocates cores that are used for training based on the amount of input data.

Auto-assigned by default

memSizePerCore

No

The memory size of each core. Unit: MB. This parameter is a tuning parameter. The system automatically allocates memory based on the amount of input data. Valid values: (1, 65536).

Auto-assigned by default

Split by Ratio parameters

fraction

Yes

The proportion of data in Output Table 1. Valid values: (0,1).

None

randomSeed

No

The random seed. The value must be a positive integer.

Auto-assigned by default

idColName

No

The ID column. You can select only one column. Data in the columns that have the same ID is not split but randomly allocated to Output Table 1 or Output Table 2.

None

Split by Threshold parameters

thresholdColName

Yes

The threshold column. Data in this column is split by threshold. Data in the columns of the STRING type cannot be split by threshold.

None

threshold

Yes

The threshold. Data in the threshold column is fully split by threshold. The value in the threshold column in Output Table 1 is less than the threshold, and the value in the threshold column in Output Table 2 is greater than or equal to the threshold.

None
