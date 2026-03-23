After applying for an SSL certificate, complete the mandatory domain ownership verification to enable the certification authority (CA) to issue it. This guide covers both DNS verification (automatic/manual) and file verification via a server-side file upload.

## **Usage notes**

-   **Applicable certificate:** **Commercial Certificates**.
    
-   **Certificate status**: **Validating Application**.
    

## **Procedure**

Based on your certificate type (DV, OV, or EV), see [Verify domain ownership for a DV certificate](#ef79e866796q4) or [Verify domain ownership for an OV or EV certificate](#0670bdead2832) to complete the verification.

### Verify domain ownership for a DV certificate

#### **Step 1: Get verification information**

If the **Verify Information** panel for the current certificate is closed, go to the [**SSL Certificate Management**](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page. In the certificate list on the right, find the target certificate . Then, click **Verify** in the **Actions** column to open the **Verify Information** panel.

#### **Step 2: Verify domain name ownership**

After you submit a DV certificate application, use one of three verification methods: **Automatic DNS Verification**, **Manual DNS Verification**, or **File Verification**. Follow the instructions for your chosen method.

**Note**

-   Once domain ownership verification is complete for a DV certificate, the CA automatically reviews and issues it, typically within 1 to 15 minutes.
    
-   Passing domain ownership verification does not mean the CA has completed its review. For the final review result, see [View the CA review result](#14f86be9f4g66).
    

### **Automatic DNS verification**

If the message 'Domain name verification succeeded' appears below the **Verify** button in the **Verify Information** panel, the verification is complete. Otherwise, follow the instructions in the prompt, see the [FAQ](#ce957bae50jgk) for help, and click **Verify** again until the verification is successful.

-   If the domain for the DV certificate application meets the conditions for automatic verification, the system selects **Automatic DNS Verification** by default, and this option cannot be changed.
    
-   After submitting the application, Alibaba Cloud automatically adds a DNS record in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/) to verify ownership of the domain.
    
-   The console may experience a delay in validating the DNS record. If your DNS record has already taken effect but the console still prompts "No DNS record found." after you click **Verify**, wait a few minutes and try again.
    

**Important**

To ensure that automatic DNS verification proceeds smoothly, any conflicting TXT records in your DNS service are deleted when the new DNS record is added. Consider if this action affects any third-party services that rely on this TXT record for authentication.

### **Manual DNS verification**

Manually add a TXT record with your DNS provider to verify domain ownership.

#### **DNS record effective time**

-   **New DNS records**: Takes effect in real time.
    
-   **Deleting or modifying records**: Depends on the DNS Time to Live (TTL), which is typically **10 minutes**.
    
-   **Changing DNS servers:** Takes effect within 48 hours by default.
    

#### **Verification steps**

**Important**

-   Before the certificate is issued: Do not delete the added DNS record. Otherwise, certificate issuance fails.
    
-   After the certificate is issued: we recommend deleting the TXT record to avoid conflicts when adding new records later.
    
-   If the console displays the message 'The current operation is not authorized. Contact an administrator for authorization.', contact your RAM account administrator. For more information, see [Manage RAM user permissions](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) to grant the `AliyunDNSFullAccess` permission to the current account (or grant the specific permissions as prompted by the console). We recommend that you follow the principle of least privilege and grant only the permissions prompted by the system.
    

1.  Get the verification information.
    
    In the **Verify Information** panel, under **Add a DNS record in the domain name console**, copy the **Type**, **Host Record**, and **Record Value**. You will need to add this information at your DNS provider.
    
2.  Add the DNS record.
    
    Add a DNS record at your domain's DNS provider. The following example shows how to add a TXT record in Alibaba Cloud DNS:
    
    **Note**
    
    If your domain name does not use Alibaba Cloud DNS, perform this operation with your DNS provider.
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/) using the Alibaba Cloud account of the registrant. Find the target domain name and click **Settings** in the **Actions** column to go to the DNS Settings page.
        
    2.  Click **Add Record**. In the panel that appears, enter the verification information that you obtained in the previous step, including the **Type**, **Host Record**, and **Record Value**. Then, click **OK**.
        
        **Note**
        
        The image on the left shows the record information from the Certificate Management Service console, and the image on the right shows the settings in the Alibaba Cloud DNS console.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2425378371/p911465.png)
        
3.  Verify the domain name.
    
    After you configure the DNS record, click the **Verify** button in the **Verify Information** panel. If the message `Domain name verification succeeded` appears below the **Verify** button, the verification is complete. Otherwise, follow the instructions in the prompt, see the [FAQ](#ce957bae50jgk) for help, and click **Verify** again until the verification is successful.
    
    **Important**
    
    The console may experience a delay in validating the DNS record. If your DNS record has already taken effect but the console still prompts "No DNS record found." after you click **Verify**, wait a few minutes and try again.
    

### File verification

**Verification requirements**

-   **Open server ports**: The CA retrieves the verification file content only over **port 80 (HTTP)** and **port 443 (HTTPS)**. You must make sure that these two ports are open on your server. If your HTTPS service is temporarily unavailable, you must **temporarily shut down the HTTPS service (stop listening on port 443)**.
    
-   **Ensure both the root domain and www subdomain are accessible:** Whether you are applying for a root domain (such as `aliyundoc.com`) or a `www` domain, you must ensure **both are publicly accessible**.
    
-   **Prohibit URL redirection:** The CA's verification does not support any HTTP redirection, such as 301 permanent redirects or 302 temporary redirects.
    

**Verification steps**

1.  Download the verification file.
    
    After submitting the certificate application for review, go to the **Download Verification File** section. Click **verification file** to download the verification file package to your local computer. Unzip the package to get the verification file.
    
    **Important**
    
    -   After downloading and unzipping the package to get the verification file, do not modify the file in any way (including opening, editing, or renaming it).
        
    -   The file is valid for only 3 days after being downloaded. If you do not complete the file verification within this period, you will need to download a new verification file.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3484886371/p752802.png)
    
2.  Upload the verification file.
    
    The following example shows how to configure file verification for an Nginx (Linux version) server running on an Alibaba Cloud ECS instance.
    
    **Note**
    
    We recommend that a server administrator performs this operation.
    
    1.  Connect to the ECS instance. For more information, see [Select a method to connect to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).
        
    2.  Run the following commands to create the file verification directory (`.well-known/pki-validation/`) in the server's web root directory (the default for Nginx is `/var/www/html/`).
        
        ```
        cd /var/www/html
        mkdir -p .well-known/pki-validation
        ```
        
    3.  Upload the verification file to the verification directory (`/var/www/html/.well-known/pki-validation/`).
        
        You can use the local file upload feature of a remote logon tool, such as **PuTTY**, **XShell**, or **WinSCP**, to upload files. If you are using an Alibaba Cloud Elastic Compute Service (ECS) instance, see [Upload or download files](/help/en/ecs/user-guide/upload-a-file-from-on-premises-to-an-ecs-instance/) for more information about how to upload files,
        
        **Warning**
        
        Before the certificate is issued, do not delete the verification file from the server. Doing so will cause the certificate issuance to fail.
        
3.  Verify the domain name.
    
    After successfully uploading the verification file, return to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas). In the certificate list, click the **Verify** button in the **Actions** column for the target certificate. There can be a delay in console file verification. If you see a **No file found** message, wait about one minute and try again. If verification still fails after multiple attempts, re-upload the correct file.
    
    **Note**
    
    The system automatically verifies the file content at `http://<your_domain_name>/.well-known/pki-validation/<verification_file_name>` or `https://<your_domain_name>/.well-known/pki-validation/<verification_file_name>`.
    

