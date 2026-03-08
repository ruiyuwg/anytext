# Using Wasm modules

Use WebAssembly in Edge Functions.

Edge Functions supports running [WebAssembly (Wasm)](https://developer.mozilla.org/en-US/docs/WebAssembly) modules. WebAssembly is useful if you want to optimize code that's slower to run in JavaScript or require low-level manipulation.

This allows you to:

- Optimize performance-critical code beyond JavaScript capabilities
- Port existing libraries from other languages (C, C++, Rust) to JavaScript
- Access low-level system operations not available in JavaScript

For example, libraries like [magick-wasm](/docs/guides/functions/examples/image-manipulation) port existing C libraries to WebAssembly for complex image processing.

***

### Writing a Wasm module

You can use different languages and SDKs to write Wasm modules. For this tutorial, we will write a simple Wasm module in Rust that adds two numbers.

Follow this [guide on writing Wasm modules in Rust](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm) to setup your dev environment.

\<StepHikeCompact.Step step={1} fullWidth>
\<StepHikeCompact.Details title="Create a new Edge Function" fullWidth>
Create a new Edge Function called `wasm-add`

````
  ```bash
  supabase functions new wasm-add
  ```
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2} fullWidth>
\<StepHikeCompact.Details title="Create a new Cargo project" fullWidth>
Create a new Cargo project for the Wasm module inside the function's directory:

````
  ```bash
  cd supabase/functions/wasm-add
  cargo new --lib add-wasm
  ```
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3} fullWidth>
\<StepHikeCompact.Details title="Add the Wasm module code" fullWidth>
Add the following code to `add-wasm/src/lib.rs`.

````
    ```
    use wasm_bindgen::prelude::*;

    #[wasm_bindgen]
    pub fn add(a: u32, b: u32) -> u32 {
        a + b
    }
    ```
  
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4} fullWidth>
\<StepHikeCompact.Details title="Update the Cargo.toml file" fullWidth>
Update the `add-wasm/Cargo.toml` to include the `wasm-bindgen` dependency.

````
    ```
    [package]
    name = "add-wasm"
    version = "0.1.0"
    description = "A simple wasm module that adds two numbers"
    license = "MIT/Apache-2.0"
    edition = "2021"

    [lib]
    crate-type = ["cdylib"]

    [dependencies]
    wasm-bindgen = "0.2"
    ```
  
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5} fullWidth>
\<StepHikeCompact.Details title="Build the Wasm module" fullWidth>
Build the package by running:

````
  ```bash
  wasm-pack build --target deno
  ```

  This will produce a Wasm binary file inside `add-wasm/pkg` directory.
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

***

## Calling the Wasm module from the Edge Function

Update your Edge Function to call the add function from the Wasm module:

```typescript index.ts
import { add } from "./add-wasm/pkg/add_wasm.js";

Deno.serve(async (req) => {
  const { a, b } = await req.json();
  return new Response(
    JSON.stringify({ result: add(a, b) }),
    { headers: { "Content-Type": "application/json" } },
  );
});
```

Supabase Edge Functions currently use Deno 1.46. From [Deno 2.1, importing Wasm modules](https://deno.com/blog/v2.1) will require even less boilerplate code.

***

## Bundle and deploy

Before deploying, ensure the Wasm module is bundled with your function by defining it in `supabase/config.toml`:

- You will need update Supabase CLI to 2.7.0 or higher for the `static_files` support.
- Static files cannot be deployed using the `--use-api` API flag. You need to build them with [Docker on the CLI](/docs/guides/functions/quickstart#step-6-deploy-to-production).

```toml
[functions.wasm-add]
static_files = [ "./functions/wasm-add/add-wasm/pkg/*"]
```

Deploy the function by running:

```bash
supabase functions deploy wasm-add
```
