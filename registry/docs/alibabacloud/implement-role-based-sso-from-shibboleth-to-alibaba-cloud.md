This topic provides an example on how to implement role-based single sign-on (SSO) from Shibboleth to Alibaba Cloud. The example describes the end-to-end role-based SSO process from a cloud identity provider (IdP) to Alibaba Cloud.

## **Preparations**

1.  Install Shibboleth, Apache Tomcat, and a Lightweight Directory Access Protocol (LDAP)-authenticated server.
    
2.  Configure the LDAP-authenticated server.
    
    Create two accounts for subsequent use. First, create an administrator account on the LDAP-authenticated server. The distinguished name (DN) of the administrator account is `uid=admin,ou=system`, and the password is `secret`.
    
    Then, create a test account on the LDAP-authenticated server. The DN of the test account is `cn=Test User,ou=users,dc=wimpi,dc=net`, and the password is `secret`. The following figure shows the detailed information.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1250388961/p724535.png)
    
    The following section describes the user information fields:
    
    -   **mail**: the logon name of the Resource Access Management (RAM) user.
        
    -   **memberof**: the name of the RAM role.
        
    -   **samaccountname**: the username of the account that is used to log on to Shibboleth.
        
    -   **userpassword**: the password of the account that is used to log on to Shibboleth.
        
3.  Configure Shibboleth to connect to the LDAP-authenticated server.
    
    Modify the following content in the `/opt/shibboleth-idp/conf/ldap.properties` file:
    
    ```
    # The LDAP authentication mode.
    idp.authn.LDAP.authenticator = bindSearchAuthenticator
    
    # The address of the LDAP-authenticated server.
    idp.authn.LDAP.ldapURL=ldaps://[The address of the LDAP-authenticated server]:389
    
    # Disable Transport Layer Security (TSL) and Transport Layer Security (SSL).
    idp.authn.LDAP.useStartTLS = false
    idp.authn.LDAP.useSSL = false
    
    # The directory tree for search.
    idp.authn.LDAP.baseDN = dc=wimpi,dc=net
    idp.authn.LDAP.subtreeSearch = true
    # The logon matching rule. The user information field samaccountname is used to log on to the LDAP-authenticated server. 
    idp.authn.LDAP.userFilter= (samaccountname={user})
    
    # The username and password of the admin account that you created.
    idp.authn.LDAP.bindDN = uid=admin,ou=system
    idp.authn.LDAP.bindDNCredential = secret
    
    idp.attribute.resolver.LDAP.searchFilter =(samaccountname=$resolutionContext.principal)
    ```
    

**Note**

The configurations of Shibboleth that are described in this topic are suggestions and used only to help you understand the end-to-end SSO process from Shibboleth to Alibaba Cloud. Alibaba Cloud does not provide consulting services for the configurations of Shibboleth.

## Step 1: Download the SAML SP metadata file of Alibaba Cloud

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Integrations** > **SSO**.
    
3.  On the **Role-based SSO** tab, click the **SAML** tab and copy the URL of the Security Assertion Markup Language (SAML) service provider (SP) metadata file.
    
4.  Open a new tab in your browser and paste the URL in the address bar. On the page that appears, right-click the page and select Save As to download the metadata file in the XML format and save the file as `/opt/shibboleth-idp/metadata/aliyun-ram-role-metadata.xml`.
    
    **Note**
    
    The XML file contains the information that is required to configure Alibaba Cloud as a Security Assertion Markup Language (SAML) service provider (SP). Record the value of `entityID` in the `EntityDescriptor` element for subsequent configurations in Shibboleth.
    

## **Step 2: Register Alibaba Cloud with Shibboleth**

