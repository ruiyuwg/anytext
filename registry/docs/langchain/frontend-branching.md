## Branching

Create alternate conversation paths by editing previous messages or regenerating AI responses. Use `getMessagesMetadata()` to access checkpoint information for branching:

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import { BranchSwitcher } from "./BranchSwitcher";

function Chat() {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
  });

  return (
    
      {stream.messages.map((message) => {
        const meta = stream.getMessagesMetadata(message);
        const parentCheckpoint = meta?.firstSeenState?.parent_checkpoint;

        return (
          
            {message.content as string}

            {/* Edit human messages */}
            {message.type === "human" && (
              <button
                onClick={() => {
                  const newContent = prompt("Edit message:", message.content as string);
                  if (newContent) {
                    stream.submit(
                      { messages: [{ type: "human", content: newContent }] },
                      { checkpoint: parentCheckpoint }
                    );
                  }
                }}
              >
                Edit
              
            )}

            {/* Regenerate AI messages */}
            {message.type === "ai" && (
              <button
                onClick={() => stream.submit(undefined, { checkpoint: parentCheckpoint })}
              >
                Regenerate
              
            )}

            {/* Switch between branches */}
            <BranchSwitcher
              branch={meta?.branch}
              branchOptions={meta?.branchOptions}
              onSelect={(branch) => stream.setBranch(branch)}
            />
          
        );
      })}
    
  );
}
```

```tsx BranchSwitcher.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
/**
 * Component for navigating between conversation branches.
 * Shows the current branch position and allows switching between alternatives.
 */
export function BranchSwitcher({
  branch,
  branchOptions,
  onSelect,
}: {
  branch: string | undefined;
  branchOptions: string[] | undefined;
  onSelect: (branch: string) => void;
}) {
  if (!branchOptions || !branch) return null;
  const index = branchOptions.indexOf(branch);

  return (
    
      <button
        type="button"
        disabled={index <= 0}
        onClick={() => onSelect(branchOptions[index - 1])}
      >
        ←
      
      {index + 1} / {branchOptions.length}
      <button
        type="button"
        disabled={index >= branchOptions.length - 1}
        onClick={() => onSelect(branchOptions[index + 1])}
      >
        →
      
    
  );
}
```

For advanced use cases, use the `experimental_branchTree` property to get the tree representation of the thread for non-message based graphs.

See a complete implementation of conversation branching with edit, regenerate, and branch switching in the `branching-chat` example.
