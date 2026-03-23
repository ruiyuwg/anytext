# Intro

import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Tabs } from 'fumadocs-ui/components/tabs';

import { Featured } from '../components/featured';
import { Platinum } from '../components/platinum';
import { Gold } from '../components/gold';
import { Silver } from '../components/silver';
import { Bronze } from '../components/bronze';
import { HeroLogo } from '../components/hero-logo';

Zod
TypeScript-first schema validation with static type inferenceby @colinhacks

```
Website
  •  
Discord
  •  
𝕏
  •  
Bluesky

```

{/\*
An example of a parameter field

The filtering command used to sort through the users

The age of the user. Cannot be less than 0
\*/}

```
Zod 4 is now stable! Read the release notes here.
```

\<Featured
data={{
name: "Jazz",
link: "https://jazz.tools/?utm\_source=zod",
lightImage: "https://raw.githubusercontent.com/garden-co/jazz/938f6767e46cdfded60e50d99bf3b533f4809c68/homepage/homepage/public/Zod%20sponsor%20message.png",

darkImage: "https://raw.githubusercontent.com/garden-co/jazz/938f6767e46cdfded60e50d99bf3b533f4809c68/homepage/homepage/public/Zod%20sponsor%20message.png",
}}
/>

## Introduction

Zod is a TypeScript-first validation library. Using Zod, you can define *schemas* you can use to validate data, from a simple `string` to a complex nested object.

```ts
import * as z from "zod";

const User = z.object({
  name: z.string(),
});

// some untrusted data...
const input = { /* stuff */ };

// the parsed result is validated and type safe!
const data = User.parse(input);

// so you can use it with confidence :)
console.log(data.name);
```

## Features

- Zero external dependencies
- Works in Node.js and all modern browsers
- Tiny: 2kb core bundle (gzipped)
- Immutable API: methods return a new instance
- Concise interface
- Works with TypeScript and plain JS
- Built-in JSON Schema conversion
- Extensive ecosystem

## Installation

```sh
npm install zod
```

> Zod is also available as `@zod/zod` on [jsr.io](https://jsr.io/@zod/zod).

Zod provides an MCP server that can be used by agents to search Zod's docs. To add to your editor, follow [these instructions](https://share.inkeep.com/zod/mcp). Zod also provides an [llms.txt](https://zod.dev/llms.txt) file.

## Requirements

Zod is tested against *TypeScript v5.5* and later. Older versions may work but are not officially supported.

### `"strict"`

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

```ts
// tsconfig.json
{
  // ...
  "compilerOptions": {
    // ...
    "strict": true
  }
}
```

## Ecosystem

Zod has a thriving ecosystem of libraries, tools, and integrations. Refer to the [Ecosystem page](/ecosystem) for a complete list of libraries that support Zod or are built on top of it.

- [Resources](/ecosystem?id=resources)
- [API Libraries](/ecosystem?id=api-libraries)
- [Form Integrations](/ecosystem?id=form-integrations)
- [Zod to X](/ecosystem?id=zod-to-x)
- [X to Zod](/ecosystem?id=x-to-zod)
- [Mocking Libraries](/ecosystem?id=mocking-libraries)
- [Powered by Zod](/ecosystem?id=powered-by-zod)

I also contribute to the following projects, which I'd like to highlight:

- [tRPC](https://trpc.io) - End-to-end typesafe APIs, with support for Zod schemas
- [React Hook Form](https://react-hook-form.com) - Hook-based form validation with a [Zod resolver](https://react-hook-form.com/docs/useform#resolver)
- [zshy](https://github.com/colinhacks/zshy) - Originally created as Zod's internal build tool. Bundler-free, batteries-included build tool for TypeScript libraries. Powered by `tsc`.

## Sponsors

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### Platinum

### Gold

### Silver

### Bronze
