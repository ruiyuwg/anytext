As a security best practice, you should rotate AccessKey pairs regularly. Each Resource Access Management (RAM) user can have up to two active AccessKey pairs at a time, which allows you to rotate them with no downtime. This topic describes the procedure for rotating a AccessKey pair to limit the potential impact of a compromised one.

## Procedure

1.  [Create a new AccessKey pair for the RAM user](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp).
    
2.  Update all of your applications to use the new AccessKey pair.
    
    **Note**
    
    Before disabling the old AccessKey pair, verify that it is no longer being used. In the [RAM console](https://ram.console.alibabacloud.com/), navigate to the user's details page and check the **Last Used Service / Time** information for the original AccessKey pair. If it shows recent activity, investigate which application is still using it before you proceed. For more information, see [View the information about AccessKey pairs of a RAM user](/help/en/ram/user-guide/view-the-accesskey-pairs-of-a-ram-user).
    
3.  [Disable the original AccessKey pair](/help/en/ram/user-guide/disable-an-accesskey-pair-of-a-ram-user#task-221538).
    
4.  Verify that all applications continue to function as expected.
    
    -   If your applications are working correctly, you can proceed to the next step.
        
    -   If an application fails, it means it was not updated with the new AccessKey pair. Re-enable the old one to restore functionality. Then, identify the application that is still using the old AccessKey pair, update it, and repeat this verification step.
        
    
5.  [Delete the original AccessKey pair](/help/en/ram/user-guide/delete-an-accesskey-pair-of-a-ram-user#task-221540).
    

## What to do next

To maintain a strong security posture, we recommend that you rotate your AccessKey pairs on a regular basis (such as every 90 days).
