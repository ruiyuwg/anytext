Version: Next

On this page

API for controlling the Playwright debugger. The debugger allows pausing script execution and inspecting the page. Obtain the debugger instance via [browserContext.debugger](/docs/next/api/class-browsercontext#browser-context-debugger).

See also [page.pause()](/docs/next/api/class-page#page-pause) for a simple way to pause script execution.

* * *

## Methods[​](#methods "Direct link to Methods")

### pausedDetails[​](#debugger-paused-details "Direct link to pausedDetails")

Added in: v1.59 debugger.pausedDetails

Returns details about the currently paused calls. Returns an empty array if the debugger is not paused.

**Usage**

```
debugger.pausedDetails();
```

**Returns**

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#debugger-paused-details-return)
    -   `location` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
        
        -   `file` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `line` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
        -   `column` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
    -   `title` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        

* * *

### resume[​](#debugger-resume "Direct link to resume")

Added in: v1.59 debugger.resume

Resumes script execution if the debugger is paused.

**Usage**

```
await debugger.resume();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#debugger-resume-return)

* * *

### setPauseAt[​](#debugger-set-pause-at "Direct link to setPauseAt")

Added in: v1.59 debugger.setPauseAt

Configures the debugger to pause at the next action or at a specific source location. Call without arguments to reset the pausing behavior.

**Usage**

```
await debugger.setPauseAt();await debugger.setPauseAt(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `location` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#debugger-set-pause-at-option-location)
        
        -   `file` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
            
        -   `line` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
        -   `column` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_
            
        
        When specified, the debugger will pause when the action originates from the given source location.
        
    -   `next` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#debugger-set-pause-at-option-next)
        
        When `true`, the debugger will pause before the next action.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#debugger-set-pause-at-return)

* * *

## Events[​](#events "Direct link to Events")

### on('pausedstatechanged')[​](#debugger-event-paused-state-changed "Direct link to on('pausedstatechanged')")

Added in: v1.59 debugger.on('pausedstatechanged')

Emitted when the debugger pauses or resumes.

**Usage**

```
debugger.on('pausedstatechanged', data => {});
```
