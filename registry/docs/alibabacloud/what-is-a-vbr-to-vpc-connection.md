You can create a peering connection between a virtual border router (VBR) and a virtual private cloud (VPC) to enable private communication.

**Note**

You cannot use VBR-to-VPC connections by default. To use VBR-to-VPC connections, contact your account manager.

## Initiator and acceptor

A VBR-to-VPC connection is established by using an initiator and an acceptor. Only the initiator can initiate the peering connection. The acceptor must wait for the initiator to initiate the peering connection. The initiator and the acceptor are only used to control how a peering connection is established. Data transmission between the initiator and the acceptor is bidirectional. Therefore, after a peering connection is established, both the initiator and the acceptor can send and receive data.

For a VBR-to-VPC connection, the system automatically creates an initiator and an acceptor. You do not need to manually send a connection request. The system automatically initiates a connection request and then establishes a connection.

The following table describes the differences between an initiator and an acceptor.

**Item**

**Initiator**

**Accepter**

Connect to a VPC that belongs to the same region

Free of charge

Free of charge

Connect to a VPC that belongs to another region

Charged

Free of charge

Whether the configuration of the peer is required before a connection is initiated

Required

Required

Initiate connection requests

Supported

Not supported

Send messages to the peer after a connection is established

Supported

Supported

## Connection stages and states

The initiator of a peering connection sends a connection request to the acceptor. After the acceptor accepts the request, the peering connection is established.

The following table describes the states of a peering connection at different stages.

**Description**

**Initiator status**

**Accepter status**

Send a connection request from the initiator

Connecting

Accepting

Connected

Activated

Activated

Suspend a connection

Suspending

Suspending

Connection closed

Suspended

Suspended

Reinitiate a connection

Activating

Activating

Connection established

Activated

Activated

## Billing

**Item**

**Description**

**Supported operation**

**Expiration or overdue payments**

Pay-as-you-go

You are charged on a daily basis for the peering connections that you use. Unit: USD/day. If you use peering connections for less than one day, the usage duration is rounded up to one day. A bill is generated and settled at 00:00 each day based on the usage of peering connections of the previous day.

**Important**

After a peering connection is suspended, you are still charged by using the pay-as-you-go billing method. If you no longer need a peering connection, you can delete the peering connection to stop billing.

Real-time upgrade and downgrade

-   The initiator instance can still provide services within 15 days after the payment becomes overdue.
    
-   If you do not complete the payment 15 days after the payment becomes overdue, the initiator instance is suspended. You cannot manage a suspended initiator instance.
    
-   If you do not complete the payment 15 days after the initiator instance is suspended, the initiator instance is automatically deleted. An email notification is sent to you one day before the initiator instance is deleted. After the initiator instance is deleted, the configurations and data of the initiator instance are deleted and cannot be restored.
    

You are charged only for the initiator of a VBR-to-VPC connection. You are not charged for the acceptor. The fees vary based on the bandwidth value of the initiator VPC and the geographical distance between the initiator VPC and the acceptor VPC.

-   You are not charged if VPC instances are deployed in the same region.
    
-   For more information about prices of cross-region peering connections, visit the [buy page](https://expressconnect.console.alibabacloud.com/peerconnection/cn-hangzhou/vbr2vpc/buy). If you have other questions, contact your account manager.
