The `aliyun mcp-proxy` tool simplifies authentication and API calls to OpenAPI MCP servers by handling the OAuth 2.0 authorization flow and token management.

## Overview

aliyun mcp-proxy is a command-line tool included with the Alibaba Cloud CLI that acts as a local proxy for your OpenAPI MCP servers. It simplifies how applications like Dify or LangChain interact with your MCP servers. When you first run the tool, you must complete a one-time OAuth authorization process. After that, the proxy automatically manages token refreshes, allowing your applications to make authenticated API calls through a local endpoint without needing to implement the OAuth logic themselves.

**How it works**

An application sends an API request to `aliyun mcp-proxy`. The proxy injects the necessary authentication credentials into the request and forwards it to the OpenAPI MCP server.

`[Application] -> [aliyun mcp-proxy] -> [OpenAPI MCP server] -> [Alibaba Cloud service API]`

**Warning**

The aliyun mcp-proxy service acts on behalf of the configured CLI user. Any user or process on the local machine with access to the proxy port can perform actions by using the permissions of that user. To mitigate this risk, run the proxy only in a trusted, single-user environment, apply the principle of least privilege, and never expose the proxy port to external networks. For more information, see the "[Security considerations](#b713eda4f1s3y)" section below.

## Configure and run the proxy

### Step 1: Configure Alibaba Cloud CLI

1.  [Install](/help/en/cli/install-cli-on-linux) or upgrade the Alibaba Cloud CLI to version `3.2.0` or later.
    
2.  Configure the CLI with the credentials of your Alibaba Cloud account or a Resource Access Management (RAM) user. The user must have permission to create OAuth applications in RAM. Alternatively, you can use the `--oauth-app-name` parameter in the next step to specify an existing OAuth application.
    
    ```
    aliyun configure
    # Enter your AccessKey ID, AccessKey secret, and default region as prompted.
    ```
    

### Step 2: Run the proxy and complete authorization

The first time you run `aliyun mcp-proxy`, you must complete a one-time OAuth authorization process.

1.  Start the process in the foreground.
    
    -   In an environment with a graphical user interface (GUI), the CLI automatically opens a browser to complete the OAuth authorization process.
        
        ```
        aliyun mcp-proxy --host 127.0.0.1 --port 8088
        ```
        
    -   In a command-line-only environment, add the `--no-browser` parameter. The CLI will provide a URL that you must open in a browser on another device to complete the authorization.
        
        ```
        aliyun mcp-proxy --host 127.0.0.1 --port 8088 --no-browser
        ```
        
    
    **Note**
    
    You can use the `--oauth-app-name` parameter to specify a custom OAuth application. The application must meet the following conditions:
    
    -   **OAuth Scope**: Must be `/acs/mcp-server`.
        
    -   **Callback Address**: Must be the same as the callback URI used for `aliyun mcp-proxy` authentication.
        
    -   **Application Type**: Must be a `Native` type application.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9382918671/p1042792.png)
        
    
2.  The terminal displays the authorization URL.
    
    ```
    Setting up MCPOAuth profile 'default-mcp'...
    Opening browser for OAuth login...
    URL: https://signin.aliyun.com/oauth2/v1/auth?client_id=XXX8&response_type=code&scope=%2Facs%2Fmcp-server&redirect_uri=http://0.0.0.0:8088/callback&code_challenge=XXX&code_challenge_method=S256
    
    Please open the authorization URL on a machine with a browser and complete the sign-in.
    
    After authorization, the browser will redirect to a callback URL.
    Even if the page fails to load (connection error), the authorization code is in the URL.
    Please copy the value of the `code` parameter from the browser's address bar.
    
    Example: If the URL is:
      http://127.0.0.1:8088/callback?code=abc123xyz&state=...
      Then copy only: abc123xyz
    
    Enter authorization code: <YOUR CODE>
    ```
    
3.  Open the URL in a browser, log on to your Alibaba Cloud account, and grant the requested permissions.
    
4.  After successful authorization, the browser will redirect to a callback URL. Copy the value of the `code` parameter from the address bar, paste it into your terminal, and press Enter.
    
5.  When the terminal displays `OAuth login successful!`, the authorization is successful.
    
    ```
    2025/12/04 19:11:49 Oauth authorization successfully, code received: XXXX
    2025/12/04 19:11:49 Start to exchange code for token with PKCE
    2025/12/04 19:11:49 Exchange code for token with PKCE successfully
    OAuth login successful!
    ```
    
