Managed Service for Grafana is a cloud-native O&M data visualization platform on Alibaba Cloud. It provides production-ready Grafana workspaces -- logically isolated Grafana environments where you build dashboards, set up alerts, and explore metrics, logs, and traces -- without provisioning servers or managing software updates.

Each workspace comes pre-integrated with Alibaba Cloud data sources, including database services, Message Queue, Managed Service for Prometheus, Simple Log Service (SLS), CloudMonitor, Application Real-Time Monitoring Service (ARMS), and Elasticsearch. Preset dashboards for these services provide immediate visibility into your cloud infrastructure.

Managed Service for Grafana is fully compatible with open-source Grafana. For details about the open-source project, see [Grafana official documentation](https://grafana.com/docs/grafana/latest/getting-started/).

## Why use Managed Service for Grafana?

### Zero infrastructure overhead

Alibaba Cloud handles server provisioning, high availability, security patches, and version upgrades. Deploy Grafana workspaces quickly and focus on building dashboards rather than maintaining infrastructure.

### Unified data view across sources

Connect Alibaba Cloud services, self-managed data stores in Virtual Private Clouds (VPCs) such as Elasticsearch and InfluxDB, and third-party cloud data sources within a single workspace. Correlate metrics, logs, and traces across systems in one view.

### Fine-grained access control

Manage who can view and edit dashboards and data sources through Alibaba Cloud Single Sign-On (SSO) or your own account system. Set permissions at the data source and dashboard level.

## Key features

### Cloud service integrations

Pre-built integrations with ARMS, Managed Service for Prometheus, CloudMonitor, SLS, and Elasticsearch provide ready-to-use data source configurations, preset dashboards, and alert rules. Start monitoring immediately after connecting a data source.

### VPC data sources

Connect data stores running in multiple VPCs within the same region to a single workspace. Query and alert on VPC-hosted data alongside cloud service data without migrating or duplicating anything.

### Multi-source queries

Query across multiple data sources in a single panel. Rename, aggregate, and group data sources, and run calculations that combine data from different systems.

### Alerts

Create, manage, and silence alerts from a centralized interface. Define alert conditions across any connected data source.

### Plug-in ecosystem

Extend your workspace with Grafana plug-ins that connect to additional data sources through APIs and render data in real time. No data migration required -- plug-ins read directly from your existing data stores.

### Panel editor

Build and customize visualizations through a consistent panel editor. Configure data options, apply transformations, and adjust display settings across all panel types from a single interface.

## Billing

For pricing details and billing rules, see [Billing rules](/help/en/arms/observable-visualization-grafana-edition/product-overview/billing-4).

## What's next

-   [Create a workspace](/help/en/arms/observable-visualization-grafana-edition/) to start building dashboards.
    
-   [Review billing rules](/help/en/arms/observable-visualization-grafana-edition/product-overview/billing-4) to understand pricing.
