-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Reference](https://docs.cloud.google.com/workflows/docs/apis)

Send feedback

# Jumps Stay organized with collections Save and categorize content based on your preferences.

You can use jumps to control what step in your workflow will execute next. For example, at the end of any step, you can use `next` to define what step should execute next:

### YAML

  \- STEP\_NAME:
      ...
      next: STEP\_NAME\_TO\_JUMP\_TO
  

### JSON

  \[
    {
      "STEP\_NAME": {
        ...
        "next": "STEP\_NAME\_TO\_JUMP\_TO"
      }
    }
  \]
    

You can also use `next` to do the following:

-   To change the flow of a `for` loop, you can use `next: break` or `next: continue`. For more information, see [Use break/continue in a loop](/workflows/docs/reference/syntax/iteration#break-in-loop).
    
-   To stop the execution of a workflow or subworkflow, you can use `next: end`. For more information, see [Complete the execution of a workflow](/workflows/docs/reference/syntax/completing).
    

For more information about defining a workflow's order of execution, see [Conditions](/workflows/docs/reference/syntax/conditions) and [Control the order of execution in a workflow](/workflows/docs/controlling-execution-order).

### Explicit step ordering using jumps

This sample uses the `next:` command to explicitly define the sequence of workflow steps. In this sample, steps are executed in a different order than they appear in the workflow definition.

### YAML

```
- first_step:
    call: http.get
    args:
      url: https://www.somewhere.com/callA
    next: second_step
- third_step:
    call: http.get
    args:
      url: https://www.somewhere.com/callB
    next: end
- second_step:
    call: http.get
    args:
      url: https://www.somewhere.com/callC
    next: third_step
```

### JSON

```
[
  {
    "first_step": {
      "call": "http.get",
      "args": {
        "url": "https://www.somewhere.com/callA"
      },
      "next": "second_step"
    }
  },
  {
    "third_step": {
      "call": "http.get",
      "args": {
        "url": "https://www.somewhere.com/callB"
      },
      "next": "end"
    }
  },
  {
    "second_step": {
      "call": "http.get",
      "args": {
        "url": "https://www.somewhere.com/callC"
      },
      "next": "third_step"
    }
  }
]
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