### Verify domain ownership for an OV or EV certificate

After submitting an application for an OV or EV certificate, the CA will contact you using the phone number or email from your application, typically within one business day (based on its local time zone, excluding holidays).

**Note**

-   If the information provided is correct and you respond promptly to the CA's verification requests, OV and EV certificates are typically issued within 5 calendar days. If the certificate is not issued within 30 calendar days, the application review automatically fails.
    
-   If you have not received a call or email after 5 business days, contact your account manager for assistance.
    
-   To check the current progress, go to the [**SSL Certificate Management**](https://yundun.console.alibabacloud.com/?p=cas#/certExtend/buy/ap-southeast-1) page. Find the target certificate in the certificate list . Then, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8391774671/p1026962.png) icon in the **Status** column to view the details.
    

#### **Phone**

CA staff will call the phone number provided in the certificate application to verify the application information. Ensure the contact person's phone is on and available to receive the verification call from the CA.

#### Email

The CA will send a domain verification email to the contact email address provided in the certificate application. Check your email promptly and follow the instructions in the message.

The content of the email varies based on the certificate brand. The following email examples are for reference only. The actual email that you receive is the one that is valid.

## GlobalSign

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p901609.png)

## **View the CA review result**

After you complete domain ownership verification, the CA will review your application. For information on how to handle the review results, see [Processing CA review results](/help/en/ssl-certificate/application-review-results-processing).

