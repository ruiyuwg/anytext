This topic describes the cause of and solution to the issue that the logic for collecting statistics on the system `load` is affected by the container resource statistics enhancement feature developed by Alibaba Cloud in Alibaba Cloud Linux 3 with kernel version `kernel-5.10.60-9.al8`. The container resource statistics enhancement feature collects statistics on the system load in containers in rich container scenarios.

## Problem description

If you run the `top` command in the operating system that does not have load but meets the following conditions, the displayed average load is always greater than 1:

-   Operating system: Alibaba Cloud Linux 3
    
-   Kernel version: kernel-5.10.60-9.al8
    

## Cause

Due to the statistical issues of the container resource statistics enhancement feature, errors occur in the statistical logic of the system `load`. As a result, the value of the system average `load` (`load averages`) is always greater than 1 when the operating system does not have load. This flaw only causes errors on the statistical logic of the system `load`. The system load does not increase and the features of the system are not affected.

## Solution

Run the following command to disable the container resource statistics enhancement feature.

**Note**

After you disable the container resource statistics enhancement feature, the statistics on the system load are properly displayed and the existing features of the system are unaffected.

```
sudo sh -c 'echo 0 > /proc/async_load_calc'
```
