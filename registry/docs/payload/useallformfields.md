## useAllFormFields

**To retrieve more than one field**, you can use the `useAllFormFields` hook. Unlike the `useFormFields` hook, this hook does not accept a "selector", and it always returns an array with type of `[fields: Fields, dispatch: React.Dispatch<Action>]]`.

**Warning:** Your component will re-render when *any* field changes, so use
this hook only if you absolutely need to.

You can do lots of powerful stuff by retrieving the full form state, like using built-in helper functions to reduce field state to values only, or to retrieve sibling data by path.

```tsx
'use client'
import { useAllFormFields } from '@payloadcms/ui'
import { reduceFieldsToValues, getSiblingData } from 'payload/shared'

const ExampleComponent: React.FC = () => {
  // the `fields` const will be equal to all fields' state,
  // and the `dispatchFields` method is usable to send field state up to the form
  const [fields, dispatchFields] = useAllFormFields();

  // Pass in fields, and indicate if you'd like to "unflatten" field data.
  // The result below will reflect the data stored in the form at the given time
  const formData = reduceFieldsToValues(fields, true);

  // Pass in field state and a path,
  // and you will be sent all sibling data of the path that you've specified
  const siblingData = getSiblingData(fields, 'someFieldName');

  return (
    // return some JSX here if necessary
  )
};
```

#### Updating other fields' values

If you are building a Custom Component, then you should use `setValue` which is returned from the `useField` hook to programmatically set your field's value. But if you're looking to update *another* field's value, you can use `dispatchFields` returned from `useAllFormFields`.

You can send the following actions to the `dispatchFields` function.

| Action                 | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| **`ADD_ROW`**          | Adds a row of data (useful in array / block field data)                    |
| **`DUPLICATE_ROW`**    | Duplicates a row of data (useful in array / block field data)              |
| **`MODIFY_CONDITION`** | Updates a field's conditional logic result (true / false)                  |
| **`MOVE_ROW`**         | Moves a row of data (useful in array / block field data)                   |
| **`REMOVE`**           | Removes a field from form state                                            |
| **`REMOVE_ROW`**       | Removes a row of data from form state (useful in array / block field data) |
| **`REPLACE_STATE`**    | Completely replaces form state                                             |
| **`UPDATE`**           | Update any property of a specific field's state                            |

To see types for each action supported within the `dispatchFields` hook, check out the Form types [here](https://github.com/payloadcms/payload/blob/main/packages/ui/src/forms/Form/types.ts).