## **FAQ**

### **DNS verification**

-   **Is it possible to change the domain verification method from Automatic DNS verification?**
    
    No. If the system defaults to **Automatic DNS verification** for your domain, you cannot switch to another method such as manual DNS or file verification. To use a different method, you must use a separate Alibaba Cloud account to either purchase the certificate or manage the domain's DNS.
    
-   **How can I check if a DNS record has taken effect?**
    
    Alibaba Cloud provides the **Network Detect Tool** to check whether a DNS record is in effect:
    
    1.  In the **Apply for Certificate** panel, click **View Record Value**.
        
        ![View Record Value](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p904674.png)
        
    2.  On the **DNS** tab, click **OK**.
        
        ![DNS tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p904670.png)
        
    3.  If the resolution result in the **Probe Check Result** list matches the DNS record value you configured, the DNS record is in effect.
        
-   **Why do I get a** `**No DNS record found.**` **error during SSL verification?**
    
    The most common cause is that the required TXT record has not been added at your DNS provider. Go to your DNS provider's console and add the record. For instructions, see [Manual DNS authentication](/help/en/ssl-certificate/verify-the-ownership-of-a-domain-name).
    
    Other causes:
    
    -   **DNS propagation delay.** DNS changes can take up to 1 hour to propagate to servers worldwide, especially to the CA's overseas servers. If the record is correct, wait and click **Verify** again.
        
    -   **Domain name mismatch.** The domain bound to the certificate application must exactly match the domain where you created the DNS record. If they differ, click **Modify** on the validation page, correct the domain, and resubmit the application.
        
        **Note**
        
        If you do not use Alibaba Cloud DNS, go to your DNS provider's console to confirm the domain name matches.
        
        ![Domain name match](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p904622.png)
        
        ![Modify domain](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p895287.png)
        
-   **Why do I get a** `**Mismatch found in the DNS record.**` **error during SSL verification?**
    
    This error means the CA found a DNS record for your domain, but its value is incorrect. Here are the common causes and solutions:
    
    **Check your record values first.** This is usually a copy-paste error. Carefully copy the **Host Record** and **Record Value** from the certificate application panel again and update them in your DNS configuration.![Host Record and Record Value](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414399371/p904695.png)
    
    **Common DNS record mistakes:**
    
    **Issue**
    
    **What happens**
    
    Extra trailing period in record value
    
    Some DNS providers automatically append a period. If you also add one, validation fails.
    
    Apex domain appended twice
    
    Some providers append the domain to the **Host Record** you enter. If you enter the full hostname, you get `_dnsauth.example.com.example.com`, which fails.
    
    Wrong record type
    
    You must create a TXT record, not a CNAME or A record.
    
    Other causes:
    
    -   **Third-party DNS provider (such as DNSPod).** The Alibaba Cloud console check might report an error even if the record is set up correctly at your provider. You can safely ignore the console error and wait for the CA to complete its own verification.
        
    -   **Expired TXT record for a DigiCert DV certificate.** The TXT record for a DigiCert DV certificate is only valid for 24 hours. If it has expired:
        
        1.  Delete the old TXT record from your DNS provider.
            
        2.  In the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas), reapply for the target certificate and get a new TXT record value.
            
        3.  Add the new TXT record to your DNS configuration.
            
        
        **Note**
        
        This time limit does not apply to GeoTrust DV certificates. Their timestamps remain valid.
        
    -   **DNS propagation delay to overseas servers.** DNS changes may not have reached the CA's servers yet. Allow up to 1 hour for propagation and make sure your dynamic DNS service is working correctly.
        
