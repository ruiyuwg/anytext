Skip to main content

menu

menuDocs

- Introduction

  - [What is Angular?](/overview)
  - [Installation](/installation)
  - Essentials
  - [Start coding! 🚀](/tutorials/learn-angular)

- In-depth Guides

  - Signals Updated
  - Components
  - Templates
  - Directives
  - Dependency Injection Updated
  - Routing Updated
  - Forms Updated
  - HTTP Client
  - Server-side & hybrid-rendering
  - Testing
  - Angular Aria New
  - Internationalization
  - Animations Updated
  - [Drag and drop](/guide/drag-drop)

- Build with AI New

  - [Get Started](/ai)
  - [LLM prompts and AI IDE setup](/ai/develop-with-ai)
  - [Design Patterns](/ai/design-patterns)
  - [Angular CLI MCP Server setup](/ai/mcp)
  - [Angular AI Tutor](/ai/ai-tutor)

- Developer Tools

  - Angular CLI
  - Libraries
  - DevTools
  - [Language Service](/tools/language-service)

- Best Practices

  - [Style Guide Updated](/style-guide)
  - [Security](/best-practices/security)
  - [Accessibility](/best-practices/a11y)
  - [Unhandled errors in Angular](/best-practices/error-handling)
  - Performance
  - [Keeping up-to-date](/update)

- Developer Events

  - [Angular v21 Release New](/events/v21)

