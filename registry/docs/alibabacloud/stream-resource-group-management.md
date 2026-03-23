The stream engine supports isolation for multiple resource groups. You can use SQL statements to view and select resource groups.

## **Display all resource groups**

### **Syntax**

```
SHOW RESOURCE GROUPS;
```

### **Example**

```
SHOW RESOURCE GROUPS;
```

If only one resource group named `test` exists, the expected output is as follows:

```
+---------------------+
| RESOURCE GROUP NAME |
+---------------------+
| test                |
+---------------------+
```

## **Switch the current resource group**

You can use the SET statement to set the current resource group. The setting takes effect immediately.

**Note**

-   If you do not set a resource group, the system randomly selects one from the existing resource groups. We recommend that you set a specific resource group in advance.
    
-   The resource group setting only affects subsequent access from the current client.
    

### **Syntax**

```
SET `RESOURCE.GROUP` = resource_group_name;
```

### **Parameters**

**Parameter**

**Type**

**Description**

resource\_group\_name

STRING

The name of the target resource group.

### **Example**

Set the current resource group to `prod`.

```
SET `RESOURCE.GROUP` = 'prod';
```
