# Field action patterns

*This is a paid feature, available on the Growth plan.*

AI Assist custom field actions allow you to hook into the AI assist menu to add your own programmatic actions.

Prerequisites:

- Install and configure [AI Assist](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist) in your studio.
- Review the [field action guide](https://www.sanity.io/docs/studio/ai-assist-field-actions).
- Get to know [Agent Actions](https://www.sanity.io/docs/agent-actions/introduction).

## Basic setup

Each example below includes the field action and the config example. Set up configuration examples in your studio config. For example:

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          // add field action setup here
        }
      }
    })
  ]
})
```

For each example, remember to update any paths and filenames to match your project structure. You may also need to edit individual fields and paths to fit your schema's needs.

## Auto-fill any field

This action will generate a new value for the document or field it is invoked for. The value will be contextually based on what is already in the document, and use the language in a `language` field (if present).

**actions/autoFill.ts**

```
import {type AssistFieldActionProps, defineAssistFieldAction} from '@sanity/assist'
import {useMemo} from 'react'
import {EditIcon} from '@sanity/icons'
import {pathToString, useClient} from 'sanity'

export function useAutoFillFieldAction(props: AssistFieldActionProps) {
  const {
    actionType,
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    path,
    schemaId,
    schemaType,
  } = props

  const client = useClient({apiVersion: 'vX'})

  return useMemo(() => {
    return defineAssistFieldAction({
      title: actionType ? 'Autofill field' : 'Autofill document',
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
            // `mixed` will append on array-like fields and set on non-array fields (the default option).
            // Optionally change this to `set` or `append` to force patch behavior across all field types.
            operation: 'mixed',
            path,
          },
          conditionalPaths: {
            paths: getConditionalPaths(),
          },
        })
      },
    })
  }, [
    client,
    actionType,
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    path,
    schemaId,
    schemaType,
  ])
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useAutoFillFieldAction } from 'actions/autoFill'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const autoFill = useAutoFillFieldAction(props)
          return useMemo(() => {
            return [autoFill]
          }, [autoFill])
        }
      }
    })
  ]
})
```

## Fill document from user input

This action will generate a new value for the document based on user provided input. It uses the `getUserInput` feature.

**actions/fillDocumentFromInput.ts**

```
import {type AssistFieldActionProps, defineAssistFieldAction, useUserInput} from '@sanity/assist'
import {useMemo} from 'react'
import {ComposeIcon} from '@sanity/icons'
import {useClient} from 'sanity'

export function useFillDocumentFromInput(props: AssistFieldActionProps) {
  const {
    actionType,
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    schemaId,
  } = props

  const client = useClient({apiVersion: 'vX'})
  const getUserInput = useUserInput()

  return useMemo(() => {
    if (actionType !== 'document') {
      return undefined
    }
    return defineAssistFieldAction({
      title: 'Fill document...',
      icon: ComposeIcon,
      onAction: async () => {
        const userInput = await getUserInput({
          title: 'What should the document be about?',
          inputs: [
            {
              id: 'topic',
              title: 'Instruction',
              description:
                'Describe what the document should be about. ' +
                'Feel free to provide material for that will be used to create the document.',
            },
          ],
        })

        if (!userInput) {
          return undefined // user closed the dialog
        }

        const [{result: instruction}] = userInput
        await client.agent.action.generate({
          schemaId,
          targetDocument: {
            operation: 'createIfNotExists',
            _id: documentIdForAction,
            _type: documentSchemaType.name,
            initialValues: getDocumentValue(),
          },
          instruction: `
            Populate a document in full, based on a user instruction.
            The document type is ${documentSchemaType.name}, and the document type title is ${documentSchemaType.title}
            Pay attention to the language used in the user description, and use the same language for the document content.
            ---
            The user instruction is:
            ${instruction}
            ---
                     `,
          target: {
            operation: 'set',
          },
          conditionalPaths: {
            paths: getConditionalPaths(),
          },
        })
      },
    })
  }, [
    actionType,
    client,
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    getUserInput,
    schemaId,
  ])
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useFillDocumentFromInput } from 'actions/fillDocumentFromInput'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const fillDocument = useFillDocumentFromInput(props)
          return useMemo(() => {
            return [fillDocument]
          }, [fillDocument])
        }
      }
    })
  ]
})
```

## Generate image from user input

This action will generate an image based on input from the user.

**actions/generateImageFromInput.ts**

```
import {
  type AssistFieldActionProps,
  defineAssistFieldAction,
  isType,
  useUserInput,
} from '@sanity/assist'
import {useMemo} from 'react'
import {ComposeIcon} from '@sanity/icons'
import {useClient} from 'sanity'

