This topic provides answers to some frequently asked questions about the installation and logon of the Secure Access Service Edge (SASE) client.

-   [Which operating systems are supported by the SASE client?](#0a323fca10rrf)
    
-   [Why does the process of installing the SASE client requires a long period of time?](#b95aa23979hey)
    
-   [What do I do if I cannot log on to the SASE client?](#5da934254fqw6)
    
-   [After I enter my enterprise authentication identifier and click OK, the SASE client displays a white screen, and the "bad request" error message appears. What do I do?](#90cb1d11876m0)
    
-   [Can users of an enterprise uninstall the SASE client?](#c42c3ce127ysd)
    

## Which operating systems are supported by the SASE client?

Windows, macOS, and Linux operating systems are supported. For more information, see [Install and log on to the SASE client](/help/en/sase/user-guide/install-and-log-on-to-sase-client).

## Why does the process of installing the SASE client requires a long period of time?

If you do not deploy the .NET framework on your terminal before you install the SASE client, the system installs the framework before the client. Therefore, the installation process requires a long period of time.

## What do I do if I cannot log on to the SASE client?

Check network connectivity first. You can use the `ping saml-csas.aliyuncs.com` command to check whether SASE is reachable. If no, an error may occur in DNS resolution or the outbound connection of the SASE client.

## After I enter my enterprise authentication identifier and click OK, the SASE client displays a white screen, and the "bad request" error message appears. What do I do?

This error may occur because the administrator of your enterprise does not add users to your custom identity provider (IdP). Make sure that users are added. Then, log on to the SASE client again. For more information, see [Configure a SASE IdP](/help/en/sase/user-guide/configure-sase-custom-identity-source).

## Can users of an enterprise uninstall the SASE client?

If the administrator of the enterprise has configured terminal anti-uninstallation policies, a user must submit an uninstallation application before the user can uninstall the SASE client. The user cannot uninstall the SASE client until the administrator approves the application. For more information, see [Configure an anti-uninstallation policy and approve an uninstallation application](/help/en/sase/user-guide/configure-and-approve-registration-information-of-terminals#section-swy-qa4-s3i).
