Use the `bucket-cname` command to manage custom domain name (CNAME) configurations for a bucket, including creating CNAME tokens for domain ownership verification, binding custom domain names, querying and deleting CNAME configurations, and associating or disassociating SSL certificates.

## Usage notes

-   **Version requirement for CNAME tokens:** Creating a CNAME token requires ossutil 1.7.13 or later.
    
-   **Binary name:** ossutil 1.6.16 and later use `ossutil` as the binary name on all operating systems. Earlier versions require an OS-specific binary name. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   **Required permissions:** Each operation requires a specific Resource Access Management (RAM) permission. Grant only the permissions needed. For instructions on assigning these permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
    **Operation**
    
    **Required permission**
    
    Create a CNAME token
    
    `oss:CreateCnameToken`
    
    Query a CNAME token
    
    `oss:GetCnameToken`
    
    Add CNAME configurations
    
    `oss:PutCname`
    
    Query CNAME configurations
    
    `oss:ListCname`
    
    Delete CNAME configurations
    
    `oss:DeleteCname`
    

## How it works

Binding a custom domain name to a bucket follows a mandatory three-step sequence:

1.  **Create a CNAME token** — OSS generates a token tied to your domain name. The token proves you intend to bind that domain to this specific bucket.
    
2.  **Add a TXT record to your DNS** — Add the token value as a TXT record at your DNS registrar. OSS verifies the record to confirm you own the domain.
    
3.  **Add CNAME configurations** — After DNS verification succeeds, bind the custom domain name to the bucket.
    

**Important**

Complete steps 1 and 2 before running step 3.

