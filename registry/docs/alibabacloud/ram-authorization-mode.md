RAM role authorization lets enterprise users access Hologres by assuming a Resource Access Management (RAM) role instead of using long-lived AccessKey credentials. The RAM role—not the underlying user account—becomes the Hologres member, and permissions are scoped to that role.

This guide covers the three steps to configure RAM role authorization and connect to Hologres.

## Who this guide is for

**Audience**

**Path**

Cloud account administrators granting internal RAM users access through role assumption

Path A

Enterprise IT administrators configuring SAML 2.0 federation with external identity providers (IdPs) such as Active Directory or Okta

Path B

Application developers connecting to Hologres via JDBC or psql with Security Token Service (STS) temporary credentials

Step 3

## When to use RAM role authorization

**Method**

**Best for**

**Credential type**

Alibaba Cloud account or RAM user (password)

Individual users accessing the console

Long-lived account credentials

**RAM role (this guide)**

Enterprise single sign-on (SSO) / federated identity / applications that must not store static keys

Short-lived STS temporary credentials

ECS instance RAM role

Applications running on ECS that need automatic credential rotation

Automatic, no code required

## How it works

RAM role authorization is built on Alibaba Cloud Security Token Service (STS). When a user or application assumes a RAM role, STS issues three short-lived credential components: `AccessKeyId` (AccessKey ID), `AccessKeySecret` (AccessKey secret), and `SecurityToken`—that are valid for a configurable duration. Hologres accepts these credentials in place of permanent account credentials.

Benefits of STS temporary credentials:

-   **Reduced exposure risk**: Credentials are short-lived and never need to be stored permanently.
    
-   **Automatic revocation**: Credentials expire automatically when the validity period ends, eliminating manual permission-revocation steps.
    
-   **Flexible access control**: Validity period and permission scope are configurable per request.
    

### Supported clients and version requirements

**Client**

**Supported**

**Minimum version**

Hologres console

Yes

Any

HoloWeb

Yes

Any

JDBC

Yes

Hologres V2.0

psql

Yes

Hologres V2.0

**Important**

Verify your Hologres instance version before using JDBC or psql with STS credentials.

### How Hologres treats RAM roles

In Hologres, RAM roles and Alibaba Cloud accounts (root accounts and RAM users) are treated as equals. A RAM role is a standard logon account. A superuser must grant permissions—such as SELECT, INSERT, and UPDATE—directly to the RAM role, not to the underlying Alibaba Cloud account. The RAM role then accesses Hologres within the scope of those granted permissions.

## Prerequisites

Before you begin, ensure that you have:

-   RAM console access with permission to **Create Role** and **Attach Role Policy** (for Step 1)
    
-   Hologres instance superuser access (for Step 2)
    
-   (Path B only) Permission to register a SAML provider in the RAM console
    

## Setup overview

Configuring RAM role authorization involves three steps:

1.  **Create a RAM role** – Choose Path A (RAM user) or Path B (IdP user) based on who authenticates.
    
2.  **Add the RAM role to a Hologres instance and grant permissions** – The Alibaba Cloud account owner grants the role access to a specific instance.
    
3.  **Connect to Hologres** – Connect via the console, JDBC, or psql.
    

## Step 1: Create a RAM role

Two paths are available depending on the identity type of the user who will assume the role:

**Dimension**

**Path A – RAM user (cloud account)**

**Path B – IdP user (identity provider)**

Who authenticates

RAM user within Alibaba Cloud

External IdP user (Active Directory, Okta, etc.)

Federation protocol

None (RAM-to-RAM role switch)

SAML 2.0

Hologres member identity

RAM role ARN

RAM role ARN

Additional RAM setup

Grant `AliyunSTSAssumeRoleAccess` to the RAM user

Register a SAML provider in RAM

Best for

Internal Alibaba Cloud users

Enterprise SSO / external employees

