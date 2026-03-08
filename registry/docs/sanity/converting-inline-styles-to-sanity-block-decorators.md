# Converting Inline Styles to Sanity Block Decorators

> \[!NOTE]
> This developer guide was contributed by KJ O'Brien (Senior Support Engineer).

When migrating rich text content from other CMS platforms into Sanity, you may encounter inline styles like `<span style="font-weight: bold;">`. By default, Sanity's `html-to-blocks` method doesn't handle these styles, leading to loss of formatting in the converted content. This guide walks you through creating custom deserialization rules to properly handle these cases. We'll also cover how to process nested spans, preserve spaces between words, and merge decorators effectively. By the end, you'll have a robust solution for rich text migration without losing valuable formatting.

### **Overview**

When migrating rich text content from another CMS to Sanity, inline styles (e.g., `<span style="font-weight: bold;">`) often need to be translated into decorators like `strong`, `em`, or `underline`. This guide walks you through customizing the `html-to-blocks` serialization to handle such cases, including nested spans with multiple styles.

### **Prerequisites**

- Familiarity with Sanity's [block](https://www.sanity.io/docs/studio/block-type) content structure.
- Installed `@sanity/block-tools` package.

### **The Problem**

By default, the `html-to-blocks` method handles common tags like `<strong>` and `<em>`, but inline styles like `<span style="font-weight: bold;">` are ignored. To convert these spans into appropriate decorators, we need to extend the deserialization rules.

### **A Solution**

**Custom Deserialization Rules**

The following code demonstrates how to handle spans with inline styles, including nested spans:

```javascript
const customRules = [
  {
    deserialize(el, next) {
      if (el.tagName === 'SPAN') {
        const style = el.style
        const marks = []

        // Collect marks from inline styles
        if (style?.fontWeight === 'bold' || style?.fontWeight >= 600) {
          marks.push('strong')
        }
        if (style?.fontStyle === 'italic') {
          marks.push('em')
        }
        if (style?.textDecoration.includes('underline')) {
          marks.push('underline')
        }

        // Initialize an array to hold the final processed spans
        const processedSpans = []

        // Process child nodes recursively
        Array.from(el.childNodes).forEach((node) => {
          if (node.nodeType === 3) {
            // Handle text nodes
            const text = node.nodeValue
            if (text) {
              processedSpans.push({
                _type: 'span',
                text,
                marks,
              })
            }
          } else {
            // Process child elements recursively
            const childNodes = next([node]).map((child) => {
              if (child._type === 'span') {
                return {
                  ...child,
                  marks: [...new Set([...(child.marks || []), ...marks])],
                }
              }
              return child
            })
            processedSpans.push(...childNodes)
          }
        })

        return processedSpans
      }

      return undefined // Pass to the next rule if not a span
    },
  },
]
```

### **Key Features**

1. **Handles Inline Styles:** Detects and converts `font-weight`, `font-style`, and `text-decoration` styles into Sanity decorators.
2. **Supports Nested Spans:** Processes nested spans by merging inherited and child decorators.
3. **Prevents Redundant Marks:** Uses `Set` to ensure each mark is applied only once.

### **How It Works**

- **Marks Collection:** The `style` property of the `<span>` tag is inspected to determine which marks to apply.
- **Child Node Processing:** Text nodes are wrapped into spans, and child elements are recursively processed with the accumulated marks.
- **Nested Styles:** For child elements, existing marks are merged with those inherited from the parent.

### **Testing the Solution**

To ensure your custom rules work as expected, test the following HTML input:

```html
<span style="font-weight: bold;">Want to <span style="font-style: italic;">learn <span style="text-decoration: underline;">a lot</span> more</span></span>
```

This should output:

```json
[
  {
    "_type": "span",
    "text": "Want to ",
    "marks": ["strong"]
  },
  {
    "_type": "span",
    "text": "learn ",
    "marks": ["strong", "em"]
  },
  {
    "_type": "span",
    "text": "a lot",
    "marks": ["strong", "em", "underline"]
  },
  {
    "_type": "span",
    "text": " more",
    "marks": ["strong", "em"]
  }
]

```

### **Conclusion**

This approach allows for seamless migration of rich text content with inline styles into Sanity's block content, enabling you to preserve the original formatting. For additional details, refer to the [@sanity/block-tools documentation](https://www.npmjs.com/package/@sanity/block-tools).
