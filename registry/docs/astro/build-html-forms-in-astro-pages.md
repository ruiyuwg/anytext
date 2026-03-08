# Build HTML forms in Astro pages

> Learn how to build HTML forms and handle submissions in your frontmatter.

Astro pages that are rendered on demand can both display and handle forms. In this recipe, you’ll use a standard HTML form to submit data to the server. Your frontmatter script will handle the data on the server, sending no JavaScript to the client.

Build forms with Astro Actions

In v4.15, Astro added actions which provide several benefits over basic HTML forms including validating your form data and updating your UI based on the form submission. To use this method for building forms instead, see our [actions guide](/en/guides/actions/) to learn more about these features.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- An Astro project with a [server adapter](/en/guides/on-demand-rendering/#server-adapters) installed.

## Recipe

[Section titled “Recipe”](#recipe)

1. Create or identify a `.astro` page which will contain your form and your handling code. For example, you could add a registration page:

   src/pages/register.astro

   ```astro
   ---
   ---
   Register
   ```

2. Add a `<form>` tag with some inputs to the page. Each input should have a `name` attribute that describes the value of that input.

   Be sure to include a `<button>` or `<input type="submit">` element to submit the form.

   src/pages/register.astro

   ```astro
   ---
   ---
   Register

     
       Username:
       
     
     
       Email:
       
     
     
       Password:
       
     
     Submit

   ```

3. Use [validation attributes](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) to provide basic client-side validation that works even if JavaScript is disabled.

   In this example,

   - `required` prevents form submission until the field is filled.
   - `minlength` sets a minimum required length for the input text.
   - `type="email"` also introduces validation that will only accept a valid email format.

   src/pages/register.astro

   ```astro
   ---
   ---
   Register

     
       Username:
       
     
     
       Email:
       
     
     
       Password:
       
     
     Submit

   ```

   Tip

   You can add custom validation logic that refers to multiple fields using a `<script>` tag and the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api).

   To write complex validation logic more easily, you can build your form using a [frontend framework](/en/guides/framework-components/) and choose a form library like [React Hook Form](https://react-hook-form.com/) or [Felte](https://felte.dev/).

4. The form submission will cause the browser to request the page again. Change the form’s data transfer `method` to `POST` to send the form data as part of the `Request` body, rather than as URL parameters.

   src/pages/register.astro

   ```astro
   ---
   ---
   Register

     
       Username:
       
     
     
       Email:
       
     
     
       Password:
       
     
     Submit

   ```

5. Check for the `POST` method in the frontmatter and access the form data using `Astro.request.formData()`. Wrap this in a `try ... catch` block to handle cases when the `POST` request wasn’t sent by a form and the `formData` is invalid.

   src/pages/register.astro

   ```diff
   ---
   +export const prerender = false; // Not needed in 'server' mode


   +if (Astro.request.method === "POST") {
     +try {
       +const data = await Astro.request.formData();
       +const name = data.get("username");
       +const email = data.get("email");
       +const password = data.get("password");
       +// Do something with the data
   +  } catch (error) {
       +if (error instanceof Error) {
   +      console.error(error.message);
   +    }
   +  }
   +}
   ---
   Register

     
       Username:
       
     
     
       Email:
       
     
     
       Password:
       
     
     Submit

   ```

6. Validate the form data on the server. This should include the same validation done on the client to prevent malicious submissions to your endpoint and to support the rare legacy browser that doesn’t have form validation.

   It can also include validation that can’t be done on the client. For example, this example checks if the email is already in the database.

   Error messages can be sent back to the client by storing them in an `errors` object and accessing it in the template.

   src/pages/register.astro

   ```diff
   ---
   export const prerender = false; // Not needed in 'server' mode


   import { isRegistered, registerUser } from "../../data/users"
   import { isValidEmail } from "../../utils/isValidEmail";


   +const errors = { username: "", email: "", password: "" };
   if (Astro.request.method === "POST") {
     try {
       const data = await Astro.request.formData();
       const name = data.get("username");
       const email = data.get("email");
       const password = data.get("password");
       +if (typeof name !== "string" || name.length < 1) {
   +      errors.username += "Please enter a username. ";
   +    }
       +if (typeof email !== "string" || !isValidEmail(email)) {
   +      errors.email += "Email is not valid. ";
   +    } else if (await isRegistered(email)) {
   +      errors.email += "Email is already registered. ";
   +    }
       +if (typeof password !== "string" || password.length < 6) {
   +      errors.password += "Password must be at least 6 characters. ";
   +    }
       const hasErrors = Object.values(errors).some(msg => msg)
       if (!hasErrors) {
         await registerUser({name, email, password});
         return Astro.redirect("/login");
       }
     } catch (error) {
       if (error instanceof Error) {
         console.error(error.message);
       }
     }
   }
   ---
   Register

     
       Username:
       
     
     +{errors.username && {errors.username}}
     
       Email:
       
     
     +{errors.email && {errors.email}}
     
       Password:
       
     
     +{errors.password && {errors.password}}
     Register

   ```
