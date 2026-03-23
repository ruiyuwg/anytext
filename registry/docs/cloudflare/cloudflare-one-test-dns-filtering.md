# Test DNS filtering

[Skip to content](#%5Ftop)

### Tags

[ DNS ](https://developers.cloudflare.com/search/?tags=DNS)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/traffic-policies/dns-policies/test-dns-filtering.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Test DNS filtering

This section covers how to validate your Gateway DNS configuration.

## Prerequisites

Before you start, make sure you are connected to a network that is associated with the [DNS location](https://developers.cloudflare.com/cloudflare-one/networks/resolvers-and-proxies/dns/locations/) where the policy is applied.

## Test a DNS policy

Once you have created a DNS policy to block a domain, you can use either `dig` or `nslookup` to see if the policy is working as intended.

For example, if you created a policy to block `example.com`, you can do the following to see if Gateway is successfully blocking `example.com`:

1. Open your terminal.
2. Type `dig example.com` (`nslookup example.com` if you are using Windows) and press **Enter**.
3. If the [block page](https://developers.cloudflare.com/cloudflare-one/reusable-components/custom-pages/gateway-block-page/) is turned off for the policy, you should see `REFUSED` in the answer section:\
   Terminal window

```
dig example.com  
```

```
; <<>> DiG 9.10.6 <<>> example.com  
;; global options: +cmd  
;; Got answer:  
;; ->>HEADER<<- opcode: QUERY, status: REFUSED, id: 6503  
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 0  
;; QUESTION SECTION:  
;example.com.                   IN      A  
;; Query time: 46 msec  
;; SERVER: 172.64.36.1#53(172.64.36.1)  
;; WHEN: Tue Mar 10 20:22:18 CDT 2020  
;; MSG SIZE  rcvd: 29  
```

If the [block page](https://developers.cloudflare.com/cloudflare-one/reusable-components/custom-pages/gateway-block-page/) is enabled for the policy, you should see `NOERROR` in the answer section with `162.159.36.12` and `162.159.46.12` as the answers:\
Terminal window

```
dig example.com  
```

```
; <<>> DiG 9.10.6 <<>> example.com  
;; global options: +cmd  
;; Got answer:  
;; ->>HEADER<<- opcode: QUERY, status: NOERROR id: 14531  
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1  
;; OPT PSEUDOSECTION:  
; EDNS: version: 0, flags:; udp: 1452  
;; QUESTION SECTION:  
;example.com.                   IN      A  
;;ANSWER SECTION:  
example.com.            60      IN      A                  162.159.36.12  
example.com.            60      IN      A                  162.159.46.12  
;; Query time: 53 msec  
;; SERVER: 172.64.36.1#53(172.64.36.1)  
;; WHEN: Tue Mar 10 20:19:52 CDT 2020  
;; MSG SIZE  rcvd: 83  
```

### Test a security or content category

If you are blocking a [security category](https://developers.cloudflare.com/cloudflare-one/traffic-policies/dns-policies/#security-categories) or a [content category](https://developers.cloudflare.com/cloudflare-one/traffic-policies/dns-policies/#content-categories), you can test that the policy is working by using the [test domain](#common-test-domains) associated with each category.

Once you have configured your Gateway policy to block the category, the test domain will show a block page when you attempt to visit the domain in your browser, or will return `REFUSED` when you perform `dig` using the command-line interface.

#### Test domain format

- **One-word category** — For categories with one-word names (for example, *Malware*), the test domain uses the following format:

```
<NAME_OF_CATEGORY>.testcategory.com  
```

- **Multi-word category** — For categories with multiple words in the name (for example, *Parked & For Sale Domains*), the test domain uses the following format:
  - Remove any spaces between the words
  - Replace `&` with `and`
  - Lowercase all letters

#### Common test domains

| Category                        | Test domain                                  |
| ------------------------------- | -------------------------------------------- |
| *Anonymizer*                    | anonymizer.testcategory.com                  |
| *Command and Control & Botnet*  | commandandcontrolandbotnet.testcategory.com  |
| *compromised Domain*            | compromiseddomain.testcategory.com           |
| *Cryptomining*                  | cryptomining.testcategory.com                |
| *Malware*                       | malware.testcategory.com                     |
| *New Domains*                   | newdomains.testcategory.com                  |
| *Parked & For Sale Domains*     | parkedandforsaledomains.testcategory.com     |
| *Phishing*                      | phishing.testcategory.com                    |
| *Potentially Unwanted Software* | potentiallyunwantedsoftware.testcategory.com |
| *Private IP Address*            | privateipaddress.testcategory.com            |
| *Spam*                          | spam.testcategory.com                        |
| *Spyware*                       | spyware.testcategory.com                     |
| *Unreachable*                   | unreachable.testcategory.com                 |

## Test EDNS configuration

If you [enabled EDNS client subnet](https://developers.cloudflare.com/cloudflare-one/networks/resolvers-and-proxies/dns/locations/) for your DNS location, you can validate EDNS as follows:

1. Obtain your DNS location's DOH subdomain:
   1. In [Cloudflare One ↗](https://one.dash.cloudflare.com), go to **Networks** > **Resolvers & Proxies** > **DNS locations**.
   2. Select the DNS location you are testing.
   3. Note the value of **DNS over HTTPS**.
2. Open a terminal and run the following command:\
   Terminal window

```
curl 'https://<DOH_SUBDOMAIN>.cloudflare-gateway.com/dns-query?type=TXT&name=o-o.myaddr.google.com' -H 'Accept: application/dns-json' | json_pp  
```

The output should contain your EDNS client subnet:

```
{  
  "AD": false,  
  "Answer": [  
    {  
      "TTL": 60,  
      "data": "\"108.162.218.211\"",  
      "name": "o-o.myaddr.google.com",  
      "type": 16  
    },  
    {  
      "TTL": 60,  
      "data": "\"edns0-client-subnet 136.62.0.0/24\"",  
      "name": "o-o.myaddr.google.com",  
      "type": 16  
    }  
  ],  
  "CD": false,  
  "Question": [  
    {  
      "name": "o-o.myaddr.google.com",  
      "type": 16  
    }  
  ],  
  "RA": true,  
  "RD": true,  
  "Status": 0,  
  "TC": false  
}  
```

3. To verify your EDNS client subnet, obtain your source IP address:\
   Terminal window

```
curl ifconfig.me  
```

```
136.62.12.156%  
```

The source IP address should fall within the /24 range specified by your EDNS client subnet.

## Clear DNS cache

Modern web browsers and operating systems are designed to cache DNS records for a set amount of time. When a request is made for a DNS record, the browser cache is the first location checked for the requested record. A DNS policy may not appear to work if the response is already cached.

To clear your DNS cache:

ChromeOS

1. Go to `chrome://net-internals/#dns`.
2. Select **Clear host cache**.

Windows

1. Open the admin command prompt or PowerShell.
2. Run the following command:

Terminal window

```

ipconfig /flushdns


```

macOS

1. Open Terminal.
2. Run the following commands:

Terminal window

```

sudo killall -HUP mDNSResponder

sudo killall mDNSResponderHelper

sudo dscacheutil -flushcache


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/traffic-policies/","name":"Traffic policies"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/traffic-policies/dns-policies/","name":"DNS policies"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/traffic-policies/dns-policies/test-dns-filtering/","name":"Test DNS filtering"}}]}
```
