ApsaraDB RDS provides a variety of attack mitigation methods, such as DDoS attack mitigation, traffic scrubbing, and SQL injection detection.

## DDoS attack mitigation

When you access an ApsaraDB RDS instance from the Internet, the RDS instance is vulnerable to DDoS attacks. ApsaraDB RDS provides the traffic scrubbing and blackhole filtering features that are automatically triggered and terminated by the ApsaraDB RDS security system. When a DDoS attack is detected, the ApsaraDB RDS security system first scrubs the inbound traffic. If traffic scrubbing is not sufficient or if the blackhole triggering threshold is reached, blackhole filtering is triggered.

**Important** We recommend that you access RDS instances over an internal network to prevent DDoS attacks.

## Traffic scrubbing

Traffic scrubbing only targets traffic from the Internet and does not affect normal operations on your RDS instance.

Traffic scrubbing is triggered for an RDS instance if any of the following conditions are met:

-   Packets per second (PPS) reaches 30,000.
-   Bits per second (BPS) reaches 180 Mbit/s.
-   The number of new concurrent connections per second reaches 10,000.
-   The number of active concurrent connections reaches 10,000.
-   The number of inactive concurrent connections reaches 100,000.

## Blackhole filtering

Blackhole filtering only targets traffic from the Internet. If blackhole filtering is triggered for an RDS instance, the instance cannot be accessed from the Internet and connected applications become unavailable. Blackhole filtering guarantees availability of RDS instances.

Blackhole filtering is triggered for an RDS instance if any of the following conditions are met:

-   BPS reaches 2 Gbit/s.
-   Traffic scrubbing is ineffective.

Blackhole filtering is terminated if the following condition is met:

Blackhole filtering is automatically deactivated in 2.5 hours.