-   **How do I fix a** `**Verification timed out. Try again.**` **error during DNS validation?**
    
    This error indicates a network problem preventing our verification system from querying your domain's nameservers. Contact your DNS provider to investigate and resolve potential network connectivity issues on their end.
    
-   **My DNS record has propagated correctly, so why does the console verification keep failing?**
    
    The console's check can lag behind actual DNS propagation. Even if a tool such as `dig` shows the record is correct, our verification service might be reading from a cached or delayed state. Wait one minute and then click **Verify** again.
    
-   **How do I resolve an SSL verification failure caused by a CAA DNS record?**
    
    A Certification Authority Authorization (CAA) record restricts which CAs can issue certificates for your domain. If your chosen CA is not authorized, verification fails. Here's how to fix it:
    
    -   **Solution 1: Remove the CAA record.** In your DNS provider's control panel (such as [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/)), delete the CAA record for your domain and re-apply for the certificate.
        
    -   **Solution 2:** [Add the CA of the certificate to the CAA DNS record](/help/en/dns/pubz-configure-caa-records-to-specify-an-authority-to-issue-https-security-certificates). After the record propagates, re-apply for the certificate.
        
    
    **Note**
    
    If your domain uses a CNAME record pointing to `github.io`, it inherits GitHub's CAA policy. To proceed, either temporarily pause the CNAME record or add `trust-provider.com`, `globalsign.com`, and `sectigo.com` to your domain's CAA record.
    
-   **How do I set up DNS verification if my domain isn't managed by Alibaba Cloud DNS?**
    
    **Option**
    
    **Method**
    
    **Advantage**
    
    **Configure the record at your current provider**
    
    Log on to your current domain name platform and add the SSL certificate validation record (TXT) from Alibaba Cloud.
    
    **Note**
    
    Contact your provider's support if you need assistance.
    
    Fast and direct. No domain name transfer is required.
    
    **Transfer your domain to Alibaba Cloud**
    
    Follow the steps to [transfer a domain name to Alibaba Cloud](/help/en/dws/user-guide/transfer-a-domain-name-to-alibaba-cloud). Once complete, manage all DNS records in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/).
    
    **Important**
    
    Transferring a domain requires paying a one-year renewal fee.
    
    Convenient for future certificate renewals and unified domain name management.
    

### **File verification**

-   **Why do I get a** `**No file found.**` **error during HTTP file verification?**
    
    This error means the CA's server could not find the verification file at the expected URL. Check for these common causes:
    
    -   **The file is in the wrong directory:** The verification file must be placed in the `/.well-known/pki-validation/` directory within your website's root folder.
        
    -   **There is a delay in console verification:** If you have confirmed the file is in the correct location and publicly accessible via both **HTTPS Address** and **HTTP Address**, the console check may be delayed. Wait a few minutes and click **Verify** again.
        