- Extended Ecosystem

  - [NgModules](/guide/ngmodules/overview)
  - Legacy Animations
  - Using RxJS with Angular
  - Service Workers & PWAs
  - [Web workers](/ecosystem/web-workers)
  - [Custom build pipeline](/ecosystem/custom-build-pipeline)
  - [Tailwind New](/guide/tailwind)
  - [Angular Fire](https://github.com/angular/angularfire#readme)
  - [Google Maps](https://github.com/angular/components/tree/main/src/google-maps#readme)
  - [Google Pay](https://github.com/google-pay/google-pay-button#angular)
  - [YouTube player](https://github.com/angular/components/blob/main/src/youtube-player/README.md)
  - [Angular CDK](https://material.angular.dev/cdk/categories)
  - [Angular Material](https://material.angular.dev/)

- arrow\_back Forms Updated
  - [Overview](/guide/forms)
  - Signal Forms
  - [Overview New](/guide/forms/signals/overview)
  - [Form models New](/guide/forms/signals/models)
  - [Form model design New](/guide/forms/signals/model-design)
  - [Field state management New](/guide/forms/signals/field-state-management)
  - [Validation New](/guide/forms/signals/validation)
  - [Form logic New](/guide/forms/signals/form-logic)
  - [Async operations New](/guide/forms/signals/async-operations)
  - [Custom controls New](/guide/forms/signals/custom-controls)
  - [Comparison with other form systems New](/guide/forms/signals/comparison)
  - [Migrating from Reactive Forms New](/guide/forms/signals/migration)
  - Reactive Forms
  - [Reactive forms](/guide/forms/reactive-forms)
  - [Strictly typed reactive forms](/guide/forms/typed-forms)
  - [Validate form input](/guide/forms/form-validation)
  - [Building dynamic forms](/guide/forms/dynamic-forms)
  - Template driven Forms
  - [Template-driven forms](/guide/forms/template-driven-forms)
  - [Validate form input](/guide/forms/form-validation)

Reactive forms provide a model-driven approach to handling form inputs whose values change over time. This guide shows you how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where you can add or remove controls at run time.

arrow\_upward\_alt Back to the top

## [Overview of reactive forms](#overview-of-reactive-forms)

Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously.

Reactive forms also provide a straightforward path to testing because you are assured that your data is consistent and predictable when requested. Any consumers of the streams have access to manipulate that data safely.

Reactive forms differ from [template-driven forms](guide/forms/template-driven-forms) in distinct ways. Reactive forms provide synchronous access to the data model, immutability with observable operators, and change tracking through observable streams.

Template-driven forms let direct access modify data in your template, but are less explicit than reactive forms because they rely on directives embedded in the template, along with mutable data to track changes asynchronously. See the [Forms Overview](guide/forms) for detailed comparisons between the two paradigms.

## [Adding a basic form control](#adding-a-basic-form-control)

There are three steps to using form controls.

1. Generate a new component and register the reactive forms module. This module declares the reactive-form directives that you need to use reactive forms.
2. Instantiate a new [`FormControl`](/api/forms/FormControl).
3. Register the [`FormControl`](/api/forms/FormControl) in the template.

You can then display the form by adding the component to the template.

The following examples show how to add a single form control. In the example, the user enters their name into an input field, captures that input value, and displays the current value of the form control element.

1. ### [Generate a new component and import the ReactiveFormsModule](#generate-a-new-component-and-import-the-reactiveformsmodule)

   Use the CLI command `ng generate component` to generate a component in your project and import [`ReactiveFormsModule`](/api/forms/ReactiveFormsModule) from the `@angular/forms` package and add it to your Component's `imports` array.

   ### name-editor.component.ts (excerpt)

   ```
   import {FormControl, ReactiveFormsModule} from '@angular/forms';@Component({  selector: 'app-name-editor',  templateUrl: './name-editor.component.html',  styleUrls: ['./name-editor.component.css'],  imports: [ReactiveFormsModule],})export class NameEditorComponent {
   ```

2. ### [Declare a FormControl instance](#declare-a-formcontrol-instance)

   Use the constructor of [`FormControl`](/api/forms/FormControl) to set its initial value, which in this case is an empty string. By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input.

   ### name-editor.component.ts

   ```
   import {Component} from '@angular/core';import {FormControl, ReactiveFormsModule} from '@angular/forms';@Component({  selector: 'app-name-editor',  templateUrl: './name-editor.component.html',  styleUrls: ['./name-editor.component.css'],  imports: [ReactiveFormsModule],})export class NameEditorComponent {  name = new FormControl('');}
   ```

3. ### [Register the control in the template](#register-the-control-in-the-template)

   After you create the control in the component class, you must associate it with a form control element in the template. Update the template with the form control using the [`formControl`](/api/forms/SelectMultipleControlValueAccessor) binding provided by [`FormControlDirective`](/api/forms/FormControlDirective), which is also included in the [`ReactiveFormsModule`](/api/forms/ReactiveFormsModule).

   ### name-editor.component.html

   ```
   Name: 
   ```

   Using the template binding syntax, the form control is now registered to the `name` input element in the template. The form control and DOM element communicate with each other: the view reflects changes in the model, and the model reflects changes in the view.

4. ### [Display the component](#display-the-component)

   The [`FormControl`](/api/forms/FormControl) assigned to the `name` property is displayed when the `<app-name-editor>` component is added to a template.

   ### app.component.html (name editor)

   ```
   ```

### [Displaying a form control value](#displaying-a-form-control-value)

You can display the value in the following ways.

- Through the `valueChanges` observable where you can listen for changes in the form's value in the template using [`AsyncPipe`](/api/common/AsyncPipe) or in the component class using the `subscribe()` method
- With the `value` property, which gives you a snapshot of the current value

The following example shows you how to display the current value using interpolation in the template.

### name-editor.component.html (control value)

```
<p>Value: {{ name.value }}</p>
```

The displayed value changes as you update the form control element.

Reactive forms provide access to information about a given control through properties and methods provided with each instance. These properties and methods of the underlying [AbstractControl](api/forms/AbstractControl "API reference") class are used to control form state and determine when to display messages when handling [input validation](#validating-form-input "Learn more about validating form input").

Read about other [`FormControl`](/api/forms/FormControl) properties and methods in the [API Reference](api/forms/FormControl "Detailed syntax reference").

### [Replacing a form control value](#replacing-a-form-control-value)

Reactive forms have methods to change a control's value programmatically, which gives you the flexibility to update the value without user interaction. A form control instance provides a `setValue()` method that updates the value of the form control and validates the structure of the value provided against the control's structure. For example, when retrieving form data from a backend API or service, use the `setValue()` method to update the control to its new value, replacing the old value entirely.

The following example adds a method to the component class to update the value of the control to *Nancy* using the `setValue()` method.

### name-editor.component.ts (update value)

```
updateName() {    this.name.setValue('Nancy');  }
```

Update the template with a button to simulate a name update. When you click the **Update Name** button, the value entered in the form control element is reflected as its current value.

### name-editor.component.html (update value)

```
<button type="button" (click)="updateName()">Update Name</button>
```

The form model is the source of truth for the control, so when you click the button, the value of the input is changed within the component class, overriding its current value.

**HELPFUL:** In this example, you're using a single control. When using the `setValue()` method with a [form group](#grouping-form-controls) or [form array](#creating-dynamic-forms) instance, the value needs to match the structure of the group or array.

## [Grouping form controls](#grouping-form-controls)

Forms typically contain several related controls. Reactive forms provide two ways of grouping multiple related controls into a single input form.

Form groups

Details

Form group

Defines a form with a fixed set of controls that you can manage together. Form group basics are discussed in this section. You can also [nest form groups](#creating-nested-form-groups "See more about nesting groups") to create more complex forms.

Form array

Defines a dynamic form, where you can add and remove controls at run time. You can also nest form arrays to create more complex forms. For more about this option, see [Creating dynamic forms](#creating-dynamic-forms).

Just as a form control instance gives you control over a single input field, a form group instance tracks the form state of a group of form control instances (for example, a form). Each control in a form group instance is tracked by name when creating the form group. The following example shows how to manage multiple form control instances in a single group.

Generate a `ProfileEditor` component and import the [`FormGroup`](/api/forms/FormGroup) and [`FormControl`](/api/forms/FormControl) classes from the `@angular/forms` package.

```
ng generate component ProfileEditor
```

### profile-editor.component.ts (imports)

```
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';@Component({  selector: 'app-profile-editor',  templateUrl: './profile-editor.component.html',  styleUrls: ['./profile-editor.component.css'],  imports: [ReactiveFormsModule],})export class ProfileEditorComponent {
```

To add a form group to this component, take the following steps.

1. Create a [`FormGroup`](/api/forms/FormGroup) instance.

2. Associate the [`FormGroup`](/api/forms/FormGroup) model and view.

3. Save the form data.

4. ### [Create a FormGroup instance](#create-a-formgroup-instance)

   Create a property in the component class named `profileForm` and set the property to a new form group instance. To initialize the form group, provide the constructor with an object of named keys mapped to their control.

   For the profile form, add two form control instances with the names `firstName` and `lastName`

   ### profile-editor.component.ts (form group)

   ```
   import {Component} from '@angular/core';import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';@Component({  selector: 'app-profile-editor',  templateUrl: './profile-editor.component.html',  styleUrls: ['./profile-editor.component.css'],  imports: [ReactiveFormsModule],})export class ProfileEditorComponent {  profileForm = new FormGroup({    firstName: new FormControl(''),    lastName: new FormControl(''),  });}
   ```

   The individual form controls are now collected within a group. A [`FormGroup`](/api/forms/FormGroup) instance provides its model value as an object reduced from the values of each control in the group. A form group instance has the same properties (such as `value` and `untouched`) and methods (such as `setValue()`) as a form control instance.

5. ### [Associate the FormGroup model and view](#associate-the-formgroup-model-and-view)

   A form group tracks the status and changes for each of its controls, so if one of the controls changes, the parent control also emits a new status or value change. The model for the group is maintained from its members. After you define the model, you must update the template to reflect the model in the view.

   ### profile-editor.component.html (template form group)

   ```
     First Name:     Last Name:   
   ```

   Just as a form group contains a group of controls, the *profileForm* [`FormGroup`](/api/forms/FormGroup) is bound to the `form` element with the [`FormGroup`](/api/forms/FormGroup) directive, creating a communication layer between the model and the form containing the inputs. The [`formControlName`](/api/forms/SelectMultipleControlValueAccessor) input provided by the [`FormControlName`](/api/forms/FormControlName) directive binds each individual input to the form control defined in [`FormGroup`](/api/forms/FormGroup). The form controls communicate with their respective elements. They also communicate changes to the form group instance, which provides the source of truth for the model value.

6. ### [Save form data](#save-form-data)

   The `ProfileEditor` component accepts input from the user, but in a real scenario you want to capture the form value and make it available for further processing outside the component. The [`FormGroup`](/api/forms/FormGroup) directive listens for the [`submit`](/api/forms/signals/submit) event emitted by the `form` element and emits an `ngSubmit` event that you can bind to a callback function. Add an `ngSubmit` event listener to the `form` tag with the `onSubmit()` callback method.

   ### profile-editor.component.html (submit event)

   ```
   ```

   The `onSubmit()` method in the `ProfileEditor` component captures the current value of `profileForm`. Use [`EventEmitter`](/api/core/EventEmitter) to keep the form encapsulated and to provide the form value outside the component. The following example uses `console.warn` to log a message to the browser console.

   ### profile-editor.component.ts (submit method)

   ```
   onSubmit() {    // TODO: Use EventEmitter with form value    console.warn(this.profileForm.value);  }
   ```

   The [`submit`](/api/forms/signals/submit) event is emitted by the `form` tag using the built-in DOM event. You trigger the event by clicking a button with [`submit`](/api/forms/signals/submit) type. This lets the user press the **Enter** key to submit the completed form.

   Use a `button` element to add a button to the bottom of the form to trigger the form submission.

   ### profile-editor.component.html (submit button)

   ```
   Complete the form to enable button.  Submit
   ```

   The button in the preceding snippet also has a `disabled` binding attached to it to disable the button when `profileForm` is invalid. You aren't performing any validation yet, so the button is always enabled. Basic form validation is covered in the [Validating form input](#validating-form-input) section.

7. ### [Display the component](#display-the-component)

   To display the `ProfileEditor` component that contains the form, add it to a component template.

   ### app.component.html (profile editor)

   ```
   ```

   `ProfileEditor` lets you manage the form control instances for the `firstName` and `lastName` controls within the form group instance.

   ### [Creating nested form groups](#creating-nested-form-groups)

   Form groups can accept both individual form control instances and other form group instances as children. This makes composing complex form models easier to maintain and logically group together.

   When building complex forms, managing the different areas of information is easier in smaller sections. Using a nested form group instance lets you break large forms groups into smaller, more manageable ones.

   To make more complex forms, use the following steps.

   1. Create a nested group.
   2. Group the nested form in the template.

   Some types of information naturally fall into the same group. A name and address are typical examples of such nested groups, and are used in the following examples.

   To create a nested group in \`profileForm\`, add a nested \`address\` element to the form group instance.

   ### profile-editor.component.ts (nested form group)

   ```
   import {Component} from '@angular/core';import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';@Component({  selector: 'app-profile-editor',  templateUrl: './profile-editor.component.html',  styleUrls: ['./profile-editor.component.css'],  imports: [ReactiveFormsModule],})export class ProfileEditorComponent {  profileForm = new FormGroup({    firstName: new FormControl(''),    lastName: new FormControl(''),    address: new FormGroup({      street: new FormControl(''),      city: new FormControl(''),      state: new FormControl(''),      zip: new FormControl(''),    }),  });}
   ```

   In this example, `address group` combines the current `firstName` and `lastName` controls with the new `street`, `city`, `state`, and `zip` controls. Even though the `address` element in the form group is a child of the overall `profileForm` element in the form group, the same rules apply with value and status changes. Changes in status and value from the nested form group propagate to the parent form group, maintaining consistency with the overall model.

8. ### [Group the nested form in the template](#group-the-nested-form-in-the-template)

   After you update the model in the component class, update the template to connect the form group instance and its input elements. Add the `address` form group containing the `street`, `city`, `state`, and `zip` fields to the `ProfileEditor` template.

   ### profile-editor.component.html (template nested form group)

   ```
       Address    Street:         City:         State:         Zip Code:       
   ```

   The `ProfileEditor` form is displayed as one group, but the model is broken down further to represent the logical grouping areas.

   Display the value for the form group instance in the component template using the `value` property and [`JsonPipe`](/api/common/JsonPipe).

### [Updating parts of the data model](#updating-parts-of-the-data-model)

When updating the value for a form group instance that contains multiple controls, you might only want to update parts of the model. This section covers how to update specific parts of a form control data model.

There are two ways to update the model value:

Methods

Details

`setValue()`

Set a new value for an individual control. The `setValue()` method strictly adheres to the structure of the form group and replaces the entire value for the control.

`patchValue()`

Replace any properties defined in the object that have changed in the form model.

The strict checks of the `setValue()` method help catch nesting errors in complex forms, while `patchValue()` fails silently on those errors.

In `ProfileEditorComponent`, use the `updateProfile` method with the following example to update the first name and street address for the user.

### profile-editor.component.ts (patch value)

```
updateProfile() {    this.profileForm.patchValue({      firstName: 'Nancy',      address: {        street: '123 Drew Street',      },    });  }
```

Simulate an update by adding a button to the template to update the user profile on demand.

### profile-editor.component.html (update value)

```
<button type="button" (click)="updateProfile()">Update Profile</button>
```

When a user clicks the button, the `profileForm` model is updated with new values for `firstName` and `street`. Notice that `street` is provided in an object inside the `address` property. This is necessary because the `patchValue()` method applies the update against the model structure. `PatchValue()` only updates properties that the form model defines.

## [Using the FormBuilder service to generate controls](#using-the-formbuilder-service-to-generate-controls)

Creating form control instances manually can become repetitive when dealing with multiple forms. The [`FormBuilder`](/api/forms/FormBuilder) service provides convenient methods for generating controls.

Use the following steps to take advantage of this service.

1. Import the [`FormBuilder`](/api/forms/FormBuilder) class.
2. Inject the [`FormBuilder`](/api/forms/FormBuilder) service.
3. Generate the form contents.

The following examples show how to refactor the `ProfileEditor` component to use the form builder service to create form control and form group instances.

1. ### [Import the FormBuilder class](#import-the-formbuilder-class)

   Import the [`FormBuilder`](/api/forms/FormBuilder) class from the `@angular/forms` package.

   ### profile-editor.component.ts (import)

   ```
   import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
   ```

2. ### [Inject the FormBuilder service](#inject-the-formbuilder-service)

   The [`FormBuilder`](/api/forms/FormBuilder) service is an injectable provider from the reactive forms module. Use the `inject()` function to inject this dependency in your component.

   ### profile-editor.component.ts (property init)

   ```
   private formBuilder = inject(FormBuilder);
   ```

3. ### [Generate form controls](#generate-form-controls)

   The [`FormBuilder`](/api/forms/FormBuilder) service has three methods: `control()`, `group()`, and `array()`. These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays. Use the `group` method to create the `profileForm` controls.

   ### profile-editor.component.ts (form builder)

   ```
   profileForm = this.formBuilder.group({    firstName: [''],    lastName: [''],    address: this.formBuilder.group({      street: [''],      city: [''],      state: [''],      zip: [''],    }),  });
   ```

   In the preceding example, you use the `group()` method with the same object to define the properties in the model. The value for each control name is an array containing the initial value as the first item in the array.

   **TIP:** You can define the control with just the initial value, but if your controls need sync or async validation, add sync and async validators as the second and third items in the array. Compare using the form builder to creating the instances manually.

   ### profile-editor.component.ts (instances)

   ```
   profileForm = new FormGroup({    firstName: new FormControl(''),    lastName: new FormControl(''),    address: new FormGroup({      street: new FormControl(''),      city: new FormControl(''),      state: new FormControl(''),      zip: new FormControl(''),    }),  });
   ```

   ### profile-editor.component.ts (form builder)

   ```
   profileForm = this.formBuilder.group({    firstName: [''],    lastName: [''],    address: this.formBuilder.group({      street: [''],      city: [''],      state: [''],      zip: [''],    }),  });
   ```

## [Validating form input](#validating-form-input)

*Form validation* is used to ensure that user input is complete and correct. This section covers adding a single validator to a form control and displaying the overall form status. Form validation is covered more extensively in the [Form Validation](guide/forms/form-validation) guide.

Use the following steps to add form validation.

1. Import a validator function in your form component.
2. Add the validator to the field in the form.
3. Add logic to handle the validation status.

The most common validation is making a field required. The following example shows how to add a required validation to the `firstName` control and display the result of validation.

1. ### [Import a validator function](#import-a-validator-function)

   Reactive forms include a set of validator functions for common use cases. These functions receive a control to validate against and return an error object or a null value based on the validation check.

   Import the [`Validators`](/api/forms/Validators) class from the `@angular/forms` package.

   ### profile-editor.component.ts (import)

   ```
   import {Validators} from '@angular/forms';
   ```

2. ### [Make a field required](#make-a-field-required)

   In the `ProfileEditor` component, add the [`Validators.required`](/api/forms/Validators#required) static method as the second item in the array for the `firstName` control.

   ### profile-editor.component.ts (required validator)

   ```
   private formBuilder = inject(FormBuilder);  profileForm = this.formBuilder.group({    firstName: ['', Validators.required],    lastName: [''],    address: this.formBuilder.group({      street: [''],      city: [''],      state: [''],      zip: [''],    }),  });
   ```

3. ### [Display form status](#display-form-status)

   When you add a required field to the form control, its initial status is invalid. This invalid status propagates to the parent form group element, making its status invalid. Access the current status of the form group instance through its `status` property.

   Display the current status of `profileForm` using interpolation.

   ### profile-editor.component.html (display status)

   ```
   Form Status: {{ profileForm.status }}
   ```

   The **Submit** button is disabled because `profileForm` is invalid due to the required `firstName` form control. After you fill out the `firstName` input, the form becomes valid and the **Submit** button is enabled.

   For more on form validation, visit the [Form Validation](guide/forms/form-validation) guide.

## [Creating dynamic forms](#creating-dynamic-forms)

[`FormArray`](/api/forms/FormArray) is an alternative to [`FormGroup`](/api/forms/FormGroup) for managing any number of unnamed controls. As with form group instances, you can dynamically insert and remove controls from form array instances, and the form array instance value and validation status is calculated from its child controls. However, you don't need to define a key for each control by name, so this is a great option if you don't know the number of child values in advance.

To define a dynamic form, take the following steps.

1. Import the [`FormArray`](/api/forms/FormArray) class.
2. Define a [`FormArray`](/api/forms/FormArray) control.
3. Access the [`FormArray`](/api/forms/FormArray) control with a getter method.
4. Display the form array in a template.

The following example shows you how to manage an array of *aliases* in `ProfileEditor`.

1. ### [Import the `FormArray` class](#import-the-formarray-class)

   Import the [`FormArray`](/api/forms/FormArray) class from `@angular/forms` to use for type information. The [`FormBuilder`](/api/forms/FormBuilder) service is ready to create a [`FormArray`](/api/forms/FormArray) instance.

   ### profile-editor.component.ts (import)

   ```
   import {FormArray} from '@angular/forms';
   ```

2. ### [Define a `FormArray` control](#define-a-formarray-control)

   You can initialize a form array with any number of controls, from zero to many, by defining them in an array. Add an `aliases` property to the form group instance for `profileForm` to define the form array.

   Use the [`FormBuilder.array()`](/api/forms/FormBuilder#array) method to define the array, and the [`FormBuilder.control()`](/api/forms/FormBuilder#control) method to populate the array with an initial control.

   ### profile-editor.component.ts (aliases form array)

   ```
   private formBuilder = inject(FormBuilder);  profileForm = this.formBuilder.group({    firstName: ['', Validators.required],    lastName: [''],    address: this.formBuilder.group({      street: [''],      city: [''],      state: [''],      zip: [''],    }),    aliases: this.formBuilder.array([this.formBuilder.control('')]),  });
   ```

   The aliases control in the form group instance is now populated with a single control until more controls are added dynamically.

3. ### [Access the `FormArray` control](#access-the-formarray-control)

   A getter provides access to the aliases in the form array instance compared to repeating the `profileForm.get()` method to get each instance. The form array instance represents an undefined number of controls in an array. It's convenient to access a control through a getter, and this approach is straightforward to repeat for additional controls.

   Use the getter syntax to create an `aliases` class property to retrieve the alias's form array control from the parent form group.

   ### profile-editor.component.ts (aliases getter)

   ```
   get aliases() {    return this.profileForm.get('aliases') as FormArray;  }
   ```

   Because the returned control is of the type [`AbstractControl`](/api/forms/AbstractControl), you need to provide an explicit type to access the method syntax for the form array instance. Define a method to dynamically insert an alias control into the alias's form array. The [`FormArray.push()`](/api/forms/FormArray#push) method inserts the control as a new item in the array, and you can also pass an array of controls to FormArray.push() to register multiple controls at once.

   ### profile-editor.component.ts (add alias)

   ```
   addAlias() {    this.aliases.push(this.formBuilder.control(''));  }
   ```

   In the template, each control is displayed as a separate input field.

4. ### [Display the form array in the template](#display-the-form-array-in-the-template)

   To attach the aliases from your form model, you must add it to the template. Similar to the [`formGroupName`](/api/forms/NgControlStatusGroup) input provided by `FormGroupNameDirective`, [`formArrayName`](/api/forms/NgControlStatusGroup) binds communication from the form array instance to the template with `FormArrayNameDirective`.

   Add the following template HTML after the `<div>` closing the [`formGroupName`](/api/forms/NgControlStatusGroup) element.

   ### profile-editor.component.html (aliases form array template)

   ```
       Aliases    + Add another alias    @for (alias of aliases.controls; track $index; let i = $index) {                      Alias:                  }  
   ```

   The `@for` block iterates over each form control instance provided by the aliases form array instance. Because form array elements are unnamed, you assign the index to the `i` variable and pass it to each control to bind it to the [`formControlName`](/api/forms/SelectMultipleControlValueAccessor) input.

   Each time a new alias instance is added, the new form array instance is provided its control based on the index. This lets you track each individual control when calculating the status and value of the root control.

### [Using `FormArrayDirective` for top-level form arrays](#using-formarraydirective-for-top-level-form-arrays)

You can bind a [`FormArray`](/api/forms/FormArray) directly to a `<form>` element by using the [`FormArrayDirective`](/api/forms/FormArrayDirective).\
This is useful when the form does not use a top-level [`FormGroup`](/api/forms/FormGroup), and the array itself represents the full form model.

```
import {Component} from '@angular/core';import {FormArray, FormControl} from '@angular/forms';@Component({  selector: 'form-array-example',  template: `    <form [formArray]="form">      @for (control of form.controls; track $index) {        <input [formControlName]="$index" />      }    </form>  `,})export class FormArrayExampleComponent {  controls = [new FormControl('fish'), new FormControl('cat'), new FormControl('dog')];  form = new FormArray(this.controls);}
```

8. ### [Add an alias](#add-an-alias)

   Initially, the form contains one `Alias` field. To add another field, click the **Add Alias** button. You can also validate the array of aliases reported by the form model displayed by `Form Value` at the bottom of the template. Instead of a form control instance for each alias, you can compose another form group instance with additional fields. The process of defining a control for each item is the same.

## [Unified control state change events](#unified-control-state-change-events)

All form controls expose a single unified stream of **control state change events** through the `events` observable on [`AbstractControl`](/api/forms/AbstractControl) ([`FormControl`](/api/forms/FormControl), [`FormGroup`](/api/forms/FormGroup), [`FormArray`](/api/forms/FormArray), and [`FormRecord`](/api/forms/FormRecord)). This unified stream lets you react to **value**, **status**, **pristine**, **touched** and **reset** state changes and also for **form-level actions** such as **submit** , allowing you to handle all updates with a one subscription instead of wiring multiple observables.

### [Event types](#event-types)

Each item emitted by `events` is an instance of a specific event class:

- **[`ValueChangeEvent`](/api/forms/ValueChangeEvent)** — when the control’s **value** changes.
- **[`StatusChangeEvent`](/api/forms/StatusChangeEvent)** — when the control’s **validation status** updates to one of the [`FormControlStatus`](/api/forms/FormControlStatus) values (`VALID`, `INVALID`, `PENDING`, or `DISABLED`).
- **[`PristineChangeEvent`](/api/forms/PristineChangeEvent)** — when the control’s **pristine/dirty** state changes.
- **[`TouchedChangeEvent`](/api/forms/TouchedChangeEvent)** — when the control’s **touched/untouched** state changes.
- **[`FormResetEvent`](/api/forms/FormResetEvent)** — when a control or form is reset, either via the `reset()` API or a native action.
- **[`FormSubmittedEvent`](/api/forms/FormSubmittedEvent)** — when the form is submitted.

All event classes extend [`ControlEvent`](/api/forms/ControlEvent) and include a `source` reference to the [`AbstractControl`](/api/forms/AbstractControl) that originated the change, which is useful in large forms.

```
import {Component} from '@angular/core';import {  FormControl,  ValueChangeEvent,  StatusChangeEvent,  PristineChangeEvent,  TouchedChangeEvent,  FormResetEvent,  FormSubmittedEvent,  ReactiveFormsModule,  FormGroup,} from '@angular/forms';@Component({  /*...*/})export class UnifiedEventsBasicComponent {  form = new FormGroup({    username: new FormControl(''),  });  constructor() {    this.form.events.subscribe((e) => {      if (e instanceof ValueChangeEvent) {        console.log('Value changed to: ', e.value);      }      if (e instanceof StatusChangeEvent) {        console.log('Status changed to: ', e.status);      }      if (e instanceof PristineChangeEvent) {        console.log('Pristine status changed to: ', e.pristine);      }      if (e instanceof TouchedChangeEvent) {        console.log('Touched status changed to: ', e.touched);      }      if (e instanceof FormResetEvent) {        console.log('Form was reset');      }      if (e instanceof FormSubmittedEvent) {        console.log('Form was submitted');      }    });  }}
```

### [Filtering specific events](#filtering-specific-events)

Prefer RxJS operators when you only need a subset of event types.

```
import {filter} from 'rxjs/operators';import {StatusChangeEvent} from '@angular/forms';control.events  .pipe(filter((e) => e instanceof StatusChangeEvent))  .subscribe((e) => console.log('Status:', e.status));
```

### [Unifying from multiple subscriptions](#unifying-from-multiple-subscriptions)

**Before**

```
import {combineLatest} from 'rxjs/operators';combineLatest([control.valueChanges, control.statusChanges]).subscribe(([value, status]) => {  /* ... */});
```

**After**

```
control.events.subscribe((e) => {  // Handle ValueChangeEvent, StatusChangeEvent, etc.});
```

**NOTE:** On value change, the emit happens right after a value of this control is updated. The value of a parent control (for example if this FormControl is a part of a FormGroup) is updated later, so accessing a value of a parent control (using the `value` property) from the callback of this event might result in getting a value that has not been updated yet. Subscribe to the `events` of the parent control instead.

## [Managing form control state](#managing-form-control-state)

Reactive forms track control state through **touched/untouched** and **pristine/dirty**. Angular updates these automatically during DOM interactions, but you can also manage them programmatically.

**[`markAsTouched`](api/forms/FormControl#markAsTouched)** — Marks a control or form as touched by focus and blur events that do not change the value. Propagates to parent controls by default.

```
// Show validation errors after user leaves a fieldonEmailBlur() {  const email = this.form.get('email');  email.markAsTouched();}
```

**[`markAsUntouched`](api/forms/FormControl#markAsUntouched)** — Marks a control or form as untouched. Cascades to all child controls and recalculates the touched status of all parent controls.

```
// Reset form state after successful submissiononSubmitSuccess() {  this.form.markAsUntouched();  this.form.markAsPristine();}
```

**[`markAsDirty`](api/forms/FormControl#markAsDirty)** — Marks a control or form as dirty, meaning the value has been changed. Propagates to parent controls by default.

```
// Mark programmatically changed values as modifiedautofillAddress() {  const previousAddress = getAddress();  this.form.patchValue(previousAddress, { emitEvent: false });  this.form.markAsDirty();}
```

**[`markAsPristine`](api/forms/FormControl#markAsPristine)** — Marks a control or form as pristine. Marks all child controls as pristine and recalculates the pristine status of all parent controls.

```
// Reset pristine state after saving to track new changessaveForm() {  this.api.save(this.form.value).subscribe(() => {    this.form.markAsPristine();  });}
```

**[`markAllAsDirty`](api/forms/FormControl#markAllAsDirty)** — Marks the control or form and all its descendant controls as dirty.

```
// Mark imported data as dirtyloadData(data: FormData) {  this.form.patchValue(data);  this.form.markAllAsDirty();}
```

**[`markAllAsTouched`](api/forms/FormControl#markAllAsTouched)** — Marks the control or form and all its descendant controls as touched. Useful for showing validation errors across the entire form.

```
// Show all validation errors before submissiononSubmit() {  if (this.form.invalid) {    this.form.markAllAsTouched();    return;  }  this.saveForm();}
```

## [Controlling event emission and propagation](#controlling-event-emission-and-propagation)

When updating form controls programmatically, you have precise control over how changes propagate through the form hierarchy and whether events are emitted.

### [Understanding event emission](#understanding-event-emission)

By default `emitEvent: true`, any change to a control emits events through the `valueChanges` and `statusChanges` observables. Setting `emitEvent: false` suppresses these emissions, which is useful when setting values programmatically without triggering reactive behavior like auto-save, avoiding circular updates between controls, or performing bulk updates where events should emit only once at the end.

```
@Component({  /* ... */})export class BlogPostEditor {  postForm = new FormGroup({    title: new FormControl(''),    content: new FormControl(''),  });  constructor() {    // Auto-save draft every time user types    this.postForm.valueChanges.subscribe((formValue) => {      this.autosaveDraft(formValue);    });  }  loadExistingDraft(savedDraft: {title: string; content: string}) {    // Restore draft without triggering auto-save    this.postForm.setValue(savedDraft, {emitEvent: false});  }}
```

### [Understanding propagation control](#understanding-propagation-control)

By default `onlySelf: false` , updates cascade to parent controls, recalculating their values and validation status. Setting `onlySelf: true` isolates the update to the current control, preventing parent notification. This is useful for batch operations where you want to manually trigger the parent update once.

```
updatePostalCodeValidator(country: string) {  const postal = this.addressForm.get('postalCode');  const validators = country === 'US'    ? [Validators.maxLength(5)]    : [Validators.maxLength(7)];  postal.setValidators(validators);  postal.updateValueAndValidity({ onlySelf: true, emitEvent: false });}
```

## [Utility functions for narrowing form control types](#utility-functions-for-narrowing-form-control-types)

Angular provides four utility functions that help determine the concrete type of an [`AbstractControl`](/api/forms/AbstractControl). These functions act as **type guards** and narrow the control type when they return `true`, which lets you safely access subtype-specific properties inside the same block.

Utility function

Details

[`isFormControl`](/api/forms/isFormControl)

Returns `true` when the control is a [`FormControl`](/api/forms/FormControl).

[`isFormGroup`](/api/forms/isFormGroup)

Returns `true` when the control is a [`FormGroup`](/api/forms/FormGroup)

[`isFormRecord`](/api/forms/isFormRecord)

Returns `true` when the control is a [`FormRecord`](/api/forms/FormRecord)

[`isFormArray`](/api/forms/isFormArray)

Returns `true` when the control is a [`FormArray`](/api/forms/FormArray)

These helpers are particularly useful in **custom validators**, where the function signature receives an [`AbstractControl`](/api/forms/AbstractControl), but the logic is intended for a specific control kind.

```
import {AbstractControl, isFormArray} from '@angular/forms';export function positiveValues(control: AbstractControl) {  if (!isFormArray(control)) {    return null; // Not a FormArray: validator is not applicable.  }  // Safe to access FormArray-specific API after narrowing.  const hasNegative = control.controls.some((c) => c.value < 0);  return hasNegative ? {positiveValues: true} : null;}
```

## [Reactive forms API summary](#reactive-forms-api-summary)

The following table lists the base classes and services used to create and manage reactive form controls. For complete syntax details, see the API reference documentation for the [Forms package](api#forms "API reference").

### [Classes](#classes)

Class

Details

[`AbstractControl`](/api/forms/AbstractControl)

The abstract base class for the concrete form control classes [`FormControl`](/api/forms/FormControl), [`FormGroup`](/api/forms/FormGroup), and [`FormArray`](/api/forms/FormArray). It provides their common behaviors and properties.

[`FormControl`](/api/forms/FormControl)

Manages the value and validity status of an individual form control. It corresponds to an HTML form control such as `<input>` or `<select>`.

[`FormGroup`](/api/forms/FormGroup)

Manages the value and validity state of a group of [`AbstractControl`](/api/forms/AbstractControl) instances. The group's properties include its child controls. The top-level form in your component is [`FormGroup`](/api/forms/FormGroup).

[`FormArray`](/api/forms/FormArray)

Manages the value and validity state of a numerically indexed array of [`AbstractControl`](/api/forms/AbstractControl) instances.

[`FormBuilder`](/api/forms/FormBuilder)

An injectable service that provides factory methods for creating control instances.

[`FormRecord`](/api/forms/FormRecord)

Tracks the value and validity state of a collection of [`FormControl`](/api/forms/FormControl) instances, each of which has the same value type.

### [Directives](#directives)

Directive

Details

[`FormControlDirective`](/api/forms/FormControlDirective)

Syncs a standalone [`FormControl`](/api/forms/FormControl) instance to a form control element.

[`FormControlName`](/api/forms/FormControlName)

Syncs [`FormControl`](/api/forms/FormControl) in an existing [`FormGroup`](/api/forms/FormGroup) instance to a form control element by name.

[`FormGroupDirective`](/api/forms/FormGroupDirective)

Syncs an existing [`FormGroup`](/api/forms/FormGroup) instance to a DOM element.

[`FormGroupName`](/api/forms/FormGroupName)

Syncs a nested [`FormGroup`](/api/forms/FormGroup) instance to a DOM element.

[`FormArrayName`](/api/forms/FormArrayName)

Syncs a nested [`FormArray`](/api/forms/FormArray) instance to a DOM element.

[`FormArrayDirective`](/api/forms/FormArrayDirective)

Syncs a standalone [`FormArray`](/api/forms/FormArray) instance to a DOM element.
