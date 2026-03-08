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

Many forms, such as questionnaires, can be very similar to one another in format and intent. To make it faster and easier to generate different versions of such a form, you can create a *dynamic form template* based on metadata that describes the business object model. Then, use the template to generate new forms automatically, according to changes in the data model.

The technique is particularly useful when you have a type of form whose content must change frequently to meet rapidly changing business and regulatory requirements. A typical use-case is a questionnaire. You might need to get input from users in different contexts. The format and style of the forms a user sees should remain constant, while the actual questions you need to ask vary with the context.

In this tutorial you will build a dynamic form that presents a basic questionnaire. You build an online application for heroes seeking employment. The agency is constantly tinkering with the application process, but by using the dynamic form you can create the new forms on the fly without changing the application code.

The tutorial walks you through the following steps.

1. Enable reactive forms for a project.
2. Establish a data model to represent form controls.
3. Populate the model with sample data.
4. Develop a component to create form controls dynamically.

The form you create uses input validation and styling to improve the user experience. It has a Submit button that is only enabled when all user input is valid, and flags invalid input with color coding and error messages.

The basic version can evolve to support a richer variety of questions, more graceful rendering, and superior user experience.

arrow\_upward\_alt Back to the top

## [Enable reactive forms for your project](#enable-reactive-forms-for-your-project)

Dynamic forms are based on reactive forms.

To give the application access reactive forms directives, import [`ReactiveFormsModule`](/api/forms/ReactiveFormsModule) from the `@angular/forms` library into the necessary components.

### dynamic-form.component.ts

```
import {Component, computed, inject, input} from '@angular/core';import {FormGroup, ReactiveFormsModule} from '@angular/forms';import {DynamicFormQuestionComponent} from './dynamic-form-question.component';import {QuestionBase} from './question-base';import {QuestionControlService} from './question-control.service';@Component({  selector: 'app-dynamic-form',  templateUrl: './dynamic-form.component.html',  providers: [QuestionControlService],  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],})export class DynamicFormComponent {  private readonly qcs = inject(QuestionControlService);  readonly questions = input<QuestionBase<string>[] | null>([]);  readonly form = computed<FormGroup>(() =>    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),  );  payLoad = '';  onSubmit() {    this.payLoad = JSON.stringify(this.form().getRawValue());  }}
```

### dynamic-form-question.component.ts

```
import {Component, input, Input} from '@angular/core';import {FormGroup, ReactiveFormsModule} from '@angular/forms';import {QuestionBase} from './question-base';@Component({  selector: 'app-question',  templateUrl: './dynamic-form-question.component.html',  imports: [ReactiveFormsModule],})export class DynamicFormQuestionComponent {  readonly question = input.required<QuestionBase<string>>();  readonly form = input.required<FormGroup>();  get isValid() {    return this.form().controls[this.question().key].valid;  }}
```

## [Create a form object model](#create-a-form-object-model)

A dynamic form requires an object model that can describe all scenarios needed by the form functionality. The example hero-application form is a set of questions — that is, each control in the form must ask a question and accept an answer.

The data model for this type of form must represent a question. The example includes the `DynamicFormQuestionComponent`, which defines a question as the fundamental object in the model.

The following `QuestionBase` is a base class for a set of controls that can represent the question and its answer in the form.

### question-base.ts

```
export class QuestionBase<T> {  value: T | undefined;  key: string;  label: string;  required: boolean;  order: number;  controlType: string;  type: string;  options: {key: string; value: string}[];  constructor(    options: {      value?: T;      key?: string;      label?: string;      required?: boolean;      order?: number;      controlType?: string;      type?: string;      options?: {key: string; value: string}[];    } = {},  ) {    this.value = options.value;    this.key = options.key || '';    this.label = options.label || '';    this.required = !!options.required;    this.order = options.order === undefined ? 1 : options.order;    this.controlType = options.controlType || '';    this.type = options.type || '';    this.options = options.options || [];  }}
```

### [Define control classes](#define-control-classes)

From this base, the example derives two new classes, `TextboxQuestion` and `DropdownQuestion`, that represent different control types. When you create the form template in the next step, you instantiate these specific question types in order to render the appropriate controls dynamically.

The `TextboxQuestion` control type is represented in a form template using an `<input>` element. It presents a question and lets users enter input. The `type` attribute of the element is defined based on the `type` field specified in the `options` argument (for example `text`, `email`, `url`).

### question-textbox.ts

```
import {QuestionBase} from './question-base';export class TextboxQuestion extends QuestionBase<string> {  override controlType = 'textbox';}
```

The `DropdownQuestion` control type presents a list of choices in a select box.

### question-dropdown.ts

```
import {QuestionBase} from './question-base';export class DropdownQuestion extends QuestionBase<string> {  override controlType = 'dropdown';}
```

### [Compose form groups](#compose-form-groups)

A dynamic form uses a service to create grouped sets of input controls, based on the form model. The following `QuestionControlService` collects a set of [`FormGroup`](/api/forms/FormGroup) instances that consume the metadata from the question model. You can specify default values and validation rules.

### question-control.service.ts

```
import {Injectable} from '@angular/core';import {FormControl, FormGroup, Validators} from '@angular/forms';import {QuestionBase} from './question-base';@Injectable()export class QuestionControlService {  toFormGroup(questions: QuestionBase<string>[]) {    const group: any = {};    questions.forEach((question) => {      group[question.key] = question.required        ? new FormControl(question.value || '', Validators.required)        : new FormControl(question.value || '');    });    return new FormGroup(group);  }}
```

## [Compose dynamic form contents](#compose-dynamic-form-contents)

The dynamic form itself is represented by a container component, which you add in a later step. Each question is represented in the form component's template by an `<app-question>` tag, which matches an instance of `DynamicFormQuestionComponent`.

The `DynamicFormQuestionComponent` is responsible for rendering the details of an individual question based on values in the data-bound question object. The form relies on a [`[formGroup]` directive](api/forms/FormGroupDirective "API reference") to connect the template HTML to the underlying control objects. The `DynamicFormQuestionComponent` creates form groups and populates them with controls defined in the question model, specifying display and validation rules.

### dynamic-form-question.component.html

```
<div [formGroup]="form()">  <label [attr.for]="question().key">{{ question().label }}</label>  <div>    @switch (question().controlType) {      @case ('textbox') {        <input [formControlName]="question().key" [id]="question().key" [type]="question().type" />      }      @case ('dropdown') {        <select [id]="question().key" [formControlName]="question().key">          @for (opt of question().options; track opt) {            <option [value]="opt.key">{{ opt.value }}</option>          }        </select>      }    }  </div>  @if (!isValid) {    <div class="errorMessage">{{ question().label }} is required</div>  }</div>
```

### dynamic-form-question.component.ts

```
import {Component, input, Input} from '@angular/core';import {FormGroup, ReactiveFormsModule} from '@angular/forms';import {QuestionBase} from './question-base';@Component({  selector: 'app-question',  templateUrl: './dynamic-form-question.component.html',  imports: [ReactiveFormsModule],})export class DynamicFormQuestionComponent {  readonly question = input.required<QuestionBase<string>>();  readonly form = input.required<FormGroup>();  get isValid() {    return this.form().controls[this.question().key].valid;  }}
```

The goal of the `DynamicFormQuestionComponent` is to present question types defined in your model. You only have two types of questions at this point but you can imagine many more. The `@switch` block in the template determines which type of question to display. The switch uses directives with the [](api/forms/FormControlName "FormControlName directive API reference")[`formControlName`](/api/forms/SelectMultipleControlValueAccessor) and [](api/forms/FormGroupDirective "FormGroupDirective API reference")[`formGroup`](/api/forms/NgForm) selectors. Both directives are defined in [`ReactiveFormsModule`](/api/forms/ReactiveFormsModule).

### [Supply data](#supply-data)

Another service is needed to supply a specific set of questions from which to build an individual form. For this exercise you create the `QuestionService` to supply this array of questions from the hard-coded sample data. In a real-world app, the service might fetch data from a backend system. The key point, however, is that you control the hero job-application questions entirely through the objects returned from `QuestionService`. To maintain the questionnaire as requirements change, you only need to add, update, and remove objects from the `questions` array.

