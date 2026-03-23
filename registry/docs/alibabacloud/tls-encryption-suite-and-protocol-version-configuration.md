When a client sends an HTTPS request to an Edge Security Acceleration (ESA) POP, the POP responds and initiates a TLS handshake. The client and POP negotiate a compatible cipher suite and protocol version to ensure secure bidirectional data transmission. You can adjust TLS cipher suites and protocol versions as needed.

## **TLS protocol versions**

TLS (transport layer security) and its predecessor SSL (Secure Sockets Layer) are cryptographic protocols designed to provide secure communication over computer networks. These protocols enable encrypted data exchange between endpoints, ensuring reliable and confidential communication.

TLS protocol versions include 1.0, 1.1, 1.2, and 1.3. TLS 1.3 provides the highest level of security and performance.

## **TLS cipher suite groups**

A TLS cipher suite is a combination of encryption algorithms used in the TLS protocol and consists of three components: authentication, encryption, and message authentication. During a TLS handshake, the client and server negotiate a compatible cipher suite. This ensures secure data transmission between the client and server. Different cipher suites provide varying levels of security.

A TLS cipher suite group is a collection of cipher suites.

## **Choose TLS cipher suite groups and TLS protocols**

**Use case**

**Cipher suite group**

**Supported TLS protocols**

**Features**

Most websites or applications requiring high compatibility and moderately relaxed security

All cipher suites (default)

TLS 1.0, TLS 1.1, TLS 1.2, TLS 1.3 (optional)

Supports the most cipher suites and protocols, offering good compatibility with older browsers and various endpoint devices. However, some cipher suites have lower security.

Websites or applications requiring high security

Strong cipher suites

TLS 1.2, TLS 1.3

All supported cipher suites and protocols are secure. Configuring strong cipher suites enhances website security, but compatibility is lower compared to all cipher suites (default).

Specify cipher suites

Custom cipher suites

TLS 1.2, TLS 1.3

Supports custom selection of encryption algorithms. Security and compatibility vary based on the selected encryption algorithms.

For algorithms supported by different cipher suite groups, see [Algorithms Supported by Cipher Suite Groups](/help/en/edge-security-acceleration/esa/user-guide/algorithms-supported-by-cipher-suite-groups).

## **Configure TLS cipher suites and protocol versions**

1.  In the ESA console, select [Site Management](https://esa.console.alibabacloud.com/siteManage/list). Then, in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Edge Certificates**.
    
3.  In the **TLS Cipher Suite and Version** area, click **Configure**. Then, [choose cipher suite groups and TLS protocols](#92821b517aej8) as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5059542171/p768537.png)
    
    **Note**
    
    -   **Enhanced Cipher Suite** and **Custom Cipher Suite** support only TLS 1.2 and TLS 1.3 by default and cannot be modified.
        
    -   You must enable TLS protocol versions consecutively. If a version gap exists, lower versions will not take effect. Only consecutive higher versions will be active.
        
        -   Example 1: If you enable TLS 1.0, TLS 1.1, and TLS 1.3 but disable TLS 1.2, only TLS 1.3 is active.
            
        -   Example 2: If you enable TLS 1.0, TLS 1.2, and TLS 1.3 but disable TLS 1.1, only TLS 1.2 and TLS 1.3 are active.
            
    
4.  Click **OK**.
    

## **Site-level and rule-based features mapping**

Configurations added through site-level features apply to all requests to the site. To apply this feature only to specific requests, add configurations through rule features. Use rule conditions to identify specific parameter information in user requests and precisely control which requests the rule configuration applies to. The rule feature corresponding to site global TLS cipher suite and protocol version configuration is [TLS Cipher Suites and Protocol Versions Configuration](/help/en/edge-security-acceleration/esa/user-guide/ssl-tls-rules).
