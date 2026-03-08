[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")credentials

# providers/credentials

## CredentialInput[](#credentialinput)

Besides providing type safety inside [CredentialsConfig.authorize](credentials#authorize) it also determines how the credentials input fields will be rendered on the default sign in page.

### Extends[](#extends)

-   [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`JSX.IntrinsicElements`\[`"input"`\]>

### Properties[](#properties)

#### about?[](#about)

```
optional about: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from)

`Partial.about`

#### accept?[](#accept)

```
optional accept: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-1)

`Partial.accept`

#### accept-charset?[](#accept-charset)

```
optional accept-charset: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-2)

`Partial.accept-charset`

#### acceptCharset?[](#acceptcharset)

```
optional acceptCharset: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-3)

`Partial.acceptCharset`

#### accesskey?[](#accesskey)

```
optional accesskey: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-4)

`Partial.accesskey`

#### accessKey?[](#accesskey-1)

```
optional accessKey: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-5)

`Partial.accessKey`

#### action?[](#action)

```
optional action: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-6)

`Partial.action`

#### allow?[](#allow)

```
optional allow: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-7)

`Partial.allow`

#### allowFullScreen?[](#allowfullscreen)

```
optional allowFullScreen: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-8)

`Partial.allowFullScreen`

#### allowTransparency?[](#allowtransparency)

```
optional allowTransparency: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-9)

`Partial.allowTransparency`

#### alt?[](#alt)

```
optional alt: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-10)

`Partial.alt`

#### aria-activedescendant?[](#aria-activedescendant)

```
optional aria-activedescendant: Signalish<undefined | string>;
```

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

##### Inherited from[](#inherited-from-11)

`Partial.aria-activedescendant`

#### aria-atomic?[](#aria-atomic)

```
optional aria-atomic: Signalish<undefined | Booleanish>;
```

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

##### Inherited from[](#inherited-from-12)

`Partial.aria-atomic`

#### aria-autocomplete?[](#aria-autocomplete)

```
optional aria-autocomplete: Signalish<undefined | "none" | "list" | "inline" | "both">;
```

Indicates whether inputting text could trigger display of one or more predictions of the user’s intended value for an input and specifies how predictions would be presented if they are made.

##### Inherited from[](#inherited-from-13)

`Partial.aria-autocomplete`

#### aria-braillelabel?[](#aria-braillelabel)

```
optional aria-braillelabel: Signalish<undefined | string>;
```

Defines a string value that labels the current element, which is intended to be converted into Braille.

##### See[](#see)

aria-label.

##### Inherited from[](#inherited-from-14)

`Partial.aria-braillelabel`

#### aria-brailleroledescription?[](#aria-brailleroledescription)

```
optional aria-brailleroledescription: Signalish<undefined | string>;
```

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

##### See[](#see-1)

aria-roledescription.

##### Inherited from[](#inherited-from-15)

`Partial.aria-brailleroledescription`

#### aria-busy?[](#aria-busy)

```
optional aria-busy: Signalish<undefined | Booleanish>;
```

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

##### Inherited from[](#inherited-from-16)

`Partial.aria-busy`

#### aria-checked?[](#aria-checked)

```
optional aria-checked: Signalish<undefined | Booleanish | "mixed">;
```

Indicates the current “checked” state of checkboxes, radio buttons, and other widgets.

##### See[](#see-2)

-   aria-pressed
-   aria-selected.

##### Inherited from[](#inherited-from-17)

`Partial.aria-checked`

#### aria-colcount?[](#aria-colcount)

```
optional aria-colcount: Signalish<undefined | number>;
```

Defines the total number of columns in a table, grid, or treegrid.

##### See[](#see-3)

aria-colindex.

##### Inherited from[](#inherited-from-18)

`Partial.aria-colcount`

#### aria-colindex?[](#aria-colindex)

```
optional aria-colindex: Signalish<undefined | number>;
```

Defines an element’s column index or position with respect to the total number of columns within a table, grid, or treegrid.

##### See[](#see-4)

-   aria-colcount
-   aria-colspan.

##### Inherited from[](#inherited-from-19)

`Partial.aria-colindex`

#### aria-colindextext?[](#aria-colindextext)

```
optional aria-colindextext: Signalish<undefined | string>;
```

Defines a human readable text alternative of aria-colindex.

##### See[](#see-5)

aria-rowindextext.

##### Inherited from[](#inherited-from-20)

`Partial.aria-colindextext`

#### aria-colspan?[](#aria-colspan)

```
optional aria-colspan: Signalish<undefined | number>;
```

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

##### See[](#see-6)

-   aria-colindex
-   aria-rowspan.

##### Inherited from[](#inherited-from-21)

`Partial.aria-colspan`

#### aria-controls?[](#aria-controls)

```
optional aria-controls: Signalish<undefined | string>;
```

Identifies the element (or elements) whose contents or presence are controlled by the current element.

##### See[](#see-7)

aria-owns.

##### Inherited from[](#inherited-from-22)

`Partial.aria-controls`

#### aria-current?[](#aria-current)

```
optional aria-current: Signalish<undefined | "step" | "time" | "page" | Booleanish | "location" | "date">;
```

Indicates the element that represents the current item within a container or set of related elements.

##### Inherited from[](#inherited-from-23)

`Partial.aria-current`

#### aria-describedby?[](#aria-describedby)

```
optional aria-describedby: Signalish<undefined | string>;
```

Identifies the element (or elements) that describes the object.

##### See[](#see-8)

aria-labelledby

##### Inherited from[](#inherited-from-24)

`Partial.aria-describedby`

#### aria-description?[](#aria-description)

```
optional aria-description: Signalish<undefined | string>;
```

Defines a string value that describes or annotates the current element.

##### See[](#see-9)

related aria-describedby.

##### Inherited from[](#inherited-from-25)

`Partial.aria-description`

#### aria-details?[](#aria-details)

```
optional aria-details: Signalish<undefined | string>;
```

Identifies the element that provides a detailed, extended description for the object.

##### See[](#see-10)

aria-describedby.

##### Inherited from[](#inherited-from-26)

`Partial.aria-details`

#### aria-disabled?[](#aria-disabled)

```
optional aria-disabled: Signalish<undefined | Booleanish>;
```

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

##### See[](#see-11)

-   aria-hidden
-   aria-readonly.

##### Inherited from[](#inherited-from-27)

`Partial.aria-disabled`

#### aria-dropeffect?[](#aria-dropeffect)

```
optional aria-dropeffect: Signalish<undefined | "none" | "link" | "copy" | "execute" | "move" | "popup">;
```

Indicates what functions can be performed when a dragged object is released on the drop target.

##### Deprecated[](#deprecated)

in ARIA 1.1

##### Inherited from[](#inherited-from-28)

`Partial.aria-dropeffect`

#### aria-errormessage?[](#aria-errormessage)

```
optional aria-errormessage: Signalish<undefined | string>;
```

Identifies the element that provides an error message for the object.

##### See[](#see-12)

-   aria-invalid
-   aria-describedby.

##### Inherited from[](#inherited-from-29)

`Partial.aria-errormessage`

#### aria-expanded?[](#aria-expanded)

```
optional aria-expanded: Signalish<undefined | Booleanish>;
```

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

##### Inherited from[](#inherited-from-30)

`Partial.aria-expanded`

#### aria-flowto?[](#aria-flowto)

```
optional aria-flowto: Signalish<undefined | string>;
```

Identifies the next element (or elements) in an alternate reading order of content which, at the user’s discretion, allows assistive technology to override the general default of reading in document source order.

##### Inherited from[](#inherited-from-31)

`Partial.aria-flowto`

#### aria-grabbed?[](#aria-grabbed)

```
optional aria-grabbed: Signalish<undefined | Booleanish>;
```

Indicates an element’s “grabbed” state in a drag-and-drop operation.

##### Deprecated[](#deprecated-1)

in ARIA 1.1

##### Inherited from[](#inherited-from-32)

`Partial.aria-grabbed`

#### aria-haspopup?[](#aria-haspopup)

```
optional aria-haspopup: Signalish<undefined | "dialog" | "menu" | "grid" | Booleanish | "listbox" | "tree">;
```

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

##### Inherited from[](#inherited-from-33)

`Partial.aria-haspopup`

#### aria-hidden?[](#aria-hidden)

```
optional aria-hidden: Signalish<undefined | Booleanish>;
```

Indicates whether the element is exposed to an accessibility API.

##### See[](#see-13)

aria-disabled.

##### Inherited from[](#inherited-from-34)

`Partial.aria-hidden`

#### aria-invalid?[](#aria-invalid)

```
optional aria-invalid: Signalish<undefined | Booleanish | "grammar" | "spelling">;
```

Indicates the entered value does not conform to the format expected by the application.

##### See[](#see-14)

aria-errormessage.

##### Inherited from[](#inherited-from-35)

`Partial.aria-invalid`

#### aria-keyshortcuts?[](#aria-keyshortcuts)

```
optional aria-keyshortcuts: Signalish<undefined | string>;
```

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

##### Inherited from[](#inherited-from-36)

`Partial.aria-keyshortcuts`

#### aria-label?[](#aria-label)

```
optional aria-label: Signalish<undefined | string>;
```

Defines a string value that labels the current element.

##### See[](#see-15)

aria-labelledby.

##### Inherited from[](#inherited-from-37)

`Partial.aria-label`

#### aria-labelledby?[](#aria-labelledby)

```
optional aria-labelledby: Signalish<undefined | string>;
```

Identifies the element (or elements) that labels the current element.

##### See[](#see-16)

aria-describedby.

##### Inherited from[](#inherited-from-38)

`Partial.aria-labelledby`

#### aria-level?[](#aria-level)

```
optional aria-level: Signalish<undefined | number>;
```

Defines the hierarchical level of an element within a structure.

##### Inherited from[](#inherited-from-39)

`Partial.aria-level`

#### aria-live?[](#aria-live)

```
optional aria-live: Signalish<undefined | "off" | "assertive" | "polite">;
```

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

##### Inherited from[](#inherited-from-40)

`Partial.aria-live`

#### aria-modal?[](#aria-modal)

```
optional aria-modal: Signalish<undefined | Booleanish>;
```

Indicates whether an element is modal when displayed.

##### Inherited from[](#inherited-from-41)

`Partial.aria-modal`

#### aria-multiline?[](#aria-multiline)

```
optional aria-multiline: Signalish<undefined | Booleanish>;
```

Indicates whether a text box accepts multiple lines of input or only a single line.

##### Inherited from[](#inherited-from-42)

`Partial.aria-multiline`

#### aria-multiselectable?[](#aria-multiselectable)

```
optional aria-multiselectable: Signalish<undefined | Booleanish>;
```

Indicates that the user may select more than one item from the current selectable descendants.

##### Inherited from[](#inherited-from-43)

`Partial.aria-multiselectable`

#### aria-orientation?[](#aria-orientation)

```
optional aria-orientation: Signalish<undefined | "horizontal" | "vertical">;
```

Indicates whether the element’s orientation is horizontal, vertical, or unknown/ambiguous.

##### Inherited from[](#inherited-from-44)

`Partial.aria-orientation`

#### aria-owns?[](#aria-owns)

```
optional aria-owns: Signalish<undefined | string>;
```

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

##### See[](#see-17)

aria-controls.

##### Inherited from[](#inherited-from-45)

`Partial.aria-owns`

#### aria-placeholder?[](#aria-placeholder)

```
optional aria-placeholder: Signalish<undefined | string>;
```

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

##### Inherited from[](#inherited-from-46)

`Partial.aria-placeholder`

#### aria-posinset?[](#aria-posinset)

```
optional aria-posinset: Signalish<undefined | number>;
```

Defines an element’s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

##### See[](#see-18)

aria-setsize.

##### Inherited from[](#inherited-from-47)

`Partial.aria-posinset`

#### aria-pressed?[](#aria-pressed)

```
optional aria-pressed: Signalish<undefined | Booleanish | "mixed">;
```

Indicates the current “pressed” state of toggle buttons.

##### See[](#see-19)

-   aria-checked
-   aria-selected.

##### Inherited from[](#inherited-from-48)

`Partial.aria-pressed`

#### aria-readonly?[](#aria-readonly)

```
optional aria-readonly: Signalish<undefined | Booleanish>;
```

Indicates that the element is not editable, but is otherwise operable.

##### See[](#see-20)

aria-disabled.

##### Inherited from[](#inherited-from-49)

`Partial.aria-readonly`

#### aria-relevant?[](#aria-relevant)

```
optional aria-relevant: Signalish<
  | undefined
  | "text"
  | "all"
  | "additions"
  | "additions removals"
  | "additions text"
  | "removals"
  | "removals additions"
  | "removals text"
  | "text additions"
