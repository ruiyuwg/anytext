### Project permissions across roles

The table below shows the actions each role can take on the resources belonging to the project.

| Resource                                                                                               | Action                 |                  Owner                  |                  Admin                  |                Developer                |                        Read-Only\[^4]\[^6]                        |
| ------------------------------------------------------------------------------------------------------ | ---------------------- | :-------------------------------------: | :-------------------------------------: | :-------------------------------------: | :-------------------------------------------------------------: |
| **Project**                                |                        |                                         |                                         |                                         |                                                                 |
| Project Management                                                                                     | Transfer               |  |                      |                      |                                              |
|                                                                                                        | Create                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
|                                                                                                        | Update (Name)          |  |  |                      |                                              |
|                                                                                                        | Pause                  |  |  |                      |                                              |
|                                                                                                        | Restore                |  |  |                      |                                              |
|                                                                                                        | Restart                |  |  |  |                                              |
| Custom Domains                                                                                         | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Data (Database)                                                                                        | View                   |  |  |  |       |
|                                                                                                        | Manage                 |  |  |  |                                              |
| **Infrastructure**           |                        |                                         |                                         |                                         |                                                                 |
| Read Replicas                                                                                          | List                   |  |  |  |                          |
|                                                                                                        | Create                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
| Add-ons                                                                                                | Update                 |  |  |                      |                                              |
| **Integrations**       |                        |                                         |                                         |                                         |                                                                 |
| Authorize GitHub                                                                                       | -                      |  |  |  |                          |
| Add GitHub Repositories                                                                                | -                      |  |  |  |                          |
| GitHub Connections                                                                                     | Create                 |  |  |                      |                                              |
|                                                                                                        | Update                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
|                                                                                                        | View                   |  |  |  |                          |
| Vercel Connections                                                                                     | Create                 |  |  |                      |                                              |
|                                                                                                        | Update                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
|                                                                                                        | View                   |  |  |  |                          |
| **Database Configuration** |                        |                                         |                                         |                                         |                                                                 |
| Reset Password                                                                                         | -                      |  |  |                      |                                              |
| Pooling Settings                                                                                       | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| SSL Configuration                                                                                      | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Disk Size Configuration                                                                                | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Network Restrictions                                                                                   | View                   |  |  |  |                          |
|                                                                                                        | Create                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
| Network Bans                                                                                           | View                   |  |  |  |                          |
|                                                                                                        | Unban                  |  |  |                      |                                              |
| **API Configuration**                |                        |                                         |                                         |                                         |                                                                 |
| API Keys                                                                                               | Read service key       |  |  |  |                                              |
|                                                                                                        | Read anon key          |  |  |  |                                              |
| JWT Secret                                                                                             | View                   |  |  |  |                                              |
|                                                                                                        | Generate new           |  |  |                      |                                              |
| API settings                                                                                           | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| **Auth Configuration**             |                        |                                         |                                         |                                         |                                                                 |
| Auth Settings                                                                                          | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| SMTP Settings                                                                                          | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |  |                                              |
| Advanced Settings                                                                                      | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| **Storage Configuration**    |                        |                                         |                                         |                                         |                                                                 |
| Upload Limit                                                                                           | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| S3 Access Keys                                                                                         | View                   |  |  |  |                                              |
|                                                                                                        | Create                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
| **Edge Functions Configuration**   |                        |                                         |                                         |                                         |                                                                 |
| Secrets                                                                                                | View                   |  |  |  |  \[^5] |
|                                                                                                        | Create                 |  |  |                      |                                              |
|                                                                                                        | Delete                 |  |  |                      |                                              |
| **SQL Editor**                       |                        |                                         |                                         |                                         |                                                                 |
| Queries                                                                                                | Create                 |  |  |  |                          |
|                                                                                                        | Update                 |  |  |  |                          |
|                                                                                                        | Delete                 |  |  |  |                          |
|                                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | List                   |  |  |  |                          |
|                                                                                                        | Run                    |  |  |  |  \[^7] |
| **Database**                             |                        |                                         |                                         |                                         |                                                                 |
| Scheduled Backups                                                                                      | View                   |  |  |  |                          |
|                                                                                                        | Download               |  |  |  |                                              |
|                                                                                                        | Restore                |  |  |  |                                              |
| Physical backups (PITR)                                                                                | View                   |  |  |  |                          |
|                                                                                                        | Restore                |  |  |  |                                              |
| **Authentication**                               |                        |                                         |                                         |                                         |                                                                 |
| Users                                                                                                  | Create                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
|                                                                                                        | List                   |  |  |  |                          |
|                                                                                                        | Send OTP               |  |  |  |                                              |
|                                                                                                        | Send password recovery |  |  |  |                                              |
|                                                                                                        | Send magic link        |  |  |  |                                              |
|                                                                                                        | Remove MFA factors     |  |  |  |                                              |
| Providers                                                                                              | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Rate Limits                                                                                            | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Email Templates                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| URL Configuration                                                                                      | View                   |  |  |  |                          |
|                                                                                                        | Update                 |  |  |                      |                                              |
| Hooks                                                                                                  | View                   |  |  |  |                          |
|                                                                                                        | Create                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
| **Storage**                                |                        |                                         |                                         |                                         |                                                                 |
| Buckets                                                                                                | Create                 |  |  |  |                                              |
|                                                                                                        | Update                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
|                                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | List                   |  |  |  |                          |
| Files                                                                                                  | Create (Upload)        |  |  |  |                                              |
|                                                                                                        | Update                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
|                                                                                                        | List                   |  |  |  |                          |
| **Edge Functions**                               |                        |                                         |                                         |                                         |                                                                 |
| Edge Functions                                                                                         | Update                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
|                                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | List                   |  |  |  |                          |
| **Reports**                      |                        |                                         |                                         |                                         |                                                                 |
| Custom Report                                                                                          | Create                 |  |  |  |                                              |
|                                                                                                        | Update                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |
|                                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | List                   |  |  |  |                          |
| **Logs & Analytics**                   |                        |                                         |                                         |                                         |                                                                 |
| Queries                                                                                                | Create                 |  |  |  |                          |
|                                                                                                        | Update                 |  |  |  |                          |
|                                                                                                        | Delete                 |  |  |  |                          |
|                                                                                                        | View                   |  |  |  |                          |
|                                                                                                        | List                   |  |  |  |                          |
|                                                                                                        | Run                    |  |  |  |                          |
| **Branching**                          |                        |                                         |                                         |                                         |                                                                 |
| Production Branch                                                                                      | Read                   |  |  |  |                          |
|                                                                                                        | Write                  |  |  |  |                                              |
| Development Branches                                                                                   | List                   |  |  |  |                          |
|                                                                                                        | Create                 |  |  |  |                                              |
|                                                                                                        | Update                 |  |  |  |                                              |
|                                                                                                        | Delete                 |  |  |  |                                              |

