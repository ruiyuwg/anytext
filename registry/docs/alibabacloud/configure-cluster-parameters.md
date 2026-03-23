You can view, modify, and track changes to cluster parameters for PolarDB for Oracle in the PolarDB console.

> The cluster parameters displayed in the PolarDB console prevail.

## Prerequisites

Before you begin, make sure that you have:

-   A PolarDB cluster. To find your cluster, go to the **Clusters** page in the [**PolarDB console**](https://polardb.console.alibabacloud.com/).
    
-   Reviewed the **Force Restart** column for each parameter you plan to modify. If a parameter has **Yes** in this column, modifying it causes the cluster to restart. Schedule your business before you modify the parameter.
    

## Go to the Parameters page

The following steps apply to both modifying and viewing parameter history.

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster and click its ID to go to its **Basic Information** page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Parameters**.
    

## Modify cluster parameters

1.  On the **Parameters** page, click **Modify Parameters** in the upper-left corner.
    
2.  Find the parameter that you want to modify and enter a new value. > **Note:** > > - Enter a parameter value that is specified in the **Range to Be Modified** column on the right of the parameter. This column shows the valid values or acceptable range for each parameter. If you enter a value outside the allowed range, you receive an error message after you click **Submit Changes**. > - You can move the pointer over the icon next to the parameter name to view the description of the parameter.
    
3.  Click **Submit Changes** in the upper-left corner. Then, in the **Save Changes** message, click **OK**. > **Warning:** If the **Force Restart** column of a parameter displays **Yes**, the cluster is restarted after you click **OK**. Schedule your business before you modify the parameter. Proceed with caution.
    

## View parameter modification history

1.  On the **Parameters** page, click **Parameter Modification History** in the upper-left corner.
    
2.  Select a time range and click **OK**.
    

## Related API operations

**Operation**

**Description**

[DescribeDBClusterParameters](/help/en/polardb/api-polardb-2017-08-01-describedbclusterparameters)

Queries cluster parameters.

[ModifyDBClusterParameters](/help/en/polardb/api-polardb-2017-08-01-modifydbclusterparameters)

Modifies cluster parameters.
