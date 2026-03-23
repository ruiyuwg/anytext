# LangSmith for Enterprise

Source: https://docs.langchain.com/langsmith/enterprise

Deployment options, access control, data privacy, cost controls, and security compliance for Enterprise users.

This page is a reference hub for enterprise teams and includes information on features that are important for your organization, like [deployment options](#deployment-options), [access control](#access-control), [data privacy](#data-privacy-and-pii), and [cost controls](#cost-controls-and-usage).

For more details on the available LangSmith plans, review the [pricing plans](/langsmith/pricing-plans) page.

## Deployment options

Choose how to host LangSmith to match your infrastructure and data residency requirements.

```
Host LangSmith in LangSmith's managed cloud with US or EU data residency.



Run the control plane in LangSmith's cloud and your data plane in your own VPC for full data isolation.



Deploy LangSmith entirely within your own infrastructure using Docker Compose or Kubernetes.
```

## User management

Manage users and automate provisioning across your organization.

```
Invite users, assign roles, and configure SCIM for automated provisioning and deprovisioning.



Configure SAML or OIDC single sign-on and just-in-time user provisioning for your identity provider.



Create and configure organizations, workspaces, and the user hierarchy within your enterprise.



Programmatically manage users, configure security settings, and administer your organization via API.
```

## Access control

Control who can access what within your organization.

```
Define permissions per workspace using built-in or custom roles. Available exclusively on Enterprise plans.



Apply fine-grained, tag-based access policies to restrict resource access—including blocking PII data from specific users.



Use multi-workspace models to isolate teams, establish trust boundaries, and separate environments.



Tag resources for use with ABAC policies and to organize environments like dev, staging, and prod.
```

## Data privacy and PII

Control how sensitive data is stored and accessed.

```
Understand what LangSmith stores, how encryption works, and how to opt out of telemetry and tracing.



Use ABAC deny policies to restrict access to traces and datasets that contain personally identifiable information.
```

## Data retention & cleanup

Configure how long data is retained and how to delete it.

```
Set custom retention periods, delete traces by metadata, and meet deletion requirements.



Understand base vs. extended retention tiers, auto-upgrades, and how retention affects billing.
```

## Cost controls and usage

Track and limit spending across your organization.

```
Set monthly usage limits, track prepaid commitment burndown, and optimize tracing spend.



Break down trace usage by workspace, project, user, or API key to attribute costs across teams.
```

## Security & compliance

Review LangSmith's security posture and compliance certifications.

```
Review the security responsibilities shared between LangChain and your organization. LangSmith holds SOC 2 Type II, HIPAA, and GDPR certifications.



Review SLA guarantees, disaster recovery strategies, and high availability configurations.
```

For questions about enterprise pricing or to get started, [contact our sales team](https://www.langchain.com/contact-sales).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/enterprise.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
