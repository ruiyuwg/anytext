Data Transmission Service (DTS) allows you to add or remove the objects for change tracking during data consumption. This topic describes how to modify the objects for change tracking.

## Usage notes

-   After you add an object, the change tracking task pulls the data changes of the new object from the time when the modification takes effect.
-   If the change tracking client tracks the data changes of a removed object, you must filter the tracked data changes on the client.
-   If you want to add an object for change tracking, the account configured for the change tracking task must have the relevant permissions on the object.

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
2.  In the left-side navigation pane, click Change Tracking.
3.  In the upper part of the Change Tracking Tasks page, select the region where the change tracking instance resides.
4.  Find the change tracking instance and click Modify Required Objects in the Actions column.
5.  In the Select Required Objects step, add or remove the objects for change tracking. ![Modify the objects for change tracking](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0308539951/p48087.png)
    -   Add the objects for change tracking
        
        In the Required Objects section, select one or more objects and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the objects to the Selected section.
        
    -   Remove the objects for change tracking
        
        In the Selected section, select one or more objects and click the ![Left arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2308539951/p48160.png) icon to move the objects to the Required Objects section.
        
6.  In the lower-right corner of the page, click Save and Precheck.
    
    You are navigated to the Change Tracking Tasks page. When a success message is displayed, the objects for change tracking are modified.
    
    **Note** The system does not perform a precheck after you modify the objects for change tracking.
    

After the objects for change tracking are modified, you can use a Kafka client to consume tracked data. For more information, see [Use a Kafka client to consume tracked data](/help/en/dts/user-guide/use-a-kafka-client-to-consume-tracked-data#concept-508217).
