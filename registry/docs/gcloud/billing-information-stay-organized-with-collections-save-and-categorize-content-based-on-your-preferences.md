-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [reCAPTCHA](https://docs.cloud.google.com/recaptcha/docs)
-   [Resources](https://docs.cloud.google.com/recaptcha/docs/resources)

Send feedback

# Billing information Stay organized with collections Save and categorize content based on your preferences.

This document describes billing for reCAPTCHA.

## Tier Selection

Learn how to adjust your reCAPTCHA tier to adapt to your needs.

### Essentials

Eligibility: Automatically applied to new keys in Google Cloud projects without billing enabled.

Cost: Free.

Usage Limit: Up to 10,000 assessments per month.

Features: [Basic](/recaptcha/docs/compare-tiers) feature set.

Beyond Limit: Requests will return an error after exceeding 10,000 assessments within a month.

### Premium

Eligibility: Automatically applied when you enable billing on your Google Cloud project.

Cost:

-   0 - 10,000 assessments/month: Free
-   10,001 - 100,000 assessments/month: $8 flat fee
-   Over 100,000 assessments a month: $0.001 per assessment ($1 per 1,000 assessments).

Features: Access to an advanced set of features, even within the free assessment range.

### Enterprise

High-volume users, [contact Sales](https://inthecloud.withgoogle.com/security-ups/contact.html) to discuss an Enterprise subscription with volume discounts.

After an Enterprise subscription is activated on your billing account, projects linked to the account will automatically gain access to [Enterprise features](/recaptcha/docs/compare-tiers) within 1 hour.

## When to enable billing

To enable and use reCAPTCHA on Google Cloud, you don't need to enable billing for your Google Cloud project. However, you need to enable billing for your Google Cloud project in the following scenarios:

-   You expect to exceed the free monthly allowance of reCAPTCHA, which is 10,000 assessments per month. For more information about the free monthly allowance, see [Pricing](https://cloud.google.com/security/products/recaptcha#pricing).
    
-   You're about to exceed the free monthly allowance of reCAPTCHA and you want to continue using reCAPTCHA to protect your website or mobile application.
    
    You'll receive email notifications to enable billing when you're approaching the free monthly allowance and when you exceed it. Enabling the billing account before you exceed the free monthly allowance helps to keep you and your users safe from fraudulent activities, spam, and abuse.
    
    If you don't enable billing for your Google Cloud project, reCAPTCHA returns an error for any new request after you reach the free monthly allowance.
    
-   You want access to features that are exclusive to reCAPTCHA Premium and Enterprise tiers. Enabling billing is required for those features even if you expect your usage to be within the free monthly allowance.
    

To learn how to enable billing for your project, see [Enable billing for a project](/billing/docs/how-to/modify-project#enable_billing_for_a_project).

## Billing resources

Use the following resources to get help with billing questions:

-   To view billing reports, see [View your billing reports and cost trends](/billing/docs/how-to/reports).
    
-   To learn more about billing, read the [Cloud Billing documentation](/billing/docs).
    
-   To resolve billing concerns, use the [Google Cloud Billing Troubleshooter](https://support.google.com/cloud/troubleshooter/7279311?&ref_topic=6288636).
    
-   To request help with billing questions, contact [Cloud Billing Support](/support/billing).
    
-   To change or disable billing on a project, go to the **Billing** page in the Google Cloud console. For more information, see [Modify a project's billing settings](/billing/docs/how-to/modify-project).
    
    **Caution:** When you disable billing for a project, you also disable all product resources in that project.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
