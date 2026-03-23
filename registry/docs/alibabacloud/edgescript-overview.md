EdgeScript (ES) allows you to customize DCDN configurations by running scripts if the standard configurations in the DCDN console cannot meet your business requirements.

ES supports easy-to-learn syntax and provides a large library of functions. You can use the syntax and functions to customize DCDN features.

![Customize DCDN configurations](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6730678761/p556973.png)

ES provides encapsulated functions, simple decision-making statements, and built-in variables that can be recognized by DCDN points of presence (POPs).DCDN You can combine simple variables and existing functions in ES to meet most of your requirements for custom configurations. For example, you can use ES to customize authentication, caching, and throttling, and add fields to or remove fields from request headers. This helps you customize your configurations and provides agile and fast service updates.

![ES04 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0541462361/p312270.png)

-   For more information about variables, see [EdgeScript built-in variables](/help/en/edge-security-acceleration/dcdn/developer-reference/edgescript-built-in-variables#concept-2106925).
-   For more information about functions, see [Tag overview](/help/en/edge-security-acceleration/dcdn/developer-reference/function-overview#concept-1340055).
-   For more information about operators, see [Logical functions](/help/en/edge-security-acceleration/dcdn/developer-reference/logical-functions#concept-1322636).

## Billing

ES is free of charge.

## EdgeScript

By default, you can configure only one script for each domain name.

## Scenarios

Action

Description

Customize authentication logic

To prevent hotlinking in VOD and live streaming scenarios, authentication is required. ES allows you to customize authentication logic to authenticate requests based on parameters, cookies, or algorithms. Authentication reinforces protection for resources on your origin server.

Customize request and response headers

ES allows you to modify request and response headers based on your business requirements.

Rewrite and redirect requests

If your website supports different languages, requests destined for the website are redirected to the URLs that point to content written in the requested language. For example, requests that require the English or German language are redirected from the China site to the English or German site.

Run A/B tests

Before you release a new feature, you can use DCDN to run A/B tests. You can send requests that carry different request headers or URLs to different origin servers. These requests trigger different features on the origin servers.DCDN

Customize caching

If the standard time-to-live (TTL) values or cache expiration rules for cached content cannot meet your business requirements in certain scenarios, you can run scripts to create custom caching rules.

Throttle requests

ES allows you to throttle requests from different users, such as free users and paying users. You can run scripts to configure and enable throttling.

Block requests

ES allows you to run scripts to block requests from specified IP addresses. You can specify the regions or logic based on which requests are blocked. You can also create anti-bot policies to protect your resources from bots.