\[^1]: Available on the Team and Enterprise Plans.

\[^2]: Sending anonymous data to OpenAI is opt in and can improve Studio AI Assistant's responses.

\[^3]: Invites sent from a SSO account can only be accepted by another SSO account coming from the same identity provider. This is a security measure that prevents accidental invites to accounts not managed by your company's enterprise systems.

\[^4]: Available on the Team and Enterprise Plans.

\[^5]: Read-Only role is able to access secrets.

\[^6]: Listed permissions are for the API and Dashboard.

\[^7]: Limited to executing SELECT queries. SQL Query Snippets run by the Read-Only role are run against the database using the **supabase\_read\_only\_user**. This role has the [predefined Postgres role pg\_read\_all\_data](https://www.postgresql.org/docs/current/predefined-roles.html).

# AWS Marketplace

You can purchase Supabase through the AWS Marketplace. Buying through AWS Marketplace can mean simpler billing, faster progress toward your AWS spend commitments, and centralized purchasing across all your AWS accounts. Start the purchase process from our marketplace [product page](https://aws.amazon.com/marketplace/pp/prodview-zjciuce2qsb3q).

When you make a purchase on AWS Marketplace, AWS will calculate sales taxes, VAT, GST, service tax, etc. (“Indirect Taxes”), if applicable, based on the location of your AWS account. You can find more details in the [AWS tax help guide](https://aws.amazon.com/tax-help/marketplace-buyers/).

### Plans available through the AWS Marketplace

- Free Plan: not available
- Pro Plan: available, self-serve
- Team Plan: available, self-serve
- Enterprise Plan: available, via AWS Marketplace Private Offer. [Contact us](https://forms.supabase.com/enterprise) for more information.

## More information

- Implications of managing your Supabase organization through the AWS Marketplace. Refer to the [Account Setup guide](./aws-marketplace/account-setup#implications-of-linking-a-supabase-organization-to-a-marketplace-subscription).
- [AWS Marketplace FAQ](./aws-marketplace/faq)
- General guidance on using the AWS Marketplace as a buyer. Refer to the [AWS documentation](https://docs.aws.amazon.com/marketplace/latest/buyerguide/using-aws-marketplace-as-a-subscriber.html).

## Next steps

- Purchase Supabase through the AWS Marketplace. Refer to the [Getting Started guide](./aws-marketplace/getting-started).
