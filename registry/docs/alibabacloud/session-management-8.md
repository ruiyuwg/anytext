When performance issues or operation exceptions occur on a database, you can troubleshoot the issues or exceptions based on the session information about the database. The session management feature allows you to view the statistics about sessions between an instance and clients in real time. The statistics include the client information, commands that are run, and connection duration. You can also terminate abnormal sessions based on your business requirements.

## Prerequisites

The database instance is connected to Data Autonomy Service (DAS) and is in the **Normal Access** state.

## **Limits**

For Redis instances deployed in the cluster architecture, you cannot obtain the session information that is generated in [direct connection mode](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance).

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  In the left-side pane, click **Instance Sessions**.
    
5.  On the **Instance Sessions** tab, perform the following operations in the **Instance Sessions** and **Session Statistics** sections:
    
    -   Terminate sessions.
        
    -   View summary information and session statistics by access source. The summary information includes the total number of clients and the number of active clients.
        
    -   Export summary information and session statistics by access source.
        
    

## **Parameters**

**Note**

In the **Instance Sessions** section, you can move the pointer over a parameter name in the corresponding column of the table to view the description of the parameter.

**Parameter**

**Description**

**Parameter**

**Description**

id

The client ID.

sub

The number of subscribed channels.

addr

The IP address and port number of the client.

psub

The number of subscribed patterns.

name

The client name.

multi

The number of commands executed in the transaction.

cmd

The most recently executed command.

qbuf

The size of the input buffer.

age

The connection duration in seconds.

qbuf-free

The available size of the input buffer.

idle

The idle time in seconds.

obl

The size of the fixed output buffer.

db

The database that the client is being connected to.

oll

The length of the object list in the dynamic output buffer.

flags

The client flags can contain the following letters:

-   O: The client is a replica node in **MONITOR** mode.
    
-   S: The client is a replica node in **normal** mode.
    
-   M: The client is a **master** node.
    
-   x: The client is executing a transaction.
    
-   b: The client is waiting for a blocking event.
    
-   i: The client is waiting for VM I/O operations (deprecated).
    
-   d: A watched key has been modified, and the EXEC command will fail.
    
-   c: The connection will be closed after the reply is completely written.
    
-   u: The client is unblocked.
    
-   U: The client is connected through a UNIX socket.
    
-   r: The client is a read-only cluster node.
    
-   A: The connection will be closed as quickly as possible.
    
-   N: No flags are set.
    

omem

The size of the output buffer.

fd

The file descriptor used by the socket.

events

The read/write readiness of the client socket in the event loop:

-   r: The client socket in the event loop is readable.
    
-   w: The client socket in the event loop is writable.
    

## Related API operations

**API** **operation**

**Description**

[GetRedisAllSession](/help/en/das/developer-reference/api-das-2020-01-16-getredisallsession)

Queries the current sessions of a Redis instance.

[KillInstanceAllSession](/help/en/das/developer-reference/api-das-2020-01-16-killinstanceallsession)

Terminates all sessions of a Redis instance.