| "text removals">;
```

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

##### See[](#see-21)

aria-atomic.

##### Inherited from[](#inherited-from-50)

`Partial.aria-relevant`

#### aria-required?[](#aria-required)

```
optional aria-required: Signalish<undefined | Booleanish>;
```

Indicates that user input is required on the element before a form may be submitted.

##### Inherited from[](#inherited-from-51)

`Partial.aria-required`

#### aria-roledescription?[](#aria-roledescription)

```
optional aria-roledescription: Signalish<undefined | string>;
```

Defines a human-readable, author-localized description for the role of an element.

##### Inherited from[](#inherited-from-52)

`Partial.aria-roledescription`

#### aria-rowcount?[](#aria-rowcount)

```
optional aria-rowcount: Signalish<undefined | number>;
```

Defines the total number of rows in a table, grid, or treegrid.

##### See[](#see-22)

aria-rowindex.

##### Inherited from[](#inherited-from-53)

`Partial.aria-rowcount`

#### aria-rowindex?[](#aria-rowindex)

```
optional aria-rowindex: Signalish<undefined | number>;
```

Defines an element’s row index or position with respect to the total number of rows within a table, grid, or treegrid.

##### See[](#see-23)

-   aria-rowcount
-   aria-rowspan.

##### Inherited from[](#inherited-from-54)

`Partial.aria-rowindex`

#### aria-rowindextext?[](#aria-rowindextext)

```
optional aria-rowindextext: Signalish<undefined | string>;
```

Defines a human readable text alternative of aria-rowindex.

##### See[](#see-24)

aria-colindextext.

##### Inherited from[](#inherited-from-55)

`Partial.aria-rowindextext`

#### aria-rowspan?[](#aria-rowspan)

```
optional aria-rowspan: Signalish<undefined | number>;
```

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

##### See[](#see-25)

-   aria-rowindex
-   aria-colspan.

##### Inherited from[](#inherited-from-56)

`Partial.aria-rowspan`

#### aria-selected?[](#aria-selected)

```
optional aria-selected: Signalish<undefined | Booleanish>;
```

Indicates the current “selected” state of various widgets.

##### See[](#see-26)

-   aria-checked
-   aria-pressed.

##### Inherited from[](#inherited-from-57)

`Partial.aria-selected`

#### aria-setsize?[](#aria-setsize)

```
optional aria-setsize: Signalish<undefined | number>;
```

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

##### See[](#see-27)

aria-posinset.

##### Inherited from[](#inherited-from-58)

`Partial.aria-setsize`

#### aria-sort?[](#aria-sort)

```
optional aria-sort: Signalish<undefined | "none" | "ascending" | "descending" | "other">;
```

Indicates if items in a table or grid are sorted in ascending or descending order.

##### Inherited from[](#inherited-from-59)

`Partial.aria-sort`

#### aria-valuemax?[](#aria-valuemax)

```
optional aria-valuemax: Signalish<undefined | number>;
```

Defines the maximum allowed value for a range widget.

##### Inherited from[](#inherited-from-60)

`Partial.aria-valuemax`

#### aria-valuemin?[](#aria-valuemin)

```
optional aria-valuemin: Signalish<undefined | number>;
```

Defines the minimum allowed value for a range widget.

##### Inherited from[](#inherited-from-61)

`Partial.aria-valuemin`

#### aria-valuenow?[](#aria-valuenow)

```
optional aria-valuenow: Signalish<undefined | number>;
```

Defines the current value for a range widget.

##### See[](#see-28)

aria-valuetext.

##### Inherited from[](#inherited-from-62)

`Partial.aria-valuenow`

#### aria-valuetext?[](#aria-valuetext)

```
optional aria-valuetext: Signalish<undefined | string>;
```

Defines the human readable text alternative of aria-valuenow for a range widget.

##### Inherited from[](#inherited-from-63)

`Partial.aria-valuetext`

#### as?[](#as)

```
optional as: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-64)

`Partial.as`

#### async?[](#async)

```
optional async: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-65)

`Partial.async`

#### autocapitalize?[](#autocapitalize)

```
optional autocapitalize: 
  | "none"
  | "off"
  | "on"
  | "sentences"
  | "words"
  | "characters"
| SignalLike<undefined | "none" | "off" | "on" | "sentences" | "words" | "characters">;
```

##### Inherited from[](#inherited-from-66)

`Partial.autocapitalize`

#### autoCapitalize?[](#autocapitalize-1)

```
optional autoCapitalize: 
  | "none"
  | "off"
  | "on"
  | "sentences"
  | "words"
  | "characters"
