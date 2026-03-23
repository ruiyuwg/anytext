# Policy violations

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/policies/violations.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Policy violations

Note

Only available to Enterprise customers with a paid add-on.

Shortly after you configure policies (or content security rules), the Cloudflare dashboard will start displaying any violations of those policies. This information will be available for policies with any [action](https://developers.cloudflare.com/page-shield/policies/#policy-actions) (*Allow* and *Log*).

Information about policy violations is also available via [GraphQL API](https://developers.cloudflare.com/analytics/graphql-api/) and [Logpush](https://developers.cloudflare.com/logs/logpush/).

## Review policy violations in the dashboard

To view policy violation information:

- [  New dashboard ](#tab-panel-5642)
- [ Old dashboard ](#tab-panel-5643)

1. In the Cloudflare dashboard, go to the **Security rules** page.\
   [ Go to **Security rules** ](https://dash.cloudflare.com/?to=/:account/:zone/security/security-rules)
2. (Optional) Filter by **Content security rules**.

- In the Cloudflare dashboard, go to **Security** > **Page Shield** > **Policies**.

The displayed information includes the following:

- A sparkline next to the policy/rule name, showing violations in the past seven days.
- For policies with associated violations, an expandable details section for each policy, with the top resources present in violation events and a sparkline per top resource.

## Get policy violations via GraphQL API

Use the [Cloudflare GraphQL API](https://developers.cloudflare.com/analytics/graphql-api/) to obtain policy violation information through the following dataset:

- `pageShieldReportsAdaptiveGroups`

You can query the dataset for policy violations occurred in the past 30 days.

Use [introspection](https://developers.cloudflare.com/analytics/graphql-api/features/discovery/introspection/) to explore the available fields the GraphQL schema. For more information, refer to [Explore the GraphQL schema](https://developers.cloudflare.com/analytics/graphql-api/getting-started/explore-graphql-schema/).

For an introduction to GraphQL querying, refer to [Querying basics](https://developers.cloudflare.com/analytics/graphql-api/getting-started/querying-basics/).

### Example

Example GraphQL query

```

query PageShieldReports(

  $zoneTag: string

  $datetimeStart: Time

  $datetimeEnd: Time

) {

  viewer {

    zones(filter: { zoneTag: $zoneTag }) {

      pageShieldReportsAdaptiveGroups(

        limit: 100

        orderBy: [datetime_ASC]

        filter: { datetime_geq: $datetimeStart, datetime_leq: $datetimeEnd }

      ) {

        avg {

          sampleInterval

        }

        count

        dimensions {

          policyID

          datetime

          datetimeMinute

          datetimeFiveMinutes

          datetimeFifteenMinutes

          datetimeHalfOfHour

          datetimeHour

          url

          urlHost

          host

          resourceType

          pageURL

          action

        }

      }

    }

  }

}


```

[Run in GraphQL API Explorer](https://graphql.cloudflare.com/explorer?query=I4VwpgTgngBACgQwOZgMoAsCWYA2ATAJTAAcB7CAFwGcAKAKBhgBIAvUgOzABVkAuGKhQiZ2SBszwIKYCpgC2aCgkr8u8sOKaTpshQFF2eVeroBKGAG9xAN2wB3SJfGM2nWgDNMOaRH4WYrtx8zIE8SDAAvuZWjLEwxMhoWLiEJOTUAIKSxLLWYADiEKQgxLTOcTA48pgU-ACMAAwN5XHkeJAAQlD8ANraMuoA+hmoAMIAui2xnt6QfjD9umCDKMD8WlIDCqhKlAA0C5tLgzhgaxJH6gZ4kVPRU4wI1uExFXFUCHLEpwCS7D7WBA4B63N6MADGxX+ILw6nYVEwHCoTjBsTIVXBUB+ABEQYxFiZUfjLgoALIiEDSPGHHTqABimDy5PYlLAVGpBIUDPc0jA7GZrPZRJpWzAAAkge4APLuMXFCAckni+XUkAQYHCtU4OWCanoUi64UQNny8HcKDEDTChIoACqBAAMtSEODZBwQREpp64t7bhEgA\&variables=N4IgXg9gdgpgKgQwOYgFwgFoHkByBRAfQEkAREAGhABMEAXGWgSwFsYBlWhAJ1rRACYADPwBsAWkEBmMf35x+k1AEZFAVgAcGCtToMWMPFCp8hoidIVxBq5Ws0gAvkA)

Example curl request

Terminal window

```

echo '{ "query":

  "query PageShieldReports($zoneTag: string, $datetimeStart: string, $datetimeEnd: string) {

    viewer {

      zones(filter: {zoneTag: $zoneTag}) {

        pageShieldReportsAdaptiveGroups(limit: 100,  orderBy: [datetime_ASC], filter: {datetime_geq:$datetimeStart, datetime_leq:$datetimeEnd}) {

          avg {

            sampleInterval

          }

          count

          dimensions {

            policyID

            datetime

            datetimeMinute

            datetimeFiveMinutes

            datetimeFifteenMinutes

            datetimeHalfOfHour

            datetimeHour

            url

            urlHost

            host

            resourceType

            pageURL

            action

          }

        }

      }

    }

  }",

  "variables": {

    "zoneTag": "<CLOUDFLARE_ZONE_ID>",

    "datetimeStart": "2023-04-17T11:00:00Z",

    "datetimeEnd": "2023-04-24T12:00:00Z"

  }

}' | tr -d '\n' | curl --silent \

https://api.cloudflare.com/client/v4/graphql \

--header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

--header "Content-Type: application/json" \

--data @-


```

## Get policy violations via Logpush

[Cloudflare Logpush](https://developers.cloudflare.com/logs/logpush/) supports pushing logs to storage services, SIEM systems, and log management providers.

Information about policy violations is available in the [page\_shield\_events dataset](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/page%5Fshield%5Fevents/).

For more information on configuring Logpush jobs, refer to [Logpush](https://developers.cloudflare.com/logs/logpush/) documentation.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/policies/","name":"Policies"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/policies/violations/","name":"Policy violations"}}]}
```
