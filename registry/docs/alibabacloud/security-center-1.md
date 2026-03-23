DataWorks Security Center is built around the entire data lifecycle. It establishes five core administration pillars: identity authentication, authorization, access control, auditing, and asset protection. This framework provides fine-grained, intelligent security controls, from access policies to risk resolution, to create a defense-in-depth system:

-   **Multi-dimensional data isolation**: Precisely isolates data across tenants and workspaces. It combines workspace member and database permission policies to prevent data breaches across permission boundaries.
    
-   **Fine-grained access control**: Flexibly combines tenant and workspace roles to dynamically align permissions with responsibilities. A permission request system with automatic revocation ensures that permissions and responsibilities are aligned in real time.
    
-   **Proactive protection for high-value data**: Automatically identifies high-value data, such as private or confidential information, using a classification and categorization rule library. It uses static data masking, such as watermarking or encryption, and dynamic data masking policies to protect data throughout its entire lifecycle.
    
-   **Real-time intelligent threat defense**: Continuously monitors high-risk operations, such as abnormal downloads or unauthorized sharing, using user behavior analysis (UBA) and a custom rules engine. It instantly triggers blocking actions or approval processes, shifting the security posture from passive response to proactive defense.
    

## **The five core administration pillars**

**Identity authentication**

-   **Unified identity access**: Seamlessly integrates with Alibaba Cloud accounts and your own enterprise account systems, including Alibaba Cloud accounts, Resource Access Management (RAM) users, and RAM roles. It supports Alibaba Cloud single sign-on (SSO) and the System for Cross-domain Identity Management (SCIM) protocol to connect with enterprise Identity Providers (IdPs), such as self-built or third-party IdPs. This enables SSO and unified identity management.
    
-   **Secure identity foundation**: Ensures all operations are performed by legitimate identities. This eliminates the risk of unauthenticated access.
    

**Authorization**  
_Defines roles and access policies to precisely implement the principle of least privilege._  
  

-   **Two-layer role system**: Flexibly combines tenant roles (global policies) and workspace roles (workspace-level policies). It includes over 10 preset roles, such as administrator, developer, O&M, and data analyst. You can also create custom roles to fit complex organizational structures.
    
-   **Least privilege management**: Provides permission granularity down to the database, table, and field levels. You can map role permissions to specific data resources. For example, you can grant a user permission to query only the UserID field in the Orders table. The entire permission lifecycle, from request and approval to granting and revocation, is managed. This ensures permissions are tightly linked to workspaces and automatically revoked upon expiration, enforcing the principle of least privilege.
    

**Access control**  
_Implements real-time data access protection and workspace-level isolation._  
  

-   **Workspace isolation**: Users can only access workspaces for which they are authorized. All data operations are restricted by the role permissions attached to the workspace. This prevents unauthorized cross-workspace access at the architectural layer.
    
-   **Real-time protection against high-risk behavior**: Intelligently monitors sensitive operations such as data queries, downloads, and sharing. You can define custom risk rules, such as rules that are triggered when a single export exceeds a size limit or when a user frequently accesses sensitive tables. When a rule is triggered, the operation is automatically blocked or sent for mandatory approval.
    

**Auditing**

-   **Full traceability of operations**: Records all data operations, including queries and exports. It supports analysis of sensitive data access and lets you export audit data to meet compliance requirements.
    
-   **End-to-end permission auditing**: Creates a complete audit trail for permission requests, approvals, and revocations. Custom risk behavior rules can precisely identify abnormal operations.
    

**Asset protection**

-   **Intelligent sensitive data identification**: Automatically scans and annotates data with security levels, such as highly sensitive or moderately sensitive. It uses a classification and categorization rule library that includes field and content recognition and AI models. This process builds an inventory of your data assets.
    
-   **Dynamic data masking**: Applies seven types of masking rules in static scenarios, such as masking phone numbers. In dynamic scenarios, it performs real-time data masking based on the access scenario and business rules. This ensures that data is only rendered in a secure format during queries and analysis.
    
-   **Proactive risk alerting**: Sends real-time alerts by email or webhook for risky behaviors, such as accessing raw data or performing high-frequency operations. This enables prevention before an incident, blocking during an incident, and traceability after an incident.
    

## **Core value: Making data security perceptible, manageable, and trustworthy**

DataWorks Security Center uses a three-pronged framework of technology, processes, and rules to cover the entire data lifecycle, from creation to destruction:

-   **Solves core pain points**: Addresses disorganized permissions, sensitive data leakage, and uncontrolled high-risk operations.
    
-   **Improves security resilience**: Embeds security capabilities into daily data operations through dynamic permission management, real-time risk blocking, and a closed-loop intelligent audit system.
    
-   **Empowers business growth**: Accelerates data accessibility and application while ensuring security. This transforms enterprise data assets into trusted drivers of productivity.
