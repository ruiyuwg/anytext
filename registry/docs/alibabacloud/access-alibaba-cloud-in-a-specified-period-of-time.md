This topic uses an example policy to demonstrate how to authorize a RAM user to access Alibaba Cloud in a specified period of time.

The following policy indicates that the authorized RAM user can only access Alibaba Cloud ECS before 17:00 on August 12, 2019 (UTC+8). In this case, the `acs:CurrentTime` condition key in the `Condition` element is set to `2019-08-12T17:00:00+08:00`.

```
{
  "Statement": [
    {
      "Action": "ecs:*",
      "Effect": "Allow",
      "Resource": "*",
      "Condition": {
          "DateLessThan": {
              "acs:CurrentTime": "2019-08-12T17:00:00+08:00"
          }
      }
    }
  ],
  "Version": "1"
}
```

**Note**

The `Condition` element only applies to the actions specified for the current policy. You can change the `2019-08-12T17:00:00+08:00` value as needed.
