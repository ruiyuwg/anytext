This topic describes the exception types of Alibaba Cloud Darabonba SDK for Go and how to handle these exceptions.

Exceptions that may occur when you use Alibaba Cloud Darabonba SDK for Go are classified into the following types:

-   error: This type of exception is caused by non-business errors. For example, if the verification fails because the SDK source file is modified, or the parsing fails, this type of exception is thrown.
    
-   SDKError: This type of exception is caused by business errors. The following three parameters are provided to handle this type of exception:
    
    -   Code: the error code that is returned when the exception occurs.
        
    -   Message: the error message that is returned when the exception occurs. The message contains the ID of the API request for which the exception is thrown.
        
    -   Data: the detailed error information that is returned by the server for the exception.
        

**Important**

Make sure that the SDK that you use is of the latest version.

github.com/alibabacloud-go/darabonba-openapi/v2

github.com/alibabacloud-go/tea-utils/v2

github.com/alibabacloud-go/tea

github.com/alibabacloud-go/vpc-20160428/v6

```
package main

import (
    "fmt"
    openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
    ecs20160428 "github.com/alibabacloud-go/ecs-20140526/v4/client"
    util "github.com/alibabacloud-go/tea-utils/v2/service"
    "github.com/alibabacloud-go/tea/tea"
    "os"
)

/**
 * Use your AccessKey ID and AccessKey secret to initialize the client.
 * @param accessKeyId
 * @param accessKeySecret
 * @return Client
 * @throws Exception
 */
func createClient() (_result *ecs20160428.Client, _err error) {
    config := &openapi.Config{
       // Required. Make sure that the following environment variable is set in the code runtime environment: ALIBABA_CLOUD_ACCESS_KEY_ID. 
       AccessKeyId: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),
       // Required. Make sure that the following environment variable is set in the code runtime environment: ALIBABA_CLOUD_ACCESS_KEY_SECRET. 
       AccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),
    }
    config.RegionId = tea.String("<regionId>")
    _result = &ecs20160428.Client{}
    _result, _err = ecs20160428.NewClient(config)
    return _result, _err
}

func main() {
    client, _err := createClient()
    if _err != nil {
       fmt.Printf("Error creating client: %v\n", _err)
       return
    }
    describeRegionsRequest := &ecs20160428.DescribeRegionsRequest{}
    resp, tryErr := func() (_result *ecs20160428.DescribeRegionsResponse, _e error) {
       defer func() {
          if r := tea.Recover(recover()); r != nil {
             _e = r
          }
       }()
       _result, _err = client.DescribeRegionsWithOptions(describeRegionsRequest, &util.RuntimeOptions{})
       if _err != nil {
          return nil, _err
       }
       return _result, nil
    }()

    if tryErr != nil {
       if sdkError, ok := tryErr.(*tea.SDKError); ok { // Determine whether the type of the tryErr error is *tea.SDKError based on the error description.
          fmt.Println(tea.StringValue(sdkError.Message))
          fmt.Println(tea.StringValue(sdkError.Code))
          fmt.Println(tea.StringValue(sdkError.Data))
       } else {
          fmt.Println(tea.String(tryErr.Error()))
       }
    } else {
       fmt.Println(resp.Body)
    }
}
```
