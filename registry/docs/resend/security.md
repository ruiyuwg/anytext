# Security

Source: https://resend.com/docs/security

An overview of Resend security features and practices.

## Governance

Resend establishes policies and controls, monitors compliance with those controls, and proves the security and compliance to third-party auditors.

Our policies are based on the following **foundational principles**:

```
Access should be limited to only those with a legitimate business needs,
based on the principle of least privilege.



Security controls should be applied consistently across all areas of the
enterprise.



Security controls should be implemented and layered according to the
principle of defense-in-depth.



The implementation of controls should be iterative, continuously improving
effectiveness and decreasing friction.
```

### Compliance Standards

```
Resend is SOC 2 Type II compliant. The audit was completed by Vanta & Advantage Partners.
You can download a copy of the report on the [Documents](https://resend.com/settings/documents) page.



Resend is GDPR compliant. You can learn more about our [GDPR compliance](https://resend.com/security/gdpr) or view our [DPA](https://resend.com/legal/dpa).
```

## Data Protection

```
All datastores are encrypted at rest. Sensitive collections and tables also
use row-level encryption.



Resend uses TLS 1.3 or higher everywhere data is transmitted over
potentially insecure networks.



Resend backs-up all production data using a point-in-time approach. Backups
are persisted for 30 days, and are globally replicated for resiliency
against regional disasters.
```

## Product Security

### Penetration testing

Resend engages with third-party firms to conduct penetration testing at least annually.

All areas of the Resend product and cloud infrastructure are in-scope for these assessments, and source code is fully available to the testers in order to maximize the effectiveness and coverage.

You can download the latest penetration test report on the [Documents](https://resend.com/settings/documents) page.

### Vulnerability scanning

Resend uses multiple vulnerability monitoring techniques including code-level scanning, dependency scanning, and security reviews to identify and remediate vulnerabilities.

Vulnerabilities are prioritized based on severity and risk, and are remediated according to the following schedule:

- Critical: 15 Days
- High: 30 Days
- Medium: 90 Day
- Low: 180 Days
- Informational: As needed

## Enterprise Security

```
All company devices are equipped with anti-malware protection. Endpoint security alerts are monitored with 24/7/365 coverage. We use MDM software to enforce secure configuration of endpoints, such as disk encryption, screen lock configuration, and software updates.



Resend provides comprehensive security training to all employees upon onboarding and annually.

Resend's conducts threat briefings with employees to inform them of important security and safety-related updates that require special attention or action.



Resend employees are granted access to applications based on their role, and automatically deprovisioned upon termination of their employment. Further access must be approved according to the policies set for each application.

Multi-factor authentication is required for all employees to access company applications.
```

## Responsible Disclosure

To report a vulnerability, please check the guidelines on the [Responsible Disclosure](https://resend.com/security/responsible-disclosure) page.

# Send emails with Astro

Source: https://resend.com/docs/send-with-astro

Learn how to send your first email using Astro, Resend, and Node.js.
