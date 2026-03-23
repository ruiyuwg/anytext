PrivateLink establishes a secure, private connection between your virtual private cloud (VPC) and OSS, keeping all traffic on the Alibaba Cloud backbone network. It eliminates data security risks, network address conflicts, and operational complexity, giving you a secure, controlled path to cloud storage.

## How it works

PrivateLink provisions a dedicated **private endpoint** inside your VPC, routing traffic directly to OSS. Traffic stays on the Alibaba Cloud backbone network, and you gain source-IP-based access control and VPC flow log auditing. Unlike the standard OSS internal endpoint, PrivateLink provides **network-layer security isolation and fine-grained traffic control**. PrivateLink is suited for the following scenarios:

**Scenario**

**Standard internal endpoint**

**PrivateLink**

**Strict security and compliance requirements**

Exposes a shared entry point accessible to all VPCs; security relies on application-layer policies.

**Reduces attack surface.** The entry point lives inside your VPC — other VPCs cannot discover or reach it, and traffic is isolated at the network layer.

**Fine-grained network-layer access control**

Security groups cannot control OSS access; bucket policy is the only option.

**Supports security group binding.** Attach security group rules to the PrivateLink endpoint to control exactly which source IPs can reach OSS.

**Auditing all connection attempts**

OSS access logs only record successful requests; rejected network-layer attempts are not captured.

**Supports VPC flow logs.** Captures and audits all traffic targeting the endpoint, regardless of whether the connection succeeds.

**Hybrid cloud with potential IP conflicts**

Cloud services use the `100.64.0.0/10` block by default, which may conflict with on-premises network plans.

**Avoids IP conflicts.** The endpoint uses an IP from your VPC address space, fully respecting your custom IP plan and simplifying hybrid cloud routing.

## Supported regions

The following regions are supported after you apply through [technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex): China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), Hong Kong (China), Japan (Tokyo), South Korea (Seoul), Singapore, Indonesia (Jakarta), Thailand (Bangkok), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London).

## Configure and use PrivateLink

Create a PrivateLink endpoint to establish a private connection, then use it to securely access OSS from your VPC or on-premises data center.

### Create and verify the endpoint

Create an endpoint to establish a secure private connection between your VPC and OSS, then verify connectivity and OSS access from an ECS instance.

> Before you begin, ensure that you have [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx) . The verification steps also require an ECS instance. If you do not have one, see [Purchase an ECS instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard) to create a pay-as-you-go instance.

#### Step 1: Create the endpoint

