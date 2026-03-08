On this page

`Vue Testing Library` does not require any configuration to be used.

### Cleanup[​](#cleanup "Direct link to heading")

#### Jest[​](#jest "Direct link to heading")

[`cleanup`](/docs/vue-testing-library/api#cleanup) will be called after each test automatically for Jest, so normally you don't need to change anything.

#### Vitest[​](#vitest "Direct link to heading")

If you're using Vitest and want to cleanup after each test, you need to [enable globals](https://vitest.dev/config/#globals) through its configuration file.
