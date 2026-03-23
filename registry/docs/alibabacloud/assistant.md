Use the assistant API to create, list, retrieve, update, and delete assistants.

> **Features**: For more information about the features and basic usage of the assistant API, see [Assistant API overview](/help/en/model-studio/assistant-api/).

> **Persistence**: All assistant instances are saved on the Alibaba Cloud Model Studio server and do not have an expiration date. You can retrieve an assistant by its assistant.id.

**Note**

[Agent applications](/help/en/model-studio/single-agent-application) and assistants are both types of model applications, but they differ in features and usage.

-   Agent applications: You can create, view, update, and delete agent applications only in the console, and call them using the [Application Invocation API](/help/en/model-studio/dashscope-api-reference/).
    
-   Assistants: You can create, view, update, delete, and call assistants only using the assistant API.
    

## Create an assistant

Creates a new assistant.

## HTTP

**Code example**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/assistants' \
--header "Content-Type: application/json" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--data '{
    "model": "qwen-max",
    "name": "Intelligent assistant",
    "description": "This is an intelligent assistant",
    "instructions": "You are an intelligent assistant that can call different tools based on user query and then give responses. Please use tools when needed.",
    "tools": [
        {
            "type": "code_interpreter"
        }
    ], 
    "metadata": {}
}'
```

**Request parameters**

**Parameter name**

**Description**

**Parameter type**

**Required**

model

Model name used by the assistant.

string

Yes

name

Assistant name.

str

No

description

Assistant description.

string

No

instructions

System prompt.

str

No

tools

Tools the assistant can call.

Pass authentication for custom plugins:

```
{
 "type": "${plugin_id}",
     "auth": {  # This field is used only for user-level authentication.
         "type": "user_http",
         "user_token": "bearer-token",
         } 
 }
