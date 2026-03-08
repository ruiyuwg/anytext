# Reference

## Methods[​](#methods "Direct link to Methods")

### `step0()`[​](#step0 "Direct link to step0")

tsx

```
static step0(n: number);
```

A stepping function, returns 1 for any positive value of `n`.

***

### `step1()`[​](#step1 "Direct link to step1")

tsx

```
static step1(n: number);
```

A stepping function, returns 1 if `n` is greater than or equal to 1.

***

### `linear()`[​](#linear "Direct link to linear")

tsx

```
static linear(t: number);
```

A linear function, `f(t) = t`. Position correlates to elapsed time one to one.

<https://cubic-bezier.com/#0,0,1,1>

***

### `ease()`[​](#ease "Direct link to ease")

tsx

```
static ease(t: number);
```

A basic inertial interaction, similar to an object slowly accelerating to speed.

<https://cubic-bezier.com/#.42,0,1,1>

***

### `quad()`[​](#quad "Direct link to quad")

tsx

```
static quad(t: number);
```

A quadratic function, `f(t) = t * t`. Position equals the square of elapsed time.

<https://easings.net/#easeInQuad>

***

### `cubic()`[​](#cubic "Direct link to cubic")

tsx

```
static cubic(t: number);
```

A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed time.

<https://easings.net/#easeInCubic>

***

### `poly()`[​](#poly "Direct link to poly")

tsx

```
static poly(n: number);
```

A power function. Position is equal to the Nth power of elapsed time.

n = 4: <https://easings.net/#easeInQuart> n = 5: <https://easings.net/#easeInQuint>

***

### `sin()`[​](#sin "Direct link to sin")

tsx

```
static sin(t: number);
```

A sinusoidal function.

<https://easings.net/#easeInSine>

***

### `circle()`[​](#circle "Direct link to circle")

tsx

```
static circle(t: number);
```

A circular function.

<https://easings.net/#easeInCirc>

***

### `exp()`[​](#exp "Direct link to exp")

tsx

```
static exp(t: number);
```

An exponential function.

<https://easings.net/#easeInExpo>

***

### `elastic()`[​](#elastic "Direct link to elastic")

tsx

```
static elastic(bounciness: number);
```

A basic elastic interaction, similar to a spring oscillating back and forth.

Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times.

<https://easings.net/#easeInElastic>

***

### `back()`[​](#back "Direct link to back")

tsx

```
static back(s)
```

Use with `Animated.parallel()` to create a basic effect where the object animates back slightly as the animation starts.

***

### `bounce()`[​](#bounce "Direct link to bounce")

tsx

```
static bounce(t: number);
```

Provides a basic bouncing effect.

<https://easings.net/#easeInBounce>

***

### `bezier()`[​](#bezier "Direct link to bezier")

tsx

```
static bezier(x1: number, y1: number, x2: number, y2: number);
```

Provides a cubic bezier curve, equivalent to CSS Transitions' `transition-timing-function`.

A useful tool to visualize cubic bezier curves can be found at

***

### `in()`[​](#in "Direct link to in")

tsx

```
static in(easing: number);
```

Runs an easing function forwards.

***

### `out()`[​](#out "Direct link to out")

tsx

```
static out(easing: number);
```

Runs an easing function backwards.

***

### `inOut()`[​](#inout "Direct link to inout")

tsx

```
static inOut(easing: number);
```

Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration.

***
