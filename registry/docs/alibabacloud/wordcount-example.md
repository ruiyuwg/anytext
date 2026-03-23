This topic describes an example of running WordCount in MapReduce.

## Prerequisites

Complete the environment configuration for testing, see [Getting started](/help/en/maxcompute/user-guide/getting-started-1).

## Preparations

1.  Prepare the JAR package of the test program. In this topic, the JAR package is named mapreduce-examples.jar and stored in the bin\\data\\resources directory in the local installation path of MaxCompute.
    
    1.  Create test tables.
        
        ```
        CREATE TABLE wc_in (key STRING, value STRING);
        CREATE TABLE wc_out (key STRING, cnt BIGINT);
        ```
        
    2.  Add test resources.
        
        ```
        -- When adding the JAR package for the first time, you can ignore the -f flag.
        add jar data\resources\mapreduce-examples.jar -f;
        ```
        
2.  Use Tunnel to import the `data.txt` file from the bin directory of the MaxCompute client into the `wc_in` table.
    
    ```
    tunnel upload data.txt wc_in;
    ```
    
    The following data is imported to the wc\_in table:
    
    ```
    hello,odps
    ```
    

## Procedure

Run WordCount on the MaxCompute client.

```
jar -resources mapreduce-examples.jar -classpath data\resources\mapreduce-examples.jar
com.aliyun.odps.mapred.open.example.WordCount wc_in wc_out
```

## Expected result

The job runs normally. The following data is returned in the wc\_out table:

```
+------------+------------+
| key        | cnt        |
+------------+------------+
| hello      | 1          |
| odps       | 1          |
+------------+------------+
```

## Sample code

For information about Project Object Model (POM) dependencies, see [Precautions](/help/en/maxcompute/user-guide/getting-started-1#section-acf-luy-1fo).

```
package com.aliyun.odps.mapred.open.example;
import java.io.IOException;
import java.util.Iterator;
import com.aliyun.odps.data.Record;
import com.aliyun.odps.data.TableInfo;
import com.aliyun.odps.mapred.JobClient;
import com.aliyun.odps.mapred.MapperBase;
import com.aliyun.odps.mapred.ReducerBase;
import com.aliyun.odps.mapred.conf.JobConf;
import com.aliyun.odps.mapred.utils.InputUtils;
import com.aliyun.odps.mapred.utils.OutputUtils;
import com.aliyun.odps.mapred.utils.SchemaUtils;
public class WordCount {
    public static class TokenizerMapper extends MapperBase {
        private Record word;
        private Record one;
        @Override
            public void setup(TaskContext context) throws IOException {
            word = context.createMapOutputKeyRecord();
            one = context.createMapOutputValueRecord();
            one.set(new Object[] { 1L });
            System.out.println("TaskID:" + context.getTaskID().toString());
        }
        @Override
            public void map(long recordNum, Record record, TaskContext context)
            throws IOException {
            for (int i = 0; i < record.getColumnCount(); i++) {
                word.set(new Object[] { record.get(i).toString() });
                context.write(word, one);
            }
        }
    }
    /**
       * A combiner class that combines map output by sum them.
       **/
    public static class SumCombiner extends ReducerBase {
        private Record count;
        @Override
            public void setup(TaskContext context) throws IOException {
            count = context.createMapOutputValueRecord();
        }
        /** The combiner implements the same interface as that of the reducer. The combiner allows you to immediately run a local reduce job on the mapper to reduce the output of the mapper. */
        @Override
            public void reduce(Record key, Iterator<Record> values, TaskContext context)
            throws IOException {
            long c = 0;
            while (values.hasNext()) {
                Record val = values.next();
                c += (Long) val.get(0);
            }
            count.set(0, c);
            context.write(key, count);
        }
    }
    /**
       * A reducer class that just emits the sum of the input values.
       **/
    public static class SumReducer extends ReducerBase {
        private Record result = null;
        @Override
            public void setup(TaskContext context) throws IOException {
            result = context.createOutputRecord();
        }
        @Override
            public void reduce(Record key, Iterator<Record> values, TaskContext context)
            throws IOException {
            long count = 0;
            while (values.hasNext()) {
                Record val = values.next();
                count += (Long) val.get(0);
            }
            result.set(0, key.get(0));
            result.set(1, count);
            context.write(result);
        }
    }
    public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.err.println("Usage: WordCount <in_table> <out_table>");
            System.exit(2);
        }
        JobConf job = new JobConf();
        job.setMapperClass(TokenizerMapper.class);
        job.setCombinerClass(SumCombiner.class);
        job.setReducerClass(SumReducer.class);
        /** Configure the schema that defines the intermediate output of the mapper as key-value pairs. The intermediate output of the mapper exists as records. */
        job.setMapOutputKeySchema(SchemaUtils.fromString("word:string"));
        job.setMapOutputValueSchema(SchemaUtils.fromString("count:bigint"));
        /** Configure information about input and output tables. */
        InputUtils.addTable(TableInfo.builder().tableName(args[0]).build(), job);
        OutputUtils.addTable(TableInfo.builder().tableName(args[1]).build(), job);
        JobClient.runJob(job);
    }
}
```
