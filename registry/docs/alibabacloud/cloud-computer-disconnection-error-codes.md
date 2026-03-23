When a cloud computer connection fails, times out, or disconnects unexpectedly, WUYING Terminal displays an error code. Use the table below to find your error code and follow the corresponding solution.

## Quick reference

**Error code**

**Category**

**Root cause summary**

[DesktopCrash](#DesktopCrash)

Cloud computer

Kernel dump (Core Dump)

[DesktopNetworkError](#DesktopNetworkError)

Cloud computer

Network anomaly on cloud computer

[DesktopCpuHighLoad](#DesktopCpuHighLoad)

Cloud computer

CPU utilization too high

[DesktopDiskHighLoad](#DesktopDiskHighLoad)

Cloud computer

System disk usage too high

[DesktopMemoryHighLoad](#DesktopMemoryHighLoad)

Cloud computer

Memory usage too high

[2003, 2022, 2023, 2024, 2025](#2003-2022-2023-2024-2025)

System operations

Shutdown, restart, or log off initiated

[2200](#2200)

Timeout

Service request timed out

[2201, 2202, 2212, 2220, 2230, 2703](#2201-2202-2212-2220-2230-2703)

Network

On-premises network exception

[2210](#2210)

Network

Device disconnected during hibernation

[2211](#2211)

Client process

WUYING Terminal client process exception

[2213](#2213)

Resource usage

High CPU or memory on cloud computer

[2214](#2214)

Resource usage

High CPU or memory on local device

[2501 - 2508](#2501-2502-2503-2504-2505-2506-2507-2508)

Streaming gateway

Client-to-gateway connection exception

[2509](#2509)

Streaming gateway

Gateway cannot detect asp-server

[2510](#2510)

Streaming gateway

Port 5912 listener not enabled

[2522](#2522)

Proxy

HTTP proxy configured on client

[2704, 2707](#2704-2707)

Streaming protocol

Protocol exception in cloud computer

[2708](#2708)

Client runtime

Client runtime exception

## Named error codes

These error codes indicate a problem detected on the cloud computer itself.

## **DesktopCrash**

#### **Root cause**

The cloud computer experienced a kernel dump (Core Dump) event, which caused the connection to fail or disconnect unexpectedly.

#### **Solution**

Restart the cloud computer and reconnect.

## **DesktopNetworkError**

#### **Root cause**

A network anomaly occurred on the cloud computer, interrupting the connection between the cloud environment and the management console.

#### **Solution**

Restart the cloud computer and reconnect.

## **DesktopCpuHighLoad**

#### **Root cause**

The cloud computer's CPU utilization is too high, causing a connection timeout.

#### **Solution**

1.  Reconnect to the cloud computer.
    
2.  If reconnection fails, restart the cloud computer and reconnect after the restart completes.
    

## **DesktopDiskHighLoad**

#### **Root cause**

The system disk usage on the cloud computer is too high, causing a connection timeout.

#### **Solution**

1.  Reconnect to the cloud computer.
    
2.  If reconnection fails, restart the cloud computer and reconnect after the restart completes.
    
3.  If restarting does not resolve the issue, contact your IT administrator to expand the system disk. For instructions, see [Increase the disk capacity](/help/en/wuying-workspace/user-guide/cloud-disk-scale-up).
    

## **DesktopMemoryHighLoad**

#### **Root cause**

The memory usage on the cloud computer is too high, causing a connection timeout.

#### **Solution**

1.  Reconnect to the cloud computer.
    
2.  If reconnection fails, restart the cloud computer and reconnect after the restart completes.
    

## 20XX series

## Error codes 2003, 2022, 2023, 2024, 2025

#### **Root cause**

The control system or cloud computer initiated a shutdown, restart, or log off operation. The cloud computer connection was terminated.

#### **Solution**

1.  If the cloud computer is in the stopped state, start it and reconnect.
    
2.  The administrator can send any remote command to the cloud computer from the Elastic Desktop Service (EDS) Enterprise console and check the results. For instructions, see [Send remote commands](/help/en/wuying-workspace/user-guide/send-remote-commands).
    
    -   If results are returned, reconnect to the cloud computer.
        
    -   If no results are returned, restart the cloud computer and reconnect.
        

## 22XX series

## Error code 2200

#### **Root cause**

A service request timed out. The cloud computer connection was terminated.

#### **Solution**

1.  Choose one of the following actions:
    
    -   If you have no unsaved data on the cloud computer, restart the cloud computer and reconnect.
        
    -   If you have unsaved data, wait a moment and then reconnect.
        
2.  Verify that your on-premises network can reach the ports required by the cloud computer. For the full list of required ports, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview). If your network cannot reach the required ports, contact your enterprise administrator to open them.
    

## Error codes 2201, 2202, 2212, 2220, 2230, 2703

#### **Root cause**

An exception occurred on the on-premises network. The cloud computer connection was terminated.

#### **Solution**

1.  Wait a moment and then reconnect to the cloud computer.
    
2.  Verify that your on-premises network can reach the ports required by the cloud computer. For the full list of required ports, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview). If your network cannot reach the required ports, contact your enterprise administrator to open them.
    

## Error code 2210

#### **Root cause**

The on-premises device disconnected from the on-premises network during hibernation hours. The cloud computer connection was terminated.

#### **Solution**

Make sure the on-premises device is connected to the network and reconnect to the cloud computer.

## Error code 2211

#### **Root cause**

A process exception occurred on a core WUYING Terminal client component. The cloud computer connection was terminated.

#### **Solution**

1.  Choose one of the following actions:
    
    -   If you have no unsaved data on the cloud computer, restart the cloud computer and reconnect.
        
    -   If you have unsaved data, wait a moment and then reconnect.
        
2.  For a Windows cloud computer, have the administrator send the following PowerShell command to the cloud computer from the console, then reconnect. For instructions, see [Send remote commands](/help/en/wuying-workspace/user-guide/send-remote-commands).
    
    ```
    taskkill /im spmonitor.exe -f
    ```
    
3.  Verify that your on-premises network can reach the ports required by the cloud computer. For the full list of required ports, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview). If your network cannot reach the required ports, contact your enterprise administrator to open them.
    

## Error code 2213

#### **Root cause**

The CPU usage or memory usage of the cloud computer was high. The cloud computer connection was terminated.

#### **Solution**

1.  If you have no unsaved data on the cloud computer, restart it and reconnect.
    
2.  For a Windows cloud computer, have the administrator send the following PowerShell commands from the console to identify processes with high resource usage. For instructions, see [Send remote commands](/help/en/wuying-workspace/user-guide/send-remote-commands).
    
    -   Query the top 20 processes by CPU usage:
        
        ```
        Get-Process | Sort-Object CPU -Descending | Select-Object -First 20 | Format-Table Name, CPU -AutoSize
        ```
        
    -   Query the top 20 processes by memory usage:
        
        ```
        Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 20 | Format-Table Id, Name, WorkingSet -AutoSize
        ```
        
3.  Send the following command to terminate the offending process. Replace `<ProcessName.exe>` with the actual process name from the query results.
    
    ```
    taskkill /im <ProcessName.exe> -f
    ```
    
4.  Reconnect to the cloud computer.
    

## Error code 2214

#### **Root cause**

The CPU usage or memory usage of the on-premises device running the WUYING Terminal client was high. The cloud computer connection was terminated.

#### **Solution**

1.  Restart the client and reconnect to the cloud computer.
    
2.  Update the client to the latest version and reconnect. For instructions, see [Update the client](/help/en/wtc/user-guide/configure-and-use-desktop-client#sc-update-client).
    
3.  If the issue persists, restart the on-premises device, log on to the client again, and reconnect.
    

## 25XX series

## Error codes 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508

#### **Root cause**

An exception occurred when the client connected to the streaming gateway. The cloud computer connection failed or was terminated.

#### **Solution**

Verify that your on-premises network can reach the ports required by the cloud computer. For the full list of required ports, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview). If your network cannot reach the required ports, contact your enterprise administrator to open them.

## Error code 2509

#### **Root cause**

The streaming gateway failed to detect the asp-server. The cloud computer connection failed or was terminated.

#### **Solution**

Check whether a firewall or VPN software is enabled in the cloud computer. If either is enabled, disable it and reconnect.

## Error code 2510

#### **Root cause**

The 5912 listener port was not enabled in the cloud computer. The streaming gateway failed to detect the asp-server, and the cloud computer connection failed or was terminated.

#### **Solution**

Restart the cloud computer and reconnect.

## Error code 2522

#### **Root cause**

An HTTP proxy was configured on the client. The cloud computer connection failed or was terminated.

#### **Solution**

Disable the HTTP proxy on the client and reconnect.

## 27XX series

## Error codes 2704, 2707

#### **Root cause**

An exception occurred on the streaming protocol in the cloud computer. The cloud computer connection failed or was terminated.

#### **Solution**

Restart the cloud computer and reconnect.

## Error code 2708

#### **Root cause**

An exception occurred during the running of the client. The cloud computer connection failed or was terminated.

#### **Solution**

1.  Restart the client and reconnect to the cloud computer.
    
2.  Update the client to the latest version and reconnect. For instructions, see [Update the client](/help/en/wtc/user-guide/configure-and-use-desktop-client#sc-update-client).
