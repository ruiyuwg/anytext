# Studio Performance Issues Caused by legacy HTTP protocols

### Why Is This Happening?

Sanity Studio is designed to use modern web protocols (`HTTP/2` or `HTTP/3`) to provide the best performance. If your network, VPN, or security software is set up to use an older protocol — such as `HTTP/1.1` or `HTTP/1.0` — the Studio will be much slower and less reliable, and in some cases performance may be extremely degraded or fail to work altogether.

#### Common causes

• Work VPNs that don’t support `HTTP/2` or `HTTP/3`

• Corporate firewalls or proxies that force traffic to use `HTTP/1.1` or `HTTP/1.0` (often ZScaler or similar security software)

• Strict company network policies that restrict web protocols to older versions

### What Should You Do?

1. Try Another Network1. Turn off your VPN (if you’re using one), then reload Sanity Studio.

2. Try from your home network or a mobile hotspot. If Studio suddenly becomes much faster and responsive, the problem is likely with your company’s network.

3. Contact Your IT Department. Share the link to this article which explains the details in the following section.

### For IT and Network Administrators

Sanity Studio requires `HTTP/2 `or `HTTP/3` for normal operation.

Checklist for resolving these issues:

- **Allow HTTP/2 (and/or HTTP/3)**: Ensure your firewall, proxy, or VPN is not forcing outdated protocols (such as HTTP/1.1 or HTTP/1.0) for `*.sanity.io` domains.
- **Update enterprise security tools**: ZScaler and similar appliances sometimes default to HTTP/1.1 or even HTTP/1.0 — update configurations to support modern protocols.
- **Review VPN settings**: Some VPNs disable HTTP/2/3 by default. Check documentation for enabling them for trusted domains.

If users report Sanity Studio being almost unusable, and it works fine on other networks, this is a strong indicator that outdated protocols are being forced by the network.

### How do I find out which my protocol version?

While newer Studios will warn users about older protocol versions, you can find which one is used in a Studio by checking the network tab in your browser:

Navigate to the Studio in the browser of your choice, [open the developer tools network tab](https://www.google.com/search?q=open+network+developer+tools\&sourceid=chrome\&ie=UTF-8) and reload the page. Make sure the Protocol column is also displayed to see which version is used.

If you see `1.1` in the protocol column, the Studio is running in its slower, degraded mode.

![Screenshot with instructions to right click on the network request header bar and make sure protocol is selected](https://cdn.sanity.io/images/3do82whm/next/0f090458e9874c17534c0ed22a9e11a2b63bae0f-974x569.png)

### Still Having Trouble?

If none of the above steps work, please [reach out to the Support team in the help channel in our community](https://snty.link/community) (or to the Support channel if you are an enterprise customer) for further assistance.
