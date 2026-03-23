Viruses and attackers can exploit security configuration flaws in servers to steal data or insert web shells. The baseline check feature assesses the configurations of operating systems, databases, software, and containers on your servers. Use the check results to improve security, reduce intrusion risks, and meet compliance requirements. This topic explains the baseline check feature and how to use it.

## Billing

The baseline check feature is available for paid editions of Security Center.

**Edition**

**Description**

**Billing**

Anti-virus edition and value-added plan

You must **purchase and enable cloud security posture management (CSPM)** to use all baseline check items. The paid check items consume CSPM quotas.

[Paid usage of CSPM](/help/en/security-center/user-guide/cspm#81cc8252a4lgv)

Advanced and Enterprise edition

-   The Advanced edition supports only the default policy and weak password baselines.
    
-   The Enterprise edition does not support the container security baselines.
    
-   To use all check items of the baseline check, you must **upgrade to the Ultimate edition**.
    

No additional fees are charged.

Ultimate edition

Support all check items of the baseline check.

No additional fees are charged.

## **Benefits**

-   MLPS compliance
    
    Checks configurations against MLPS level 2 and level 3 standards, as well as internationally recognized security best practices, to ensure compliance and regulatory adherence. This helps enterprises build a security system that meets MLPS requirements.
    
-   Comprehensive detection scope
    
    Assesses baseline configurations for weak passwords, unauthorized access, vulnerabilities, and configuration risks. The feature supports over 30 operating system versions and more than 20 types of databases and middleware.
    
-   Flexible policy configurations
    
    Allows custom security policies, check intervals, and check scopes to meet various business security requirements.
    
-   Fixing solutions
    
    Offers remediation solutions for detected risks, enabling you to quickly strengthen asset security. The quick fixing capability helps improve system baseline configurations and achieve MLPS compliance.
    

## **User guide**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2581784471/CAEQORiBgMDB986PsRkiIGE2YjFiZGYwMmI5NTQ0MTc4MmU2Yjg4YTFiYjIyZWNj4918270_20250321200203.006.svg)

1.  You can purchase the Enterprise or Ultimate edition, or buy CSPM to [use all baseline check items](/help/en/security-center/user-guide/authorize-and-activate-cspm#2f4fb040f0t6t).
    
2.  After you [install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent) on a server that requires baseline checks, the console automatically synchronizes the asset information every minute. To check non-Alibaba Cloud servers, you must first [add them to Security Center](/help/en/security-center/user-guide/manage-servers#title-6ty-hkp-u58).
    
3.  The default baseline check policy includes only a few baseline types. You can configure additional check items and policies to meet your business needs.
    
4.  Select and run a check policy. Security Center will automatically scan your assets according to the specified check interval and check time in the policy.
    
5.  View baseline check results and risk hardening suggestions.
    
6.  Fix and verify the risk configurations of your assets based on the fixing suggestions.
    

## **Terms and functions**

The baseline check feature lets you configure [policies](#section-22c-wk3-yyo) to scan multiple servers for risks in operating system configurations, account permissions, databases, weak passwords, and MLPS compliance. It provides remediation suggestions and allows you to fix risks with a few clicks.

### **Terms**

**Term**

**Description**

**Baseline**

Baselines are the minimum requirements for security practices and compliance checks. The baseline check feature evaluates configurations of operating systems, databases, and middleware, including weak passwords, account permissions, identity authentication, password policies, access control, security audits, and intrusion prevention.

**Weak password**

A weak password can be easily cracked through brute-force attacks. Typically, a weak password has at least one of the following characteristics:

-   Fewer than eight characters
    
-   Fewer than three types of characters
    
-   Found in publicly available attack dictionaries or used by malware
    

Weak passwords are easy to compromise, allowing attackers to log into the operating system and read or modify website code. Weak passwords can make your operating system and business vulnerable to attacks.

### **Baseline policies**

A baseline policy is a collection of baseline check rules, based on which a baseline check is performed. Security Center offers three types of baseline check policies: default, standard, and custom.

**Policy type**

**Supported baseline types**

**Scenario**

Default

The default baseline check policy includes over 70 baselines. It supports the following types: 

-   Windows baselines: unauthorized access, best security practices, and weak passwords.
    
-   Linux baselines: unauthorized access, container security, best security practices, and weak passwords.
    

By default, Security Center conducts baseline checks using the default policy. You can only modify the start time and the servers to which this policy applies.

After purchasing Security Center Advanced, Enterprise, or Ultimate, it checks all assets in your Alibaba Cloud account every two days from 00:00 to 06:00 or during a specified time range.

Standard

A standard baseline check policy includes over 120 baselines. It supports the following types:

-   Windows baselines: nauthorized access, MLPS compliance, best security practices, basic protection practices, internationally agreed security practices, and weak passwords.
    
-   Linux baselines: unauthorized access, MLPS compliance, best security practices, container security, internationally agreed security practices, and weak passwords.
    

Compared to the default baseline check policy, standard baseline check policies support additional baselines, including MLPS compliance and internationally agreed security best practices.

You can modify standard baseline check policy parameters and create them based on your business needs.

Custom

A custom baseline check policy includes over 50 baselines. It supports the following types: 

-   Windows baselines: Windows custom baseline
    
-   Linux baselines: CentOS Linux 7/8 custom baseline, CentOS Linux 6 custom baseline, Ubuntu custom security baseline check, and Redhat 7/8 custom security baseline check.
    

Custom baseline check policies assess risks in your asset configurations based on custom operating system baselines.

To tailor these policies for your business, you can specify check items and modify parameters for some baselines.

### **Supported servers**

Security Center can check baseline risks for servers with a [properly installed and running agent](/help/en/security-center/user-guide/install-the-security-center-agent). When running the default baseline check policy, Security Center evaluates all qualifying servers. You can select the servers for the default, standard, or custom baseline check policies [using server groups](/help/en/security-center/user-guide/manage-servers#section-szp-09j-9di).

### **Risk levels**

Security Center determines the risk level of a baseline based on the severity of the risk and the detection scenario.

**Risk level**

**Baseline category**

**Description**

**Fixing**

High Risk

-   Weak password
    
-   Unauthorized
    

This baseline risk is high because it may lead to intrusions.

You must fix baseline risks as soon as possible to prevent weak passwords from being exposed on the Internet. Exposed weak passwords can lead to attacks on your assets and data breaches.

-   Best security practices
    
-   Container security
    

This baseline risk is high due to configuration issues, even though it does not cause intrusions.

We recommend addressing detected risks promptly. Security Center can enhance the security of your assets based on best security practices, preventing attacks and unauthorized configuration changes.

Custom baseline

This baseline risk is high due to configuration issues and security events, even though it does not cause intrusions.

We recommend fixing detected risks based on your specified custom baselines. Security Center can strengthen your assets' security using best practices, preventing attacks and unauthorized configuration changes.

Medium-risk

-   MLPS compliance
    
-   Internationally agreed best practices for security
    

This baseline risk is medium due to compliance issues. You can check and address these risks based on your compliance requirements, as they do not lead to intrusions or configuration risks.

We recommend fixing the detected risks based on your business's compliance requirements.

### **Fixing methods**

Security Center provides suggestions to address detected risks, helping you strengthen asset security, reduce intrusion risks, and meet compliance requirements.

-   Manual: Log in to the server where the baseline risk is detected, modify the configurations, and verify the result in Security Center.
    
-   One-click: Security Center allows one-click fixes for some baseline risks. You can identify fixable risks if the **Fix** button appears on the check item's panel. If available, follow the instructions in the Security Center console to address the risks.
    

## Baselines

### Categories

**Baseline category**

**Check standard and description**

**Involved operating system and service**

**Fixing description**

Weak password

Checks whether weak passwords are configured for your assets by using a method other than brute-force logons. The method does not lock your account, which prevents your workloads from being interrupted.

**Note**

Security Center detects weak passwords by comparing the hash value that is read by the system with the hash value that is calculated based on the weak password dictionary. If you do not want to enable the system to read the hash value, you can remove the baseline that detects weak passwords from your baseline check policy.

-   Operating systems
    
    Linux and Windows
    
-   Databases
    
    MySQL, Redis, SQL Server, MongoDB, PostgreSQL, and Oracle
    
-   Applications
    
    Tomcat, FTP, rsync, Subversion (SVN), ActiveMQ, RabbitMQ, OpenVPN, JBoss 6, JBoss 7, Jenkins, OpenLDAP, VNC Server, and pptpd
    

You must fix the baseline risks at the earliest opportunity. This way, you can prevent weak passwords from being exposed on the Internet. If weak passwords are exposed on the Internet, your assets can be attacked, and data breaches can occur.

Unauthorized access

Checks whether unauthorized access is implemented. Checks whether unauthorized access risks exist in your services. This prevents intrusions and data breaches.

Memcached, Elasticsearch, Docker, CouchDB, ZooKeeper, Jenkins, Hadoop, Tomcat, Redis, JBoss, ActiveMQ, RabbitMQ, OpenLDAP, rsync, MongoDB, and PostgreSQL

Best security practices

Alibaba Cloud standards.

Checks whether risks exist in the configurations based on the Alibaba Cloud standards of best security practices. The configurations involve account permissions, identity authentication, password policies, access control, security audit, and intrusion prevention.

-   Operating systems
    
    -   CentOS 6, CentOS 7, and CentOS 8
        
    -   Red Hat Enterprise Linux (RHEL) 6, RHEL 7, and RHEL 8
        
    -   Ubuntu 14, Ubuntu 16, Ubuntu 18, and Ubuntu 20
        
    -   Debian Linux 8, Debian Linux 9, Debian Linux 10, Debian Linux 11, and Debian Linux 12
        
    -   Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3
        
    -   Windows Server 2022 R2, Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, and Windows Server 2008 R2
        
    -   Rocky Linux 8
        
    -   Alma Linux 8
        
    -   SUSE Linux Enterprise Server (SLES) 15
        
    -   Anolis 8
        
    -   Kylin
        
    -   UOS
        
    -   TencentOS
        
-   Databases
    
    MySQL, Redis, MongoDB, SQL Server, Oracle Database 11g, CouchDB, InfluxDB, and PostgreSQL
    
-   Applications
    
    Tomcat, Internet Information Services (IIS), NGINX, Apache, Windows SMB, RabbitMQ, ActiveMQ, Elasticsearch, Jenkins, Hadoop, JBoss 6, JBoss 7, and Tomcat
    

We recommend that you fix the detected risks. Security Center can reinforce the security of your assets based on the standards of best security practices. This prevents attacks and malicious modifications to the configurations of your assets.

Container security

Alibaba Cloud standards.

Checks whether the Kubernetes master nodes and nodes contain risks based on the Alibaba Cloud standards of best practices for container security.

-   Docker
    
-   Kubernetes clusters
    

MLPS compliance

The standards of MLPS level 2 and MLPS level 3.

Checks configurations based on the baselines for MLPS compliance for servers. The baseline checks meet the standards and requirements for a computing environment that are proposed by authoritative assessment organizations.

-   Operating systems
    
    -   CentOS 6, CentOS 7, and CentOS 8
        
    -   RHEL 6, RHEL 7, and RHEL 8
        
    -   Ubuntu 14, Ubuntu 16, Ubuntu 18, and Ubuntu 20
        
    -   SLES 10, SLES 11, SLES 12, and SLES 15
        
    -   Debian Linux 8, Debian Linux 9, Debian Linux 10, Debian Linux 11, and Debian Linux 12
        
    -   Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3
        
    -   Windows Server 2022 R2, Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, and Windows Server 2008 R2
        
    -   Anolis 8
        
    -   Kylin
        
    -   UOS
        
-   Databases
    
    Redis, MongoDB, PostgreSQL, Oracle, MySQL, SQL Server, and Informix
    
-   Applications
    
    WebSphere Application Server, JBoss 6, JBoss 7, NGINX, WebLogic, Bind, and IIS
    

We recommend that you fix the detected risks based on the compliance requirements for your business.

Internationally agreed best practices for security

Checks configurations based on the baselines for internationally agreed best practices for security for operating systems.

-   CentOS 6, CentOS 7, and CentOS 8
    
-   Ubuntu 14, Ubuntu 16, Ubuntu 18, and Ubuntu 20
    
-   Debian Linux 8, Debian Linux 9, and Debian Linux 10
    
-   Alibaba Cloud Linux 2
    
-   Windows Server 2022 R2, Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, and Windows Server 2008 R2
    

We recommend that you fix the detected risks based on the compliance requirements for your business.

Custom baseline

Checks configurations based on custom baselines for CentOS Linux 7. You can specify or edit custom baselines in a custom baseline check policy based on your business requirements.

CentOS 7, CentOS 6, Windows Server 2022 R2, Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, and Windows Server 2008 R2

We recommend that you fix the risks that are detected based on the custom baselines that you specify. Security Center can reinforce the security of your assets based on the standards of best security practices. This prevents attacks and malicious modifications to the configurations of your assets.

### Baseline checks

The following table describes the default baseline checks that are provided by Security Center.

#### **Windows baselines**

**Baseline category**

**Baseline name**

**Baseline description**

**Number of check items**

**Basic protective security practices**

SQL Server Risk Permission Check

Checks permission risks for SQL Server.

1

IIS Risk Permission Check

Checks permission risks for IIS.

1

**Internationally agreed best practices for security**

Windows Server 2008 R2 Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baselines are suitable for enterprise users who have professional security requirements. The baselines include a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results.

274

Windows Server 2012 R2 Internationally Agreed Best Practices for Security

275

Windows Server 2016/2019 R2 Internationally Agreed Best Practices for Security

275

Windows Server 2022 R2 Internationally Agreed Best Practices for Security

262

**Unauthorized access**

Unauthorized Access-Redis unauthorized access high exploit vulnerability risk(Windows version)

Checks Redis vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Unauthorized Access-LDAP unauthorized access high exploit vulnerability risk (Windows)

Checks Lightweight Directory Access Protocol (LDAP) vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

**MLPS compliance**

MLPS Level 3 Compliance Baseline for Windows 2008 R2

Checks whether the configurations of Windows Server 2008 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Windows 2012 R2

Checks whether the configurations of Windows Server 2012 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Windows Server 2016/2019

Checks whether the configurations of Windows Server 2016 R2 or Windows Server 2019 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for SQL Server

Checks whether the configurations of SQL Server are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

4

MLPS Level 3 Compliance Baseline for IIS

Checks whether the configurations of Oracle are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

5

MLPS Level 2 Compliance Baseline for Windows 2008 R2

Checks whether the configurations of Windows Server 2008 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

12

MLPS Level 2 Compliance Baseline for Windows 2012 R2

Checks whether the configurations of Windows Server 2012 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

12

MLPS Level 2 Compliance Baseline for Windows Server 2016/2019

Checks whether the configurations of Windows Server 2016 R2 or Windows Server 2019 R2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

12

**Weak password**

Weak password-Windows system login weak password baseline

Checks weak passwords that are used to log on to Windows Server operating systems. This baseline check provides more samples to detect common weak passwords and delivers better check performance than its early version.

1

Weak password-Mysql DB login weak password baseline(Windows version)

Checks weak passwords that are used to log on to MySQL databases. This baseline check is suitable only for Windows operating systems.

1

Weak password-SQL Server DB login weak password baseline

Checks weak passwords that are used to log on to Microsoft SQL Server databases.

1

Weak password-Redis DB login weak password baseline(Windows version)

Checks weak passwords that are used to log on to Redis databases.

1

**Best security practices**

Alibaba Cloud Standard - Windows Server 2008 R2 Security Baseline Check

Checks whether the configurations of Windows Server 2008 R2 are compliant with the Alibaba Cloud standards of best security practices.

12

Alibaba Cloud Standard - Windows 2012 R2 Security Baseline

Checks whether the configurations of Windows Server 2012 R2 are compliant with the Alibaba Cloud standards of best security practices.

12

Alibaba Cloud Standard - Windows 2016/2019 Security Baseline

Checks whether the configurations of Windows Server 2016 and Windows Server 2019 are compliant with the Alibaba Cloud standards of best security practices.

12

Alibaba Cloud Standard - Windows 2022 Security Baseline

Checks whether the configurations of Windows Server 2022 are compliant with the Alibaba Cloud standards of best security practices.

12

Alibaba Cloud Standard-Redis Security Baseline Check (Windows version)

Checks whether the configurations of Redis databases are compliant with the Alibaba Cloud standards of best security practices. This baseline check is suitable only for Windows operating systems.

6

Alibaba Cloud Standard-SQL Server Security Baseline Check

Checks whether the configurations of SQL Server 2012 are compliant with the Alibaba Cloud standards of best security practices.

17

Alibaba Cloud Standard - IIS 8 Security Baseline Check

Checks whether the configurations of IIS 8 are compliant with the Alibaba Cloud standards of best security practices.

8

Alibaba Cloud Standard - Apache Tomcat Security Baseline(on windows)

Checks whether the middleware configurations of Apache Tomcat are compliant with internationally agreed best practices for security and the Alibaba Cloud standards.

8

Alibaba Cloud Standard - Windows SMB Security Baseline Check

Checks whether the configurations of Windows SMB are compliant with the Alibaba Cloud standards of best security practices.

2

**Custom policy**

Windows custom baseline

The custom template that contains all baseline check items related to Windows. You can select baseline check items and configure parameters for baseline check items by using the template. This helps best suit your business requirements.

63

#### **Linux baselines**

**Baseline category**

**Baseline name**

**Baseline description**

**Number of check items**

**Internationally agreed best practices for security**

Alibaba Cloud Linux 2/3 Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baselines are suitable for enterprise users who have professional security requirements. The baselines include a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results.

176

Rocky 8 Internationally Agreed Best Practices for Security

161

CentOS Linux 6 LTS Internationally Agreed Best Practices for Security

194

CentOS Linux 7 LTS Internationally Agreed Best Practices for Security

195

CentOS Linux 8 LTS Internationally Agreed Best Practices for Security

162

Debian Linux 8 Internationally Agreed Best Practices for Security

155

Ubuntu 14 LTS Internationally Agreed Best Practices for Security

175

Ubuntu 16/18/20 LTS Internationally Agreed Best Practices for Security

174

Ubuntu 22 LTS Internationally Agreed Best Practices for Security

148

**Unauthorized access**

Influxdb unauthorized access high exploit vulnerability risk

Checks InfluxDB vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Redis unauthorized access high exploit vulnerability risk

Checks Redis vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Jboss unauthorized access high exploit vulnerability risk

Checks JBoss vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

ActiveMQ unauthorized access high exploit vulnerability risk

Checks ActiveMQ vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

RabbitMQ unauthorized access high exploit vulnerability risk

Checks RabbitMQ vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

OpenLDAP unauthorized access vulnerability baseline (Linux)

Checks OpenLDAP vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

rsync unauthorized access high exploit vulnerability risk

Checks rsync vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Mongodb unauthorized access high exploit vulnerability risk

Checks MongoDB vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Postgresql unauthorized access to high-risk risk baseline

Checks PostgreSQL vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Jenkins unauthorized access high exploit vulnerability risk

Checks Jenkins vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Hadoop unauthorized access high exploit vulnerability risk

Checks Apache Hadoop vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

CouchDB unauthorized access high exploit risk

Checks Apache CouchDB vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

ZooKeeper unauthorized access high exploit vulnerability risk

Checks Apache ZooKeeper vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Memcached unauthorized access high exploit vulnerability risk

Checks memcached vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Elasticsearch unauthorized access high exploit vulnerability risk

Checks Elasticsearch vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

**MLPS compliance**

MLPS Level 3 Compliance Baseline for SUSE 15

Checks whether the configurations of SLES 15 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

18

MLPS Level 3 Compliance Baseline for Alibaba Cloud Linux 3

Checks whether the configurations of Alibaba Cloud Linux 3 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Alibaba Cloud Linux 2

Checks whether the configurations of Alibaba Cloud Linux 2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Bind

Checks whether the configurations of Bind are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

4

MLPS Level 3 Compliance Baseline for CentOS Linux 6

Checks whether the configurations of CentOS Linux 6 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for CentOS Linux 7

Checks whether the configurations of CentOS Linux 7 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for CentOS Linux 8

Checks whether the configurations of CentOS Linux 8 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Informix

Checks whether the configurations of Informix are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

6

MLPS Level 3 Compliance Baseline for JBoss 6/7

Checks whether the configurations of JBoss 6 or JBoss 7 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

5

MLPS Level 3 Compliance Baseline for MongoDB

Checks whether the configurations of MongoDB are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

6

MLPS Level 3 Compliance Baseline for MySQL

Checks whether the configurations of MySQL are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

5

MLPS Level 3 Compliance Baseline for Nginx

Checks whether the configurations of NGINX are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

3

MLPS Level 3 Compliance Baseline for Oracle

Checks whether the configurations of Oracle are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

12

MLPS Level 3 Compliance Baseline for PostgreSQL

Checks whether the configurations of PostgreSQL are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

4

MLPS Level 3 Compliance Baseline for Red Hat Linux 6

Checks whether the configurations of RHEL 6 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Red Hat Linux 7

Checks whether the configurations of RHEL 7 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Redis

Checks whether the configurations of Redis are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

4

MLPS Level 3 Compliance Baseline for SUSE 10

Checks whether the configurations of SLES 10 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for SUSE 12

Checks whether the configurations of SLES 12 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for SUSE 11

Checks whether the configurations of SLES 11 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Ubuntu 14

Checks whether the configurations of Ubuntu 14 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Ubuntu 16/18/20

Checks whether the configurations of Ubuntu 16, Ubuntu 18, or Ubuntu 20 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Ubuntu 22

Checks whether the configurations of Ubuntu 22 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Websphere Application Server

Checks whether the configurations of WebSphere Application Server are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

7

MLPS Level 3 Compliance Baseline for TongWeb

Checks whether the configurations of TongWeb are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

4

MLPS Level 3 Compliance Baseline for WebLogic

Checks whether the configurations of WebLogic are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

5

MLPS Level 2 Compliance Baseline for Alibaba Cloud Linux 2

Checks whether the configurations of Alibaba Cloud Linux 2 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

15

MLPS Level 2 Compliance Baseline for CentOS Linux 6

Checks whether the configurations of CentOS Linux 6 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

15

MLPS Level 2 Compliance Baseline for CentOS Linux 7

Checks whether the configurations of CentOS Linux 7 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

15

MLPS Level 2 Compliance Baseline for Debian Linux 8

Checks whether the configurations of Debian Linux 8 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

12

MLPS Level 2 Compliance Baseline for Red Hat Linux 7

Checks whether the configurations of RHEL 7 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

15

MLPS Level 2 Compliance Baseline for Ubuntu 16/18

Checks whether the configurations of Ubuntu 16 or Ubuntu 18 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 2) are used.

19

MLPS Level 3 Compliance Baseline for Debian Linux 8/9/10/11/12

Checks whether the configurations of Debian Linux 8, Debian Linux 9, Debian Linux 10, Debian Linux 11, or Debian Linux 12 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Kylin

Checks whether the configurations of Kylin are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for UOS

Checks whether the configurations of UOS are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

MLPS Level 3 Compliance Baseline for Anolis 8

Checks whether the configurations of Anolis 8 are compliant with MLPS standards. The check items included in the baseline are benchmarked against the testing standards and requirements on secure computing environments proposed by authoritative assessment organizations. During benchmarking, the MLPS 2.0 standards (level 3) are used.

19

**Weak password**

Zabbix login weak password baseline

Checks weak passwords that are used to log on to Zabbix.

1

ElasticSearch login weak password baseline

Checks weak passwords that are used to log on to Elasticsearch servers.

1

Activemq login weak password baseline

Checks weak passwords that are used to log on to ActiveMQ.

1

RabbitMQ login weak password baseline

Checks weak passwords that are used to log on to RabbitMQ.

1

OpenVPN weak password detection in Linux system

Checks common weak passwords of OpenVPN accounts in Linux operating systems.

1

Jboss 6/7 login weak password baseline

Checks weak passwords that are used to log on to JBoss 6 and JBoss 7.

1

Jenkins login weak password baseline

Checks weak passwords that are used to log on to Jenkins. This baseline check provides more samples to detect common weak passwords and delivers better check performance than its early version.

1

Proftpd login weak password baseline

Checks weak passwords that are used to log on to a new version of ProFTPD. This baseline check contains diversified samples of common weak passwords for better check performance.

1

Weblogic 12c login weak password detection

Checks weak password for users of WebLogic Server 12c.

1

Openldap login weak password baseline

Checks weak passwords that are used to log on to OpenLDAP.

1

VncServer weak password check

Checks common weak passwords that are used to log on to the VNC service.

1

pptpd login weak password baseline

Checks weak passwords that are used to log on to PPTP servers.

1

Oracle login weak password detection

Checks weak passwords for users of Oracle databases.

1

svn login weak password baseline

Checks weak passwords that are used to log on to SVN servers.

1

rsync login weak password baseline

Checks weak passwords that are used to log on to rsync servers.

1

MongoDB Weak Password baseline

Checks weak passwords for the MongoDB service. MongoDB 3.x and 4.x support this baseline check.

1

PostgreSQL DB login weak password baseline

Checks weak passwords that are used to log on to PostgreSQL databases.

1

Apache Tomcat Console weak password baseline

Checks weak passwords that are used to log on to the Apache Tomcat console. Apache Tomcat 7, 8, and 9 support this baseline check.

1

Ftp login weak password baseline

Checks weak passwords that are used to log on to FTP servers and anonymous logons to FTP servers.

1

Redis DB login weak password baseline

Checks weak passwords that are used to log on to Redis databases.

1

Linux system login weak password baseline

Checks weak passwords that are used to log on to a new version of Linux systems. This baseline check contains diversified samples of common weak passwords for better check performance.

1

Mysql database login weak password check (version 8.x is not supported)

Checks weak passwords that are used to log on to a new version of MySQL databases. This baseline check contains diversified samples of common weak passwords for better check performance.

1

MongoDB Weak Password baseline(support version 2. X)

Checks weak passwords for users of the MongoDB service.

1

**Container security**

Unauthorized access - Risk of unauthorized access to the Redis container service

Checks whether the Redis service can be accessed without permissions. The system attempts to connect to the Redis service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the MongoDB container service

Checks whether the MongoDB service can be accessed without permissions. The system attempts to connect to the MongoDB service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the Jboss container service

Checks whether the JBoss service can be accessed without permissions. The system attempts to connect to the JBoss service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the ActiveMQ container service

Checks whether the ActiveMQ service can be accessed without permissions. The system attempts to connect to the ActiveMQ service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the Rsync container service

Checks whether the rsync service can be accessed without permissions. The system attempts to connect to the rsync service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the Memcached container service

Checks whether the Memcached service can be accessed without permissions. The system attempts to connect to the Memcached service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the RabbitMQ container service

Checks whether the RabbitMQ service can be accessed without permissions. The system attempts to connect to the RabbitMQ service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the ES container service

Checks whether the Elasticsearch service can be accessed without permissions. The system attempts to connect to the Elasticsearch service or reads the configuration file of the service during container runtime to perform the check.

1

Unauthorized access - Risk of unauthorized access to the Jenkins container service

Checks whether the Jenkins service can be accessed without permissions. The system attempts to connect to the Jenkins service or reads the configuration file of the service during container runtime to perform the check.

1

Kubernetes(ACK) Master Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baselines are suitable for enterprise users who have professional security requirements. The baselines include a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results.

52

Kubernetes(ACK) Node Internationally Agreed Best Practices for Security

9

Weak Password-Proftpd container runtime weak password risk

Checks whether weak passwords are used during ProFTPD container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the ProFTPD service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during ProFTPD container runtime.

1

Weak Password-Redis container runtime weak password risk

Checks whether weak passwords are used during Redis container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the Redis service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during Redis container runtime.

1

Weak Password-MongoDB container runtime weak password risk

Checks whether weak passwords are used during MongoDB container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the MongoDB service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during MongoDB container runtime.

1

Weak Password-Jboss container runtime weak password risk

Checks whether weak passwords are used during JBoss container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the JBoss service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during JBoss container runtime.

1

Weak Password-ActiveMQ container runtime weak password risk

Checks whether weak passwords are used during ActiveMQ container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the ActiveMQ service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during ActiveMQ container runtime.

1

Weak Password-Rsync container runtime weak password risk

Checks whether weak passwords are used during rsync container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the rsync service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during rsync container runtime.

1

Weak Password-SVN container runtime weak password risk

Checks whether weak passwords are used during SVN container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the SVN service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during SVN container runtime.

1

Weak Password-ES container runtime weak password risk

Checks whether weak passwords are used during Elasticsearch container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the Elasticsearch service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during Elasticsearch container runtime.

1

Weak Password-Mysql container runtime weak password risk

Checks whether weak passwords are used during MySQL container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the MySQL service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during MySQL container runtime.

1

Weak Password-Tomcat container runtime weak password risk

Checks whether weak passwords are used during Tomcat container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the Tomcat service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during Tomcat container runtime.

1

Weak Password-Jenkins container runtime weak password risk

Checks whether weak passwords are used during Jenkins container runtime. The system reads files such as password configuration files to obtain authentication information and attempts to connect to the Jenkins service from an on-premises machine. If the service is connected, the system compares the used password against the weak password dictionary to check whether a weak password is used during Jenkins container runtime.

1

Alibaba Cloud Standard-Kubernetes-Node Security Baseline Check

Checks whether the configurations of Kubernetes nodes are compliant with the Alibaba Cloud standards of best security practices.

7

Alibaba Cloud Standard-Kubernetes-Master Security Baseline Check

Checks whether the configurations of Kubernetes master nodes are compliant with the Alibaba Cloud standards of best security practices.

18

Alibaba Cloud Standard-Docker Host Security Baseline Check

Checks whether the configurations of Docker hosts are compliant with the Alibaba Cloud standards of best security practices.

10

Alibaba Cloud standard-Docker container security baseline check (supports K8S Docker pods)

Checks whether the configurations of Docker containers are compliant with the Alibaba Cloud standards of best security practices.

8

Docker unauthorized access high vulnerability risk

Checks Docker vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Kubernetes-Apiserver unauthorized access to high-risk risks

Checks Kubernetes API server vulnerabilities that can be exploited by attackers to implement unauthorized access.

1

Kubernetes(K8s) Pod Internationally Agreed Best Practices for Security (supports K8S Containerd pods)

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Kubernetes pods.

12

Kubernetes(ACK) Pods Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Container Service for Kubernetes (ACK) pods.

7

Kubernetes(ECI) Pod Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Elastic Container Instance pods.

2

Kubernetes(K8S) Master Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Kubernetes master nodes.

55

Kubernetes(K8S) Policy Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Kubernetes nodes.

34

Kubernetes(K8S) Worker Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baseline is suitable for enterprise users who have professional security requirements. The baseline includes a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results. This baseline check is suitable for Kubernetes worker nodes.

16

Dockerd Container Internationally Agreed Best Practices for Security

Checks system configurations based on the check items in internationally agreed best practices for security. The baselines are suitable for enterprise users who have professional security requirements. The baselines include a variety of check items that you can use based on your business scenarios and requirements. You can reinforce the security of your system based on the check results.

91

Dockerd Host Internationally Agreed Best Practices for Security

25

Containerd Container Internationally Agreed Best Practices for Security

25

Containerd Host Internationally Agreed Best Practices for Security

22

**Best security practices**

Alibaba Cloud Standard - Alibaba Cloud Linux 2/3 Benchmark

Checks whether the configurations of Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 are compliant with the Alibaba Cloud standards of best security practices.

16

Alibaba Cloud Standard - CentOS Linux 6 Security Baseline Check

Checks whether the configurations of CentOS Linux 6 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - CentOS Linux 7/8 Security Baseline Check

Checks whether the configurations of CentOS Linux 7 or CentOS Linux 8 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Debian Linux 8/9/10/11/12 Security Baseline

Checks whether the configurations of Debian Linux 8, Debian Linux 9, Debian Linux 10, Debian Linux 11, or Debian Linux 12 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Red Hat Enterprise Linux 6 Security Baseline Check

Checks whether the configurations of RHEL 6 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Red Hat Enterprise Linux 7/8 Security Baseline Check

Checks whether the configurations of RHEL 7 or RHEL 8 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Ubuntu Security Baseline

Checks whether the configurations of Ubuntu are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Memcached Security Baseline Check

Checks whether the configurations of Memcached are compliant with the Alibaba Cloud standards of best security practices.

5

Alibaba Cloud Standard - MongoDB Security Baseline Check (Version 3.x)

Checks whether the configurations of MongoDB are compliant with the Alibaba Cloud standards of best security practices.

9

Alibaba Cloud Standard - Mysql Security Baseline Check

Checks whether the configurations of MySQL are compliant with the Alibaba Cloud standards of best security practices. MySQL 5.1 to MySQL 5.7 support this baseline check.

12

Alibaba Cloud Standard - Oracle Security Baseline Check

Checks whether the configurations of Oracle Database 11g are compliant with the Alibaba Cloud standards of best security practices.

14

Alibaba Cloud Standard-PostgreSql Security Initialization Check

Checks whether the configurations of PostgreSQL are compliant with the Alibaba Cloud standards of best security practices.

11

Alibaba Cloud Standard - Redis Security Baseline Check

Checks whether the configurations of Redis are compliant with the Alibaba Cloud standards of best security practices.

7

Alibaba Cloud Standard - Anolis 7/8 Security Baseline Check

Checks whether the configurations of Anolis 7 or Anolis 8 are compliant with the Alibaba Cloud standards of best security practices.

16

Alibaba Cloud Standard - Apache Security Baseline Check

Checks whether the middleware configurations of Apache are compliant with internationally agreed best practices for security and the Alibaba Cloud standards.

19

Alibaba cloud standard - CouchDB security baseline check

Checks whether the configurations of Apache CouchDB are compliant with Alibaba Cloud standards.

5

Alibaba Cloud Standard - ElasticSearch Security Baseline Check

Checks whether the configurations of Elasticsearch are compliant with the Alibaba Cloud standards of best security practices.

3

Alibaba Cloud Standard - Hadoop Security Baseline Check

Checks whether the configurations of Apache Hadoop are compliant with the Alibaba Cloud standards of best security practices.

3

Alibaba Cloud Standard - Influxdb Security Baseline Check

Checks whether the configurations of InfluxDB are compliant with the Alibaba Cloud standards of best security practices.

5

Alibaba Cloud Standard -Jboss 6/7 Security Baseline

Checks whether the configurations of JBoss 6 or JBoss 7 are compliant with the Alibaba Cloud standards of best security practices.

11

Alibaba Cloud Standard - Kibana Security Baseline Check

Checks whether the configurations of Kibana are compliant with the Alibaba Cloud standards of best security practices.

4

Alibaba Cloud Standard - Kylin Security Baseline Check

Checks whether the configurations of Kylin are compliant with Alibaba Cloud standards.

15

Alibaba Cloud Standard -Activemq Security Baseline

Checks whether the configurations of ActiveMQ are compliant with the Alibaba Cloud standards of best security practices.

7

Alibaba Cloud Standard - Jenkins Security Baseline Check

Checks whether the configurations of Jenkins are compliant with the Alibaba Cloud standards of best security practices.

6

Alibaba Cloud Standard - RabbitMQ Security Baseline

Checks whether the configurations of RabbitMQ are compliant with the Alibaba Cloud standards of best security practices.

4

Alibaba Cloud Standard - Nginx Security Baseline Check

Checks whether the configurations of NGINX are compliant with the Alibaba Cloud standards of best security practices.

13

Alibaba Cloud Standard - SUSE Linux 15 Security Baseline Check

Checks whether the configurations of SLES 15 are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard - Uos Security Baseline Check

Checks whether the configurations of UOS are compliant with the Alibaba Cloud standards of best security practices.

15

Alibaba Cloud Standard -Zabbix Security Baseline

Checks whether the configurations of Zabbix are compliant with the Alibaba Cloud standards of best security practices.

6

Alibaba Cloud Standard-Apache Tomcat Security Baseline

Checks whether the middleware configurations of Apache Tomcat are compliant with internationally agreed best practices for security and the Alibaba Cloud standards.

13

Ping An Puhui standard - CentOS Linux 7 security baseline inspection

Checks whether the configurations of CentOS Linux 7 are compliant with the Ping An Puhui standards.

31

Ping An Puhui risk monitoring

Checks risks based on the Ping An Puhui standards.

7

Alibaba Cloud Standard - SVN Security Baseline Check

Checks whether the configurations of SVN are compliant with the Alibaba Cloud standards of best security practices.

2

Alibaba Cloud Standard - Alma Linux 8 Security Baseline Check

Checks whether the configurations of Alma Linux 8 are compliant with the Alibaba Cloud standards of best security practices.

16

Alibaba Cloud Standard - Rocky Linux 8 Security Baseline Check

Checks whether the configurations of Rocky Linux 8 are compliant with the Alibaba Cloud standards of best security practices.

16

Alibaba Cloud Standard-TencentOS Security Baseline Check

Checks whether the configurations of TencentOS are compliant with the Alibaba Cloud standards of best security practices.

16

**Custom policy**

CentOS Linux 7/8 custom baseline

The custom template that contains all baseline check items related to CentOS Linux 7 or CentOS Linux 8. You can select baseline check items and configure parameters for baseline check items by using the template. This helps best suit your business requirements.

53

CentOS Linux 6 custom baseline

The custom template that contains all baseline check items related to CentOS Linux 6. You can select baseline check items and configure parameters for baseline check items by using the template. This helps best suit your business requirements.

47

Ubuntu custom security baseline check

Checks whether the configurations of Ubuntu 14, Ubuntu 16, Ubuntu 18, and Ubuntu 20 are compliant with the Alibaba Cloud standards of best security practices.

62

Redhat7/8 Custom Security Baseline Check

Checks the configurations of RHEL 7 or RHEL 8 based on custom parameters.

53

## **FAQ**

-   [Which edition of Security Center do I need to use the baseline check feature?](/help/en/security-center/user-guide/baseline-check-faq#23408ceb32lah)
    
-   [What are the differences between baselines and vulnerabilities?](/help/en/security-center/user-guide/baseline-check-faq#section-7sb-9i5-ymi)
    
-   [What should I do if Security Center fails to verify a fixed baseline risk?](/help/en/security-center/user-guide/baseline-check-faq#section-3i4-ozd-8el)
    
-   [Why does the check item "Make sure that each user has a unique user ID, does not use simple passwords, and changes the password periodically" still fail after the one-click fix and verification?](/help/en/security-center/user-guide/baseline-check-faq#49f4fcbfca4pg)