```

Optional\[List\[Dict\]\]

No (default: \[\])

metadata

Additional information to store.

Dict

No

temperature

Controls randomness and diversity.

float

No

top\_p

Probability threshold for nucleus sampling.

float

No

top\_k

Candidate set size for sampling.

integer

No

**Sample response**

```
{
    "id": "asst_49079f4b-d1e8-4015-a12e-2dcdd1f18d84",
    "object": "assistant",
    "created_at": 1711713885724,
    "model": "qwen-max",
    "name": "Intelligent Assistant",
    "description": "This is an intelligent assistant.",
    "instructions": "You are an intelligent assistant. You can call different tools based on user needs to provide answers. Use tools as needed.",
    "tools": [
        {
            "type": "code_interpreter"
        }
    ],
    "metadata": {},
    "temperature": null,
    "top_p": null,
    "top_k": null,
    "max_tokens": null,
    "request_id": "b1778226-3865-9006-9e95-56329a710322"
}
```

**Output parameters**

An [assistant object](#0f08c44ac39yh).

## SDK

**Code example**

Python

```
from dashscope import Assistants
import os
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
assistant = Assistants.create(
        # Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # This example uses qwen-max. You can replace it with another model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        model='qwen-max',
        name='smart helper',
        description='A tool helper.',
        instructions='You are a helpful assistant. When asked a question, use tools wherever possible.', 
        tools=[{
            'type': 'search'
        }, {
            'type': 'function',
            'function': {
                'name': 'big_add',
                'description': 'Add to number',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'left': {
                            'type': 'integer',
                            'description': 'The left operator'
                        },
                        'right': {
                            'type': 'integer',
                            'description': 'The right operator.'
                        }
                    },
                    'required': ['left', 'right']
                }
            }
        }],
)
print(assistant)
```

Java

```
import com.alibaba.dashscope.assistants.Assistant;
import com.alibaba.dashscope.assistants.AssistantParam;
import com.alibaba.dashscope.assistants.Assistants;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.InvalidateParameter;
import com.alibaba.dashscope.exception.NoApiKeyException;
import java.lang.System;
import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void main(String[] args) throws ApiException, NoApiKeyException, InputRequiredException, InvalidateParameter, InterruptedException {
        Assistants assistants = new Assistants();
        // build assistant parameters
        AssistantParam param = AssistantParam.builder()
                // This example uses qwen-max. You can replace it with another model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
                .model("qwen-max")
                .name("intelligent guide")
                .description("a smart guide")
                .instructions("You are a helpful assistant.")
                // Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .build();
        Assistant assistant = assistants.create(param);
        System.out.println(JsonUtils.toJson(assistant));
        // use assistant

    }
}
```

**Request parameters**

**Parameter**

**Type**

**Default value**

**Description**

model

_string_

\-

Model name used by the assistant.

name

_string_

\-

Assistant name

description

_string_

\-

Assistant description.

instructions

_string_

\-

Assistant features/instructions

tools

_array_

\[\]

Tools used by the assistant.

**Note**

Pass authentication information for a custom tool.

`{`

`"type": "plugin_type", "auth": {"type": "user_http","user_token": "bearer-token", }`

`}`

When the assistant requests a plugin, it adds the bearer token to the header of the plugin call in the format `{"plugin_type":{"user_token": "bearer-token"}}`.

metadata

_object_

None

Assistant metadata.

workspace

_string_

None

[Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#732535cfc959h). Required only when using a sub-workspace API key.

api\_key

_string_

None

Model Studio [API key](/help/en/model-studio/get-api-key). We recommend [configuring it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Sample response**

```
{
   "tools":[
      {
         "type":"search"
      },
      {
         "function":{
            "name":"big_add",
            "description":"Add to number",
            "parameters":{
               "type":"object",
               "properties":{
                  "left":{
                     "type":"integer",
                     "description":"The left operator"
                  },
                  "right":{
                     "type":"integer",
                     "description":"The right operator."
                  }
               },
               "required":[
                  "left",
                  "right"
               ]
            }
         },
         "type":"function"
      }
   ],
   "id":"asst_714cac72-81b2-49bf-a75d-c575b90a9398",
   "object":"assistant",
   "created_at":1726033638848,
   "model":"qwen-max",
   "name":"smart helper",
   "description":"A tool helper.",
   "instructions":"You are a helpful assistant. When asked a question, use tools wherever possible.",
   "file_ids":[
      
   ],
   "metadata":{
      
   },
   "temperature":"None",
   "top_p":"None",
   "top_k":"None",
   "max_tokens":"None",
   "request_id":"00f5962e-8d9f-92fd-9320-3173fa1525d6",
   "status_code":200
}
```

**Response parameters**

**Field**

**Type**

**Description**

status\_code

_integer_

HTTP status code. 200 = success, other values = failure.

name

_string_

Assistant name.

id

_string_

Assistant ID (UUID string).

model

_string_

Model name.

description

_string_

Assistant description.

instructions

_string_

Assistant instructions.

metadata

_object_

Assistant metadata.

tools

_array_

Tools the assistant can use.

created\_at

_integer_

Creation timestamp.

code

_string_

Error code (only on failure, Python SDK only).

message

_string_

Detailed error message (only on failure, Python SDK only).

## List assistants

Lists all assistants.

## HTTP

**Code example**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/assistants?limit=2&order=desc' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Request parameters**

**Parameter**

**Input parameters**

**Type**

**Required**

limit

Number of assistants to return

int

No

order

Sort by creation time (asc or desc).

string

No (default: `desc`)

**Sample response**

```
{
    "object": "list",
    "data": [
        {
            "id": "asst_0678aa33-43e2-4268-95e6-b0010f9f7937",
            "object": "assistant",
            "created_at": 1711435564909,
            "model": "qwen-max",
            "name": "Intelligent Assistant",
            "description": "This is an intelligent assistant.",
            "instructions": "You are an intelligent assistant. You can call different tools based on user needs to provide answers. Use tools as needed.",
            "tools": [
                {
                    "type": "search"
                },
                {
                    "type": "text_to_image"
                },
                {
                    "type": "code_interpreter"
                }
            ],
            "metadata": {}
        },
        {
            "id": "asst_7af23142-52bc-4218-aa98-dfdb1128f19c",
            "object": "assistant",
            "created_at": 1711422620443,
            "model": "qwen-max",
            "name": "helpful assistant",
            "description": "",
            "instructions": "You are a helpful assistant.",
            "tools": [
                {
                    "type": "text_to_image"
                }
            ],
            "file_ids": [],
            "metadata": {}
        }
    ],
    "first_id": "asst_0678aa33-43e2-4268-95e6-b0010f9f7937",
    "last_id": "asst_7af23142-52bc-4218-aa98-dfdb1128f19c",
    "has_more": true,
    "request_id": "bc257359-ce86-9547-98be-d804effba8d1"
}
```

**Response parameters**

Returns a list of [assistant objects](#0f08c44ac39yh).

## SDK

**Code example**

Python

```
import dashscope
from dashscope import Assistants
import os

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
assistants = Assistants.list(
    # Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    limit=1,
    order='desc'
)
```

Java

```
import com.alibaba.dashscope.assistants.Assistant;
import com.alibaba.dashscope.assistants.Assistants;
import com.alibaba.dashscope.common.GeneralListParam;
import com.alibaba.dashscope.common.ListResult;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.InvalidateParameter;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void main(String[] args) throws ApiException, NoApiKeyException, InputRequiredException, InvalidateParameter, InterruptedException {
      Assistants assistants = new Assistants();
      GeneralListParam listParam = GeneralListParam.builder()
                // Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .limit(10l)
                .build();
      ListResult<Assistant> assistant = assistants.list(listParam);
    }
}
```

**Request parameters**

**Parameter**

**Type**

**Default value**

**Description**

limit

_string_

None

Number of assistants to return (uses server default if omitted).

order

_string_

None

Sort order: \`desc\` (descending) or \`asc\` (ascending). Uses server default if omitted.

workspace

_string_

None

[Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#732535cfc959h). Required only when using a sub-workspace API key.

api\_key

_string_

None

Model Studio [API key](/help/en/model-studio/get-api-key). We recommend [configuring it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Response parameters**

**Field Name**

**Type**

**Description**

has\_more

_boolean_

Whether more data is available.

last\_id

_string_

Last assistant ID in the list.

first\_id

_string_

First assistant ID in the list.

data

_array_

List of assistant objects.

object

_string_

Data format of \`data\` field (e.g., `"list"`).

request\_id

_string_

Request ID.

status\_code

_integer_

Request status code.

## Retrieve an assistant

## HTTP

**Code example**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/assistants/asst_0678aa33-43e2-4268-95e6-b0010f9f7937' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Request parameters**

**Input Parameter Name**

**Input parameter descriptions**

**Type**

**Required**

assistant\_id

Assistant ID to retrieve.

string

Yes

**Sample response**

```
{
    "id": "asst_0678aa33-43e2-4268-95e6-b0010f9f7937",
    "object": "assistant",
    "created_at": 1711435564909,
    "model": "qwen-max",
    "name": "Intelligent Assistant",
    "description": "This is an intelligent assistant.",
    "instructions": "You are an intelligent assistant. You can call different tools based on user needs to provide answers. Use tools as needed.",
    "tools": [
        {
            "type": "search"
        },
        {
            "type": "text_to_image"
        },
        {
            "type": "code_interpreter"
        }
    ],
    "metadata": {},
    "request_id": "f0ec05b0-8813-984c-81b5-1166ae3478d1"
}
```

**Response parameters**

Returns the retrieved [assistant object](#0f08c44ac39yh).

## SDK

**Code example**

Python

```
from dashscope import Assistants
import dashscope
import os

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
assistant = Assistants.retrieve(
    assistant_id='your_assistant_id',
    # Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY")
)