6.  When the terminal displays `MCP Proxy Server Started`, the proxy has started successfully.
    
    ```
    MCP Profile 'default-mcp' configured for oauth app 'aliyun-cli-mcp-proxy' successfully!
    
    MCP Proxy Server Started
    Listen: 127.0.0.1:8088
    ```
    

### Step 3: Configure the proxy as a systemd background service (CentOS example)

To ensure the proxy runs continuously, you can configure it to run as a systemd service.

1.  Create the `systemd` service file named `aliyun-mcp-proxy`.
    
    **Note**:
    
    -   Replace `your-user` with the Linux username of the user who will run the service. This must be the same user who configured the Alibaba Cloud CLI credentials.
        
    -   The `$(which aliyun)` command in `ExecStart` automatically locates the path to the `aliyun` executable file. If this fails, replace it with the absolute path returned by the `which aliyun` command (such as, `/usr/local/bin/aliyun`).
        
    
    ```
    sudo tee /etc/systemd/system/aliyun-mcp-proxy.service << 'EOF'
    [Unit]
    Description=Aliyun CLI MCP Proxy
    After=network.target
    
    [Service]
    Type=simple
    User=your-user
    ExecStart=$(which aliyun) mcp-proxy --host 127.0.0.1 --port 8088 --no-browser
    Restart=always
    RestartSec=10
    Environment=HOME=/home/your-user
    
    [Install]
    WantedBy=multi-user.target
    EOF
    ```
    
2.  Reload the systemd configuration, and then start and enable the service.
    
    ```
    # Reload the configuration
    sudo systemctl daemon-reload
    # Start the service
    sudo systemctl start aliyun-mcp-proxy
    # Enable the service to start on boot
    sudo systemctl enable aliyun-mcp-proxy
    ```
    

### Step 4: Verify the proxy service

You can verify that the service is running correctly by using one of the following methods.

-   **View the service status**
    
    Run the following command to view the service status.
    
    ```
    sudo systemctl status aliyun-mcp-proxy
    ```
    
    If the output contains `active (running)`, the service has started successfully.
    
-   **Request the proxy port**
    
    Run the following command to send a request directly to the proxy port.
    
    ```
    curl http://127.0.0.1:8088/
    ```
    
    A successful connection is indicated by an XML-formatted error response from the MCP server. This error is expected because no specific API was called, but it confirms that the proxy is correctly forwarding requests.
    
    ```
    <?xml version='1.0' encoding='UTF-8'?><Error><RequestId>B3311876-XXXXX</RequestId><HostId>openapi-mcp.cn-hangzhou.aliyuncs.com</HostId><Code>InvalidAction.NotFound</Code><Message>Specified api is not found, please check your url and method.</Message><Recommend><![CDATA[https://api.aliyun.com/troubleshoot?q=InvalidAction.NotFound&product=OpenAPIExplorer&requestId=B3311876-XXX]]></Recommend></Error>
    ```
    

## Use case: Dify integration

This section provides an example of how to configure and use `aliyun mcp-proxy` with Dify, assuming both are running on the same Elastic Compute Service (ECS) instance.

### Step 1: Obtain the Docker bridge IP and start the proxy service

The Dify container needs to access the `aliyun mcp-proxy` service through the host's Docker bridge IP address.

1.  Run the following command to obtain and record the IP address.
    
    ```
    ip addr show docker0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1
    ```
    
    The command returns an IP address similar to `172.17.0.1`.
    
2.  Start the `aliyun mcp-proxy` service, binding it to the Docker bridge IP address. You can run this command in the foreground or modify your systemd service file.
    
    ```
    aliyun mcp-proxy --host 172.17.0.1 --port 8088 --no-browser
    ```
    

### Step 2: Configure the MCP server in Dify

1.  Go to the **Tools** > **MCP** configuration page in Dify.
    
2.  Click **Add MCP Server (HTTP)**.
    