| SignalLike<undefined | "none" | "off" | "on" | "sentences" | "words" | "characters">;
```

##### Inherited from[](#inherited-from-67)

`Partial.autoCapitalize`

#### autocomplete?[](#autocomplete)

```
optional autocomplete: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-68)

`Partial.autocomplete`

#### autoComplete?[](#autocomplete-1)

```
optional autoComplete: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-69)

`Partial.autoComplete`

#### autocorrect?[](#autocorrect)

```
optional autocorrect: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-70)

`Partial.autocorrect`

#### autoCorrect?[](#autocorrect-1)

```
optional autoCorrect: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-71)

`Partial.autoCorrect`

#### autofocus?[](#autofocus)

```
optional autofocus: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-72)

`Partial.autofocus`

#### autoFocus?[](#autofocus-1)

```
optional autoFocus: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-73)

`Partial.autoFocus`

#### autoplay?[](#autoplay)

```
optional autoplay: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-74)

`Partial.autoplay`

#### autoPlay?[](#autoplay-1)

```
optional autoPlay: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-75)

`Partial.autoPlay`

#### capture?[](#capture)

```
optional capture: string | boolean | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-76)

`Partial.capture`

#### cellPadding?[](#cellpadding)

```
optional cellPadding: string | number | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-77)

`Partial.cellPadding`

#### cellSpacing?[](#cellspacing)

```
optional cellSpacing: string | number | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-78)

`Partial.cellSpacing`

#### challenge?[](#challenge)

```
optional challenge: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-79)

`Partial.challenge`

#### charset?[](#charset)

```
optional charset: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-80)

`Partial.charset`

#### charSet?[](#charset-1)

```
optional charSet: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-81)

`Partial.charSet`

#### checked?[](#checked)

```
optional checked: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-82)

`Partial.checked`

#### children?[](#children)

```
optional children: ComponentChildren;
```

##### Inherited from[](#inherited-from-83)

`Partial.children`

#### cite?[](#cite)

```
optional cite: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-84)

`Partial.cite`

#### class?[](#class)

```
optional class: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-85)

`Partial.class`

#### className?[](#classname)

```
optional className: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-86)

`Partial.className`

#### cols?[](#cols)

```
optional cols: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-87)

`Partial.cols`

#### colspan?[](#colspan)

```
optional colspan: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-88)

`Partial.colspan`

#### colSpan?[](#colspan-1)

```
optional colSpan: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-89)

`Partial.colSpan`

#### content?[](#content)

```
optional content: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-90)

`Partial.content`

#### contenteditable?[](#contenteditable)

```
optional contenteditable: 
  | ""
  | Booleanish
  | "plaintext-only"
  | "inherit"
| SignalLike<"" | Booleanish | "plaintext-only" | "inherit" | undefined>;
```

##### Inherited from[](#inherited-from-91)

`Partial.contenteditable`

#### contentEditable?[](#contenteditable-1)

```
optional contentEditable: 
  | ""
  | Booleanish
  | "plaintext-only"
  | "inherit"
| SignalLike<"" | Booleanish | "plaintext-only" | "inherit" | undefined>;
```

##### Inherited from[](#inherited-from-92)

`Partial.contentEditable`

#### contextmenu?[](#contextmenu)

```
optional contextmenu: string | SignalLike<undefined | string>;
```

##### Deprecated[](#deprecated-2)

See [https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/contextmenu](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu)

##### Inherited from[](#inherited-from-93)

`Partial.contextmenu`

#### contextMenu?[](#contextmenu-1)

```
optional contextMenu: string | SignalLike<undefined | string>;
```

##### Deprecated[](#deprecated-3)

See [https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/contextmenu](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu)

##### Inherited from[](#inherited-from-94)

`Partial.contextMenu`

#### controls?[](#controls)

```
optional controls: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-95)

`Partial.controls`

#### controlsList?[](#controlslist)

```
optional controlsList: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-96)

`Partial.controlsList`

#### coords?[](#coords)

```
optional coords: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-97)

`Partial.coords`

#### crossorigin?[](#crossorigin)

```
optional crossorigin: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-98)

`Partial.crossorigin`

#### crossOrigin?[](#crossorigin-1)

```
optional crossOrigin: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-99)

`Partial.crossOrigin`

#### dangerouslySetInnerHTML?[](#dangerouslysetinnerhtml)

```
optional dangerouslySetInnerHTML: {
  __html: string;
};
```

##### \_\_html[](#__html)

```
__html: string;
```

##### Inherited from[](#inherited-from-100)

`Partial.dangerouslySetInnerHTML`

#### data?[](#data)

```
optional data: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-101)

`Partial.data`

#### datatype?[](#datatype)

```
optional datatype: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-102)

`Partial.datatype`

#### datetime?[](#datetime)

```
optional datetime: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-103)

`Partial.datetime`

#### dateTime?[](#datetime-1)

```
optional dateTime: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-104)

`Partial.dateTime`

#### decoding?[](#decoding)

```
optional decoding: 
  | "async"
  | "auto"
  | "sync"
| SignalLike<undefined | "async" | "auto" | "sync">;
```

##### Inherited from[](#inherited-from-105)

`Partial.decoding`

#### default?[](#default)

```
optional default: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-106)

`Partial.default`

#### defaultChecked?[](#defaultchecked)

```
optional defaultChecked: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-107)

`Partial.defaultChecked`

#### defaultValue?[](#defaultvalue)

```
optional defaultValue: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-108)

`Partial.defaultValue`

#### defer?[](#defer)

```
optional defer: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-109)

`Partial.defer`

#### dir?[](#dir)

```
optional dir: 
  | "auto"
  | "rtl"
  | "ltr"
| SignalLike<undefined | "auto" | "rtl" | "ltr">;
```

##### Inherited from[](#inherited-from-110)

`Partial.dir`

#### disabled?[](#disabled)

```
optional disabled: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-111)

`Partial.disabled`

#### disablePictureInPicture?[](#disablepictureinpicture)

```
optional disablePictureInPicture: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-112)

`Partial.disablePictureInPicture`

#### disableRemotePlayback?[](#disableremoteplayback)

```
optional disableRemotePlayback: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-113)

`Partial.disableRemotePlayback`

#### download?[](#download)

```
optional download: any;
```

##### Inherited from[](#inherited-from-114)

`Partial.download`

#### draggable?[](#draggable)

```
optional draggable: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-115)

`Partial.draggable`

#### elementtiming?[](#elementtiming)

```
optional elementtiming: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-116)

`Partial.elementtiming`

#### elementTiming?[](#elementtiming-1)

```
optional elementTiming: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-117)

`Partial.elementTiming`

#### enctype?[](#enctype)

```
optional enctype: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-118)

`Partial.enctype`

#### encType?[](#enctype-1)

```
optional encType: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-119)

`Partial.encType`

#### enterkeyhint?[](#enterkeyhint)

```
optional enterkeyhint: 
  | "search"
  | "enter"
  | "done"
  | "go"
  | "next"
  | "previous"
  | "send"
  | SignalLike<
  | undefined
  | "search"
  | "enter"
  | "done"
  | "go"
  | "next"
  | "previous"
| "send">;
```

##### Inherited from[](#inherited-from-120)

`Partial.enterkeyhint`

#### exportparts?[](#exportparts)

```
optional exportparts: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-121)

`Partial.exportparts`

#### for?[](#for)

```
optional for: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-122)

`Partial.for`

#### form?[](#form)

```
optional form: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-123)

`Partial.form`

#### formaction?[](#formaction)

```
optional formaction: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-124)

`Partial.formaction`

#### formAction?[](#formaction-1)

```
optional formAction: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-125)

`Partial.formAction`

#### formenctype?[](#formenctype)

```
optional formenctype: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-126)

`Partial.formenctype`

#### formEncType?[](#formenctype-1)

```
optional formEncType: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-127)

`Partial.formEncType`

#### formmethod?[](#formmethod)

```
optional formmethod: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-128)

`Partial.formmethod`

#### formMethod?[](#formmethod-1)

```
optional formMethod: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-129)

`Partial.formMethod`

#### formnovalidate?[](#formnovalidate)

```
optional formnovalidate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-130)

`Partial.formnovalidate`

#### formNoValidate?[](#formnovalidate-1)

```
optional formNoValidate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-131)

`Partial.formNoValidate`

#### formtarget?[](#formtarget)

```
optional formtarget: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-132)

`Partial.formtarget`

#### formTarget?[](#formtarget-1)

```
optional formTarget: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-133)

`Partial.formTarget`

#### frameborder?[](#frameborder)

```
optional frameborder: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-134)