print(assistant)
```

Java

```
import com.alibaba.dashscope.assistants.Assistant;
import com.alibaba.dashscope.assistants.Assistants;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.InvalidateParameter;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void main(String[] args) throws ApiException, NoApiKeyException, InputRequiredException, InvalidateParameter, InterruptedException {
      Assistants assistants = new Assistants();
      // Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
      String apiKey = System.getenv("DASHSCOPE_API_KEY");
      Assistant assistant = assistants.retrieve("assistant_id", apiKey);
    }
}
```

**Request parameters**

**Parameter**

**Type**

**Default value**

**Description**

assistant\_id

_string_

\-

Assistant ID to retrieve.

workspace

_string_

None

[Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#732535cfc959h). Required only when using a sub-workspace API key.

api\_key

_string_

None

Model Studio [API key](/help/en/model-studio/get-api-key). We recommend [configuring it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Response parameters**

For more information, see [assistant object](#1718e4e39302j).

## Update an assistant

## HTTP

**Code example**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/assistants/asst_0678aa33-43e2-4268-95e6-b0010f9f7937' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--data '{
    "instructions": "You are a search assistant",
    "name": "New Application-assistantAPI",
    "description": "",
    "model": "qwen-max"
}'
```

**Request parameters**

**Input Parameter Name**

