# Metrics API

Every Supabase project exposes a [Prometheus](https://prometheus.io/)-compatible **Metrics API** endpoint that surfaces ~200 Postgres performance and health series. You can scrape it into any observability stack to power custom dashboards, alerting rules, or long-term retention that goes beyond what Supabase Studio provides out of the box.

The Metrics API is currently in beta. Metric names and labels might evolve as we expand the dataset, and the feature is not available in self-hosted Supabase instances.

## What you can do with the Metrics API

- Stream database CPU, IO, WAL, connection, and query stats into Prometheus-compatible systems.
- Combine Supabase metrics with application signals in Grafana, Datadog, or any other observability vendor.
- Reuse our [supabase-grafana dashboard JSON](https://github.com/supabase/supabase-grafana) to bootstrap over 200 ready-made charts.
- Build your own alerting policies (right-sizing, saturation detection, index regression, and more).

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

## Choose your monitoring stack

Pick the workflow that best matches your tooling. Cards link to Supabase-authored guides or vendor integration docs, and some include a “Community” pill when there’s an accompanying vendor reference.

## Additional resources

- [Supabase Grafana repository](https://github.com/supabase/supabase-grafana) for dashboard JSON and alert examples.
- [Grafana Cloud’s Supabase integration doc](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-supabase/) (community-maintained, built on this Metrics API).
- [Datadog’s Supabase integration doc](https://docs.datadoghq.com/integrations/supabase/) (community-maintained, built on this Metrics API).
- [Log Drains ](/docs/guides/telemetry/log-drains) for exporting event-based telemetry alongside metrics.
- [Query Performance report](/dashboard/project/_/observability/query-performance) for built-in visualizations based on the same underlying metrics.
