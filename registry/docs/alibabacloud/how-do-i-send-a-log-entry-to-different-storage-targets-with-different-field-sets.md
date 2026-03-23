This topic describes how to export a log to different storage destinations. The fields in the log vary based on the storage destination.

## **Background information**

You want to export a log to different storage destinations and the fields in the log vary based on the storage destination. In this example, the fields in a raw log are f1, f2, f3, f4, and f5.

-   When outputting to target1, remove the f1 and f2 fields. All other fields are retained.
    
-   When outputting to target2, remove fields f3 and f4, and retain all other fields.
    

## **Configuration example**

### **Raw log**

```
__time__ : 1591754815
f1: GET
f2: https
f3: aliyun
f4: 200
f5: standard
```

### **Transformation syntax**

**Note**

For more information about the data transformation functions that are used in the following example, see [Function overview](/help/en/sls/function-overview-1).

1.  Use the e\_set function to add a new field named `tag: target1, target2` to the log.
    
2.  Use the e\_split function to split the log into two logs based on the tag field. One log contains the `tag: target1` field and the other log contains the `tag: target2` field.
    
3.  Discard f1 and f2 from the log that contains the `tag: target1` field and export f3, f4, and f5 to `target1` using the `e_output` function. The subsequent transformation rules are not executed for the log that contains the `tag: target1` field.
    
4.  Discard f3 and f4 from the log that contains the `tag: target2` field.
    

```
e_set("tag", "target1, target2")
e_split("tag")
e_if(e_search("tag==target1"), e_compose(e_drop_fields("f1", "f2", regex=False), e_output("target1")))
e_drop_fields("f3", "f4", regex=False)
e_output("target2")
```

### **Export fields to target1**

```
__time__ : 1591754815
f3: aliyun
f4: 200
f5: standard
```

### **Output to target2**

```
__time__ : 1591754815
f1: GET
f2: https
f5: standard
```

## **Incorrect settings**

If you use the following processing syntax, the output to target1 meets the requirements. However, this output is directly fed into target2, causing the loss of the f1 and f2 fields from target2's logs.

```
e_drop_fields("f1", "f2", regex=False)
e_coutput("target1")
e_drop_fields("f3", "f4", regex=False)
e_output("target2")
```