**Description**

**Parameter Type**

**Required**

assistant\_id

Assistant ID to update.

string

Yes

\*

Other optional parameters.

string

No

model

Model name used by the assistant.

string

Yes

name

Assistant name.

string

No

description

Assistant description.

string

No

instructions

System prompt.

str

No

tools

Tools the assistant can call.

Optional\[List\[Dict\]\]

No (default: \[\])

metadata

Additional information to store.

Dict

No

**Sample response**

```
{
    "id": "asst_0678aa33-43e2-4268-95e6-b0010f9f7937",
    "object": "assistant",
    "created_at": 1711435564909,
    "model": "qwen-max",
    "name": "New Application-assistantAPI",
    "description": "",
    "instructions": "You are a search assistant.",
    "tools": [
        {
            "type": "search"
        },
        {
            "type": "text_to_image"
        },
        {
            "type": "code_interpreter"
        }
    ],
    "metadata": {},
    "request_id": "b0993831-a98b-9e71-b235-75174df9046e"
}
```

**Output parameters**

Returns the updated [assistant object](#0f08c44ac39yh).

## SDK

**Code example**

Python

```
from dashscope import Assistants
import dashscope
import os

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
assistants = Assistants.update(
    'assistant_id', 
    model='new_model_name',
    # Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY")
)
```

Java

```
import com.alibaba.dashscope.assistants.Assistant;
import com.alibaba.dashscope.assistants.AssistantParam;
import com.alibaba.dashscope.assistants.Assistants;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.InvalidateParameter;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void main(String[] args) throws ApiException, NoApiKeyException, InputRequiredException, InvalidateParameter, InterruptedException {
        Assistants assistants = new Assistants();
        AssistantParam param = AssistantParam.builder()
                .model("qwen-max")
                .name("intelligent guide")
                .description("a smart guide")
                .instructions("You are a helpful assistant. When asked a question, use tools wherever possible.")
                // Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .build();
        
        Assistant assistant = assistants.update("assistant_id", param);
    }
}
```

**Request parameters**

**Parameter**

**Type**

**Default value**

**Description**

assistant\_id

_string_

\-

Assistant ID to update.

model

_string_

\-

Model name used by the assistant.

name

_string_

None

Assistant name.

description

_string_

None

Assistant description.

instructions

_string_

None

Assistant instructions.

tools

_array_

\[\]

Tools the assistant can use.

metadata

_object_

None

Assistant metadata.

workspace

_string_

None

[Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#732535cfc959h). Required only when using a sub-workspace API key.

api\_key

_string_

None

Model Studio [API key](/help/en/model-studio/get-api-key). We recommend [configuring it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Response parameters**

For more information, see [assistant object](#0f08c44ac39yh).

## Delete an assistant

## HTTP

**Code example**

```
curl --location --request DELETE 'https://dashscope-intl.aliyuncs.com/api/v1/assistants/asst_0678aa33-43e2-4268-95e6-b0010f9f7937' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Request parameters**

**Input parameter name**

**Description**

**Parameter type**

**Required**

assistant\_id

Assistant ID to delete.

str

Yes

**Sample response**

```
{
    "id": "asst_0678aa33-43e2-4268-95e6-b0010f9f7937",
    "object": "assistant.deleted",
    "deleted": true,
    "request_id": "6af9320f-0430-9d01-b92f-d1beb6424dc5"
}
```

**Response parameters**

Deletion status.

## SDK

**Code example**

Python

```
from dashscope import Assistants
import dashscope
import os

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
assistants = Assistants.delete(
    'assistant_id',
    # Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY")
)
```

Java

```
import com.alibaba.dashscope.assistants.Assistants;
import com.alibaba.dashscope.common.DeletionStatus;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.InvalidateParameter;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void main(String[] args) throws ApiException, NoApiKeyException, InputRequiredException, InvalidateParameter, InterruptedException {
        Assistants assistants = new Assistants();     
        // Set an environment variable for your API key. If you do not set the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
        String apiKey = System.getenv("DASHSCOPE_API_KEY");
        DeletionStatus assistant = assistants.delete("assistant_id", apiKey);
    }
}
```

**Request parameters**

**Parameter**

**Type**

**Default value**

**Description**

assistant\_id

_string_

\-

Assistant ID to delete.

workspace

_string_

None

[Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#732535cfc959h). Required only when using a sub-workspace API key.

api\_key

_string_

None

Model Studio [API key](/help/en/model-studio/get-api-key). We recommend [configuring it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Response parameters**

**Field name**

**Type**

**Description**

id

_string_

Deleted object ID.

object

_string_

Object type (e.g., `"assistant.deleted"`).

deleted

_boolean_

Whether the deletion succeeded.

request\_id

_string_

Request ID.

status\_code

_integer_

Request status code.

## **Assistant object**

Represents an assistant that can call models and use tools.

**Sample assistant object**

```
{
    "id": "asst_49079f4b-d1e8-4015-a12e-2dcdd1f18d84",
    "object": "assistant",
    "created_at": 1711713885724,
    "model": "qwen-max",
    "name": "Intelligent Assistant",
    "description": "This is an intelligent assistant.",
    "instructions": "You are an intelligent assistant. You can call different tools based on user needs to provide answers. Use tools as needed.",
    "tools": [
        {
            "type": "code_interpreter"
        }
    ],
    "metadata": {},
    "temperature": null,
    "top_p": null,
    "top_k": null,
    "max_tokens": null,
    "request_id": "b1778226-3865-9006-9e95-56329a710322"
}
```

**Parameter**

**Data type**

**Description**

id

string

Assistant ID.

object

string

Object type (always `"assistant"`).

created\_at

integer

Creation timestamp (Unix, milliseconds).

model

string

Model name. See [Assistant API overview](/help/en/model-studio/assistant-api/) or [Model List](/help/en/model-studio/models) for available models.

name

string

Assistant name.

description

string

Assistant description.

instructions

string

Assistant instructions.

tools

array

Tools enabled for the assistant (official plugins, RAG, or function calling).

metadata

dict

Additional structured information about the assistant.

temperature

float

Sampling temperature (0-2). Higher values (e.g., 1.0) = more random; lower values (e.g., 0.2) = more deterministic.

top\_p

float

Nucleus sampling: considers tokens with cumulative probability mass of \`top\_p\` (e.g., 0.1 = top 10%). Adjust either this or `temperature`, not both.

top\_k

integer

Samples from top \`k\` tokens by probability. Do not adjust with `temperature` or `top_p`.

max\_tokens

integer

Maximum tokens per response.

request\_id

string

API call identifier.

## **Error codes**

See [Error messages](/help/en/model-studio/error-code) for failed calls.
