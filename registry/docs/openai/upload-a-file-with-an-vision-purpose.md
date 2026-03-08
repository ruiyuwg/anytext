# Upload a file with an "vision" purpose

curl https://api.openai.com/v1/files \\
-H "Authorization: Bearer $OPENAI\_API\_KEY" \\
-F purpose="vision" \\
-F file="@/path/to/myimage.png"

## Pass the file ID in the content

curl https://api.openai.com/v1/threads \\
-H "Authorization: Bearer $OPENAI\_API\_KEY" \\
-H "Content-Type: application/json" \\
-H "OpenAI-Beta: assistants=v2" \\
-d '{
"messages": \[
{
"role": "user",
"content": \[
{
"type": "text",
"text": "What is the difference between these images?"
},
{
"type": "image\_url",
"image\_url": {"url": "https://example.com/image.png"}
},
{
"type": "image\_file",
"image\_file": {"file\_id": file.id}
}
]
}
]
}'
\`.trim(),
};

export const snippetLowHighFidelity = {
python: `thread = client.beta.threads.create(
  messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What is this an image of?"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://example.com/image.png",
            "detail": "high"
          }
        },
      ],
    }
  ]
)
 `.trim(),
"node.js": `const thread = await openai.beta.threads.create({
  messages: [
    {
      "role": "user",
      "content": [
          {
            "type": "text",
            "text": "What is this an image of?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://example.com/image.png",
              "detail": "high"
            }
          },
      ]
    }
  ]
});
 `.trim(),
curl: `curl https://api.openai.com/v1/threads \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "OpenAI-Beta: assistants=v2" \\
  -d '{
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What is this an image of?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://example.com/image.png",
              "detail": "high"
            }
          },
        ]
      }
    ]
  }'
 `.trim(),
};

export const snippetMessageAnnotations = {
python: \`

# Retrieve the message object

message = client.beta.threads.messages.retrieve(
thread\_id="...",
message\_id="..."
)

# Extract the message content

message\_content = message.content\[0].text
annotations = message\_content.annotations
citations = \[]

# Iterate over the annotations and add footnotes

for index, annotation in enumerate(annotations): # Replace the text with a footnote
message\_content.value = message\_content.value.replace(annotation.text, f' \[{index}]')

```
# Gather citations based on annotation attributes
if (file_citation := getattr(annotation, 'file_citation', None)):
    cited_file = client.files.retrieve(file_citation.file_id)
    citations.append(f'[{index}] {file_citation.quote} from {cited_file.filename}')
elif (file_path := getattr(annotation, 'file_path', None)):
    cited_file = client.files.retrieve(file_path.file_id)
    citations.append(f'[{index}] Click  to download {cited_file.filename}')
    # Note: File download functionality not implemented above for brevity
```
