## Wrapping a Promise-based API with Micro

This guide shows how to wrap a `Promise`-based API using the `Micro` library from Effect. We'll create a simple example that interacts with a hypothetical weather forecasting API, using Micro to handle structured error handling and execution flow.

1. **Create a Promise-based API Function**

   Start by defining a basic Promise-based function that simulates fetching weather data from an external service.

   ```ts twoslash
   // Simulate fetching weather data
   function fetchWeather(city: string): Promise {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (city === "London") {
           resolve("Sunny")
         } else {
           reject(new Error("Weather data not found for this location"))
         }
       }, 1_000)
     })
   }
   ```

2. **Wrap the Promise with Micro**

   Now, wrap the `fetchWeather` function using Micro, converting the `Promise` to a Micro effect to manage both success and failure scenarios.

   ```ts twoslash collapse={4-14}
   import { Micro } from "effect"

   // Simulate fetching weather data
   function fetchWeather(city: string): Promise {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (city === "London") {
           resolve("Sunny")
         } else {
           reject(new Error("Weather data not found for this location"))
         }
       }, 1_000)
     })
   }

   function getWeather(city: string) {
     return Micro.promise(() => fetchWeather(city))
   }
   ```

   Here, `Micro.promise` transforms the `Promise` returned by `fetchWeather` into a `Micro<string, never, never>` effect.

3. **Running the Micro Effect**

   Once the function is wrapped, execute the Micro effect and handle the results.

   **Example** (Executing the Micro Effect)

   ```ts twoslash collapse={4-14}
   import { Micro } from "effect"

   // Simulate fetching weather data
   function fetchWeather(city: string): Promise {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (city === "London") {
           resolve("Sunny")
         } else {
           reject(new Error("Weather data not found for this location"))
         }
       }, 1_000)
     })
   }

   function getWeather(city: string) {
     return Micro.promise(() => fetchWeather(city))
   }

   //      ┌─── Micro<string, never, never>
   //      ▼
   const weatherEffect = getWeather("London")

   Micro.runPromise(weatherEffect)
     .then((data) => console.log(`The weather in London is: ${data}`))
     .catch((error) =>
       console.error(`Failed to fetch weather data: ${error.message}`)
     )
   /*
   Output:
   The weather in London is: Sunny
   */
   ```

   In the example above, `Micro.runPromise` is used to execute the `weatherEffect`, converting it back into a `Promise`, which can be managed using familiar asynchronous handling methods.

   For more detailed information on the effect's exit status, use `Micro.runPromiseExit`:

   **Example** (Inspecting Exit Status)

   ```ts twoslash collapse={4-14}
   import { Micro } from "effect"

   // Simulate fetching weather data
   function fetchWeather(city: string): Promise {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (city === "London") {
           resolve("Sunny")
         } else {
           reject(new Error("Weather data not found for this location"))
         }
       }, 1_000)
     })
   }

   function getWeather(city: string) {
     return Micro.promise(() => fetchWeather(city))
   }

   //      ┌─── Micro<string, never, never>
   //      ▼
   const weatherEffect = getWeather("London")

   Micro.runPromiseExit(weatherEffect).then(
     // ┌─── MicroExit<string, never>
     // ▼
     (exit) => console.log(exit)
   )
   /*
   Output:
   {
     "_id": "MicroExit",
     "_tag": "Success",
     "value": "Sunny"
   }
   */
   ```

4. **Adding Error Handling**

   To further enhance the function, you might want to handle specific errors differently.
   Micro provides functions like `Micro.tryPromise` to handle anticipated errors gracefully.

   **Example** (Handling Specific Errors)

   ```ts twoslash collapse={4-14}
   import { Micro } from "effect"

   // Simulate fetching weather data
   function fetchWeather(city: string): Promise {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (city === "London") {
           resolve("Sunny")
         } else {
           reject(new Error("Weather data not found for this location"))
         }
       }, 1_000)
     })
   }

   class WeatherError {
     readonly _tag = "WeatherError"
     constructor(readonly message: string) {}
   }

   function getWeather(city: string) {
     return Micro.tryPromise({
       try: () => fetchWeather(city),
       // remap the error
       catch: (error) => new WeatherError(String(error))
     })
   }

   //      ┌─── Micro<string, WeatherError, never>
   //      ▼
   const weatherEffect = getWeather("Paris")

   Micro.runPromise(weatherEffect)
     .then((data) => console.log(`The weather in London is: ${data}`))
     .catch((error) =>
       console.error(`Failed to fetch weather data: ${error}`)
     )
   /*
   Output:
   Failed to fetch weather data: MicroCause.Fail: {"_tag":"WeatherError","message":"Error: Weather data not found for this location"}
   */
   ```