`Partial.frameborder`

#### frameBorder?[](#frameborder-1)

```
optional frameBorder: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-135)

`Partial.frameBorder`

#### headers?[](#headers)

```
optional headers: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-136)

`Partial.headers`

#### height?[](#height)

```
optional height: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-137)

`Partial.height`

#### hidden?[](#hidden)

```
optional hidden: 
  | boolean
  | "hidden"
  | "until-found"
| SignalLike<undefined | boolean | "hidden" | "until-found">;
```

##### Inherited from[](#inherited-from-138)

`Partial.hidden`

#### high?[](#high)

```
optional high: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-139)

`Partial.high`

#### href?[](#href)

```
optional href: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-140)

`Partial.href`

#### hreflang?[](#hreflang)

```
optional hreflang: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-141)

`Partial.hreflang`

#### hrefLang?[](#hreflang-1)

```
optional hrefLang: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-142)

`Partial.hrefLang`

#### htmlFor?[](#htmlfor)

```
optional htmlFor: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-143)

`Partial.htmlFor`

#### http-equiv?[](#http-equiv)

```
optional http-equiv: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-144)

`Partial.http-equiv`

#### httpEquiv?[](#httpequiv)

```
optional httpEquiv: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-145)

`Partial.httpEquiv`

#### icon?[](#icon)

```
optional icon: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-146)

`Partial.icon`

#### id?[](#id)

```
optional id: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-147)

`Partial.id`

#### indeterminate?[](#indeterminate)

```
optional indeterminate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-148)

`Partial.indeterminate`

#### inert?[](#inert)

```
optional inert: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-149)

`Partial.inert`

#### inlist?[](#inlist)

```
optional inlist: any;
```

##### Inherited from[](#inherited-from-150)

`Partial.inlist`

#### inputmode?[](#inputmode)

```
optional inputmode: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-151)

`Partial.inputmode`

#### inputMode?[](#inputmode-1)

```
optional inputMode: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-152)

`Partial.inputMode`

#### integrity?[](#integrity)

```
optional integrity: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-153)

`Partial.integrity`

#### is?[](#is)

```
optional is: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-154)

`Partial.is`

#### itemid?[](#itemid)

```
optional itemid: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-155)

`Partial.itemid`

#### itemID?[](#itemid-1)

```
optional itemID: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-156)

`Partial.itemID`

#### itemprop?[](#itemprop)

```
optional itemprop: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-157)

`Partial.itemprop`

#### itemProp?[](#itemprop-1)

```
optional itemProp: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-158)

`Partial.itemProp`

#### itemref?[](#itemref)

```
optional itemref: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-159)

`Partial.itemref`

#### itemRef?[](#itemref-1)

```
optional itemRef: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-160)

`Partial.itemRef`

#### itemscope?[](#itemscope)

```
optional itemscope: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-161)

`Partial.itemscope`

#### itemScope?[](#itemscope-1)

```
optional itemScope: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-162)

`Partial.itemScope`

#### itemtype?[](#itemtype)

```
optional itemtype: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-163)

`Partial.itemtype`

#### itemType?[](#itemtype-1)

```
optional itemType: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-164)

`Partial.itemType`

#### jsx?[](#jsx)

```
optional jsx: boolean;
```

##### Inherited from[](#inherited-from-165)

`Partial.jsx`

#### key?[](#key)

```
optional key: any;
```

##### Inherited from[](#inherited-from-166)

`Partial.key`

#### keyParams?[](#keyparams)

```
optional keyParams: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-167)

`Partial.keyParams`

#### keyType?[](#keytype)

```
optional keyType: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-168)

`Partial.keyType`

#### kind?[](#kind)

```
optional kind: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-169)

`Partial.kind`

#### label?[](#label)

```
optional label: string;
```

##### Overrides[](#overrides)

`Partial.label`

#### lang?[](#lang)

```
optional lang: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-170)

`Partial.lang`

#### list?[](#list)

```
optional list: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-171)

`Partial.list`

#### loading?[](#loading)

```
optional loading: "lazy" | "eager" | SignalLike<undefined | "lazy" | "eager">;
```

##### Inherited from[](#inherited-from-172)

`Partial.loading`

#### loop?[](#loop)

```
optional loop: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-173)

`Partial.loop`

#### low?[](#low)

```
optional low: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-174)

`Partial.low`

#### manifest?[](#manifest)

```
optional manifest: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-175)

`Partial.manifest`

#### marginHeight?[](#marginheight)

```
optional marginHeight: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-176)

`Partial.marginHeight`

#### marginWidth?[](#marginwidth)

```
optional marginWidth: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-177)

`Partial.marginWidth`

#### max?[](#max)

```
optional max: string | number | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-178)

`Partial.max`

#### maxlength?[](#maxlength)

```
optional maxlength: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-179)

`Partial.maxlength`

#### maxLength?[](#maxlength-1)

```
optional maxLength: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-180)

`Partial.maxLength`

#### media?[](#media)

```
optional media: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-181)

`Partial.media`

#### mediaGroup?[](#mediagroup)

```
optional mediaGroup: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-182)

`Partial.mediaGroup`

#### method?[](#method)

```
optional method: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-183)

`Partial.method`

#### min?[](#min)

```
optional min: string | number | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-184)

`Partial.min`

#### minlength?[](#minlength)

```
optional minlength: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-185)

`Partial.minlength`

#### minLength?[](#minlength-1)

```
optional minLength: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-186)

`Partial.minLength`

#### multiple?[](#multiple)

```
optional multiple: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-187)

`Partial.multiple`

#### muted?[](#muted)

```
optional muted: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-188)

`Partial.muted`

#### name?[](#name)

```
optional name: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-189)

`Partial.name`

#### nomodule?[](#nomodule)

```
optional nomodule: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-190)

`Partial.nomodule`

#### nonce?[](#nonce)

```
optional nonce: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-191)

`Partial.nonce`

#### novalidate?[](#novalidate)

```
optional novalidate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-192)

`Partial.novalidate`

#### noValidate?[](#novalidate-1)

```
optional noValidate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-193)

`Partial.noValidate`

#### onAbort?[](#onabort)

```
optional onAbort: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-194)

`Partial.onAbort`

#### onAbortCapture?[](#onabortcapture)

```
optional onAbortCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-195)

`Partial.onAbortCapture`

#### onAnimationEnd?[](#onanimationend)

```
optional onAnimationEnd: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-196)

`Partial.onAnimationEnd`

#### onAnimationEndCapture?[](#onanimationendcapture)

```
optional onAnimationEndCapture: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-197)

`Partial.onAnimationEndCapture`

#### onAnimationIteration?[](#onanimationiteration)

```
optional onAnimationIteration: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-198)

`Partial.onAnimationIteration`

#### onAnimationIterationCapture?[](#onanimationiterationcapture)

```
optional onAnimationIterationCapture: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-199)

`Partial.onAnimationIterationCapture`

#### onAnimationStart?[](#onanimationstart)

```
optional onAnimationStart: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-200)

`Partial.onAnimationStart`

#### onAnimationStartCapture?[](#onanimationstartcapture)

```
optional onAnimationStartCapture: AnimationEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-201)

`Partial.onAnimationStartCapture`

#### onBeforeInput?[](#onbeforeinput)

```
optional onBeforeInput: InputEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-202)

`Partial.onBeforeInput`

#### onBeforeInputCapture?[](#onbeforeinputcapture)

```
optional onBeforeInputCapture: InputEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-203)

`Partial.onBeforeInputCapture`

#### onBlur?[](#onblur)

```
optional onBlur: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-204)

`Partial.onBlur`

#### onBlurCapture?[](#onblurcapture)

```
optional onBlurCapture: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-205)

`Partial.onBlurCapture`

#### onCancel?[](#oncancel)

```
optional onCancel: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-206)

`Partial.onCancel`

#### onCanPlay?[](#oncanplay)

```
optional onCanPlay: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-207)

`Partial.onCanPlay`

#### onCanPlayCapture?[](#oncanplaycapture)

```
optional onCanPlayCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-208)

`Partial.onCanPlayCapture`

#### onCanPlayThrough?[](#oncanplaythrough)

```
optional onCanPlayThrough: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-209)

`Partial.onCanPlayThrough`

#### onCanPlayThroughCapture?[](#oncanplaythroughcapture)

```
optional onCanPlayThroughCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-210)

`Partial.onCanPlayThroughCapture`

#### onChange?[](#onchange)

```
optional onChange: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-211)

`Partial.onChange`

#### onChangeCapture?[](#onchangecapture)

```
optional onChangeCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-212)

`Partial.onChangeCapture`

#### onClick?[](#onclick)

```
optional onClick: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-213)

