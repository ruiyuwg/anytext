The Write Table component writes data to a MaxCompute table. This topic describes the parameters that are used to configure this component.

## Prerequisites

If you want to write data to a partitioned table, you must create the destination partitioned table before you use this component to write data. For more information about how to create a partitioned table, see [Create a partitioned table](/help/en/data-lake-analytics/latest/create-a-partitioned-table#topic-1916573).

## **Limits**

You can use Write Table based only on the computing resources of MaxCompute.

## Configure the component in Machine Learning Designer

Machine Learning Designer allows you to configure the Write Table component only in the Platform for AI (PAI) console. The following table describes the required parameters.

**Parameter**

**Description**

**New Table Name**

The name of the MaxCompute table to which you want to write data.

**Partition**

Specifies whether the table to which you want to write data is a partitioned table.

**Lifecycle**

The lifecycle of the specified table. The value of this parameter must be an integer. If you do not specify a value for this parameter, the specified table does not have a lifecycle.
