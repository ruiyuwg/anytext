The application protection feature uses runtime application self-protection (RASP) technology to detect and protect applications against attacks during runtime. You do not need to modify your code. You can simply deploy the RASP agent in your application's host or container environment to gain robust security protection against most attack techniques that exploit unknown vulnerabilities.

## **How it works**

Application protection uses RASP technology to hook into critical functions within an application, monitoring how the application interacts with other systems in real time. When suspicious behavior is detected, application protection identifies and blocks the attack based on the current context. This effectively defends your web applications against application vulnerabilities, zero-day vulnerabilities, and in-memory webshell attacks.

## Scenarios and benefits

-   **Secures application internals**: Focuses solely on application behavior, not traffic sources, to defend against both north-south and east-west threats. It runs automatically when the application starts and serves as the last line of defense to ensure applications are secure by default.
    
-   **Handles complex encoding and encrypted traffic**: RASP has visibility into the full application context. Regardless of how a request is obfuscated, the final action that the application performs remains unchanged. If the identity and behavior do not match, RASP detects the anomaly. Unlike network perimeter devices that cannot inspect encrypted traffic, RASP can access fully decrypted request data from inside the application.
    
-   **Defends against zero-day vulnerabilities with low false positives and false negatives**: RASP analyzes data that is handled by critical functions from within the application, ignoring attacks that cannot be executed. This significantly reduces false positives and false negatives. For zero-day vulnerabilities, regardless of how the attack entry point changes or how stealthy the technique is, attackers cannot bypass the execution of critical functions, which allows RASP to effectively intercept them.
    
-   **Enables attack attribution, vulnerability identification, and remediation**: RASP provides security and development teams with detailed attack chains, including original attack payloads and code call stacks. This makes it easy to locate, reproduce, and fix vulnerabilities.
    
-   **Low operational overhead**: The deployment is simple because you only need to connect the application through the console. No rule maintenance or updates are required.
    

## **Limits**

This feature supports only Java and PHP applications. You can use this feature on Alibaba Cloud Elastic Compute Service (ECS) instances, third-party cloud servers, and on-premises servers where the Security Center agent is installed. The supported operating systems are listed in the following table:

Operating system type

Supported operating systems

Windows (64-bit)

-   Windows Server 2025
    
-   Windows Server 2022
    
-   Windows Server 2019
    
-   Windows Server 2016
    
-   Windows Server 2012
    
-   Windows Server 2008
    
-   Windows 11
    
-   Windows 10
    

Linux (64-bit)

-   Alibaba Cloud Linux
    
-   AlmaLinux
    
-   Anolis OS
    
-   CentOS 6, 7, 8
    
-   CentOS Stream
    
-   Debian 8 or later
    
-   Gentoo
    
-   OpenSUSE
    
-   RHEL 6, 7, 8, 9
    
-   Rocky Linux
    
-   SUSE Linux Enterprise Server
    
-   Ubuntu 14.04 or later
    
-   NeoKylin V7, Kylin V10
    
-   TencentOS
    
-   Oracle Linux 7, 8, 9
    
-   openEuler 20.03, 22.03
    
-   EulerOS
    
-   Amazon Linux 2, 2023
    

## **Capabilities**

### **Attack detection (Java applications)**

The following table lists the attack types that application protection can detect and block, and provides recommended defenses.

Attack Type

Description

Protection Recommendations

JNI injection

JNI injection is a common technique used to bypass Runtime Application Self-Protection (RASP). After gaining code execution privileges, attackers can use Java Native Interface (JNI) functions to load malicious dynamic-link libraries, thereby bypassing Java-layer security protections and concealing malicious behavior.

Your server may have a code execution vulnerability. Identify the vulnerable location and restrict code execution capabilities.

SQL injection

SQL injection involves inserting SQL commands into page requests or web form query strings to trick the server into executing arbitrary SQL statements. Attackers can extract data from vulnerable websites by entering SQL statements in web forms.

