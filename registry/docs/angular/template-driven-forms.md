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

This tutorial shows you how to create a template-driven form. The control elements in the form are bound to data properties that have input validation. The input validation helps maintain data integrity and styling to improve the user experience.

Template-driven forms use [two-way data binding](guide/templates/two-way-binding) to update the data model in the component as changes are made in the template and vice versa.

### Template vs Reactive forms

Angular supports two design approaches for interactive forms. Template-driven forms allow you to use form-specific directives in your Angular template. Reactive forms provide a model-driven approach to building forms.

Template-driven forms are a great choice for small or simple forms, while reactive forms are more scalable and suitable for complex forms. For a comparison of the two approaches, see [Choosing an approach](guide/forms#choosing-an-approach)

You can build almost any kind of form with an Angular template —login forms, contact forms, and pretty much any business form. You can lay out the controls creatively and bind them to the data in your object model. You can specify validation rules and display validation errors, conditionally allow input from specific controls, trigger built-in visual feedback, and much more.

arrow\_upward\_alt Back to the top

## [Objectives](#objectives)

This tutorial teaches you how to do the following:

- Build an Angular form with a component and template
- Use [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) to create two-way data bindings for reading and writing input-control values
- Provide visual feedback using special CSS classes that track the state of the controls
- Display validation errors to users and conditionally allow input from form controls based on the form status
- Share information across HTML elements using [template reference variables](guide/templates/variables#template-reference-variables)

## [Build a template-driven form](#build-a-template-driven-form)

Template-driven forms rely on directives defined in the [`FormsModule`](/api/forms/FormsModule).

Directives

Details

[`NgModel`](/api/forms/NgModel)

Reconciles value changes in the attached form element with changes in the data model, allowing you to respond to user input with input validation and error handling.

[`NgForm`](/api/forms/NgForm)

Creates a top-level [`FormGroup`](/api/forms/FormGroup) instance and binds it to a `<form>` element to track aggregated form value and validation status. As soon as you import [`FormsModule`](/api/forms/FormsModule), this directive becomes active by default on all `<form>` tags. You don't need to add a special selector.

[`NgModelGroup`](/api/forms/NgModelGroup)

Creates and binds a [`FormGroup`](/api/forms/FormGroup) instance to a DOM element.

### [Step overview](#step-overview)

In the course of this tutorial, you bind a sample form to data and handle user input using the following steps.

1. Build the basic form.
   - Define a sample data model
   - Include required infrastructure such as the [`FormsModule`](/api/forms/FormsModule)
2. Bind form controls to data properties using the [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) directive and two-way data-binding syntax.
   - Examine how [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) reports control states using CSS classes
   - Name controls to make them accessible to [`ngModel`](/api/forms/SelectMultipleControlValueAccessor)
3. Track input validity and control status using [`ngModel`](/api/forms/SelectMultipleControlValueAccessor).
   - Add custom CSS to provide visual feedback on the status
   - Show and hide validation-error messages
4. Respond to a native HTML button-click event by adding to the model data.
5. Handle form submission using the [`ngSubmit`](api/forms/NgForm#properties) output property of the form.
   - Disable the **Submit** button until the form is valid
   - After submit, swap out the finished form for different content on the page

## [Build the form](#build-the-form)

1. The provided sample application creates the `Actor` class which defines the data model reflected in the form.

   ### actor.ts

   ```
   export class Actor {  constructor(    public id: number,    public name: string,    public skill: string,    public studio?: string,  ) {}}
   ```

2. The form layout and details are defined in the `ActorFormComponent` class.

   ### actor-form.component.ts (v1)

   ```
   import {Component} from '@angular/core';import {Actor} from '../actor';import {FormsModule} from '@angular/forms';import {JsonPipe} from '@angular/common';@Component({  selector: 'app-actor-form',  templateUrl: './actor-form.component.html',  imports: [FormsModule, JsonPipe],})export class ActorFormComponent {  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');  submitted = false;  onSubmit() {    this.submitted = true;  }}
   ```

   The component's `selector` value of "app-actor-form" means you can drop this form in a parent template using the `<app-actor-form>` tag.

3. The following code creates a new actor instance, so that the initial form can show an example actor.

   ```
   const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
   ```

   This demo uses dummy data for [`model`](/api/core/model) and `skills`. In a real app, you would inject a data service to get and save real data, or expose these properties as inputs and outputs.

4. The component enables the Forms feature by importing the [`FormsModule`](/api/forms/FormsModule) module.

   ```
   @Component({  selector: 'app-actor-form',  templateUrl: './actor-form.component.html',  imports: [FormsModule, JsonPipe],})export class ActorFormComponent {
   ```

5. The form is displayed in the application layout defined by the root component's template.

   ### app.component.html

   ```
   ```

   The initial template defines the layout for a form with two form groups and a submit button. The form groups correspond to two properties of the Actor data model, name and studio. Each group has a label and a box for user input.

   - The **Name** `<input>` control element has the HTML5 `required` attribute
   - The **Studio** `<input>` control element does not because `studio` is optional

   The **Submit** button has some classes on it for styling. At this point, the form layout is all plain HTML5, with no bindings or directives.

6. The sample form uses some style classes from [Twitter Bootstrap](https://getbootstrap.com/css): `container`, `form-group`, `form-control`, and `btn`. To use these styles, the application's style sheet imports the library.

   ### styles.css

   ```
   @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');
   ```

7. The form requires that an actor's skill is chosen from a predefined list of `skills` maintained internally in `ActorFormComponent`. The Angular `@for` loop iterates over the data values to populate the `<select>` element.

   ### actor-form.component.html (skills)

   ```
           Skill                  @for (skill of skills; track $index) {            {{ skill }}          }              
   ```

If you run the application right now, you see the list of skills in the selection control. The input elements are not yet bound to data values or events, so they are still blank and have no behavior.

## [Bind input controls to data properties](#bind-input-controls-to-data-properties)

The next step is to bind the input controls to the corresponding `Actor` properties with two-way data binding, so that they respond to user input by updating the data model, and also respond to programmatic changes in the data by updating the display.

The [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) directive declared in the [`FormsModule`](/api/forms/FormsModule) lets you bind controls in your template-driven form to properties in your data model. When you include the directive using the syntax for two-way data binding, `[(ngModel)]`, Angular can track the value and user interaction of the control and keep the view synced with the model.

1. Edit the template file `actor-form.component.html`.
2. Find the `<input>` tag next to the **Name** label.
3. Add the [`ngModel`](/api/forms/SelectMultipleControlValueAccessor) directive, using two-way data binding syntax `[(ngModel)]="..."`.

### actor-form.component.html (excerpt)

```
<input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name" />  TODO: remove this: {{ model.name }}
```

**HELPFUL:** This example has a temporary diagnostic interpolation after each input tag, `{{model.name}}`, to show the current data value of the corresponding property. The comment reminds you to remove the diagnostic lines when you have finished observing the two-way data binding at work.

### [Access the overall form status](#access-the-overall-form-status)

When you imported the [`FormsModule`](/api/forms/FormsModule) in your component, Angular automatically created and attached an [NgForm](api/forms/NgForm) directive to the `<form>` tag in the template (because [`NgForm`](/api/forms/NgForm) has the selector `form` that matches `<form>` elements).

To get access to the [`NgForm`](/api/forms/NgForm) and the overall form status, declare a [template reference variable](guide/templates/variables#template-reference-variables).

1. Edit the template file `actor-form.component.html`.

2. Update the `<form>` tag with a template reference variable, `#actorForm`, and set its value as follows.

   ### actor-form.component.html (excerpt)

   ```
   ```

   The `actorForm` template variable is now a reference to the [`NgForm`](/api/forms/NgForm) directive instance that governs the form as a whole.

3. Run the app.

4. Start typing in the **Name** input box.

   As you add and delete characters, you can see them appear and disappear from the data model.

The diagnostic line that shows interpolated values demonstrates that values are really flowing from the input box to the model and back again.

### [Naming control elements](#naming-control-elements)

When you use `[(ngModel)]` on an element, you must define a `name` attribute for that element. Angular uses the assigned name to register the element with the [`NgForm`](/api/forms/NgForm) directive attached to the parent `<form>` element.

The example added a `name` attribute to the `<input>` element and set it to "name", which makes sense for the actor's name. Any unique value will do, but using a descriptive name is helpful.

1. Add similar `[(ngModel)]` bindings and `name` attributes to **Studio** and **Skill**.
2. You can now remove the diagnostic messages that show interpolated values.
3. To confirm that two-way data binding works for the entire actor model, add a new text binding with the [`json`](api/common/JsonPipe) pipe at the top to the component's template, which serializes the data to a string.

After these revisions, the form template should look like the following:

### actor-form.component.html (excerpt)

```
{{ model | json }}      <div class="form-group">        <label for="name">Name</label>        <input          type="text"          class="form-control"          id="name"          required          [(ngModel)]="model.name"          name="name"        />      </div>      <div class="form-group">        <label for="studio">Studio</label>        <input          type="text"          class="form-control"          id="studio"          [(ngModel)]="model.studio"          name="studio"        />      </div>      <div class="form-group">        <label for="skill">Skill</label>        <select class="form-control" id="skill" required [(ngModel)]="model.skill" name="skill">          @for (skill of skills; track $index) {            <option [value]="skill">{{ skill }}</option>          }        </select>      </div>
```

You'll notice that:

- Each `<input>` element has an `id` property. This is used by the `<label>` element's `for` attribute to match the label to its input control. This is a [standard HTML feature](https://developer.mozilla.org/docs/Web/HTML/Element/label).

- Each `<input>` element also has the required `name` property that Angular uses to register the control with the form.

When you have observed the effects, you can delete the `{{ model | json }}` text binding.

## [Track form states](#track-form-states)

Angular applies the `ng-submitted` class to `form` elements after the form has been submitted. This class can be used to change the form's style after it has been submitted.

## [Track control states](#track-control-states)

Adding the [`NgModel`](/api/forms/NgModel) directive to a control adds class names to the control that describe its state. These classes can be used to change a control's style based on its state.

The following table describes the class names that Angular applies based on the control's state.

States

Class if true

Class if false

The control has been visited.

`ng-touched`

`ng-untouched`

The control's value has changed.

`ng-dirty`

`ng-pristine`

The control's value is valid.

`ng-valid`

`ng-invalid`

Angular also applies the `ng-submitted` class to `form` elements upon submission, but not to the controls inside the `form` element.

You use these CSS classes to define the styles for your control based on its status.

### [Observe control states](#observe-control-states)

To see how the classes are added and removed by the framework, open the browser's developer tools and inspect the `<input>` element that represents the actor name.

1. Using your browser's developer tools, find the `<input>` element that corresponds to the **Name** input box. You can see that the element has multiple CSS classes in addition to "form-control".

2. When you first bring it up, the classes indicate that it has a valid value, that the value has not been changed since initialization or reset, and that the control has not been visited since initialization or reset.

   ```
   ;
   ```

3. Take the following actions on the **Name** `<input>` box, and observe which classes appear.

   - Look but don't touch. The classes indicate that it is untouched, pristine, and valid.

   - Click inside the name box, then click outside it. The control has now been visited, and the element has the `ng-touched` class instead of the `ng-untouched` class.

   - Add slashes to the end of the name. It is now touched and dirty.

   - Erase the name. This makes the value invalid, so the `ng-invalid` class replaces the `ng-valid` class.

### [Create visual feedback for states](#create-visual-feedback-for-states)

The `ng-valid`/`ng-invalid` pair is particularly interesting, because you want to send a strong visual signal when the values are invalid. You also want to mark required fields.

You can mark required fields and invalid data at the same time with a colored bar on the left of the input box.

To change the appearance in this way, take the following steps.

1. Add definitions for the `ng-*` CSS classes.

2. Add these class definitions to a new `forms.css` file.

3. Add the new file to the project as a sibling to `index.html`:

   ### forms.css

   ```
   .ng-valid[required], .ng-valid.required  {  border-left: 5px solid #42A948; /* green */}.ng-invalid:not(form)  {  border-left: 5px solid #a94442; /* red */}
   ```

4. In the `index.html` file, update the `<head>` tag to include the new style sheet.

   ### index.html (styles)

   ```
   ```

### [Show and hide validation error messages](#show-and-hide-validation-error-messages)

The **Name** input box is required and clearing it turns the bar red. That indicates that something is wrong, but the user doesn't know what is wrong or what to do about it. You can provide a helpful message by checking for and responding to the control's state.

The **Skill** select box is also required, but it doesn't need this kind of error handling because the selection box already constrains the selection to valid values.

To define and show an error message when appropriate, take the following steps.

1. ### [Add a local reference to the input](#add-a-local-reference-to-the-input)

   Extend the `input` tag with a template reference variable that you can use to access the input box's Angular control from within the template. In the example, the variable is `#name="ngModel"`.

   The template reference variable (`#name`) is set to `"ngModel"` because that is the value of the [](api/core/Directive#exportAs)[`NgModel.exportAs`](/api/forms/NgModel#exportAs) property. This property tells Angular how to link a reference variable to a directive.

2. ### [Add the error message](#add-the-error-message)

   Add a `<div>` that contains a suitable error message.

3. ### [Make the error message conditional](#make-the-error-message-conditional)

   Show or hide the error message by binding properties of the `name` control to the message `<div>` element's `hidden` property.

### actor-form.component.html (hidden-error-msg)

```
<div [hidden]="name.valid || name.pristine" class="alert alert-danger">
```

5. ### [Add a conditional error message to name](#add-a-conditional-error-message-to-name)

   Add a conditional error message to the `name` input box, as in the following example.

   ### actor-form.component.html (excerpt)

   ```
   Name                          Name is required        
   ```

In this example, you hide the message when the control is either valid or *pristine*. Pristine means the user hasn't changed the value since it was displayed in this form. If you ignore the `pristine` state, you would hide the message only when the value is valid. If you arrive in this component with a new, blank actor or an invalid actor, you'll see the error message immediately, before you've done anything.

You might want the message to display only when the user makes an invalid change. Hiding the message while the control is in the `pristine` state achieves that goal. You'll see the significance of this choice when you add a new actor to the form in the next step.

## [Add a new actor](#add-a-new-actor)

This exercise shows how you can respond to a native HTML button-click event by adding to the model data. To let form users add a new actor, you will add a **New Actor** button that responds to a click event.

1. In the template, place a "New Actor" `<button>` element at the bottom of the form.

2. In the component file, add the actor-creation method to the actor data model.

   ### actor-form.component.ts (New Actor method)

   ```
   newActor() {    this.model = new Actor(42, '', '');  }
   ```

3. Bind the button's click event to an actor-creation method, `newActor()`.

   ### actor-form.component.html (New Actor button)

   ```
   New Actor
   ```

4. Run the application again and click the **New Actor** button.

   The form clears, and the *required* bars to the left of the input box are red, indicating invalid `name` and `skill` properties. Notice that the error messages are hidden. This is because the form is pristine; you haven't changed anything yet.

5. Enter a name and click **New Actor** again.

   Now the application displays a `Name is required` error message, because the input box is no longer pristine. The form remembers that you entered a name before clicking **New Actor**.

6. To restore the pristine state of the form controls, clear all of the flags imperatively by calling the form's `reset()` method after calling the `newActor()` method.

   ### actor-form.component.html (Reset the form)

   ```
           New Actor      
   ```

   Now clicking **New Actor** resets both the form and its control flags.

## [Submit the form with `ngSubmit`](#submit-the-form-with-ngsubmit)

The user should be able to submit this form after filling it in. The **Submit** button at the bottom of the form does nothing on its own, but it does trigger a form-submit event because of its type (`type="submit"`).

To respond to this event, take the following steps.

1. ### [Listen to ngOnSubmit](#listen-to-ngonsubmit)

   Bind the form's [`ngSubmit`](api/forms/NgForm#properties) event property to the actor-form component's `onSubmit()` method.

   ### actor-form.component.html (ngSubmit)

   ```
   ```

2. ### [Bind the disabled property](#bind-the-disabled-property)

   Use the template reference variable, `#actorForm` to access the form that contains the **Submit** button and create an event binding.

   You will bind the form property that indicates its overall validity to the **Submit** button's `disabled` property.

   ### actor-form.component.html (submit-button)

   ```
           Submit      
   ```

3. ### [Run the application](#run-the-application)

   Notice that the button is enabled —although it doesn't do anything useful yet.

4. ### [Delete the Name value](#delete-the-name-value)

   This violates the "required" rule, so it displays the error message —and notice that it also disables the **Submit** button.

   You didn't have to explicitly wire the button's enabled state to the form's validity. The [`FormsModule`](/api/forms/FormsModule) did this automatically when you defined a template reference variable on the enhanced form element, then referred to that variable in the button control.

### [Respond to form submission](#respond-to-form-submission)

To show a response to form submission, you can hide the data entry area and display something else in its place.

1. ### [Wrap the form](#wrap-the-form)

   Wrap the entire form in a `<div>` and bind its `hidden` property to the `ActorFormComponent.submitted` property.

   ### actor-form.component.html (excerpt)

   ```
       Actor Form          
   ```

   The main form is visible from the start because the `submitted` property is false until you submit the form, as this fragment from the `ActorFormComponent` shows:

   ### actor-form.component.ts (submitted)

   ```
   submitted = false;  onSubmit() {    this.submitted = true;  }
   ```

   When you click the **Submit** button, the `submitted` flag becomes true and the form disappears.

2. ### [Add the submitted state](#add-the-submitted-state)

   To show something else while the form is in the submitted state, add the following HTML below the new `<div>` wrapper.

   ### actor-form.component.html (excerpt)

   ```
       You submitted the following:          Name      {{ model.name }}              Studio      {{ model.studio }}              Skill      {{ model.skill }}            Edit  
   ```

   This `<div>`, which shows a read-only actor with interpolation bindings, appears only while the component is in the submitted state.

   The alternative display includes an *Edit* button whose click event is bound to an expression that clears the `submitted` flag.

3. ### [Test the Edit button](#test-the-edit-button)

   Click the *Edit* button to switch the display back to the editable form.

## [Summary](#summary)

The Angular form discussed in this page takes advantage of the following framework features to provide support for data modification, validation, and more.

- An Angular HTML form template
- A form component class with a [`@Component`](/api/core/Component) decorator
- Handling form submission by binding to the [`NgForm.ngSubmit`](/api/forms/NgForm#ngSubmit) event property
- Template-reference variables such as `#actorForm` and `#name`
- `[(ngModel)]` syntax for two-way data binding
- The use of `name` attributes for validation and form-element change tracking
- The reference variable's `valid` property on input controls indicates whether a control is valid or should show error messages
- Controlling the **Submit** button's enabled state by binding to [`NgForm`](/api/forms/NgForm) validity
- Custom CSS classes that provide visual feedback to users about controls that are not valid

Here's the code for the final version of the application:

### actor-form.component.ts

```
import {Component} from '@angular/core';import {Actor} from '../actor';import {FormsModule} from '@angular/forms';import {JsonPipe} from '@angular/common';@Component({  selector: 'app-actor-form',  templateUrl: './actor-form.component.html',  imports: [FormsModule, JsonPipe],})export class ActorFormComponent {  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');  submitted = false;  onSubmit() {    this.submitted = true;  }  newActor() {    this.model = new Actor(42, '', '');  }}
```

### actor-form.component.html

```
<div class="container">  <div [hidden]="submitted">    <h1>Actor Form</h1>    <form (ngSubmit)="onSubmit()" #actorForm="ngForm">      <div class="form-group">        <label for="name">Name</label>        <input          type="text"          class="form-control"          id="name"          required          [(ngModel)]="model.name"          name="name"          #name="ngModel"        />        <div [hidden]="name.valid || name.pristine" class="alert alert-danger">          Name is required        </div>      </div>      <div class="form-group">        <label for="studio">Studio Affiliation</label>        <input          type="text"          class="form-control"          id="studio"          [(ngModel)]="model.studio"          name="studio"        />      </div>      <div class="form-group">        <label for="skill">Skill</label>        <select          class="form-control"          id="skill"          required          [(ngModel)]="model.skill"          name="skill"          #skill="ngModel"        >          @for (skill of skills; track $index) {            <option [value]="skill">{{ skill }}</option>          }        </select>        <div [hidden]="skill.valid || skill.pristine" class="alert alert-danger">          skill is required        </div>      </div>      <button type="submit" class="btn btn-success" [disabled]="!actorForm.form.valid">        Submit      </button>      <button type="button" class="btn btn-default" (click)="newActor(); actorForm.reset()">        New Actor      </button>    </form>  </div>  <div [hidden]="!submitted">    <h2>You submitted the following:</h2>    <div class="row">      <div class="col-xs-3">Name</div>      <div class="col-xs-9">{{ model.name }}</div>    </div>    <div class="row">      <div class="col-xs-3">Studio</div>      <div class="col-xs-9">{{ model.studio }}</div>    </div>    <div class="row">      <div class="col-xs-3">Skill</div>      <div class="col-xs-9">{{ model.skill }}</div>    </div>    <br />    <button type="button" class="btn btn-primary" (click)="submitted = false">Edit</button>  </div></div>
```

### actor.ts

```
export class Actor {  constructor(    public id: number,    public name: string,    public skill: string,    public studio?: string,  ) {}}
```

### app.component.html

```
<app-actor-form />
```

### app.component.ts

```
import {Component} from '@angular/core';import {ActorFormComponent} from './actor-form/actor-form.component';@Component({  selector: 'app-root',  templateUrl: './app.component.html',  imports: [ActorFormComponent],})export class AppComponent {}
```

### main.ts

```
import {bootstrapApplication} from '@angular/platform-browser';import {AppComponent} from './app/app.component';import {provideZoneChangeDetection} from '@angular/core';bootstrapApplication(AppComponent, {  providers: [provideZoneChangeDetection({eventCoalescing: true})],}).catch((err) => console.error(err));
```

### forms.css

```
.ng-valid[required], .ng-valid.required  {  border-left: 5px solid #42A948; /* green */}.ng-invalid:not(form)  {  border-left: 5px solid #a94442; /* red */}
```
