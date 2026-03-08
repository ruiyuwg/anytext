On this page

Can be used as a `Provider` if you **do not already have a Redux store**.

Basic usage - wrap your App with ApiProvider

```
import * as React from 'react';import { ApiProvider } from '@reduxjs/toolkit/query/react';import { Pokemon } from './features/Pokemon';function App() {  return (    <ApiProvider api={api}>      <Pokemon />    </ApiProvider>  );}
```

danger

Using this together with an existing Redux store will cause them to conflict with each other. If you are already using Redux, please follow the instructions as shown in the [Getting Started guide](/introduction/getting-started).

### Example[​](#example "Direct link to Example")
