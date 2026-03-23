This topic describes how to configure single sign-on (SSO) logon from Okta to CloudSSO.

## Background information

Assume that an enterprise uses Okta as a local identity provider (IdP) that contains a large number of users and the enterprise has built a multi-account structure in a resource directory. The enterprise wants to configure settings to implement SSO logon. This way, the users in Okta can directly access specific resources within the specified members in the resource directory.

## Step 1: Obtain the SP metadata file in the CloudSSO console

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  In the **SSO Logon** section, copy the values of **ACS URL** and **Entity ID** for the service provider (SP).
    

## Step 2: Create an application in Okta

1.  Log on to the [Okta portal](https://www.okta.com/).
    
2.  In the upper-right corner of the Okta portal, click the account name and select **Your Org** from the drop-down list.
    
3.  In the left-side navigation pane, choose **Applications** > **Applications**.
    
4.  On the **Applications** page, click **Browse App Catalog**.
    
5.  Search for the application named **Alibaba Cloud CloudSSO**.
    
6.  Click the application tile in the search result and click **Add integration** to add an application.
    
7.  Configure the application.
    
    1.  In the **General Settings** step, set App name to **CloudSSODemo** and click **Done**.
        
    2.  In the **settings** section of the **Sign on** page, click **Edit**.
        
        -   **Default RelayState**: Set this parameter to the URL of the page that is displayed after a user logs on to the Alibaba Cloud Management Console by using the SSO logon method. If you do not configure this parameter, the user is redirected to the CloudSSO user portal by default.
            
            **Note**
            
            To ensure security, you are allowed to enter only a URL that contains \*.alibabacloudsso.com. If you enter a URL that does not contain this domain name, the configuration is invalid.
            
        -   **ACS URL**: Set this parameter to the value of the **ACS URL** parameter that you obtained in [Step 1: Obtain the SP metadata file in the CloudSSO console](#section-1mf-pid-z9k).
            
        -   **Entity ID**: Set this parameter to the value of the **Entity ID** parameter that you obtained in [Step 1: Obtain the SP metadata file in the CloudSSO console](#section-1mf-pid-z9k).
            
        -   **Application username**: Select **Okta username**.
            
        
    3.  Click **Save**.
        

## Step 3: Obtain the IdP metadata file in Okta

1.  On the CloudSSODemo details page, click the **Sign On** tab.
    
2.  In the **SAML Signing Certificates** section, right-click **Actions** and select **View IdP metadata** from the drop-down list to save the IdP metadata to your computer.
    

## Step 4: Assign users to the application in Okta

**Note**

If no users are created in Okta, you must first create users. For more information, see [Create an Okta user](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-add-users.htm).

1.  On the CloudSSODemo details page, click the **Assignments** tab.
    
2.  Click **Assign** and select an assignment method.
    
    -   **Assign to People**: Assign a user. In this example, select this method.
        
    -   **Assign to Groups**: Assign a group.
        
3.  In the **Assign CloudSSODemo to People** dialog box, click **Assign** on the right of the required user.
    
4.  Check or modify the value of **User Name**. Then, click **Save and Go Back**.
    
5.  Repeat Step [3](#step-vtv-pyg-bjs) and Step [4](#step-gpi-kvx-jjq) to assign other users to the application in sequence.
    
6.  Click **Done**.
    

## Step 5: Enable SSO logon in the CloudSSO console

1.  In the left-side navigation pane of the CloudSSO console, click **Settings**.
    
2.  In the **SSO Logon** section of the Settings page, click **Configure IdP**.
    
3.  In the **Configure IdP** dialog box, select **Upload Metadata File**.
    
4.  Click **Upload Metadata File** to upload the IdP metadata file that is obtained in [Step 3: Obtain the IdP metadata file in Okta](#section-x29-n9t-h25).
    
5.  Turn on the switch for SSO logon to enable SSO logon.
    
    **Note**
    
    After SSO is enabled, username-password logon is automatically disabled. SSO takes effect on all users. After you enable SSO, all users must use the SSO logon method.
    

## Step 6: Synchronize or create users

You can synchronize users from Okta to CloudSSO or create the users that have the same usernames as the users in Okta in the CloudSSO console. Prepare one of the following accounts:

-   Synchronize users from Okta to CloudSSO: This method is suitable for scenarios in which a large number of users exist in Okta. We recommend that you use this method. For more information, see [Synchronize users or groups in Okta by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-okta-by-using-scim#task-2090820).
    
-   Create users that have the same usernames as the users in Okta in the CloudSSO console: This method is suitable for scenarios in which a small number of users exist in Okta. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk).
    
    **Note**
    
    Usernames are used for user logons. When you configure SSO logon, the username of a CloudSSO user must be the same as the value of the field that is used for SSO logon in Okta. For more information, see [Step 2: Create an application in Okta](#section-z1g-847-tp6).
    

## Step 7: (Optional) Assign access permissions to users

If you want a CloudSSO user to access specific resources within the specified members in a resource directory after the user logs on to the user portal by using the SSO logon method, you must create access configurations that define access permissions. Then, you must assign the access permissions on the members to the user.

1.  Create access configurations and specify policies in the CloudSSO console.
    
    For more information, see [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273).
    
2.  Assign access permissions on the accounts in your resource directory to users.
    
    For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).
    

## Verify the configuration results

After you complete the preceding configurations, you can initiate SSO logon from Alibaba Cloud or Okta.

-   Initiate SSO logon from Alibaba Cloud
    
    1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com). Go to the **Overview** page and copy the URL used to log on to the user portal.
        
    2.  Open a browser, paste the copied URL, and then press Enter.
        
    3.  Click **Redirect**. You are redirected to the logon page of Okta.![云SSO登录跳转](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2428037361/p290656.png)
        
    4.  On the page that appears, enter the username and password of the required Okta user.
        
        After the logon succeeds, you are redirected to the page that is specified by **Default RelayState**. In this example, **Default RelayState** is not configured, and you are redirected to the CloudSSO user portal.
        
-   Initiate SSO logon from Okta
    
    1.  Log on to the [Okta portal](https://www.okta.com/) as an Okta user.
        
    2.  Click the **CloudSSODemo** application.
        
        After the logon succeeds, you are redirected to the page that is specified by **Default RelayState**. In this example, **Default RelayState** is not configured, and you are redirected to the CloudSSO user portal.
        

## **References**

-   [Synchronize users or groups in Okta by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-okta-by-using-scim)
    
-   [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources)
