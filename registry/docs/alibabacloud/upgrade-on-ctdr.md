The Cloud Threat Detection and Response (CTDR) has been upgraded to version 2.0, allowing for seamless integration of standardized logs from third-party cloud providers and offline IDC security vendors. This upgrade also modifies the log fields.

## **Affected users**

Alibaba Cloud users who activated CTDR before and on April 3, 2025.

**Warning**

-   In multi-account setups, member accounts without CTDR orders will lose access to CTDR after the upgrade. To use CTDR, these accounts must purchase it separately.
    
-   The delegated administrator (DA) can still add logs from member accounts through the Integration Center - Multi-account Access feature, regardless of whether the member accounts purchased CTDR.
    
-   You must **upgrade each site separately** because the China site (aliyun.com) and the international site (alibabacloud.com) have separate data and tasks for CTDR.
    

## **Upgrade time**

-   The system will automatically upgrade all accounts on **October 15, 2025**.
    
-   You can also log on to the Security Center console **between June 30, 2025 (included) and October 15, 2025**, complete the **upgrade assessment** according to the upgrade guide**,** and click **Upgrade Now** to complete the self-service upgrade**.**
    

**Note**

If you need to extend the upgrade transition period due to special scenarios (such as business compatibility testing or device maintenance), submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex).

## **Impacts on legacy orders**

-   Affected scope: Subscription orders that only purchased CTDR log storage capacity before April 26, 2024 (included).
    
-   To enable CTDR 2.0 features, you need to activate **Log data to add** or **Log storage capacity**. After upgrading legacy orders, Log data to add will be automatically configured to ensure the normal operation of services without additional charges. However, there are limits on the added data. The formula for calculating the log data quota is as follows:
    
    Log data to add = CTDR log storage capacity/30 × 1.2 (compatibility coefficient), with the calculation result rounded up to the nearest multiple of 10.
    
    **Note**
    
    For example:
    
    Before upgrade: **Log storage capacity (GB/month) =** 3000 (GB/month).
    
    After upgrade: **Log storage capacity (GB/month) =** 3000 (**GB/month)**, **Log data to add (GB/day) =** 3000/30 × 1.2 = 120 **(GB/day).**
    
-   Orders after April 26, 2024 are not affected in terms of cost. The quotas for **Log data to add** and **Log storage capacity** will remain unchanged for those orders.
    

## **CTDR 1.0 vs 2.0**

