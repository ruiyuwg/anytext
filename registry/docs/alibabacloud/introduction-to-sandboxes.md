This topic introduces sandboxes and the features of sandboxes. This topic also describes the impacts on domain names that are in a sandbox.

## What is a sandbox?

A sandbox is a set of special points of presence (POPs) for Alibaba Cloud CDN. The POPs are isolated from regular POPs and are used to isolate high-risk acceleration services.

## When is a domain name added to a sandbox?

Alibaba Cloud CDN provides content delivery for thousands of accelerated domain names. If an accelerated domain name is under attack, such as DDoS attacks or HTTP flood attacks, or experiences significant increases in bandwidth or QPS due to traffic spikes that are not reported to Alibaba Cloud, Alibaba Cloud CDN can add the attacked domain name to a sandbox based on factors such as the service status of the domain name and the impact of the attack. This ensures that the acceleration services of other users can work as expected. If the attack is severe, other accelerated domain names that belong to the same account are also added to the sandbox, and new domain names cannot be added to the account.

## What happens after an accelerated domain name is added to a sandbox?

After an accelerated domain name is added to a sandbox, Alibaba Cloud CDN cannot ensure service quality, and the domain name may be unavailable for a period of time.

If the acceleration region of a domain name is outside the Chinese mainland and the domain name does not have an Internet Content Provider (ICP) number, the domain name becomes inaccessible after it is added to a sandbox.

## Will I be charged for a domain name that is added to a sandbox?

If your domain name that violates the Alibaba Cloud CDN or DCDN limits is under attack, Alibaba Cloud CDN or DCDN does not bear any responsibility and all fees that are generated are borne by you.

After an accelerated domain name is added to a sandbox, visits to the accelerated domain name continue to generate data transfer fees.

## Can I remove domain names from sandboxes?

To ensure that other users can use their services as expected, you cannot remove domain names from sandboxes.

**Important**

For users whose services are frequently attacked or are attacked due to violations of the product limits, Alibaba Cloud CDN can terminate acceleration services based on factors such as the service status of the domain names and the impact of the attacks.

## How do I check whether a domain name is added to a sandbox?

After an accelerated domain name is added to a sandbox, you will be notified by a text message. You can also log on to the CDN console to check the domain status.

## How do I resolve the issue after a domain name is added to the sandbox?

By default, Alibaba Cloud CDN provides acceleration services, but does not provide protection against attacks. You can choose to use DDoS mitigation or Alibaba Cloud Security Services based on your requirements. For more information, see [DDoS mitigation](/help/en/edge-security-acceleration/dcdn/user-guide/edge-ddos-protection/) or visit the [Alibaba Cloud Security Services](https://www.alibabacloud.com/product/security) page.
