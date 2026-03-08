# globalSetup

- **Type:** `string | string[]`

Path to global setup files relative to project [root](/config/root).

A global setup file can either export named functions `setup` and `teardown` or a `default` function that returns a teardown function:

```js [exports]
export function setup(project) {
  console.log('setup')
}

export function teardown() {
  console.log('teardown')
}
```

```js [default]
export default function setup(project) {
  console.log('setup')

  return function teardown() {
    console.log('teardown')
  }
}
```

Note that the `setup` method and a `default` function receive a [test project](/api/advanced/test-project) as the first argument. The global setup is called before the test workers are created and only if there is at least one test queued, and teardown is called after all test files have finished running. In [watch mode](/config/watch), the teardown is called before the process is exited instead. If you need to reconfigure your setup before the test rerun, you can use [`onTestsRerun`](#handling-test-reruns) hook instead.

Multiple global setup files are possible. `setup` and `teardown` are executed sequentially with teardown in reverse order.

Beware that the global setup is running in a different global scope before test workers are even created, so your tests don't have access to global variables defined here. However, you can pass down serializable data to tests via [`provide`](/config/provide) method and read them in your tests via `inject` imported from `vitest`:

```ts [example.test.ts]
import { inject } from 'vitest'

inject('wsPort') === 3000
```

```ts [globalSetup.ts]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.provide('wsPort', 3000)
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
```

If you need to execute code in the same process as tests, use [`setupFiles`](/config/setupfiles) instead, but note that it runs before every test file.

### Handling Test Reruns

You can define a custom callback function to be called when Vitest reruns tests. The test runner will wait for it to complete before executing tests. Note that you cannot destruct the `project` like `{ onTestsRerun }` because it relies on the context.

```ts [globalSetup.ts]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.onTestsRerun(async () => {
    await restartDb()
  })
}
```

***

# hideSkippedTests

- **Type:** `boolean`
- **CLI:** `--hideSkippedTests`, `--hide-skipped-tests`
- **Default:** `false`

Hide logs for skipped tests

***

# hookTimeout

- **Type:** `number`
- **Default:** `10_000` in Node.js, `30_000` if `browser.enabled` is `true`
- **CLI:** `--hook-timeout=10000`, `--hookTimeout=10000`

Default timeout of a hook in milliseconds. Use `0` to disable timeout completely.

***

# IDE Integrations

## VS Code Official

[GitHub](https://github.com/vitest-dev/vscode) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

![](https://i.ibb.co/bJCbCf2/202203292020.gif)

## JetBrains IDE

WebStorm, PhpStorm, IntelliJ IDEA Ultimate, and other JetBrains IDEs come with built-in support for Vitest.

[WebStorm Help](https://www.jetbrains.com/help/webstorm/vitest.html) | [IntelliJ IDEA Ultimate Help](https://www.jetbrains.com/help/idea/vitest.html) | [PhpStorm Help](https://www.jetbrains.com/help/phpstorm/vitest.html)

![Vitest WebStorm Demo](https://raw.githubusercontent.com/kricact/WS-info/main/gifs/vitest-run-all.gif)

## Wallaby.js Paid (free for OSS)

Created by [The Wallaby Team](https://wallabyjs.com)

[Wallaby.js](https://wallabyjs.com) runs your Vitest tests immediately as you type, highlighting results in your IDE right next to your code.

[VS Code](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode) | [JetBrains](https://plugins.jetbrains.com/plugin/15742-wallaby) |
[Visual Studio](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2022) | [Sublime Text](https://packagecontrol.io/packages/Wallaby)

![Wallaby VS Code Demo](https://wallabyjs.com/assets/img/vitest_demo.gif)

***
