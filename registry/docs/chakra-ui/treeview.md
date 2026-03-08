# TreeView

```tsx
"use client"

import { TreeView, createTreeCollection } from "@chakra-ui/react"
import { LuFile, LuFolder } from "react-icons/lu"

export const TreeViewBasic = () => {
  return (
    <TreeView.Root collection={collection} maxW="sm">
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  )
}

interface Node {
  id: string
  name: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/zag-js", name: "zag-js" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/react", name: "react" },
              { id: "node_modules/@types/react-dom", name: "react-dom" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/index.ts", name: "index.ts" },
        ],
      },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
})

```

## Usage

```tsx
import { TreeView } from "@chakra-ui/react"
```

```tsx
<TreeView.Root>
  <TreeView.Label />
  <TreeView.Tree>
    <TreeView.Branch>
      <TreeView.BranchControl>
        <TreeView.BranchIndicator />
        <TreeView.BranchText />
      </TreeView.BranchControl>
      <TreeView.BranchContent>
        <TreeView.BranchIndentGuide />
        <TreeView.Item />
      </TreeView.BranchContent>
    </TreeView.Branch>
    <TreeView.Item />
  </TreeView.Tree>
</TreeView.Root>
```

> To setup the tree view, you need to use the
> [tree collection](https://ark-ui.com/docs/collections/tree-collection) to
> register the tree data.

## Shortcuts

### `TreeView.Node`

This component is a helper to manage the recursive rendering of the branch and
leaf nodes.

```tsx
<TreeView.Node
  showIndentGuide
  render={({ node, nodeState }) =>
    nodeState.isBranch ? (
      <TreeView.BranchControl>
        <TreeView.BranchText>{node.name}</TreeView.BranchText>
      </TreeView.BranchControl>
    ) : (
      <TreeView.Item>
        <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    )
  }
/>
```

is equivalent to:

```tsx
const TreeNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  )
}
```

## Examples
