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

- arrow\_back Animations Updated
  - [Enter and Leave animations New](/guide/animations)
  - [Complex Animations with CSS](/guide/animations/css)
  - [Route transition animations](/guide/routing/route-transition-animations)

CSS offers a robust set of tools for you to create beautiful and engaging animations within your application.

arrow\_upward\_alt Back to the top

## [How to write animations in native CSS](#how-to-write-animations-in-native-css)

If you've never written any native CSS animations, there are a number of excellent guides to get you started. Here's a few of them: [MDN's CSS Animations guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) [W3Schools CSS3 Animations guide](https://www.w3schools.com/css/css3_animations.asp) [The Complete CSS Animations Tutorial](https://www.lambdatest.com/blog/css-animations-tutorial/) [CSS Animation for Beginners](https://thoughtbot.com/blog/css-animation-for-beginners)

and a couple of videos: [Learn CSS Animation in 9 Minutes](https://www.youtube.com/watch?v=z2LQYsZhsFw) [Net Ninja CSS Animation Tutorial Playlist](https://www.youtube.com/watch?v=jgw82b5Y2MU\&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5)

Check some of these various guides and tutorials out, and then come back to this guide.

## [Creating Reusable Animations](#creating-reusable-animations)

You can create reusable animations that can be shared across your application using `@keyframes`. Define keyframe animations in a shared CSS file, and you'll be able to re-use those keyframe animations wherever you want within your application.

### animations.css

```
@keyframes sharedAnimation {  to {    height: 0;    opacity: 1;    background-color: 'red';  }}.animated-class {  animation: sharedAnimation 1s;}
```

Adding the class `animated-class` to an element would trigger the animation on that element.

## [Animating a Transition](#animating-a-transition)

### [Animating State and Styles](#animating-state-and-styles)

You may want to animate between two different states, for example when an element is opened or closed. You can accomplish this by using CSS classes either using a keyframe animation or transition styling.

### animations.css

```
.open {  height: '200px';  opacity: 1;  background-color: 'yellow';  transition: all 1s;}.closed {  height: '100px';  opacity: 0.8;  background-color: 'blue';  transition: all 1s;}
```

Triggering the `open` or `closed` state is done by toggling classes on the element in your component. You can find examples of how to do this in our [template guide](guide/templates/binding#css-class-and-style-property-bindings).

You can see similar examples in the template guide for [animating styles directly](guide/templates/binding#css-style-properties).

### [Transitions, Timing, and Easing](#transitions-timing-and-easing)

Animating often requires adjusting timing, delays and easeing behaviors. This can be done using several css properties or shorthand properties.

Specify `animation-duration`, `animation-delay`, and `animation-timing-function` for a keyframe animation in CSS, or alternatively use the `animation` shorthand property.

### animations.css

```
.example-element {  animation-duration: 1s;  animation-delay: 500ms;  animation-timing-function: ease-in-out;}.example-shorthand {  animation: exampleAnimation 1s ease-in-out 500ms;}
```

Similarly, you can use `transition-duration`, `transition-delay`, and `transition-timing-function` and the `transition` shorthand for animations that are not using `@keyframes`.

### animations.css

```
.example-element {  transition-duration: 1s;  transition-delay: 500ms;  transition-timing-function: ease-in-out;  transition-property: margin-right;}.example-shorthand {  transition: margin-right 1s ease-in-out 500ms;}
```

### [Triggering an Animation](#triggering-an-animation)

Animations can be triggered by toggling CSS styles or classes. Once a class is present on an element, the animation will occur. Removing the class will revert the element back to whatever CSS is defined for that element. Here's an example:

### open-close.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-open-close',  templateUrl: 'open-close.html',  styleUrls: ['open-close.css'],})export class OpenClose {  isOpen = signal(true);  toggle() {    this.isOpen.update((isOpen) => !isOpen);  }}
```

### open-close.html

```
<h2>Open / Close Example</h2><button type="button" class="toggle-btn" (click)="toggle()">Toggle Open/Close</button><div class="open-close-container" [class.open]="isOpen()">  <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p></div>
```

### open-close.css

```
:host {  display: block;  margin-top: 1rem;}.open-close-container {  border: 1px solid #dddddd;  margin-top: 1em;  padding: 20px 20px 0px 20px;  font-weight: bold;  font-size: 20px;  height: 100px;  opacity: 0.8;  background: #3b82f6;  color: #ebebeb;  transition-property: height, opacity, background-color, color;  transition-duration: 1s;}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}.open {  transition-duration: 0.5s;  height: 200px;  opacity: 1;  background: #475569;  color: #f9fafb;}
```

## [Transition and Triggers](#transition-and-triggers)

### [Animating Auto Height](#animating-auto-height)

You can use css-grid to animate to auto height.

### auto-height.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-auto-height',  templateUrl: 'auto-height.html',  styleUrls: ['auto-height.css'],})export class AutoHeight {  isOpen = signal(true);  toggle() {    this.isOpen.update((isOpen) => !isOpen);  }}
```

### auto-height.html

```
<h2>Auto Height Example</h2><button type="button" class="toggle-btn" (click)="toggle()">Toggle Open/Close</button><div class="container" [class.open]="isOpen()">  <div class="content">    <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>  </div></div>
```

### auto-height.css

```
.container {  display: grid;  grid-template-rows: 0fr;  overflow: hidden;  transition: grid-template-rows 1s;}.container.open {  grid-template-rows: 1fr;}.container .content {  min-height: 0;  transition: visibility 1s;  padding: 0 20px;  visibility: hidden;  margin-top: 1em;  font-weight: bold;  font-size: 20px;  background: #3b82f6;  color: #ebebeb;  overflow: hidden;}.container.open .content {  visibility: visible;}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}
```

If you don't have to worry about supporting all browsers, you can also check out `calc-size()`, which is the true solution to animating auto height. See [MDN's docs](https://developer.mozilla.org/en-US/docs/Web/CSS/calc-size) and (this tutorial)\[<https://frontendmasters.com/blog/one-of-the-boss-battles-of-css-is-almost-won-transitioning-to-auto/]> for more information.

### [Animate entering and leaving a view](#animate-entering-and-leaving-a-view)

You can create animations for when an item enters a view or leaves a view. Let's start by looking at how to animate an element entering a view. We'll do this with `animate.enter`, which will apply animation classes when an element enters the view.

### insert.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-insert',  templateUrl: 'insert.html',  styleUrls: ['insert.css'],})export class Insert {  isShown = signal(false);  toggle() {    this.isShown.update((isShown) => !isShown);  }}
```

### insert.html

```
<h2>Insert Element Example</h2><nav>  <button type="button" class="toggle-btn" (click)="toggle()">Toggle Element</button></nav>@if (isShown()) {  <div class="insert-container" animate.enter="enter-animation">    <p>The box is inserted</p>  </div>}
```

### insert.css

```
:host {  display: block;}.insert-container {  border: 1px solid #dddddd;  margin-top: 1em;  padding: 20px 20px 0px 20px;  font-weight: bold;  font-size: 20px;}.enter-animation {  animation: slide-fade 1s;}@keyframes slide-fade {  from {    opacity: 0;    transform: translateY(20px);  }  to {    opacity: 1;    transform: translateY(0);  }}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}
```

Animating an element when it leaves the view is similar to animating when entering a view. Use `animate.leave` to specify which CSS classes to apply when the element leaves the view.

### remove.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-remove',  templateUrl: 'remove.html',  styleUrls: ['remove.css'],})export class Remove {  isShown = signal(false);  toggle() {    this.isShown.update((isShown) => !isShown);  }}
```

### remove.html

```
<h2>Remove Element Example</h2><nav>  <button type="button" class="toggle-btn" (click)="toggle()">Toggle Element</button></nav>@if (isShown()) {  <div class="insert-container" animate.leave="deleting">    <p>The box is inserted</p>  </div>}
```

### remove.css

```
:host {  display: block;}.insert-container {  border: 1px solid #dddddd;  margin-top: 1em;  padding: 20px 20px 0px 20px;  font-weight: bold;  font-size: 20px;  opacity: 1;  transition: opacity 200ms ease-in;  @starting-style {    opacity: 0;  }}.deleting {  opacity: 0;  transform: translateY(20px);  transition:    opacity 500ms ease-out,    transform 500ms ease-out;}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}
```

For more information on `animate.enter` and `animate.leave`, see the [Enter and Leave animations guide](guide/animations).

### [Animating increment and decrement](#animating-increment-and-decrement)

Animating on increment and decrement is a common pattern in applications. Here's an example of how you can accomplish that behavior.

### increment-decrement.ts

```
import {Component, ElementRef, OnInit, signal, viewChild} from '@angular/core';@Component({  selector: 'app-increment-decrement',  templateUrl: 'increment-decrement.html',  styleUrls: ['increment-decrement.css'],})export class IncrementDecrement implements OnInit {  num = signal(0);  el = viewChild<ElementRef<HTMLParagraphElement>>('el');  ngOnInit() {    this.el()?.nativeElement.addEventListener('animationend', (ev) => {      if (ev.animationName.endsWith('decrement') || ev.animationName.endsWith('increment')) {        this.animationFinished();      }    });  }  modify(n: number) {    const targetClass = n > 0 ? 'increment' : 'decrement';    this.num.update((v) => (v += n));    this.el()?.nativeElement.classList.add(targetClass);  }  animationFinished() {    this.el()?.nativeElement.classList.remove('increment', 'decrement');  }  ngOnDestroy() {    this.el()?.nativeElement.removeEventListener('animationend', this.animationFinished);  }}
```

### increment-decrement.html

```
<h3>Increment and Decrement Example</h3><section>  <p #el>Number {{ num() }}</p>  <div class="controls">    <button type="button" (click)="modify(1)">+</button>    <button type="button" (click)="modify(-1)">-</button>  </div></section>
```

### increment-decrement.css

```
:host {  display: block;  font-size: 32px;  margin: 20px;  text-align: center;}section {  border: 1px solid lightgray;  border-radius: 50px;}p {  display: inline-block;  margin: 2rem 0;  text-transform: uppercase;}.increment {  animation: increment 300ms;}.decrement {  animation: decrement 300ms;}.controls {  padding-bottom: 2rem;}button {  font: inherit;  border: 0;  background: lightgray;  width: 50px;  border-radius: 10px;}button + button {  margin-left: 10px;}@keyframes increment {  33% {    color: green;    transform: scale(1.3, 1.2);  }  66% {    color: green;    transform: scale(1.2, 1.2);  }  100% {    transform: scale(1, 1);  }}@keyframes decrement {  33% {    color: red;    transform: scale(0.8, 0.9);  }  66% {    color: red;    transform: scale(0.9, 0.9);  }  100% {    transform: scale(1, 1);  }}
```

### [Disabling an animation or all animations](#disabling-an-animation-or-all-animations)

If you'd like to disable the animations that you've specified, you have multiple options.

1. Create a custom class that forces animation and transition to `none`.

```
.no-animation {  animation: none !important;  transition: none !important;}
```

Applying this class to an element prevents any animation from firing on that element. You could alternatively scope this to your entire DOM or section of your DOM to enforce this behavior. However, this prevents animation events from firing. If you are awaiting animation events for element removal, this solution won't work. A workaround is to set durations to 1 millisecond instead.

1. Use the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query to ensure no animations play for users that prefer less animation.

2. Prevent adding animation classes programatically

### [Animation Callbacks](#animation-callbacks)

If you have actions you would like to execute at certain points during animations, there are a number of available events you can listen to. Here's a few of them.

[`OnAnimationStart`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event)\
[`OnAnimationEnd`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event)\
[`OnAnimationIteration`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationitration_event)\
[`OnAnimationCancel`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationcancel_event)

[`OnTransitionStart`](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionstart_event)\
[`OnTransitionRun`](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event)\
[`OnTransitionEnd`](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event)\
[`OnTransitionCancel`](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitioncancel_event)

The Web Animations API has a lot of additional functionality. [Take a look at the documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to see all the available animation APIs.

**NOTE:** Be aware of bubbling issues with these callbacks. If you are animating children and parents, the events bubble up from children to parents. Consider stopping propagation or looking at more details within the event to determine if you're responding to the desired event target rather than an event bubbling up from a child node. You can examine the `animationname` property or the properties being transitioned to verify you have the right nodes.

## [Complex Sequences](#complex-sequences)

Animations are often more complicated than just a simple fade in or fade out. You may have lots of complicated sequences of animations you may want to run. Let's take a look at some of those possible scenarios.

### [Staggering animations in a list](#staggering-animations-in-a-list)

One common effect is to stagger the animations of each item in a list to create a cascade effect. This can be accomplished by utilizing `animation-delay` or `transition-delay`. Here is an example of what that CSS might look like.

### stagger.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-stagger',  templateUrl: './stagger.html',  styleUrls: ['stagger.css'],})export class Stagger {  show = signal(true);  items = [1, 2, 3];  refresh() {    this.show.set(false);    setTimeout(() => {      this.show.set(true);    }, 10);  }}
```

### stagger.html

```
<h1>Stagger Example</h1><button type="button" class="toggle-btn" (click)="refresh()">Refresh</button>@if (show()) {  <ul class="items">    @for (item of items; track item) {      <li class="item" style="--index: {{ item }}">{{ item }}</li>    }  </ul>}
```

### stagger.css

```
.items {  list-style: none;  padding: 0;  margin: 0;}.items .item {  transition-property: opacity, transform;  transition-duration: 500ms;  transition-delay: calc(200ms * var(--index));  @starting-style {    opacity: 0;    transform: translateX(-10px);  }}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}
```

### [Parallel Animations](#parallel-animations)

You can apply multiple animations to an element at once using the `animation` shorthand property. Each can have their own durations and delays. This allows you to compose animations together and create complicated effects.

```
.target-element {  animation:    rotate 3s,    fade-in 2s;}
```

In this example, the `rotate` and `fade-in` animations fire at the same time, but have different durations.

### [Animating the items of a reordering list](#animating-the-items-of-a-reordering-list)

Items in a `@for` loop will be removed and re-added, which will fire off animations using `@starting-styles` for entry animations. Alternatively, you can use `animate.enter` for this same behavior. Use `animate.leave` to animate elements as they are removed, as seen in the example below.

### reorder.ts

```
import {Component, signal} from '@angular/core';@Component({  selector: 'app-reorder',  templateUrl: './reorder.html',  styleUrls: ['reorder.css'],})export class Reorder {  show = signal(true);  items = ['stuff', 'things', 'cheese', 'paper', 'scissors', 'rock'];  randomize() {    const randItems = [...this.items];    const newItems = [];    for (let i of this.items) {      const max: number = this.items.length - newItems.length;      const randNum = Math.floor(Math.random() * max);      newItems.push(...randItems.splice(randNum, 1));    }    this.items = newItems;  }}
```

### reorder.html

```
<h1>Reordering List Example</h1><button type="button" class="toggle-btn" (click)="randomize()">Randomize</button><ul class="items">  @for (item of items; track item) {    <li class="item" animate.leave="fade">{{ item }}</li>  }</ul>
```

### reorder.css

```
.items {  list-style: none;  padding: 0;  margin: 0;}.items .item {  transition-property: opacity, transform;  transition-duration: 500ms;  @starting-style {    opacity: 0;    transform: translateX(-10px);  }}.items .item.fade {  animation: fade-out 500ms;}@keyframes fade-out {  from {    opacity: 1;  }  to {    opacity: 0;  }}.toggle-btn {  background: transparent;  border: 1px solid var(--primary-contrast, black);  color: var(--primary-contrast, black);  padding: 10px 24px;  border-radius: 8px;  cursor: pointer;}
```

## [Programmatic control of animations](#programmatic-control-of-animations)

You can retrieve animations off an element directly using [`Element.getAnimations()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAnimations). This returns an array of every [`Animation`](https://developer.mozilla.org/en-US/docs/Web/API/Animation) on that element. You can use the `Animation` API to do much more than you could with what the [`AnimationPlayer`](/api/animations/AnimationPlayer) from the animations package offered. From here you can `cancel()`, `play()`, `pause()`, `reverse()` and much more. This native API should provide everything you need to control your animations.

## [More on Angular animations](#more-on-angular-animations)

You might also be interested in the following:
