This topic describes the billing rules of Application Development (LangStudio) of Platform for AI (PAI).

When using LangStudio to develop LLM applications, the following cloud services may incur fees, including Object Storage Service (OSS), Managed Service for OpenTelemetry, Simple Log Service (SLS), and PAI-EAS:

-   When developing application flow, you need to select an OSS bucket as the working path to store code, configuration files, development and debugging logs, and service deployment snapshots. For more information, see [Billing of OSS](/help/en/oss/billing-overview).
    
-   LangStudio requires Managed Service for OpenTelemetry for debugging individual runs and for API calls post-deployment. For more information, see [Billing of Managed Service for OpenTelemetry](/help/en/arms/tracing-analysis/product-overview/untitled-document-1697525445039).
    
-   Managed Service for OpenTelemetry uses Simple Log Service (SLS) to store trace log data. For more information, see [Billing of SLS](/help/en/sls/billing-overview).
    
-   Runtime dependencies for application flow development and debugging use pay-as-you-go PAI-DSW instances. For more information, see [Billing of DSW](/help/en/pai/dsw-billing-description).
    
-   You can deploy your developed and debugged application flow in EAS to provide external API services. For more information, see [Billing of EAS](/help/en/pai/billing-of-eas).
