A Resource Access Management (RAM) role is a virtual user that has specific permissions and can be assumed by Elastic Container Instance-based pods. This allows the pods to obtain corresponding permissions. This topic describes how to assign a RAM role to a pod. This way, applications on the pod can access APIs of other Alibaba Cloud services based on Security Token Service (STS) credentials.

## **Background information**

Applications deployed on pods can access APIs of other Alibaba Cloud services such as Object Storage Service (OSS), Virtual Private Cloud (VPC), and ApsaraDB RDS by using an AccessKey pair of an Alibaba Cloud account or a RAM user. To conveniently call API operations, some users write AccessKey pairs to pods, such as writing AccessKey pairs to configuration files. However, this practice may cause issues such as information leaks, increased maintenance complexity, and excessive permissions.

Instance RAM roles can prevent those problems. RAM roles eliminate the need to save AccessKey pairs in pods. If you want to modify permissions of the pods, you only need to modify the permissions of the RAM role that is assumed by the pods. This reduces the risk of AccessKey pair leaks. For more information about RAM roles, see [RAM role overview](/help/en/ram/user-guide/ram-role-overview).

## **Create a RAM role and grant permissions to the role**

1.  Create a RAM role. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).
    
    When you create the RAM role, select **Alibaba Cloud Service** as the trusted entity and **Elastic Compute Service** as the trusted service.
    
    ![RAM角色.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6856330961/p686560.png)
    
2.  Attach a permission policy to the RAM role.
    
    1.  Create a policy. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy).
        
    2.  Attach the policy to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
        
3.  (Optional) Authorize a RAM user to use the RAM role.
    
    If you want a RAM user to use the RAM role, make sure that the RAM user has the `ram:passRole` permission. The following code provides the details of the permission. ECIRamRoleTest is the name of the RAM role. The `ram:PassRole` permission of the RAM role is to be granted to the RAM user.
    
    ```
    {
       "Statement": [
        {
          "Effect": "Allow",
          "Action": "ram:PassRole",
          "Resource": "acs:ram:*:*:role/ECIRamRoleTest" 
        }
      ],
      "Version": "1"
    }                
    ```
    

## **Assign a RAM role to the pod**

When you create a pod, you can use the `k8s.aliyun.com/eci-ram-role-name` annotation to assign the RAM role to the pod. This way, the pod can assume the RAM role to access Alibaba Cloud services.

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Example:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: test
  template:
    metadata:
      name: test
      labels:
        app: test
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-ram-role-name : "${your_ram_role_name}"   # Assign the RAM role.
    spec:
      containers:
      - name: test
        image: registry.cn-shanghai.aliyuncs.com/eci_open/centos:7
        command: ["sleep"]
        args: ["3600"]
```

## Obtain an STS token

You can access the metadata URL in the pod to obtain STS tokens of the RAM role. STS tokens can be used to perform permissions and use resources of the RAM role. STS tokens are automatically and regularly updated.

```
curl http://100.100.100.200/latest/meta-data/ram/security-credentials/${your_ram_role_name}
```

Replace `${your_ram_role_name}` with the actual name of your RAM role. In this example, ECIRamRoleTest is used as the name of the RAM role. Sample command:

```
curl http://100.100.100.200/latest/meta-data/ram/security-credentials/ECIRamRoleTest
```

You can obtain the STS token in the command output. Example:

```
{
  "AccessKeyId" : "STS.******",
  "AccessKeySecret" : "******",
  "Expiration" : "2023-06-22T19:13:58Z",
  "SecurityToken" : "******",
  "LastUpdated" : "2023-06-22T13:13:58Z",
  "Code" : "Success"
}
```

## **Access Alibaba Cloud services based on the** STS token

The following example shows how to use SDK for Go to access Alibaba Cloud services by using an STS token. In this example, you can access an OSS bucket by using the STS token that you obtained and view all listed objects in the bucket.

**Note**

The following sample code is only used to demonstrate how to access Alibaba Cloud services by using STS tokens. In actual scenarios, write code based on your business requirements. For more information, see the SDK of the cloud service that you want to use.

```
package main

import (
	"encoding/json"
	"flag"
	"log"
	"os/exec"
	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

const (
	securityCredUrl = "http://100.100.100.200/latest/meta-data/ram/security-credentials/"
)

var (
	ossEndpoint   string
	ossBucketName string
)

func init() {
	flag.StringVar(&ossEndpoint, "endpoint", "oss-cn-hangzhou-internal.aliyuncs.com", "Please input oss endpoint, Recommended internal endpoint, eg: oss-cn-hangzhou-internal.aliyuncs.com")
	flag.StringVar(&ossBucketName, "bucket", "", "Please input oss bucket name")
}

type AssumedRoleUserCredentialsWithServiceIdentity struct {
	AccessKeyId     string `json:"AccessKeyId" xml:"AccessKeyId"`
	AccessKeySecret string `json:"AccessKeySecret" xml:"AccessKeySecret"`
	Expiration      string `json:"Expiration" xml:"Expiration"`
	SecurityToken   string `json:"SecurityToken" xml:"SecurityToken"`
	LastUpdated     string `json:"LastUpdated" xml:"LastUpdated"`
	Code            string `json:"Code" xml:"Code"`
}

func main() {
	flag.Parse()

	if ossEndpoint == "" {
		log.Fatal("Please input oss endpoint, eg: oss-cn-hangzhou-internal.aliyuncs.com")
	}
	if ossBucketName == "" {
		log.Fatal("Please input oss endpoint")
	}

	output, err := exec.Command("curl", securityCredUrl).Output()
	if err != nil {
		log.Fatalf("Failed to get ramrole name from metaserver: %s", err)
	}

	output, err = exec.Command("curl", securityCredUrl+string(output)).Output()
	if err != nil {
		log.Fatalf("Failed to get security credentials from metaserver: %s", err)
	}

	authServiceIdentity := new(AssumedRoleUserCredentialsWithServiceIdentity)
	if err := json.Unmarshal(output, authServiceIdentity); err != nil {
		log.Fatalf("Failed to Unmarshal to AssumedRoleUserCredentialsWithServiceIdentity: %s", err)
	}

	// Create an OSS client instance. If the OSS client is used in a production environment, you need to regularly update the OSS client to prevent the STS token from expiring and failure in access to Alibaba Cloud services.
	ossClient, err := oss.New(ossEndpoint, authServiceIdentity.AccessKeyId,
		authServiceIdentity.AccessKeySecret, oss.SecurityToken(authServiceIdentity.SecurityToken))
	if err != nil {
		log.Fatalf("Failed to new oss client: %s", err)
	}

	// Obtain a bucket.
	bucket, err := ossClient.Bucket(ossBucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket %q: %s", ossBucketName, err)
	}

	// List objects in the bucket.
	marker := ""
	for {
		lsRes, err := bucket.ListObjects(oss.Marker(marker))
		if err != nil {
			log.Fatalf("Failed to list object from bucket %q: %s", ossBucketName, err)
		}
		// Display the listed objects. By default, a maximum of 100 objects are returned at a time. 
		for _, object := range lsRes.Objects {
			log.Println("Bucket: ", object.Key)
		}
		if lsRes.IsTruncated {
			marker = lsRes.NextMarker
		} else {
			break
		}
	}
}
```
