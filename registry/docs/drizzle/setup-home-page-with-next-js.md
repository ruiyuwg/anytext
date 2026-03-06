## Setup home page with Next.js

<Steps>
#### Define a TypeScript type

Define a TypeScript type for a todo item in `src/types/todoType.ts` with three properties: **`id`** of type **`number`**, **`text`** of type **`string`**, and **`done`** of type **`boolean`**. This type, named **`todoType`**, represents the structure of a typical todo item within your application.

```ts copy filename="src/types/todoType.ts"
export type todoType = {
  id: number;
  text: string;
  done: boolean;
};
```

#### Create a home page for a to-do application

1. **`src/components/todo.tsx`:**
   Create a `Todo` component that represents a single todo item. It includes features for displaying and editing the todo text, marking it as done with a checkbox, and providing actions for editing, saving, canceling, and deleting the todo.
2. **`src/components/addTodo.tsx`:**
   The `AddTodo` component provides a simple form for adding new todo items to the Todo app. It includes an input field for entering the todo text and a button for triggering the addition of the new todo.
3. **`src/components/todos.tsx`:**
   Create Todos components that represents the main interface of a Todo app. It manages the state of todo items, provides functions for creating, editing, toggling, and deleting todos, and renders the individual todo items using the `Todo` component.

\<CodeTabs items={\["todo.tsx", "addTodo.tsx", "todos.tsx"]}>

```tsx collapsable copy
"use client";
import { ChangeEvent, FC, useState } from "react";
import { todoType } from "@/types/todoType";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [text, setText] = useState(todo.text);

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };

  // Rendering the Todo component
  return (

      {/* Checkbox for marking the todo as done */}
      <input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      {/* Input field for todo text */}
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
      />
      {/* Action buttons for editing, saving, canceling, and deleting */}

        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save

        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit

        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close

        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete

        )}


  );
};

export default Todo;
```

```tsx collapsable copy
"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo: FC = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input);
    setInput("");
  };

  // Rendering the AddTodo component
  return (

      {/* Input field for entering new todo text */}
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleInput}
        value={input}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
        onClick={handleAdd}
      >
        Add


  );
};

export default AddTodo;
```

```
<CodeTab>
```

```tsx collapsable copy
"use client";
import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./todo";
import AddTodo from "./addTodo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoAction";

interface Props {
  todos: todoType[];
}

const Todos: FC = ({ todos }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  // Function to create a new todo item
  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    addTodo(id, text);
    setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
    toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  // Rendering the Todo List component
  return (

      To-do app

        {/* Mapping through todoItems and rendering Todo component for each */}
        {todoItems.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}

      {/* Adding Todo component for creating new todos */}


  );
};

export default Todos;
```

```
</CodeTab>
```

</CodeTabs>

Update the `page.tsx` file in the `src/app` folder to fetch the todo items from the database and render the `Todos` component:

```tsx copy filename="src/app/page.tsx"
import { getData } from "@/actions/todoAction";
import Todos from "@/components/todos";

export default async function Home() {
  const data = await getData();
  return;
}
```

</Steps>

## Basic file structure

This guide uses the following file structure:

```text
📦
 ├ 📂 migrations
 │  ├ 📂 meta
 │  └ 📜 0000_heavy_doctor_doom.sql
 ├ 📂 public
 ├ 📂 src
 │  ├ 📂 actions
 │  │  └ 📜 todoActions.ts
 │  ├ 📂 app
 │  │  ├ 📜 favicon.ico
 │  │  ├ 📜 globals.css
 │  │  ├ 📜 layout.tsx
 │  │  └ 📜 page.tsx
 │  ├ 📂 components
 │  │  ├ 📜 addTodo.tsx
 │  │  ├ 📜 todo.tsx
 │  │  └ 📜 todos.tsx
 │  └ 📂 db
 │  │  ├ 📜 drizzle.ts
 │  │  └ 📜 schema.ts
 │  └ 📂 types
 │     └ 📜 todoType.ts
 ├ 📜 .env
 ├ 📜 .eslintrc.json
 ├ 📜 .gitignore
 ├ 📜 drizzle.config.ts
 ├ 📜 next-env.d.ts
 ├ 📜 next.config.mjs
 ├ 📜 package-lock.json
 ├ 📜 package.json
 ├ 📜 postcss.config.mjs
 ├ 📜 README.md
 ├ 📜 tailwind.config.ts
 └ 📜 tsconfig.json
```

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

import Steps from "@mdx/Steps.astro";
import Npm from "@mdx/Npm.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import CodeTab from "@mdx/CodeTab.astro";
import Section from "@mdx/Section.astro";
import Callout from "@mdx/Callout.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

This tutorial demonstrates how to use **Drizzle ORM** with **Encore**, an open source backend framework with built-in infrastructure automation and observability.

<Prerequisites>
  - You should have the Encore CLI installed. You can install it with:
  ```bash
  # macOS
  brew install encoredev/tap/encore

# Linux

curl -L https://encore.dev/install.sh | bash
