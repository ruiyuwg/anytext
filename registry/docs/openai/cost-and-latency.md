## Cost and latency

This model generates images by first producing specialized image tokens. Both latency and eventual cost are proportional to the number of tokens required to render an image—larger image sizes and higher quality settings result in more tokens.

The number of tokens generated depends on image dimensions and quality:

| Quality | Square (1024×1024) | Portrait (1024×1536) | Landscape (1536×1024) |
| ------- | ------------------ | -------------------- | --------------------- |
| Low     | 272 tokens         | 408 tokens           | 400 tokens            |
| Medium  | 1056 tokens        | 1584 tokens          | 1568 tokens           |
| High    | 4160 tokens        | 6240 tokens          | 6208 tokens           |

Note that you will also need to account for [input tokens](https://developers.openai.com/api/docs/guides/images-vision?api-mode=responses#calculating-costs): text tokens for the prompt and image tokens for the input images if editing images.
If you are using high input fidelity, the number of input tokens will be higher.

Refer to the [Calculating costs](#calculating-costs) section below for more
information about price per text and image tokens.

So the final cost is the sum of:

- input text tokens
- input image tokens if using the edits endpoint
- image output tokens

### Calculating costs

Per-image output pricing is listed below. These tables cover output image
generation only. You should still account for text and image input tokens when
estimating the total cost of a request.

<table
  style={{ borderCollapse: "collapse", tableLayout: "fixed", width: "100%" }}
>

```
  Model
  
    Quality
  
  1024 x 1024
  1024 x 1536
  1536 x 1024




  
    GPT Image 1.5
  
  Low
  $0.009
  $0.013
  $0.013


  Medium
  $0.034
  $0.05
  $0.05


  High
  $0.133
  $0.2
  $0.2



  
    GPT Image Latest
  
  Low
  $0.009
  $0.013
  $0.013


  Medium
  $0.034
  $0.05
  $0.05


  High
  $0.133
  $0.2
  $0.2



  
    GPT Image 1
  
  Low
  $0.011
  $0.016
  $0.016


  Medium
  $0.042
  $0.063
  $0.063


  High
  $0.167
  $0.25
  $0.25



  
    GPT Image 1 Mini
  
  Low
  $0.005
  $0.006
  $0.006


  Medium
  $0.011
  $0.015
  $0.015


  High
  $0.036
  $0.052
  $0.052
```

<table
  style={{ borderCollapse: "collapse", tableLayout: "fixed", width: "100%" }}
>

```
  Model
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "14%",
    }}
  >
    Quality
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.33%",
    }}
  >
    1024 x 1024
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.33%",
    }}
  >
    1024 x 1792
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.34%",
    }}
  >
    1792 x 1024
  




  
    DALL·E 3
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    Standard
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.04
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.08
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.08
  


  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    HD
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.08
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.12
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.12
  
```

<table
  style={{ borderCollapse: "collapse", tableLayout: "fixed", width: "100%" }}
>

```
  Model
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "14%",
    }}
  >
    Quality
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.33%",
    }}
  >
    256 x 256
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.33%",
    }}
  >
    512 x 512
  
  <th
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      width: "19.34%",
    }}
  >
    1024 x 1024
  




  DALL·E 2
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    Standard
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.016
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.018
  
  <td
    style={{
      textAlign: "left",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
  >
    $0.02
  
```

### Partial images cost

If you want to [stream image generation](#streaming) using the `partial_images` parameter, each partial image will incur an additional 100 image output tokens.

***
