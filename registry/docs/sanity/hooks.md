# Hooks

## useClient

| Method | Description |
| --- | --- |
| useClient(clientOptions): SanityClient | Returns an instance of SanityClient configured with the current project and dataset. Should be provided a configuration object specifying which API version to use for queries. Perspectives can be set by adding .withConfig({perspective: 'raw'}) to the client config. |

```javascript
import { useClient } from 'sanity'

export function MyComponent() {
  const [types, setTypes] = useState(undefined)
	const client = useClient({ apiVersion: '2023-01-01' }).withConfig({ perspective: 'raw'})
  
  useEffect(() => {
    async function fetchTypes() {
      const res = await client.fetch(`array::unique(*[]._type)`)
      setTypes(res)
    }
    if (!types) fetchTypes();
  }, [])

	return (
		<div>
			<h1>Types in project</h1>
				<ul>	
					{types && types.map(type => (
						<li key={type}>{type}</li>
					)}
				</ul>
		</div>
	)
}
```

## useDataset

| Method | Description |
| --- | --- |
| useDataset(): string | Returns the name of the current dataset |

```javascript
import { useDataset } from 'sanity'

export function MyComponent() {
	const dataset = useDataset()
	return (
		{dataset === 'production' ? <ProductionComponent /> : <StagingComponent />}
	)
}
```

## useProjectId

| Method | Description |
| --- | --- |
| useProjectId(): string | Returns the current project ID |

```javascript
import { useProjectId } from 'sanity'

export function MyComponent() {
	const pid = useProjectId()
	return (
			<h1>Project ID: {pid}</h1>
	)
}
```

## useFormValue

| Method | Description |
| --- | --- |
| useFormValue(path): unknown | Returns the value of the field specified by path. Paths are built using array notation with segments that can be either strings representing field names, index integers for arrays with simple values, or objects with a \_key for arrays containing objects. |

```javascript
import { useFormValue } from 'sanity'

export function MyComponent() {
	// ⬇ get value of field 'name' in object 'author'
  const authorName = useFormValue(['author', 'name'])
	// ⬇ get value of the second item in array 'tags' of type 'string'
	const secondTag = useFormValue(['tags', 1])
	// ⬇ get value of the reference with the matching key in an array of references
	const specificBook = useFormValue([ 'bibliography', {_key: '<key>'} ])

  return (
		<div>Author: {authorName}</div>
	)
}
```

## useSchema

| Method | Description |
| --- | --- |
| useSchema(): Schema | Returns the schema registry for the current project |

```javascript
import { useSchema } from 'sanity'

export function MyComponent() {
  const [selectedSchema, setSelectedSchema] = useState(undefined)
	
	// ⬇ the returned value contains the complete catalog of schemas in
	// the project, as well as some neat methods for interacting with them
  const schema = useSchema()

  // ⬇ returns an array of all type names in project
  const types = schema.getTypeNames()

  const handleSelect = (type) => {
		// ⬇ contrived example to show usage of 
		// both schema.has() and schema.get()
		if(schema.has(type)) {
			setSelectedSchema(schema.get(type))
		} else {
			setSelectedSchema(undefined)
		}
  }
  // ⬇ list all types in project and display schema for selected type
  return (
    <Container>
      <Card>
        {types.map((type) => (
          <button key={type} onClick={() => handleSelect(type)}>
            {type}
          </button>
        ))}
      </Card>
      <Card>
				{selectedSchema && (
					<pre>{JSON.stringify(selectedSchema, null, 2)}</pre>
				)}
			</Card>
    </Container>
  )
}
```

## useTemplates

| Method | Description |
| --- | --- |
| useTemplates(): Template\[] | Returns an array of initial value templates available in the project. Note that all document types have an initial value template associated that sets the value of \_type, even if no templates have been configured by user. |

```javascript
import { useTemplates } from 'sanity'

export function MyComponent() {
  const templates = useTemplates()

  return (
    <ul>
      {templates.map((template) => (
        <li key={template.id}>
          <h1>{template.title}</h1>
          <h2>Type: {template.schemaType}</h2>
        </li>
      ))}
    </ul>
  )
}
```

## useTools

| Method | Description |
| --- | --- |
| useTools():  Tool\[] | Returns an array listing all installed tools |

```javascript
import { useTools } from 'sanity'

export function MyComponent() {
  const tools = useTools();
  
	return (
		<div>
			<h1>Studio Tools</h1>
		  <ul>
				{tools.map(tool => <li key={tool.name}>{tool.title}</li>)}
			</ul>
		</div>
		)
}
```

## useWorkspace

| Method | Description |
| --- | --- |
| useWorkspace(): Workspace | Returns the current workspace configuration |

```javascript
import { useWorkspace } from 'sanity'
			
export function MyComponent() {
  const { currentUser: { name }, dataset } = useWorkspace();
	return (
		 <h1>Hello, {name}! You are currently working in {dataset}!</h1>
	)
}
```

## useDocumentStore

| Method | Description |
| --- | --- |
| useDocumentStore(): DocumentStore | Returns an observable that can be used to listen for changes and events to documents in the current project. |

```javascript
import {useMemo} from 'react'
import {useObservable} from 'react-rx'

const INITIAL_STATE = []

export function MyComponent() {
  const docId = useFormValue(['_id'])
  const documentStore = useDocumentStore();
  const observable = useMemo(() => 
    documentStore.listenQuery(
      `*[_type == 'article' && references($currentDoc) && !(_id in path("drafts.**"))]`,
      {currentDoc: docId},
      {}
    )
  , [documentStore, docId]);
  const results = useObservable(observable, INITIAL_STATE);  

	return (
	  /** Render component */
	)
}
```