-   **How do I resolve a** `**Verification timed out. Try again.**` **error during HTTP file verification?**
    
    This error indicates the CA's servers could not connect to your web server. It is typically caused by a network or server configuration issue. Here's how to troubleshoot:
    
    -   **Ports 80 or 443 are blocked:** The CA must be able to connect to your server over HTTP (port 80) or HTTPS (port 443).
        
        -   **Solution**: Ensure your server's firewall and any cloud security groups (such as Alibaba Cloud ECS security groups) allow inbound traffic on TCP ports 80 and 443.
            
            How do I open port 80 or 443?
            
            #### **Linux**
            
            1.  Run the following command in the server terminal to check whether port 443 is open:
                
                ##### **RHEL/CentOS**
                
                ```
                command -v nc > /dev/null 2>&1 || sudo yum install -y nc
                # Replace <your_server_public_ip> with the public IP address of your server.
                sudo ss -tlnp | grep -q ':443 ' || sudo nc -l 443 & sleep 1; nc -w 3 -vz <your_server_public_ip> 443
                ```
                
                If the output is `Ncat: Connected to <your_server_public_ip>:443`, port 443 is open. Otherwise, open port 443 in the security group and firewall.
                
                ##### **Debian/Ubuntu**
                
                ```
                command -v nc > /dev/null 2>&1 || sudo apt-get install -y netcat
                # Replace <your_server_public_ip> with the public IP address of your server.
                sudo ss -tlnp | grep -q ':443 ' || sudo nc -l -p 443 & sleep 1; nc -w 3 -vz <your_server_public_ip> 443
                ```
                
                If the output is `Connection to <your_server_public_ip> port [tcp/https] succeeded!` or `[<your_server_public_ip>] 443 (https) open`, port 443 is open. Otherwise, open port 443 in the security group and firewall.
                
            2.  Open port 443 in your security group configuration.
                
                **Important**
                
                If your server is deployed on a cloud platform, make sure that its security group allows inbound traffic on TCP port 443. Otherwise, the service will be inaccessible. The following steps use Alibaba Cloud ECS as an example. For other cloud platforms, refer to their official documentation.
                
                Go to the [Elastic Compute Service (ECS) instances](https://ecs.console.alibabacloud.com/server/) page and click the target instance name to go to the instance details page. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb) to add a rule in the **Security Group Details** section with **Action** set to **Allow**, **Protocol** to **Custom TCP**, **Destination (Current Instance)** to HTTPS (443), and **Source** to **0.0.0.0/0 (anywhere)**.
                
            3.  Open port 443 in your firewall.
                
                Run the following command to identify the active firewall service on your system:
                
                ```
                if command -v systemctl >/dev/null 2>&1 && systemctl is-active --quiet firewalld; then
                    echo "firewalld"
                elif command -v ufw >/dev/null 2>&1 && sudo ufw status | grep -qw active; then
                    echo "ufw"
                elif command -v nft >/dev/null 2>&1 && sudo nft list ruleset 2>/dev/null | grep -q 'table'; then
                    echo "nftables"
                elif command -v systemctl >/dev/null 2>&1 && systemctl is-active --quiet iptables; then
                    echo "iptables"
                elif command -v iptables >/dev/null 2>&1 && sudo iptables -L 2>/dev/null | grep -qE 'REJECT|DROP|ACCEPT'; then
                    echo "iptables"
                else
                    echo "none"
                fi
                ```
                
                If the output is `none`, no further action is required. Otherwise, run the corresponding command below based on the output (`firewalld`, `ufw`, `nftables`, or `iptables`) to open port 443:
                
                ##### firewalld
                
                ```
                sudo firewall-cmd --permanent --add-port=443/tcp && sudo firewall-cmd --reload
                ```
                
                ##### **ufw**
                
                ```
                sudo ufw allow 443/tcp
                ```
                
                ##### **nftables**
                
                ```
                sudo nft add table inet filter 2>/dev/null
                sudo nft add chain inet filter input '{ type filter hook input priority 0; }' 2>/dev/null
                sudo nft add rule inet filter input tcp dport 443 counter accept 2>/dev/null
                ```
                
                ##### iptables
                
                ```
                sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
                ```
                
                To make sure that the iptables rules persist after a system reboot, run the following commands:
                
                ###### RHEL/CentOS
                
                ```
                sudo yum install -y iptables-services
                sudo service iptables save
                ```
                
                ###### **Debian/Ubuntu**
                
                ```
                sudo apt-get install -y iptables-persistent
                sudo iptables-save | sudo tee /etc/iptables/rules.v4 >/dev/null
                ```
                
            
            #### Windows
            
            1\. Open port 443 in the security group
            
            **Important**
            
            If your server is deployed on a cloud platform, make sure that its security group allows inbound access on TCP port 443. Otherwise, the service cannot be accessed from the Internet. The following steps use Alibaba Cloud ECS as an example. For other cloud platforms, see their official documentation.
            
            1.  Go to the [ECS instance](https://ecs.console.alibabacloud.com/server/) page, select the region where the target ECS instance is located, and click the instance name to go to the instance details page.
                
            2.  Click **Security Group** > **All Intranet Inbound Rules**, and make sure that a rule exists with the following settings: **Authorization Policy** is set to **Allow**, **Protocol Type** is TCP, **Destination Port Range** is HTTPS (443), and **Authorization Object** is set to **Anywhere (0.0.0.0/0)**.
                
            3.  If the preceding rule does not exist, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb) to add the corresponding rule to the target security group.
                
            
            2\. Open port 443 in the server's local firewall
            
            1.  Log on to the Windows server, click the **Start** menu in the lower-left corner, and open **Control Panel**.
                
            2.  Click **System and Security** > **Windows Firewall** > **Check firewall status**.
                
            3.  If the firewall is off, as shown in the following figure, no further action is required.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2601034571/p991746.png)
                
            4.  If the firewall is on, follow these steps to allow the HTTPS rule.
                
                1.  In the left navigation pane, click **Advanced settings** > **Inbound Rules**, and check for an inbound rule where the **Protocol** is TCP, the **Local Port** is 443, and the **Action** is **Block**.
                    
                2.  If such a rule exists, right-click it and select **Properties**. On the **General** tab, change the setting to **Allow the connection** and click **Apply**.
                    
            
        -   **Alternative:** If you cannot open the required ports, cancel the application and re-apply using **Manual DNS Verification**.
            
    -   **A URL redirect is configured:** The CA's verifier does not follow 301 or 302 redirects.
        
        -   **How to check:** Use a command such as `wget -S http://<your_domain>/.well-known/pki-validation/<verification_file_name>` to see if it returns a `301 Moved Permanently` or `302 Found` status.
            
        -   **Solution:** Temporarily disable any redirect rules in your web server configuration that affect the `/.well-known/pki-validation/` path. The following code provides examples of 301 and 302 configurations in the nginx.conf file.
            
            ## 301 configuration
            
            ```
            server {
                listen 80;
                server_name <your_root_domain> <your_www_subdomain>;
                return 301 <redirect_domain>$request_uri;
            }
            ```
            
            ## 302 configuration
            
            ```
            location /.well-known/ {
                return 302 <redirection_URL>
            }
            ```
            

