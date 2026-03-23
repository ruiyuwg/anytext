LogClient is an SDK client that you can use to access Simple Log Service. It provides various methods for you to create a project, create a Logstore, write logs, and read logs. To use Simple Log Service SDK for Python to initiate a request, you must initialize a LogClient instance and modify the default settings of the LogClient instance based on your business requirements.

## Prerequisites

-   Simple Log Service SDK for Python is installed. For more information, see [Install Simple Log Service SDK for Python](/help/en/sls/developer-reference/install-the-log-service-python-sdk).
    
-   The required access credentials are configured. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   The required endpoint is obtained.
    
    An endpoint is used to access an Alibaba Cloud service. In most cases, an endpoint is a URL. An endpoint specifies information about a service, such as the access protocol, hostname, port, and path. Clients can use the information to access the service. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance). Simple Log Service supports public endpoints, virtual private cloud (VPC) endpoints, and acceleration endpoints.
    
    -   **Public endpoints**: If data is pulled over a public Simple Log Service endpoint, read traffic over the Internet is generated. For more information about billing, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode) and [Billable items of pay-by-feature](/help/en/sls/billable-items). For more information about endpoints, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
        
    -   **VPC endpoints**: If you want to access Simple Log Service from other Alibaba Cloud services that reside in the same region as your project, we recommend that you use a VPC endpoint. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
        
    -   **Acceleration** **endpoints**: If your server and Simple Log Service reside in different regions, such as in and outside China, network latency is high and transmission is unstable when data is transmitted over the Internet. In this case, you can use an acceleration endpoint. For more information, see [Use the transfer acceleration feature](/help/en/sls/transmission-acceleration).
        
    

## Initialize a LogClient instance

### **API operation**

```
class LogClient(object):
    """ Construct the LogClient with endpoint, accessKeyId, accessKey.

    :type endpoint: string
    :param endpoint: log service host name, for example, ch-hangzhou.log.aliyuncs.com or https://cn-beijing.log.aliyuncs.com

    :type accessKeyId: string
    :param accessKeyId: aliyun accessKeyId

    :type accessKey: string
    :param accessKey: aliyun accessKey
    """

    __version__ = API_VERSION
    Version = __version__

    def __init__(self, endpoint, accessKeyId=None, accessKey=None, securityToken=None, source=None,
                 auth_version=AUTH_VERSION_1, region='', credentials_provider=None):
```

### Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

endpoint

String

Yes

The endpoint. For more information, see [Prerequisites](#32e2374b2267o).

`cn-hangzhou.log.aliyuncs.com`

accessKeyId

String

Yes

-   If you use an AccessKey pair to configure access credentials, set this parameter to the AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user. The AccessKey ID is used to identify the user. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
    **Warning**
    
    The AccessKey pair of an Alibaba Cloud account has full permissions on resources. We recommend that you do not use the AccessKey pair of an Alibaba Cloud account to avoid risks caused by AccessKey pair leaks. We recommend that you use the AccessKey pair of a RAM user that is granted permissions based on the principle of least privilege.
    
-   If you use Security Token Service (STS) to configure access credentials, set this parameter to the value of the AccessKeyId parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    

LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

accessKey

String

Yes

-   If you use an AccessKey pair to configure access credentials, set this parameter to the AccessKey secret of your Alibaba Cloud account or RAM user. The AccessKey secret is used to verify your AccessKey ID. For more information, see [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   If you use STS to configure access credentials, set this parameter to the value of the AccessKeySecret parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    

yourAccessKeySecret

securityToken

String

No

-   This parameter is required only when you use STS to configure access credentials. Set this parameter to the value of the SecurityToken parameter below the Credentials parameter that is returned by the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#api-detail-21) operation.
    
-   Alibaba Cloud STS does not impose limits on the length of STS tokens. We recommend that you do not specify a maximum length for STS tokens. For more information about how to obtain an STS token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).
    

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

source

String

No

The source. If you do not configure this parameter, the IP address of your server is automatically used.

`10.105.214.**`

auth\_version

String

No

-   This parameter specifies the protocol version of authentication. Valid values: `AUTH_VERSION_1` and `AUTH_VERSION_4`. Default value: `AUTH_VERSION_1`.
    
-   We recommend that you set this parameter to `AUTH_VERSION_4`, which provides better security. If you use `AUTH_VERSION_4`, you must also configure the region parameter.
    

`AUTH_VERSION_1`

region

String

No

The region of the project. For more information about the supported regions of Simple Log Service, see [Supported regions](/help/en/sls/sls-supported-regions1).

`cn-hangzhou`

### **Examples**

## AccessKey pair-based initialization (AUTH\_VERSION\_4 for signing)

```
# Import the Simple Log Service SDK for Python package. 
from aliyun.log import *
from aliyun.log.auth import AUTH_VERSION_4

# If you obtain an AccessKey pair from environment variables, you must import an operating system (OS) library. 
import os

# Obtain an AccessKey ID and an AccessKey secret from environment variables.
access_key_id = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
access_key_secret = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')

# Specify a Simple Log Service endpoint.
endpoint = "yourEndpoint"

# Create a LogClient instance. In this example, use AUTH_VERSION_4 for signing and the China (Hangzhou) region.
client = LogClient(endpoint, access_key_id, access_key_secret, auth_version=AUTH_VERSION_4, region='cn-hangzhou')
```

## AccessKey pair-based initialization (AUTH\_VERSION\_1 for signing)

```
# Import the Simple Log Service SDK for Python package. 
from aliyun.log import *

# If you obtain an AccessKey pair from environment variables, you must import an OS library. 
import os

# Obtain an AccessKey ID and an AccessKey secret from environment variables.
access_key_id = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
access_key_secret = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')

# Specify a Simple Log Service endpoint.
endpoint = "yourEndpoint"

# Create a LogClient instance.
client = LogClient(endpoint, access_key_id, access_key_secret)
```

## STS-based initialization

```
# Import the Simple Log Service SDK for Python package. 
from aliyun.log import *

# If you obtain an AccessKey pair from environment variables, you must import an OS library. 
import os

# Obtain an AccessKey ID and an AccessKey secret from environment variables.
access_key_id = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
access_key_secret = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
securityToken = os.environ.get('ALIBABA_CLOUD_STS_TOKEN')
# Specify a Simple Log Service endpoint.
endpoint = "yourEndpoint"

# Create a LogClient instance.
client = LogClient(endpoint, access_key_id, access_key_secret, securityToken)
```

## References

-   After you initialize a LogClient instance, you can call Simple Log Service SDK for Python to create a project and write logs. For more information, see [Get started with Simple Log Service SDK for Python](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-python).