The `QuestionService` supplies a set of questions in the form of an array bound to [`input()`](/api/core/input) questions.

### question.service.ts

```
import {Injectable} from '@angular/core';import {DropdownQuestion} from './question-dropdown';import {QuestionBase} from './question-base';import {TextboxQuestion} from './question-textbox';import {of} from 'rxjs';@Injectable()export class QuestionService {  // TODO: get from a remote source of question metadata  getQuestions() {    const questions: QuestionBase<string>[] = [      new DropdownQuestion({        key: 'favoriteAnimal',        label: 'Favorite Animal',        options: [          {key: 'cat', value: 'Cat'},          {key: 'dog', value: 'Dog'},          {key: 'horse', value: 'Horse'},          {key: 'capybara', value: 'Capybara'},        ],        order: 3,      }),      new TextboxQuestion({        key: 'firstName',        label: 'First name',        value: 'Alex',        required: true,        order: 1,      }),      new TextboxQuestion({        key: 'emailAddress',        label: 'Email',        type: 'email',        order: 2,      }),    ];    return of(questions.sort((a, b) => a.order - b.order));  }}
```

## [Create a dynamic form template](#create-a-dynamic-form-template)

The `DynamicFormComponent` component is the entry point and the main container for the form, which is represented using the `<app-dynamic-form>` in a template.

The `DynamicFormComponent` component presents a list of questions by binding each one to an `<app-question>` element that matches the `DynamicFormQuestionComponent`.

### dynamic-form.component.html

```
<div>  <form (ngSubmit)="onSubmit()" [formGroup]="form()">    @for (question of questions(); track question) {      <div class="form-row">        <app-question [question]="question" [form]="form()" />      </div>    }    <div class="form-row">      <button type="submit" [disabled]="!form().valid">Save</button>    </div>  </form>  @if (payLoad) {    <div class="form-row"><strong>Saved the following values</strong><br />{{ payLoad }}</div>  }</div>
```

### dynamic-form.component.ts

```
import {Component, computed, inject, input} from '@angular/core';import {FormGroup, ReactiveFormsModule} from '@angular/forms';import {DynamicFormQuestionComponent} from './dynamic-form-question.component';import {QuestionBase} from './question-base';import {QuestionControlService} from './question-control.service';@Component({  selector: 'app-dynamic-form',  templateUrl: './dynamic-form.component.html',  providers: [QuestionControlService],  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],})export class DynamicFormComponent {  private readonly qcs = inject(QuestionControlService);  readonly questions = input<QuestionBase<string>[] | null>([]);  readonly form = computed<FormGroup>(() =>    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),  );  payLoad = '';  onSubmit() {    this.payLoad = JSON.stringify(this.form().getRawValue());  }}
```

### [Display the form](#display-the-form)

To display an instance of the dynamic form, the `AppComponent` shell template passes the `questions` array returned by the `QuestionService` to the form container component, `<app-dynamic-form>`.

### app.component.ts

```
import {Component, inject} from '@angular/core';import {AsyncPipe} from '@angular/common';import {DynamicFormComponent} from './dynamic-form.component';import {QuestionService} from './question.service';import {QuestionBase} from './question-base';import {Observable} from 'rxjs';@Component({  selector: 'app-root',  template: `    <div>      <h2>Job Application for Heroes</h2>      <app-dynamic-form [questions]="questions$ | async" />    </div>  `,  providers: [QuestionService],  imports: [AsyncPipe, DynamicFormComponent],})export class AppComponent {  questions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getQuestions();}
```

This separation of model and data lets you repurpose the components for any type of survey, as long as it's compatible with the *question* object model.

### [Ensuring valid data](#ensuring-valid-data)

The form template uses dynamic data binding of metadata to render the form without making any hardcoded assumptions about specific questions. It adds both control metadata and validation criteria dynamically.

To ensure valid input, the *Save* button is disabled until the form is in a valid state. When the form is valid, click *Save* and the application renders the current form values as JSON.

The following figure shows the final form.

![Dynamic-Form](assets/images/guide/dynamic-form/dynamic-form.png)

## [Next steps](#next-steps)