-   **An IP whitelist is blocking the CA:** If your server or network firewall restricts access to specific IP addresses, it will block the CA's verification servers.
    
    -   **Solution:** Temporarily add the IP address ranges for your certificate's CA to your firewall's whitelist.
        
        **CA vendor**
        
        **IP addresses**
        
        DigiCert
        
        216.168.247.9, 64.78.193.238, 216.168.249.9
        
        GlobalSign
        
        211.123.204.251, 180.222.177.99, 114.179.250.1, 114.179.250.2, 27.115.18.218
        
-   **What causes a** `**File content is invalid.**` **error during HTTP file verification?**
    
    This error means the CA found a file at the verification URL, but its content was incorrect. Here are the common reasons:
    
    -   **The root domain and the www subdomain cannot simultaneously access the** **verification file**
        
        The CA checks for the file on both `your-domain.com` and `www.your-domain.com`. Ensure your server is configured to serve the file for both hostnames. For example, both `http://aliyundoc.com/.well-known/pki-validation/fileauth.txt` and `http://www.aliyundoc.com/.well-known/pki-validation/fileauth.txt` must be accessible.
        
    -   **The verification file is outdated or modified:** Never open, edit, or rename the verification file after downloading it.
        
        -   **Solution:** In the **Verify Information** panel, click **View Detected File** and make sure that its content matches the latest **verification file**. If the content does not match, download and upload the **verification file** again, and then perform verification again.![文件信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8710705761/p539541.png)
            
    -   **The file is inaccessible over HTTPS:** If your site uses HTTPS, the CA will try to access the file over a secure connection.
        
        -   **Solution 1:** Ensure your HTTPS configuration serves the file correctly.
            
        -   **Solution 2:** Temporarily disable any HTTP-to-HTTPS redirect for the verification path.
            
    -   **A CDN is serving a stale or incorrect file:** If you use a CDN, an edge node may be caching an old version of the file.
        
        -   **Solution 1:** Sync the **verification file** to CDN service nodes outside China, or temporarily disable the CDN acceleration service for regions outside China.
            
        -   **Solution 2:** If you cannot make changes to the CDN service node servers, click **Cancel Application** in the **Apply for Certificate** panel and change the domain verification method to **Manual DNS Verification**.
            
    -   **The verification file has expired:** The downloaded file is only valid for a limited time (typically 3 days).
        
        -   **Solution:** Download a new **verification file** from the console and upload it to your server.
