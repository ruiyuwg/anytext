# Metrics API with Prometheus & Grafana (self-hosted)

Self-hosting [Prometheus](https://prometheus.io/docs/prometheus/latest/installation/) and Grafana gives you full control over retention, alert routing, and dashboards. The Supabase Metrics API slots into any standard Prometheus scrape job, so you can run everything locally, on a VM, or inside Kubernetes.

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

Grafana also documents a [Supabase integration reference](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-supabase/). While it targets Grafana Cloud, the scrape and agent settings apply equally to self-hosted clusters and offer a community-maintained companion to this guide.

## Architecture

1. **Prometheus** scrapes `https://<project-ref>.supabase.co/customer/v1/privileged/metrics` every minute using HTTP Basic Auth.
2. **Grafana** reads from Prometheus and renders dashboards/alerts.
3. (Optional) **Alertmanager** or your preferred system sends notifications when Prometheus rules fire.

## 1. Deploy Prometheus

Install [Prometheus](https://prometheus.io/docs/prometheus/latest/installation/) using your preferred method (Docker, Helm, binaries). Then add a Supabase-specific job to `prometheus.yml`:

```yaml
scrape_configs:
  - job_name: 'supabase'
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

- Keep the scrape interval at 60 seconds to match Supabase’s refresh cadence.
- If you run Prometheus behind a proxy, make sure it can establish outbound HTTPS connections to `*.supabase.co`.
- Store secrets (Secret API key) with your secret manager or inject them via environment variables.

## 2. Deploy Grafana

Install Grafana (Docker image, Helm chart, or packages) and connect it to Prometheus:

1. In Grafana, go to **Connections → Data sources → Add data source**.
2. Choose **Prometheus**, set the URL to your Prometheus endpoint (for example `http://prometheus:9090`), and click **Save & test**.

## 3. Import Supabase dashboards

1. Go to **Dashboards → New → Import**.
2. Paste the contents of [`supabase-grafana/dashboard.json`](https://raw.githubusercontent.com/supabase/supabase-grafana/refs/heads/main/grafana/dashboard.json).
3. Select your Prometheus datasource when prompted.

You now have over 200 production-ready panels covering CPU, IO, WAL, replication, index bloat, and query throughput.

## 4. Configure alerting

- Import the sample rules from [`docs/example-alerts.md`](https://github.com/supabase/supabase-grafana/blob/main/docs/example-alerts.md) into Prometheus or Grafana Alerting.
- Tailor thresholds (for example, disk utilization, long-running transactions, connection saturation) to your project’s size.
- Route notifications via Alertmanager, Grafana OnCall, PagerDuty, or any other supported destination.

## 5. Operating tips

- **Multiple projects:** add one scrape job per project ref so you can separate metrics and labels cleanly.
- **Right-sizing guidance:** pair the dashboards with Supabase’s [Query Performance report](/dashboard/project/_/observability/query-performance) and [Advisors](/dashboard/project/_/observability/database) to decide when to optimize vs upgrade.
- **Security:** rotate Secret API keys on a regular cadence and update the Prometheus config accordingly.
