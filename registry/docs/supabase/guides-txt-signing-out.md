# Signing out

Signing out a user

Signing out a user works the same way no matter what method they used to sign in.

Call the sign out method from the client library. It removes the active session and clears Auth data from the storage medium.

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://your-project-id.supabase.co',
  'sb_publishable_... or anon key'
)

// ---cut---
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
```



```dart
Future signOut() async {
   await supabase.auth.signOut();
}
```



```swift
try await supabase.auth.signOut()
```



```kotlin
suspend fun logout() {
	supabase.auth.signOut()
}
```



```python
supabase.auth.sign_out()
```
````

## Sign out and scopes

Supabase Auth allows you to specify three different scopes for when a user invokes the [sign out API](/docs/reference/javascript/auth-signout) in your application:

- `global` (default) when all sessions active for the user are terminated.
- `local` which only terminates the current session for the user but keep sessions on other devices or browsers active.
- `others` to terminate all but the current session for the user.

You can invoke these by providing the `scope` option:

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://your-project-id.supabase.co',
  'sb_publishable_... or anon key'
)

// ---cut---
// defaults to the global scope
await supabase.auth.signOut()

// sign out from the current session only
await supabase.auth.signOut({ scope: 'local' })
```



```dart
// defaults to the local scope
await supabase.auth.signOut();

// sign out from all sessions
await supabase.auth.signOut(scope: SignOutScope.global);
```



```kotlin
// defaults to the local scope
await supabase.auth.signOut();

// sign out from all sessions
supabase.auth.signOut(SignOutScope.GLOBAL)
```
````

Upon sign out, all refresh tokens and potentially other database objects related to the affected sessions are destroyed and the client library removes the session stored in the local storage medium.

Access Tokens of revoked sessions remain valid until their expiry time, encoded in the `exp` claim. The user won't be immediately logged out and will only be logged out when the Access Token expires.