For a conceptual overview of RAM roles, see [RAM role overview](/help/en/ram/user-guide/ram-role-overview#concept-fgc-wjc-mfb).

### Path A: Grant access to a RAM user (cloud account)

**Performed by:** Alibaba Cloud account owner

Use this path when a RAM user within your Alibaba Cloud account needs to assume a RAM role to access Hologres.

#### Prerequisites

Before you begin, ensure that you have:

-   An Alibaba Cloud account with permission to create RAM roles
    
-   A RAM user (existing or to be created) who will assume the role
    
-   Your Alibaba Cloud account ID, available on the [User Information page](https://account-console.alibabacloud.com/?spm=5176.cngpdb.amxosvpfn.21.4ad17cacTR7tmU#/secure)
    

#### Create a RAM role for a trusted Alibaba Cloud account

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles). In the left navigation pane, click **Identities** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**. Set **Principal Type** to **Cloud Account** and **Principal Name** to **Current Account**. Click **OK**.
    
3.  In the **Create Role** dialog box, enter a **Role Name** and click **OK**.
    

#### Configure the trust policy

1.  On the **RAM Roles** page, click the target role name to open its details page.
    
2.  On the **Trust Policy** tab, click **Edit Trust Policy**. Replace the policy content with the following JSON. Replace `Alibaba Cloud account ID` in `acs:ram::Alibaba Cloud account ID:root` with your actual account ID.
    
    **Trust policy field reference:**
    
    **Field**
    
    **Description**
    
    `Principal.RAM`
    
    The Alibaba Cloud account (or RAM user) permitted to assume this role. Set to `acs:ram::Alibaba Cloud account ID:root` to allow all RAM users in the account.
    
    `Principal.Service`
    
    Alibaba Cloud services permitted to assume this role. `dataworks.aliyuncs.com` enables DataWorks to use this role.
    
    `Version`
    
    Policy schema version. Must be `"1"`.
    
    ```
       {
         "Statement": [
           {
             "Action": "sts:AssumeRole",
             "Effect": "Allow",
             "Principal": {
               "RAM": [
                 "acs:ram::Alibaba Cloud account ID:root"
               ]
             }
           },
           {
             "Action": "sts:AssumeRole",
             "Effect": "Allow",
             "Principal": {
               "Service": [
                 "dataworks.aliyuncs.com"
               ]
             }
           }
         ],
         "Version": "1"
       }
    ```
    

#### Grant the RAM user permission to call AssumeRole

The RAM user who will assume the role must have the `AliyunSTSAssumeRoleAccess` system policy attached. Without this policy, the user cannot call the STS `AssumeRole` API.

In the RAM console, navigate to the RAM user, click **Add Permissions**, and attach the `AliyunSTSAssumeRoleAccess` policy. For step-by-step instructions, see [Grant permissions to a RAM user](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

#### Obtain STS temporary security credentials

The RAM user calls the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) API operation to obtain short-lived credentials. For SDK examples, see [Use the STS OpenAPI example](/help/en/ram/developer-reference/use-the-sts-openapi-example).

Save the returned `AccessKeyId`, `AccessKeySecret`, and `SecurityToken` values — you will use them in Step 3.

### Path B: Grant access to an IdP user (identity provider)

**Performed by:** Alibaba Cloud account owner

Use this path when on-premises identity provider (IdP) users authenticate via SAML 2.0 federation and need to assume a RAM role automatically.

#### Prerequisites

Before you begin, ensure that you have:

-   A registered SAML identity provider in the RAM console. See [Overview of SAML-based role SSO](/help/en/ram/overview#task-zrv-2ny-zgb).
    
-   The SAML provider ARN, visible in the RAM console after registering the IdP
    
-   Your Alibaba Cloud account ID, available on the [User Information page](https://account-console.alibabacloud.com/?spm=5176.cngpdb.amxosvpfn.21.4ad17cacTR7tmU#/secure)
    

#### How SAML-based role SSO works

The following diagram shows the authentication flow for Path B:

![RAM role SSO flow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7760244371/p444769.png)

The end-to-end flow:

1.  A user opens a browser and selects Alibaba Cloud as the target service on the IdP logon page (for example, Microsoft Active Directory Federation Services (AD FS) at `https://ADFSServiceName/adfs/ls/IdpInitiatedSignOn.aspx`).
    
    > Some IdPs require users to log on before selecting the SSO application that represents Alibaba Cloud.
    
2.  The IdP generates a Security Assertion Markup Language (SAML) response and returns it to the browser.
    
3.  The browser forwards the SAML response to the Alibaba Cloud SSO service.
    
4.  The SSO service exchanges the SAML response for STS temporary security credentials and generates a console logon URL.
    
    > If the SAML response maps to multiple RAM roles, the system prompts the user to select a role before proceeding.
    
5.  The SSO service returns the logon URL to the browser.
    
6.  The browser redirects to the URL. The user is now logged on to the Alibaba Cloud Management Console as the RAM role and can access the Hologres instance within the permissions granted to that role.
    

#### Create a RAM role for a trusted identity provider

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles). In the left navigation pane, click **Identities** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**. Set **Principal Type** to **Identity Provider**.
    
3.  Click **OK**. In the dialog box, enter a role name.
    
4.  Set **IdP Type** and **Select IdP**, review the conditions, and click **OK**. The role is created.
    

#### Configure the trust policy

1.  On the **Roles** page, click the target role name to open its details page.
    
2.  On the **Trust Policy** tab, click **Edit Trust Policy**. Replace the policy content with the following JSON. Replace `Alibaba Cloud account ID` with your actual account ID, and replace `IDP` with the name of your SAML provider as registered in the RAM console.
    
    > In the ARN string `acs:ram::Alibaba Cloud account ID:saml-provider/IDP`, the value `IDP` is a placeholder for your SAML provider name (a user-defined string), not the abbreviation "IdP" (identity provider).
    
    **Trust policy field reference:**
    
    **Field**
    
    **Description**
    
    `saml:recipient`
    
    The SAML SSO endpoint. Must be exactly `https://signin.aliyun.com/saml-role/sso`.
    
    `Principal.Federated`
    
    The registered SAML provider ARN. Replace `Alibaba Cloud account ID` with your account ID and `IDP` with your SAML provider name.
    
    `Principal.Service`
    
    Alibaba Cloud services permitted to assume this role. `dataworks.aliyuncs.com` enables DataWorks to use this role.
    
    `Version`
    
    Policy schema version. Must be `"1"`.
    
    ```
       {
         "Statement": [
           {
             "Action": "sts:AssumeRole",
             "Condition": {
               "StringEquals": {
                 "saml:recipient": "https://signin.aliyun.com/saml-role/sso"
               }
             },
             "Effect": "Allow",
             "Principal": {
               "Federated": [
                 "acs:ram::Alibaba Cloud account ID:saml-provider/IDP"
               ]
             }
           },
           {
             "Action": "sts:AssumeRole",
             "Effect": "Allow",
             "Principal": {
               "Service": [
                 "dataworks.aliyuncs.com"
               ]
             }
           }
         ],
         "Version": "1"
       }
    ```
    

## Step 2: Add the RAM role to a Hologres instance and grant permissions

**Performed by:** Alibaba Cloud account owner (Hologres instance superuser)

#### Prerequisites

Before you begin, ensure that you have:

-   Completed Step 1 and obtained the RAM role ARN
    
-   Superuser access to the target Hologres instance
    

By default, a RAM role cannot view or manage instances in the Hologres console. The Alibaba Cloud account must first grant the necessary console permissions to the RAM role. For details, see [Grant permissions to a RAM user](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

After granting console access, add the RAM role to the Hologres instance and grant database permissions using one of the following options.

**Option 1 – Hologres console (HoloWeb)**

1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  On the **Instances** page, click the target instance name. In the secondary panel, click **Account Management** to open the **User Management** page in HoloWeb.
    
3.  Click **Add User**. In the **Add User** dialog box, select the target RAM role and add it to the instance.
    
4.  On the **Database Authorization** page, grant the required permissions to the RAM role.
    

**Option 2 – SQL statements**

Grant permissions using SQL statements. For details, see [Permission management overview](/help/en/hologres/security-and-compliance/permission-management-overview#concept-2019385).

> **Note (Path A only):** If a RAM user assumes a RAM role, the role does not have Hologres console access by default. To enable console access, grant the `AliyunRAMReadOnlyAccess` permission to the **RAM user** in the RAM console. For details, see [Grant permissions to a RAM user](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

## Step 3: Connect to Hologres

### Console and HoloWeb

**Performed by:** RAM role user

#### Prerequisites

Before you begin, ensure that you have:

-   Completed Steps 1 and 2
    
-   (Path A only) The RAM user has the `AliyunRAMReadOnlyAccess` permission
    

#### Connect via the console

1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) using the RAM role identity to manage instances.
    
2.  In the left navigation pane, click **Go To HoloWeb**. For details on schema design and data development, see [Connect to HoloWeb and execute a query](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    

### JDBC and psql

**Performed by:** Application developer or RAM role user

**Important**

JDBC and psql connections using STS credentials require Hologres V2.0 or later. Verify your instance version before proceeding.

#### Prerequisites

Before you begin, ensure that you have:

-   Completed Steps 1 and 2
    
-   Called the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) API operation to obtain STS temporary security credentials: `AccessKeyId`, `AccessKeySecret`, and `SecurityToken`
    
-   The Hologres instance endpoint (`<host>`), port (`<port>`), and database name (`<database>`), available in the Hologres console under **Instances** > **Connection Info**
    

#### Set credentials as environment variables

The following is a sample STS temporary credentials response:

```
"Credentials": {
    "SecurityToken": "CAISuwJ1q6Ft5B2yu****KiAA",
    "AccessKeyId": "STS.NTKaenSkmLhG4HpM5****76UV",
    "AccessKeySecret": "6itECZnhbG2RU6ktTSBSd6JxeLHKPWyBt****SS62",
    "Expiration": "2025-02-21T03:47:07Z"
}
```

Set the values from `Credentials.AccessKeyId`, `Credentials.AccessKeySecret`, and `Credentials.SecurityToken` as environment variables:

```
export ALIBABA_CLOUD_ACCESS_KEY_ID="<value of Credentials.AccessKeyId>"
export ALIBABA_CLOUD_ACCESS_KEY_SECRET="<value of Credentials.AccessKeySecret>"
export ALIBABA_CLOUD_SECURITY_TOKEN="<value of Credentials.SecurityToken>"
```

> **Security best practices:** - Never hardcode STS credentials in source code or configuration files. - Set credentials as environment variables or use a secrets manager. - STS credentials expire automatically (see `Expiration` in the response). Implement logic to refresh credentials before expiry by calling `AssumeRole` again. - Grant the minimum permissions required. Avoid `AdministratorAccess` in the RAM role policy. - Audit access using Alibaba Cloud ActionTrail. Never log credential values.

#### Connect using JDBC (Java)

All examples read STS credentials from environment variables and pass the security token through the JDBC connection.

For the full JDBC configuration reference, see [Connect to Hologres using JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres).

**Method 1: Pass the security token via \`PGProperty.OPTIONS\`**

Use this method when your connection framework does not accept query parameters in the URL, or when you want to supply all credentials through a `Properties` object.

```
import org.postgresql.PGProperty;
import java.sql.*;
import java.io.IOException;
import java.util.Properties;

public class JdbcLinkHologres1 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        // Read credentials from environment variables — do not hardcode
        String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        String securityToken = System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN");
        String url = "jdbc:postgresql://<host>:<port>/<database>";

        Properties props = new Properties();
        PGProperty.USER.set(props, accessKeyId);
        PGProperty.PASSWORD.set(props, accessKeySecret);
        PGProperty.OPTIONS.set(props, "sts_token=" + securityToken);

        Class.forName("org.postgresql.Driver");
        Connection connection = DriverManager.getConnection(url, props);

        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM tabletest");

        while (resultSet.next()) {
            System.out.println("Result: " + resultSet.getInt(1));
            System.out.println("Result: " + resultSet.getString(2));
        }
    }
}
```

**Parameter reference – Method 1:**

**Placeholder**

**Description**

**Where to find it**

`ALIBABA_CLOUD_ACCESS_KEY_ID`

Environment variable holding the STS AccessKey ID

Set from `Credentials.AccessKeyId` in the AssumeRole response

`ALIBABA_CLOUD_ACCESS_KEY_SECRET`

Environment variable holding the STS AccessKey secret

Set from `Credentials.AccessKeySecret` in the AssumeRole response

`ALIBABA_CLOUD_SECURITY_TOKEN`

Environment variable holding the STS security token

Set from `Credentials.SecurityToken` in the AssumeRole response

`<host>`

Hologres instance endpoint

Hologres console > Instances > Connection Info

`<port>`

Instance port

Hologres console > Instances > Connection Info

`<database>`

Target database name

HoloWeb > Databases

**Method 2: Append the security token to the JDBC URL**

Use this method when your connection framework requires the full connection string in URL format. URL-encode the `SecurityToken` value before appending it.

```
import java.net.URLEncoder;
import java.sql.*;
import java.io.IOException;

public class JdbcLinkHologres2 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
        // Read credentials from environment variables — do not hardcode
        String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        String securityToken = System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN");

        String url = "jdbc:postgresql://<host>:<port>/<database>";
        // URL-encode the security token before appending it as a query parameter
        String urlWithOptions = url + "?options=sts_token=" + URLEncoder.encode(securityToken, "UTF-8");

        Class.forName("org.postgresql.Driver");
        Connection connection = DriverManager.getConnection(urlWithOptions, accessKeyId, accessKeySecret);

        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("SELECT * FROM tabletest");

        while (resultSet.next()) {
            System.out.println("Result: " + resultSet.getInt(1));
            System.out.println("Result: " + resultSet.getString(2));
        }
    }
}
```

**Parameter reference – Method 2:**

**Placeholder**

**Description**

**Where to find it**

`ALIBABA_CLOUD_ACCESS_KEY_ID`

Environment variable holding the STS AccessKey ID

Set from `Credentials.AccessKeyId` in the AssumeRole response

`ALIBABA_CLOUD_ACCESS_KEY_SECRET`

Environment variable holding the STS AccessKey secret

Set from `Credentials.AccessKeySecret` in the AssumeRole response

`ALIBABA_CLOUD_SECURITY_TOKEN`

Environment variable holding the STS security token (must be URL-encoded)

Set from `Credentials.SecurityToken` in the AssumeRole response

`<host>`

Hologres instance endpoint

Hologres console > Instances > Connection Info

`<port>`

Instance port

Hologres console > Instances > Connection Info

`<database>`

Target database name

HoloWeb > Databases

#### Connect using psql (command line)

This command passes STS credentials as environment variables and the security token via `PGOPTIONS`. For Linux systems. For details, see [Connect to Hologres using a psql client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#section-hi2-kbq-y5v).

```
PGUSER=<AccessKeyId> \
PGPASSWORD=<AccessKeySecret> \
PGOPTIONS="sts_token=<SecurityToken>" \
  psql -h <host> -p <port> -d <database>
