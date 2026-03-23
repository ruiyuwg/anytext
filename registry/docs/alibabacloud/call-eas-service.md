BladeLLM server provides interfaces compatible with `OpenAI /v1/completions` and `/v1/chat/completions`, allowing clients to invoke services by sending HTTP POST requests to the `/v1/completions` or `/v1/chat/completions` paths. This topic describes the configurable parameters when calling the service and the parameters in the returned results.

## **Completions interface**

### **Call example**

## Command line

```
# Call EAS service
# Replace <Your EAS Token> with the service Token; replace <service_url> with the service endpoint.
curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: <Your EAS Token>" \
    -d '{"prompt":"hello world", "stream":"true"}' \
    <service_url>/v1/completions
```

## Python

```
# Python script
import json
import requests
from typing import Dict, List

#  <service_url>: Replace with the service endpoint.
url = "<service_url>/v1/completions"
prompt = "hello world"
req = {
    "prompt": prompt,
    "stream": True,
    "temperature": 0.0,
    "top_p": 0.5,
    "top_k": 10,
    "max_tokens": 300,
}
response = requests.post(
    url,
    json=req,
    # <Your EAS Token>: Replace with the service Token.
    headers={"Content-Type": "application/json", "Authorization": "<Your EAS Token>"},
    stream=True,
)
for chunk in response.iter_lines(chunk_size=8192, decode_unicode=False):
    msg = chunk.decode("utf-8")
    if msg.startswith('data'):
        info = msg[6:]
        if info == '[DONE]':
            break
        else:
            resp = json.loads(info)
            print(resp['choices'][0]['text'], end='', flush=True)
```

### **Request parameter configuration description**

**Parameter**

**Required**

**Type**

**Default value**

**Description**

model

No

string

None

Model name, used to specify the LoRA name.

prompt

Yes

string

None

Input prompt.

max\_tokens

No

integer

16

Maximum number of tokens to generate in the request.

echo

No

boolean

False

Whether to return the prompt with the generated result.

seed

No

integer

None

The random seed.

stream

No

boolean

False

Whether to obtain the returned results in a streaming manner.

temperature

No

number

1.0

Controls the randomness and diversity of the generated text. Value range \[0,1.0\].

top\_p

No

number

1.0

From all possible tokens predicted by the model, select the most likely tokens whose probability sum reaches top\_p. Value range \[0,1.0\].

top\_k

No

integer

\-1

Keep the top\_k tokens with the highest probability.

repetition\_penalty

No

number

1.0

An important parameter for controlling the diversity of generated text.

-   \>1.0: Reduces the likelihood of repeated words or phrases.
    
-   <1.0: Increases the likelihood of repeated words or phrases.
    
-   \=1.0: No additional penalty or reward for repetition.
    

presence\_penalty

No

number

0.0

Used to control vocabulary diversity in generated text.

-   \>0: Words that have already appeared in the generated text will have a lower probability of being selected as the next word.
    
-   <0: Increases the likelihood of these words being reused.
    
-   \=0: The model will select the next word according to the original probability distribution.
    

frequency\_penalty

No

number

0.0

Used to control the degree of penalty for the frequency of repeated use of words that have already appeared when generating text.

-   \>0: Words that have appeared multiple times will have a lower probability of being selected.
    
-   <0: Increases the likelihood of these words being repeatedly selected.
    
-   \=0: The model will select the next word according to the original probability distribution.
    

stop (stop\_sequences)

No

\[string\]

None

Used to prompt the model to stop generating when specific text is encountered during text generation. For example \["</s>"\]

stop\_tokens

No

\[int\]

None

Used to prompt the model to stop generating when specific Token IDs are encountered during text generation.

ignore\_eos

No

boolean

False

Ignore the end marker when generating text.

logprobs

No

integer

None

Return the probability distribution of each possible output token during text generation.

response\_format

No

string

None

Used to specify the output format:

-   json\_object: Output JSON object.
    
-   text: Output text.
    

guided\_regex

No

string

None

Regular expression used to guide decoding.

guided\_json

No

string (valid JSON string)

None

JSON Scheme in string form, used to constrain and guide decoding to generate JSON.

guided\_choice

No

\[string\]

None

Used to guide decoding to generate a given output.

guided\_grammar

No

string

None

EBNF grammar rules used to guide decoding.

guided\_whitespace\_pattern

No

string

None

Regular expression representing whitespace in JSON mode for guided decoding.

### **Return result parameter description**

**Parameter**

**Description**

id

Unique identifier for the request completion.

model

Model name.

choices

finish\_reason

The reason why the model stopped generating tokens.

index

Index. Type is Integer.

logprobs

Used to represent the confidence level of prediction results. For detailed parameter descriptions, see [content parameter description](#fe31501a44ot7).

text

Generated text.

object

Object type, STRING type, default is text\_completion.

usage

prompt\_tokens

Number of tokens in the input prompt.

completion\_tokens

Number of tokens in the generated or completed content.

total\_tokens

Total number of tokens including both input and output.

error\_info

code

Error code.

message

Error message.

Content parameter description

**Parameter**

**Description**

id

Token ID.

token

Token text.

logprob

Log probability value.

is\_special

Whether it is a special token. Default value is False.

bytes

A list of integers representing the byte sequence of the token in UTF-8 encoding.

top\_logprobs

List of most likely tokens and their corresponding log probabilities.

## **Chat Completions**

### **Call example**

## Command line

```
# Call EAS service
# Replace <Your EAS Token> with the service Token; replace <service_url> with the service endpoint.
curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: <Your EAS Token>" \
    -d '{
        "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Hello!"
        }
        ]
    }' \
    <service_url>/v1/chat/completions
```

## Python

```
# Python script
import json
import requests
from typing import Dict, List

#  <service_url>: Replace with the service endpoint.
url = "<service_url>/v1/chat/completions"
messages = [{'role': 'system', 'content': 'You are a helpful assistant.'},
            {'role': 'user', 'content': 'Hello!'}]
req = {
    "messages": messages,
    "stream": True,
    "temperature": 0.0,
    "top_p": 0.5,
    "top_k": 10,
    "max_tokens": 300,
}
response = requests.post(
    url,
    json=req,
    # <Your EAS Token>: Replace with the service Token.
    headers={"Content-Type": "application/json", "Authorization": "<Your EAS Token>"},
    stream=True,
)
for chunk in response.iter_lines(chunk_size=8192, decode_unicode=False):
    msg = chunk.decode("utf-8")
    if msg.startswith('data'):
        info = msg[6:]
        if info == '[DONE]':
            break
        else:
            resp = json.loads(info)
            print(resp['choices'][0]['delta']['content'], end='', flush=True)
```

### **Request parameter configuration description**

**Parameter**

**Required**

**Type**

**Default value**

**Description**

model

No

string

None

Model name, used to specify the LoRA name.

message

No

array

None

List of conversation messages.

```
[ {"role": "user", "content": "hello"}, {"role": "assistant", "content": "what can I do for you?"}, {"role": "user", "content": "what is the capital of Canada?" } ]
```

resume\_response

No

string

None

When resuming a chat, you need to provide the initial message and continue the conversation by passing the reply at the time of interruption.

max\_tokens

No

integer

16

Maximum number of tokens to generate in the request.

echo

No

boolean

False

Whether to return the prompt with the generated result.

seed

No

integer

None

The random seed.

stream

No

boolean

False

Whether to obtain the returned results in a streaming manner.

temperature

No

number

1.0

Controls the randomness and diversity of the generated text. Value range \[0,1.0\].

top\_p

No

number

1.0

From all possible tokens predicted by the model, select the most likely tokens whose probability sum reaches top\_p. Value range \[0,1.0\].

top\_k

No

integer

\-1

Keep the top\_k tokens with the highest probability.

repetition\_penalty

No

number

1.0

An important parameter for controlling the diversity of generated text.

-   \>1.0: Reduces the likelihood of repeated words or phrases.
    
-   <1.0: Increases the likelihood of repeated words or phrases.
    
-   \=1.0: No additional penalty or reward for repetition.
    

presence\_penalty

No

number

0.0

Used to control vocabulary diversity in generated text.

-   \>0: Words that have already appeared in the generated text will have a lower probability of being selected as the next word.
    
-   <0: Increases the likelihood of these words being reused.
    
-   \=0: The model will select the next word according to the original probability distribution.
    

frequency\_penalty

No

number

0.0

Used to control the degree of penalty for the frequency of repeated use of words that have already appeared when generating text.

-   \>0: Words that have appeared multiple times will have a lower probability of being selected.
    
-   <0: Increases the likelihood of these words being repeatedly selected.
    
-   \=0: The model will select the next word according to the original probability distribution.
    

stop (stop\_sequences)

No

string

None

Used to prompt the model to stop generating when specific text is encountered during text generation.

stop\_tokens

No

\[int\]

None

Used to prompt the model to stop generating when specific Token IDs are encountered during text generation.

ignore\_eos

No

boolean

False

Ignore the end marker when generating text.

logprobs

No

integer

None

Return the probability distribution of each possible output token during text generation.

top\_logprobs

No

integer

None

Number of most likely tokens at each token position.

response\_format

No

string

None

Used to specify the output format:

-   json\_object: Output JSON object.
    
-   text: Output text.
    

guided\_regex

No

string

None

Regular expression used to guide decoding.

guided\_json

No

string (valid JSON string)

None

JSON Scheme in string form, used to constrain and guide decoding to generate JSON.

guided\_choice

No

\[string\]

None

Used to guide decoding to generate a given output.

guided\_grammar

No

string

None

EBNF grammar rules used to guide decoding.

guided\_whitespace\_pattern

No

string

None

Regular expression representing whitespace in JSON mode for guided decoding.

### **Return result parameter description**

**Parameter**

**Description**

id

Unique identifier for the request completion.

choices

finish\_reason

The reason why the model stopped generating tokens.

index

Index. Type is integer.

logprobs

Used to represent the confidence level of prediction results. For detailed parameter descriptions, see [content parameter description](#fe31501a44ot7).

message

Non-streaming request return result. Represents the conversation message generated by the model.

delta

Streaming request return result. Represents the conversation message generated by the real-time model.

object

Object type, STRING type, default is text\_completion.

usage

prompt\_tokens

Number of tokens in the input prompt.

completion\_tokens

Number of tokens in the generated or completed content.

total\_tokens

Total number of tokens including both input and output.

error\_info

code

Error code.

message

Error message.

The following code provides an example of returned results:

#### **Streaming request return result**

```
{
    "id": "78544a80-6224-4b0f-a0c4-4bad94005eb1",
    "choices": [{
        "finish_reason": "",
        "index": 0,
        "logprobs": null,
        "delta": {
            "role": "assistant",
            "content": ""
        }
    }],
    "object": "chat.completion.chunk",
    "usage": {
        "prompt_tokens": 21,
        "completion_tokens": 1,
        "total_tokens": 22
    },
    "error_info": null
}
```

#### **Non-streaming request return result**

```
{
    "id": "1444c346-3d35-4505-ae73-7ff727d00e8a",
    "choices": [{
        "finish_reason": "",
        "index": 0,
        "logprobs": null,
        "message": {
            "role": "assistant",
            "content": "Hello! How can I assist you today?\n"
        }
    }],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 21,
        "completion_tokens": 16,
        "total_tokens": 37
    },
    "error_info": null
}
```
