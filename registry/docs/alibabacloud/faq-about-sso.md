This topic provides answers to some frequently asked questions about single sign-on (SSO) in CloudSSO.

## How do I view a SAML response in a browser?

If you encounter issues during SSO, you can view the SAML response in Google Chrome to identify the problem. The steps may vary slightly depending on the browser version. The following procedure uses Google Chrome 108.0.5359.125 (64-bit) as an example.

1.  Press **F12** to open the developer tools console.
    
2.  Click the **Network** tab, and then select **Preserve log**.
    
3.  Reproduce the issue.
    
4.  In the log data on the **Network** tab, search for **sso**. Select the target request, click the **Payload** tab, and view the SAML response.
    

## What do I do if the error message "InvalidSubjectValue" or "InvalidUser" is reported during SSO?

**Cause**

**Solution**

No CloudSSO users are created in CloudSSO, or the username of the created CloudSSO user is different from the username of the user in your identity provider (IdP).

-   Change the username of the CloudSSO user to the username of the user in your IdP.
-   The username of a CloudSSO user can be up to 64 characters in length, and can contain only the following special characters `@ _ - .`. The username of the user in your IdP must also meet the preceding requirements. If the username of the user in your IdP does not meet the preceding requirements, use one of the following methods to resolve the issue:
    -   Change the username of the user in your IdP based on the preceding requirements.
    -   Change the field that uniquely identifies the user in the SSO settings of your IdP. For example, you can use the email address of the user, which can uniquely identify the user and does not contain special characters.
    -   Configure a conversion rule of username mapping in the SSO settings of your IdP.

The user failed to be synchronized by using System for Cross-domain Identity Management (SCIM).

Query the SCIM synchronization logs in your IdP and troubleshoot the issue.

The User Principal Name (UPN)of the user in your IdP is different from the UPN that is synchronized to CloudSSO. The following list describes the possible causes:

-   The username of the user that is synchronized to CloudSSO by using SCIM does not use a UPN.
-   A conversion rule of username mapping is configured in the SCIM synchronization settings.

Make sure that the conversion rule that is configured in the SSO settings of your IdP is the same as the conversion rule that is configured in the SCIM synchronization settings.

## What do I do if the "The assertion signature is invalid" error message and "The assertion signature is invalid or Sigin token expired" error message are reported during SSO logon?

**Cause**

**Solution**

The public-private key pair that is used for signatures in your IdP is rotated. However, the metadata of your IdP in Alibaba Cloud is not updated.

Update the metadata of your IdP in Alibaba Cloud. You can download the latest metadata file from your IdP, and then upload the metadata file to Alibaba Cloud.

The public-private key pair that is used for signatures in your IdP is rotated, and the metadata of your IdP in Alibaba Cloud is updated. During the rotation, the original private key may still be used in your IdP. The metadata of your IdP in Alibaba Cloud contains only the new public key.

We recommend that you specify both the original public key and the new public key in the metadata of your IdP.

-   Create a certificate. Do not disable or delete the original certificate.
-   Download the new metadata file and check whether the original public key and the new public key are included in the metadata file.
    -   For some IdPs, such as Azure AD, the original certificate and new certificate are included in the new metadata file.
    -   If the new metadata file does not contain the original public key and the new public key, you must manually add the original certificate and new certificate to the new metadata file. You can download the original metadata file from the SSO settings in the CloudSSO console and copy information about the `X509Certificate` element, which is information about the original certificate. Add the copied information to the `KeyDescriptor` element of the new metadata file and save the modification.
    -   Upload the new metadata file to the SSO settings in the CloudSSO console.
    -   Enable the new certificate and disable the original certificate in the SSO settings of your IdP.

The metadata file failed to be uploaded because the size of the metadata file is excessively large.

Wait until the upload is complete. After the upload is complete, download the uploaded metadata file to check whether the metadata file is uploaded.

## What do I do if the metadata parameters of a self-built IdP are missing or incorrect?

**Cause**

**Solution**

The metadata parameters are not configured according to the SAML 2.0 protocol.

Configure the parameters correctly according to the SAML 2.0 protocol. For more information, see [SAML 2.0](https://wiki.oasis-open.org/security).
