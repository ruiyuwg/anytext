-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI](https://docs.cloud.google.com/vertex-ai/docs)

Send feedback

# Use a prebuilt template from the Template Gallery Stay organized with collections Save and categorize content based on your preferences.

The Vertex AI Pipelines **Template Gallery** contains Google-authored pipeline templates and components, which you can use to create pipeline runs or embed in your own pipelines.

**Note:** The **Template Gallery** contains pipeline templates and components that are generally available (GA) as well as templates in preview. To understand the terms of service of each template, refer to its associated documentation. For more information, see the [launch stage descriptions](https://cloud.google.com/products#product-launch-stages).

![Shows the Template Gallery page containing Google-authored pipeline templates for Tabular Workflows](/static/vertex-ai/docs/pipelines/images/vertex-ai-pipelines-template-gallery.png)

## Create a pipeline run from the Template Gallery

Use the following instructions to create a pipeline run from a Google-authored template from the **Template Gallery**. Alternatively, you can create your own custom pipeline template and then create a pipeline run based on it. For more information about creating and using a custom pipeline template, see [Create, upload, and use a pipeline template](/vertex-ai/docs/pipelines/create-pipeline-template).

### Console

**Note:** These instructions describe how to create a pipeline run using the default interface of the **Create pipeline run** page, which includes the **Run details** and the **Runtime configuration** sections. For some templates from the **Template gallery**, this page has additional sections. For example, the **AutoML for Tabular Classification / Regression** template also includes the **Training Method**, **Training options**, and **Compute and pricing** sections.

Use the following instructions to create a pipeline run from the **Template Gallery**:

1.  In the Google Cloud console, in the **Vertex AI** section, go to the **Template Gallery** tab on the **Pipelines** page.
    
    [Go to Template Gallery](https://console.cloud.google.com/vertex-ai/pipelines/vertex-ai-templates)
    
2.  Optional: To filter the list of pipeline templates, in the left pane, select the filter criteria. For example, to show only pipeline templates, select **Templates** under **Type**.
    
3.  On the card corresponding to the template that you want to use, click **Create run** to open the **Create pipeline run** page.
    
4.  In the **Run details** section, do the following:
    
    1.  Optional: Modify the default **Run name** that uniquely identifies the pipeline run.
        
    2.  Optional: To schedule recurring pipeline runs, specify the **Run schedule**, as follows:
        
        1.  Select **Recurring**.
            
        2.  Under **Start time**, specify when the schedule becomes active.
            
            -   To schedule the first run to occur immediately after schedule creation, select **Immediately**.
                
            -   To schedule the first run to occur at a specific time and date, select **On**.
                
        3.  In the **Frequency** field, specify the frequency to schedule and execute the pipeline runs, using a cron schedule expression based on [unix-cron](https://man7.org/linux/man-pages/man5/crontab.5.html).
            
        4.  Under **Ends**, specify when the schedule ends.
            
            -   To indicate that the schedule creates pipeline runs indefinitely, select **Never**.
                
            -   To indicate that the schedule ends on a specific date and time, select **On**, and specify the end date and time for the schedule.
                
        5.  Optional: To specify that the pipeline run uses a custom service account, a customer-managed encryption key (CMEK), or a peered VPC network, click **Advanced options**, and then follow these instructions:
            
            -   To specify a service account, select a service account from the **Service account** drop-down list.
                
                If you don't specify a service account, Vertex AI Pipelines runs your pipeline using the default Compute Engine service account.
                
                Learn more about [configuring a service account for use with Vertex AI Pipelines](/vertex-ai/docs/pipelines/configure-project#service-account).
                
            -   To use a CMEK, select **Use a customer-managed encryption key**. The **Select a customer-managed key** drop-down list appears. In the **Select a customer-managed key** drop-down list, select the key that you want to use.
                
            -   To use a peered VPC network in this pipeline run, enter the VPC network name in the **Peered VPC network** box.
                
    3.  Click **Continue**.
        
5.  In the **Runtime configuration** section, configure the pipeline run, as follows:
    
    1.  Under **Cloud storage location**, click **Browse** to select the Cloud Storage bucket for storing the pipeline output artifacts, and then click **Select**.
        
    2.  Optional: To configure the failure policy and the cache for the pipeline run, click **Advanced options**, and then use the following instructions:
        
        -   Under **Failure policy**, specify the failure policy for the entire pipeline. [Learn more about pipeline failure policies.](/vertex-ai/docs/pipelines/configure-failure-policy)
            
            -   To configure the pipeline to continue scheduling tasks after one task fails, select **Run all steps to completion**. This option is selected, by default.
                
            -   To configure the pipeline to fail after one task fails, select **Fail this run as soon as one step fails**.
                
        -   Under **Caching configuration**, specify the cache configuration for the entire pipeline.
            
            -   To use the task-level cache configuration for task in the pipeline, select **Do not override task-level cache configuration**.
                
            -   To turn on caching for all the tasks in the pipeline and override any task-level cache configuration, select **Enable read from cache for all steps (fastest)**.
                
            -   To turn off caching for all the tasks in the pipeline and override any task-level cache configuration, select **Disable read from cache for all steps (fastest)**.
                
    3.  Optional: If your pipeline has parameters, under **Pipeline parameters**, specify your pipeline run parameters.
        
6.  To create your pipeline run, click **Submit**.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