For step 2 (adding the TXT record), see [Map a custom domain name to the default domain name of a bucket](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#section-ehe-u96-ass).

## Create a CNAME token

**Note**

Requires ossutil 1.7.13 or later.

**Syntax**

```
ossutil bucket-cname --method put --item token oss://<bucketname> <domainname>
```

**Parameters**

**Parameter**

**Description**

`bucketname`

The name of the bucket to which the custom domain name maps

`domainname`

The custom domain name

**Example**

Create a CNAME token for `example.com` mapped to `examplebucket`:

```
ossutil bucket-cname --method put --item token oss://examplebucket example.com
```

Expected output:

```
<CnameToken>
 <Bucket>examplebucket</Bucket>
 <Cname>example.com</Cname>
 <Token>4db41c3ad0c4c4b690d4c17fb34e****</Token>
 <ExpireTime>Thu, 26 May 2022 19:14:12 GMT</ExpireTime>
</CnameToken>

0.270654(s) elapsed
```

After the CNAME token is created, you must add a TXT record. For more information, see [Map a custom domain name to the default domain name of a bucket](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#section-ehe-u96-ass).

## Query a CNAME token

**Syntax**

```
ossutil bucket-cname --method get --item token oss://<bucketname> <domainname> [local_xml_file]
```

Omit `local_xml_file` to display the token in the terminal. Specify a file path to save the token to a local file.

**Examples**

Display the CNAME token for `example.com` mapped to `examplebucket`:

```
ossutil bucket-cname --method get --item token oss://examplebucket example.com
```

Expected output:

```
<CnameToken>
 <Bucket>examplebucket</Bucket>
 <Cname>example.com</Cname>
 <Token>fbf997e8a2d48cb2177ed25180ee****</Token>
 <ExpireTime>Thu, 26 May 2022 19:53:19 GMT</ExpireTime>
</CnameToken>

0.144356(s) elapsed
```

Save the token to a local file:

```
ossutil bucket-cname --method get --item token oss://examplebucket example.com local.xml
```

The file `local.xml` contains:

```
<CnameToken>
 <Bucket>examplebucket</Bucket>
 <Cname>example.com</Cname>
 <Token>fbf997e8a2d48cb2177ed25180ee****</Token>
 <ExpireTime>Thu, 26 May 2022 19:53:19 GMT</ExpireTime>
</CnameToken>
```

## Add CNAME configurations

**Important**

Complete [Create a CNAME token](#section-05s-hvb-ina) and add the token as a TXT record at your DNS registrar before running this command.

**Syntax**

```
ossutil bucket-cname --method put oss://<bucketname> <domainname>
```

**Example**

Bind `example.com` to `examplebucket`:

```
ossutil bucket-cname --method put oss://examplebucket example.com
```

Expected output:

```
0.227834(s) elapsed
```

A timing-only response with no error indicates success. The custom domain name is now bound to the bucket.

## Query CNAME configurations

**Syntax**

```
ossutil bucket-cname --method get oss://<bucketname> [local_xml_file]
```

Omit `local_xml_file` to display configurations in the terminal. Specify a file path to save them to a local file.

**Examples**

Display all CNAME configurations for `examplebucket`:

```
ossutil bucket-cname --method get oss://examplebucket
```

Expected output (no SSL certificate associated):

```
<?xml version="1.0" encoding="UTF-8"?>
<ListCnameResult>
  <Bucket>examplebucket</Bucket>
  <Owner>148562088256****</Owner>
  <Cname>
    <Domain>example.com</Domain>
    <LastModified>2021-08-26T07:25:12.000Z</LastModified>
    <Status>Enabled</Status>
    <IsPurgeCdnCache>true</IsPurgeCdnCache>
  </Cname>
  <Cname>
    <Domain>example.org</Domain>
    <LastModified>2021-08-26T07:25:26.000Z</LastModified>
    <Status>Enabled</Status>
    <IsPurgeCdnCache>true</IsPurgeCdnCache>
  </Cname>
</ListCnameResult>

0.164039(s) elapsed
```

The output lists all custom domain names bound to the bucket. A `<Status>` value of `Enabled` means the domain is active.

Save CNAME configurations to a local file:

```
ossutil bucket-cname --method get oss://examplebucket local.xml
```

If an SSL certificate is associated, the response includes a `<Certificate>` block:

```
<?xml version="1.0" encoding="UTF-8"?>
<ListCnameResult>
  <Bucket>examplebucket</Bucket>
  <Owner>1506925210***</Owner>
  <Cname>
    <Domain>example.com</Domain>
    <LastModified>2023-02-27T10:38:13.000Z</LastModified>
    <Status>Enabled</Status>
    <IsPurgeCdnCache>false</IsPurgeCdnCache>
    <Certificate>
      <Type>CAS</Type>
      <CertId>927****-cn-hangzhou</CertId>
      <Status>Enabled</Status>
      <CreationDate>Mon, 27 Feb 2023 06:51:34 GMT</CreationDate>
      <Fingerprint>60:AA:C3:2C:D4:70:54:3D:02:DB:B5:AA:E7:0E:E2:B9:0B:5A:C8:CC</Fingerprint>
      <ValidStartDate>Feb 10 00:00:00 2023 GMT</ValidStartDate>
      <ValidEndDate>Feb 10 23:59:59 2024 GMT</ValidEndDate>
    </Certificate>
  </Cname>
</ListCnameResult>
```

If no SSL certificate is associated, the response contains only the CNAME entries without a `<Certificate>` block:

```
<?xml version="1.0" encoding="UTF-8"?>
<ListCnameResult>
  <Bucket>examplebucket</Bucket>
  <Owner>148562088256****</Owner>
  <Cname>
    <Domain>example.com</Domain>
    <LastModified>2021-08-26T07:25:12.000Z</LastModified>
    <Status>Enabled</Status>
    <IsPurgeCdnCache>true</IsPurgeCdnCache>
  </Cname>
  <Cname>
    <Domain>example.org</Domain>
    <LastModified>2021-08-26T07:25:26.000Z</LastModified>
    <Status>Enabled</Status>
    <IsPurgeCdnCache>true</IsPurgeCdnCache>
  </Cname>
</ListCnameResult>
```

## Add a CNAME record and associate an SSL certificate

**Syntax**

```
ossutil bucket-cname --method put --item certificate oss://<bucketname> <local_xml_file>
```

**Example**

1.  Create a local XML configuration file (for example, `local.xml`) with the certificate details:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <BucketCnameConfiguration>
         <Cname>
           <Domain>example.com</Domain>
           <CertificateConfiguration>
             <CertId>493****-cn-hangzhou</CertId>
             <Certificate>-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC **** -----END CERTIFICATE-----</Certificate>
             <PrivateKey>-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC **** -----END CERTIFICATE-----</PrivateKey>
             <PreviousCertId>493****-cn-hangzhou</PreviousCertId>
             <Force>true</Force>
           </CertificateConfiguration>
         </Cname>
       </BucketCnameConfiguration>
    ```
    
2.  Run the command to add the CNAME record and associate the certificate:
    
    ```
       ossutil bucket-cname --method put --item certificate oss://examplebucket local.xml
    ```
    

## Disassociate an SSL certificate

**Syntax**

```
ossutil bucket-cname --method put --item certificate oss://<bucketname> <local_xml_file>
```

**Example**

1.  Create a local XML configuration file (for example, `local.xml`) with `<DeleteCertificate>True</DeleteCertificate>`:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <BucketCnameConfiguration>
         <Cname>
           <Domain>example.com</Domain>
           <CertificateConfiguration>
             <DeleteCertificate>True</DeleteCertificate>
           </CertificateConfiguration>
         </Cname>
       </BucketCnameConfiguration>
    ```
    
2.  Run the command to disassociate the certificate:
    
    ```
       ossutil bucket-cname --method put --item certificate oss://examplebucket local.xml
    ```
    

## Delete CNAME configurations

**Syntax**

```
ossutil bucket-cname --method delete oss://<bucketname> <domainname>
```

**Example**

Remove the CNAME configuration for `example.com` from `examplebucket`:

```
ossutil bucket-cname --method delete oss://examplebucket example.com
```

Expected output:

```
0.227389(s) elapsed
```

A timing-only response with no error indicates that the custom domain name has been unbound from the bucket.

## Common options

To target a bucket in a different region or under a different Alibaba Cloud account, append the following options:

**Option**

**Description**

`-e <endpoint>`

Endpoint of the region where the bucket is located

`-i <AccessKeyID>`

AccessKey ID of the target account

`-k <AccessKeySecret>`

AccessKey secret of the target account

**Example**

Add CNAME configurations for `testbucket` in the China (Hangzhou) region under a different account:

```
ossutil bucket-cname --method put oss://testbucket example.org -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
