### Organization permissions across roles

The table below shows the actions each role can take on the resources belonging to the organization.

| Resource                                                                                                    | Action     |                  Owner                  |              Administrator              |                Developer                |              Read-Only\[^1]              |
| ----------------------------------------------------------------------------------------------------------- | ---------- | :-------------------------------------: | :-------------------------------------: | :-------------------------------------: | :-------------------------------------: |
| **Organization**                                        |            |                                         |                                         |                                         |                                         |
| Organization Management                                                                                     | Update     |  |                      |                      |                      |
|                                                                                                             | Delete     |  |                      |                      |                      |
| OpenAI Telemetry Configuration\[^2]                                                                          | Update     |  |                      |                      |                      |
| **Members**                                       |            |                                         |                                         |                                         |                                         |
| Organization Members                                                                                        | List       |  |  |  |  |
| Owner                                                                                                       | Add        |  |                      |                      |                      |
|                                                                                                             | Remove     |  |                      |                      |                      |
| Administrator                                                                                               | Add        |  |  |                      |                      |
|                                                                                                             | Remove     |  |  |                      |                      |
| Developer                                                                                                   | Add        |  |  |                      |                      |
|                                                                                                             | Remove     |  |  |                      |                      |
| Owner (Project-Scoped)                                                                                      | Add        |  |                      |                      |                      |
|                                                                                                             | Remove     |  |                      |                      |                      |
| Administrator (Project-Scoped)                                                                              | Add        |  |  |                      |                      |
|                                                                                                             | Remove     |  |  |                      |                      |
| Developer (Project-Scoped)                                                                                  | Add        |  |  |                      |                      |
|                                                                                                             | Remove     |  |  |                      |                      |
| Invite                                                                                                      | Revoke     |  |  |                      |                      |
|                                                                                                             | Resend     |  |  |                      |                      |
|                                                                                                             | Accept\[^3] |  |  |  |  |
| **Billing**                                     |            |                                         |                                         |                                         |                                         |
| Invoices                                                                                                    | List       |  |  |  |  |
| Billing Email                                                                                               | View       |  |  |  |  |
|                                                                                                             | Update     |  |  |                      |                      |
| Subscription                                                                                                | View       |  |  |  |  |
|                                                                                                             | Update     |  |  |                      |                      |
| Billing Address                                                                                             | View       |  |  |  |  |
|                                                                                                             | Update     |  |  |                      |                      |
| Tax Codes                                                                                                   | View       |  |  |  |  |
|                                                                                                             | Update     |  |  |                      |                      |
| Payment Methods                                                                                             | View       |  |  |  |  |
|                                                                                                             | Update     |  |  |                      |                      |
| Usage                                                                                                       | View       |  |  |  |  |
| **Integrations (Org Settings)** |            |                                         |                                         |                                         |                                         |
| Authorize GitHub                                                                                            | -          |  |  |                      |                      |
| Add GitHub Repositories                                                                                     | -          |  |  |                      |                      |
| GitHub Connections                                                                                          | Create     |  |  |                      |                      |
|                                                                                                             | Update     |  |  |                      |                      |
|                                                                                                             | Delete     |  |  |                      |                      |
|                                                                                                             | View       |  |  |  |  |
| Vercel Connections                                                                                          | Create     |  |  |                      |                      |
|                                                                                                             | Update     |  |  |                      |                      |
|                                                                                                             | Delete     |  |  |                      |                      |
|                                                                                                             | View       |  |  |  |  |
| **OAuth Apps**                                      |            |                                         |                                         |                                         |                                         |
| OAuth Apps                                                                                                  | Create     |  |  |                      |                      |
|                                                                                                             | Update     |  |  |                      |                      |
|                                                                                                             | Delete     |  |  |                      |                      |
|                                                                                                             | List       |  |  |  |  |
| **Audit Logs**                                      |            |                                         |                                         |                                         |                                         |
| View Audit logs                                                                                             | -          |  |  |  |  |
| **Legal Documents**                       |            |                                         |                                         |                                         |                                         |
| SOC2 Type 2 Report                                                                                          | Download   |  |  |  |  |
| Security Questionnaire                                                                                      | Download   |  |  |  |  |