SQL injection typically results from string concatenation in SQL statements. Use precompiled statements for input parameters whenever possible. Alternatively, restrict parameter concatenation using whitelists or blacklists.

XXE

XML external entity (XXE) injection occurs when an XML parser processes external entities. Attackers can exploit this to read arbitrary files, execute commands, or launch internal network attacks.

Check whether your application needs to load external entities when parsing XML. If not, disable external entity processing in your XML parser configuration.

Malicious DNS queries

Malicious DNS queries can be exploited in multiple ways. Attackers may use the DNS protocol to bypass internal network restrictions and exfiltrate sensitive information. They may also use DNS queries to probe internal systems for vulnerabilities such as server-side request forgery (SSRF) or JNDI injection.

Malicious DNS queries occur when servers send requests to user-controlled parameters. Review these parameters and restrict them using a whitelist.

Malicious reflective invocation

RASP self-protection modules block attackers from modifying RASP runtime data through reflection.

Your server may have a code execution vulnerability. Identify the vulnerable location and restrict code execution capabilities.

Malicious outbound connections

Server-side request forgery (SSRF) enables attackers to forge requests from the server to attack internal systems.

To mitigate SSRF, restrict the target address range of server-initiated requests. Allow access only to trusted internal resources using a whitelist. Disable unnecessary external network access.

Malicious file read and write

Java provides the RandomAccessFile class for file I/O operations. If file paths or content are not properly validated, attackers can read sensitive system files or upload malware.

Verify that file reading and uploading work as expected. If anomalies occur, inspect the relevant function code and apply blacklist restrictions.

Malicious file upload

If a website does not restrict uploaded file types, attackers can upload malware to gain elevated server privileges and cause serious damage.

Restrict allowed file types. Block uploads of executable files such as JSP.

Command execution

Command execution vulnerabilities occur when servers fail to filter user-supplied commands, allowing users to run arbitrary system commands.

Remote command execution often stems from web shells or unsafe server code. Locate where commands are executed. Remove web shells immediately. If the feature is legitimate, restrict allowed commands using a whitelist.

Directory traversal

Website misconfigurations may allow unrestricted browsing of website directories, exposing private information. Attackers can use this information to launch further attacks.

Verify that directory traversal operations behave as expected. If anomalies occur, inspect the relevant function code and use a blacklist to restrict dangerous patterns such as ./ and ../.

In-memory webshell injection

In-memory webshells are a new type of malware. Attackers inject them directly into memory using specialized techniques to evade detection by WAF and host-based defenses.

Your server may have a code execution vulnerability. Identify the vulnerable location and restrict code execution capabilities.

Arbitrary File Read

If a website allows file downloads or reads using absolute paths or directory traversal characters without validating file paths, attackers can retrieve sensitive information and compromise the server.

Verify that file reading works as expected. If anomalies occur, inspect the relevant function code and use a blacklist to restrict input parameters such as ./ and ../.

Thread injection

Thread injection is a common RASP bypass technique. After gaining code execution privileges, attackers create new threads to disrupt RASP’s runtime context and weaken its protection.

Your server may have a code execution vulnerability. Identify the vulnerable location and restrict code execution capabilities.

Malicious Attach

The Java Attach API enables dynamic bytecode modification at runtime. Attackers often use it to inject agent-style in-memory webshells, which are highly evasive.

Your server may have a code execution vulnerability. Identify the vulnerable location and restrict code execution capabilities.

JNDI injection

During JNDI lookups, if attackers control the lookup URL, they can force the server to fetch and load malicious classes, enabling arbitrary code execution.

-   If the vulnerability originates from a third-party component, upgrade to a patched version immediately.
    
-   If you wrote the JNDI lookup code, restrict the lookup URL and block dangerous protocols.
    

Dangerous protocol usage

If the server accesses URLs controlled by users and does not restrict the protocol used, attackers can read sensitive files using dangerous protocols such as file or netdoc.

Restrict the protocols allowed in URLs.

Deserialization attack

Java deserialization reconstructs Java objects from serialized character sequences. If the reconstructed object contains high-risk code, attackers can manipulate member variables during deserialization to trigger malicious behavior.

