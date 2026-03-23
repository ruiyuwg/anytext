Policies are used to manage cloud computers. This topic describes the concept, types, and billing rules of policies, and the time when policy modifications take effect.

## What is a policy?

A policy is a collection of rules that control and affect the user experience, behavior, capabilities, and security of a cloud computer. To manage cloud computers, the administrator needs to only create custom policies and associate the policies with the cloud computers. When management requirements change, the administrator needs to only update the policies.

A policy must contain the following rules:

#### User experience-related rules

The rules can manage connection of cloud computers and user experience. To configure such rules, you can specify the following parameters in the console: Display Mode, Bandwidth Limit, Network Transmission, and Max. Retry Period.

#### Security-related rules

The rules can ensure the security in aspects, such as logon, display, transmission, and networks, during the period of time when cloud computers are used.

#### Audit-related rules

The rules rely on the screen recording audit feature that is in public preview. You can record the operations performed by end users on cloud computers, and then play back the recording files for auditing anytime.

#### Peripheral-related rules

The rules can manage user behavior and experience when end users use peripherals on cloud computers. To configure such rules, you can specify the following parameters in the console: Local Disk Mapping, USB Redirection, Peripheral Blacklist/Whitelist, and Peripheral Management Rule.

#### Collaboration-related rules

Elastic Desktop Service (EDS) provides the stream collaboration feature for administrators and end users. You and your end users can share the desktops of cloud computers for remote assistance and collaboration.

#### AI assistant-related rules

DesktopAssistant on cloud computers integrates the AI assistant component. You can configure the AI Assistant parameter in the console to show or hide the entry to AI-powered assistance, which lies below DesktopAssistant.

## Policy types

Policies are classified into the following types:

-   System policy: the default policy provided by the system. Each cloud computer must be associated with at least one policy. If you do not have special management requirements for a cloud computer, you can associate the system policy with the cloud computer.
    
    **Note**
    
    The name of the system policy is `All enabled policy`. The ID of the system policy is `system-all-enabled-policy`. You cannot modify or delete the system policy.
    
-   Custom policy: You can create custom policies to meet your management requirements for cloud computers.
    

## **Billing**

The following rules in a policy are free of charge only during the public preview. Other rules are permanently free of charge.

-   Screen recording audit:
    
    -   This feature is a valued-added feature and is in public preview. You can use the feature free of charge during the public preview. After the public preview ends, you are charged for using the feature. An announcement that includes the billing rules will be released in advance.
        
    -   Screen recording files are stored in an Object Storage Service (OSS) bucket that is automatically created for you. You are charged for using the bucket. For information about the billing of OSS, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
        
-   Stream collaboration:
    
    -   Remote assistance: This feature is free of charge.
        
    -   Shared collaboration is in public preview, and is free of charge during the public preview. After the public preview ends, you are charged for using shared collaboration. An announcement that includes the billing rules will be released in advance. We recommend that you stay tuned to our latest updates and announcements.
        

## Time when policy modifications take effect

After you modify a policy that is associated with a cloud computer, the rules determine the time when the modifications take effect. Modifications to the following rules immediately take effect. End users do not need to disconnect from and reconnect to cloud computers.

-   Display mode
    
-   Watermark
    
-   Security group control
    
-   Domain name access control
    
-   Screen recording audit
    
-   Remote assistance
    

Modifications to other rules take effect the next time end users connect to the cloud computers with which the policy is associated.
