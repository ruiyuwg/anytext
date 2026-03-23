If 0.0.0.0/0 is not included in the whitelists of the Message Queue for Apache Kafka instance, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is included in the whitelists of a Message Queue for Apache Kafka instance, the instance allows access from all IP addresses. This causes high security risks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not included in the whitelists of the Message Queue for Apache Kafka instance, the evaluation result is Compliant.
-   If 0.0.0.0/0 is included in a whitelist of the Message Queue for Apache Kafka instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-ymc-1a5-s28)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

kafka-instance-public-access-check

Rule identifier

kafka-instance-public-access-check

Tag

Kafka and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Message Queue for Apache Kafka instances

Input parameter

None

## Incompliance remediation

Delete 0.0.0.0/0 from all whitelists of Message Queue for Apache Kafka instances. For more information, see [Configure whitelists](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist#concept-113174-zh).
