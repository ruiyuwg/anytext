You can use Alibaba Cloud SDKs to initiate signature-verified RESTful API requests to Object Storage Service (OSS). This way, the SDKs automatically generate signatures for the requests. If you initiate RESTful API requests to OSS without using Alibaba Cloud SDKs, you must write code to calculate signatures and add the signatures to the requests.

## Use the AccessKey pair of a RAM user to initiate a request to OSS

The following procedure shows how to use the AccessKey pair of a RAM user to initiate a request to OSS:

1.  Use the AccessKey pair of a RAM user to initialize an OSSClient instance.
    
2.  Call the method that is provided by OSSClient to initiate a request to OSS.
    
3.  The OSSClient instance uses the AccessKey pair of the RAM user to generate a signature and adds the signature to the request.
    

For more information, see [Use the AccessKey pair of a RAM user to initiate a request](/help/en/oss/developer-reference/use-the-accesskey-pair-of-a-ram-user-to-initiate-a-request#task-2158783).

## Use temporary access credentials obtained from STS to initiate a request to OSS

RAM users can use Alibaba Cloud SDKs to obtain temporary access credentials from STS, and use the temporary access credentials to access OSS resources. The temporary access credentials become invalid after the specified validity period expires.

The following procedure shows how to use temporary access credentials to initiate a request to OSS:

1.  Use the AccessKey pair of a RAM user to initialize an STSClient instance.
    
2.  Call the AssumeRole method that is provided by STS to obtain temporary access credentials of the RAM role that is attached with a specified policy.
    
3.  Use the temporary access credentials to initialize an OSSClient instance.
    
4.  Call the method that is provided by OSSClient to initiate a request to OSS.
    
5.  The OSSClient instance uses the temporary access credentials that are obtained from STS to generate a signature and adds the signature to the request.
    

For more information, see [Use temporary access credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb).

## Alibaba Cloud SDKs

Alibaba Cloud provides SDKs in the following programming languages:

-   [Java](/help/en/oss/developer-reference/oss-java-sdk/#concept-32008-zh)
    
-   [PHP](/help/en/oss/developer-reference/preface-3/#concept-32099-zh)
    
-   [Node.js](/help/en/oss/installation-7#concept-32068-zh)
    
-   [Python](/help/en/oss/developer-reference/python-sdk-v1/#concept-32026-zh)
    
-   [Browser.js](/help/en/oss/developer-reference/installation#concept-64041-zh)
    
-   [.NET](/help/en/oss/developer-reference/preface-4/#concept-32085-zh)
    
-   [Android](/help/en/oss/developer-reference/introduction/#concept-32042-zh)
    
-   [Go](/help/en/oss/introduction-3#concept-32144-zh)
    
-   [iOS](/help/en/oss/developer-reference/preface-5/#concept-32055-zh)
    
-   [C++](/help/en/oss/developer-reference/introduction-4#concept-hcq-cgl-ngb)
    
-   [C](/help/en/oss/developer-reference/preface-2/#concept-32131-zh)
    
-   [Ruby](/help/en/oss/developer-reference/installation-5#concept-32114-zh)
