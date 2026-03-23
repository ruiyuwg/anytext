# Challenge solve rate (CSR)

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-challenges/reference/challenge-solve-rate.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Challenge solve rate (CSR)

The challenge solve rate (CSR) is the percentage of issued challenges — Non-Interactive Challenge, Managed Challenge, or Interactive Challenge actions — that were solved.

```

CSR = number of challenges solved / number of challenges issued


```

This metric helps you evaluate your rule's effectiveness, as well as whether you need to make any adjustments to the rule's criteria or action. Rules in Challenge mode will start generating Challenge Solve Rate data (CSR) which indicates the false positive percentage.

You can find the CSR of a rule by going to its corresponding dashboard page:

- [  New dashboard ](#tab-panel-3315)
- [ Old dashboard ](#tab-panel-3316)

For [custom rules](https://developers.cloudflare.com/waf/custom-rules/) or [rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/), go to your zone > **Security** > **Security rules**.

- For [custom rules](https://developers.cloudflare.com/waf/custom-rules/), go to your zone > **Security** > **WAF** > **Custom rules**.
- For [rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/), go to your zone > **Security** > **WAF** > **Rate limiting rules**.

***

## Challenge actions in Security Events

If you find a Challenge Solved action, such as `[js]challengeSolved` or `challengeSolved`, in your Security Events that does not seem to match the underlying rule criteria, it is because this action refers to the successful mitigation of a previous request.

The Challenge lifecycle involves two distinct events, which are crucial for interpreting your logs:

- Challenge trigger: The original request matched a WAF custom rule with a Challenge action. This request contains the suspicious parameters that triggered the rule.
- Challenge solved: The client's browser sends back a subsequent request containing the validated solution. This action is logged as Challenge Solved.

The parameters of the solved request may no longer match the original rule's expression. For example, if a Challenge was issued due to a low Bot Score, the score for the solved request may have already changed to a non-suspicious value upon successful verification.

The Challenge Solved action is purely an informative signal that a previously issued Challenge was answered, allowing the visitor's traffic to proceed. It does not imply that the subsequent request re-matched the initial trigger rule.

***

## Failed Challenges

You will not find a dedicated metric for failed Challenges in Security Analytics because Cloudflare calculates failure indirectly, based on the difference between Challenges issued and Challenges solved.

The system views any issued Challenge that does not result in a successful clearance cookie as a failure. This is why the number of failed Challenges may appear exceptionally high: the majority of issued Challenges are never completed.

The official calculation for failures is:

```

Failed Challenges = Total Challenges Issued − Total Challenges Solved


```

The large number of unmatched Challenges is primarily due to automated traffic (bots or scrapers) that abandon the process immediately upon encountering the initial Challenge script.

Key reasons a Challenge may be issued but never solved:

- The visitor gives up on the Challenge or navigates away from the page.
- The visitor attempts to solve the Challenge but cannot provide a valid answer.
- The system receives an invalid or malformed answer from the client.
- The script environment (often a bot's controlled browser) fails to run the necessary client-side checks.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-challenges/","name":"Challenges"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-challenges/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-challenges/reference/challenge-solve-rate/","name":"Challenge solve rate (CSR)"}}]}
```
