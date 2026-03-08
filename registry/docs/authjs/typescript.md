[Getting Started](/getting-started "Getting Started")TypeScript

# TypeScript

Auth.js is committed to type-safety, so it’s written in TypeScript and 100% type safe. It comes with its own type definitions to use in your project.

Even if you don’t use TypeScript, IDEs like VS Code will pick this up to provide you with a better developer experience. While you are typing, you will get suggestions about what certain objects/functions look like, and sometimes links to documentation, examples, and other valuable resources.

## Philosophy[](#philosophy)

We have chosen [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) over [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) as the main technique to type Auth.js resources across your application in case you extend them.

**Why not use [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)?**

The interfaces that are shared across submodules are not passed to Auth.js library functions as generics.

Whenever these types are used, the functions always expect to return these formats. With generics, one might be able to override the type in one place, but not the other, which would cause the types to be out of sync with the implementation.

With module augmentation, you defined the types once, and you can be sure that they are always the same where it’s expected.

## Module Augmentation[](#module-augmentation)

Auth.js libraries come with certain interfaces that are shared across submodules and different Auth.js libraries (For example: `next-auth` and `@auth/prisma-adapter` will rely on types from `@auth/core`).

Good examples of such interfaces are `Session` or `User`. You can use TypeScript’s [Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) to extend these types to add your own properties across Auth.js without having to pass generic all over the place.

Let’s look at extending `Session` for example.

Next.jsQwikSvelteKitExpress

auth.ts

```
import NextAuth, { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
 
export const { auth, handlers } = NextAuth({
  callbacks: {
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          address: user.address,
        },
      }
    },
  },
})
```

plugin@auth.ts

```
import { DefaultSession, QwikAuth$ } from "@auth/qwik"
 
declare module "@auth/qwik" {
  /**
   * Returned by the `useSession` hook and the `session` object in the sharedMap
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    callbacks: {
      session({ session, token, user }) {
        // `session.user.address` is now a valid property, and will be type-checked
        // in places like `useSession().user` or `sharedMap.get('session').user`
        return {
          ...session,
          user: {
            ...session.user,
            address: user.address,
          },
        }
      },
    },
  })
)
```

auth.ts

```
import SvelteKitAuth, { type DefaultSession } from "@auth/sveltekit"
 
declare module "@auth/sveltekit" {
  interface Session {
    user: {
      userId: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
 
export const { handle } = SvelteKitAuth({
  callbacks: {
    session: async ({ session, token }) => {
      if (token) {
        session.user.userId = token.sub
      }
      // `session.user.userId` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return session
    },
  },
})
```

auth.ts

```
import { ExpressAuthConfig } from "@auth/express";
// Extend the default Session type to include custom properties
declare module "@auth/express" {
  interface Session {
    user: {
      id: string; // Add a custom `id` property to the session user object
    };
  }
}
 
export const authConfig: ExpressAuthConfig = {
  callbacks: {
    /**
     * The `session` callback is used to customize the session object
     * returned to the client. Here, we add a custom `id` property to
     * the session user object, which is populated from the JWT token.
     *
     * @param session - The current session object.
     * @param token - The JWT token containing user information.
     * @returns The modified session object with the custom `id` property.
     */
    async session({ session, token }) {
      if (token.sub) {
        // Add the `id` property to the session user object
        session.user.id = token.sub; // `token.sub` contains the user ID
      }
      return session;
    },
  },
};
```

Module augmentation is not limited to specific interfaces. You can augment any `interface` we’ve defined, here are some of the more common interfaces that you might want to override based on your use case.

types.d.ts

```
declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {}
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  interface Account {}
 
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {}
}
 
// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
}
```

The module declaration can be added to any file that is [“included”](https://www.typescriptlang.org/tsconfig#include) in your project’s `tsconfig.json`.

## Resources[](#resources)

1.  [TypeScript documentation: Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)
2.  [DigitalOcean: Module Augmentation in TypeScript](https://www.digitalocean.com/community/tutorials/typescript-module-augmentation)
3.  [Creating a Database Adapter](/guides/creating-a-database-adapter)

[Deployment](/getting-started/deployment "Deployment")[42 School](/getting-started/providers/42-school "42 School")
