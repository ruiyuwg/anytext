You can use the certificate toolkit to view the information about a certificate signing request (CSR), view the information about a certificate, check the status of SSL encryption, and convert the format of a certificate. This way, you can obtain more references when you apply for, configure, and deploy a certificate.

## View the information about a CSR

You can view the algorithm and domain name that are specified in a CSR on the **View CSR** page. When you apply for a certificate, you can compare the domain name specified in your application with the domain name specified in the CSR to make sure that the domain names are consistent. If the domain names are inconsistent, your application is rejected.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **View Certificate CSR**.
    
3.  On the **View Certificate CSR** page, upload the CSR file or enter the content of the CSR file in the CSR File field. Then, click **View CSR**.
    
    The content of the CSR file must start with `-----BEGIN CERTIFICATE REQUEST-----` and end with `-----END CERTIFICATE REQUEST-----`. Make sure that the content of the uploaded CSR file or the specified content of the CSR file is encoded in the correct format.
    

## View information about a certificate

Before you deploy a certificate, you can view the algorithm of the certificate, the validity period of the certificate, and the domain names that are bound to the certificate on the **View Certificate** page.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **View Certificate Content**.
    
3.  On the **View Certificate Content** page, upload the certificate file or enter the content of the certificate file in the Certificate File field. Then, click **View Certificate**.
    
    The content of the certificate file must start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`. Make sure that the content of the uploaded certificate file or the specified content of the certificate file is encoded in the correct format.
    

## Check the status of SSL encryption for a domain name

You can view the following information on the **Check SSL Status** page: a valid certificate to which a domain name is bound, the certificate chain, and the supported protocols of the certificate. This way, you can obtain more references when you configure and deploy a certificate.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **Check Domain Name Status**.
    
3.  On the **Check Domain Name Status** page, enter the domain name and the port number that you want to check, and click **Check**.
    

## Convert the format of a certificate

Different web servers support different formats of certificates. Before you can install an issued certificate on your web server, you must convert the format of the certificate based on the requirements of your web server. Certificate Management Service allows you to convert formats between PEM and PFX, PEM and JKS, and PEM and PKCS#8 based on the type of your web server.

**Note**

In most cases, if you want to convert a CER certificate to a CRT certificate or convert a CRT certificate to a CER certificate, you need to only change the file extension of the certificate.

When you convert the format of a certificate, you can specify a new password for the certificate. When you convert a PEM certificate to a JKS certificate, you can specify an alias for the certificate.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **Convert Certificate Format**.
    
3.  On the **Convert Certificate Format** page, configure the parameters as prompted, and click **Submit**.
    
    **Important**
    
    -   If a certificate before conversion contains information such as an alias and a password, you must configure the related parameters. If you do not configure the parameters, the conversion may fail.
        
    -   If you want to manually enter the content of a CA certificate file or private key file, you can use a text editor to open the files. Then, copy and paste the content of the files to the required fields.
        
    

## Verify the DNS record of your domain name

You can click Verify DNS to verify whether the DNS record of your domain name takes effect.

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **Verify DNS Settings**.
    
3.  On the **DNS** tab, select the operator and region of your domain name, enter the domain name, and then click **OK**.
    
    If the resolution result is the same as the record value that you specify for the DNS record of your domain name, the DNS record takes effect.
    

## **Convert a Chinese domain name**

A Chinese domain name can be recognized during network transmission only if it is converted to Punycode based on the RFC 3492 standard. If you use a Chinese domain name, you must perform the following steps to convert the domain name to Punycode before you can apply for a certificate:

1.  Log in to the [Certificate Management Service console](https://yundunnext.console.alibabacloud.com/?p=cas).
    
2.  In the navigation pane on the left, choose **Common Certificate Tools** > **Convert Chinese Domain Name**.
    
3.  Enter your Chinese domain name and click **Convert to Punycode**.
    
    After the Chinese domain name is resolved, it is converted to Punycode in the `xn-xxxxxxxx.xxx` format. If you want to convert the Punycode back to the Chinese domain name, click **Convert to GBK**.