`Partial.onClick`

#### onClickCapture?[](#onclickcapture)

```
optional onClickCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-214)

`Partial.onClickCapture`

#### onClose?[](#onclose)

```
optional onClose: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-215)

`Partial.onClose`

#### onCompositionEnd?[](#oncompositionend)

```
optional onCompositionEnd: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-216)

`Partial.onCompositionEnd`

#### onCompositionEndCapture?[](#oncompositionendcapture)

```
optional onCompositionEndCapture: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-217)

`Partial.onCompositionEndCapture`

#### onCompositionStart?[](#oncompositionstart)

```
optional onCompositionStart: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-218)

`Partial.onCompositionStart`

#### onCompositionStartCapture?[](#oncompositionstartcapture)

```
optional onCompositionStartCapture: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-219)

`Partial.onCompositionStartCapture`

#### onCompositionUpdate?[](#oncompositionupdate)

```
optional onCompositionUpdate: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-220)

`Partial.onCompositionUpdate`

#### onCompositionUpdateCapture?[](#oncompositionupdatecapture)

```
optional onCompositionUpdateCapture: CompositionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-221)

`Partial.onCompositionUpdateCapture`

#### onContextMenu?[](#oncontextmenu)

```
optional onContextMenu: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-222)

`Partial.onContextMenu`

#### onContextMenuCapture?[](#oncontextmenucapture)

```
optional onContextMenuCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-223)

`Partial.onContextMenuCapture`

#### onCopy?[](#oncopy)

```
optional onCopy: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-224)

`Partial.onCopy`

#### onCopyCapture?[](#oncopycapture)

```
optional onCopyCapture: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-225)

`Partial.onCopyCapture`

#### onCut?[](#oncut)

```
optional onCut: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-226)

`Partial.onCut`

#### onCutCapture?[](#oncutcapture)

```
optional onCutCapture: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-227)

`Partial.onCutCapture`

#### onDblClick?[](#ondblclick)

```
optional onDblClick: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-228)

`Partial.onDblClick`

#### onDblClickCapture?[](#ondblclickcapture)

```
optional onDblClickCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-229)

`Partial.onDblClickCapture`

#### onDrag?[](#ondrag)

```
optional onDrag: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-230)

`Partial.onDrag`

#### onDragCapture?[](#ondragcapture)

```
optional onDragCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-231)

`Partial.onDragCapture`

#### onDragEnd?[](#ondragend)

```
optional onDragEnd: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-232)

`Partial.onDragEnd`

#### onDragEndCapture?[](#ondragendcapture)

```
optional onDragEndCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-233)

`Partial.onDragEndCapture`

#### onDragEnter?[](#ondragenter)

```
optional onDragEnter: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-234)

`Partial.onDragEnter`

#### onDragEnterCapture?[](#ondragentercapture)

```
optional onDragEnterCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-235)

`Partial.onDragEnterCapture`

#### onDragExit?[](#ondragexit)

```
optional onDragExit: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-236)

`Partial.onDragExit`

#### onDragExitCapture?[](#ondragexitcapture)

```
optional onDragExitCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-237)

`Partial.onDragExitCapture`

#### onDragLeave?[](#ondragleave)

```
optional onDragLeave: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-238)

`Partial.onDragLeave`

#### onDragLeaveCapture?[](#ondragleavecapture)

```
optional onDragLeaveCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-239)

`Partial.onDragLeaveCapture`

#### onDragOver?[](#ondragover)

```
optional onDragOver: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-240)

`Partial.onDragOver`

#### onDragOverCapture?[](#ondragovercapture)

```
optional onDragOverCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-241)

`Partial.onDragOverCapture`

#### onDragStart?[](#ondragstart)

```
optional onDragStart: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-242)

`Partial.onDragStart`

#### onDragStartCapture?[](#ondragstartcapture)

```
optional onDragStartCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-243)

`Partial.onDragStartCapture`

#### onDrop?[](#ondrop)

```
optional onDrop: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-244)

`Partial.onDrop`

#### onDropCapture?[](#ondropcapture)

```
optional onDropCapture: DragEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-245)

`Partial.onDropCapture`

#### onDurationChange?[](#ondurationchange)

```
optional onDurationChange: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-246)

`Partial.onDurationChange`

#### onDurationChangeCapture?[](#ondurationchangecapture)

```
optional onDurationChangeCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-247)

`Partial.onDurationChangeCapture`

#### onEmptied?[](#onemptied)

```
optional onEmptied: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-248)

`Partial.onEmptied`

#### onEmptiedCapture?[](#onemptiedcapture)

```
optional onEmptiedCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-249)

`Partial.onEmptiedCapture`

#### onEncrypted?[](#onencrypted)

```
optional onEncrypted: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-250)

`Partial.onEncrypted`

#### onEncryptedCapture?[](#onencryptedcapture)

```
optional onEncryptedCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-251)

`Partial.onEncryptedCapture`

#### onEnded?[](#onended)

```
optional onEnded: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-252)

`Partial.onEnded`

#### onEndedCapture?[](#onendedcapture)

```
optional onEndedCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-253)

`Partial.onEndedCapture`

#### onEnterPictureInPicture?[](#onenterpictureinpicture)

```
optional onEnterPictureInPicture: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-254)

`Partial.onEnterPictureInPicture`

#### onEnterPictureInPictureCapture?[](#onenterpictureinpicturecapture)

```
optional onEnterPictureInPictureCapture: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-255)

`Partial.onEnterPictureInPictureCapture`

#### onError?[](#onerror)

```
optional onError: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-256)

`Partial.onError`

#### onErrorCapture?[](#onerrorcapture)

```
optional onErrorCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-257)

`Partial.onErrorCapture`

#### onFocus?[](#onfocus)

```
optional onFocus: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-258)

`Partial.onFocus`

#### onFocusCapture?[](#onfocuscapture)

```
optional onFocusCapture: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-259)

`Partial.onFocusCapture`

#### onFocusIn?[](#onfocusin)

```
optional onFocusIn: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-260)

`Partial.onFocusIn`

#### onFocusInCapture?[](#onfocusincapture)

```
optional onFocusInCapture: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-261)

`Partial.onFocusInCapture`

#### onFocusOut?[](#onfocusout)

```
optional onFocusOut: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-262)

`Partial.onFocusOut`

#### onFocusOutCapture?[](#onfocusoutcapture)

```
optional onFocusOutCapture: FocusEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-263)

`Partial.onFocusOutCapture`

#### onFormData?[](#onformdata)

```
optional onFormData: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-264)

`Partial.onFormData`

#### onFormDataCapture?[](#onformdatacapture)

```
optional onFormDataCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-265)

`Partial.onFormDataCapture`

#### onGotPointerCapture?[](#ongotpointercapture)

```
optional onGotPointerCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-266)

`Partial.onGotPointerCapture`

#### onGotPointerCaptureCapture?[](#ongotpointercapturecapture)

```
optional onGotPointerCaptureCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-267)

`Partial.onGotPointerCaptureCapture`

#### onInput?[](#oninput)

```
optional onInput: InputEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-268)

`Partial.onInput`

#### onInputCapture?[](#oninputcapture)

```
optional onInputCapture: InputEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-269)

`Partial.onInputCapture`

#### onInvalid?[](#oninvalid)

```
optional onInvalid: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-270)

`Partial.onInvalid`

#### onInvalidCapture?[](#oninvalidcapture)

```
optional onInvalidCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-271)

`Partial.onInvalidCapture`

#### onKeyDown?[](#onkeydown)

```
optional onKeyDown: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-272)

`Partial.onKeyDown`

#### onKeyDownCapture?[](#onkeydowncapture)

```
optional onKeyDownCapture: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-273)

`Partial.onKeyDownCapture`

#### onKeyPress?[](#onkeypress)

```
optional onKeyPress: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-274)

`Partial.onKeyPress`

#### onKeyPressCapture?[](#onkeypresscapture)

```
optional onKeyPressCapture: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-275)

`Partial.onKeyPressCapture`

#### onKeyUp?[](#onkeyup)

```
optional onKeyUp: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-276)

`Partial.onKeyUp`

#### onKeyUpCapture?[](#onkeyupcapture)

```
optional onKeyUpCapture: KeyboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-277)

`Partial.onKeyUpCapture`

#### onLeavePictureInPicture?[](#onleavepictureinpicture)

```
optional onLeavePictureInPicture: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-278)

`Partial.onLeavePictureInPicture`

#### onLeavePictureInPictureCapture?[](#onleavepictureinpicturecapture)

```
optional onLeavePictureInPictureCapture: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-279)

`Partial.onLeavePictureInPictureCapture`

