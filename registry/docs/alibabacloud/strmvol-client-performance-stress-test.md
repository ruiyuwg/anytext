This topic evaluates the performance of strmvol volumes from two dimensions: metadata index building efficiency and data reading performance. It covers core metrics such as file read and write speeds and stability in high concurrency scenarios to help you better select and use strmvol volumes.

**Important**

The following test data are theoretical values obtained in a test environment. The actual values depend on your operating environment.

## **Metadata index building**

For a strmvol volume, if no pod is mounting the volume on a node, the first pod that mounts the volume triggers the node mount initialization process. During mounting, the system first creates related virtual block devices and builds metadata indexes for OSS files. This phase consumes some node resources, and the pod remains in the ContainerCreating state.

In this test, the node specification is ecs.g8i.2xlarge and the region is cn-beijing.

**Number of files under the OSS mount target**

**erofs (Alibaba Cloud Linux 3)**

**ext4 (non-Alibaba Cloud Linux 3)**

**Building time**

**Memory peak**

**CPU utilization peak**

**Building time**

**Memory peak**

**CPU utilization peak**

100000 (100 thousand)

4.09s

125 MB

113%

6.96s

150 MB

116%

1000000 (1 million)

11.07s

871 MB

201%

35.37s

512 MB

192%

10000000 (10 million)

130.59s

8.7 GB

247%

407.00s

2.4 GB

253%

## **Data reading performance test**

#### **Comparison of data reading performance of strmvol volumes with different resourceLimit parameters**

In this test, the node specification is ecs.g7nex.32xlarge, the operating system is Alibaba Cloud Linux 3, and the region is cn-beijing.

-   In this example, the random read scenario for small files (100 KB image files) is used and the direct mode is enabled.
    
    Different resourceLimit settings affect only the performance upper limit. When the concurrency does not reach the upper limit, the performance is similar.
    
    **Note**
    
    The notes in the following table record the concurrency at which performance reaches the upper limit for different resourceLimit configurations. For operating systems other than Alibaba Cloud Linux 3, volumes with different resourceLimit parameters reach the read performance upper limit when performing 64 concurrent read operations.
    
    **Test scenario**
    
    **4 concurrent reads**
    
    **8 concurrent reads**
    
    **16 concurrent reads**
    
    **32 concurrent reads**
    
    **64 concurrent reads**
    
    **128 concurrent reads**
    
    **256 concurrent reads**
    
    **512 concurrent reads**
    
    **1024 concurrent reads**
    
    Performance
    
    11.53 MB/s
    
    101.06 img/s
    
    21.99 MB/s
    
    192.62 img/s
    
    48.01 MB/s
    
    417.95 img/s
    
    93.90 MB/s
    
    817.45 img/s
    
    180.88 MB/s
    
    1577.12 img/s
    
    312.82 MB/s
    
    2727.48 img/s
    
    513.54 MB/s
    
    4475.20 img/s
    
    974.47 MB/s
    
    8491.96 img/s
    
    1306.61 MB/s
    
    11386.33 img/s
    
    Note
    
    None
    
    None
    
    None
    
    None
    
    Upper limit of performance for non-Alibaba Cloud Linux 3 systems
    
    2C4G mode performance upper limit
    
    4C8G mode performance upper limit
    
    8C16G mode performance upper limit
    
    16C32G mode performance upper limit
    
-   In this example, scenarios involving the sequential reading of large files in a single stream and sequential reading of small files (100 KB image files) are used and the direct mode is disabled.
    
    **Resource limit**
    
    **MB/s for sequential loading of 256 concurrent requests**
    
    **MB/s for single-stream reading of large files**
    
    2c4g
    
    349.89 MB/s
    
    2742.05 img/s
    
    216
    
    4c8g
    
    789.52 MB/s
    
    6187.34 img/s
    
    342
    
    8c16g
    
    1446.17 MB/s
    
    11333.37 img/s
    
    548
    
    16c32g
    
    2383.38 MB/s
    
    18678.12 img/s
    
    926
    
    **Note**
    
    The preset value ensures optimal performance for all data operations in general read-only scenarios.
    
    In the single-stream large file reading scenario, the 8c16g mode achieves a throughput of 2.5 to 2.7 GB/s. If your business has specific data reading characteristics, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request assistance.
    

#### **Comparison of data reading performance across different solutions**

In this test, the node specification is ecs.g8i.2xlarge, the operating system is Alibaba Cloud Linux 3, and the region is cn-beijing.

Test scenario:

-   Use default configurations for ossfs. [Direct read is enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#jghXN) (memory pool is limited to 1 GB by default).
    
-   The resource limits for strmvol are 2c4g and 4c8g.
    
-   The direct mode is enabled only in scenarios where small files (128 KB text files) are randomly loaded.
    

**Test scenario**

**MB/s for 4-thread concurrent random loading**

**MB/s for 4-thread concurrent sequential loading**

**MB/s for single-stream reading of large files**

Default configurations

8.4

8.4

179.2

Enable direct read and set the memory size to 1 GB

3.4

3.4

293.4

strmvol 2c4g

24.9

40.0

196.8

strmvol 4c8g

95.6

147.1

334.5
