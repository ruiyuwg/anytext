[`rtl-simple-queries`](https://github.com/balavishnuvj/rtl-simple-queries) is a companion library for `React Testing Library` that provides an alternative query API.

-   npm
-   Yarn

```
npm install --save-dev rtl-simple-queries
```

```
yarn add --dev rtl-simple-queries
```

```
import {screen} from 'rtl-simple-queries'screen.fetchByText(/text/, {allowEmpty: true, allowMultiple: false})screen.fetchByText(/text/, {allowMultiple: false})screen.fetchByText(/text/)// asyncawait screen.fetchByTextAsync(/text/, {allowMultiple: true})
```

-   [rtl-simple-queries on GitHub](https://github.com/balavishnuvj/rtl-simple-queries)
