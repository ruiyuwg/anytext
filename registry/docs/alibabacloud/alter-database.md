The ALTER DATABASE statement modifies a database. This topic describes how to use this statement.

## Syntax

```
ALTER DATABASE <dbname> SET configuration_parameter { TO | = } { value | DEFAULT }
ALTER DATABASE <dbname> SET configuration_parameter FROM CURRENT
ALTER DATABASE <dbname> RESET configuration_parameter
ALTER DATABASE <dbname> RESET ALL
```

The following table describes the parameters.

**Parameter**

**Description**

configuration\_parameter

A Hologres configuration parameter.

value

The new value for the configuration parameter.

DEFAULT

Sets the configuration parameter to its default value.

RESET

Resets the specified configuration parameter.

RESET ALL

Resets all configuration parameters for the database.

SET FROM CURRENT

Sets the configuration parameter to the value from the current session.

## Examples

The following SQL statements set the time zone to GMT+8:00, which is the time zone for Beijing.

-   Method 1: The setting applies only to the current session.
    
    ```
    SET timezone='GMT+8:00';
    ```
    
-   Method 2: The setting applies at the database level.
    
    ```
    ALTER DATABASE postgres SET timezone='GMT+8:00';
    ```
