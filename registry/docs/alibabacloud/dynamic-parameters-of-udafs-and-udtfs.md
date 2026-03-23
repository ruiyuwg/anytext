This topic describes the dynamic parameters that are supported by MaxCompute user-defined aggregate functions (UDAFs) and user-defined table-valued functions (UDTFs) when the Resolve annotation is used.

## Extension of Resolve annotation syntax

Both MaxCompute UDAFs and UDTFs use the Resolve annotation to generate the signature of a function. However, this method cannot be overloaded, because the input and output parameters are fixed.

```
@com.aliyun.odps.udf.annotation.Resolve("BIGINT->DOUBLE")
public class UDTFClass extends UDTF {
    ...
}
```

**Note** This example defines a UDTF that accepts parameters of the BIGINT type and returns values of the DOUBLE type.

The syntax of the Resolve annotation in MaxCompute is extended.

-   You can use an asterisk (`*`) in a parameter list to indicate that an input parameter can be of any length and type. For example, `@Resolve('double,*->String')` indicates a parameter list in which the first parameter is of the DOUBLE data type, followed by parameters of any length and type. In this case, you must compile code to calculate the number and types of input parameters, and manage them based on the `printf` function in the C programming language.
    
    **Note** Asterisks (\*) in return values indicate different meanings.
    
-   You can use `any` in a parameter list to indicate that parameters of all types are valid. For example, `@Resolve('double,any->string')` indicates a parameter list in which the first parameter is of the DOUBLE data type and is followed by parameters of any type.
    
    **Note** `any` cannot be used in return values or subtypes of complex data types, such as ARRAY.
    
-   Asterisks can be used in return values of UDTFs to indicate that any number of values of the STRING data type can be returned. The number of return values is based on the number of aliases that are configured when a function is called. For example, the call method of `@Resolve("ANY,ANY->DOUBLE,*")` is `UDTF(x, y) as (a, b, c)`. In this example, three aliases a, b, and c are configured for `as`. The editor identifies that a is of the DOUBLE data type and b and c are of the STRING data type. The type of values in the first column returned in the Resolve annotation is given. Three values are returned. Therefore, the `forward` method called by a UDTF must `forward` an array of three elements. Otherwise, an error is returned.
    
    **Note** However, the error is not returned during compilation. Therefore, the UDTF caller must configure the number of aliases in SQL based on the rule that is defined in the UDTF. The number of return values of an aggregate function is fixed to 1. Therefore, this rule has no effect on UDAFs.
    

## UDTF examples

```
import com.aliyun.odps.udf.UDFException;
import com.aliyun.odps.udf.UDTF;
import com.aliyun.odps.udf.annotation.Resolve;
import org.json.JSONException;
import org.json.JSONObject;
@Resolve("STRING,*->STRING,*")
public class JsonTuple extends UDTF {
  private Object[] result = null;
  @Override
  public void process(Object[] input) throws UDFException {
    if (result == null) {
      result = new Object[input.length];
    }
    try {
      JSONObject obj = new JSONObject((String)input[0]);
      for (int i = 1; i < input.length; i++) {
        // The variable-length part of a return value must be of the STRING data type. 
        result[i] = String.valueOf(obj.get((String)(input[i])));
      }
      result[0] = null;
    } catch (JSONException ex) {
      for (int i = 1; i < result.length; i++) {
        result[i] = null;
      }
      result[0] = ex.getMessage();
    }
    forward(result);
  }
}
```

In this example, the number of return values is based on the number of input parameters. The first output parameter indicates a JSON file, and the other output parameters are the keys parsed from the JSON file. The first return value is an error message during the parsing of the JSON file. If no error occurs, the content that is generated during the parsing of the JSON file is provided based on the sequence of input keys. Example:

```
-- Configure the number of output aliases based on that of input parameters. 
SELECT my_json_tuple(json, 'a', 'b') as exceptions, a, b FROM jsons;

-- The variable-length part can have no columns. 
SELECT my_json_tuple(json) as exceptions, a, b FROM jsons;

-- An error occurs when the following SQL statement is executed because the number of aliases does not match the actual number. 
-- This error is not returned during compilation. 
SELECT my_json_tuple(json, 'a', 'b') as exceptions, a, b, c FROM jsons;
```

If the extensions described in this topic do not meet your business requirements, we recommend that you use UDTs to implement the features of aggregate functions and UDTFs. For more information, see [Overview](/help/en/maxcompute/user-guide/overview-4#concept-drb-xk4-hfb).

**Note** For more information about Python UDTFs and Python UDAFs, see [Python 3 UDAF](/help/en/maxcompute/user-guide/python-3-udaf#concept-2117804) and [Use a Python 3 UDTF to read resources from MaxCompute](/help/en/maxcompute/user-guide/use-a-python-3-udtf-to-read-resources-from-maxcompute#task-2116776).
