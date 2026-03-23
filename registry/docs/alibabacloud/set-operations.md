MaxCompute allows you to configure system variables for sessions. This topic describes how to configure and view the system variables, which can affect MaxCompute operations.

The following table describes the statements that are used for SET operations.

**Operation**

**Description**

**Role**

**Operation platform**

[SET](#section-937-f6z-num)

Configures MaxCompute system variables for the current session.

Users who have operation permissions on projects

You can execute the statements that are described in this topic on the following platforms:

-   [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [SQL Analysis](/help/en/maxcompute/user-guide/use-sql-analytics)
    
-   [Use Cloud Shell (odpscmd)](/help/en/maxcompute/user-guide/connect-using-the-cloud-command-line-odpscmd)
    
-   [DataWorks](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    
-   [Develop and submit an SQL script](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    

[SHOW FLAGS](#section-hwo-tsw-dgi)

Displays the properties that you configured by using the SET statement.

## SET

Configures MaxCompute system variables for the current session. MaxCompute also allows you to configure properties for projects. For more information, see [Configure project properties](/help/en/maxcompute/user-guide/project-operations#section-sja-j54-jsh).

-   Syntax
    
    ```
    SET <KEY>=<VALUE>
    ```
    
-   Parameters
    
    -   KEY: the name of the property.
        
    -   VALUE: the value of the property.
        
        For more information about how to configure properties for sessions, see [Flag parameters](/help/en/maxcompute/user-guide/flag-parameters#concept-2278178).
        
-   Example
    
    ```
    -- Set the size of data read by each Mapper to 256 MB. 
    SET odps.stage.mapper.split.size=256;
    ```
    

## SHOW FLAGS

Displays the properties that you configured by using the SET statement. Syntax:

```
SHOW flags;
```