-   Upgrade vulnerable components to patched versions immediately.
    
-   If no patch is available, disable the affected functionality temporarily.
    

Arbitrary file deletion

If a website’s file deletion interface does not validate file paths, attackers can delete any file using absolute paths or directory traversal characters, compromising the server.

Verify that file deletion works as expected. If anomalies occur, inspect the relevant function code and use a blacklist to restrict input parameters such as ./ and ../.

Expression injection

Expression libraries offer rich features, including runtime data querying and processing. However, many also support high-privilege operations such as function calls. Without proper restrictions—and if attackers control expression content—they can execute arbitrary code.

Strictly restrict expression input. Block most Java function calls. If the issue stems from a third-party component, upgrade to a patched version immediately.

Engine injection

Java offers many third-party engines—such as Rhino and Nashorn (JavaScript engines) and Velocity and FreeMarker (template engines). These often support high-privilege operations like function calls. Without restrictions—and if attackers control engine input—they can execute arbitrary code.

Strictly restrict engine input. Block most Java function calls. If the issue stems from a third-party component, upgrade to a patched version immediately.

Malicious Beans binding

Some Java frameworks support binding runtime Beans to request parameters. If Bean types are not restricted, attackers can modify sensitive Beans to disrupt application behavior—or even execute arbitrary code.

Restrict the types of Beans that can be bound. Block modifications to sensitive types such as Class and ClassLoader. If the issue stems from a third-party component, upgrade to a patched version immediately.

Malicious class loading

Many zero-day exploits and webshells rely on malicious class loading. Once loaded, attackers can gain code execution privileges during class initialization and perform further malicious actions.

-   If malicious class loading is driven by a webshell, remove the webshell immediately.
    
-   If it stems from a framework, upgrade to a patched version immediately.
    

JSTL arbitrary file inclusion

The JavaServer Pages Standard Tag Library (JSTL) is a collection of JSP tags that encapsulates common application logic. If user-controllable parameters are directly concatenated into JSTL tags without validation, attackers can craft malicious scripts to read arbitrary files or launch SSRF attacks.

Avoid directly concatenating user-controllable parameters into JSTL tags. If unavoidable, enforce strict whitelist validation on the parameter content.

### Attack detection (PHP applications)

**Attack Type**

**Description**

**Protection Recommendations**

Malicious File Inclusion

A file inclusion vulnerability in PHP is a common security vulnerability. It allows attackers to include and execute arbitrary files by manipulating input. This vulnerability typically occurs when using functions such as `include()`, `require()`, `include_once()`, or `require_once()` to include other files in a script.

Validate and restrict user-supplied file paths. Allow only predefined files from your application directory to prevent attackers from inserting malicious paths.

Malicious Outbound Connection

Server-side request forgery (SSRF) allows attackers to forge requests from the server to attack internal systems.

Fix SSRF by restricting the target address range for server-initiated requests. Use a whitelist to allow access only to trusted internal resources. Disable unnecessary outbound network access.

Deserialization

A deserialization vulnerability in PHP is a critical security issue. It allows attackers to execute arbitrary functions by manipulating serialized data. This vulnerability commonly occurs when using the `unserialize()` function.

Avoid directly deserializing untrusted data. Use `json_decode()` or other secure alternatives. If deserialization is required, strictly validate and filter the source of the data.

Callback Function Execution

Callback functions in PHP include `array_map()` and `array_filter()`. If an attacker can control their parameters, they may execute arbitrary functions and even take full control of the system.

To prevent abuse of callback functions in PHP, ensure that callback function names passed to `array_map()`, `array_filter()`, and similar functions are not controlled by user input. Validate all allowed callback functions using a whitelist.

Malicious File Read/Write

If file read/write functions do not restrict file paths or content, attackers may read sensitive system files or upload malware.

To prevent file read/write vulnerabilities, strictly validate and restrict file paths. Allow access only to predefined directories. Scan file content for malicious code before upload.

