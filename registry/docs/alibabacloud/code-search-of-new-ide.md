Code Search in Data Studio lets you find code snippets in Nodes using keywords. The search results show all matching Nodes and their context. This helps you identify the source of data changes, such as the specific Task that modified a target Table. This article describes how to use Code Search.

## Scope

-   **Edition requirements**: Code Search is available only in DataWorks **Standard Edition** and higher.
    
-   **Search scope**: Code Search finds Nodes only in the following locations: **Workspace Directories**, **My Files**, **Manually Triggered Tasks**, **Manually Triggered Workflows**, and the **Recycle Bin**.
    

## Access Code Search

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  You can access Code Search in one of two ways:
    
    1.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5031270471/p855295.png) icon to go to **Data Studio**. Next to **Workspace Directories** or **My Files**, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5031270471/p855299.png) icon to open the **Code Search** page.
        
    2.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5031270471/p855296.png) icon to go to **Manually Triggered Objects**. Next to **Manually Triggered Workflows** or **Manually Triggered Tasks**, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5031270471/p855299.png) icon to open the **Code Search** page.
        
        > This action pre-selects the corresponding **Position** filter.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0115402771/p1054669.png)
        

## Use Code Search

1.  Enter **keywords** and configure search filters.
    
    -   In the search box, enter keywords, such as a code snippet or a Table name. The more specific the keywords, the more precise the search results.
        
    -   You can also refine your search with filters such as **Position**, **Node Type**, **Owner**, and **Modification Time**.
        
        **Note**
        
        Advanced search filters help you locate target Nodes more quickly and accurately. If you do not configure any filters, the search runs across the entire Workspace by default.
        
2.  Press `Enter` to search.
    
3.  View the search results.
    
    You can view all matching Nodes that contain the keywords, along with detailed code context. This helps you quickly locate the target Node and identify changes. You can also:
    
    -   Click a Node name to open its details page.
        
    -   Click **Copy Code** to copy the current code snippet.
