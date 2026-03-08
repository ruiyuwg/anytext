# Agencies: Navigating the Spring 2025 Organization Changes

> \[!NOTE]
> This developer guide was contributed by Tom Smith (Principal Solutions Architect at Sanity).

With the recent Spring 2025 release, Sanity has introduced several new powerful features, some of which are on the organization level. This change makes it essential for agencies to consider how they structure their client projects within Sanity.

These new features include:

- Media Library for centralized asset management
- Sanity Canvas for AI-assisted content creation
- Functions for serverless automation
- Agent Actions for schema-aware AI workflows
- A centralized organization Dashboard and Insights for unified content operations

As part of our Content Operating System launch, Sanity has started a shift from being project-centric to organization-centric. Features like Media Library, Functions (compute resources), and Content Releases are now shared and managed at the organization level, with pricing structured accordingly. This change makes it essential for agencies to consider how they structure their client projects within Sanity.

## Moving to an organization-centric model

Historically some agencies have created a single organization owned by the agency with many projects for each client. This approach was typically done to centralize project management and oversight. However, with Sanity's organization-centric features, agencies who maintain a single organization for all their clients will be sharing these resources and their associated costs across all projects. This can lead to inefficient resource allocation, mix ups and billing challenges when trying to determine which client should be charged for what usage.

By creating separate organizations for each client, you can:

- Clearly separate billing and resource usage by client
- Provide clients with their own Media Library for asset management
- Enable clients to manage their own user permissions and access controls (enterprise projects)
- Allow for more accurate tracking of compute and API usage per client
- Simplify the eventual handoff process when projects are completed

## How to make the switch

### Project Transfer Process

If you're an agency looking to move client projects to their own organizations, here's how to do it. You can also see this in [our documentation](https://www.sanity.io/docs/platform-management/plans-and-payments).

1. **Create a new organization for the client** - You can either create this organization yourself (and be an admin on it initially)

- Or ask your client to create their own organization and prepare to receive the transfer

2. **Initiate the project transfer**  - Log into [Sanity Manage](https://www.sanity.io/manage)

- Select the project you want to transfer
- Navigate to the project settings
- Find the transfer option and select the receiving organization

3. **Complete the transfer** - If you have billing rights in both organizations, the transfer happens instantly

- Otherwise, a billing manager in the receiving organization must approve the transfer
- Once approved, billing is automatically prorated between organizations

### Billing Considerations

When transferring projects between organizations:

- The sender is refunded the already paid amount for the remainder of the month
- The receiver is charged for the remainder of the month at the time of transfer
- The receiving organization becomes responsible for any overage charges accrued on the project
- The transfer does not change the project plan or resource quotas

## Best Practices for Agencies

1. **Plan your organization structure in advance** - Always create client-specific organizations from the start for new projects

- For existing clients, discuss the transfer process and benefits before making changes

2. **Document ownership and access** - Clearly define who will have admin access to the client organization

- Determine if the agency needs ongoing admin access or if it will be fully transferred

3. **Communicate pricing implications** - Explain to clients how organization-level features like Media Library and Functions are billed

- Help clients understand the benefits of having their own dedicated resources

4. **Consider timing** - Schedule transfers at the beginning of billing cycles when possible to minimize proration complexity

- Plan transfers during lower-activity periods to minimize disruption

## Summary: Benefits for Clients

Moving clients to their own organizations provides several advantages:

- **Resource isolation**: Client assets and compute resources are completely separate from other clients
- **Simplified billing**: Clients receive clear, dedicated billing for their Sanity usage
- **Better security**: Access controls are isolated to just the client's content
- **Ownership clarity**: Clients have full control over their content infrastructure, and future changes in agencies won't impact them negatively (although of course, hopefully that doesn't happen!)
- **Easier scaling**: Organization-level features can be scaled according to each client's specific needs

## Next Steps

Moving from a single agency-owned organization to client-specific organizations aligns with Sanity's evolution into a complete Content Operating System. This structural change not only provides clearer resource allocation and billing but also enables both agencies and clients to take full advantage of Sanity's new organization-centric features. For agencies managing multiple client projects, we recommend:

1. **Audit your current organization structure** - Identify which client projects should be moved to their own organizations
2. **Create a migration timeline** - Prioritize transfers based on client needs and feature usage
3. **Update your onboarding process** - Adjust how you set up new client projects to start with dedicated organizations
4. **Communicate the benefits** - Help clients understand why this change improves their experience with Sanity By embracing this organization-centric approach, agencies can provide better service to their clients while taking full advantage of Sanity's powerful new features like Media Library, Canvas, and Functions—all while maintaining clear boundaries between client resources and billing.

If you have questions about this transition or need assistance with project transfers, please reach out to our support team or join our community Discord for guidance.
