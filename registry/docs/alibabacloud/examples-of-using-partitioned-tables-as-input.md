This topic provides examples on how to use partitioned tables as the input of a MapReduce job.

-   Example 1:
    
    ```
    public static void main(String[] args) throws Exception {
        JobConf job = new JobConf();
        ...
            LinkedHashMap<String, String> input = new LinkedHashMap<String, String>();
        input.put("pt", "123456");
        InputUtils.addTable(TableInfo.builder().tableName("input_table").partSpec(input).build(), job);
        LinkedHashMap<String, String> output = new LinkedHashMap<String, String>();
        output.put("ds", "654321");
        OutputUtils.addTable(TableInfo.builder().tableName("output_table").partSpec(output).build(), job);
        JobClient.runJob(job);
    }
    ```
    
-   Example 2:
    
    ```
    package com.aliyun.odps.mapred.open.example;
    ...
        public static void main(String[] args) throws Exception {
        if (args.length != 2) {
            System.err.println("Usage: WordCount <in_table> <out_table>");
            System.exit(2);
        }
        JobConf job = new JobConf();
        job.setMapperClass(TokenizerMapper.class);
        job.setCombinerClass(SumCombiner.class);
        job.setReducerClass(SumReducer.class);
        job.setMapOutputKeySchema(SchemaUtils.fromString("word:string"));
        job.setMapOutputValueSchema(SchemaUtils.fromString("count:bigint"));
        // The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the Resource Access Management (RAM) console.
        // In this example, the AccessKey ID and AccessKey secret are configured as environment variables. You can also save your AccessKey pair in the configuration file based on your business requirements.
        // We recommend that you do not directly specify the AccessKey ID and AccessKey secret in code to prevent AccessKey pair leaks.
        Account account = new AliyunAccount(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        Odps odps = new Odps(account);
        odps.setEndpoint("odps_endpoint_url");
        odps.setDefaultProject("my_project");
        Table table = odps.tables().get(tblname);
        TableInfoBuilder builder = TableInfo.builder().tableName(tblname);
        for (Partition p : table.getPartitions()) {
            if (applicable(p)) {
                LinkedHashMap<String, String> partSpec = new LinkedHashMap<String, String>();
                for (String key : p.getPartitionSpec().keys()) {
                    partSpec.put(key, p.getPartitionSpec().get(key));
                }
                InputUtils.addTable(builder.partSpec(partSpec).build(), job);
            }
        }
        OutputUtils.addTable(TableInfo.builder().tableName(args[1]).build(), job);
        JobClient.runJob(job);
    }
    ```
    

**Note**

-   In example 2, the MaxCompute SDK and MapReduce SDK are combined to implement a MapReduce task that reads data from specific partitions.
    
-   The preceding code cannot be compiled for execution. It is only an example of the main function.
    
-   The applicable function is the custom code logic that determines whether the partition can be used as the input of a MapReduce job.