export function useGenerateImageFromInput(props: AssistFieldActionProps) {
  const {
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    path,
    schemaId,
    schemaType,
  } = props

  const client = useClient({apiVersion: 'vX'})
  const getUserInput = useUserInput()

  return useMemo(() => {
    // only add to image fields
    if (!isType(schemaType, 'image')) {
      return undefined
    }

    return defineAssistFieldAction({
      title: 'Generate image...',
      icon: ComposeIcon,
      onAction: async () => {
        const userInput = await getUserInput({
          title: 'Describe the image',
          inputs: [
            {
              id: 'image-description',
              title: 'Image description',
            },
          ],
        })
        if (!userInput) {
          return undefined // user closed the dialog
        }

        const [{result: instruction}] = userInput

        await client.agent.action.generate({
          schemaId,
          targetDocument: {
            operation: 'createIfNotExists',
            _id: documentIdForAction,
            _type: documentSchemaType.name,
            initialValues: getDocumentValue(),
          },
          instruction: `
            Create an image based on the following instruction:
            ${instruction}
            ---
                     `,
          target: {
            operation: 'set',
            path: [...path, 'asset'],
          },
          conditionalPaths: {
            paths: getConditionalPaths(),
          },
        })
      },
    })
  }, [
    client,
    documentIdForAction,
    documentSchemaType,
    getConditionalPaths,
    getDocumentValue,
    getUserInput,
    path,
    schemaId,
    schemaType,
  ])
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useGenerateImageFromInput } from 'actions/generateImageFromInput'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const generateImage = useGenerateImageFromInput(props)
          return useMemo(() => {
            return [generateImage]
          }, [generateImage])
        }
      }
    })
  ]
})
```

## Summarize the document to a field

This action reads the contents of the document, then summarizes it into the selected field.

**actions/summarizeDocument.ts**

```
import {type AssistFieldActionProps, defineAssistFieldAction, isType} from '@sanity/assist'
import {useMemo} from 'react'
import {EditIcon} from '@sanity/icons'
import {isArrayOfObjectsSchemaType, pathToString, SchemaType, useClient} from 'sanity'
import {useToast} from '@sanity/ui'

export function useSummarizeDocument(props: AssistFieldActionProps) {
  const {
    actionType,
    documentIdForAction,
    getConditionalPaths,
    getDocumentValue,
    path,
    schemaId,
    schemaType,
  } = props

  const client = useClient({apiVersion: 'vX'})
  const {push: pushToast} = useToast()

  return useMemo(() => {
    if (actionType !== 'field') {
      return undefined
    }

    const isSupportedType =
      isType(schemaType, 'string') || isType(schemaType, 'text') || isPortableTextArray(schemaType)
    if (!isSupportedType) {
      return undefined
    }

    const lastSegment = path.slice(-1)[0]
    if (
      typeof lastSegment !== 'string' ||
      !['summary', 'description'].some((contains) => lastSegment.toLowerCase().includes(contains))
    ) {
      return undefined
    }

    return defineAssistFieldAction({
      title: 'Summarize document',
      icon: EditIcon,
      onAction: async () => {
        if (!getDocumentValue()?._createdAt) {
          pushToast({
            title: 'Document is new',
            description:
              'The document is new, without meaningful content to summarize. Make an edit and try again.',
          })
          return
        }

        await client.agent.action.generate({
          schemaId,
          documentId: documentIdForAction,
          instruction: `
                        Given the following document:
                        $doc
                        ---
                        We are in the following field:
                        JSON-path: ${pathToString(path)}
                        Title: ${schemaType.title}
                        Description: ${schemaType.description ?? 'n/a'}
                        ---
                        Generate a summary of the document that is contextually relevant for the field.
                     `,
          instructionParams: {
            doc: {type: 'document'},
          },
          target: {
            operation: 'set',
            path,
          },
          conditionalPaths: {
            paths: getConditionalPaths(),
          },
        })
      },
    })
  }, [
    actionType,
    client,
    documentIdForAction,
    getConditionalPaths,
    getDocumentValue,
    path,
    schemaId,
    schemaType,
    pushToast,
  ])
}

