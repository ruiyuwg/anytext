# Available debug endpoints

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/dns/troubleshooting/dns-debug-endpoints.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Available debug endpoints

The following debug endpoints are available via `dig` or other DNS query tools.

Note

For all commands, you can replace `alex.ns.cloudflare.com` with your Cloudflare assigned nameservers.

Terminal window

```

dig @alex.ns.cloudflare.com chaos txt myip.cloudflare +short


```

This command gives you your IP address, meaning the public IP address that Cloudflare receives this DNS query from. This is useful for debugging when you need to know your own IP.

***

Terminal window

```

dig @alex.ns.cloudflare.com chaos txt id.server +short


```

This command gives you the Cloudflare data center you are connecting to, for DNS queries sent from where you execute this command.

***

Terminal window

```

dig @alex.ns.cloudflare.com chaos txt version.bind +short


```

This command gives you the version of Cloudflare's authoritative DNS software that is running on the data center you are connected to. Usually, the same version would always be present on all of our data centers. But, since we do staged releases, technically there can be different versions on different data centers.

***

Terminal window

```

dig @alex.ns.cloudflare.com txt whoami.cloudflare.net +short


```

This command gives you your public IP (same as the first command above), your ASN, and the associated country code, all indicating where you are sending this query from.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/dns/","name":"DNS"}},{"@type":"ListItem","position":3,"item":{"@id":"/dns/troubleshooting/","name":"Troubleshooting"}},{"@type":"ListItem","position":4,"item":{"@id":"/dns/troubleshooting/dns-debug-endpoints/","name":"Available debug endpoints"}}]}
```
