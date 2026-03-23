When you create Elastic Compute Service (ECS) instances that run an Alibaba Cloud Linux 3 operating system in the ECS console, Transmit Packet Steering (XPS) is automatically enabled for the instances. If XPS is disabled for an ECS instance that runs an Alibaba Cloud Linux 3 operating system, you can perform the operations described in this topic to configure XPS for the instance.

## **XPS overview**

XPS is a mechanism that automatically selects a transmit queue when data packets are transmitted on a multi-queue network interface (NIC). XPS creates mappings between transmit queues and CPU sets. When a CPU is used to transmit data packets, the kernel automatically selects the transmit queue mapped to the CPU to transmit the data packets. The kernel records the transmit queue selected for the first packet of a data flow and uses the queue to transmit subsequent packets in the flow. This transmission mechanism reduces the computational overhead used to select a transmit queue for each packet.

XPS provides the following benefits:

-   XPS alleviates the competition among different CPUs for the same transmit queue. This reduces lock conflicts when the queue is used to transmit data and enhances the transmission efficiency of data packets.
    
-   XPS creates mappings between transmit queues and CPUs that are consistent with the affinities of virtio NICs to which the transmit queues are bound. This reduces the possibility of cache misses during packet transmission and cache misses caused by lock contention and improves network transmission performance.
    

## **Configure XPS**

1.  Connect to the ECS instance for which you want to configure XPS.
    
    For more information, see [Connect to a Linux instance by using a password or key](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the following command to check whether XPS is configured for the ECS instance. Make sure that CONFIG\_XPS is enabled in the kernel.
    
    In this example, the eth0 NIC is used.
    
    ```
    cat /sys/class/net/eth0/queues/tx-*/xps_cpus
    ```
    
    If an all-zero command output is returned as shown in the following figure, XPS is disabled for the ECS instance. In this case, proceed to subsequent operations to configure XPS.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8552351171/p718949.png)
    
3.  Configure XPS settings for all virtio NICs based on the number of CPUs and transmit queues available for the NICs. Make sure that the XPS settings comply with the policy used by the kernel to allocate CPUs to each transmit queue.
    
    1.  Run the following command to create a file that is used to configure XPS settings in the current directory. For example, create the `xps_config.py` file.
        
        ```
        vim xps_config.py
        ```
        
    2.  Press the `I` key to enter the Insert mode and copy the following content to the `xps_config.py` file:
        
        ```
        # encoding: utf-8
        # This implements the default configuration of kernel XPS.
        # Note: The configuration of this script only applies to virtio-net nics.
        
        import os
        import multiprocessing
        
        def setup_xps(dev):
            cpu_count = multiprocessing.cpu_count()
            txq_dir = "/sys/class/net/{0}/queues/".format(dev)
            queue_count = len([f for f in os.listdir(txq_dir) if f.startswith("tx-")])
            if queue_count <= 1:
                print("The number of txq: {0} <= 1, exit...".format(queue_count))
                return
        
            group, stragglers = divmod(cpu_count, queue_count)
            stragglers = 0 if group == 0 else stragglers
            group = max(group, 1)
            cpu = 0
            queue_final_bitmap = ""
        
            # We do not need to care about numa node information
            # So we must pay attention to the perfermance in multiple numa node scene!!
            for i in range(queue_count):
                group_size = (group + 1) if i < stragglers else group
                queue_per_bitmap = 0
                for j in range(group_size):
                    cpu_bitmap = 1 << cpu
                    cpu += 1
                    queue_per_bitmap |= cpu_bitmap
                    cpu = 0 if cpu >= cpu_count else cpu
                    queue_final_bitmap = hex(queue_per_bitmap)[2:]
                    if "L" in queue_final_bitmap:
                            queue_final_bitmap = queue_final_bitmap.replace("L", "")
        
                result_bitmap = outputSeg(queue_final_bitmap)
                eth_txq_path = "/sys/class/net/{0}/queues/tx-{1}/xps_cpus".format(dev, i)
                with open(eth_txq_path, "w") as fxps:
                    fxps.write(result_bitmap)
        
            print("{0}'s XPS configuration done.".format(dev))
        
        def outputSeg(bitmap):
            result = ""
            count = 0
            for char in reversed(bitmap):
                if count % 8 == 0 and count != 0:
                    result = "," + result
                result = char + result
                count += 1
            return result
        
        def process_devs():
            eth_dir = "/sys/class/net/"
            eth_folders = [f for f in os.listdir(eth_dir) if os.path.isdir(os.path.join(eth_dir, f)) and f.startswith("eth")]
            for eth_folder in eth_folders:
                eth = eth_folder.split("/")[-1]
                setup_xps(eth)
        
        if __name__ == '__main__':
            process_devs()
        ```
        
    3.  Press the `Esc` key and enter `**:wq**` to save and close the file.
        
4.  Run the following command to configure XPS:
    
    ```
    sudo python3 xps_config.py
    ```
    
5.  (Optional) Run the following command to check whether the XPS configuration is complete.
    
    In this example, 32 CPUs on the ECS instance are mapped to 8 transmit queues on the eth0 NIC.
    
    ```
    cat /sys/class/net/eth0/queues/tx-*/xps_cpus
    ```
    
    The following command output indicates that XPS is configured. The command output varies based on the number of CPUs or queues.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8552351171/p718951.png)
    

## **Impacts of the configuration**

The purpose of configuring XPS is to improve network performance. However, network performance may be affected after you configure XPS. If XPS affects your network performance, run the following command to clear XPS settings. In this example, the eth0 NIC is used.

```
sudo sh -c 'for txq in /sys/class/net/eth0/queues/tx-*; do echo 0 > $txq/xps_cpus; done'
```
