# Vercel Enterprise Managed Infrastructure

Vercel prices its [CDN](/docs/cdn) resources by region to help optimize costs and performance for your projects. This is to ensure you are charged based on the resources used in the region where your project is deployed.

### Managed Infrastructure Units

Managed Infrastructure Units (MIUs) serve as both a financial commitment and a measurement of the infrastructure consumption of an Enterprise project. They are made up of a variety of resources like Fast Data Transfer, Edge Requests, and more.

**MIUs are billed monthly and do not roll over from month to month**.

### Regional pricing

The following table lists the usage amounts for each resource in Managed Infrastructure Units. Resources that depend on the region of your Vercel project are listed according to the region.

Use the dropdown to select the region you are interested in.

| Resource | Price | Included (Pro) |
|----------|-------|----------------|
| [Fast Data Transfer](/docs/pricing/regional-pricing) | Regional | First 1 TB |
| [Fast Origin Transfer](/docs/pricing/regional-pricing) | Regional | N/A |
| [Edge Requests](/docs/pricing/regional-pricing) | Regional | First 10,000,000 |
| [Edge Request Additional CPU Duration](/docs/pricing/regional-pricing) | Regional | 1 Hour |
| [Image Optimization Transformations](/docs/image-optimization) | Regional | 10K/month |
| [Image Optimization Cache Reads](/docs/image-optimization) | Regional | 600K/month |
| [Image Optimization Cache Writes](/docs/image-optimization) | Regional | 200K/month |
| [WAF Rate Limiting](/docs/vercel-firewall/vercel-waf/rate-limiting) | Regional | First 1,000,000 Allowed Requests |
| [OWASP CRS per request number](/docs/vercel-firewall/vercel-waf/managed-rulesets) | Regional | N/A |
| [OWASP CRS per request size](/docs/vercel-firewall/vercel-waf/managed-rulesets) | Regional | 4KB of each inspected request |
| [Blob Storage Size](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | 5GB/month |
| [Blob Simple Operations](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 100,000 |
| [Blob Advanced Operations](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 10,000 |
| [Blob Data Transfer](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 100 GB |
| [Private Data Transfer](/docs/connectivity/static-ips) | Regional | N/A |
| [Queue API Operations](/docs/queues/pricing) | Regional | N/A |
| [ISR Reads](/docs/runtime-cache) | Regional | First 10,000,000 |
| [ISR Writes](/docs/runtime-cache) | Regional | First 2,000,000 |

### Fluid compute regional pricing

The following table shows the regional pricing for fluid compute resources on Vercel. The prices are per hour for CPU and per GB-hr for memory:

| Region                         | Active CPU time (per hour) | Provisioned Memory (GB-hr) |
| ------------------------------ | -------------------------- | -------------------------- |
| Washington, D.C., USA (iad1)   | 0.128 MIUs                 | 0.0106 MIUs                |
| Cleveland, USA (cle1)          | 0.128 MIUs                 | 0.0106 MIUs                |
| San Francisco, USA (sfo1)      | 0.177 MIUs                 | 0.0147 MIUs                |
| Portland, USA (pdx1)           | 0.128 MIUs                 | 0.0106 MIUs                |
| Cape Town, South Africa (cpt1) | 0.200 MIUs                 | 0.0166 MIUs                |
| Hong Kong (hkg1)               | 0.176 MIUs                 | 0.0146 MIUs                |
| Mumbai, India (bom1)           | 0.140 MIUs                 | 0.0116 MIUs                |
| Osaka, Japan (kix1)            | 0.202 MIUs                 | 0.0167 MIUs                |
| Seoul, South Korea (icn1)      | 0.169 MIUs                 | 0.0140 MIUs                |
| Singapore (sin1)               | 0.160 MIUs                 | 0.0133 MIUs                |
| Sydney, Australia (syd1)       | 0.180 MIUs                 | 0.0149 MIUs                |
| Tokyo, Japan (hnd1)            | 0.202 MIUs                 | 0.0167 MIUs                |
| Frankfurt, Germany (fra1)      | 0.184 MIUs                 | 0.0152 MIUs                |
| Dublin, Ireland (dub1)         | 0.168 MIUs                 | 0.0139 MIUs                |
| London, UK (lhr1)              | 0.177 MIUs                 | 0.0146 MIUs                |
| Paris, France (cdg1)           | 0.177 MIUs                 | 0.0146 MIUs                |
| Stockholm, Sweden (arn1)       | 0.160 MIUs                 | 0.0133 MIUs                |
| Dubai, UAE (dxb1)              | 0.185 MIUs                 | 0.0153 MIUs                |
| São Paulo, Brazil (gru1)       | 0.221 MIUs                 | 0.0183 MIUs                |
| Montréal, Canada (yul1)        | 0.147 MIUs                 | 0.0121 MIUs                |

### Additional usage based products

The following table lists the MIUs for additional usage based products in Managed Infrastructure.

| Resource | Price | Included (Pro) |
|----------|-------|----------------|
| [Fast Data Transfer](/docs/pricing/regional-pricing) | Regional | First 1 TB |
| [Function Invocations](/docs/functions/usage-and-pricing#managing-function-invocations) | $0.60 per 1,000,000 Invocations | First 1,000,000 |
| [Fast Origin Transfer](/docs/pricing/regional-pricing) | Regional | N/A |
| [Edge Requests](/docs/pricing/regional-pricing) | Regional | First 10,000,000 |
| [Image Optimization Source Images (Legacy)](/docs/image-optimization/legacy-pricing#source-images) | $5.00 per 1,000 Images | First 5,000 |
| [Edge Request Additional CPU Duration](/docs/pricing/regional-pricing) | Regional | 1 Hour |
| [Edge Config Reads](/docs/edge-config/using-edge-config) | $3.00 | First 1,000,000 |
| [Edge Config Writes](/docs/edge-config/using-edge-config) | $1.00 | First 1,000 |
| [Web Analytics Events](/docs/analytics/limits-and-pricing#what-is-an-event-in-vercel-web-analytics) | $0.00003 per Event | First 100,000 Events |
| [Image Optimization Transformations](/docs/image-optimization) | Regional | 10K/month |
| [Image Optimization Cache Reads](/docs/image-optimization) | Regional | 600K/month |
| [Speed Insights Data Points](/docs/speed-insights/metrics#understanding-data-points) | $0.65 | First 10,000 |
| [Image Optimization Cache Writes](/docs/image-optimization) | Regional | 200K/month |
| [WAF Rate Limiting](/docs/vercel-firewall/vercel-waf/rate-limiting) | Regional | First 1,000,000 Allowed Requests |
| [Monitoring Events](/docs/monitoring/limits-and-pricing#how-are-events-counted) | $1.20 per 1,000,000 Events | 250,000 Included |
| [Observability Plus Events](/docs/observability#tracked-events) | $1.20 | 1,000,000 Included |
| [OWASP CRS per request number](/docs/vercel-firewall/vercel-waf/managed-rulesets) | Regional | N/A |
| [OWASP CRS per request size](/docs/vercel-firewall/vercel-waf/managed-rulesets) | Regional | 4KB of each inspected request |
| [Blob Storage Size](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | 5GB/month |
| [Blob Simple Operations](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 100,000 |
| [Blob Advanced Operations](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 10,000 |
| [Blob Data Transfer](/docs/vercel-blob/usage-and-pricing#pricing) | Regional | First 100 GB |
| [Private Data Transfer](/docs/connectivity/static-ips) | Regional | N/A |
| [Workflow Storage](/docs/workflow#pricing) | $0.00069 per GB-Hour | Based on usage |
| [Workflow Steps](/docs/workflow#pricing) | $2.50 per 100,000 Steps | Based on usage |
| [Queue API Operations](/docs/queues/pricing) | Regional | N/A |
| [Drains](/docs/drains#usage-and-pricing) | $0.50 per 1 GB | N/A |
| [ISR Reads](/docs/runtime-cache) | Regional | First 10,000,000 |
| [ISR Writes](/docs/runtime-cache) | Regional | First 2,000,000 |

title: "Managing Cron Jobs"
description: "Learn how to manage Cron Jobs effectively in Vercel. Explore cron job duration, error handling, deployments, concurrency control, local execution, and more to optimize your serverless workflows."
last\_updated: "2026-03-23T09:40:08.009Z"
source: "https://vercel.com/docs/cron-jobs/manage-cron-jobs"
