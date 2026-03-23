You can customize the logon suffix for Resource Access Management (RAM) users. The logon name follows the format `<username>@<logon suffix>`. A custom suffix creates a user-friendly logon experience and reinforces your brand identity. This topic describes two methods: using **a default second-level domain (SLD) of Alibaba Cloud in the logon** **suffix** (such as `@my-company.onaliyun.com`), or using your **custom domain name for the logon suffix** (such as `@my-company.com`).

## **Logon suffix options**

The following table compares the two logon suffix options.

**Suffix example**

**Use case**

**Key advantages**

**Prerequisites**

**Use a default domain name for the logon suffix** (Recommended)

`@my-company.onaliyun.com`

For organizations that do not require a custom domain name and prefer a quick setup.

-   Easy to configure because it does not require domain name ownership verification.
    
-   Creates a memorable, company-specific logon suffix based on your account alias.
    

An account alias is required.

**Use a custom domain name for the logon suffix**

`@my-company.com`

For organizations that want to use their corporate domain name for brand consistency and user convenience.

Aligns logon suffixes with corporate email addresses, reinforcing your brand.

You must own the domain name and be able to add a TXT record to its DNS settings.

## Method 1: Use a default domain name for the logon suffix

RAM automatically configures a logon suffix for your RAM users in the format `<account-alias>.onaliyun.com`.

-   **Before you set an account alias**, the default logon suffix is derived from your **16-digit account ID** (`<account ID>.onaliyun.com`), which can be difficult to remember. For more information, see [View an Alibaba Cloud account ID](/help/en/account/check-account-id).
    
-   **After you set an account alias**, the suffix changes to `<your-alias>.onaliyun.com`, which provides a more memorable logon experience.
    

**Note**

-   The account alias must be globally unique within Alibaba Cloud.
    
-   After you set a new account alias, **the original suffix** (`<account ID>.onaliyun.com`) **that is based on your account ID remains valid**. This ensures that existing RAM users can continue to log on without interruption.
    

### Procedure

## Console

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  On the **Settings** page, in the **Domain** section, find the default logon suffix.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712527271/p837381.png)
    
3.  In the **Actions** column, click **Edit** and enter your preferred account alias.
    
    **Note**
    
    The logon suffix can be up to 64 characters in length and can include letters, digits, periods (`.`), hyphens (`-`), and underscores (`_`).
    

## API

1.  To get the current default logon suffix, call the [GetDefaultDomain](/help/en/ram/developer-reference/api-ims-2019-08-15-getdefaultdomain) operation.
    
2.  To set a new default logon suffix, call the [SetDefaultDomain](/help/en/ram/developer-reference/api-ims-2019-08-15-setdefaultdomain) operation.
    

### **What to do next**

1.  Your RAM users can now log on to the [RAM console](https://signin.alibabacloud.com/login.htm) using the new logon name format: `<username>@<account-alias>.onaliyun.com`. For more information, see [Log on as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-188189).
    
2.  If you use Security Assertion Markup Language (SAML) single sign-on (SSO), update the suffix of the `NameID` element in your SAML assertions to use the new logon suffix. For more information, see [Configure SAML 2.0 federation](/help/en/ram/configure-alibaba-cloud-saml-settings-for-role-based-sso#task-fzb-hjc-mfb).
    

## Method 2: Use a custom domain name for the logon suffix

If your organization owns a domain name, you can configure it as the logon suffix for your RAM users. This allows RAM users to log on with usernames that match their corporate email addresses, such as `<username>@example.com`. You can only configure one **custom logon suffix** for each Alibaba Cloud account.

### Prerequisites

You must own the domain name that you want to use as the **logon suffix**.

### Procedure

#### Step 1: Add a custom **logon suffix**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  On the **Settings** page, in the **Domain** section, click **Create alias** **domain**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6062527271/p837396.png)
    
3.  In the ****Create alias** **domain**** dialog box, enter the domain name, and click **OK**.
    
    **Note**
    
    The logon suffix can be up to 64 characters in length and can include letters, digits, periods (`.`), hyphens (`-`), and underscores (`_`).
    

#### Step 2: Verify domain name ownership

To verify that you own the domain name, you must add a TXT record to its DNS settings.

1.  In the logon suffix list, find the logon suffix you created, click **Verify domain**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2027677671/p1042356.png)
    
2.  In the **Verify domain** dialog box, copy the TXT record value.
    
3.  Log on to your DNS provider's console and add a TXT record for your domain name.
    
    1.  If you use Alibaba Cloud DNS, enter the TXT record value that you copied in the previous step into the **Value** field. For more information, see [TXT record](/help/en/dns/add-a-dns-record#h2-txt-5).
        
    2.  If you use a different DNS provider, refer to their documentation for instructions.
        
4.  Wait a few minutes for the DNS record to propagate.
    
5.  Return to the RAM console to check the verification result.
    
    1.  On the **Settings** page, in the **Domain** section, find the logon suffix and click Verify domain in the **Actions** column.
        
    2.  In the **Verify domain** dialog box, if the DNS record has propagated, a success message appears. Click **OK**.
        

### **What to do next**

1.  Your RAM users can now log on to the [RAM console](https://signin.alibabacloud.com/login.htm) using the logon name format `<username>@<custom-logon-suffix>`. For more information, see [Log on as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-188189).
    
2.  If you use SAML SSO, update the suffix of the `NameID` element in your SAML assertions to use the new custom logon suffix. For more information, see [Configure SAML 2.0 federation](/help/en/ram/configure-alibaba-cloud-saml-settings-for-role-based-sso#task-fzb-hjc-mfb).
