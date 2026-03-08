# Custom field actions

In this guide, you will create a field action that uses [Agent Action Transform](https://www.sanity.io/docs/agent-actions/transform-quickstart) to fix the spelling of a field.

*This is a paid feature, available on the Growth plan.*

Prerequisites:

- AI Assist plugin (`@sanity/assist`) v4.3.0 or higher is required to enable custom field actions.
- A studio configured with the AI Assist plugin. See the following guide for details on installation and setup.
- Available usage to run an Agent Action Transform query.

[Install and configure Sanity AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

## Add your first field action

You configure field actions in the `assist` plugin configuration. Open the `sanity.config.ts` file in your studio and add the `fieldActions` key to your `assist` configuration.

**sanity.config.ts**

```
import { defineConfig } from "sanity"
import { assist } from "@sanity/assist"

export default defineConfig({
// ... other settings
  plugins: [
    assist({
      fieldActions: {
        // <-- Field actions are configured here.
      }
    })
  ]
})
```

For this example, you'll need a few imports as well. Update your config to include the new imports. The dependencies should already be a part of your studio.

**sanity.config.ts**

```
import { defineConfig } from "sanity"
import { assist, defineAssistFieldAction } from '@sanity/assist'
import { useMemo } from 'react'
import { useClient } from 'sanity'

export default defineConfig({
// ... other settings
  plugins: [
    assist({
      fieldActions: {
      }
    })
  ]
})
```

### Set up `useFieldActions`

Start by defining `useFieldActions`. It is called for the document itself and for all fields. It can call React hooks. Actions returned by the hook are added to the corresponding document or field menu. It is recommended to wrap the returned actions in `useMemo`.

**sanity.config.ts**

```
import { defineConfig } from "sanity"
import { assist, defineAssistFieldAction } from '@sanity/assist'
import { useMemo } from 'react'
import { useClient } from 'sanity'

export default defineConfig({
// ... other settings
  plugins: [
    assist({
      fieldActions: {
        title: "My Actions", // Optional: sets the group title
        useFieldActions: (props) => {
          const {
            actionType
          } = props
          return useMemo(() => {
            if (actionType === 'field') {
              return [
                defineAssistFieldAction({
                  title: "Fix spelling",
                  onAction: async () => {
                    // ... Action logic here
                  }
                })
              ]
            }
            return []
          }, [actionType])
        }
      }
    }),
  ]
})
```

This checks if the action, stored as `actionType`, is a field or the document, then returns an array of actions to apply to the field's action menu.

The `defineAssistFieldAction` helper adds a single action. `onAction` *cannot* call hooks. If you need any state form a hook, it should be pre-assembled in `useFieldActions` before returning `useMemo`.

### Gather props and use the client to call Transform

This action uses Agent Action Transform, so you need a client instance, as well as some contextual details to pass in to Transform.

1. Destructure additional props that you need for Transform. `useFieldActions` gives you access to details about the schema, the type of action, the path to a field (if available) and more.
2. Set up the client with `useClient`. You already imported `useClient` in a previous step. Note: Agent Actions require using the `vX` API version at this time.
3. Configure Transform to pass the existing contents of the field to the AI, then replace it with the response.

Here's the final code:

**sanity.config.ts**

```
import { defineConfig } from "sanity"
import { assist, defineAssistFieldAction } from '@sanity/assist'
import { useMemo } from 'react'
import { useClient } from 'sanity'

export default defineConfig({
// ... other settings
  plugins: [
    assist({
      fieldActions: {
        title: "My Actions", // Optional: sets the group title
        useFieldActions: (props) => {
          const {
            actionType,
            schemaId,
            documentIdForAction,
            path,
            getConditionalPaths
          } = props
          const client = useClient({apiVersion: 'vX'})
          return useMemo(() => {
            if (actionType === 'field') {
              return [
                defineAssistFieldAction({
                  title: "Fix spelling",
                  onAction: async () => {
                    await client.agent.action.transform({
                      schemaId,
                      documentId: documentIdForAction,
                      instruction: "fix any spelling mistakes",
                      instructionParams: {
                        field: { type: 'field', path }
                      },
                      target: path.length ? {path} : undefined,
                      conditionalPaths: { paths: getConditionalPaths()}
                    })
                  }
                })
              ]
            }
            return []
          }, [actionType, schemaId, documentIdForAction, path, getConditionalPaths, client])
        }
      }
    }),
  ]
})
```

### Run the field action

Save and run your studio, and you should see the field action in the AI Assist menu for any supported fields.

![Animated gif of a user running the fix spelling field action](https://cdn.sanity.io/images/3do82whm/next/a168ebfd6080a42a5f5a9d6b00911a12a8efe194-800x281.gif)

## Contextually-aware example

The following example adds a "Fill field" action to all fields in the document by calling [Agent Action Generate](https://www.sanity.io/docs/agent-actions/generate-quickstart).

The action will:

- Create the document as a draft if it does not exist, respecting initial values (`targetDocument`)
- Use existing document state to determine what should be put in the field (`instruction`, `instructionParams`).
- Pass the current readOnly and hidden state currently used by the document form to the Agent Action, so it respects it (`conditionalPaths`).
- Output to the field the action started from (`target.path`).

**plugin.ts**

```
assist({
  fieldActions: {
    title: 'Custom actions',
    useFieldActions: (props) => {
      const {
        documentSchemaType,
        actionType,
        schemaId,
        getDocumentValue,
        getConditionalPaths,
        documentIdForAction,
        path,
        schemaType,
      } = props

      // hook usage has to happen outside onAction, so preassemble state in useFieldActions and pass to useMemo
      const client = useClient({apiVersion: 'vX'})

      return useMemo(() => {
        if (actionType === 'document') {
          // in this case we dont want a document action
          return []
        }

        return [
          defineAssistFieldAction({
            title: 'Fill field',
            icon: EditIcon,
            onAction: async () => {
              await client.agent.action.generate({
                schemaId,
                targetDocument: {
                  operation: 'createIfNotExists',
                  _id: documentIdForAction,
                  _type: documentSchemaType.name,
                  initialValues: getDocumentValue(),
                },
                instruction: `
                        We are generating a new value for a document field.
                        The document type is ${documentSchemaType.name}, and the document type title is ${documentSchemaType.title}
                        The document language is: "$lang" (use en-US if unspecified)
                        The document value is:
                        $doc
                        ---
                        We are in the following field:
                        JSON-path: ${pathToString(path)}
                        Title: ${schemaType.title}
                        Value: $field (consider it empty if undefined)
                        ---
                        Generate a new field value. The new value should be relevant to the document type and context.
                        Keep it interesting. Generate using the document language.
                     `,
                instructionParams: {
                  doc: {type: 'document'},
                  field: {type: 'field', path},
                  lang: {type: 'field', path: ['language']},
                },
                target: {
                  path,
                },
                conditionalPaths: {
                  paths: getConditionalPaths(),
                },
              })
            },
          }),
        ]
      }, [
        client,
        documentSchemaType,
        schemaId,
        getDocumentValue,
        getConditionalPaths,
        documentIdForAction,
        actionType,
        path,
        schemaType,
      ])
    },
  },
})
```

## Define helpers

The following are the available helpers for defining actions. You've seen the first one in use above.

### `defineAssistFieldAction`

Adds a single action that will appear in the document/field action menu.

`onAction` *cannot* call hooks. If state from hook is needed, it should be pre-assembled by `useFieldActions`

```
defineAssistFieldAction({
  title: 'Do something',
  icon: ActionIcon,
  onAction: async () => {
    //perform actions
  },
})
```

### `defineAssistFieldActionGroup`

Adds a group to hold one or more actions (or nested groups).

By default, any actions returned by `useFieldActions` will be grouped under `title`.

```
useFieldActions: (props) => {
  return [
    defineAssistFieldAction({/* ... */}), 
    defineAssistFieldActionGroup({
      title: 'More actions',
      children: [
        defineAssistFieldAction({/* ... */}),
      ],
    })
  ]
}
```

#### Only groups in `useFieldActions`

If `useFieldActions` *only* returns groups, the default wrapper group will be omitted. This allows full control over each group title.

### `defineFieldActionDivider`

Adds a divider between actions or groups. Takes no arguments:

```
useFieldActions: (props) => {
  return useMemo(() => [
    defineAssistFieldAction({/* ... */}),
    defineFieldActionDivider(),
    defineAssistFieldAction({/* ... */}),
  ], [])
}
```

## `useUserInput`

For certain actions, it is useful to have the user provide additional information or details that can be used as parameters for the action.

`useUserInput` returns a `getUserInput` function that can be called and awaited to return input from the user.

The `getUserInput` function takes input configuration and will display an input dialog to the user. When the user completes the dialog, the user-inputed text will be available (or undefined if the user closed the dialog).

```
assist({
  fieldActions: {
    title: 'Custom actions',
    useFieldActions: (props) => {
      const getUserInput = useUserInput()

      return useMemo(
        () => [
          defineAssistFieldAction({
            title: 'Do something with user input',
            onAction: async () => {
              const inputResult = await getUserInput({
                title: 'What do you want to do?', // dialog title
                inputs: [
                  {
                    id: 'topic',
                    title: 'Topic',
                  },
                  {
                    id: 'facts',
                    title: 'Facts',
                    description: 'Provide additional facts that will be used by the action',
                  },
                ],
              })
              if (!inputResult) {
                return // user closed the dialog
              }

              //use the result from each input
              //const [{result: topic}, {result: facts}] = inputResult
            },
          }),
        ],
        [getUserInput],
      )
    },
  },
})
```