export function isPortableTextArray(type: SchemaType) {
  return isArrayOfObjectsSchemaType(type) && type.of.some((t) => isType(t, 'block'))
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useSummarizeDocument } from 'actions/summarizeDocument'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const summarize = useSummarizeDocument(props)
          return useMemo(() => {
            return [summarize]
          }, [summarize])
        }
      }
    })
  ]
})
```

## Fix spelling

This action corrects the spelling in a field, including nested fields.

**actions/fixSpelling.ts**

```
import {type AssistFieldActionProps, defineAssistFieldAction} from '@sanity/assist'
import {useMemo} from 'react'
import {TranslateIcon} from '@sanity/icons'
import {useClient} from 'sanity'

export function useFixSpelling(props: AssistFieldActionProps) {
  const {documentIdForAction, getConditionalPaths, path, schemaId} = props

  const client = useClient({apiVersion: 'vX'})

  return useMemo(() => {
    return defineAssistFieldAction({
      title: 'Fix spelling',
      icon: TranslateIcon,
      onAction: async () => {
        await client.agent.action.transform({
          schemaId,
          documentId: documentIdForAction,
          instruction: 'Fix any spelling mistakes',
          // no need to send path for document actions
          target: path.length ? {path} : undefined,
          conditionalPaths: {paths: getConditionalPaths()},
        })
      },
    })
  }, [client, documentIdForAction, getConditionalPaths, path, schemaId])
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useFixSpelling } from 'actions/fixSpelling'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const spelling = useFixSpelling(props)
          return useMemo(() => {
            return [spelling]
          }, [spelling])
        }
      }
    })
  ]
})
```

## Translate to a user-defined language

This action takes user input for the language, and translates the document or field's contents to that language.

**actions/translateToAny.ts**

```
import {type AssistFieldActionProps, defineAssistFieldAction, useUserInput} from '@sanity/assist'
import {useMemo} from 'react'
import {TranslateIcon} from '@sanity/icons'
import {useClient} from 'sanity'

export function useTranslateToAny(props: AssistFieldActionProps) {
  const {documentIdForAction, getConditionalPaths, path, schemaId} = props

  const client = useClient({apiVersion: 'vX'})
  const getUserInput = useUserInput()

  return useMemo(() => {
    return defineAssistFieldAction({
      title: 'Translate to language...',
      icon: TranslateIcon,
      onAction: async () => {
        const userInput = await getUserInput({
          title: 'Translate',
          inputs: [
            {
              id: 'instruction',
              title: 'Language',
              description: 'Which language do you want to translate to?',
            },
          ],
        })

        if (!userInput) {
          return undefined // user closed the dialog
        }

        const [{result: userLanguage}] = userInput

        await client.agent.action.translate({
          schemaId,
          documentId: documentIdForAction,
          // this is just fox example purposes: it is reccomended to use real language ids, not ones provided by a user string
          toLanguage: {
            title: userLanguage,
            id: userLanguage,
          },
          // no need to send path for document actions
          target: path.length ? {path} : undefined,
          conditionalPaths: {paths: getConditionalPaths()},
        })
      },
    })
  }, [client, documentIdForAction, getConditionalPaths, path, schemaId, getUserInput])
}
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
import { useTranslateToAny } from 'actions/translateToAny'

export default defineConfig({
  // ... rest of your config
  plugins: [
    // ... rest of plugins,
    assist({
      fieldActions: {
        title: "My Actions",
        useFieldActions: (props) => {
          const translate = useTranslateToAny(props)
          return useMemo(() => {
            return [translate]
          }, [translate])
        }
      }
    })
  ]
})
```
