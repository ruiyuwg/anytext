# Build forms with API routes

> Learn how to use JavaScript to send form submissions to an API Route.

An HTML form causes the browser to refresh the page or navigate to a new one. To send form data to an API endpoint instead, you must intercept the form submission using JavaScript.

This recipe shows you how to send form data to an API endpoint and handle that data.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- A project with [an adapter for on-demand rendering](/en/guides/on-demand-rendering/)
- A [UI Framework integration](/en/guides/framework-components/) installed

## Recipe

[Section titled “Recipe”](#recipe)

1. Create a `POST` API endpoint at `/api/feedback` that will receive the form data. Use `request.formData()` to process it. Be sure to validate the form values before you use them.

   This example sends a JSON object with a message back to the client.

   src/pages/api/feedback.ts

   ```ts
   export const prerender = false; // Not needed in 'server' mode
   import type { APIRoute } from "astro";


   export const POST: APIRoute = async ({ request }) => {
     const data = await request.formData();
     const name = data.get("name");
     const email = data.get("email");
     const message = data.get("message");
     // Validate the data - you'll probably want to do more than this
     if (!name || !email || !message) {
       return new Response(
         JSON.stringify({
           message: "Missing required fields",
         }),
         { status: 400 }
       );
     }
     // Do something with the data, then return a success response
     return new Response(
       JSON.stringify({
         message: "Success!"
       }),
       { status: 200 }
     );
   };
   ```

2. Create a form component using your UI framework. Each input should have a `name` attribute that describes the value of that input.

   Be sure to include a `<button>` or `<input type="submit">` element to submit the form.

   - Preact

     src/components/FeedbackForm.tsx

     ```tsx
     export default function Form() {
       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
         
       );
     }
     ```

   - React

     src/components/FeedbackForm.tsx

     ```tsx
     export default function Form() {
       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
         
       );
     }
     ```

   - Solid

     src/components/FeedbackForm.tsx

     ```tsx
     export default function Form() {
       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
         
       );
     }
     ```

   - Svelte

     src/components/FeedbackForm.svelte

     ```svelte

       
         Name
         
       
       
         Email
         
       
       
         Message
         
       
       Send

     ```

   - Vue

     src/components/FeedbackForm.vue

     ```vue

       
         
           Name
           
         
         
           Email
           
         
         
           Message
           
         
         Send
       

     ```

3. Create a function that accepts a submit event, then pass it as a `submit` handler to your form.

   In the function:

   - Call `preventDefault()` on the event to override the browser’s default submission process.
   - Create a `FormData` object and send it in a `POST` request to your endpoint using `fetch()`.

   * Preact

     src/components/FeedbackForm.tsx

     ```diff
     +import { useState } from "preact/hooks";


     export default function Form() {
       +const [responseMessage, setResponseMessage] = useState("");


       +async function submit(e: SubmitEvent) {
     +    e.preventDefault();
         +const formData = new FormData(e.target as HTMLFormElement);
         +const response = await fetch("/api/feedback", {
           method: "POST",
           body: formData,
         });
         +const data = await response.json();
         +if (data.message) {
           +setResponseMessage(data.message);
     +    }
     +  }


       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
           +{responseMessage && {responseMessage}}
         
       );
     }
     ```

   * React

     src/components/FeedbackForm.tsx

     ```diff
     +import { useState } from "react";
     +import type { FormEvent } from "react";


     export default function Form() {
       +const [responseMessage, setResponseMessage] = useState("");


       +async function submit(e: FormEvent) {
     +    e.preventDefault();
         +const formData = new FormData(e.target as HTMLFormElement);
         +const response = await fetch("/api/feedback", {
           method: "POST",
           body: formData,
         });
         +const data = await response.json();
         +if (data.message) {
           +setResponseMessage(data.message);
     +    }
     +  }


       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
           +{responseMessage && {responseMessage}}
         
       );
     }
     ```

   * Solid

     src/components/FeedbackForm.tsx

     ```diff
     +import { createSignal, createResource, Suspense } from "solid-js";


     +async function postFormData(formData: FormData) {
       +const response = await fetch("/api/feedback", {
         method: "POST",
         body: formData,
       });
       +const data = await response.json();
       +return data;
     }


     export default function Form() {
       +const [formData, setFormData] = createSignal();
       +const [response] = createResource(formData, postFormData);


       +function submit(e: SubmitEvent) {
     +    e.preventDefault();
         +setFormData(new FormData(e.target as HTMLFormElement));
     +  }


       return (
         
           
             Name
             
           
           
             Email
             
           
           
             Message
             
           
           Send
           +{response() && {response().message}}
         
       );
     }
     ```

   * Svelte

     src/components/FeedbackForm.svelte

     ```diff

       +let responseMessage: string;


       +async function submit(e: SubmitEvent) {
     +    e.preventDefault();
         +const formData = new FormData(e.currentTarget as HTMLFormElement);
         +const response = await fetch("/api/feedback", {
           method: "POST",
           body: formData,
         });
         +const data = await response.json();
     +    responseMessage = data.message;
     +  }




       
         Name
         
       
       
         Email
         
       
       
         Message
         
       
       Send
     +
         {responseMessage}
     +  {/if}

     ```

   * Vue

     src/components/FeedbackForm.vue

     ```diff

     +import { ref } from "vue";


     +const responseMessage = ref();


     +async function submit(e: Event) {
     +  e.preventDefault();
       +const formData = new FormData(e.currentTarget as HTMLFormElement);
       +const response = await fetch("/api/feedback", {
         method: "POST",
         body: formData,
       });
       +const data = await response.json();
     +  responseMessage.value = data.message;
     +}




       
         
           Name
           
         
         
           Email
           
         
         
           Message
           
         
         Send
         {{ responseMessage }}
       

     ```

4. Import and include your `<FeedbackForm />` component on a page. Be sure to use a `client:*` directive to ensure that the form logic is hydrated when you want it to be.

   - Preact

     src/pages/index.astro

     ```astro
     ---
     import FeedbackForm from "../components/FeedbackForm"
     ---

     ```

   - React

     src/pages/index.astro

     ```astro
     ---
     import FeedbackForm from "../components/FeedbackForm"
     ---

     ```

   - Solid

     src/pages/index.astro

     ```astro
     ---
     import FeedbackForm from "../components/FeedbackForm"
     ---

     ```

   - Svelte

     src/pages/index.astro

     ```astro
     ---
     import FeedbackForm from "../components/FeedbackForm.svelte"
     ---

     ```

   - Vue

     src/pages/index.astro

     ```astro
     ---
     import FeedbackForm from "../components/FeedbackForm.vue"
     ---

     ```
