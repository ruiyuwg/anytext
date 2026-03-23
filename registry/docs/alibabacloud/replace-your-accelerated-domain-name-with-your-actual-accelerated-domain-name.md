Once you connect your origin server to Alibaba Cloud CDN, use the IP Address Detector to check if a CDN Point of Presence (POP) is serving client requests. This check verifies that content acceleration is working correctly.

## **Use cases**

-   **Verify CDN integration**: After you configure the CNAME record for your domain name, confirm that user traffic is routed to a POP instead of your origin server.
    
-   **Troubleshoot production issues**: When users report slow performance or timeouts, determine if their requests are being routed through the CDN.
    
    -   If the CDN serves the request, the issue might be with the POP, the origin-pull process, or the origin server.
        
    -   If the CDN does not serve the request, the issue is likely related to DNS resolution or the client's local environment.
        

## Procedure

### Step 1: Get the IP address to check

**Method 1: (Recommended) Use browser developer tools**

1.  In Google Chrome or Microsoft Edge, press F12 to open Developer Tools, and then switch to the **Network** tab.
    
2.  Visit your Alibaba Cloud accelerated domain name (for example, your CDN domain).
    
3.  In the request list, click the main page request, which is typically of type `document`.
    
4.  In the details pane, find `Remote Address`. This is the IP address of the Alibaba Cloud POP that served your request.
    

**Method 2: Use the curl command**  
Run the following command. The IP address appears after `Connected to` in the output.

```
# Replace <Your Accelerated Domain Name> with your actual accelerated domain name.
curl -vso /dev/null https://<Your Accelerated Domain Name> 2>&1 | grep "Connected to"
```

### Step 2: Use the IP Check tool

#### Console (Recommended)

On the **[IP Address Check](https://cdn.console.alibabacloud.com/tool/ipCheck)** page in the CDN console, enter the IP address to check and click **Check**.

#### API

Call the [BatchDescribeCdnIpInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchdescribecdnipinfo) operation to check in batches whether IP addresses belong to CDN POPs.

**Note**

-   You can check IPv4 and IPv6 addresses.
    
-   You can check up to 20 IP addresses at a time.
    

## **FAQ**

### **What does it mean if the IP Address Detector shows an IP is an Alibaba Cloud CDN POP?**

It confirms that the IP address belongs to a CDN POP. The tool will also display the POP's region and ISP.

This information helps you confirm which specific POP served a client's request, which is useful for diagnosing location-specific network performance issues.

### **Why does the IP Address Detector report that an IP is not a CDN POP?**

This result means the IP address was not found in the Alibaba Cloud CDN POP database. This typically happens for one of the following reasons:

1.  **You are checking the wrong IP address.** The IP you entered might not be the one that served the request for your accelerated domain.
    
    **Solution:** Follow the instructions in **Step 1: Get the IP address to check** to find the correct IP address that your client connected to.
    
2.  **Your request is connecting directly to the origin server, bypassing the CDN.** This can happen if your DNS or local environment is misconfigured.
    
    **Solution:** Verify the following:
    
    -   **Domain is correctly added to CDN:** Ensure your domain name has been fully added and configured in the Alibaba Cloud CDN console.
        
    -   **DNS points to CNAME:** Your domain's DNS record must point to the CNAME address provided by Alibaba Cloud CDN, not your origin server's IP.
        
    -   **No local overrides:** Check your local `hosts` file and any active network proxies to ensure they are not forcing a direct connection to your origin server.
        
3.  **The IP is a private, loopback, or non-public address.** The tool cannot validate internal IP addresses.
    
    **Solution:** Ensure the IP you are checking is a public IP. Addresses like `127.0.0.1`, `192.168.x.x`, or `10.x.x.x` are for private networks and cannot be CDN POPs. Always test from a public network environment.
