On this page

Deprecated

This class is deprecated. The logs pumped through this class are incomplete. Please use tracing instead.

Playwright generates a lot of logs and they are accessible via the pluggable logger sink.

```
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.(async () => {  const browser = await chromium.launch({    logger: {      isEnabled: (name, severity) => name === 'api',      log: (name, severity, message, args) => console.log(`${name} ${message}`)    }  });  // ...})();
```

* * *

## Methods[​](#methods "Direct link to Methods")

### isEnabled[​](#logger-is-enabled "Direct link to isEnabled")

Added before v1.9 logger.isEnabled

Determines whether sink is interested in the logger with the given name and severity.

**Usage**

```
logger.isEnabled(name, severity);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#logger-is-enabled-option-name)
    
    logger name
    
-   `severity` "verbose" | "info" | "warning" | "error"[#](#logger-is-enabled-option-severity)
    

**Returns**

-   [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")[#](#logger-is-enabled-return)

* * *

### log[​](#logger-log "Direct link to log")

Added before v1.9 logger.log

**Usage**

```
logger.log(name, severity, message, args, hints);
```

**Arguments**

-   `name` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#logger-log-option-name)
    
    logger name
    
-   `severity` "verbose" | "info" | "warning" | "error"[#](#logger-log-option-severity)
    
-   `message` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [Error](https://nodejs.org/api/errors.html#errors_class_error "Error")[#](#logger-log-option-message)
    
    log message format
    
-   `args` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#logger-log-option-args)
    
    message arguments
    
-   `hints` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#logger-log-option-hints)
    
    -   `color` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_
        
        Optional preferred logger color.
        
    
    optional formatting hints
