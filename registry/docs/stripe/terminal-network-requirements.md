# Terminal network requirements

Make sure your network is ready for Terminal, and troubleshoot common issues.

Terminal network requirements vary depending on the readers you use and the way you build your integration.  If your network doesn’t meet the requirements outlined below, your Terminal integration won’t work as expected.

If you plan to use Terminal readers in remote locations with unfamiliar or unknown network conditions, be prepared to handle unexpected network-related issues. When using smart readers, we recommend a [server-driven integration](https://docs.stripe.com/terminal/payments/setup-integration.md?terminal-sdk-platform=server-driven) to minimize the number of potential network issues you might encounter.

## Mobile readers

[Mobile readers](https://docs.stripe.com/terminal/mobile-readers.md) rely on your point of sale device for internet connectivity and have the following network requirements:

- Your point of sale device must be connected to the internet, and must be able to connect to [Stripe’s infrastructure](https://docs.stripe.com/ips.md).
- The operating environment must be free of interference that prevents Bluetooth devices from working normally (for example, excessive microwave oven use produces interference on the 2.4GHz band, and can disrupt Bluetooth connections).

The following mobile readers are available.

- [Stripe Reader M2](https://docs.stripe.com/terminal/readers/stripe-m2.md)
- [BBPOS WisePad 3](https://docs.stripe.com/terminal/readers/bbpos-wisepad3.md)

## Smart readers

[Smart readers](https://docs.stripe.com/terminal/smart-readers.md) connect directly to your network and use that connection to access the internet and Stripe. When using one of our Terminal SDKs, your point of sale device and the smart reader also communicate directly with each other over your local network.

The following smart readers are available.

- [Stripe Reader S700/S710](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md)
- [BBPOS WisePOS E](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md)

> Smart readers include built-in diagnostics to help you troubleshoot connectivity issues. The diagnostics screen shows test results for DNS resolution, Stripe connectivity, Terminal events connectivity, and displays information about WiFi signal strength, battery health, and hardware status. Learn more about [running diagnostics on the WisePOS E](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md#diagnostics) or [running diagnostics on the S700/S710](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md#diagnostics).

Smart readers have the following network requirements:

- Your network must support IPv4.
  - IPv6-only networks aren’t supported.
  - Some readers can connect to IPv6 networks through DHCP, but must also be assigned an IPv4 address. Changing advanced settings such as static IP, router, subnet mask, and DNS aren’t supported with IPv6.
- Terminal readers must be assigned a [private IP address](https://en.wikipedia.org/wiki/Private_network).
- Both the Terminal reader and your point of sale device must be able to connect to [Stripe’s infrastructure](https://docs.stripe.com/ips.md).
- If your Terminal readers support both WiFi and Ethernet, use one or the other, not both—attempting to use WiFi and Ethernet at the same time results in an unstable connection and intermittent downtime.
  - If you use WiFi, you can use a dock without connecting an Ethernet cable (for example, for charging or accessories only).
- WiFi networks must use WPA/WPA2/WPA3-Personal or WPA2/WPA3 EAP-PEAP Enterprise encryption, and must be password protected.
  - Terminal readers don’t support WiFi 6, also known as 802.11ax.
  - Verifone P400 readers only support WPA-Personal or WPA2-Personal encryption.
- Ethernet networks must support 10/100 Ethernet devices.
- If your network uses dynamic IP address assignment, your DHCP server configuration needs to allow Terminal readers to retain the same IP address for at least an entire workday.
- If your network limits the duration of network sessions (including idle sessions), the minimum session length for Terminal readers must be at least an entire workday.
- If you use one of our Terminal SDKs on a separate point of sale device (for example, not an app running on the Terminal reader itself), you must also meet the following requirements:
  - The reader must be on the same local network as your point of sale device.
  - The reader must be able to communicate directly with your point of sale device through your local network.
  - The DNS servers used by your point of sale device must be able to resolve internet-routable hostnames to local IP addresses.

## Troubleshooting

When network-related issues occur, experienced personnel should be physically present to diagnose and correct problems.  Make sure you account for this when planning your Terminal integration, deployment, and maintenance.

> Because of the large variety of network configurations and infrastructure, Stripe can only help with basic network questions. The operation and troubleshooting of your network is your responsibility.

If you encounter an issue, determine whether the cause is the network or something else.  You can rule out the network as the cause of an issue by temporarily moving one or more of your Terminal readers and point of sale devices to a different network and internet connection—then check to see if the same issue occurs there. Mobile hotspots work well for this kind of testing.

If the issue persists on a different network and Internet connection, perform additional testing and debugging of your integration’s code.  If you need help, [contact support](https://support.stripe.com/contact) and provide as much technical detail as possible (for example, error messages, logs, and so on).

If the issue only happens on your network, try the following:

- Make sure your network meets all of the requirements listed above, especially if anything about the network has changed recently.
- Check your firewall and other security configurations to make sure access to [Stripe’s infrastructure](https://docs.stripe.com/ips.md) isn’t being blocked.
- Try a different connection for both the Terminal reader and your point of sale device (for example, switch from WiFi to Ethernet).
- For WiFi, make sure all devices have good signal strength.
- For Ethernet, try using different network cables.
- Confirm smart readers have the expected IP and subnet assigned.
- If you’re using smart readers and our Terminal SDK on a separate point of sale device:
  - On your point of sale device, try resolving `10-42-42-42.test.device.stripe-terminal-local-reader.net` to an IP address. That hostname should resolve to the IP `10.42.42.42`. If it resolves to a different IP, or if DNS resolution fails, configure your point of sale device to use [Cloudflare DNS servers](https://1.1.1.1/dns/) (`1.1.1.1` and `1.0.0.1`) or [Google DNS servers](https://developers.google.com/speed/public-dns) (`8.8.8.8` and `8.8.4.4`) and try again.
  - Check your router’s configuration to see if connections between wireless (WiFi) clients and wired (Ethernet) clients are being blocked.
  - Make sure you can ping the Terminal reader’s IP address from your point of sale device.
