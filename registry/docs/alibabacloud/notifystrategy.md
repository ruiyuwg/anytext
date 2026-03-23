This topic describes the NotifyStrategy parameter that is used to specify a retry policy. The retry policy is applied if an error occurs during message delivery from a Simple Message Queue (formerly MNS) topic to an endpoint. You can specify one of the following retry policies when you create a subscription to the topic.

**Retry policy**

**Description**

**Parameter**

Backoff retry

Retry for 3 times. The retry interval is a random value between 10 seconds and 20 seconds.

BACKOFF\_RETRY

Exponential decay retry

Retry for 176 times. The retry interval exponentially increases to 512 seconds, and the total retry period is 1 day. The specific interval of each retry is: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512... 512 seconds, including 167 retry intervals of 512 seconds in total.

EXPONENTIAL\_DECAY\_RETRY