Arbitrary Code Execution

An arbitrary code execution vulnerability is critical. It allows attackers to run arbitrary code on the server, gaining full control, reading or modifying sensitive data, leaking data, defacing websites, or installing malware. This usually happens when applications fail to properly validate user input, which allows attackers to inject malicious code.

Use strict input validation and output encoding. Avoid using `eval()` or `include()` to process user input directly. Keep all libraries and frameworks up to date.

Arbitrary File Read

If file read interfaces lack filtering and path restrictions, attackers can use absolute paths or directory traversal sequences (such as ../) to read and download files. This exposes sensitive information and enables further attacks.

Apply strict input validation and path restrictions to file read interfaces. Allow access only to files verified by a whitelist. Block dangerous input patterns (such as ./ and ../) using a blacklist.

Arbitrary File Delete

If file delete interfaces lack path restrictions, attackers can use absolute paths or directory traversal sequences to delete any file. This can damage the server.

Apply strict input validation and path restrictions to file delete interfaces. Allow deletion only of verified files. Block dangerous input patterns (such as ./ and ../) using a blacklist.

Command Execution

A command execution vulnerability allows attackers to inject operating system commands or code directly into the backend server, thereby taking full control.

Strictly validate and filter all user input. Never build OS commands directly from unprocessed input. Use secure APIs instead of system command execution whenever possible.

Directory Traversal

Poor website configuration may allow attackers to browse website directories freely, which can lead to the leakage of private information and enable further attacks.

Configure proper server permissions and use files such as `.htaccess` to restrict directory access. Ensure sensitive directories are not publicly browsable.

Malicious File Upload

If file upload functionality does not restrict file types, attackers may upload malware to gain higher privileges and cause serious damage.

Strictly restrict and validate uploaded file types. Allow only safe file extensions. Block executable extensions such as .php. Recheck file content on the server to confirm safety.

### Application vulnerability defense

Application protection effectively defends against application vulnerabilities, zero-day exploits, and in-memory webshells, as shown in the following figure. During an emergency response, RASP can quickly block attacks, which buys time to fix vulnerabilities. It also helps you rapidly identify the source and scope of risks. For more information, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5185719371/p912273.png)

If you cannot immediately fix an application vulnerability, you can connect the application process to RASP for protection. To add RASP protection to applications with detected vulnerabilities, perform the following steps:

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Risk Governance** > **Vulnerabilities**. In the upper-left corner of the console, select the region where your assets reside: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Application Vulnerability** tab, vulnerabilities with the **RASP supports real-time protection.** tag are protected by application protection. Click **Enable Protection Now** in the Actions column.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0863461271/p754713.png)
    
4.  In the **Application Protection Access** panel, select the target application group from the **Application Group Name** drop-down list, select the relevant asset, and click **Confirm**.
    
    If the required application group does not exist, you can click **Create Application Group** from the drop-down list, enter a name, and then click **OK**. By default, the **prevention mode** is set to **Block** and the **protection policy group** is set to **Normal Running Group**.
    
    After you connect an application that has detected vulnerabilities to application protection and complete one vulnerability scan, the server’s status in the **Unhandled Vulnerabilities** list on the vulnerability details page changes to **Protected**.
    

### **Application Behavior Analysis**

The application behavior analysis feature monitors connected applications in real time, collects and analyzes behavioral data, and generates reports that include visualizations. This helps you understand attack and defense details and harden your system security. For more information, see [Application behavior analysis](/help/en/security-center/user-guide/application-behavior-analysis).

### **In-memory webshell defense (Java applications only)**

Application protection uses RASP to analyze memory data in real time to detect in-memory webshells and block both their injection and execution. For more information, see [In-memory webshell defense](/help/en/security-center/user-guide/memory-webshell-defense).

### **Weakness detection (Java applications only)**

The following table lists the application weaknesses that application protection can detect and provides remediation advice.

Weakness type

Risk level

Description

Remediation advice

Insecure Fastjson configuration

Critical