Configure the metadata file that you obtained in [Step 1: Download the SAML SP metadata file of Alibaba Cloud](#section-7fz-jfo-srq) in the `/opt/shibboleth-idp/conf/metadata-providers.xml` file to register Alibaba Cloud with Shibboleth.

```
<!--
    <MetadataProvider id="LocalMetadata"  xsi:type="FilesystemMetadataProvider" metadataFile="PATH_TO_YOUR_METADATA"/>
-->

<!-- Find the code that is displayed in the preceding line in the file and replace the code with the code that is displayed in the following line. -->

<MetadataProvider id="AliyunMetadata"  xsi:type="FilesystemMetadataProvider" metadataFile="%{idp.home}/metadata/aliyun-ram-role-metadata.xml"/>
```

## **Step 3: Obtain the metadata file of the SAML IdP in Shibboleth**

1.  Restart Apache Tomcat to allow the preceding configurations to take effect.
    
2.  Access `https://<The IP address of the LDAP server>/idp/shibboleth` and save the metadata file to your computer.
    

## Step 4: Create a SAML IdP in Alibaba Cloud

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Integrations** > **SSO**.
    
3.  On the **Role-based SSO** tab, click the **SAML** tab and click Create IdP.
    
4.  On the Create IdP page, set **IdP Name** to shibboleth-provider and configure **Description**.
    
5.  In the **Metadata File** section, click **Upload Metadata File** to upload the metadata file that you obtained in [Step 3: Obtain the metadata file of the SAML IdP in Shibboleth](#7a766910f5m22).
    
6.  Click **Create IdP**.
    

View the details of the created IdP and record the Alibaba Cloud Resource Name (ARN) of the IdP for subsequent use.

## Step 5: Create a RAM role in Alibaba Cloud

1.  In the left-side navigation pane of the RAM console, choose **Identities** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**.
    
3.  In the upper-right corner of the **Create Role** page, click **Switch to Policy Editor**.
    
4.  Specify a SAML IdP in the editor.
    
    The editor supports the Visual editor and JSON modes. In this example, the Visual editor mode is used. You need to configure the **Principal** element by selecting **SAML** for **Identity Provider Type** and specifying shibboleth-provider that you created in [Step 4: Create a SAML IdP in Alibaba Cloud](#b23c0f30f5hgh) for Identity Provider.
    
5.  In the editor, set the `saml:recipient` condition to `https://signin.alibabacloud.com/saml-role/sso`.
    
6.  In the **Create Role** dialog box, set the **Role Name** parameter to worker and click **OK**.
    

View the details of the created RAM role and record the ARN of the RAM role for subsequent use.

## **Step 6: Configure the user attributes that are returned by Shibboleth**

1.  Modify the `/opt/shibboleth/conf/services.xml` file.
    
    The original configuration file contains the `attribute-resolver.xml` field and does not provide complete configuration information. You must replace the field with the `attribute-resolver-full.xml` field to provide complete configuration information.
    
    ```
    <value>%{idp.home}/conf/attribute-resolver.xml</value>
    <!-- Find the code that is displayed in the preceding line in the file and replace the code with the code that is displayed in the following line. -->
    <value>%{idp.home}/conf/attribute-resolver-full.xml</value>
    ```
    
2.  Modify the `/opt/shibboleth/conf/attribute-resolver-full.xml` file.
    
    1.  Configure the user attributes that are returned by Shibboleth in the /opt/shibboleth/conf/attribute-resolver-full.xml file. In this example, the `mail` and `memberof` fields are used as the user attributes.
        
        Set the `id` of the `memberof` attribute to `role`, which specifies the RAM role of a user. Set the value of the `ReturnValue` tag to `<The ARN of the RAM role except worker + '$1'>,<The ARN of the SP>`. You can obtain `the ARN of the SP` in [Step 4: Create a SAML IdP in Alibaba Cloud](#b23c0f30f5hgh) and `the ARN of the RAM role` in [Step 5: Create a RAM role in Alibaba Cloud](#section-efr-wq8-8lw).
        
        **Note**
        
        The RAM role name is replaced with `$1` to allow SSO to be configured for multiple RAM roles. You can modify the value of the `memberof` field to change the RAM role of a user.
        
        Note that the `memberof` attribute is a custom user attribute rather than an internal attribute. You can replace the attribute with another attribute that can indicate the RAM role of a user.
        
        ```
        <!-- ========================================== -->
        <!--      Attribute Definitions                 -->
        <!-- ========================================== -->
        
        <!-- Schema: Core schema attributes-->
        
        <!-- Find the code that is displayed in the preceding line in the file and append the code that is displayed in the following line. -->
        
        <AttributeDefinition xsi:type="Simple" id="mail">
            <InputDataConnector ref="myLDAP" attributeNames="mail" />
            <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:mail" encodeType="false" />
            <AttributeEncoder xsi:type="SAML2String" name="https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName" friendlyName="mail" encodeType="false" />
        </AttributeDefinition>
        <AttributeDefinition xsi:type="Mapped" id="role">
            <InputDataConnector ref="myLDAP" attributeNames="memberof" />
            <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:role" encodeType="false" />
            <AttributeEncoder xsi:type="SAML2String" name="https://www.aliyun.com/SAML-Role/Attributes/Role" friendlyName="role" encodeType="false" />
            <ValueMap>
                <ReturnValue>acs:ram::114*******71701:role/$1,acs:ram::114*******71701:saml-provider/shibboleth-provider</ReturnValue>
                <SourceValue>(.+)</SourceValue>
            </ValueMap>
        </AttributeDefinition>
        ```
        
    2.  Read the configuration information that is contained in `/opt/shibboleth/conf/ldap.properties` in the file to establish a connection to the LDAP server.
        
        ```
        <!-- Example LDAP Connector -->
        <!--
        	<DataConnector id="myLDAP" xsi:type="LDAPDirectory"
        		ldapURL="%{idp.attribute.resolver.LDAP.ldapURL}"
        		baseDN="%{idp.attribute.resolver.LDAP.baseDN}"
        		principal="%{idp.attribute.resolver.LDAP.bindDN}"
        		principalCredential="%{idp.attribute.resolver.LDAP.bindDNCredential}"
        		useStartTLS="%{idp.attribute.resolver.LDAP.useStartTLS:true}"
        		...
        	</DataConnector>
        -->
        
        <!-- Find the code that is displayed in the preceding line in the file and replace the code with the code that is displayed in the following line. -->
        
        <DataConnector id="myLDAP" xsi:type="LDAPDirectory"
        			   ldapURL="%{idp.attribute.resolver.LDAP.ldapURL}"
        			   baseDN="%{idp.attribute.resolver.LDAP.baseDN}"
        			   principal="%{idp.attribute.resolver.LDAP.bindDN}"
        			   principalCredential="%{idp.attribute.resolver.LDAP.bindDNCredential}"
        			   useStartTLS="%{idp.attribute.resolver.LDAP.useStartTLS}"
        			   connectTimeout="%{idp.attribute.resolver.LDAP.connectTimeout}"
        			   responseTimeout="%{idp.attribute.resolver.LDAP.responseTimeout}">
        	<FilterTemplate>
        		<![CDATA[
        				%{idp.attribute.resolver.LDAP.searchFilter}
        			]]>
        	</FilterTemplate>
        </DataConnector>
        ```
        
3.  Add an attribute filter to the `/opt/shibboleth/conf/attribute-filter.xml` file.
    
    Replace the `value` attribute in the `PolicyRequirementRule` tag with the `Entity ID` that you obtained in [Step 1: Download the SAML SP metadata file of Alibaba Cloud](#section-7fz-jfo-srq).
    
    ```
    <AttributeFilterPolicyGroup id="ShibbolethFilterPolicy"
    							xmlns="urn:mace:shibboleth:2.0:afp"
    							xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    							xsi:schemaLocation="urn:mace:shibboleth:2.0:afp http://shibboleth.net/schema/idp/shibboleth-afp.xsd">
    	
    <!-- Find the code that is displayed in the preceding line in the file and append the code that is displayed in the following line. -->
    	
    <AttributeFilterPolicy id="aliyun">
    	<PolicyRequirementRule xsi:type="Requester" value="[entityID]" />
    	<AttributeRule attributeID="mail">
    		<PermitValueRule xsi:type="ANY" />
    	</AttributeRule>
    	<AttributeRule attributeID="role">
    		<PermitValueRule xsi:type="ANY" />
    	</AttributeRule>
    </AttributeFilterPolicy>
    ```
    

## **Step 7: Configure the NameID attribute in the SAML response**

1.  Configure the NameID attribute in the `/opt/shibboleth/conf/relying-party.xml` file.
    
    Replace the `relyingPartyIds` attribute in the `bean` tag with the `Entity ID` that you obtained in [Step 1: Download the SAML SP metadata file of Alibaba Cloud](#section-7fz-jfo-srq).
    
    ```
    <!--
    	Override example that identifies a single RP by name and configures it
    	for SAML 2 SSO without encryption. This is a common "vendor" scenario.
    -->
    <!--
    <bean parent="RelyingPartyByName" c:relyingPartyIds="https://sp.example.org">
    	<property name="profileConfigurations">
    		<list>
    			<bean parent="SAML2.SSO" p:encryptAssertions="false" />
    		</list>
    	</property>
    </bean>
    -->
    
    <!-- Find the code that is displayed in the preceding line in the file and replace the code with the code that is displayed in the following line. -->
    
    <bean parent="RelyingPartyByName" c:relyingPartyIds="[entityID]">
        <property name="profileConfigurations">
            <list>
                <bean parent="SAML2.SSO" p:encryptAssertions="false" p:nameIDFormatPrecedence="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" />
            </list>
        </property>
    </bean>
    ```
    
2.  Configure the generation method of the NameID attribute in the `/opt/shibboleth/conf/saml-nameid.xml` file.
    
    ```
    <!-- Find the following code. Uncomment the code to make the configuration take effect.-->
    
    <bean parent="shibboleth.SAML2AttributeSourcedGenerator"
        p:omitQualifiers="true"
        p:format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        p:attributeSourceIds="#{ {'mail'} }" />
    
    <bean parent="shibboleth.SAML1AttributeSourcedGenerator"
        p:omitQualifiers="true"
        p:format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        p:attributeSourceIds="#{ {'mail'} }" />
    ```
    
3.  Configure information about the NameID attribute in `/opt/shibboleth/conf/saml-nameid.properties`.
    
    ```
    idp.nameid.saml2.default = urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
    idp.persistentId.useUnfilteredAttributes = true
    idp.persistentId.encoding = BASE32
    ```
    

## Step 8: Start Shibboleth

Restart Apache Tomcat to allow the preceding configurations to take effect.

## Test role-based SSO

After you complete the preceding configurations, you can initiate SSO from Shibboleth.

1.  Access `https://<The IP address of the LDAP server>/idp/profile/SAML2/Unsolicited/SSO?providerId=<entityID>`.
    
    Replace `<entityID>` with the `Entity ID` that you obtained in [Step 1: Download the SAML SP metadata file of Alibaba Cloud](#section-7fz-jfo-srq).
    
2.  On the logon page of Shibboleth, enter the username and password and click **Log On**.
    
    After the logon succeeds, you are redirected to the homepage of the Alibaba Cloud Management Console as the RAM role worker.
    

## **FAQ**

If issues occur when you verify the configuration results, you can identify the issues by using the `/opt/shibboleth-idp/logs/idp-process.log` file. The following section provides answers to some frequently asked questions about role-based SSO from Shibboleth to Alibaba Cloud:

### **What do I do if an exception occurs when I use a valid username and password to log on to Shibboleth?**

View the error message in the `/opt/shibboleth-idp/logs/idp-process.log` file. If the `ValidateUsernamePassword` error message is displayed, view the connection configurations and deployment of your LDAP server. Make sure that the code that must be uncommented is uncommented and that no extra spaces exist.

### **What do I do if the system does not respond when I log on to Shibboleth and the** `**unable to connect to the ldap**` **error message is displayed?**

Check whether the connection configurations of your LDAP server in the `ldap.properties` and `attribute-resolver-full.xml` files are correct.

### **What do I do if the** `**The NameID is missing**` **error message is displayed when I am redirected to Alibaba Cloud?**

Check whether the `mail` field is correctly mapped as an attribute in [Step 6: Configure the user attributes that are returned by Shibboleth](#390d3550f5c98). Check whether the `NameID` attribute is correctly configured in [Step 7: Configure the NameID attribute in the SAML response](#68923130f5get).

### **What do I do if the** `**Unsupported Request**` **error message is displayed when I access** `https://<The IP address of the LDAP server>/idp/profile/SAML2/Unsolicited/SSO?providerId=<entityID>`?

Check whether the `entityId` field is correctly specified. Make sure that the value of the `entityId` field in the `metadata` file, `attribute-filter.xml` file, and `relying-party.xml` file are the same.

### **What do I do if the** `**Can not find SAML role attribute which is required**` **error message is displayed when I am redirected to Alibaba Cloud?**

Check whether the `memberof` field is correctly mapped as `role` in [Step 6: Configure the user attributes that are returned by Shibboleth](#390d3550f5c98). Make sure that the value of the `ReturnValue` tag is correct.

### **What do I do if the** `**Can not find SAML role session name attribute which is required**` **error message is displayed when I am redirected to Alibaba Cloud?**

Check whether the `name` of the `mail` attribute in [Step 6: Configure the user attributes that are returned by Shibboleth](#390d3550f5c98) is `https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName`. Some users may forget to change the value of the `name` field when the users modify the configurations of user-based SSO to implement role-based SSO.

### **What do I do if the** `**The response signature is invalid**` **error message is displayed when I am redirected to Alibaba Cloud?**

Re-upload the metadata file of Shibboleth to Alibaba Cloud.
