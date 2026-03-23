This topic provides pipeline examples of MapReduce to help you understand how to achieve efficient data processing and analysis through pipelines.

## Prerequisites

Complete the environment configuration for testing, see [Getting started](/help/en/maxcompute/user-guide/getting-started-1).

## Preparations

1.  Prepare the JAR package of the test program. In this example, the JAR package is named mapreduce-examples.jar and stored in the bin\\data\\resources directory in the local installation path of MaxCompute.
    
2.  Prepare test tables and resources.
    
    1.  Create tables.
        
        ```
        CREATE TABLE wc_in (key STRING, value STRING);
        CREATE TABLE wc_out(key STRING, cnt BIGINT);
        ```
        
    2.  Add resources.
        
        ```
        -- When adding the JAR package for the first time, you can ignore the -f flag.
        add jar data\resources\mapreduce-examples.jar -f;
        ```
        
3.  Use a [Tunnel command](/help/en/maxcompute/user-guide/tunnel-commands) to import the `data.txt` file from the bin directory of the MaxCompute client into the `wc_in` table.
    
    ```
    tunnel upload data.txt wc_in;
    ```
    
    The following content in the data.txt file is imported to the wc\_in table:
    
    ```
    hello,odps
    ```
    

## Procedure

Run a WordCount pipeline on the MaxCompute client.

```
jar -resources mapreduce-examples.jar -classpath data\resources\mapreduce-examples.jar
com.aliyun.odps.mapred.open.example.WordCountPipeline wc_in wc_out;
```

## Expected results

If the job succeeds, the following result is returned:

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

The following is a Java code example that demonstrates how to perform word frequency statistics using MapReduce and a pipeline:

```
package com.aliyun.odps.mapred.open.example;
import java.io.IOException;
import java.util.Iterator;
import com.aliyun.odps.Column;
import com.aliyun.odps.OdpsException;
import com.aliyun.odps.OdpsType;
import com.aliyun.odps.data.Record;
import com.aliyun.odps.data.TableInfo;
import com.aliyun.odps.mapred.Job;
import com.aliyun.odps.mapred.MapperBase;
import com.aliyun.odps.mapred.ReducerBase;
import com.aliyun.odps.pipeline.Pipeline;
public class WordCountPipelineTest {
    public static class TokenizerMapper extends MapperBase {
        Record word;
        Record one;
        @Override
            public void setup(TaskContext context) throws IOException {
            word = context.createMapOutputKeyRecord();
            one = context.createMapOutputValueRecord();
            one.setBigint(0, 1L);
        }
        @Override
            public void map(long recordNum, Record record, TaskContext context)
            throws IOException {
            for (int i = 0; i < record.getColumnCount(); i++) {
                String[] words = record.get(i).toString().split("\\s+");
                for (String w : words) {
                    word.setString(0, w);
                    context.write(word, one);
                }
            }
        }
    }
    public static class SumReducer extends ReducerBase {
        private Record value;
        @Override
            public void setup(TaskContext context) throws IOException {
            value = context.createOutputValueRecord();
        }
        @Override
            public void reduce(Record key, Iterator<Record> values, TaskContext context)
            throws IOException {
            long count = 0;
            while (values.hasNext()) {
                Record val = values.next();
                count += (Long) val.get(0);
            }
            value.set(0, count);
            context.write(key, value);
        }
    }
    public static class IdentityReducer extends ReducerBase {
        private Record result;
        @Override
            public void setup(TaskContext context) throws IOException {
            result = context.createOutputRecord();
        }
        @Override
            public void reduce(Record key, Iterator<Record> values, TaskContext context)
            throws IOException {
            while (values.hasNext()) {
                result.set(0, key.get(0));
                result.set(1, values.next().get(0));
                context.write(result);
            }
        }
    }
    public static void main(String[] args) throws OdpsException {
        if (args.length != 2) {
            System.err.println("Usage: WordCountPipeline <in_table> <out_table>");
            System.exit(2);
        }
        Job job = new Job();
        /** During pipeline construction, if you do not specify OutputKeySortColumns, PartitionColumns, and OutputGroupingColumns for a mapper, the framework uses OutputKey of the mapper as the default values of these parameters.
         */
        Pipeline pipeline = Pipeline.builder()
            .addMapper(TokenizerMapper.class)
            .setOutputKeySchema(
            new Column[] { new Column("word", OdpsType.STRING) })
            .setOutputValueSchema(
            new Column[] { new Column("count", OdpsType.BIGINT) })
            .setOutputKeySortColumns(new String[] { "word" })
            .setPartitionColumns(new String[] { "word" })
            .setOutputGroupingColumns(new String[] { "word" })
            .addReducer(SumReducer.class)
            .setOutputKeySchema(
            new Column[] { new Column("word", OdpsType.STRING) })
            .setOutputValueSchema(
            new Column[] { new Column("count", OdpsType.BIGINT)})
            .addReducer(IdentityReducer.class).createPipeline();
        /** Add the pipeline to jobconf. If you want to configure a combiner, use jobconf. */
        job.setPipeline(pipeline);
        /** Configure the input and output tables. */
        job.addInput(TableInfo.builder().tableName(args[0]).build());
        job.addOutput(TableInfo.builder().tableName(args[1]).build());
        /**Submit the job and wait for the job to complete. */
        job.submit();
        job.waitForCompletion();
        System.exit(job.isSuccessful() == true ? 0 : 1);
    }
}
```
