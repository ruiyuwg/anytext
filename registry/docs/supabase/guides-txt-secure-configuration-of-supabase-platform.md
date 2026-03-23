# Secure configuration of Supabase platform

The Supabase hosted platform provides a secure by default configuration. Some organizations may however require further security controls to meet their own security policies or compliance requirements.

Access to additional security controls can be found under the [security tab](/dashboard/org/_/security) for organizations.

## Available controls

Additional security controls are under active development. Any changes will be published here and
in our [changelog](/changelog).

### Enforce multi-factor authentication (MFA)

Organization owners can choose to enforce MFA for all team members.

For configuration information, see [Enforce MFA on Organization](/docs/guides/platform/mfa/org-mfa-enforcement)

### SSO for organizations

Supabase offers single sign-on (SSO) as a login option to provide additional account security for your team. This allows company administrators to enforce the use of an identity provider when logging into Supabase.

For configuration information, see [Enable SSO for Your Organization](/docs/guides/platform/sso).

### Postgres SSL enforcement

Supabase projects support connecting to the Postgres DB without SSL enforced to maximize client compatibility. For increased security, you can prevent clients from connecting if they're not using SSL.

For configuration information, see [Postgres SSL Enforcement](/docs/guides/platform/ssl-enforcement)

Controlling this at the organization level is on our roadmap.

### Network restrictions

Each Supabase project comes with configurable restrictions on the IP ranges that are allowed to connect to Postgres and its pooler ("your database"). These restrictions are enforced before traffic reaches the database. If a connection is not restricted by IP, it still needs to authenticate successfully with valid database credentials.

For configuration information, see [Network Restrictions](/docs/guides/platform/network-restrictions)

Controlling this at the organization level is on our roadmap.

### PrivateLink

PrivateLink provides enterprise-grade private network connectivity between your AWS VPC and your Supabase database using AWS VPC Lattice. This eliminates exposure to the public internet by creating a secure, private connection that keeps your database traffic within the AWS network backbone.

For configuration information, see [PrivateLink](/docs/guides/platform/privatelink)

PrivateLink is currently in beta. To establish PrivateLink with a Read Replica, reach out to your account rep.

# Secure configuration of Supabase products

The Supabase [production checklist](/docs/guides/deployment/going-into-prod) provides detailed advice on preparing an app for production. While our [SOC 2](/docs/guides/security/soc-2-compliance) and [HIPAA](/docs/guides/security/hipaa-compliance) compliance documents outline the roles and responsibilities for building a secure and compliant app.

Various products at Supabase have their own hardening and configuration guides, below is a definitive list of these to help guide your way.

## Auth

- [Password security](/docs/guides/auth/password-security)
- [Rate limits](/docs/guides/auth/rate-limits)
- [Bot detection / Prevention](/docs/guides/auth/auth-captcha)
- [JWTs](/docs/guides/auth/jwts)

## Database

- [Row Level Security](/docs/guides/database/postgres/row-level-security)
- [Column Level Security](/docs/guides/database/postgres/column-level-security)
- [Hardening the Data API](/docs/guides/api/hardening-data-api)
- [Additional security controls for the Data API](/docs/guides/api/securing-your-api)
- [Custom claims and role based access control](/docs/guides/api/custom-claims-and-role-based-access-control-rbac)
- [Managing Postgres roles](/docs/guides/database/postgres/roles)
- [Managing secrets with Vault](/docs/guides/database/vault)
- [Superuser access and unsupported operations](docs/guides/database/postgres/roles-superuser)

## Storage

- [Object ownership](/docs/guides/storage/security/ownership)
- [Access control](/docs/guides/storage/security/access-control)
  - The Storage API docs contain hints about required [RLS policy permissions](/docs/reference/javascript/storage-createbucket)
- [Custom roles with the storage schema](/docs/guides/storage/schema/custom-roles)

## Realtime

- [Authorization](docs/guides/realtime/authorization)
