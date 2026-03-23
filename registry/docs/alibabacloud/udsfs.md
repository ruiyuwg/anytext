This topic describes how to develop, register, and use a Flink user-defined scalar function (UDSF).

## Definition

A user-defined scalar function (UDSF) maps zero, one, or more scalar values to a new scalar value. This creates a one-to-one relationship where the function processes one row of data and returns a single output value. For more information, see [User-defined Functions](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/functions/udfs/).

## Develop a UDSF

**Note**

Flink provides user-defined function (UDF) examples to help you quickly develop services. The examples include implementations for UDSFs, user-defined aggregate functions (UDAFs), and user-defined table-valued functions (UDTFs). The development environment is pre-configured in the examples, so no setup is required.

1.  Download and decompress the [ASI\_UDX\_Demo](https://github.com/RealtimeCompute/ASI_UDX) example to your local machine.
    
    **Note**
    
    [ASI\_UDX\_Demo](https://github.com/RealtimeCompute/ASI_UDX) is hosted on a third-party website. You may experience access failures or delays.
    
    After decompression, the ASI\_UDX-main folder is created. The folder contains:
    
    -   pom.xml: A project-level configuration file. It describes the project's Maven coordinate, dependencies, rules for developers, bug tracking system, organization, licenses, and all other project-related factors.
        
    -   \\ASI\_UDX-main\\src\\main\\java\\ASI\_UDF\\ASI\_UDF.java: The sample Java code for the UDSF.
        
    
2.  In IntelliJ IDEA, click **File** > **Open**, and select the decompressed ASI\_UDX-main folder.
    
3.  Double-click the \\ASI\_UDX-main\\src\\main\\java\\ASI\_UDF folder. Configure the ASI\_UDF.java file as needed.
    
    In this example, the ASI\_UDF.java file is configured with code that extracts the characters from the \`begin\` position to the \`end\` position of each input string.
    
    ```
    package ASI_UDF;
    
    import org.apache.flink.table.functions.ScalarFunction;
    
    public class ASI_UDF extends ScalarFunction {
        public String eval(String s, Integer begin, Integer end) {
            return s.substring(begin, end);
        }
    }
    ```
    
4.  Double-click the \\ASI\_UDX-main\\ folder. Configure the pom.xml file.
    
    In this example, the pom.xml file is configured with the main JAR package dependencies for Flink version 1.11. Based on your service requirements:
    
    -   If your service does not depend on other JAR packages, you do not need to configure the pom.xml file. Proceed to the next step.
        
    -   If your service depends on other JAR packages, add the required dependency information to the pom.xml file.
        
    
    The main JAR package dependencies for Flink version 1.11 are as follows.
    
    ```
    <dependencies>
            <dependency>
                <groupId>org.apache.flink</groupId>
                <artifactId>flink-streaming-java_2.12</artifactId>
                <version>1.11.0</version>
                <!--<scope>provided</scope>-->
            </dependency>
            <dependency>
                <groupId>org.apache.flink</groupId>
                <artifactId>flink-table</artifactId>
                <version>1.11.0</version>
                <type>pom</type>
                <!--<scope>provided</scope>-->
            </dependency>
            <dependency>
                <groupId>org.apache.flink</groupId>
                <artifactId>flink-core</artifactId>
                <version>1.11.0</version>
            </dependency>
            <dependency>
                <groupId>org.apache.flink</groupId>
                <artifactId>flink-table-common</artifactId>
                <version>1.11.0</version>
            </dependency>
        </dependencies>
    ```
    
5.  In the directory that contains the pom.xml file, run the following command to package the project.
    
    ```
    mvn package -Dcheckstyle.skip
    ```
    
    The ASI\_UDX-1.0-SNAPSHOT.jar package is created in the \\ASI\_UDX-main\\target\\ directory. This indicates that the UDSF development is complete.
    

## Register a UDSF

For more information about how to register a UDSF, see [Manage user-defined functions (UDFs)](/help/en/flink/realtime-flink/user-guide/manage-udfs#task-2568039).

## Use a UDSF

After you register the UDSF, you can use it. The procedure is as follows.

1.  Develop a Flink SQL job. For more information, see [Job development map](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft#task-2046613).
    
    The following sample code extracts the characters from the second to the fourth position of the string in the \`a\` field of the \`ASI\_UDSF\_Source\` table.
    
    ```
    CREATE TEMPORARY TABLE ASI_UDSF_Source (
      a VARCHAR,
      b INT,
      c INT
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE ASI_UDSF_Sink (
      a VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO ASI_UDSF_Sink
    SELECT ASI_UDSF(a,2,4)
    FROM ASI_UDSF_Source;
    ```
    
2.  On the **Operation Center** > **Job O&M** page, find the target job and click **Start** in the **Actions** column.
    
    After the job starts, the characters from the second to the fourth position of the string in the \`a\` field of each row in the \`ASI\_UDSF\_Source\` table are inserted into the \`ASI\_UDSF\_Sink\` table.
