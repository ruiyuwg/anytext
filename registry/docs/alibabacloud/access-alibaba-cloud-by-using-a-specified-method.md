This topic uses an example policy to demonstrate how to authorize a RAM user to access Alibaba Cloud by using a specified method.

The following policy indicates that the authorized RAM user can only access Alibaba Cloud ECS through HTTPS. In this case, the `acs:SecureTransport` condition key in the `Condition` element is set to `true`.

```
{
  "Statement": [
    {
      "Action": "ecs:*",
      "Effect": "Allow",
      "Resource": "*",
      "Condition": {        
        "Bool": {
          "acs:SecureTransport": "true"
        }
      }
    }
  ],
  "Version": "1"
}
```

**Note**

The `Condition` element only applies to the actions specified for the current policy. You can set the `acs:SecureTransport` condition key to `true` or `false`.
