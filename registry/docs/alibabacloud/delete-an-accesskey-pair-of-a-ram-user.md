You can delete an AccessKey pair for a Resource Access Management (RAM) user when it is no longer needed. To help prevent accidental deletion, RAM moves deleted AccessKey pairs to a recycle bin. From the recycle bin, you can restore a AccessKey pair that was deleted by mistake or permanently purge it. AccessKey pairs that are not manually purged are automatically purged after a 30-day retention period.

## Prerequisites

Before you can delete an AccessKey pair, you must first disable it. For more information, see [Disable an AccessKey pair](/help/en/ram/user-guide/disable-an-accesskey-pair-of-a-ram-user#task-221538).

## Quotas

A RAM user's recycle bin can hold a maximum of three deleted AccessKey pairs. If you delete a fourth AccessKey pair when the recycle bin is full, the oldest one in the bin is automatically purged.

## Move an AccessKey pair to the recycle bin

After an AccessKey pair is disabled, you can delete it, which moves it to the recycle bin. An AccessKey pair cannot be used for API calls while it is disabled or in the recycle bin.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, click the username of the target RAM user.
    
4.  On the user details page, click the **Authentication** tab. In the **AccessKey** section, find the target AccessKey pair and click **Delete** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654634571/p968054.png)
    
5.  In the **Delete** dialog box, enter the AccessKey ID and click **Move to Recycle Bin**.
    

## Permanently purge an AccessKey pair

### Methods

-   **Automatic purge:** AccessKey pairs in the recycle bin are automatically purged after a 30-day retention period.
    
-   **Manual purge:** You can permanently purge an AccessKey pair from the recycle bin at any time before the retention period ends.
    

### Impact

A permanently purged AccessKey pair cannot be restored.

### Procedure

1.  On the user details page, in the **AccessKey Pair Recycle Bin** section, find the target AccessKey pair and click **Delete** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654634571/p968132.png)
    
2.  In the **Delete** dialog box, enter the AccessKey ID and click **Delete**.
    

## Restore an AccessKey pair from the recycle bin

If you delete an AccessKey pair by mistake, you can restore it from the recycle bin before it is permanently purged. A restored AccessKey pair is automatically re-enabled and can be used immediately.

**Important**

-   If the owning RAM user is also in the recycle bin, you must restore the user before restoring the AccessKey pair. For more information about how to restore a RAM user, see the "Restore a RAM user from the recycle bin" section in the [Delete a RAM user](/help/en/ram/user-guide/delete-a-ram-user#section-njs-q8t-qp5) topic.
    
-   When you restore an AccessKey pair, only the AccessKey ID becomes visible again. The corresponding AccessKey secret is not displayed and can never be retrieved after its initial creation. To use the restored AccessKey pair, you must have the original AccessKey secret that was provided when the key was first created. If you have lost the secret, the restored AccessKey pair is unusable and you must create a new one.
    

1.  On the user details page, in the **AccessKey Pair Recycle Bin** section, find the target AccessKey pair and click **Restore** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6654634571/p968154.png)
    
2.  In the **Restore AccessKey Pair** dialog box, click **Restore**.
