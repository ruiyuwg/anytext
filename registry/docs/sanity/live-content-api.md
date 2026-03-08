# Live Content API

The Live Content API allows you to deliver live, dynamic experiences to your users without the complexity and scalability challenges that typically come with building real-time functionality. It is available on all plans, including free plans. See the [pricing page for usage details](https://www.sanity.io/pricing#compare-plans).

![Distribute real-time updates to your applications](https://cdn.sanity.io/images/3do82whm/next/053e032a2de083d666a0815b7634dd302490638d-1200x675.png)

With the Live Content API, you can:

- **Subscribe to changes** and receive notifications whenever documents are created, updated, or deleted.
- **Efficiently query** for the exact content you need, and only receive updates for that content.
- **Scale** to handle high volumes of live updates, even during peak traffic periods.

## When to use the Live Content API

The Live Content API is designed to integrate into your existing application. It provides an interface for subscribing to content changes and receiving real-time updates.

Most sites and applications benefit from a mix of live and static content. For example, a news organization may want their homepage to use live content while article pages remain statically generated. In other cases you may want islands of dynamic content to use the Live Content API in an otherwise statically generated application.

The Live Content API requires API version `v2021-03-25` or later.

> \[!NOTE]
> Usage limits and live connections
> Live connections are part of the [Live Content API usage](https://www.sanity.io/pricing#compare-plans), but new requests contribute to your API usage quota.
> Live connections don't request data, but instead listen for targeted updates in your dataset data. Your application relies on these tags to make new requests.
> The Live Content API holds on to old events and can replay them for clients when they connect up to a certain retention time. See [Live Content API pricing](https://www.sanity.io/pricing#compare-plans) for limits.
> Requests should use site-wide caching techniques to minimize unnecessary requests and prevent unexpected usage spikes. The `next-sanity` client does this automatically.

## How Live Content works

Taking advantage of the the Live Content API is a two stage process:

1. Clients listen for content identifiers we call sync tags. They map to specific requests, so changes in your dataset only trigger new tags for requests on the new content.
2. Clients query your data, listen for changes, and update content only when it changes.

Our client libraries handle this process for you and provide helpers for building on top of the API. If you're using a framework like the latest version of Next.js, we'll even handle caching to minimize additional request overhead. See the getting started section below to begin using Live Content in your application. For more on the underlying API, see the [Live Content API reference](https://www.sanity.io/docs/http-reference/live) and our example implementations in the resources section.

## Get Started

Start implementing the Live Content API by following one of our guides or experimenting with an example project.

[Set up live content in your app](https://www.sanity.io/docs/developer-guides/live-content-guide)

[Clean Next.js + Sanity Starter](https://www.sanity.io/templates/nextjs-sanity-clean)

[Sanity Learn: Content-driven web application foundations](https://www.sanity.io/learn/course/content-driven-web-application-foundations/)

## Additional resources

[Live Content API reference](https://www.sanity.io/docs/http-reference/live)

[Live content examples on GitHub](https://github.com/sanity-io/lcapi-examples)
