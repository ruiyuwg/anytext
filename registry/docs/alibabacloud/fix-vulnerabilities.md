Security Center detects vulnerabilities across your assets and provides tools to fix them. This topic explains how to prioritize vulnerabilities, apply fixes for each vulnerability type, and verify the results.

## Vulnerability priority levels

Security Center calculates a priority score for each vulnerability based on four factors:

-   **Technology** used in the exploit
    
-   **Exploitability** -- whether a proof of concept (PoC), exploit, weaponized worm, or weaponized virus exists
    
-   **Threat** -- whether the vulnerability can be exploited to obtain server permissions
    
-   **Number of affected IP addresses** -- the likelihood of the vulnerability being exploited by attackers
    

For the scoring formula, see [Vulnerability priority score formula](/help/en/security-center/user-guide/overview-4).

**Priority**

**Score**

**Description**

**Recommended action**

**High**

\> 13.5

Easily exploited by unauthenticated remote attackers through arbitrary code execution, without user interaction. Commonly exploited by worms and ransomware.

Fix immediately.

**Medium**

7.1 -- 13.5

May affect confidentiality, integrity, or availability. Typically not actively exploited, but scored high by the Common Vulnerability Scoring System (CVSS) upon disclosure.

Fix based on your business requirements.

**Low**

< 7

Lowest exploitation risk. Usually source-code bugs or issues affecting compliance and service performance without posing a direct security threat.

Can typically be ignored.

### Prioritization guidelines

When multiple vulnerabilities are detected:

1.  **Filter for exploitable vulnerabilities.** On the **Vulnerabilities** page, turn on **Show Only Exploitable Vulnerabilities**. This model evaluates vulnerabilities using the Alibaba Cloud vulnerability scoring system, time score, environment score, asset importance score, PoC availability, exploitability, and severity to surface the most actionable items.
    
2.  **Fix urgent and Web-CMS vulnerabilities first.** Alibaba Cloud security engineers confirm these types as high-risk. After addressing them, proceed to application vulnerabilities, Windows system vulnerabilities, and Linux software vulnerabilities.
    
3.  **Consider your business context.** Factor in business requirements, server usage, and the operational impact of applying fixes.
    

## Fixing procedure

Follow these steps to fix vulnerabilities safely while keeping your servers running normally.

### Step 1: Scan for vulnerabilities

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset: **Chinese Mainland** or **Outside Chinese Mainland**. In the left-side navigation pane, choose **Risk Governance** > **Vulnerabilities**.
    
2.  In the upper-right corner of the **Vulnerabilities** page, click **Vulnerability Settings**.
    
3.  In the **Vulnerability Settings** panel, verify that all vulnerability types are enabled and all servers are in scope. For details, see [Scan for vulnerabilities](/help/en/security-center/user-guide/scan-for-vulnerabilities).
    
4.  Return to the **Vulnerabilities** page and click **Quick Scan** to detect the latest vulnerability status across all servers in the current account.
    

### Step 2: Test patches in a test environment

Before applying fixes to production servers, install the patches in a test environment. Verify compatibility and security, then document the following:

-   Fix results (success or failure)
    
-   Fix duration
    
-   Patch compatibility
    
-   Impact on running services
    

### Step 3: Back up server data

Create a backup before fixing any vulnerability. The backup method depends on the vulnerability type:

-   **Linux software vulnerabilities and Windows system vulnerabilities**: Select **Create snapshots automatically and fix** during the fix process.
    
-   **Urgent and application vulnerabilities**: Manually create snapshots in the [ECS console](https://ecs.console.alibabacloud.com). Export the list of affected ECS instances and use the automatic snapshot feature. For details, see [Automatic snapshots overview](/help/en/ecs/user-guide/automatically-create-snapshots/).
    

### Step 4: Fix vulnerabilities

Upload patches to the affected servers and apply them. This step requires at least two administrators: one to apply fixes and one to document the process. Exercise caution when you fix vulnerabilities.

### Step 5: Verify fixes

Check whether vulnerabilities on the servers are fixed. Make sure that the vulnerabilities are fixed and no exceptions occurred on the servers.

## Fix methods by vulnerability type

### Urgent and application vulnerabilities

Security Center detects these vulnerabilities and provides fix suggestions, but does not support one-click fixes. Log on to the affected server and apply the fix manually based on the guidance on the vulnerability details page.

**Important**

-   Security Center cannot fix vulnerabilities in all operating systems. Patching certain systems directly may introduce issues. Create snapshots in the ECS console and test the fix in a test environment first. Export the list of affected ECS instances and use the automatic snapshot feature for data backup.
    
-   If a fix would disrupt your business or no security patch is available, apply the officially provided temporary mitigation measures.
    
-   If a vulnerability does not affect your business and a security patch is available, upgrade the software to a secure version before applying fixes.
    

### Linux software vulnerabilities and Windows system vulnerabilities

Security Center supports one-click fixes for these vulnerability types. Open the vulnerability details page and follow the fix instructions. For details, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).

#### Batch fix for Linux software vulnerabilities

To fix multiple Linux software vulnerabilities at once, use the batch fix feature. Security Center automatically identifies affected assets and applies fixes across them.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region: **Chinese Mainland** or **Outside Chinese Mainland**. In the left-side navigation pane, choose **Risk Governance** > **Vulnerabilities**.
    
2.  On the **Linux Software Vulnerability** tab of the **Vulnerabilities** page, select the vulnerabilities to fix and click **Batch Repair**.
    
    > Fix no more than 100 vulnerabilities at a time to avoid performance impact. For larger batches, create snapshots in batches and then fix the vulnerabilities.
    
3.  In the **Batch Repair** dialog box, review the affected assets. Select **Create snapshots automatically and fix** or **Skip snapshot backup and fix directly**, then click **Fix Now**.
    

If batch fixes fail, check whether the server has a stable network connection and sufficient disk space. For more information, see [Troubleshoot fix failures](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).

### Web-CMS vulnerabilities

Security Center monitors website directories to detect vulnerabilities in common website builders. These vulnerabilities support one-click fixes using the same method as Linux software vulnerabilities. For details, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).
