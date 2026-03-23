Elastic Container Instance can encrypt the temporary storage space of a container instance, protecting sensitive data at rest and helping meet compliance requirements. Encryption uses the AES-256 algorithm with service keys (default keys) managed by Key Management Service (KMS). When encryption is enabled, all data written to the temporary storage space is automatically encrypted and decrypted on read.

## How it works

Each elastic container instance provides 30 GiB of temporary storage space by default. This space stores container images used to launch instances and data generated during runtime. You can increase the storage size based on your requirements.

To encrypt the temporary storage space, add an annotation to the pod metadata. Elastic Container Instance then uses AES-256 encryption with KMS service keys to protect all data on the storage space. Service keys are free of charge.

## Prerequisites

Before you begin, make sure that you have:

-   An activated KMS instance. For more information, see [Purchase a dedicated KMS instance](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255)
    

**Note**

After you activate KMS, the system automatically creates and manages service keys. Service keys are free of charge.

## Enable encryption

Add the following annotation to your pod metadata to encrypt the temporary storage space:

**Annotation**

**Value**

**Description**

`k8s.aliyun.com/eci-ephemeral-storage-options`

`"{\"encrypted\":\"true\"}"`

Enables AES-256 encryption for the temporary storage space

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   Elastic Container Instance-related annotations are only applied when a pod is created. Adding or modifying these annotations on an existing pod will have no effect.
    

### Example: Deployment with encrypted storage

The following Deployment manifest enables encryption on the temporary storage space:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kms-test
  labels:
    app: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: test
  template:
    metadata:
      name: kms-test
      labels:
        app: test
        alibabacloud.com/eci: "true"       # Schedule the pod on Elastic Container Instance
      annotations:
        k8s.aliyun.com/eci-ephemeral-storage-options: "{\"encrypted\":\"true\"}"  # Encrypt the temporary storage space
    spec:
      containers:
      - name: test
        image: registry-vpc.cn-beijing.aliyuncs.com/eci_open/nginx:1.4.2
```