#### onLoad?[](#onload)

```
optional onLoad: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-280)

`Partial.onLoad`

#### onLoadCapture?[](#onloadcapture)

```
optional onLoadCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-281)

`Partial.onLoadCapture`

#### onLoadedData?[](#onloadeddata)

```
optional onLoadedData: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-282)

`Partial.onLoadedData`

#### onLoadedDataCapture?[](#onloadeddatacapture)

```
optional onLoadedDataCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-283)

`Partial.onLoadedDataCapture`

#### onLoadedMetadata?[](#onloadedmetadata)

```
optional onLoadedMetadata: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-284)

`Partial.onLoadedMetadata`

#### onLoadedMetadataCapture?[](#onloadedmetadatacapture)

```
optional onLoadedMetadataCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-285)

`Partial.onLoadedMetadataCapture`

#### onLoadStart?[](#onloadstart)

```
optional onLoadStart: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-286)

`Partial.onLoadStart`

#### onLoadStartCapture?[](#onloadstartcapture)

```
optional onLoadStartCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-287)

`Partial.onLoadStartCapture`

#### onLostPointerCapture?[](#onlostpointercapture)

```
optional onLostPointerCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-288)

`Partial.onLostPointerCapture`

#### onLostPointerCaptureCapture?[](#onlostpointercapturecapture)

```
optional onLostPointerCaptureCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-289)

`Partial.onLostPointerCaptureCapture`

#### onMouseDown?[](#onmousedown)

```
optional onMouseDown: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-290)

`Partial.onMouseDown`

#### onMouseDownCapture?[](#onmousedowncapture)

```
optional onMouseDownCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-291)

`Partial.onMouseDownCapture`

#### onMouseEnter?[](#onmouseenter)

```
optional onMouseEnter: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-292)

`Partial.onMouseEnter`

#### onMouseEnterCapture?[](#onmouseentercapture)

```
optional onMouseEnterCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-293)

`Partial.onMouseEnterCapture`

#### onMouseLeave?[](#onmouseleave)

```
optional onMouseLeave: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-294)

`Partial.onMouseLeave`

#### onMouseLeaveCapture?[](#onmouseleavecapture)

```
optional onMouseLeaveCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-295)

`Partial.onMouseLeaveCapture`

#### onMouseMove?[](#onmousemove)

```
optional onMouseMove: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-296)

`Partial.onMouseMove`

#### onMouseMoveCapture?[](#onmousemovecapture)

```
optional onMouseMoveCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-297)

`Partial.onMouseMoveCapture`

#### onMouseOut?[](#onmouseout)

```
optional onMouseOut: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-298)

`Partial.onMouseOut`

#### onMouseOutCapture?[](#onmouseoutcapture)

```
optional onMouseOutCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-299)

`Partial.onMouseOutCapture`

#### onMouseOver?[](#onmouseover)

```
optional onMouseOver: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-300)

`Partial.onMouseOver`

#### onMouseOverCapture?[](#onmouseovercapture)

```
optional onMouseOverCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-301)

`Partial.onMouseOverCapture`

#### onMouseUp?[](#onmouseup)

```
optional onMouseUp: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-302)

`Partial.onMouseUp`

#### onMouseUpCapture?[](#onmouseupcapture)

```
optional onMouseUpCapture: MouseEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-303)

`Partial.onMouseUpCapture`

#### onPaste?[](#onpaste)

```
optional onPaste: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-304)

`Partial.onPaste`

#### onPasteCapture?[](#onpastecapture)

```
optional onPasteCapture: ClipboardEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-305)

`Partial.onPasteCapture`

#### onPause?[](#onpause)

```
optional onPause: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-306)

`Partial.onPause`

#### onPauseCapture?[](#onpausecapture)

```
optional onPauseCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-307)

`Partial.onPauseCapture`

#### onPlay?[](#onplay)

```
optional onPlay: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-308)

`Partial.onPlay`

#### onPlayCapture?[](#onplaycapture)

```
optional onPlayCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-309)

`Partial.onPlayCapture`

#### onPlaying?[](#onplaying)

```
optional onPlaying: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-310)

`Partial.onPlaying`

#### onPlayingCapture?[](#onplayingcapture)

```
optional onPlayingCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-311)

`Partial.onPlayingCapture`

#### onPointerCancel?[](#onpointercancel)

```
optional onPointerCancel: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-312)

`Partial.onPointerCancel`

#### onPointerCancelCapture?[](#onpointercancelcapture)

```
optional onPointerCancelCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-313)

`Partial.onPointerCancelCapture`

#### onPointerDown?[](#onpointerdown)

```
optional onPointerDown: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-314)

`Partial.onPointerDown`

#### onPointerDownCapture?[](#onpointerdowncapture)

```
optional onPointerDownCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-315)

`Partial.onPointerDownCapture`

#### onPointerEnter?[](#onpointerenter)

```
optional onPointerEnter: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-316)

`Partial.onPointerEnter`

#### onPointerEnterCapture?[](#onpointerentercapture)

```
optional onPointerEnterCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-317)

`Partial.onPointerEnterCapture`

#### onPointerLeave?[](#onpointerleave)

```
optional onPointerLeave: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-318)

`Partial.onPointerLeave`

#### onPointerLeaveCapture?[](#onpointerleavecapture)

```
optional onPointerLeaveCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-319)

`Partial.onPointerLeaveCapture`

#### onPointerMove?[](#onpointermove)

```
optional onPointerMove: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-320)

`Partial.onPointerMove`

#### onPointerMoveCapture?[](#onpointermovecapture)

```
optional onPointerMoveCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-321)

`Partial.onPointerMoveCapture`

#### onPointerOut?[](#onpointerout)

```
optional onPointerOut: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-322)

`Partial.onPointerOut`

#### onPointerOutCapture?[](#onpointeroutcapture)

```
optional onPointerOutCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-323)

`Partial.onPointerOutCapture`

#### onPointerOver?[](#onpointerover)

```
optional onPointerOver: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-324)

`Partial.onPointerOver`

#### onPointerOverCapture?[](#onpointerovercapture)

```
optional onPointerOverCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-325)

`Partial.onPointerOverCapture`

#### onPointerUp?[](#onpointerup)

```
optional onPointerUp: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-326)

`Partial.onPointerUp`

#### onPointerUpCapture?[](#onpointerupcapture)

```
optional onPointerUpCapture: PointerEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-327)

`Partial.onPointerUpCapture`

#### onProgress?[](#onprogress)

```
optional onProgress: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-328)

`Partial.onProgress`

#### onProgressCapture?[](#onprogresscapture)

```
optional onProgressCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-329)

`Partial.onProgressCapture`

#### onRateChange?[](#onratechange)

```
optional onRateChange: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-330)

`Partial.onRateChange`

#### onRateChangeCapture?[](#onratechangecapture)

```
optional onRateChangeCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-331)

`Partial.onRateChangeCapture`

#### onReset?[](#onreset)

```
optional onReset: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-332)

`Partial.onReset`

#### onResetCapture?[](#onresetcapture)

```
optional onResetCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-333)

`Partial.onResetCapture`

#### onResize?[](#onresize)

```
optional onResize: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-334)

`Partial.onResize`

#### onResizeCapture?[](#onresizecapture)

```
optional onResizeCapture: PictureInPictureEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-335)

`Partial.onResizeCapture`

#### onScroll?[](#onscroll)

```
optional onScroll: UIEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-336)

`Partial.onScroll`

#### onScrollCapture?[](#onscrollcapture)

```
optional onScrollCapture: UIEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-337)

`Partial.onScrollCapture`

#### onScrollEnd?[](#onscrollend)

```
optional onScrollEnd: UIEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-338)

`Partial.onScrollEnd`

#### onSearch?[](#onsearch)

```
optional onSearch: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-339)

`Partial.onSearch`

#### onSearchCapture?[](#onsearchcapture)

```
optional onSearchCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-340)

`Partial.onSearchCapture`

#### onSeeked?[](#onseeked)

```
optional onSeeked: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-341)

`Partial.onSeeked`

#### onSeekedCapture?[](#onseekedcapture)

```
optional onSeekedCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-342)

`Partial.onSeekedCapture`

#### onSeeking?[](#onseeking)

```
optional onSeeking: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-343)

`Partial.onSeeking`

#### onSeekingCapture?[](#onseekingcapture)

```
optional onSeekingCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-344)

`Partial.onSeekingCapture`

#### onSelect?[](#onselect)

```
optional onSelect: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-345)

`Partial.onSelect`

#### onSelectCapture?[](#onselectcapture)

```
optional onSelectCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-346)

`Partial.onSelectCapture`

#### onStalled?[](#onstalled)

```
optional onStalled: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-347)

