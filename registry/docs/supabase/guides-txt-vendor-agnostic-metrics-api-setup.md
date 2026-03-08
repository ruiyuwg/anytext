# Vendor-agnostic Metrics API setup

The Supabase Metrics API is intentionally vendor-agnostic. Any collector that can scrape a Prometheus text endpoint over HTTPS can ingest the data. This guide explains the moving pieces so you can adapt them to AWS Managed Prometheus, Grafana Mimir, VictoriaMetrics, Thanos, or any other system.

div]:space-y-4 p-4">
What you can do with the Metrics API} id="how-do-i-check-when-a-user-went-through-mfa" className="border-0 px-2 py-4">
Every Supabase project exposes a metrics feed at `https://<project-ref>.supabase.co/customer/v1/privileged/metrics`. Replace `<project-ref>` with the identifier from your project URL or from the dashboard sidebar.

````
1.  Copy your project reference and confirm the base URL using the helper below.



2.  Configure your collector to scrape once per minute. The endpoint already emits the full set of metrics on each request.
3.  Authenticate with HTTP Basic Auth:

*   **Username**: `service_role`
*   **Password**: a **Secret API key** (`sb_secret_...`). You can create/copy it in [**Project Settings → API Keys**](/dashboard/project/_/settings/api-keys). For more context, see [Understanding API keys](/docs/guides/api/api-keys).

Testing locally is as simple as running `curl` with your Secret API key:

```bash
curl <project-url>/customer/v1/privileged/metrics \
--user 'service_role:sb_secret_...'
```

You can provision long-lived automation tokens in two ways:

*   Create an account access token once at [**Account Settings > Access Tokens**](/dashboard/account/tokens) and reuse it wherever you configure observability tooling.
*   **Optional**: programmatically exchange an access token for project API keys via the [Management API](/docs/reference/api/management-projects-api-keys-retrieve).

```bash
# (Optional) Exchange an account access token for project API keys
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
"https://api.supabase.com/v1/projects/$PROJECT_REF/api-keys?reveal=true"
```
````

## Components

- **Collector** – Prometheus, Grafana Agent, VictoriaMetrics agent, Mimir scraper, etc.
- **Long-term store (optional)** – Managed Prometheus, Thanos, Mimir, VictoriaMetrics.
- **Visualization/alerting** – Grafana, Datadog, New Relic, custom code.

## 1. Define the scrape job

No matter which collector you use, you need to hit the Metrics API once per minute with HTTP Basic Auth:

```yaml
- job_name: supabase
  scrape_interval: 60s
  metrics_path: /customer/v1/privileged/metrics
  scheme: https
  basic_auth:
    username: service_role
    password: '<secret API key (sb_secret_...)>'
  static_configs:
    - targets:
        - '<project-ref>.supabase.co:443'
      labels:
        project: '<project-ref>'
```

### Collector-specific notes

- **Grafana Agent / Alloy:** use the [`prometheus.scrape` component](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-supabase/#manual-configuration) with the same parameters.
- **AWS Managed Prometheus (AMP):** deploy the Grafana Agent or AWS Distro for OpenTelemetry (ADOT) in your VPC, then remote-write the scraped metrics into AMP.
- **VictoriaMetrics / Mimir:** reuse the same scrape block; configure remote-write or retention rules as needed.

## 2. Secure the credentials

- Store the Secret API key in your secret manager (AWS Secrets Manager, GCP Secret Manager, Vault, etc.).
- Rotate the key periodically via [Project Settings → API Keys](/dashboard/project/_/settings/api-keys) and update your collector.
- If you need to give observability vendors access without exposing a broadly-scoped key, create a dedicated Secret API key for metrics-only automation.

## 3. Downstream dashboards

- Import the [Supabase Grafana dashboard](https://github.com/supabase/supabase-grafana) regardless of where Grafana is hosted.
- For other tools, group metrics by categories (CPU, IO, WAL, replication, connections) and recreate the visualizations that matter most to your team.
- Tag or relabel series with `project`, `env`, or `team` labels to make multi-project views easier.

## 4. Alerts and automation

- Start with the [example alert rules](https://github.com/supabase/supabase-grafana/blob/main/docs/example-alerts.md) and adapt thresholds for your workload sizes.
- Pipe alerts into PagerDuty, Slack, Opsgenie, or any other compatible target.
- Combine Metrics API data with log drains, Query Performance, and Advisors to build right-sizing playbooks.

## 5. Multi-project setups

- Create one scrape job per project ref so you can control sampling individually.
- If you run many projects, consider templating the scrape jobs via Helm, Terraform, or the Grafana Agent Operator.
- Use label joins (`project`, `instance_class`, `org`) to aggregate across tenants or environments.

# Pricing

You are charged for the total size of all assets in your buckets.

per GB-Hr ( per GB per month). You are only
charged for usage exceeding your subscription plan's quota.

| Plan       | Quota in GB | Over-Usage per GB       | Quota in GB-Hrs | Over-Usage per GB-Hr         |
| ---------- | ----------- | ----------------------- | --------------- | ---------------------------- |
| Free       | 1           | -                       | 744             | -                            |
| Pro        | 100         |  | 74,400          |  |
| Team       | 100         |  | 74,400          |  |
| Enterprise | Custom      | Custom                  | Custom          | Custom                       |

For a detailed explanation of how charges are calculated, refer to [Manage Storage size usage](/docs/guides/platform/manage-your-usage/storage-size).

If you use [Storage Image Transformations](/docs/guides/storage/serving/image-transformations), additional charges apply.
