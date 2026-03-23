This topic describes an example of using resources in MapReduce to help you allocate and manage computing resources more efficiently during big data processing, enhancing task execution performance.

## Prerequisites

Complete the environment configuration for testing, see [Getting started](/help/en/maxcompute/user-guide/getting-started-1).

## Preparations

1.  Prepare the JAR package of the test program. In this topic, the JAR package is named mapreduce-examples.jar and stored in the bin\\data\\resources directory in the local installation path of MaxCompute.
    
2.  On the MaxCompute client, perform the following operations to prepare test tables and resources:
    
    1.  Create test tables.
        
        ```
        CREATE TABLE mr_upload_src(key BIGINT, value STRING);
        ```
        
    2.  Add test resources.
        
        ```
        add file data\resources\import.txt -f;
        
        -- When adding the JAR package for the first time, you can ignore the -f flag.
        add jar data\resources\mapreduce-examples.jar -f;
        ```
        
        The import.txt file contains the following content:
        
        ```
        1000,odps
        ```
        

## Procedure

Run the following code on the MaxCompute client to upload the data in the test resources to the mr\_upload\_src table:

```
jar -resources mapreduce-examples.jar,import.txt -classpath data\resources\mapreduce-examples.jar
com.aliyun.odps.mapred.open.example.Upload import.txt mr_upload_src;
```

## Expected result

The job runs normally. The following data is returned in the mr\_upload\_src table:

```
+------------+------------+
| key        | value      |
+------------+------------+
| 1000       | odps       |
+------------+------------+
```

## Sample code

For information about Project Object Model (POM) dependencies, see [Precautions](/help/en/maxcompute/user-guide/getting-started-1#section-acf-luy-1fo).

Sample code:

```
package com.aliyun.odps.mapred.open.example;
import java.io.BufferedInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import com.aliyun.odps.data.Record;
import com.aliyun.odps.data.TableInfo;
import com.aliyun.odps.mapred.JobClient;
import com.aliyun.odps.mapred.MapperBase;
import com.aliyun.odps.mapred.TaskContext;
import com.aliyun.odps.mapred.conf.JobConf;
import com.aliyun.odps.mapred.utils.InputUtils;
import com.aliyun.odps.mapred.utils.OutputUtils;
import com.aliyun.odps.mapred.utils.SchemaUtils;
     /**
     * Upload
     * Import data from text file into table
     **/
public class Upload {
    public static class UploadMapper extends MapperBase {
        @Override
            public void setup(TaskContext context) throws IOException {
            Record record = context.createOutputRecord();
            StringBuilder importdata = new StringBuilder();
            BufferedInputStream bufferedInput = null;
            try {
                byte[] buffer = new byte[1024];
                int bytesRead = 0;
                String filename = context.getJobConf().get("import.filename");
                bufferedInput = context.readResourceFileAsStream(filename);
                while ((bytesRead = bufferedInput.read(buffer)) != -1) {
                    String chunk = new String(buffer, 0, bytesRead);
                    importdata.append(chunk);
                }
                String lines[] = importdata.toString().split("\n");
                for (int i = 0; i < lines.length; i++) {
                    String[] ss = lines[i].split(",");
                    record.set(0, Long.parseLong(ss[0].trim()));
                    record.set(1, ss[1].trim());
                    context.write(record);
                }
            } catch (FileNotFoundException ex) {
                throw new IOException(ex);
            } catch (IOException ex) {
                throw new IOException(ex);
            } finally {
            }
        }
        @Override
            public void map(long recordNum, Record record, TaskContext context)
            throws IOException {
        }
    }
    public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.err.println("Usage: Upload <import_txt> <out_table>");
            System.exit(2);
        }
        JobConf job = new JobConf();
        job.setMapperClass(UploadMapper.class);
        /** Specify the resource name, which can be obtained in the map stage by using the JobConf interface. */
        job.set("import.filename", args[0]);
        /** Explicitly set the number of reducers to 0 for map-only jobs. */
        job.setNumReduceTasks(0);
        job.setMapOutputKeySchema(SchemaUtils.fromString("key:bigint"));
        job.setMapOutputValueSchema(SchemaUtils.fromString("value:string"));
        InputUtils.addTable(TableInfo.builder().tableName("mr_empty").build(), job);
        OutputUtils.addTable(TableInfo.builder().tableName(args[1]).build(), job);
        JobClient.runJob(job);
    }
}
```

You can use one of the following methods to set the JobConf configuration file:

-   Use the JobConf interface in the SDK. This method is used in the preceding example.
    
-   Use the \-conf parameter in a jar command to specify a new JobConf configuration file.