```

**Parameter reference:**

**Placeholder**

**Description**

**Where to find it**

`<AccessKeyId>`

STS temporary AccessKey ID

`Credentials.AccessKeyId` in the AssumeRole response

`<AccessKeySecret>`

STS temporary AccessKey secret

`Credentials.AccessKeySecret` in the AssumeRole response

`<SecurityToken>`

STS security token

`Credentials.SecurityToken` in the AssumeRole response

`<host>`

Hologres instance endpoint

Hologres console > Instances > Connection Info

`<port>`

Instance port

Hologres console > Instances > Connection Info

`<database>`

Target database name

HoloWeb > Databases

### Verify your setup

After connecting, run the following query to confirm you are authenticated as the expected RAM role:

```
SELECT current_user;
```

The result returns the RAM role name you added to the Hologres instance in Step 2.

## Troubleshooting

**Error message**

**Likely cause**

**Resolution**

`password authentication failed for user "<AccessKeyId>"`

RAM role has not been added to the Hologres instance

Complete Step 2 to add the RAM role via **User Management** in HoloWeb.

`password authentication failed for user "<AccessKeyId>"`

Security token not URL-encoded (JDBC Method 2 or psql)

URL-encode the `SecurityToken` value using `URLEncoder.encode` before appending to the URL or `PGOPTIONS`.

`password authentication failed for user "<AccessKeyId>"`

Credentials are incorrect or expired

Confirm `AccessKeyId`, `AccessKeySecret`, and `SecurityToken` are accurate. Call [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) again to obtain fresh credentials if they have expired.

If none of the above resolves the issue, check Alibaba Cloud ActionTrail logs for the full call chain to identify the root cause.

## What's next

-   **Manage permissions**: Fine-tune database permissions granted to your RAM role. See [Permission management overview](/help/en/hologres/security-and-compliance/permission-management-overview#concept-2019385).
    
-   **Connect with other tools**: Use RAM role credentials with BI tools or Python clients. See [Connect to Hologres using JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres).
    
-   **Refresh STS credentials**: Implement automated credential rotation using the STS SDK. See [Use the STS OpenAPI example](/help/en/ram/developer-reference/use-the-sts-openapi-example).
    
-   **Audit access**: Monitor RAM role activity in Hologres using Alibaba Cloud ActionTrail.