`Partial.onStalled`

#### onStalledCapture?[](#onstalledcapture)

```
optional onStalledCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-348)

`Partial.onStalledCapture`

#### onSubmit?[](#onsubmit)

```
optional onSubmit: SubmitEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-349)

`Partial.onSubmit`

#### onSubmitCapture?[](#onsubmitcapture)

```
optional onSubmitCapture: SubmitEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-350)

`Partial.onSubmitCapture`

#### onSuspend?[](#onsuspend)

```
optional onSuspend: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-351)

`Partial.onSuspend`

#### onSuspendCapture?[](#onsuspendcapture)

```
optional onSuspendCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-352)

`Partial.onSuspendCapture`

#### onTimeUpdate?[](#ontimeupdate)

```
optional onTimeUpdate: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-353)

`Partial.onTimeUpdate`

#### onTimeUpdateCapture?[](#ontimeupdatecapture)

```
optional onTimeUpdateCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-354)

`Partial.onTimeUpdateCapture`

#### onToggle?[](#ontoggle)

```
optional onToggle: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-355)

`Partial.onToggle`

#### onTouchCancel?[](#ontouchcancel)

```
optional onTouchCancel: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-356)

`Partial.onTouchCancel`

#### onTouchCancelCapture?[](#ontouchcancelcapture)

```
optional onTouchCancelCapture: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-357)

`Partial.onTouchCancelCapture`

#### onTouchEnd?[](#ontouchend)

```
optional onTouchEnd: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-358)

`Partial.onTouchEnd`

#### onTouchEndCapture?[](#ontouchendcapture)

```
optional onTouchEndCapture: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-359)

`Partial.onTouchEndCapture`

#### onTouchMove?[](#ontouchmove)

```
optional onTouchMove: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-360)

`Partial.onTouchMove`

#### onTouchMoveCapture?[](#ontouchmovecapture)

```
optional onTouchMoveCapture: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-361)

`Partial.onTouchMoveCapture`

#### onTouchStart?[](#ontouchstart)

```
optional onTouchStart: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-362)

`Partial.onTouchStart`

#### onTouchStartCapture?[](#ontouchstartcapture)

```
optional onTouchStartCapture: TouchEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-363)

`Partial.onTouchStartCapture`

#### onTransitionCancel?[](#ontransitioncancel)

```
optional onTransitionCancel: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-364)

`Partial.onTransitionCancel`

#### onTransitionCancelCapture?[](#ontransitioncancelcapture)

```
optional onTransitionCancelCapture: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-365)

`Partial.onTransitionCancelCapture`

#### onTransitionEnd?[](#ontransitionend)

```
optional onTransitionEnd: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-366)

`Partial.onTransitionEnd`

#### onTransitionEndCapture?[](#ontransitionendcapture)

```
optional onTransitionEndCapture: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-367)

`Partial.onTransitionEndCapture`

#### onTransitionRun?[](#ontransitionrun)

```
optional onTransitionRun: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-368)

`Partial.onTransitionRun`

#### onTransitionRunCapture?[](#ontransitionruncapture)

```
optional onTransitionRunCapture: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-369)

`Partial.onTransitionRunCapture`

#### onTransitionStart?[](#ontransitionstart)

```
optional onTransitionStart: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-370)

`Partial.onTransitionStart`

#### onTransitionStartCapture?[](#ontransitionstartcapture)

```
optional onTransitionStartCapture: TransitionEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-371)

`Partial.onTransitionStartCapture`

#### onVolumeChange?[](#onvolumechange)

```
optional onVolumeChange: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-372)

`Partial.onVolumeChange`

#### onVolumeChangeCapture?[](#onvolumechangecapture)

```
optional onVolumeChangeCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-373)

`Partial.onVolumeChangeCapture`

#### onWaiting?[](#onwaiting)

```
optional onWaiting: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-374)

`Partial.onWaiting`

#### onWaitingCapture?[](#onwaitingcapture)

```
optional onWaitingCapture: GenericEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-375)

`Partial.onWaitingCapture`

#### onWheel?[](#onwheel)

```
optional onWheel: WheelEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-376)

`Partial.onWheel`

#### onWheelCapture?[](#onwheelcapture)

```
optional onWheelCapture: WheelEventHandler<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-377)

`Partial.onWheelCapture`

#### open?[](#open)

```
optional open: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-378)

`Partial.open`

#### optimum?[](#optimum)

```
optional optimum: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-379)

`Partial.optimum`

#### part?[](#part)

```
optional part: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-380)

`Partial.part`

#### pattern?[](#pattern)

```
optional pattern: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-381)

`Partial.pattern`

#### ping?[](#ping)

```
optional ping: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-382)

`Partial.ping`

#### placeholder?[](#placeholder)

```
optional placeholder: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-383)

`Partial.placeholder`

#### playsinline?[](#playsinline)

```
optional playsinline: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-384)

`Partial.playsinline`

#### playsInline?[](#playsinline-1)

```
optional playsInline: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-385)

`Partial.playsInline`

#### popover?[](#popover)

```
optional popover: 
  | boolean
  | "auto"
  | "hint"
  | "manual"
| SignalLike<undefined | boolean | "auto" | "hint" | "manual">;
```

##### Inherited from[](#inherited-from-386)

`Partial.popover`

#### popovertarget?[](#popovertarget)

```
optional popovertarget: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-387)

`Partial.popovertarget`

#### popoverTarget?[](#popovertarget-1)

```
optional popoverTarget: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-388)

`Partial.popoverTarget`

#### popovertargetaction?[](#popovertargetaction)

```
optional popovertargetaction: 
  | "toggle"
  | "hide"
  | "show"
| SignalLike<undefined | "toggle" | "hide" | "show">;
```

##### Inherited from[](#inherited-from-389)

`Partial.popovertargetaction`

#### popoverTargetAction?[](#popovertargetaction-1)

```
optional popoverTargetAction: 
  | "toggle"
  | "hide"
  | "show"
| SignalLike<undefined | "toggle" | "hide" | "show">;
```

##### Inherited from[](#inherited-from-390)

`Partial.popoverTargetAction`

#### poster?[](#poster)

```
optional poster: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-391)

`Partial.poster`

#### prefix?[](#prefix)

```
optional prefix: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-392)

`Partial.prefix`

#### preload?[](#preload)

```
optional preload: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-393)

`Partial.preload`

#### property?[](#property)

```
optional property: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-394)

`Partial.property`

#### radioGroup?[](#radiogroup)

```
optional radioGroup: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-395)

`Partial.radioGroup`

#### readonly?[](#readonly)

```
optional readonly: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-396)

`Partial.readonly`

#### readOnly?[](#readonly-1)

```
optional readOnly: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-397)

`Partial.readOnly`

#### ref?[](#ref)

```
optional ref: Ref<HTMLInputElement>;
```

##### Inherited from[](#inherited-from-398)

`Partial.ref`

#### referrerpolicy?[](#referrerpolicy)

```
optional referrerpolicy: 
  | "origin"
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url"
  | SignalLike<
  | undefined
  | "origin"
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
| "unsafe-url">;
```

##### Inherited from[](#inherited-from-399)

`Partial.referrerpolicy`

#### rel?[](#rel)

```
optional rel: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-400)

`Partial.rel`

#### required?[](#required)

```
optional required: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-401)

`Partial.required`

#### resource?[](#resource)

```
optional resource: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-402)

`Partial.resource`

#### results?[](#results)

```
optional results: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-403)

`Partial.results`

#### reversed?[](#reversed)

```
optional reversed: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-404)

`Partial.reversed`

#### role?[](#role)

```
optional role: AriaRole | SignalLike<AriaRole | undefined>;
```

##### Inherited from[](#inherited-from-405)

`Partial.role`

#### rows?[](#rows)

```
optional rows: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-406)

`Partial.rows`

#### rowspan?[](#rowspan)

```
optional rowspan: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-407)

`Partial.rowspan`

#### rowSpan?[](#rowspan-1)

```
optional rowSpan: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-408)

`Partial.rowSpan`

#### sandbox?[](#sandbox)

```
optional sandbox: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-409)

`Partial.sandbox`

#### scope?[](#scope)

```
optional scope: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-410)

`Partial.scope`

#### scoped?[](#scoped)

```
optional scoped: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-411)

`Partial.scoped`

#### scrolling?[](#scrolling)

```
optional scrolling: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-412)

`Partial.scrolling`

#### seamless?[](#seamless)

```
optional seamless: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-413)

`Partial.seamless`

#### selected?[](#selected)

```
optional selected: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-414)

`Partial.selected`

#### shape?[](#shape)

```
optional shape: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-415)