Fastjson deserialization is enabled in your application. Attackers can exploit this to achieve remote command execution. Disable it unless absolutely necessary.

Set Fastjson’s safemode to true or autotype to false.

Insecure log4j configuration

Critical

Your log4j component has lookup enabled. Attackers can exploit this for JNDI injection, leading to remote code execution.

Upgrade log4j to the latest version, or delete org/apache/logging/log4j/core/lookup/JndiLookup.class from the JAR file.

Insecure startup parameters

Critical

If attackers can access the JDWP debugging port, they can execute arbitrary code, causing remote code execution.

Unless required, close the JDWP port or avoid exposing it on the public network. Monitor long-running applications to ensure JDWP is not enabled.

Weak Shiro key

Critical

Your Shiro application uses a weak encryption key. Attackers can crack it and launch deserialization attacks to achieve remote code execution.

Immediately update the Shiro encryption key in your application.

Insecure JMX configuration

Medium

Remote JMX connections are enabled with weak authentication. Attackers may connect remotely and execute commands.

Disable remote JMX connections, or use a strong authentication password.

Insecure Rhino configuration

Medium

The Rhino framework includes dangerous properties that attackers can exploit for remote code execution.

First, upgrade rhnio to the latest version. Then, use SafeStandardObjects to define the Rhino context and prevent the JavaScript engine from calling Java code.

Here is an example of using SafeStandardObjects to define a Rhino context:

```
 package com.aliyun.sample;

   import org.mozilla.javascript.Context;
   import org.mozilla.javascript.Scriptable;

   public class RhinoSecurityExample {
       public static void main(String[] args) {
           Context ctx = Context.enter();
           // Scriptable scope = ctx.initStandardObjects(); // Insecure
           Scriptable scope = ctx.initSafeStandardObjects(); // Secure
           ctx.setOptimizationLevel(-1);
           String str = "var test={};";
           str += "test.call=function(){return 'Successful!';};";
           str += "test.call()";  // Modified: returns JavaScript result only, no Java calls
           try {
               // Pass and execute JavaScript code
               Object result = ctx.evaluateString(scope, str, "", 1, null);
               System.out.println("JavaScript execution result: " + result);
           } catch (Exception e) {
               e.printStackTrace();
           } finally {
               Context.exit();
           }
       }
   }
```

Insecure Spring configuration

Medium

Spring Actuator has endpoints like heapDump, env, restart, refresh, trace, jolokia, and h2-console enabled. This may leak sensitive information or enable remote code execution.

Unless required, disable these endpoints.

Weak login credentials

Medium

Your application uses weak login passwords. Attackers may brute-force them to access your system, steal sensitive data, or gain server control.

Immediately change the application password to a strong one.

Insecure JNDI configuration

Low

Your application uses insecure settings for useCodebaseOnly, rmi-trustURLCodebase, or ldap-trustURLCodebase, posing a JNDI injection risk.

Upgrade the JDK to the latest version. If you cannot upgrade, add these startup parameters when launching the application:

```
-Djava.rmi.server.useCodebaseOnly=true -Dcom.sun.jndi.rmi.object.trustURLCodebase=false -Dcom.sun.jndi.ldap.object.trustURLCodebase=false
```

Insecure XML entity configuration

Low risk

XML external entity parsing is enabled, which may expose your application to XXE attacks.

Unless required, do not use external entities.

Weak database password

Low

Your application uses a weak password to connect to the database. Attackers may use it to access your database, leak sensitive data, or achieve remote command execution.

Immediately change the database connection password to a strong one.

## **References**

-   [What are the differences between application protection and WAF?](/help/en/security-center/user-guide/application-protection-faq#b8e18c068c0lp)
    
-   [Application protection FAQ](/help/en/security-center/user-guide/application-protection-faq#c2a3a66f8b6wh)
    
-   [Does application protection affect application performance?](/help/en/security-center/user-guide/application-protection-faq#p-t5g-49b-a8m)
    
-   [Application protection FAQ](/help/en/security-center/user-guide/application-protection-faq#69ca31ea693s1)