CTDR features and logs and alert fields will be upgraded to version 2.0. For field changes, see [Standardized log field changes](#4ef50997ce9xr). Historical data delivered to Logstores will not be deleted and will keep the 1.0 structure. The differences between 1.0 and 2.0 are as follows:

**Feature**

**CTDR 1.0**

**CTDR 2.0**

**Service integration**

-   Designed around Alibaba Cloud's cloud-native services, CTDR 1.0 uses a service-to-service integration approach.
    
-   Supports logs from other cloud service providers and on-premises security vendors, with strict structural requirements for log integration.
    

-   Upgrades to **Integration Center**, enabling standardized log integration.
    
-   Supports logs from Alibaba Cloud cloud-native services, other cloud service providers, and on-premises security vendors, with two standardized log integration methods: "real-time consumption" and "scan query."
    

**Important**

-   Logs already integrated with CTDR 1.0 will remain intact.
    

**Rule management**

-   Features a graphical interface for configuring custom rules.
    

-   Upgrades to SQL syntax for custom rules, utilizing batch processing for threat detection and enabling historical data analysis.
    
-   Supports custom rules based on **playbooks**.
    

**Log management**

-   Utilizes a single Logstore for wide table storage, with all logs stored in the Logstore (cloud\_siem) of the project (cloud\_siem-data-Alibaba Cloud account-RegionID).
    
-   Does not support direct delivery of Security Center cloud-native audit logs; logs must be delivered after service integration.
    
-   Delivery is based on integrated vendors and services.
    

-   Comes with multiple standardized Logstores.
    
    **Important**
    
    After the upgrade, new logs will not be written to the V1.0 Logstore (cloud\_siem), but historical logs can still be queried. New logs will be directed to corresponding new Logstores based on service integration settings.
    
-   Alibaba Cloud Security Center logs are delivered directly to **Log Management**, independent of service integration policies, allowing you to enable or disable delivery as needed.
    
-   Logs integrated through "real-time consumption" will be automatically delivered if **Log Storage Capacity** is purchased. **Enabling or disabling delivery switch is not supported**.
    
-   CTDR 2.0 updates the standardized log fields. For field changes, see [Standardized log field changes](#4ef50997ce9xr).
    

**Multi-account Management**

-   Delegated administrator (DA) is bound as the global account administrator.
    
-   DA can switch between "global account view" and "current account view."
    

-   CTDR multi-account settings are now merged into Security Center multi-account management. DAs are set through Security Center.
    
-   In CTDR multi-account management scenarios, member account alert logs are integrated via the "multi-account integration settings" feature in the **Integration Center**.
    
-   View switching is no longer supported.
    

## **Discontinued logs**

After upgrading to CTDR 2.0, the following seven types of **Alibaba Cloud service** logs will no longer be supported:

**Service**

**Log**

**Reason for discontinuation**

Security Center

Port snapshot log

Duplicate data source. You can access the "Network snapshot log" data source instead.

Anti-DDoS

Anti-DDoS Proxy (Previous Version) flow log

Previous version of Anti-DDoS Proxy is offline.

Anti-DDoS

Anti-DDoS Origin log

Anti-DDoS Origin log is planned to be discontinued.

Cloud Firewall

Cloud Firewall alert log

Duplicate data source. The original custom Simple Log Service data source will be discontinued and replaced by a new data source based on predefined log service.

**Note**

The new data source name will remain "Cloud Firewall alert log". For the fields of the new data source, see [Cloud Firewall alert logs, Cloud Firewall real-time alert logs](#6abc89492e02l).

Web Application Firewall

WAF CDN flow log

CDN planning is paused. It will be replaced by the new DCDN WAF blocking log. For field descriptions, see [DCDN WAF blocking logs](#a0fbfda1a6dft).

Alibaba Cloud CDN

CDN WAF flow log

CDN planning is paused. It will be replaced by the new DCDN WAF blocking log.

Security Center

File read and write logs

Upgrade. No longer needs this data source.

## **Standardized log field changes**

**Security Center logs**

**Account snapshot logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

host\_uuid

uuid

Host ID

is\_root

perm

Whether root permission is available.

-   0: No root permission.
    
-   1: Has root permission.
    

group\_name

groups

User group

account\_expire\_time

account\_expire

Account expiration time

log\_time

log\_time

Log timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

last\_login\_time

last\_logon

Date and time of the last account logon. N/A indicates never logged in.

sub\_user\_id

user\_id

Account ID/ID of the Alibaba Cloud account to which the logs belong

main\_user\_id

cloud\_user\_id

Cloud account ID. For Alibaba Cloud accounts, it is the same as aliuid. For other cloud accounts, it is the attached account ID.

None

username

Account name

None

domain

Domain name

None

home\_dir

Home directory

None

status

User account status.

-   0: Account is prohibited from logging in.
    
-   1: Account can log in normally.
    

None

login\_ip

Remote IP address of the last account logon. N/A indicates never logged in.

None

host\_name

Host name

None

host\_ip

Host IP

None

category

Activity directory

None

schema

Activity classification

None

log\_uuid

Log flag

None

product\_code

Cloud service code

None

extend\_content

Extension field content

snapshot\_id

None

Offline

asset\_type

None

Offline

asset\_id

None

Offline

log\_name

None

Offline

gmt\_create

None

Offline

gmt\_modified

None

Offline

account\_id

None

Offline

password\_expire\_time

None

Offline

src\_ip

None

Offline

**Brute-force attack logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific data source integrated

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

host\_uuid

uuid

Host ID

dst\_ip

dst\_ip

Destination IP

login\_count

login\_count

Logon count

src\_ip

src\_ip

Source IP

u\_name

username

Logon account name

None

invalid\_user

Whether the user is valid invalid\_user

None

login\_type

Logon type

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

dst\_port

Client host port

host\_name

None

Offline

net\_connect\_dir

None

Offline

log\_name

None

Offline

src\_port

None

Offline

occur\_time

None

Offline

time\_zone

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

resource\_group\_name

None

Offline

connect\_count

None

Offline

protocol\_name

None

Offline

transport\_protocol\_name

None

Offline

login\_status

None

Offline

ip\_version

None

Offline

asset\_ip

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

remote\_ip

None

Offline

**CSPM logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

log\_time

log\_time

Log timestamp in seconds

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

instance\_id

instance\_id

Check object instance ID

instance\_name

instance\_name

Check object instance name

instance\_sub\_type

instance\_sub\_type

Product subtype

instance\_type

instance\_type

Product type

region\_id

region\_id

Region

risk\_level

risk\_level

Risk level: 1, 2, 3, 4, 5.

status

status

Check status:

1:unfixed

2:fixfailed

3:fixed

4:ignored

vendor

vendor

Vendor to which the checked instance belongs

None

risk\_detail

Check item details

None

risk\_criterion

Risk criterion

None

risk\_name

Risk name

None

risk\_type

Risk type

None

category

Activity directory

None

schema

Activity classification

None

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

None

product\_code

Cloud service code

None

extend\_content

Extension field content

None

log\_uuid

Log flag

check\_id

None

Offline

check\_item\_code

None

Offline

check\_item\_name

None

Offline

log\_name

None

Offline

occur\_time

None

Offline

instance\_result

None

Offline

requirement\_id

None

Offline

requirement\_name

None

Offline

section\_id

None

Offline

section\_name

None

Offline

standard\_id

None

Offline

standard\_name

None

Offline

requirement\_code

None

Offline

section\_code

None

Offline

**DNS request logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

host\_uuid

uuid

Host ID

proc\_id

pid

Process ID

proc\_path

proc\_path

Process path

cmd\_line

cmdline

Command line

cmd\_chain

cmd\_chain

Process command line

domain

domain

Process DNS request

parent\_proc\_id

ppid

Parent process ID

ip

host\_ip

Host IP

log\_time

log\_time

Log timestamp in seconds

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

product\_code

product\_code

Cloud service code

category\_name

category

Activity directory

activity\_name

schema

Activity classification

host\_name

host\_name

Hostname

None

uid

Account ID

None

username

Account name

None

parent\_proc\_path

Parent process path

None

pcmdline

Parent command line

None

pstime

Parent process start time

None

stime

Process start time

None

container\_hostname

Server name in container

None

container\_id

Container ID

None

container\_image\_id

Image ID

None

container\_image\_name

Image name

None

container\_name

Container name

None

container\_pid

Process ID in container

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

file\_path

None

Offline

sls\_capacity

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

asset\_list

None

Offline

time\_zone

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

proc\_name

None

Offline

occur\_time

None

Offline

scan\_time

None

Offline

log\_protocol\_action

None

Offline

log\_protocol\_type

None

Offline

app

None

Offline

trace\_id

None

Offline

bind

None

Offline

version

None

Offline

client\_mode

None

Offline

app\_version

None

Offline

safe\_mode

None

Offline

type

None

Offline

seq

None

Offline

dns\_query\_name

None

Offline

dns\_query\_time

None

Offline

file\_name

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

**File read and write logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

log\_code

log\_code

Log code, specific data source integrated

category\_name

category

Activity directory

activity\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

host\_uuid

uuid

Host ID

host\_name

host\_name

Hostname

cmd\_line

cmdline

Command line

parent\_file\_path

parent\_proc\_path

Parent process path

proc\_id

pid

Process ID

parent\_proc\_id

ppid

Parent process ID

proc\_path

proc\_path

Process path

proc\_start\_time

stime

Process start time

parent\_proc\_start\_time

pstime

Parent process start time

file\_path

file\_path

Process file write path

container\_id

container\_id

Container ID

container\_name

container\_name

Container name

container\_image\_id

container\_image\_id

Image ID

container\_image\_name

container\_image\_name

Image name

cmd\_chain

cmd\_chain

Process command line

None

host\_ip

Host IP

None

uid

Account ID

None

pcmdline

Parent command line

None

username

Account name

None

container\_hostname

Server name in container

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

container\_pid

Process ID in container

log\_name

None

Offline

time\_zone

None

Offline

occur\_time

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

parent\_file\_name

None

Offline

container\_file\_path

None

Offline

k8s\_pod\_name

None

Offline

k8s\_name\_space

None

Offline

k8s\_node\_id

None

Offline

k8s\_node\_name

None

Offline

k8s\_cluster\_id

None

Offline

cmd\_chain\_index

None

Offline

proc\_name

None

Offline

file\_name

None

Offline

sid

None

Offline

srv\_cmd\_line

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

**Baseline logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

start\_time

start\_time

Start timestamp in seconds, also used to indicate the occurrence time

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

log\_code

log\_code

Log code, specific data source integrated

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

category\_name

category

Activity directory

activity\_name

schema

Activity classification

host\_uuid

uuid

Host ID

host\_name

host\_name

Hostname

risk\_level

risk\_level

Risk level: 1, 2, 3, 4, 5.

risk\_name

risk\_name

Risk name

status

status

Check status:

1:unfixed

2:fixfailed

3:fixed

4:ignored

None

instance\_id

Host instance ID

None

risk\_type

Host baseline risk type

None

risk\_detail

Risk details

None

risk\_criterion

Risk standard

None

host\_ip

Host IP

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

check\_item

None

Offline

check\_level

None

Offline

check\_type

None

Offline

level

None

Offline

operation

None

Offline

sub\_type\_alias

None

Offline

sub\_type\_name

None

Offline

type\_alias

None

Offline

type\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

asset\_list

None

Offline

time\_zone

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

**Logon logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

log\_code

log\_code

Log code, specific data source connection

category\_name

category

Activity directory

activity\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

host\_uuid

uuid

Host ID

dst\_ip

dst\_ip

IP of the logon host

dst\_port

dst\_port

Client host port

src\_ip

src\_ip

Source IP

u\_name

username

Logon account name

login\_type

login\_type

Logon type

None

extend\_content

Extension field content

None

log\_uuid

Log flag

host\_name

None

Offline

ip

None

Offline

client\_ip

None

Offline

is\_login\_success

None

Offline

log\_count

None

Offline

proc\_id

None

Offline

proto

None

Offline

invalid\_user

None

Offline

client\_mode

None

Offline

occur\_time

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

asset\_name

None

Offline

asset\_list

None

Offline

time\_zone

None

Offline

vpc\_instance\_id

None

Offline

ecs\_instance\_id

None

Offline

transport\_protocol\_name

None

Offline

ip\_version

None

Offline

login\_status

None

Offline

login\_count

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

asset\_ip

None

Offline

class\_name

None

Offline

log\_name

None

Offline

remote\_ip

None

Offline

**Network connection logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

sub\_user\_id

cloud\_user\_id

Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

host\_uuid

uuid

Host ID

host\_name

host\_name

Hostname

src\_ip

src\_ip

Source IP

src\_port

src\_port

Source port

dst\_ip

dst\_ip

Destination IP

dst\_port

dst\_port

Destination port

parent\_proc\_id

Process ID

proc\_path

proc\_path

Process path

proc\_start\_time

stime

Process start time

proc\_id

pid

Process ID

parent\_proc\_path

parent\_proc\_path

Parent process path

parent\_proc\_start\_time

pstime

Parent process start time

status

status

Network connection status:

1: TCP\_STATE\_CLOSED (connection closed/not opened)

2: TCP\_STATE\_LISTEN (listening)

3: TCP\_STATE\_SYN\_SENT (SYN packet sent)

4: TCP\_STATE\_SYN\_RCVD (SYN packet received)

5: TCP\_STATE\_ESTABLISHED (connection established)

6: TCP\_STATE\_CLOSE\_WAIT (waiting for closure)

7: TCP\_STATE\_CLOSING (both parties are closing the connection)

8: TCP\_STATE\_FIN\_WAIT1 (active closer sends FIN and waits for ACK)

9: TCP\_STATE\_FIN\_WAIT2 (active closer receives ACK)

10: TCP\_STATE\_LAST\_ACK (passive closer waits for ACK)

11: TCP\_STATE\_TIME\_WAIT (active closer receives FIN and sends ACK)

cmd\_line

cmdline

Command line

net\_connect\_dir

net\_connect\_dir

Network connection direction

container\_id

container\_id

Container ID

container\_image\_id

container\_image\_id

Image ID

container\_image\_name

container\_image\_name

Image name

container\_name

container\_name

Container name

container\_host\_name

container\_hostname

Server name inside the container

cmd\_chain

cmd\_chain

Process command line

uid

uid

Account ID

u\_name

username

Account name

None

container\_pid

Process ID inside the container

None

extend\_content

Extension field content

None

log\_uuid

Log flag

cwd

None

Offline

tty

None

Offline

scan\_time

None

Offline

log\_name

None

Offline

proc\_name

None

Offline

file\_path

None

Offline

file\_name

None

Offline

parent\_proc\_name

None

Offline

parent\_file\_name

None

Offline

parent\_file\_path

None

Offline

proto

None

Offline

docker\_proc\_path

None

Offline

k8s\_cluster\_id

None

Offline

k8s\_name\_space

None

Offline

k8s\_node\_id

None

Offline

k8s\_node\_name

None

Offline

k8s\_pod\_name

None

Offline

cmd\_chain\_index

None

Offline

container\_mip

None

Offline

ccp

None

Offline

client\_mode

None

Offline

log\_match

None

Offline

raw\_ts

None

Offline

raw\_cpu

None

Offline

srv\_comm

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

asset\_name

None

Offline

asset\_list

None

Offline

asset\_port

None

Offline

container\_machine\_ip

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

occur\_time

None

Offline

time\_zone

None

Offline

cmd\_line\_format

None

Offline

transport\_protocol\_name

None

Offline

transport\_protocol\_status

None

Offline

ip\_version

None

Offline

asset\_ip

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

remote\_ip

None

Offline

remote\_port

None

Offline

**Port snapshot logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

sub\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

log\_code

log\_code

Log code, specific data source integrated

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

host\_name

host\_name

Hostname

proc\_id

pid

Process ID

proc\_path

proc\_path

Process path

net\_connect\_dir

net\_connect\_dir

Network connection direction

src\_ip

src\_ip

Source IP

src\_port

src\_port

Source port

dst\_ip

dst\_ip

Destination IP

dst\_port

dst\_port

Destination port

proto

l4\_protocol

Protocol

cmd\_line

cmdline

Command line

proc\_name

proc\_name

Process name

status

status

Network connection status

1: TCP\_STATE\_CLOSED (Connection closed/not opened)

2: TCP\_STATE\_LISTEN (Listening)

3: TCP\_STATE\_SYN\_SENT (SYN packet sent)

4: TCP\_STATE\_SYN\_RCVD (SYN packet received)

5: TCP\_STATE\_ESTABLISHED (Connection established)

6: TCP\_STATE\_CLOSE\_WAIT (Waiting for closure)

7: TCP\_STATE\_CLOSING (Both parties are closing the connection)

8: TCP\_STATE\_FIN\_WAIT1 (Active closer sends FIN waiting for ACK)

9: TCP\_STATE\_FIN\_WAIT2 (Active closer receives ACK)

10: TCP\_STATE\_LAST\_ACK (Passive closer waiting for ACK)

11: TCP\_STATE\_TIME\_WAIT (Active closer receives FIN and sends ACK)

host\_uuid

uuid

Host ID

None

host\_ip

Host IP

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

type

None

Offline

file\_name

None

Offline

parent\_cmd\_line

None

Offline

parent\_proc\_id

None

Offline

parent\_file\_path

None

Offline

parent\_proc\_path

None

Offline

err\_msg

None

Offline

ime

None

Offline

client\_mode

None

Offline

occur\_time

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

asset\_list

None

Offline

ecs\_instance\_id

None

Offline

vpc\_instance\_id

None

Offline

transport\_protocol\_name

None

Offline

transport\_protocol\_status

None

Offline

time\_zone

None

Offline

ip\_version

None

Offline

asset\_ip

None

Offline

asset\_type

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

raw\_data

None

Offline

remote\_ip

None

Offline

remote\_port

None

Offline

time

None

Offline

**Process startup logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

Account ID/Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific data source integrated

product\_code

product\_code

Cloud service code

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

host\_uuid

uuid

Host ID

uid

uid

Account ID

u\_name

username

Account name

host\_name

host\_name

Hostname

proc\_id

pid

Process ID

cmd\_line

cmdline

Command line

proc\_path

proc\_path

Process path

file\_path

file\_path

File written by process

parent\_proc\_id

ppid

Parent process ID

parent\_cmd\_line

pcmdline

Parent command line

parent\_proc\_path

parent\_proc\_path

Parent process path

proc\_start\_time

stime

Process start time

cmd\_chain

cmd\_chain

Process command line

pstime

pstime

Parent process start time

container\_host\_name

container\_hostname

Server name inside container

container\_id

container\_id

Container ID

container\_image\_id

container\_image\_id

Image ID

container\_image\_name

container\_image\_name

Image name

container\_name

container\_name

Container name

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

container\_pid

Process ID inside container

None

host\_ip

Host IP

log\_name

None

Offline

scan\_time

None

Offline

euid

None

Offline

euid\_name

None

Offline

gid

None

Offline

gid\_name

None

Offline

egroup\_id

None

Offline

egroup\_name

None

Offline

sid

None

Offline

tty

None

Offline

cwd

None

Offline

parent\_file\_name

None

Offline

parent\_proc\_name

None

Offline

file\_name

None

Offline

proc\_name

None

Offline

parent\_file\_path

None

Offline

perm

None

Offline

index

None

Offline

file\_gid

None

Offline

file\_uid

None

Offline

file\_uid\_name

None

Offline

file\_gid\_name

None

Offline

docker\_file\_path

None

Offline

docker\_container\_id

None

Offline

docker\_image\_id

None

Offline

docker\_image\_name

None

Offline

k8s\_pod\_name

None

Offline

k8s\_name\_space

None

Offline

k8s\_node\_id

None

Offline

k8s\_node\_name

None

Offline

k8s\_cluster\_id

None

Offline

cmd\_chain\_index

None

Offline

host\_instance\_id

None

Offline

occur\_time

None

Offline

vpc\_instance\_id

None

Offline

ecs\_instance\_id

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

asset\_name

None

Offline

asset\_list

None

Offline

comm

None

Offline

pcomm

None

Offline

srv\_cmd\_line

None

Offline

cmd\_line\_format

None

Offline

container\_machine\_ip

None

Offline

container\_file\_path

None

Offline

container\_type

None

Offline

client\_mode

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

os\_name

None

Offline

os\_type

None

Offline

**Alert logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

log\_time

log\_time

Log timestamp, in seconds

start\_time

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp, in seconds

main\_user\_id

user\_id

Alibaba Cloud log owner account ID

sub\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

category\_name

category

Activity directory

activity\_name

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

rule\_id

Rule ID, empty for Security Center

None

confidence\_score

Alert confidence score (0-100)

None

att\_ck

ATT&CK field

None

alert\_name

Alert name

None

alert\_type

Alert type

None

alert\_level

Alert level:

-   1-Information
    
-   2-Low
    
-   3-Medium
    
-   4-High
    
-   5-Critical
    

None

alert\_description

Alert description

None

action

Alert action: pass, alert, drop.

None

relate\_alert\_uuids

Associated alerts

None

alert\_uuid

Alert flag

None

payload

Attack payload

log\_name

None

Offline

client\_mode

None

Offline

cmd\_line

None

Offline

cwd

None

Offline

docker\_container\_id

None

Offline

err\_msg

None

Offline

euid

None

Offline

md5

None

Offline

file\_name

None

Offline

proc\_name

None

Offline

parent\_cmd\_line

None

Offline

file\_path

None

Offline

proc\_path

None

Offline

proc\_id

None

Offline

parent\_proc\_name

None

Offline

parent\_file\_name

None

Offline

parent\_proc\_path

None

Offline

parent\_file\_path

None

Offline

parent\_proc\_id

None

Offline

sid

None

Offline

srv\_cmd

None

Offline

type

None

Offline

uid

None

Offline

user

None

Offline

uuid

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

class\_name

None

Offline

asset\_name

None

Offline

raw\_data

None

Offline

asset\_list

None

Offline

time\_zone

None

Offline

proc\_start\_time

None

Offline

parent\_proc\_start\_time

None

Offline

container\_id

None

Offline

srv\_cmd\_line

None

Offline

u\_name

None

Offline

host\_uuid

None

Offline

os\_type

None

Offline

os\_name

None

Offline

vpc\_instance\_id

None

Offline

ecs\_instance\_id

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

host\_name

None

Offline

**Vulnerability logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source integrated

vul\_alias

vul\_alias\_name

Vulnerability alias

vul\_code

vul\_code

Vulnerability number: AVD or CVE number

status

status

Check status:

-   1:unfixed
    
-   2:fixfailed
    
-   3:fixed
    
-   4:ignored
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

host\_uuid

uuid

Host ID

vul\_detail

vul\_detail

Vulnerability details

main\_user\_id

user\_id

Alibaba Cloud account ID that owns the log

sub\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

end\_time

end\_time

End timestamp in seconds

asset\_id

asset\_ip

Remote scan, IP of the scanned asset

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

product\_code

product\_code

Cloud service code

vul\_level

vul\_level

Vulnerability level: 1, 2, 3, 4, 5.

vul\_type

vul\_type

Vulnerability type

None

cwe\_id

CWE vulnerability type; https://avd.aliyun.com/detail/AVD-2023-1678778

None

cvss

CVSS score

None

asset\_url

Remote scan, URL being scanned

None

asset\_port

Remote scan, port of the scanned asset

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

vul\_name

Vulnerability name

log\_name

None

Offline

necessity

None

Offline

operation

None

Offline

tag

None

Offline

type

None

Offline

asset\_type

None

Offline

time\_zone

None

Offline

raw\_data

None

Offline

asset\_list

None

Offline

vpc\_instance\_id

None

Offline

sas\_group\_name

None

Offline

ecs\_instance\_id

None

Offline

inter\_ip

None

Offline

intra\_ip

None

Offline

host\_name

None

Offline

risk\_level

None

Offline

**WAF logs**

**WAF alert logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source integrated

main\_user\_id

user\_id

Alibaba Cloud account ID that owns the log

sub\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp in seconds

start\_time

start\_time

Start timestamp in seconds, also used to indicate when the event occurred

end\_time

end\_time

End timestamp in seconds

scheme

schema

Activity classification

domain

host

Domain name under attack

waf\_rule\_id

rule\_id

ID of the basic protection rule that the client request matched.

**Note**

This rule ID corresponds to the rule ID that you can view in the rule hit records on the **Basic Protection Rule** tab of the **Security Report** page. For more information, see [Security reports](/help/en/waf/web-application-firewall-3-0/user-guide/security-reports#section-pxq-rng-m41).

request\_uri

request\_uri

Full request path with parameters

request\_path

request\_path

Relative path of the request, specifically the part of the requested URL after the domain name and before the question mark (?) (not including the query string).

request\_body

request\_body

Request body

request\_method

request\_method

Method of the client request.

request\_params

querystring

Query string in the client request, specifically the part of the requested URL after the question mark (?).

http\_user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, which includes client browser identifier, operating system identifier, and other information about the request source.

http\_cookie

http\_cookie

Cookie field in the HTTP request header, which represents the cookie information of the client source.

log\_uuid

log\_uuid

Log identifier

final\_action

action

Alert action: pass, alert, drop.

src\_ip

src\_ip

Attack source IP

attack\_ip

real\_client\_ip

Custom field in the HTTP request header, mainly used to store the real request IP, generally corresponding to the first x\_forward\_for. If this field does not exist, the connection IP field can be established

alert\_name

alert\_name

Alert name

alert\_type

alert\_type

Alert type

alert\_level

alert\_level

Alert level: 1, 2, 3, 4, 5.

None

product\_code

Cloud service code

None

category

Activity directory

None

extend\_content

Extended field content

None

request\_length

Size of the client request in bytes, including the request line, request headers, and request body

None

alert\_description

Alert description

None

att\_ck

ATT&CK field

None

confidence\_score

Confidence score

None

content\_type

HTTP request body format

None

dst\_ip

Specific network device IP, for example, WAF engine IP and gateway IP of SLB

None

dst\_port

Specific network device port number, for example, WAF engine IP and SLB gateway port

None

http\_referer

Referer field in the HTTP request header, which indicates the source URL information of the request.

None

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the original IP address of the client that connects to the web server through an HTTP proxy or load balancer.

None

payload

Attack payload

None

relate\_alert\_uuids

Related alerts

None

response\_info

Response body

None

response\_set\_cookie

Response cookie

None

status

HTTP status code received by the client. For example, 200 (indicates a successful request).

log\_name

None

Offline

waf\_agent\_key

None

Offline

matched\_host

None

Offline

src\_country\_id

None

Offline

final\_disable\_log

None

Offline

waf\_disable\_log

None

Offline

final\_rule\_id

None

Offline

final\_plugin

None

Offline

waf\_rule\_type

None

Offline

final\_rule\_type

None

Offline

src\_prov\_id

None

Offline

cluster\_name

None

Offline

prod\_source

None

Offline

alert\_uuid

None

Offline

method

None

Offline

waf\_agent\_ip

None

Offline

waf\_test

None

Offline

defense\_action

None

Offline

final\_test

None

Offline

attack\_time

None

Offline

region\_code

None

Offline

cluster

None

Offline

plugins

None

Offline

waf\_reserved2

None

Offline

waf\_host\_name

None

Offline

request\_time

None

Offline

remote\_ip

None

Offline

waf\_reserved

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

alert\_name\_cn

None

Offline

alert\_type\_cn

None

Offline

alert\_desc

None

Offline

alert\_desc\_cn

None

Offline

alert\_desc\_en

None

Offline

alert\_name\_code

None

Offline

alert\_type\_code

None

Offline

alert\_name\_en

None

Offline

alert\_type\_en

None

Offline

alert\_title

None

Offline

alert\_title\_cn

None

Offline

alert\_title\_en

None

Offline

region\_name

None

Offline

src\_country\_name

None

Offline

src\_prov\_name

None

Offline

is\_new

None

Offline

**WAF CDN flow logs, WAF flow logs, WAF 3.0 flow logs**

**V1.0 field**

**V2.0 field**

**Field description**

log\_code

log\_code

Log code, specific data source integrated

content\_type

content\_type

HTTP request body format.

final\_action

final\_action

The final protection executed by WAF on the client request. Values:

-   block: indicates blocking.
    
-   captcha\_strict: indicates strict slider verification.
    
-   captcha: indicates normal slider verification.
    
-   sigchl: indicates dynamic token verification.
    
-   js: indicates JavaScript verification.
    

final\_plugin

final\_plugin

The protection module corresponding to the final protection action (final\_action) executed by WAF on the client request. Values:

-   waf: indicates basic protection rules.
    
-   acl: indicates IP blacklist, custom rules (access control).
    
-   cc: indicates CC security protection, custom protection policies (CC attack protection).
    
-   antiscan: indicates scan protection.
    
-   dlp: indicates data leakage prevention.
    
-   scene: indicates scenario-specific configuration (APP is also included)
    
-   intelligence: indicates bot threat intelligence.
    
-   wxbb: indicates app protection.
    
-   sema: indicates semantic protection.
    
-   scc\_gdrl: indicates peak traffic throttling.
    
-   major\_protection: indicates major event support scenario protection.
    
-   compliance: indicates protocol violation (protocol compliance).
    

If a request does not trigger any protection module (including cases where it matches a pass rule, or when the client completes slider or JS verification and triggers a pass), this field will not be recorded.

If a request triggers multiple protection modules simultaneously, only the protection module corresponding to the final protection action (**final\_action**) will be recorded.

final\_rule\_id

final\_rule\_id

The ID of the protection rule finally applied by WAF to the client request, which is the ID of the protection rule corresponding to **final\_action**.

final\_rule\_type

final\_rule\_type

The subtype of the protection rule (**final\_rule\_id**) finally applied by WAF to the client request.

For example, under the `final_plugin:waf` type, there are subtypes such as `final_rule_type:sqli`, `final_rule_type:xss`, etc.

domain

host

Host field in the HTTP request.

http\_cookie

http\_cookie

Cookie field in the HTTP request header, which represents the cookie information of the client source.

http\_referer

http\_referer

Referer field in the HTTP request header, which indicates the source URL information of the request.

http\_user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, which includes client browser identifier, operating system identifier, and other information about the request source.

http\_x\_forwarded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the original IP address of the client that connects to the web server through an HTTP proxy or load balancer.

request\_params

querystring

Query string in the client request, specifically the part of the requested URL after the question mark (?).

src\_ip

src\_ip

IP that establishes the connection with WAF.

If WAF connects directly with the client, this field is equivalent to the client IP. If there are other Layer 7 proxies in front of WAF (such as CDN), this field represents the IP of the proxy immediately upstream of WAF.

request\_length

request\_length

Size of the client request in bytes, including the request line, request headers, and request body.

request\_method

request\_method

Method of the client request.

request\_path

request\_path

Relative path of the request, specifically the part of the requested URL after the domain name and before the question mark (?) (not including the query string).

request\_time\_msec

duration

Time taken to process the client request. Unit: milliseconds.

status

status

HTTP status code received by the client. For example, 200 (indicates a successful request).

start\_time

start\_time

Start timestamp in seconds, also used to indicate when the event occurred.

main\_user\_id

cloud\_user\_id

Other cloud account ID. Or Alibaba Cloud

sub\_user\_id

user\_id

Alibaba Cloud account ID that owns the log

request\_body

request\_body

Request body

dst\_ip

dst\_ip

Specific network device IP, for example, WAF engine IP and SLB gateway IP.

dst\_port

dst\_port

Specific network device port number, for example, WAF engine IP and SLB gateway port.

end\_time

end\_time

End timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp in seconds

None

product\_code

Cloud service code

None

real\_client\_ip

Custom field in the HTTP request header, mainly used to store the real request IP, generally corresponding to the first x\_forward\_for. If this field does not exist, the connection IP field can be established

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length in bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

request\_uri

Full request path with parameters

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extended field content

None

log\_uuid

Log identifier

None

request\_content\_length

Request body length in bytes

ali\_uid

None

Offline

log\_name

None

Offline

acl\_rule\_type

None

Offline

bypass\_matched\_ids

None

Offline

cc\_rule\_type

None

Offline

http\_scheme

None

Offline

matched\_host

None

Offline

remote\_ip

None

Offline

remote\_port

None

Offline

request\_traceid

None

Offline

server\_port

None

Offline

server\_protocol

None

Offline

upstream\_addr

None

Offline

upstream\_response\_time

None

Offline

upstream\_status

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

**Cloud Firewall logs**

**Cloud Firewall alert logs, Cloud Firewall real-time alert logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

end\_time

end\_time

End timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

rule\_id

rule\_id

Rule ID

net\_connect\_dir

net\_connect\_dir

Direction (in/out)

src\_ip

src\_ip

Source IP

dst\_ip

dst\_ip

Destination IP

log\_uuid

log\_uuid

Log flag

alert\_level

alert\_level

Alert level

-   1-Information
    
-   2-Low
    
-   3-Medium
    
-   4-High
    
-   5-Critical
    

dst\_port

dst\_port

Destination port

src\_port

src\_port

Source port

log\_time

log\_time

Log timestamp in seconds

defense\_action

action

Alert action: pass, alert, drop.

alert\_name

alert\_name

Alert name

alert\_type

alert\_type

Alert type

alert\_desc

alert\_description

Alert description

payload

payload

Attack payload

att\_ck

att\_ck

att&ck field

uuid

alert\_uuid

Alert flag

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

l4\_protocol

Network protocol (tcp, udp, icmp)

None

l7\_protocol

Layer 7 protocol (Https, Http)

None

traffic\_type

Collection method

0-Unknown

1-Packet collection

2-Flow collection

None

confidence\_score

Confidence score

None

file\_name

File name

None

md5

File Md5

None

relate\_alert\_uuids

Associated alerts

attack\_ip

None

Offline

ioc\_ip

None

Offline

log\_name

None

Offline

rule\_result

None

Offline

op\_level

None

Offline

rule\_source

None

Offline

alert\_json

None

Offline

asset\_ip

None

Offline

asset\_port

None

Offline

vul\_level

None

Offline

alert\_cnt

None

Offline

total\_cnt

None

Offline

src\_ip\_region

None

Offline

dst\_ip\_region

None

Offline

occur\_time

None

Offline

alert\_name\_code

None

Offline

alert\_type\_code

None

Offline

app\_proto\_type

None

Offline

domain

None

Offline

url

None

Offline

ip\_proto\_type

None

Offline

alert\_name\_cn

None

Offline

alert\_name\_en

None

Offline

alert\_type\_cn

None

Offline

alert\_type\_en

None

Offline

enable\_status

None

Offline

alert\_desc\_cn

None

Offline

alert\_desc\_en

None

Offline

region\_name

None

Offline

malware\_type

None

Offline

alert\_src\_prod

None

Offline

alert\_src\_prod\_module

None

Offline

mode

None

Offline

**Cloud Firewall flow logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp in seconds

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

end\_time

end\_time

End timestamp in seconds

net\_connect\_dir

net\_connect\_dir

Direction (in/out)

dst\_ip

dst\_ip

Destination IP

dst\_port

dst\_port

Destination port

ip\_proto\_type

l3\_protocol

ipv4,ipv6

rule\_result

action

Action executed after traffic hits the access control policy. Values:

-   pass: Allow.
    
-   alert: Observation.
    
-   drop: Reject.
    

Action executed when traffic hits an intrusion prevention event. Values:

-   alert: Alert notification.
    
-   drop: Block.
    

src\_ip

src\_ip

Source IP

src\_port

src\_port

Source port

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

l4\_protocol

Network protocol (tcp, udp, icmp)

None

l7\_protocol

Layer 7 protocol (Https, Http)

None

traffic\_type

Collection method

0-Unknown

1-Packet collection

2-Flow collection

log\_name

None

Offline

acl\_rule\_id

None

Offline

app\_proto\_type

None

Offline

attack\_name

None

Offline

attack\_type

None

Offline

country\_id

None

Offline

domain

None

Offline

in\_bps

None

Offline

in\_packet\_bytes

None

Offline

in\_packet\_count

None

Offline

in\_pps

None

Offline

ips\_ai\_rule\_id

None

Offline

ips\_rule\_id

None

Offline

ips\_rule\_name

None

Offline

ips\_rule\_name\_en

None

Offline

log\_type

None

Offline

out\_bps

None

Offline

out\_packet\_bytes

None

Offline

out\_packet\_count

None

Offline

out\_pps

None

Offline

proxy\_acl\_rule\_id

None

Offline

region\_code

None

Offline

src\_private\_ip

None

Offline

start\_time\_min

None

Offline

tcp\_seq

None

Offline

total\_bps

None

Offline

total\_packet\_bytes

None

Offline

total\_packet\_count

None

Offline

total\_pps

None

Offline

url

None

Offline

vul\_level

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

rule\_source

None

Offline

**Anti-DDoS Proxy flow logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

log\_time

log\_time

Log timestamp in seconds

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud account ID that owns the log

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

http\_content\_type

content\_type

HTTP request body format.

http\_host

host

Host field in the HTTP request.

http\_cookie

http\_cookie

Cookie field in the HTTP request header, indicating the cookie information from the source client.

http\_referer

http\_referer

Referer field in the HTTP request header, indicating the source URL information of the request.

http\_user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, containing information such as the client browser identifier and operating system identifier of the request source.

http\_x\_forward\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the original IP address of the client connecting to the web server through an HTTP proxy or load balancing.

http\_x\_real\_ip

real\_client\_ip

Custom field in the HTTP request header, mainly used to store the real request IP that initiated the request, generally corresponding to the first IP in x\_forward\_for. If this field does not exist, the connection IP field can be established.

request\_length

request\_length

Number of bytes in the client request, including the request line, request header, and request body. Unit: Byte.

request\_method

request\_method

Method of the client request.

request\_path

request\_path

Relative path being requested, specifically referring to the part of the requested URL after the domain name and before the question mark (?) (not including the query string).

response\_code

status

HTTP status code received by the client. For example, 200 (indicating the request was successful).

request\_paramters

querystring

Query string in the client request, specifically referring to the part of the requested URL after the question mark (?).

src\_ip

src\_ip

IP that established the connection

dst\_ip

dst\_ip

Specific network device IP

dst\_port

dst\_port

Port number of the specific network device

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

request\_body

Access request body

None

duration

Time used to process the client request. Unit: milliseconds.

None

request\_content\_length

Access request body length, unit: bytes

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length, unit: bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

request\_uri

Full request path + parameters

None

final\_action

Final action of the device

None

final\_plugin

Final protected module of the device

None

final\_rule\_id

ID of the rule last hit by the device

None

final\_rule\_type

Type of the rule last hit by the device

log\_name

None

Offline

request\_time\_msec

None

Offline

domain

None

Offline

log\_topic

None

Offline

request\_body\_size

None

Offline

http\_scheme

None

Offline

matched\_host

None

Offline

isp\_line

None

Offline

remote\_ip

None

Offline

remote\_port

None

Offline

remote\_addr

None

Offline

request\_time

None

Offline

cc\_action

None

Offline

cc\_blocks

None

Offline

last\_result

None

Offline

cc\_phase

None

Offline

defense\_action

None

Offline

defense\_rule

None

Offline

ua\_browser

None

Offline

ua\_browser\_family

None

Offline

ua\_browser\_type

None

Offline

ua\_browser\_version

None

Offline

ua\_device\_type

None

Offline

ua\_os

None

Offline

ua\_os\_family

None

Offline

upstream\_addr

None

Offline

upstream\_ip

None

Offline

upstream\_port

None

Offline

upstream\_response\_time\_msec

None

Offline

upstream\_response\_code

None

Offline

request\_id

None

Offline

log\_id

None

Offline

occur\_time

None

Offline

src\_port

None

Offline

src\_addr

None

Offline

dst\_addr

None

Offline

app\_protocol

None

Offline

net\_connect\_dir

None

Offline

asset\_type

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_ip

None

Offline

asset\_port

None

Offline

asset\_addr

None

Offline

attack\_ip

None

Offline

attack\_port

None

Offline

attack\_addr

None

Offline

**Bastionhost logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

content

event\_detail

Event details

event

event\_type

Event type:

-   cmd.Command: command character
    
-   cmd.Command.policy: commands processed by control policy
    
-   graph.Text: graph text
    
-   graph.Keyboard: graph keyboard event
    
-   file.Upload: upload file
    
-   file.Download: download file
    
-   file.Rename: rename file
    
-   file.Delete: delete file
    
-   file.DeleteDir: delete folder
    
-   file.CreateDir: create folder
    
-   login.CSLogin: user CS logon
    
-   Session.session: a session
    

bst\_instance\_id

instance\_id

Bastionhost instance ID

resource\_name

resource\_name

Asset name

result

event\_result

Event result

session\_id

session\_id

Session ID

client\_ip

src\_ip

Connection IP

uid

uid

Bastionhost user ID

u\_name

user\_name

Bastionhost username

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp, in seconds

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

start\_time

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp, in seconds

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

resource\_ip

Asset IP

log\_name

None

Offline

ali\_uid

None

Offline

log\_level

None

Offline

log\_version

None

Offline

dst\_ip

None

Offline

asset\_id

None

Offline

asset\_type

None

Offline

file\_event\_file\_size

None

Offline

file\_event\_speed

None

Offline

file\_event\_status

None

Offline

file\_event\_take

None

Offline

**CDN flow logs**

**V1.0 fields**

**V2.0 fields**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific access data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate when the event occurs

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

domain

host

Host field in HTTP request.

http\_method

request\_method

Method requested by the client.

request\_path

request\_path

Requested relative path, specifically the part after the domain name and before the question mark (?) in the requested URL (excluding the query string).

request\_parameters

querystring

Query string in the client request, specifically the part after the question mark (?) in the requested URL.

request\_url

request\_uri

Full request path + parameters

src\_ip

src\_ip

IP that establishes the connection

request\_length

request\_length

Number of bytes in the client request, including the request line, request header, and request body. Unit: Byte.

http\_status

status

HTTP status code received by the client. For example, 200 (indicates a successful request).

dst\_ip

dst\_ip

Specific network device IP. For example, for WAF it is the WAF engine IP, for Server Load Balancer it is the gateway IP

dst\_port

dst\_port

Port number of the specific network device. For example,

for WAF it is the WAF engine IP, for Server Load Balancer it is the gateway port

http\_conent\_type

content\_type

HTTP request body format.

user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, including browser identification, operating system identification, and other information about the source of the request.

http\_x\_forworded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the most original IP address of the client connecting to the web server through HTTP proxy or load balancing.

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

http\_cookie

Cookie field in the HTTP request header, representing the cookie information of the client source.

None

http\_referer

Referer field in the HTTP request header, representing the source URL information of the request.

None

real\_client\_ip

Custom field in the HTTP request header, mainly used to store the real request IP, generally corresponding to the first x\_forward\_for. If this field does not exist, the connection IP field can be established

None

duration

Time taken to process the client request. Unit: milliseconds.

None

request\_body

Access request body

None

request\_content\_length

Access request body length, unit: bytes

None

final\_action

Final action of the device

None

final\_plugin

Final protected module of the device

None

final\_rule\_id

Final rule ID hit by the device

None

final\_rule\_type

Final rule type hit by the device

None

response\_content\_length

Response body length, unit: bytes

None

response\_content\_type

Response content\_type

None

response\_info

Response body

None

response\_set\_cookie

Response cookie

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

reqeust\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

http\_scheme

None

Offline

proxy\_ip

None

Offline

remote\_ip

None

Offline

remote\_port

None

Offline

request\_id

None

Offline

response\_body\_size

None

Offline

net\_connect\_dir

None

Offline

raw\_data

None

Offline

**Dynamic Content Delivery Network (DCDN) logs**

**DCDN user access logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

category\_name

category

Activity directory

activity\_class\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_time

log\_time

Log timestamp, in seconds

real\_client\_ip

real\_client\_ip

Custom field in HTTP request header, mainly used to store the real request IP. Generally corresponds to the first x\_forward\_for. If this field does not exist, an IP field can be established for connection.

content\_type

content\_type

HTTP request body format.

host

host

Host field in HTTP request.

request\_method

request\_method

Request method of the client.

request\_length

request\_length

Number of bytes in the client request, including the request line, request header, and request body. Unit: Byte.

src\_ip

src\_ip

IP that establishes connection

status

status

HTTP status code received by the client. For example, 200 (indicates the request was successful).

dst\_ip

dst\_ip

Specific network device IP. For example, WAF engine IP and gateway IP of Server Load Balancer

dst\_port

dst\_port

Specific network device port number. For example, WAF engine IP and gateway port of Server Load Balancer

request\_uri

request\_uri

Full request path + parameters

querystring

querystring

Query string in the client request, specifically the part after the question mark (?) in the requested URL.

http\_user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, including client browser identification, operating system identification, and other information about the request source.

http\_x\_forwarded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the most original IP address of the client connecting to the web server through HTTP proxy or load balancing.

None

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

None

end\_time

End timestamp, in seconds

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

final\_action

Final action of the device

None

final\_plugin

Final protected module of the device

None

final\_rule\_id

ID of the rule last hit by the device

None

final\_rule\_type

Type of the rule last hit by the device

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length, unit: bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

duration

Time used to process the client request. Unit: milliseconds.

None

http\_cookie

Cookie field in the HTTP request header, representing the cookie information of the client source.

None

http\_referer

Referer field in the HTTP request header, indicating the source URL information of the request.

None

request\_body

Access request body

None

request\_content\_length

Access request body length, unit: bytes

None

request\_path

Requested relative path, specifically the part after the domain name and before the question mark (?) in the requested URL (excluding the query string).

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

request\_body\_size

None

Offline

hit\_info

None

Offline

http\_range

None

Offline

proxy\_ip

None

Offline

refer\_domain

None

Offline

refer\_param

None

Offline

refer\_protocol

None

Offline

refer\_uri

None

Offline

src\_port

None

Offline

request\_time

None

Offline

response\_size

None

Offline

http\_scheme

None

Offline

sent\_http\_content\_range

None

Offline

unix\_time

None

Offline

user\_info

None

Offline

uuid

None

Offline

via\_info

None

Offline

**DCDN WAF blocking logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

category\_name

category

Activity directory

activity\_class\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_time

log\_time

Log timestamp, in seconds

real\_client\_ip

real\_client\_ip

Custom field in HTTP request header, mainly used to store the real request IP. Generally corresponds to the first x\_forword\_for. If this field does not exist, the connection IP field can be established

content\_type

content\_type

HTTP request body format.

http\_cookie

http\_cookie

Cookie field in the HTTP request header, representing the cookie information of the client source.

host

host

Host field in HTTP request.

final\_action

final\_action

Final action of the device

final\_plugin

final\_plugin

Final protected module of the device

final\_rule\_id

final\_rule\_id

ID of the rule last hit by the device

final\_rule\_type

final\_rule\_type

Type of the rule last hit by the device

request\_method

request\_method

Method requested by the client.

http\_referer

http\_referer

Referer field in the HTTP request header, indicating the source URL information of the request.

src\_ip

src\_ip

Connection IP

status

status

HTTP status code received by the client. For example, 200 (indicates the request was successful).

request\_uri

request\_uri

Full request path + parameters

querystring

querystring

Query string in the client request, specifically the part after the question mark (?) in the requested URL.

http\_user\_agent

http\_user\_agent

User-Agent field in the HTTP request header, including client browser identification, operating system identification, and other information about the request source.

http\_x\_forwarded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in the client request header, used to identify the most original IP address of the client connecting to the web server through HTTP proxy or load balancing.

None

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

None

end\_time

End timestamp, in seconds

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length, unit: bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

dst\_ip

Specific network device IP. For example, WAF engine IP, Server Load Balancer is the gateway IP

None

dst\_port

Specific network device port number. For example, WAF engine IP, Server Load Balancer is the gateway port

None

duration

Time used to process the client request. Unit: milliseconds.

None

request\_body

Access request body

None

request\_content\_length

Access request body length, unit: bytes

None

request\_length

Number of bytes in the client request, including the request line, request header, and request body. Unit: Byte.

None

request\_path

Requested relative path, specifically the part after the domain name and before the question mark (?) in the requested URL (excluding the query string).

log\_name

None

Offline

client\_id

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

final\_test

None

Offline

matched\_host

None

Offline

request\_id

None

Offline

http\_scheme

None

Offline

tls\_hash

None

Offline

unix\_time

None

Offline

**DCDN EdgeRoutine logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

category\_name

category

Activity directory

activity\_class\_name

schema

Activity classification

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_time

log\_time

Log timestamp, in seconds

None

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

None

end\_time

End timestamp, in seconds

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

code\_ver

None

Offline

console\_alert

None

Offline

error\_code

None

Offline

error\_message

None

Offline

fetch\_status

None

Offline

fetch\_uuid

None

Offline

http\_2xx

None

Offline

http\_3xx

None

Offline

http\_4xx

None

Offline

http\_5xx

None

Offline

http\_status\_other

None

Offline

in\_authority

None

Offline

in\_method

None

Offline

in\_path

None

Offline

out\_size

None

Offline

out\_status

None

Offline

routine\_spec

None

Offline

total\_cpu\_time

None

Offline

total\_real\_time

None

Offline

unique\_id

None

Offline

unix\_time

None

Offline

**API Gateway access logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate when the event occurs

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

request\_path

request\_path

Request path

domain

host

Domain name

http\_status

status

HTTP status code received by the client. For example, 200 (indicates successful request).

response\_message

response\_info

Response information

src\_ip

src\_ip

Request IP

request\_id

request\_id

Request ID

request\_paramters

querystring

Request parameters

reqeust\_body

request\_body

Request body

None

instance\_id

Gateway instance ID

None

api\_name

API name

None

api\_id

API flag

None

app\_id

Caller ID

None

app\_key

Request AppKey

None

app\_name

Caller name

None

error\_code

Error code

None

error\_message

Error details

None

api\_user\_id

API provider account ID

None

region\_code

Area

None

request\_method

Request method

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

reqeust\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

net\_connect\_dir

None

Offline

raw\_data

None

Offline

http\_method

None

Offline

request\_length

None

Offline

response\_body\_size

None

Offline

reqeust\_headers

None

Offline

response\_headers

None

Offline

response\_body

None

Offline

**K8s audit logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

end\_time

end\_time

End timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

audit\_id

audit\_id

Unique audit ID generated for each request.

level

level

Audit level corresponding to the generated event.

kind

kind

Event

reqeust\_path

request\_uri

Request URI sent from the client to the server.

response\_status

response\_status

-   Status of the response, assigned when "responseObject" is not of "Status" type.
    
-   For successful requests, this field only contains "code" and "statusSuccess." For error responses not of "Status" type, this field is automatically assigned with error information.
    

api\_version

api\_version

audit.k8s.io/v1

stage

stage

Processing stage of the request when this event was generated.

log\_time

log\_time

Log timestamp in seconds

user

username

Information about the authenticated user.

object\_ref

object\_ref

Object reference that this request points to. This field can be ignored for List type requests or non-resource requests.

user\_agent

user\_agent

userAgent records the user agent string reported by the client. Note that the userAgent information is provided by the client and should never be trusted.

request\_object

request\_object

API object from the request, presented in JSON format. "requestObject" is recorded as is in the request (possibly re-encoded in JSON), before it goes through version conversion, default value filling, admission control, and configuration information merging. This object is an externally versioned object type, and may not even be a valid object itself. For non-resource requests, this field is ignored. This is only recorded when the audit level is "Request" or higher.

response\_object

response\_object

API object included in the response, presented in JSON format. "responseObject" is recorded after being converted to an external type and serialized to JSON format. For non-resource requests, this field is ignored. This is only recorded when the audit level is Response.

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extended field content

None

log\_uuid

Log flag

None

impersonated\_user

Information about the impersonated user.

None

source\_ip\_list

Source IP addresses of the request and intermediate proxies. Source IPs are listed from the following (in order):

1.  X-Forwarded-For request header IP
    
2.  X-Real-Ip header, if it does not exist in the X-Forwarded-For list
    
3.  Remote address of the connection, if it cannot match with the last IP in the list here (X-Forwarded-For or X-Real-Ip). Note: All IPs except the last one can be arbitrarily set by the client.
    

None

verb

Kubernetes verb associated with the request. For non-resource requests, this field is the lowercase form of the HTTP method.

ori\_topic

None

Offline

trail\_detail

None

Offline

log\_name

None

Offline

instance\_id

None

Offline

verb

None

Offline

stage\_time\_stamp

None

Offline

src\_ip\_list

None

Offline

ori\_source

None

Offline

ori\_path

None

Offline

file\_path

None

Offline

project

None

Offline

log\_store

None

Offline

**PolarDB logs**

**PolarDB-X1.0 audit logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

end\_time

end\_time

End timestamp in seconds

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

cloud\_type

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

sql\_stmt\_type

sql\_type

Type of audit behavior

table\_name

table\_name

Table name list

sql\_stmt

sql

Audit behavior

src\_ip

src\_ip

Operator IP

fetched\_rows

check\_rows

Number of scanned rows

affect\_rows

effect\_row

Number of affected rows

db\_name

db

Database name

u\_name

user

Operator account name

domain

domain

Domain name corresponding to the database

None

log\_time

Log timestamp in seconds

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

product\_code

Cloud service code

None

schema\_name

Metadata name

log\_name

None

Offline

sql\_stmt\_hash

None

Offline

spm\_plan\_id

None

Offline

phy\_affected\_rows

None

Offline

spm\_baseline\_id

None

Offline

total\_physical\_conn\_time

None

Offline

src\_port

None

Offline

temp\_table\_memory

None

Offline

total\_physical\_exec\_time

None

Offline

trace\_id

None

Offline

total\_physical\_read\_time

None

Offline

memory\_reject

None

Offline

sql\_stmt\_type\_detail

None

Offline

memory\_used

None

Offline

logical\_opt\_cpu\_time

None

Offline

is\_failed

None

Offline

shared\_plan\_memory

None

Offline

plan\_memory

None

Offline

memory\_pct

None

Offline

sql\_hint

None

Offline

physical\_sql\_count

None

Offline

logical\_cpu\_time

None

Offline

instance\_id

None

Offline

logical\_exec\_cpu\_time

None

Offline

parameters

None

Offline

total\_physical\_time

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

dst\_ip

None

Offline

dst\_port

None

Offline

dst\_intra\_ip

None

Offline

occur\_time

None

Offline

**PolarDB-X2.0 audit logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

cloud\_type

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

src\_ip

src\_ip

Operator IP

db\_name

db

Database name

affect\_rows

effect\_row

Number of affected rows

fetched\_rows

check\_rows

Number of scanned rows

sql\_stmt

sql

Audit behavior

sql\_type

sql\_type

Type of audit behavior

db\_user\_name

user

Operator account name

domain

domain

Domain name corresponding to the database

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

table\_name

Table name list

None

schema\_name

Metadata name

None

db\_type

Database type

log\_name

None

Offline

is\_auto\_commit

None

Offline

ccl\_hit\_cache

None

Offline

ccl\_status

None

Offline

ccl\_wait\_time

None

Offline

src\_port

None

Offline

is\_failed

None

Offline

polardb\_instance\_id

None

Offline

sql\_hint

None

Offline

is\_prepare\_stmt

None

Offline

matched\_ccl\_rule

None

Offline

parameters

None

Offline

prepare\_stmt\_id

None

Offline

response\_time

None

Offline

sql\_stmt\_hash

None

Offline

sql\_exec\_time

None

Offline

trace\_id

None

Offline

transaction\_id

None

Offline

transaction\_policy

None

Offline

workload\_type

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

dst\_ip

None

Offline

dst\_port

None

Offline

dst\_intra\_ip

None

Offline

occur\_time

None

Offline

**ApsaraDB for MongoDB logs**

**MongoDB audit logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

audited\_action\_type

sql\_type

Type of audit behavior

audited\_action

sql

Audit behavior

operator\_user\_ip

user

Operator account name

src\_ip

src\_ip

Operator IP

database\_name

db

Database name

table\_name

table\_name

Table name list

None

affect\_rows

Number of affected data entries

None

schema\_name

Metadata name

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

request\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

audited\_object

None

Offline

operator\_user\_name

None

Offline

domain

None

Offline

raw\_data

None

Offline

**MongoDB slow query log and operation logs**

**Note**

CTDR2.0 no longer accepts MongoDB slow query logs or operation logs

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

None

Offline

sub\_user\_id

None

Offline

log\_code

None

Offline

cloud\_code

None

Offline

start\_time

None

Offline

end\_time

None

Offline

log\_time

None

Offline

category\_name

None

Offline

activity\_name

None

Offline

src\_ip

None

Offline

database\_name

None

Offline

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

request\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

src\_port

None

Offline

dst\_ip

None

Offline

dst\_port

None

Offline

domain

None

Offline

connection\_status\_message

None

Offline

connection\_status

None

Offline

connection\_type

None

Offline

connection\_name

None

Offline

mongodb\_instance\_id

None

Offline

instance\_id

None

Offline

level

None

Offline

raw\_data

None

Offline

**ApsaraDB RDS audit logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific data source

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

product\_code

product\_code

Cloud service code

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

audited\_action\_type

sql\_type

Type of audit behavior

audited\_action

sql

Audit behavior

operator\_user\_name

user

Operator account name

src\_ip

src\_ip

Operator IP

database\_name

db

Database name

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

affect\_rows

Number of affected data entries

None

table\_name

Table name list

None

schema\_name

Metadata name

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

request\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

raw\_data

None

Offline

audited\_object

None

Offline

audited\_action\_status

None

Offline

operator\_user\_ip

None

Offline

domain

None

Offline

asset\_list

None

Offline

None

None

None

None

**Virtual private cloud (VPC) logs**

**V1.0 fields**

**V2.0 fields**

**Description**

log\_code

log\_code

Log code, specific data source

src\_ip

src\_ip

Source IP

src\_port

src\_port

Source port

dst\_ip

dst\_ip

Destination IP

dst\_port

dst\_port

Destination port

proto

l4\_protocol

Network protocol (tcp, udp, icmp)

net\_connect\_dir

net\_connect\_dir

Direction (in/out)

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

action

action

Alert device action

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_time

log\_time

Log timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

l3\_protocol

ipv4, ipv6

None

l7\_protocol

Layer 7 protocol (Https, Http)

None

traffic\_type

Collection method

0-Unknown

1-Package collection

2-Stream collection

log\_name

None

Offline

version

None

Offline

vswitch\_id

None

Offline

vm\_id

None

Offline

vpc\_id

None

Offline

account\_id

None

Offline

eni\_id

None

Offline

log\_status

None

Offline

occur\_time

None

Offline

packet\_cnt

None

Offline

bytes

None

Offline

asset\_type

None

Offline

asset\_name

None

Offline

asset\_id

None

Offline

**Elastic IP Address logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud account ID that owns the log

cloud\_type

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate when the event occurred

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

None

log\_code

Log code, specific data source integrated

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

type

None

Offline

tid

None

Offline

time

None

Offline

gw\_ip

None

Offline

eip

None

Offline

ip

None

Offline

in\_Bps

None

Offline

out\_Bps

None

Offline

in\_pps

None

Offline

out\_pps

None

Offline

in\_syn\_speed

None

Offline

out\_syn\_speed

None

Offline

in\_syn\_ack\_speed

None

Offline

out\_syn\_ack\_speed

None

Offline

in\_fin\_speed

None

Offline

out\_fin\_speed

None

Offline

in\_rst\_speed

None

Offline

out\_rst\_speed

None

Offline

out\_ratelimit\_drop\_speed

None

Offline

in\_ratelimit\_drop\_speed

None

Offline

out\_drop\_speed

None

Offline

in\_drop\_speed

None

Offline

timestamp

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

**Server Load Balancer (SLB) logs**

**ALB access logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

src\_ip

src\_ip

IP that establishes the connection

http\_host

host

Host field in HTTP request.

http\_referer

http\_referer

Referer field in HTTP request header, indicating the source URL information of the request.

http\_user\_agent

http\_user\_agent

User-Agent field in HTTP request header, containing client browser identification, operating system identification, and other information about the request source.

http\_x\_forwarded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in client request header, used to identify the most original IP address of the client connecting to the web server through HTTP proxy or load balancing.

http\_x\_real\_ip

real\_client\_ip

Custom field in HTTP request header, mainly used to store the real request IP, generally corresponding to the first x\_forword\_for. If this field does not exist, the IP field that establishes the connection can be used.

request\_length

request\_length

Number of bytes in the client request, including request line, request header, and request body. Unit: Byte.

request\_method

request\_method

Method of the client request.

request\_path

request\_path

Requested relative path, specifically the part after the domain name and before the question mark (?) in the requested URL (excluding the query string).

dst\_ip

dst\_ip

Specific network device IP. For example, for WAF it is the WAF engine IP, for SLB it is the gateway IP.

dst\_port

dst\_port

Port number of the specific network device. For example,

for WAF it is the WAF engine IP, for SLB it is the gateway port.

http\_status

status

HTTP status code received by the client. For example, 200 (indicating the request was successful).

None

extend\_content

Extended field content

None

log\_uuid

Log flag

None

content\_type

HTTP request body format.

None

http\_cookie

Cookie field in HTTP request header, indicating the cookie information of the client source.

None

querystring

Query string in the client request, specifically the part after the question mark (?) in the requested URL.

None

duration

Time taken to process the client request. Unit: milliseconds.

None

request\_body

Access request body

None

request\_content\_length

Access request body length, unit: bytes

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length, unit: bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

request\_uri

Full request path + parameters

None

final\_action

Final action of the device

None

final\_plugin

Final protection module of the device

None

final\_rule\_id

Final rule ID hit by the device

None

final\_rule\_type

Final rule type hit by the device

log\_name

None

Offline

src\_port

None

Offline

domain

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

request\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

alb\_instance\_id

None

Offline

instance\_id

None

Offline

response\_body\_size

None

Offline

http\_scheme

None

Offline

http\_version

None

Offline

ssl\_cipher

None

Offline

ssl\_protocol

None

Offline

upstream\_ip

None

Offline

upstream\_port

None

Offline

upstream\_status

None

Offline

net\_connect\_dir

None

Offline

**CLB access logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

src\_ip

src\_ip

IP that establishes the connection

http\_host

host

Host field in HTTP request.

http\_referer

http\_referer

Referer field in HTTP request header, indicating the source URL information of the request.

http\_user\_agent

http\_user\_agent

User-Agent field in HTTP request header, containing client browser identification, operating system identification, and other information about the request source.

http\_x\_forwarded\_for

http\_x\_forwarded\_for

X-Forwarded-For (XFF) field in client request header, used to identify the most original IP address of the client connecting to the web server through HTTP proxy or load balancing.

http\_x\_real\_ip

real\_client\_ip

Custom field in HTTP request header, mainly used to store the real request IP, generally corresponding to the first x\_forword\_for. If this field does not exist, the IP field that establishes the connection can be used.

request\_length

request\_length

Number of bytes in the client request, including request line, request header, and request body. Unit: Byte.

request\_method

request\_method

Method of the client request.

request\_time

duration

Time taken to process the client request. Unit: milliseconds.

request\_uri

request\_uri

Full request path + parameters

dst\_port

dst\_port

Port number of the specific network device. For example, WAF engine IP and SLB gateway port.

status

status

HTTP status code received by the client. For example, 200 (indicating the request was successful).

dst\_ip

dst\_ip

Specific network device IP. For example, WAF engine IP and SLB gateway IP.

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the bound account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp in seconds

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extended field content

None

log\_uuid

Log flag

None

content\_type

HTTP request body format.

None

http\_cookie

Cookie field in HTTP request header, indicating the cookie information of the client source.

None

querystring

Query string in the client request, specifically the part after the question mark (?) in the requested URL.

None

request\_path

Requested relative path, specifically the part after the domain name and before the question mark (?) in the requested URL (excluding the query string).

None

request\_body

Access request body

None

request\_content\_length

Access request body length, unit: bytes

None

response\_content\_type

Response content\_type

None

response\_content\_length

Response body length, unit: bytes

None

response\_set\_cookie

Response cookie

None

response\_info

Response body

None

final\_action

Final action of the device

None

final\_plugin

Final protection module of the device

None

final\_rule\_id

Final rule ID hit by the device

None

final\_rule\_type

Final rule type hit by the device

log\_name

None

Offline

src\_port

None

Offline

body\_bytes\_sent

None

Offline

read\_request\_time

None

Offline

domain

None

Offline

scheme

None

Offline

server\_proto

None

Offline

slb\_port

None

Offline

slb\_id

None

Offline

ssl\_cipher

None

Offline

ssl\_protocol

None

Offline

tcpinfo\_rtt

None

Offline

occur\_time

None

Offline

upstream\_addr

None

Offline

upstream\_response\_time

None

Offline

upstream\_status

None

Offline

vip\_addr

None

Offline

write\_response\_time

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

**Object Storage Service (OSS) logs**

**OSS hourly metering logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

request\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

audited\_action\_type

None

Offline

audited\_action

None

Offline

audited\_object

None

Offline

domain

None

Offline

bucket\_name

None

Offline

raw\_data

None

Offline

**OSS access logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

cloud\_type

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

request\_id

request\_id

Request ID

user\_agent

http\_user\_agent

User agent

error\_code

error\_code

Failed code

extend\_information

extend\_content

Extension field content

access\_id

access\_id

AccessKey pair

bucket

bucket

Object Storage bucket

host

host

Host field in HTTP request.

http\_method

request\_method

Method requested by the client.

object

object

Object

operation

operation

Operation type

owner\_id

owner\_id

Object Storage owner

request\_uri

request\_uri

Request URI

sign\_type

sign\_type

Logon status

None

product\_code

Cloud service code

None

category

Activity directory

None

schema

Activity classification

None

log\_uuid

Log flag

None

src\_ip

Request IP

None

request\_path

The relative path being requested, specifically the part of the requested URL after the domain name and before the question mark (?) (not including the query string).

log\_name

None

Offline

acc\_access\_region

None

Offline

bucket\_location

None

Offline

bucket\_storage\_type

None

Offline

client\_ip

None

Offline

content\_length\_in

None

Offline

content\_length\_out

None

Offline

delta\_data\_size

None

Offline

http\_status

None

Offline

http\_type

None

Offline

logging\_flag

None

Offline

object\_size

None

Offline

referer

None

Offline

request\_length

None

Offline

response\_body\_length

None

Offline

response\_time

None

Offline

restore\_priority

None

Offline

server\_cost\_time

None

Offline

sync\_request

None

Offline

time

None

Offline

vpc\_addr

None

Offline

vpc\_id

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

**OSS batch deletion logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

src\_ip

src\_ip

Source IP, same as operator IP

http\_user\_agent

http\_user\_agent

User agent

request\_id

request\_id

Request ID

domain

host

Host field in HTTP request.

bucket\_name

bucket

Object Storage bucket

object\_name

object

Object

request\_method

request\_method

Method requested by the client.

request\_url

request\_uri

Request URI

request\_path

request\_path

The relative path being requested, specifically the part of the requested URL after the domain name and before the question mark (?) (not including the query string).

asset\_id

access\_id

AccessKey pair

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

owner\_id

Object Storage owner

None

operation

Operation type

None

sign\_type

Logon status

None

error\_code

Error code

log\_name

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

audited\_action\_type

None

Offline

audited\_action

None

Offline

audited\_object

None

Offline

operator\_user\_id

None

Offline

operator\_user\_name

None

Offline

operator\_user\_ip

None

Offline

raw\_data

None

Offline

request\_time

None

Offline

request\_paramters

None

Offline

request\_length

None

Offline

response\_body\_size

None

Offline

http\_referer

None

Offline

http\_status

None

Offline

net\_connect\_dir

None

Offline

asset\_list

None

Offline

**File Storage NAS logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud Alibaba Cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud log owner account ID

log\_code

log\_code

Log code, specific access data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

occur\_time

None

Offline

class\_name

None

Offline

inode

None

Offline

auth\_code

None

Offline

status\_code

None

Offline

application\_protocol\_name

None

Offline

nfs\_protocol\_procedures

None

Offline

total\_bytes

None

Offline

request\_id

None

Offline

remote\_inode

None

Offline

src\_ip

None

Offline

application\_protocol\_version

None

Offline

dst\_ip

None

Offline

nfs\_instance\_id

None

Offline

instance\_id

None

Offline

time\_zone

None

Offline

asset\_list

None

Offline

raw\_data

None

Offline

**Function Compute FC logs**

**V1.0 field**

**V2.0 field**

**Description**

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

Alibaba Cloud account ID to which the log belongs

log\_code

log\_code

Log code, specific data source integrated

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

start\_time

start\_time

Start timestamp in seconds, also used to indicate the time of occurrence

end\_time

end\_time

End timestamp in seconds

log\_time

log\_time

Log timestamp in seconds

category\_name

category

Activity directory

activity\_name

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

log\_name

None

Offline

occur\_time

None

Offline

time\_zone

None

Offline

class\_name

None

Offline

api\_name

None

Offline

asset\_id

None

Offline

asset\_name

None

Offline

asset\_type

None

Offline

raw\_data

None

Offline

**ActionTrail logs**

**V1.0 field**

**V2.0 field**

**Description**

log\_code

log\_code

Log code, specific data source

main\_user\_id

cloud\_user\_id

Other cloud account ID. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the attached account ID.

sub\_user\_id

user\_id

ID of the Alibaba Cloud account to which the logs belong

log\_time

log\_time

Log timestamp in seconds

end\_time

end\_time

End timestamp in seconds

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

event\_id

event\_id

Event ID

event\_name

event\_name

Event name

region\_code

region\_id

Area ID

request\_id

request\_id

Request ID

resource\_name

account\_name

Account name

resource\_type

account\_type

Audit account type

RAM/Main/STS

service\_name

service\_name

Service name

version

event\_version

Event version

error\_code

error\_code

Failed code

error\_message

error\_message

Failure details

event\_source

event\_source

Event source

request\_parameters

request\_paramters

Request parameters

src\_ip

src\_ip

Source IP, same as operator IP

user\_agent

user\_agent

Request proxy

access\_key\_id

access\_id

access\_key

principal\_id

principal\_id

Current requester ID

None

product\_code

Cloud service code

None

start\_time

Start timestamp in seconds, also used to indicate the time of event occurrence

None

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

service\_domain

Service domain name

None

account\_id

Audit account ID

None

response\_detail

Response result

stamp

None

Offline

time

None

Offline

to

None

Offline

user

None

Offline

trail\_detail

None

Offline

rw\_parser

None

Offline

source\_ip\_address

None

Offline

user\_name

None

Offline

dm

None

Offline

rw

None

Offline

log\_name

None

Offline

api\_name

None

Offline

event\_type

None

Offline

from

None

Offline

extra\_encode

None

Offline

model

None

Offline

r0

None

Offline

r1

None

Offline

r2

None

Offline

r3

None

Offline

ak

None

Offline

**CloudConfig logs**

**V1.0 field**

**V2.0 field**

**Description**

cloud\_user\_id

cloud\_user\_id

The ID of other cloud accounts. If it is an Alibaba Cloud account, it is the same as aliuid. If it is another cloud account, it is the ID of the attached account.

aliuid

user\_id

The Alibaba Cloud account ID to which the log belongs

log\_code

log\_code

Log code, specific data source

product\_code

product\_code

Cloud service code

cloud\_code

cloud\_code

Cloud code, enumeration values:

-   alibaba\_cloud
    
-   huawei\_cloud
    
-   tencent\_cloud
    

log\_time

log\_time

Log timestamp, in seconds

category\_name

category

Activity directory

None

schema

Activity classification

None

extend\_content

Extension field content

None

log\_uuid

Log flag

None

start\_time

Start timestamp, in seconds, also used to indicate the time of occurrence

None

end\_time

End timestamp, in seconds

log\_name

None

Offline

resource\_arn

None

Offline

region\_code

None

Offline

availability\_zone\_code

None

Offline

resource\_config

None

Offline

data\_type

None

Offline

request\_id

None

Offline

resource\_create\_time

None

Offline

resource\_group\_id

None

Offline

resource\_id

None

Offline

resource\_name

None

Offline

resource\_type

None

Offline

raw\_data

None

Offline

occur\_time

None

Offline

time\_zone

None

Offline