`Partial.shape`

#### size?[](#size)

```
optional size: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-416)

`Partial.size`

#### sizes?[](#sizes)

```
optional sizes: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-417)

`Partial.sizes`

#### slot?[](#slot)

```
optional slot: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-418)

`Partial.slot`

#### span?[](#span)

```
optional span: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-419)

`Partial.span`

#### spellcheck?[](#spellcheck)

```
optional spellcheck: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-420)

`Partial.spellcheck`

#### src?[](#src)

```
optional src: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-421)

`Partial.src`

#### srcdoc?[](#srcdoc)

```
optional srcdoc: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-422)

`Partial.srcdoc`

#### srcDoc?[](#srcdoc-1)

```
optional srcDoc: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-423)

`Partial.srcDoc`

#### srclang?[](#srclang)

```
optional srclang: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-424)

`Partial.srclang`

#### srcLang?[](#srclang-1)

```
optional srcLang: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-425)

`Partial.srcLang`

#### srcset?[](#srcset)

```
optional srcset: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-426)

`Partial.srcset`

#### srcSet?[](#srcset-1)

```
optional srcSet: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-427)

`Partial.srcSet`

#### start?[](#start)

```
optional start: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-428)

`Partial.start`

#### step?[](#step)

```
optional step: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-429)

`Partial.step`

#### style?[](#style)

```
optional style: 
  | string
  | CSSProperties
| SignalLike<undefined | string | CSSProperties>;
```

##### Inherited from[](#inherited-from-430)

`Partial.style`

#### summary?[](#summary)

```
optional summary: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-431)

`Partial.summary`

#### tabindex?[](#tabindex)

```
optional tabindex: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-432)

`Partial.tabindex`

#### tabIndex?[](#tabindex-1)

```
optional tabIndex: number | SignalLike<undefined | number>;
```

##### Inherited from[](#inherited-from-433)

`Partial.tabIndex`

#### target?[](#target)

```
optional target: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-434)

`Partial.target`

#### title?[](#title)

```
optional title: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-435)

`Partial.title`

#### translate?[](#translate)

```
optional translate: boolean | SignalLike<undefined | boolean>;
```

##### Inherited from[](#inherited-from-436)

`Partial.translate`

#### type?[](#type)

```
optional type: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-437)

`Partial.type`

#### typeof?[](#typeof)

```
optional typeof: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-438)

`Partial.typeof`

#### usemap?[](#usemap)

```
optional usemap: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-439)

`Partial.usemap`

#### useMap?[](#usemap-1)

```
optional useMap: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-440)

`Partial.useMap`

#### value?[](#value)

```
optional value: 
  | string
  | number
  | string[]
| SignalLike<undefined | string | number | string[]>;
```

##### Inherited from[](#inherited-from-441)

`Partial.value`

#### vocab?[](#vocab)

```
optional vocab: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-442)

`Partial.vocab`

#### volume?[](#volume)

```
optional volume: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-443)

`Partial.volume`

#### width?[](#width)

```
optional width: string | number | SignalLike<undefined | string | number>;
```

##### Inherited from[](#inherited-from-444)

`Partial.width`

#### wmode?[](#wmode)

```
optional wmode: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-445)

`Partial.wmode`

#### wrap?[](#wrap)

```
optional wrap: string | SignalLike<undefined | string>;
```

##### Inherited from[](#inherited-from-446)

`Partial.wrap`

* * *

## CredentialsConfig<CredentialsInputs>[](#credentialsconfigcredentialsinputs)

The Credentials Provider needs to be configured.

### Extends[](#extends-1)

-   [`CommonProviderOptions`](../providers#commonprovideroptions)

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`CredentialsInputs` _extends_ [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](credentials#credentialinput)\>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](credentials#credentialinput)\>

### Properties[](#properties-1)

#### authorize()[](#authorize)

```
authorize: (credentials, request) => Awaitable<null | User>;
```

Gives full control over how you handle the credentials received from the user.

⚠️

There is no validation on the user inputs by default, so make sure you do so by a popular library like [Zod](https://zod.dev)

This method expects a `User` object to be returned for a successful login.

If an `CredentialsSignin` is thrown or `null` is returned, two things can happen:

1.  The user is redirected to the login page, with `error=CredentialsSignin&code=credentials` in the URL. `code` is configurable, see below.
2.  If you throw this error in a framework that handles form actions server-side, this error is thrown by the login form action, so you’ll need to handle it there.

In case of 1., generally, we recommend not hinting if the user for example gave a wrong username or password specifically, try rather something like “invalid-credentials”. Try to be as generic with client-side errors as possible.

To customize the error code, you can create a custom error that extends CredentialsSignin and throw it in `authorize`.

##### Parameters[](#parameters)

Parameter

Type

Description

`credentials`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<keyof `CredentialsInputs`, `unknown`\>>

The available keys are determined by [CredentialInput](credentials#credentialinput). **Note** The existence/correctness of a field cannot be guaranteed at compile time, so you should always validate the input before using it. You can add basic validation depending on your use case, or you can use a popular library like [Zod](https://zod.dev) for example.

`request`

[`Request`](https://developer.mozilla.org/docs/Web/API/Request)

The original request.

##### Returns[](#returns)

[`Awaitable`](../types#awaitablet)<`null` | [`User`](../types#user-2)\>

##### Examples[](#examples)

```
class CustomError extends CredentialsSignin {
 code = "custom_error"
}
// URL will contain `error=CredentialsSignin&code=custom_error`
```

```
async authorize(credentials, request) { // you have access to the original request as well
  if(!isValidCredentials(credentials)) {
     throw new CustomError()
  }
  return await getUser(credentials) // assuming it returns a User or null
}
```

#### credentials[](#credentials)

```
credentials: CredentialsInputs;
```

#### id[](#id-1)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

##### Inherited from[](#inherited-from-447)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`id`](../providers#id-1)

#### name[](#name-1)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Inherited from[](#inherited-from-448)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`name`](../providers#name-1)

#### type[](#type-1)

```
type: "credentials";
```

See [ProviderType](../providers#providertype)

##### Overrides[](#overrides-1)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`type`](../providers#type-1)

* * *

## CredentialsProviderId[](#credentialsproviderid)

```
type CredentialsProviderId = "credentials";
```

* * *

## default()[](#default-1)

```
function default<CredentialsInputs>(config): CredentialsConfig
```

The Credentials provider allows you to handle signing in with arbitrary credentials, such as a username and password, domain, or two factor authentication or hardware device (e.g. YubiKey U2F / FIDO).

It is intended to support use cases where you have an existing system you need to authenticate users against.

It comes with the constraint that users authenticated in this manner are not persisted in the database, and consequently that the Credentials provider can only be used if JSON Web Tokens are enabled for sessions.

⚠️

The functionality provided for credentials-based authentication is intentionally limited to discourage the use of passwords due to the inherent security risks of the username-password model.

OAuth providers spend significant amounts of money, time, and engineering effort to build:

-   abuse detection (bot-protection, rate-limiting)
-   password management (password reset, credential stuffing, rotation)
-   data security (encryption/salting, strength validation)

and much more for authentication solutions. It is likely that your application would benefit from leveraging these battle-tested solutions rather than try to rebuild them from scratch.

If you’d still like to build password-based authentication for your application despite these risks, Auth.js gives you full control to do so.

See the [callbacks documentation](/reference/core#authconfig#callbacks) for more information on how to interact with the token. For example, you can add additional information to the token by returning an object from the `jwt()` callback:

```
callbacks: {
  async jwt({ token, user, account, profile, isNewUser }) {
    if (user) {
      token.id = user.id
    }
    return token
  }
}
```

### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`CredentialsInputs` _extends_ [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](credentials#credentialinput)\>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](credentials#credentialinput)\>

### Parameters[](#parameters-1)

Parameter

Type

`config`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`CredentialsConfig`](credentials#credentialsconfigcredentialsinputs)<`CredentialsInputs`\>>

### Returns[](#returns-1)

[`CredentialsConfig`](credentials#credentialsconfigcredentialsinputs)

### Example[](#example)

```
import { Auth } from "@auth/core"
import Credentials from "@auth/core/providers/credentials"
 
const request = new Request("https://example.com")
const response = await AuthHandler(request, {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize({ request }) {
        const response = await fetch(request)
        if(!response.ok) return null
        return await response.json() ?? null
      }
    })
  ],
  secret: "...",
  trustHost: true,
})
```

### See[](#see-29)

[Username/Password Example](https://authjs.dev/getting-started/authentication/credentials)

[concept2](/reference/core/providers/concept2 "concept2")[descope](/reference/core/providers/descope "descope")
