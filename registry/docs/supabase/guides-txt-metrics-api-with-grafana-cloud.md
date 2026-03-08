# Metrics API with Grafana Cloud

Grafana Cloud gives you a fully managed Prometheus endpoint plus hosted Grafana dashboards, which makes it the fastest way to explore the Supabase Metrics API without operating your own infrastructure.

Grafana maintains a [Supabase integration guide](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-supabase/) for Grafana Cloud. It runs on the same Metrics API documented here, but is community-maintained by Grafana, so feature coverage might differ from what Supabase officially supports.

## Prerequisites

- A Supabase project with access to the Metrics API (Secret API key `sb_secret_...`).
- A Grafana Cloud account with Prometheus metrics enabled (Free or Pro tier).
- A Grafana API token with the `metrics:write` and `metrics:read` scopes if you plan to push data manually.

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

## 1. Create a Grafana Cloud stack

1. Sign in to [Grafana Cloud](https://grafana.com/auth/sign-in).
2. Create (or select) a stack that has **Prometheus Metrics** enabled (Free and Pro tiers both work for this guide).

## 2. Configure the Supabase integration

1. Navigate to **Connections → Add new connection → Supabase** inside Grafana Cloud.
2. Provide:
   - Your Supabase project ref (e.g. `abcd1234`).
   - The Metrics API endpoint: `https://<project-ref>.supabase.co/customer/v1/privileged/metrics`.
   - HTTP Basic Auth credentials (`service_role` / `sb_secret_...`).
3. Choose the scrape interval (1 minute recommended) and test the connection. Grafana Cloud will deploy an agent in the background that scrapes the Metrics API and forwards the data to Prometheus.

If you prefer to reuse an existing Grafana Agent deployment, configure an [integration pipeline](https://grafana.com/docs/grafana-cloud/send-data/agent/integrations/integration-reference/integration-supabase/) with the same URL and credentials.

## 3. Import the Supabase dashboard

1. Open your Grafana Cloud dashboard list and click **New → Import**.
2. Paste the raw contents of [`supabase-grafana/dashboard.json`](https://raw.githubusercontent.com/supabase/supabase-grafana/refs/heads/main/grafana/dashboard.json).
3. When prompted for the datasource, choose the Prometheus instance that receives the Supabase metrics.

This dashboard includes 200+ charts grouped by CPU, IO, connections, replication, WAL, and bloat indicators.

## 4. Configure alerts (optional)

The [`docs/example-alerts.md`](https://github.com/supabase/supabase-grafana/blob/main/docs/example-alerts.md) file contains suggested alert rules (disk saturation, long-running queries, replication lag, etc.). Import the alert rules into Grafana Cloud’s Alerting UI or translate them into Grafana Cloud’s managed alert rule format.

## 5. Troubleshooting

- Metrics missing? Ensure the Grafana Cloud agent can reach `https://<project-ref>.supabase.co` and that the selected Secret API key is still valid.
- 401 errors? Create/rotate a Secret API key in [Project Settings → API Keys](/dashboard/project/_/settings/api-keys) and update the Grafana Cloud credentials.
- Long scrape durations? Reduce label cardinality in your Grafana queries or lower the time range to focus on recent data.
