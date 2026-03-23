DNS resolution failures on an Elastic Compute Service (ECS) instance can prevent connections to a Tair (Redis® OSS-Compatible) instance. The following error messages indicate a DNS resolution failure:

-   `Name or service not known`
    
-   `UnknownHostException`
    
-   `failed to connect: r-***************.redis.rds.aliyuncs.com could not be resolved`
    

If you receive any of these errors, check the endpoint and DNS server settings on your ECS instance.

## Resolution steps

The following steps use a Linux environment as an example.

### Step 1: Verify the endpoint

Confirm that the Tair endpoint in your application code is correct.

1.  Open the [Tair console](https://kvstore.console.alibabacloud.com/).
    
2.  Go to the instance details page.
    
3.  In the **Endpoint** section, locate the **Endpoint** column.
    

![View endpoint](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8972848561/p280860.png)

Compare the endpoint in your application code with the value shown in the console. If they do not match, update your code to use the correct endpoint.

### Step 2: Check the DNS server configuration

Verify that the correct DNS server is configured on the ECS instance.

For details, see [An ECS instance that runs Linux fails to resolve domain names](/help/en/doc-detail/41303.html).

To confirm DNS resolution works, run the following command. Replace the placeholder with your Tair endpoint:

```
nslookup r-***************.redis.rds.aliyuncs.com
```

If the command returns an IP address, DNS resolution is working correctly.

### Step 3 (optional): Add a temporary host mapping

If Step 1 and Step 2 do not resolve the issue, add a domain-to-IP mapping for the Tair instance to the `/etc/hosts` file. This bypasses DNS resolution and restores connectivity.

After restoring connectivity, see [Troubleshoot Tair connection issues](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb) to rule out other causes.

**Important**

Editing the `/etc/hosts` file follows a process similar to editing `/etc/resolv.conf`. However, this is a temporary fix. If the IP address of the Tair instance changes, the mapping becomes invalid and must be updated manually.