1.  Go to the [VPC endpoint](https://vpc.console.alibabacloud.com/endpoint) page and click **Create Endpoint**. If this is your first time, follow the on-screen prompts to activate the PrivateLink service.
    
2.  Configure the following parameters. Leave all other settings at their defaults.
    
    -   **Region**: Select the region where your target OSS bucket resides, for example, China (Hangzhou).
        
    -   **Endpoint Name**: Enter a descriptive name, for example, `privatelink-oss`.
        
    -   **Endpoint Type**: Select **Interface Endpoint**.
        
    -   **Endpoint Service**: Select **Alibaba Cloud Service**, then select the OSS endpoint service from the list (the entry whose name ends with `oss`).
        
        **Note**
        
        If no OSS endpoint service appears in the list, contact [technical support](https://selfservims.console.alibabacloud.com/ticket/createIndex)[technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request activation.
        
    -   **VPC**: Select the VPC where you want to create the endpoint. If no VPC is available, click **Create VPC** to create one.
        
    -   **Security Groups**: Select the security group to bind to the endpoint. If no suitable security group exists, click **Create Security Group** to create one.
        
    -   **Zone and vSwitch**: Select the zone and vSwitch for the endpoint. If no vSwitch is available, click **Create vSwitch** to create one.
        
3.  Click **OK**. The system creates the endpoint automatically. On the endpoint details page, copy the **Domain Name of Endpoint Service** — you will use this domain name to access OSS.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3972550671/p1013664.png)
    

#### Step 2: Verify the endpoint

Run a connectivity test and download a file to confirm that the PrivateLink endpoint is correctly configured and fully functional.

-   **Verify connectivity**
    
    Use `ping` to test the endpoint domain name and confirm that DNS resolution and the network path are working correctly.
    
    ```
    ping -c 4 ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com
    ```
    
-   **Verify file download**
    
    From an ECS instance in the same region, use ossutil to download a file over the PrivateLink connection and confirm that data transfer works end-to-end.
    
    1.  [Install and configure ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/).
        
    2.  Use the endpoint domain name (for example, `ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com`) to access OSS. The following example downloads a file named `dest.jpg` from a bucket named `example-bucket`:
        
        ```
        ossutil cp oss://example-bucket/dest.jpg /tmp/ -e ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com --addressing-style path
        ```
        
        A successful download produces output similar to the following. The file is saved to the `/tmp` directory.
        
        ```
        Success: Total 1 object, size 134102 B, Download done:(1 files, 134102 B), avg 680.112 KiB/s
        
            0.193189(s) elapsed
        ```
        

### Strengthen VPC access security

After verifying the PrivateLink connection, configure a [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/)access policy to add another layer of access control. The following example restricts object downloads to requests originating from the VPC bound to your PrivateLink endpoint, combining network-layer and application-layer access control.

1.  Go to [Bucket list](https://oss.console.alibabacloud.com/bucket) and click your target bucket.
    
2.  In the left navigation pane, click **Permission Control** > **Bucket Policy**.
    
3.  Click **Authorize** and configure the following settings. Leave all other parameters at their defaults.
    
    -   **Authorized User**: Select **All Accounts (\*)**.
        
    -   **Authorized Operation**: Select **Advanced Settings**.
        
    -   **Effect**: Select **Reject**.
        
    -   **Actions**: Select **oss:GetObject**.
        
    -   **Condition**: Select **VPC ≠** and choose the VPC bound to your PrivateLink endpoint from the dropdown.
        
4.  Click **OK** to save the bucket policy.
    

### Connect local devices via SSL-VPN

SSL-VPN lets individual devices — such as developer workstations or mobile devices — connect to your VPC through an encrypted tunnel. Once connected, those devices can access OSS through the PrivateLink endpoint already configured in the VPC. This approach is well suited for remote work, development and testing, and emergency access scenarios.

#### Step 1: Set up the SSL-VPN gateway and client

Deploy an SSL-VPN gateway and complete the client configuration to establish an encrypted connection between your local device and the VPC. For detailed steps, see [Connect a client to a VPC](/help/en/vpn/sub-product-ssl-vpn/getting-started/connect-a-client-to-a-vpc).

#### Step 2: Verify PrivateLink access to OSS

Run a connectivity test and download a file to confirm that the PrivateLink connection is working correctly from the local device.

-   **Verify connectivity**
    
    Use `ping` to test the endpoint domain name and confirm that DNS resolution and the network path are working correctly.
    
    ```
    ping -c 4 ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com
    ```
    
-   **Verify file download**
    
    ## **ossutil**
    
    Use ossutil to perform an actual file operation and verify that data transfer through PrivateLink is fully functional.
    
    1.  [Install and configure ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/).
        
    2.  Use the endpoint domain name (for example, `ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com`) to access OSS. The following example downloads `dest.jpg` from `example-bucket`:
        
        ```
        ossutil cp oss://example-bucket/dest.jpg /tmp/ -e ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com --addressing-style path
        ```
        
        A successful download produces output similar to the following. The file is saved to the `/tmp` directory.
        
        ```
        Success: Total 1 object, size 134102 B, Download done:(1 files, 134102 B), avg 680.112 KiB/s
        
            0.193189(s) elapsed
        ```
        
    
    ## **SDK**
    
    SDK-based access better represents real production environments and supports complex business logic and exception handling. The following SDKs support accessing OSS through PrivateLink.
    
    ## **Java**
    
    When accessing OSS through PrivateLink, call `setSLDEnabled(true)` to enable path-style access. For standard internet access, set it to `setSLDEnabled(false)`.
    
    ```
    import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.GetObjectRequest;
        import java.io.File;
    
        /**
         * OSS PrivateLink access example
         * Demonstrates how to access OSS via PrivateLink and download a file
         */
        public class Test {
    
            public static void main(String[] args) throws Exception {
                // PrivateLink endpoint domain name
                String endpoint = "https://ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com";
    
                // Region corresponding to the endpoint, for example cn-hangzhou
                String region = "cn-hangzhou";
    
                // Obtain credentials from environment variables
                // Make sure OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET are set before running this example
                EnvironmentVariableCredentialsProvider credentialsProvider =
                        CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
    
                // Bucket name, for example example-bucket
                String bucketName = "example-bucket";
    
                // Full object path, excluding the bucket name
                String objectName = "dest.jpg";
    
                // Local file path to save the downloaded file
                String pathName = "dest.jpg";
    
                // Configure client parameters
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
    
                // Enable path-style access for PrivateLink (set to false for internet access via bucket domain)
                clientBuilderConfiguration.setSLDEnabled(true);
    
                // Use Signature Version 4
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
    
                // Create the OSS client
                OSS ossClient = OSSClientBuilder.create()
                        .endpoint(endpoint)
                        .credentialsProvider(credentialsProvider)
                        .clientConfiguration(clientBuilderConfiguration)
                        .region(region)
                        .build();
    
                try {
                    // Download the object to a local file
                    // Overwrites the file if it exists; creates it if it does not
                    // If no path is specified, the file is saved in the project directory
                    ossClient.getObject(new GetObjectRequest(bucketName, objectName), new File(pathName));
    
                } catch (OSSException oe) {
                    // The request reached OSS but was rejected
                    System.out.println("Caught an OSSException: the request reached OSS but was rejected.");
                    System.out.println("Error message: " + oe.getErrorMessage());
                    System.out.println("Error code: " + oe.getErrorCode());
                    System.out.println("Request ID: " + oe.getRequestId());
                    System.out.println("Host ID: " + oe.getHostId());
    
                } catch (ClientException ce) {
                    // The client could not communicate with OSS
                    System.out.println("Caught a ClientException: the client encountered a serious internal problem, " +
                            "such as a network failure.");
                    System.out.println("Error message: " + ce.getMessage());
    
                } finally {
                    // Release resources
                    if (ossClient != null) {
                        ossClient.shutdown();
                    }
                }
            }
        }
    ```
    
    ## **Python**
    
    When accessing OSS through PrivateLink, set `is_path_style=True` to enable path-style access.
    
    ```
    # -*- coding: utf-8 -*-
        """
        OSS PrivateLink access example
        Downloads a file from OSS through a PrivateLink private network connection
        """
    
        import oss2
        from oss2.credentials import EnvironmentVariableCredentialsProvider
    
        def main():
            """Download a file from OSS via PrivateLink."""
    
            # Configure credentials
            # Note: The Alibaba Cloud account AccessKey has full API access and carries high risk.
            # Use a RAM user for API access and routine operations. Create RAM users in the RAM console.
            auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
    
            # PrivateLink endpoint domain name
            endpoint = 'https://ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com'
    
            # Bucket name
            bucket_name = 'example-bucket'
    
            # Create a Bucket object
            # is_path_style=True enables path-style access, required for PrivateLink and similar scenarios
            bucket = oss2.Bucket(auth, endpoint, bucket_name, is_path_style=True)
    
            # Object path in OSS (excluding the bucket name)
            object_name = 'dest.jpg'
    
            # Local file path to save the downloaded file
            local_file_path = 'dest.jpg'
    
            # Download the object to a local file
            # Overwrites the file if it exists; creates it if it does not
            bucket.get_object_to_file(object_name, local_file_path)
    
            print(f"File downloaded successfully: {object_name} -> {local_file_path}")
    
        if __name__ == '__main__':
            main()
    ```
    
    ## **Go**
    
    When accessing OSS through PrivateLink, use `ForcePathStyle(true)` to enable path-style access.
    
    ```
    package main
    
        import (
        	"fmt"
        	"os"
    
        	"github.com/aliyun/aliyun-oss-go-sdk/oss"
        )
    
        const (
        	// PrivateLink endpoint domain name
        	endpoint = "https://ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com"
    
        	// Bucket name
        	bucketName = "example-bucket"
    
        	// Object path in OSS (excluding the bucket name)
        	objectName = "dest.jpg"
    
        	// Local file path to save the downloaded file
        	localFilePath = "dest.jpg"
        )
    
        func main() {
        	// Initialize the credentials provider
        	// Reads credentials from environment variables
        	// Make sure OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET are set before running this example
        	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
        	if err != nil {
        		fmt.Printf("Failed to initialize credentials provider: %v\n", err)
        		os.Exit(-1)
        	}
    
        	// Create the OSS client
        	// oss.ForcePathStyle(true) enables path-style access, required for PrivateLink and similar scenarios
        	client, err := oss.New(
        		endpoint,
        		"", // AccessKeyId is provided by the credentials provider
        		"", // AccessKeySecret is provided by the credentials provider
        		oss.SetCredentialsProvider(&provider),
        		oss.ForcePathStyle(true),
        	)
        	if err != nil {
        		fmt.Printf("Failed to create OSS client: %v\n", err)
        		os.Exit(-1)
        	}
    
        	// Get the bucket
        	bucket, err := client.Bucket(bucketName)
        	if err != nil {
        		fmt.Printf("Failed to get bucket: %v\n", err)
        		os.Exit(-1)
        	}
    
        	// Download the object to a local file
        	// Overwrites the file if it exists; creates it if it does not
        	// If no path is specified, the file is saved in the project directory
        	err = bucket.GetObjectToFile(objectName, localFilePath)
        	if err != nil {
        		fmt.Printf("Failed to download file: %v\n", err)
        		os.Exit(-1)
        	}
    
        	fmt.Printf("File downloaded successfully: %s -> %s\n", objectName, localFilePath)
        }
        
    ```
    
    ## **C++**
    
    When accessing OSS through PrivateLink, set `conf.isPathStyle = true` to enable path-style access.
    
    ```
    #include <alibabacloud/oss/OssClient.h>
        #include <memory>
        #include <fstream>
        #include <iostream>
    
        using namespace AlibabaCloud::OSS;
    
        int main(void)
        {
            // PrivateLink endpoint domain name
            std::string Endpoint = "https://ep-bp1i****************.oss.cn-hangzhou.privatelink.aliyuncs.com";
    
            // Bucket name
            std::string BucketName = "example-bucket";
    
            // Object path in OSS (excluding the bucket name)
            std::string ObjectName = "dest.jpg";
    
            // Local file path to save the downloaded file
            // Overwrites the file if it exists; creates it if it does not
            // If no path is specified, the file is saved in the project directory
            std::string FileNametoSave = "dest.jpg";
    
            // Initialize OSS SDK resources
            InitializeSdk();
    
            // Configure client parameters
            ClientConfiguration conf;
    
            // Obtain credentials from environment variables
            // Make sure OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET are set before running this example
            auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    
            // Enable path-style access for PrivateLink and similar scenarios
            conf.isPathStyle = true;
    
            // Create the OSS client
            OssClient client(Endpoint, credentialsProvider, conf);
    
            // Build the download request
            GetObjectRequest request(BucketName, ObjectName);
    
            // Set the response stream factory to write to a local file
            request.setResponseStreamFactory([=]() {
                return std::make_shared<std::fstream>(
                    FileNametoSave,
                    std::ios_base::out | std::ios_base::in | std::ios_base::trunc | std::ios_base::binary
                );
            });
    
            // Execute the download
            auto outcome = client.GetObject(request);
    
            // Handle the result
            if (outcome.isSuccess()) {
                std::cout << "File downloaded successfully. Size: "
                          << outcome.result().Metadata().ContentLength()
                          << " bytes" << std::endl;
                std::cout << "Saved to: " << FileNametoSave << std::endl;
            }
            else {
                // Error handling
                std::cout << "Download failed" << std::endl
                          << "Error code: " << outcome.error().Code() << std::endl
                          << "Error message: " << outcome.error().Message() << std::endl
                          << "Request ID: " << outcome.error().RequestId() << std::endl;
    
                // Release resources and return an error code
                ShutdownSdk();
                return -1;
            }
    
            // Release OSS SDK resources
            ShutdownSdk();
            return 0;
        }
    ```
    

### Connect on-premises data centers via Express Connect or VPN gateway

Enterprise data centers can connect to an Alibaba Cloud VPC through an Express Connect circuit or a VPN gateway, then use PrivateLink to access OSS over a private network. Express Connect delivers stable, guaranteed bandwidth; a VPN gateway provides a flexible encrypted connection. Both are suitable for large-scale production data transfer. For configuration details, see [Connect a VPC to a data center or another cloud](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud).

## Apply in production

#### Best practices

-   **Optimize security group rules**
    
    Configure [Security group rules](/help/en/ecs/user-guide/security-group-rules)following the principle of least privilege: open endpoint access ports only to the specific IP ranges that require access, and review security rules regularly. Precise source-IP and port controls keep access policies aligned with business requirements and prevent permission sprawl and unauthorized access.
    
-   **Monitor network connectivity**
    
    Enable [VPC flow logs](/help/en/vpc/vpc-flow-logs) and set up anomaly detection based on traffic patterns to monitor PrivateLink access behavior and data transfer in real time.
    
-   **Deploy across multiple zones**
    
    In production, deploy endpoints across multiple availability zones for high availability and fault tolerance. With load balancing or DNS round robin, traffic automatically shifts to healthy endpoints in other zones when one fails, keeping your service continuously available.
    

## Billing

PrivateLink is billed hourly based on actual usage. Charges include an instance fee and a data processing fee. The service consumer and the service provider can be different Alibaba Cloud accounts, and charges can be billed to a designated account. For details, see [Billing overview](/help/en/privatelink/product-overview/billing-description#concept-2021702).
