[`riot-testing-library`](https://github.com/ariesjia/riot-testing-library) builds on top of [DOM Testing Library](https://github.com/testing-library/dom-testing-library) by adding APIs for working with [Riot.js](https://riot.js.org/) components.

-   npm
-   Yarn

```
npm install --save-dev riot-testing-library
```

```
yarn add --dev riot-testing-library
```

```
import render, {fireEvent} from 'riot-testing-library'import TestTag from './test.tag'test('should show count text  when rendered', () => {  const {queryByTestId} = render(TestTag, {count: 10})  expect(queryByTestId('count').textContent).toBe('10')})test('should add count when click add button text', () => {  const {queryByTestId} = render(TestTag, {count: 1})  expect(queryByTestId('count').textContent).toBe('1')  fireEvent.click(queryByTestId('button'))  expect(queryByTestId('count').textContent).toBe('2')})
```

-   [riot-testing-library on GitHub](https://github.com/ariesjia/riot-testing-library)
