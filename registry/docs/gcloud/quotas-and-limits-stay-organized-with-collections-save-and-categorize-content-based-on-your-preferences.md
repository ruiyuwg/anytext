-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Network Security Integration](https://docs.cloud.google.com/network-security-integration/docs)
-   [Resources](https://docs.cloud.google.com/network-security-integration/docs/resources)

Send feedback

# Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

This document lists the quotas and system limits that apply to Network Security Integration.

-   _Quotas_ have default values, but you can typically request adjustments.
-   _System limits_ are fixed values that can't be changed.

Google Cloud uses quotas to help ensure fairness and reduce spikes in resource use and availability. A quota restricts how much of a Google Cloud resource your Google Cloud project can use. Quotas apply to a range of resource types, including hardware, software, and network components. For example, quotas can restrict the number of API calls to a service, the number of load balancers used concurrently by your project, or the number of projects that you can create. Quotas protect the community of Google Cloud users by preventing the overloading of services. Quotas also help you to manage your own Google Cloud resources.

The Cloud Quotas system does the following:

-   Monitors your consumption of Google Cloud products and services
-   Restricts your consumption of those resources
-   Provides a way to [request changes to the quota value](/docs/quotas/help/request_increase) and [automate quota adjustments](/docs/quotas/quota-adjuster)

In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.

Quotas generally apply at the Google Cloud project level. Your use of a resource in one project doesn't affect your available quota in another project. Within a Google Cloud project, quotas are shared across all applications and IP addresses.

For more information, see the [Cloud Quotas overview](/docs/quotas/overview).

There are also _system limits_ on Network Security Integration resources. System limits can't be changed.

## Quotas

This section lists the quotas that apply to Network Security Integration.

To monitor per-project quotas that use Cloud Monitoring, set up monitoring for the metric `serviceruntime.googleapis.com/quota/allocation/usage` on the `Consumer Quota` resource type. Set additional label filters (`service`, `quota_metric`) to get to the quota type. For information about monitoring quota metrics, see [Chart and monitor quota metrics](/monitoring/alerts/using-quota-metrics). Each quota has a limit and a usage value.

Unless noted otherwise, to change a quota, see [Request a higher quota](/docs/quotas/view-manage#requesting_higher_quota).

### Per project

The following table highlights Network Security Integration quotas that are per project.

Quota

Description

[Global network firewall policies](https://console.cloud.google.com/iam-admin/quotas?service=compute.googleapis.com&metric=compute.googleapis.com/network_firewall_policies)

The number of [global network firewall policies](/firewall/docs/network-firewall-policies) in a project, regardless of how many VPC networks are associated with each policy.

**Note:** This quota is shared between Cloud Next Generation Firewall and Network Security Integration.

[Mirroring deployments per zone per project](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/mirroring-deployments-per-project-per-zone)

The number of mirroring deployments that you can create per zone in a project.

[Intercept deployments per zone per project](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/intercept-deployments-per-project-per-zone)

The number of intercept deployments that you can create per zone in a project.

[Mirroring deployment groups per project](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/mirroring-deployment-groups-per-project)

The number of mirroring deployment groups that you can create per project.

[Intercept deployment groups per project](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/intercept-deployment-groups-per-project)

The number of intercept deployment groups that you can create per project.

### Per organization

The following table highlights Network Security Integration quotas that are per organization. To change an organization-level quota, [file a support case](https://cloud.google.com/support-hub).

Quota

Description

[Unassociated Hierarchical firewall policies in an organization](https://console.cloud.google.com/iam-admin/quotas?service=compute.googleapis.com&metric=compute.googleapis.com/unassociated_hierarchical_firewall_policies_in_organization)

The number of [Hierarchical firewall policies](/firewall/docs/firewall-policies) in an organization that are not associated with any folder or organization resource. There is no limit on the number of Hierarchical firewall policies in an organization that are associated with a resource.

**Note:** This quota is shared between Cloud NGFW and Network Security Integration.

### Per firewall policy

The following table highlights Network Security Integration quotas that are per firewall policy resource.

Quota

Description

**Hierarchical firewall policies**

[Rule attributes per hierarchical firewall policy](https://console.cloud.google.com/iam-admin/quotas?service=compute.googleapis.com&metric=compute.googleapis.com/rule_attributes_per_hierarchical_firewall_policy)

The sum of rule attributes from all rules in a hierarchical firewall policy. For more information, see [Rule attribute count details](#per-firewall-policy-rule-attr-count).

This quota is shared by the firewall policy rules and mirroring rules. Therefore, if a hierarchical firewall policy contains both the firewall policy rules and the mirroring rules, the rule attributes from both rule types contribute to this quota.

**Global network firewall policies**

[Rule attributes per global network firewall policy](https://console.cloud.google.com/iam-admin/quotas?service=compute.googleapis.com&metric=compute.googleapis.com/rule_attributes_per_global_network_firewall_policy)

The sum of rule attributes from all rules in a global network firewall policy. For more information, see [Rule attribute count details](#per-firewall-policy-rule-attr-count).

This quota is shared by the firewall policy rules and mirroring rules. Therefore, if a global network firewall policy contains both the firewall policy rules and the mirroring rules, the rule attributes from both rule types contribute to this quota.

#### Rule attribute count details

Each firewall policy supports a maximum total number of rule attributes. The rule attribute count for a firewall policy is the sum of the rule attributes of its firewall rules and mirroring rules.

The following example _rules_ show how Google Cloud counts rule attributes on a per policy rule basis:

Example policy rule

Total rule attribute count

Explanation

A global network firewall policy with the following two rules:

-   Ingress allow firewall policy rule with source IP address range `10.100.0.1/32`, `tcp` protocol, and `5000-6000` port range.
-   Ingress mirroring rule with destination IP range `100.64.0.7/32` and `tcp` protocol with port `53-63`

6

-   **Rule attribute count for firewall policy rule**: one source range; one protocol, one port range
-   **Rule attribute count for mirroring rule**: one destination range; one protocol, one port range

### Per deployment group

The following table highlights Network Security Integration quotas that are per mirroring deployment group or per intercept deployment group.

Quota

Description

[Mirroring endpoint groups per mirroring deployment group](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/mirroring-endpoint-groups-per-deployment-group)

The maximum number of mirroring endpoint groups that you can associate with a mirroring deployment group.

[Intercept endpoint groups per intercept deployment group](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/intercept-endpoint-groups-per-deployment-group)

The maximum number of intercept endpoint groups that you can associate with an intercept deployment group.

### Per endpoint group

The following table highlights Network Security Integration quotas that are per mirroring endpoint group or per intercept endpoint group.

Quota

Description

[Security profile groups per mirroring endpoint group](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/security-profile-groups-per-mirroring-endpoint-group)

The maximum number of security profile groups with a security profile that references a mirroring endpoint group.

[Security profile groups per intercept endpoint group](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/security-profile-groups-per-intercept-endpoint-group)

The maximum number of security profile groups with a security profile that references an intercept endpoint group.

[Intercept endpoint group associations per endpoint group](https://console.cloud.google.com/iam-admin/quotas?service=networksecurity.googleapis.com&metric=networksecurity.googleapis.com/intercept-endpoint-group-associations-per-endpoint-group)

The maximum number of intercept endpoint group associations that can reference an intercept endpoint group.

## Limits

Limits _cannot_ be increased unless specifically noted.

### Per organization

The following limits apply to organizations:

Item

Limit

Notes

Security profile groups per organization

40

The maximum number of security profile groups that you can create per organization.

**Note:** This limit is shared between Cloud NGFW and Network Security Integration.

Mirroring endpoint groups per organization

1

The maximum number of mirroring endpoint groups that you can create per organization. To update this limit, [file a support case](https://cloud.google.com/support-hub).

### Per network

The following limits apply to VPC networks:

Item

Limit

Notes

Maximum global network firewall policies per network

1

The maximum number of global network firewall policies that you can associate with a VPC network.

### Per rule

The following limits apply to VPC firewall rules, firewall policy rules, and mirroring rules:

Item

Limit

Notes

Maximum number of source IP address ranges per firewall rule

5,000

The maximum number of source IP address ranges that you can specify in a VPC firewall rule, firewall policy rule, or mirroring rule. IP address ranges are either IPv4 only or IPv6 only. This limit cannot be increased.

Maximum number of destination IP address ranges per firewall rule

5,000

The maximum number of destination IP address ranges that you can specify in a VPC firewall rule, firewall policy rule, or mirroring rule. IP address ranges are either IPv4 only or IPv6 only. This limit cannot be increased.

### Per deployment group

The following limits apply to mirroring deployment groups and intercept deployment groups:

Item

Limit

Notes

Mirroring deployment and mirroring endpoint group association pairs per mirroring deployment group

1,000

For each mirroring deployment group, the maximum value of the product of the following two numbers:

-   The number of mirroring deployments that the mirroring deployment group references.
-   The number of mirroring endpoint group associations of the mirroring endpoint groups that reference the mirroring deployment group.

Intercept deployment and intercept endpoint group association pairs per intercept deployment group

1,000

For each intercept deployment group, the maximum value of the product of the following two numbers:

-   The number of intercept deployments that the intercept deployment group references.
-   The number of intercept endpoint group associations of the intercept endpoint groups that reference the intercept deployment group.

## Manage quotas

Network Security Integration enforces quotas on resource usage for various reasons. For example, quotas protect the community of Google Cloud users by preventing unforeseen spikes in usage. Quotas also help users who are exploring Google Cloud with the [free tier](/free/docs/gcp-free-tier) to stay within their trial.

All projects start with the same quotas, which you can change by [requesting additional quota](#requesting-additional-quota). Some quotas might increase automatically based on your use of a product.

### Permissions

To view quotas or request quota increases, Identity and Access Management (IAM) principals need one of the following roles.

Task

Required role

Check quotas for a project

One of the following:

-   Project [Owner](/iam/docs/roles-overview#basic) (`roles/owner`)
-   Project [Editor](/iam/docs/roles-overview#basic) (`roles/editor`)
-   [Quota Viewer](/iam/docs/roles-permissions/servicemanagement) (`roles/servicemanagement.quotaViewer`)

Modify quotas, request additional quota

One of the following:

-   Project [Owner](/iam/docs/roles-overview#basic) (`roles/owner`)
-   Project [Editor](/iam/docs/roles-overview#basic) (`roles/editor`)
-   [Quota Administrator](/iam/docs/roles-permissions/servicemanagement) (`roles/servicemanagement.quotaAdmin`)
-   A custom role with the `serviceusage.quotas.update` permission

### Check your quota

### Console

1.  In the Google Cloud console, go to the **Quotas** page.
    
    [Go to Quotas](https://console.cloud.google.com/iam-admin/quotas)
    
2.  To search for the quota that you want to update, use the **Filter table**. If you don't know the name of the quota, use the links on this page instead.

### gcloud

Using the Google Cloud CLI, run the following command to check your quotas. Replace `PROJECT_ID` with your own project ID.

    gcloud compute project-info describe --project PROJECT\_ID

To check your used quota in a region, run the following command:

    gcloud compute regions describe example-region
    

### Errors when exceeding your quota

If you exceed a quota with a `gcloud` command, `gcloud` outputs a `quota exceeded` error message and returns with the exit code `1`.

If you exceed a quota with an API request, Google Cloud returns the following HTTP status code: `413 Request Entity Too Large`.

### Request additional quota

To adjust most quotas, use the Google Cloud console. For more information, see [Request a quota adjustment](/docs/quotas/help/request_increase).

### Resource availability

Each quota represents a maximum number for a particular type of resource that you can create, if that resource is available. It's important to note that quotas _don't_ guarantee resource availability. Even if you have available quota, you can't create a new resource if it is not available.

For example, you might have sufficient quota to create a new regional, external IP address in a given region. However, that is not possible if there are no available external IP addresses in that region. Zonal resource availability can also affect your ability to create a new resource.

Situations where resources are unavailable in an entire region are rare. However, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource. For more information, review the relevant SLA for the resource.

## Related information

-   [Cloud NGFW quotas](/firewall/docs/quotas)
-   [VPC resource quotas](/vpc/docs/quota)
-   [Compute Engine resource quotas](/compute/quotas)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
