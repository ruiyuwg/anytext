Simple Log Service allows you to customize the content in alert notifications when you configure an alert template.

## Available variables

When you configure an alert template, you can add variables to the title and body of the sample notification in the alert template. Before Simple Log Service pushes an alert notification, Simple Log Service replaces the variables with the actual values of the variables. For example, Simple Log Service replaces the `{{ alert.project }}` variable with the name of the project in which the alert is triggered.

Every time an alert is triggered, Simple Log Service generates a context for the alert and stores the context in the Results field. All fields in the Results field can be referenced as variables in the alert template. For more information, see [Syntax for new alert templates](/help/en/sls/syntax-for-new-alert-templates#concept-2116211) and [Variables in new alert templates](/help/en/sls/variables-in-new-alert-templates#concept-2116230).

## Comparison of alert templates between the original and new alerting features

The new alerting feature supports both the syntax that is provided by the new alerting feature and the syntax that is provided by the original alerting feature. Compared with the syntax provided by the original alerting feature, the syntax provided by the new alerting feature supports more flexible, advanced custom rendering logic.

**Functionality**

**New alerting feature**

**Original alerting feature**

Reference methods

-   General fields: `{{ alert.project }}`
    
-   Nested fields: `{{ alert.policy.alert_policy_id }}`
    
-   Array elements: `{{ alert.results[0] }}`
    
-   Array element fields: `{{ alert.results[0].query }}`
    

-   General fields: `${project}`
    
-   Nested fields: `${policy.alert_policy_id}`
    
-   Array elements: `${results[0]}`
    
-   Array element fields: `${results[0].query}`
    

Template variables

The content is separated from the style. Variables provide the content. Control flows and functions are used to implement diverse styles. For more information, see [Variables in new alert templates](/help/en/sls/variables-in-new-alert-templates#concept-2116230).

The content is not separated from the style. Both the content and the style are provided by variables. For more information, see [Variables in original alert templates](/help/en/sls/variables-in-original-alert-templates#reference-2061590).

Control flows such as conditions and iterations

Control flows are supported. For more information, see [Syntax for new alert templates](/help/en/sls/syntax-for-new-alert-templates#concept-2116211).

Control flows are not supported.

Filter processing

Filter processing is supported. For more information, see [Built-in functions in alert templates](/help/en/sls/built-in-functions-in-alert-templates#concept-2116231).

Filter processing is not supported.

## Content formatting

-   DingTalk
    
    Alert notifications over DingTalk support the Markdown syntax. The following elements are available:
    
    -   Heading
        
        ```
        # Level 1 heading
        ## Level 2 heading
        ### Level 3 heading
        #### Level 4 heading
        ##### Level 5 heading
        ###### Level 6 heading
        ```
        
    -   Reference
        
        ```
        > A man who stands for nothing will fall for anything.
        ```
        
    -   Bold and italic text
        
        ```
        **bold**
        *italic*
        ```
        
    -   Link
        
        ```
        [this is a link](http://example.com)
        ```
        
    -   Image
        
        ```
        ![](http://example.com/pic.jpg)
        ```
        
    -   Unordered list
        
        ```
        - item1
        - item2
        ```
        
    -   Ordered list
        
        ```
        1. item1
        2. item2
        ```
        
-   Enterprise WeChat
    
    Alert notifications over Enterprise WeChat support the Markdown syntax. The following elements are available:
    
    **Important**
    
    In alert notifications that are pushed over Enterprise WeChat, `\n\n` is rendered as `\n`. If you want to add a blank line between the lines in an alert notification, you must use `\n\n\n`.
    
    -   Heading
        
        ```
        # Level 1 heading
        ## Level 2 heading
        ### Level 3 heading
        #### Level 4 heading
        ##### Level 5 heading
        ###### Level 6 heading
        ```
        
    -   Bold text
        
        ```
        **bold**
        ```
        
    -   Link
        
        ```
        [This is a link](http://work.weixin.qq.com/api/doc)
        ```
        
    -   Inline code segment
        
        ```
        `code`
        ```
        
    -   Reference
        
        ```
        > Referenced text
        ```
        
    -   Font color
        
        Only three preconfigured colors are supported.
        
        ```
        <font color="info">Green</font>
        <font color="comment">Gray</font>
        <font color="warning">Orange red</font>
        ```
        
-   Lark
    
    Alert notifications over Lark support the Markdown syntax. The following elements are available:
    
    -   Bold text
        
        ```
        **Bold**
        ```
        
    -   Italic text
        
        ```
        *Italic*
        ```
        
    -   Strikethrough text
        
        ```
        ~~Strikethrough~~
        ```
        
    -   Hyperlink
        
        ```
        <a>https://open.feishu.cn</a>
        ```
        
    -   Text link
        
        ```
        [Development documentation](https://open.feishu.cn)
        ```
        
    -   Image
        
        ```
        ![hover_text](image_key)
        ```
        
    -   Separator line
        
        ```
        ---
        ```
        
-   Slack
    
    Incoming webhooks in Slack support only a part of the Markdown syntax. For more information, see [Slack Markdown Reference](https://www.markdownguide.org/tools/slack/#messages).
    
-   Webhook
    
    Webhooks can be used to push one or more alert notifications at a time.
    
    -   Push one alert notification at a time:
        
        ```
        {
          "Project": "${project}",
          "Alert name": "${alert_name}"
        }
        ```
        
    -   Combine and push multiple alert notifications at a time:
        
        ```
        [
          {
            "Project": "project-name1",
            "Alert name": "alert-name1"
          },
          {
            "Project": "project-name2",
            "Alert name": "alert-name2"
          }
        ]
        ```
        
-   Email
    
    Emails support HTML tags. For more information, see [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Examples:
    
    -   Use `<br>` as a line feed.
        
    -   Use `<a href="${query_url}">Details</a>` to add a link. You can click the link to view details about the alert.
        
    -   Use `<strong>${severity}</strong>` to display the severity level of the alert in bold text.