3.  In the **Server URL** field, enter your `aliyun mcp-proxy` address.
    
    On the [OpenAPI MCP Server](https://api.aliyun.com/mcp/servers) page, find your MCP server and copy its streamable HTTP endpoint. In the Dify configuration, paste this URL but replace the hostname with the address of your `aliyun mcp-proxy` service.
    
    **Example conversion**:
    
    -   **Original endpoint:**  
        `https://openapi-mcp.cn-hangzhou.aliyuncs.com/accounts/1234/custom/cli-proxy-test/id/1234/mcp`
        
    -   **Replace with the proxy address** (assuming the proxy runs on `172.17.0.1:8088`):  
        `http://172.17.0.1:8088/accounts/1234/custom/cli-proxy-test/id/1234/mcp`
        
4.  Enter other information as needed, and click **Add & Authorize**. Dify will communicate with your MCP server through this proxy address.
    

## **Security** considerations

Because `aliyun mcp-proxy` acts on behalf of the configured CLI user, it is essential to secure the proxy endpoint. The main risks include the following:

-   **Internal permission abuse**: Other users on the same machine can use the proxy port to perform unauthorized actions. This can lead to permission abuse or data breaches.
    
-   **External exposure risk**: If the proxy port listens on `0.0.0.0` and an internal firewall is not configured, anyone on the Internet can access the MCP server through this port.
    

### **Mitigation measures**

-   **Environment isolation:** Run the proxy only in a trusted, single-user environment. Avoid using it on multi-user shared servers.
    
-   **Network access control:** Bind the proxy listener address (`--host`) to `127.0.0.1` (default) or a specific internal network IP address. Use a firewall or security group rules to restrict access to the proxy port. For example, you can allow access only from specific application server IP addresses. Do not expose the port to the Internet.
    
-   **Principle of least privilege:** Configure least privilege access for the CLI user that the proxy uses and its associated MCP server. As a starting point, grant only read-only permissions.
    
-   **Auditing and monitoring:** Regularly review the access logs of the proxy service and monitor for abnormal requests.
    

**Note**

The `aliyun mcp-proxy` service acts with the permissions of the configured CLI user. Treat access to the proxy port with the same level of security as you would treat the user's credentials.

### **Security incident response**

If you suspect that the proxy's authentication token has been leaked or abused, take the following actions immediately:

-   Stop the `aliyun mcp-proxy` service.
    
-   Delete the local configuration file: `rm ~/.aliyun/.mcpproxy_config`.
    
-   Revoke the OAuth application's authorization in the RAM console.
    
-   Review ActionTrail logs to identify any unauthorized or suspicious activity.
    
-   Restart the proxy service to generate a new token.
    

## Parameters

The `aliyun mcp-proxy` command supports different parameters to adapt to specific scenarios.

**Parameter**

**Description**

**Default value**

`--host`

The host address that the proxy listens on.

`127.0.0.1`

`--port`

The port for the proxy listener.

`8088`

`--no-browser`

Disables the automatic opening of a browser for OAuth authorization. Use this option in environments without a GUI.

Not enabled

`--oauth-app-name`

Specifies the name of a pre-existing OAuth application to use for authorization. If not specified, the CLI attempts to create one automatically.

`aliyun-cli-mcp-proxy`

`--region-type`

Specifies the Alibaba Cloud site. Valid values:

-   `CN`: China site
    
-   `INTL`: International site
    

`CN`

`--upstream-url`

Overrides the default upstream URL for the OpenAPI MCP server.

Alibaba Cloud China site: `https://openapi-mcp.cn-hangzhou.aliyuncs.com`  
Alibaba Cloud international site: `https://openapi-mcp.ap-southeast-1.aliyuncs.com`

## FAQ

### **After I run** `**aliyun mcp-proxy**` **for OAuth authentication, I get the "**`**ERROR: OAuth flow returned empty RefreshToken**`**" error and the proxy fails to start. Why?**

This error usually occurs if the OAuth application is misconfigured or if you are using an unsupported authentication method. Ensure that:

-   The OAuth application type is set to `Native`.
    
-   You are authenticating with an Alibaba Cloud account or a RAM user. Assuming a RAM role with the CLI does not support the OAuth process required by the proxy because it cannot obtain a refresh token.
    

### **After I configure the proxy in Dify, I get a "Connection Refused" or "Timeout" error. What should I do?**

Check the following configurations:

1.  Ensure that the `--host` parameter for the `aliyun mcp-proxy` service is set to the Docker bridge IP or an internal network IP that the Dify container can reach.
    
2.  Verify that your ECS security group and host firewall rules allow TCP traffic from the Dify container to the proxy port (such as, port `8088`).
    

### **How do I view the operational logs for the** `**aliyun mcp-proxy**` **service?**

If you are running the proxy as a systemd service, you can view its logs in real time by using the following command:

```
sudo journalctl -u aliyun-mcp-proxy -f
```
