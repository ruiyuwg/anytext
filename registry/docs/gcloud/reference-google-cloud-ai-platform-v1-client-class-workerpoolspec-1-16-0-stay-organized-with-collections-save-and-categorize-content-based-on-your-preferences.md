-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class WorkerPoolSpec (1.16.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class WorkerPoolSpec.

Represents the spec of a worker pool in a job.

Generated from protobuf message `google.cloud.aiplatform.v1.WorkerPoolSpec`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ container_spec`

`[ContainerSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.ContainerSpec)`  

The custom container task.

`↳ python_package_spec`

`[PythonPackageSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.PythonPackageSpec)`  

The Python packaged task.

`↳ machine_spec`

`[MachineSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.MachineSpec)`  

Optional. Immutable. The specification of a single machine.

`↳ replica_count`

`int|string`  

Optional. The number of worker replicas to use for this worker pool.

`↳ nfs_mounts`

`array<[NfsMount](/php/docs/reference/cloud-ai-platform/1.16.0/V1.NfsMount)>`  

Optional. List of NFS mount spec.

`↳ disk_spec`

`[DiskSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.DiskSpec)`  

Disk spec.

### getContainerSpec

The custom container task.

**Returns**

**Type**

**Description**

`[ContainerSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.ContainerSpec)|null`

### hasContainerSpec

### setContainerSpec

The custom container task.

**Parameter**

**Name**

**Description**

`var`

`[ContainerSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.ContainerSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getPythonPackageSpec

The Python packaged task.

**Returns**

**Type**

**Description**

`[PythonPackageSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.PythonPackageSpec)|null`

### hasPythonPackageSpec

### setPythonPackageSpec

The Python packaged task.

**Parameter**

**Name**

**Description**

`var`

`[PythonPackageSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.PythonPackageSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getMachineSpec

Optional. Immutable. The specification of a single machine.

**Returns**

**Type**

**Description**

`[MachineSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.MachineSpec)|null`

### hasMachineSpec

### clearMachineSpec

### setMachineSpec

Optional. Immutable. The specification of a single machine.

**Parameter**

**Name**

**Description**

`var`

`[MachineSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.MachineSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getReplicaCount

Optional. The number of worker replicas to use for this worker pool.

**Returns**

**Type**

**Description**

`int|string`

### setReplicaCount

Optional. The number of worker replicas to use for this worker pool.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

### getNfsMounts

Optional. List of NFS mount spec.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setNfsMounts

Optional. List of NFS mount spec.

**Parameter**

**Name**

**Description**

`var`

`array<[NfsMount](/php/docs/reference/cloud-ai-platform/1.16.0/V1.NfsMount)>`  

**Returns**

**Type**

**Description**

`$this`

### getDiskSpec

Disk spec.

**Returns**

**Type**

**Description**

`[DiskSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.DiskSpec)|null`

### hasDiskSpec

### clearDiskSpec

### setDiskSpec

Disk spec.

**Parameter**

**Name**

**Description**

`var`

`[DiskSpec](/php/docs/reference/cloud-ai-platform/1.16.0/V1.DiskSpec)`  

**Returns**

**Type**

**Description**

`$this`

### getTask

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
