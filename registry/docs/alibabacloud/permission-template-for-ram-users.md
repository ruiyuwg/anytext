## Authorization policy

For more information about the authorization policies of DataHub, see [Access control](/help/en/datahub/access-control).

## Template

The following template defines that authorized RAM users can obtain all permissions on only the test\_ss project:

```
{
  "Statement": [
    {
      "Action": [
        "dhs:ListProject"
      ],
      "Effect": "Allow",
      "Resource": "acs:dhs:*:*:projects/*"
    },
    {
      "Action": [
        "dhs:GetProject"
      ],
      "Effect": "Allow",
      "Resource": "acs:dhs:*:*:projects/test_ss"
    },
    {
      "Action": [
        "dhs:*Topic",
        "dhs:*Shard",
        "dhs:*Subscription",
        "dhs:*Connector",
        "dhs:*Records"
      ],
      "Effect": "Allow",
      "Resource": "acs:dhs:*:*:projects/test_ss/topics/*"
    }
  ],
  "Version": "1"
}
```
