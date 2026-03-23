This topic provides an example on how to implement role-based single sign-on (SSO) from Okta to Alibaba Cloud. The example describes the end-to-end SSO process from a cloud identity provider (IdP) to Alibaba Cloud.

## Procedure

In this example, an attribute named approle is added to the profile of an Okta application. The approle attribute is used to specify a Resource Access Management (RAM) role. The following figure shows the procedure to implement role-based SSO in Alibaba Cloud and Okta.

![流程图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9690549951/p128782.png)

## Step 1: Create an application that supports SAML 2.0-based SSO in Okta

1.  Log on to the [Okta portal](https://www.okta.com/).
    
2.  In the upper-right corner of the Okta portal, click the account name and select **Your Org** from the drop-down list.
    
3.  In the navigation pane on the left, choose **Applications** > **Applications**.
    
4.  On the **Applications** page, click **Create App Integration**.
    
5.  In the **Create a new app integration** dialog box, select **SAML 2.0** and click **Next**.
    
6.  In the General Settings step, enter role-sso-test in the App name field and click **Next**.
    
7.  In the Configure SAML step, configure the parameters and click **Next**.
    
    -   **Single sign-on URL**: `https://signin.alibabacloud.com/saml-role/sso`.
        
    -   **Audience URI (SP Entity ID)**: or `urn:alibaba:cloudcomputing:international`.
        
    -   In the **Default RelayState** field, enter a URL. A user is redirected to the URL after logon.
        
        **Note**
        
        For security purposes, you must enter a URL that points to an Alibaba website in the **Default RelayState** field. For example, you can enter a URL that contains one of the following domain names: \*.aliyun.com, \*.hichina.com, \*.yunos.com, \*.taobao.com, \*.tmall.com, \*.alibabacloud.com, and \*.alipay.com. If you enter a URL that does not point to an Alibaba website, the configuration is invalid. If you leave this parameter empty, a user is redirected to the homepage of the Alibaba Cloud Management Console by default.
        
    -   Select **EmailAddress** from the **Name ID format** drop-down list.
        
    -   Select **Email** from the **Application username** drop-down list.
        
    -   Retain the default value for the **Update application username on** parameter.
        
    
8.  On the **Feedback** page, select a type for the application and click **Finish**.
    

## Step 2: Download the SAML IdP metadata file of Okta

1.  On the Applications page, click role-sso-test. On the page that appears, click the **Sign On** tab.
    
2.  In the **SAML 2.0** section, copy the **metadata URL** and download the metadata file to your on-premises machine.
    

## Step 3: Create a SAML IdP in Alibaba Cloud

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the navigation pane on the left, choose **Integrations** > **SSO**.
    
3.  On the **Role-based SSO** tab, click the **SAML** tab and click ****Create IdP****.
    
4.  On the **Create IdP** page, set the **IdP Name** parameter to okta-provider and configure the **Description** parameter.
    
5.  In the **Metadata File** section, click **Upload Metadata File** and upload the IdP metadata file obtained in [Step 2: Obtain the SAML IdP metadata from Okta](#section-gja-2u2-so7).
    
6.  Click **Create IdP**.
    

## Step 4: Create a RAM role in Alibaba Cloud

1.  In the navigation pane on the left of the RAM console, choose **Identities** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**.
    
3.  In the upper-right corner of the **Create Role** page, click **Switch to Policy Editor**.
    
4.  Specify a Security Assertion Markup Language (SAML) IdP in the editor.
    
    The editor supports Visual and JSON modes. This example uses the Visual editor. Specify the IdP that you created in [Step 3: Create a SAML IdP in Alibaba Cloud](#section-7fz-jfo-srq) for **Principal** and select **SAML** for **Identity Provider Type**.
    
5.  In the editor, set the Condition `saml:recipient` to `https://signin.alibabacloud.com/saml-role/sso`.
    
6.  In the **Create Role** dialog box, set the **Role Name** parameter to admin and click **OK**.
    

## Step 5: Configure the profile of the application in Okta

1.  Add an attribute to the profile of the application.
    
    1.  In the navigation pane on the left, choose **Directory** > **Profile Editor**.
        
    2.  Search for role-sso-test and click its name.
        
    3.  In the **Attributes** section of the **Profile Editor** page, click **Add Attribute**.
        
    4.  In the **Add Attribute** dialog box, configure the parameters for the attribute.
        
        -   Select **string** from the **Data type** drop-down list.
            
        -   For **Display name**, enter the name that appears in the user interface. In this example, enter `approle`.
            
        -   For **Variable name**, enter the name of the variable to reference in the mapping, such as `approle`. Take note of this parameter value because you will need it when you configure the attribute.
            
        -   In the **Description** field, enter a description for the attribute. This parameter is optional.
            
        -   Select **Define enumerated list of values** next to **Enum**.
            
            **Note**
            
            You can use **Enum** to restrict property values to a predefined set. You can also omit **Enum** for greater flexibility.
            
        -   In the **Attribute members** section, specify an enumeration value for the attribute. Each **enumeration value** must be the same as the name of a RAM role that you created in Alibaba Cloud. In this example, the values are admin and reader.
            
        -   In this example, you do not need to set **Attribute Length** because an enumeration value is configured for the attribute. If no enumeration values are specified for an attribute, configure the Attribute Length parameter.
            
        -   Select **Yes** next to **Attribute required**.
            
        -   **Scope**: Deselect **Personal**.
            
        
    5.  Click **Save**.
        
2.  Configure the attribute.
    
    1.  In the navigation pane on the left, choose **Applications** > **Applications**.
        
    2.  On the Applications page, click the application named role-sso-test.
        
    3.  In the **SAML Settings** section of the **General** tab, click **Edit**.
        
    4.  In the **Attribute Statements (optional)** section of the **Configure SAML** page, configure two statements, as shown in the following figure.![edit Attribute](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6052640361/p128727.png)
        
        -   Configuring the first data item:
            
            -   Set Name to `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName`.
                
            -   Select **user.email** from the Value drop-down list.
                
        -   Configure the second data entry:
            
            -   Set Name to `https://www.aliyun.com/SAML-Role/Attributes/Role`.
                
            -   Set Value to `String.replace("acs:ram::<account_id>:role/$approle,acs:ram::<account_id>:saml-provider/okta-provider", "$approle", appuser.approle)`. This expression replaces the `$approle` placeholder with the value of the `approle` attribute from the logged-on user's application profile. The `approle` attribute is the attribute that you defined in the profile. `okta-provider` is the IdP that you created in [Step 3: Create a SAML IdP in Alibaba Cloud](#section-7fz-jfo-srq). Replace `<account_id>` with your Alibaba Cloud account ID. For example: `String.replace("acs:ram::177242285274****:role/$approle,acs:ram::177242285274****:saml-provider/okta-provider", "$approle", appuser.approle)`.
                
        

## Step 6: Create a user and assign the application to the user in Okta

1.  Create a user.
    
    1.  In the navigation pane on the left, choose **Directory** > **People**.
        
    2.  On the page that appears, click **Add Person**.
        
    3.  In the **Add Person** dialog box, enter the email address of the user in the **Primary email** field, configure other parameters, and then click **Save**. In this example, the email address is username@example.com.
        
    4.  In the user list, find username@example.com and click **Activate** in the **Status** column. In the dialog box that appears, activate username@example.com as prompted.
        
2.  Assign the application to the user.
    
    You can use one of the following methods to assign the application.
    
    -   Assign the application to the user
        
        1.  In the navigation pane on the left, choose **Applications** > **Applications**.
            
        2.  Click the application name role-sso-test. On the **Assignments** tab, choose **Assign** > **Assign to People**.
            
        3.  In the dialog box that appears, click **Assign** next to the username@example.com user.
            
        4.  Select admin from the **approle** drop-down list.
            
        5.  In the dialog box that appears, click **Save and Go Back**.
            
        6.  Click **Done**.
            
    -   Add the user to a group and assign the application to the group
        
        1.  In the navigation pane on the left, choose **Directory** > **Groups**. On the page that appears, click **Add Group** to create a group.
            
        2.  Click the name of the group. On the page that appears, click **Manage People** to add the user to the group.
            
        3.  In the navigation pane on the left, choose **Applications** > **Applications**.
            
        4.  Click the application name role-sso-test. On the **Assignments** tab, choose **Assign** > **Assign to Groups**.
            
        5.  Click **Assign** next to the group.
            
        6.  Select admin from the **approle** drop-down list.
            
        7.  In the dialog box that appears, click **Save and Go Back**.
            
        8.  Click **Done**.
            
        
        **Note**
        
        If the user belongs to multiple groups, only one value of the approle attribute can be used. The used attribute value is the value that is specified for the group to which the user is first added. If the user is added to or removed from groups, the value of the approle attribute changes. For more information, see [Okta Documentation](https://help.okta.com/en/prod/Content/index.htm).
        
    

## Verification results

1.  In the navigation pane on the left, choose **Applications** > **Applications**.
    
2.  On the Applications page, click the application named role-sso-test.
    
3.  In the **App Embed Link** section of the **General** tab, copy the **logon URL**.
    
4.  Open a new browser window, paste the logon URL in the address bar, and then press Enter. On the logon page, use username@example.com for logon.
    
    If you are redirected to the page specified by `Default RelayState` (or the homepage of the Alibaba Cloud Management Console), the logon is successful.![successful result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1790549951/p128774.png)
    

## (Optional) Assign multiple roles to a user in Okta

To map a user to multiple Alibaba Cloud roles, you must use a Group Attribute Statement configured with the Group Name. The configuration method is as follows:

1.  Create multiple groups. Each group name must follow the same format as a value of the role attribute in the SAML assertion. For example, you can set the name of a group to acs:ram::177242285274\*\*\*\*:role/admin,acs:ram::177242285274\*\*\*\*:saml-provider/okta-provider.![add group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790549951/p128790.png)
    
2.  Add username@example.com to the groups.
    
3.  In the application's **SAML Settings**, delete the attribute statement for the Role, and then add a Group Attribute Statement. Set Name to `https://www.aliyun.com/SAML-Role/Attributes/Role` and set the Filter to a value that filters the group names, for example, \`Start with acs:ram\`.![group Attribute](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7052640361/p128789.png)
    
4.  After the configurations are complete, log on to the Alibaba Cloud Management Console as the username@example.com user. You are prompted to select a role that you want to assume.![Role sign in](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790549951/p129112.png)
    

For more information about how to use Okta, see [Okta Documentation](https://help.okta.com/en/prod/Content/index.htm).
