This topic describes the syntax of mathematical statistics functions. This topic also provides examples on how to use the functions.

The following table describes the mathematical statistics functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Category**

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

Correlation function

[corr function](#section-hvp-xo2-b3l)

corr(_x_, _y_)

Returns the coefficient of correlation between _x_ and _y_. The return value is in the range of \[0,1\].

√

×

Variance and standard deviation functions

[covar\_pop function](#section-dvz-55i-e4p)

covar\_pop(_x_, _y_)

Returns the population covariance of _x_ and _y_.

√

×

[covar\_samp function](#section-4ks-738-q9q)

covar\_samp(_x_, _y_)

Returns the sample covariance of _x_ and _y_.

√

×

[stddev function](#section-lpw-ymn-ta3)

stddev(_x_)

Returns the sample standard deviation of _x_. This function is equivalent to the stddev\_samp function.

√

×

[stddev\_samp function](#section-z9x-07z-d4n)

stddev\_samp(_x_)

Returns the sample standard deviation of _x_.

√

×

[stddev\_pop function](#section-4vo-h34-op2)

stddev\_pop(_x_)

Returns the population standard deviation of _x_.

√

×

[variance function](#section-ts2-w02-83a)

variance(_x_)

Returns the sample variance of _x_. This function is equivalent to the var\_samp function.

√

×

[var\_samp function](#section-7aa-czc-fj3)

var\_samp(_x_)

Returns the sample variance of _x_.

√

×

[var\_pop function](#section-ikh-fxc-8nb)

var\_pop(_x_)

Returns the population variance of _x_.

√

×

Linear regression functions

[regr\_intercept function](#section-rnu-6w0-32w)

regr\_intercept(_y_, _x_)

Returns the y-intercept of the line for the linear equation that is determined by the `(x,y)` pair.

√

×

[regr\_slope function](#section-dmb-272-8gm)

regr\_slope(_y_, _x_)

Returns the slope of the line for the linear equation that is determined by the `(x,y)` pair.

√

×

Cumulative distribution functions (CDFs)

[beta\_cdf function](#section-5bg-1or-fsx)

beta\_cdf(_α_, _β_, _v_)

Returns a value for the beta distribution. The function uses the following formula: P(N <= v; α, β), where α and β are parameters for the beta CDF.

√

×

[binomial\_cdf function](#section-y9l-xb4-rzx)

binomial\_cdf(_x_, _y_, _v_)

Returns a value for the binomial distribution. The function uses the following formula: P(N <= v), where x indicates the number of trials, and y indicates the probability of success (POS) of a trial.

√

×

[cauchy\_cdf function](#section-grg-qkz-1l3)

cauchy\_cdf(_x_, _y_, _v_)

Returns a value for the Cauchy distribution. The function uses the following formula: P(N <= v; x, y), where x is the location parameter indicating the peak of the distribution, and y is the scale parameter.

√

×

[chi\_squared\_cdf function](#section-yta-569-1mt)

chi\_squared\_cdf(_k_, _v_)

Returns a value for the chi-square distribution. The function uses the following formula: P(N <= v; k), where k indicates the degree of freedom.

√

×

[inverse\_beta\_cdf function](#section-ffh-ang-rdl)

inverse\_beta\_cdf(α, β, p)

Returns a value for the inverse of the beta distribution. p indicates the result of the beta CDF, which uses the P(N <= v; α, β) formula. The inverse inverse\_beta\_cdf function calculates v.

√

×

[inverse\_binomial\_cdf function](#section-dms-vc6-0t9)

inverse\_binomial\_cdf(x, y, p)

Returns a value for the inverse of the binomial distribution. p indicates the result of the binomial CDF, which uses the P(N <= v) formula. The inverse inverse\_binomial\_cdf function calculates v.

√

×

[inverse\_cauchy\_cdf function](#section-6d7-afq-vwf)

inverse\_cauchy\_cdf(x, y, p)

Returns a value for the inverse of the Cauchy distribution. p indicates the result of the Cauchy CDF, which uses the P(N <= v; x, y) formula. The inverse inverse\_cauchy\_cdf function calculates v.

√

×

[inverse\_chi\_squared\_cdf function](#section-a5u-c0u-c17)

inverse\_chi\_squared\_cdf(_k_, _p_)

Returns a value for the inverse of the chi-square distribution. p indicates the result of the chi-square CDF, which uses the P(N <= v; k) formula. The inverse inverse\_chi\_squared\_cdf function calculates v.

√

×

[inverse\_laplace\_cdf function](#section-t97-bir-wnw)

inverse\_laplace\_cdf(μ, b, p)

Returns a value for the inverse of the Laplace distribution. p indicates the result of the Laplace CDF, which uses the P(N <= v; μ, b) formula. The inverse inverse\_laplace\_cdf function calculates v.

√

×

[inverse\_normal\_cdf function](#section-f81-22y-xw4)

inverse\_normal\_cdf(_x_, _y_, _p_)

Returns a value for the inverse of the normal distribution. p indicates the result of the normal CDF, which uses the P(N < v; x, y) formula. The inverse inverse\_normal\_cdf function calculates v.

√

×

[inverse\_poisson\_cdf function](#section-ld7-hvh-bp5)

inverse\_poisson\_cdf(_x_, _y_, _p_)

Returns a value for the inverse of the Poisson distribution. p indicates the result of the Poisson CDF, which uses the P(N <= v; λ) formula. The inverse inverse\_poisson\_cdf function calculates v.

√

×

[inverse\_weibull\_cdf function](#section-ii9-brg-b2f)

inverse\_weibull\_cdf(_x_, _y_, _p_)

Returns a value for the inverse of the Weibull distribution. p indicates the result of the Weibull CDF, which uses the P(N <= v; x, y) formula. The inverse inverse\_weibull\_cdf function calculates v.

√

×

[laplace\_cdf function](#section-96m-5du-1mg)

laplace\_cdf(_μ_, _b_, _v_)

Returns a value for the Laplace distribution. The function uses the following formula: P(N <= v; μ, b), where μ is the location parameter, and b is the scale parameter.

√

×

[normal\_cdf function](#section-jy7-pqr-ry1)

normal\_cdf(_x_, _y_, _v_)

Returns a value for the normal distribution. The function uses the following formula: P(N < v; x, y), where x indicates the mean value for the normal distribution, and y indicates the standard deviation for the normal distribution.

√

×

[poisson\_cdf function](#section-pgf-c4a-jso)

poisson\_cdf(_λ_, _v_)

Returns a value for the Poisson distribution. The function uses the following formula: P(N <= v; λ), where λ indicates the average probability of random events.

√

×

[weibull\_cdf function](#section-vy2-df9-hjn)

weibull\_cdf(_x_, _y_, _v_)

Returns a value for the Weibull distribution. The function uses the following formula: P(N <= v; x, y), where x is the scale parameter, and y is the shape parameter.

√

×

## corr function

The corr function returns the coefficient of correlation between _x_ and _y_. A larger return value indicates a higher correlation.

## Syntax

```
corr(x, y)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

## Return value type

The double type. The return value is in the range of \[0,1\].

## Examples

Calculate the coefficient of correlation between the values of the request\_length and request\_time fields.

-   Query statement
    
    ```
    * | SELECT corr(request_length,request_time)
    ```
    
-   Query and analysis results![corr函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9355367261/p245055.png)
    

## covar\_pop function

The covar\_pop function returns the population covariance of _x_ and _y_.

## Syntax

```
covar_pop(x, y)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

Calculate the population covariance of pretax profits and pretax turnovers in each minute.

-   Query statement
    
    ```
    *|
    SELECT
      covar_pop(PretaxGrossAmount, PretaxAmount) AS "Population covariance",
      time_series(__time__, '1m', '%H:%i:%s', '0') AS time
    GROUP BY
      time
    ```
    
-   Query and analysis results![covar_pop](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3184692361/p297317.png)
    

## covar\_samp function

The covar\_samp function returns the sample covariance of _x_ and _y_.

## Syntax

```
covar_samp(x, y)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double type.

_y_

The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

Calculate the sample covariance of pretax profits and pretax turnovers in each minute.

-   Query statement
    
    ```
    *|
    SELECT
      covar_samp(PretaxGrossAmount, PretaxAmount) AS "Sample covariance",
      time_series(__time__, '1m', '%H:%i:%s', '0') AS time
    GROUP BY
      time
    ```
    
-   Query and analysis results![covar_samp](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p297310.png)
    

## stddev function

The stddev function returns the sample standard deviation of _x_. This function is equivalent to the stddev\_samp function.

## Syntax

```
stddev(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample standard deviation and population standard deviation of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      stddev(PretaxGrossAmount) as "Sample standard deviation",
      stddev_pop(PretaxGrossAmount) as "Population standard deviation",
      time_series(__time__, '1m', '%H:%i:%s', '0') AS time
    GROUP BY
      time
    ```
    
-   Query and analysis results![stddev_pop函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p245061.png)
    

## stddev\_samp function

The stddev\_samp function returns the sample standard deviation of _x_.

## Syntax

```
stddev_samp(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample standard deviation and population standard deviation of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      stddev_samp(PretaxGrossAmount) as "Sample standard deviation",
      stddev_pop(PretaxGrossAmount) as "Population standard deviation",
      time_series(__time__, '1m', '%H:%i:%s', '0') AS time
    GROUP BY
      time
    ```
    
-   Query and analysis results![stddev_pop函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p245061.png)
    

## stddev\_pop function

The stddev\_pop function returns the population standard deviation of _x_.

## Syntax

```
stddev_pop(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample standard deviation and population standard deviation of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      stddev(PretaxGrossAmount) as "Sample standard deviation",
      stddev_pop(PretaxGrossAmount) as "Population standard deviation",
      time_series(__time__, '1m', '%H:%i:%s', '0') AS time
    GROUP BY
      time
    ```
    
-   Query and analysis results![stddev_pop函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p245061.png)
    

## variance function

The variance function returns the sample variance of _x_. This function is equivalent to the var\_samp function.

## Syntax

```
variance(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample variance and population variance of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      variance(PretaxGrossAmount) as "Sample variance",
      var_pop(PretaxGrossAmount) as "Population variance",
      time_series(__time__, '1m', '%H:%i:%s', '0') as time
    GROUP BY
      time
    ```
    
-   Query and analysis results![variance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p297355.png)
    

## var\_samp function

The var\_samp function returns the sample variance of _x_.

## Syntax

```
var_samp(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample variance and population variance of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      var_samp(PretaxGrossAmount) as "Sample variance",
      var_pop(PretaxGrossAmount) as "Population variance",
      time_series(__time__, '1m', '%H:%i:%s', '0') as time
    GROUP BY
      time
    ```
    
-   Query and analysis results![variance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p297355.png)
    

## var\_pop function

The var\_pop function returns the population variance of _x_.

## Syntax

```
var_pop(x)
```

## Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the double or bigint type.

## Return value type

The double type.

## Examples

Calculate the sample variance and population variance of pretax incomes and display the calculated values in a line chart.

-   Query statement
    
    ```
    * |
    SELECT
      variance(PretaxGrossAmount) as "Sample variance",
      var_pop(PretaxGrossAmount) as "Population variance",
      time_series(__time__, '1m', '%H:%i:%s', '0') as time
    GROUP BY
      time
    ```
    
-   Query and analysis results![variance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0865692361/p297355.png)
    

## regr\_intercept function

The regr\_intercept function returns the y-intercept of the line for the linear equation that is determined by the `(x,y)` pair. _x_ is the dependent value. _y_ is the independent value.

## Syntax

```
regr_intercept(y, x)
```

## Parameters

**Parameter**

**Description**

_y_

The value of this parameter is of the double type.

_x_

The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

Calculate the y-intercept of the line for the linear equation that is determined by the values of the request\_time and request\_length fields.

-   Query statement
    
    ```
    * | SELECT regr_intercept(request_length,request_time)
    ```
    
-   Query and analysis results![regr_slope](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9013182361/p300404.png)
    

## regr\_slope function

The regr\_slope function returns the slope of the line for the linear equation that is determined by the `(x,y)` pair. _x_ is the dependent value. _y_ is the independent value.

## Syntax

```
regr_slope(y, x)
```

## Parameters

**Parameter**

**Description**

_y_

The value of this parameter is of the double type.

_x_

The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

Calculate the slope of the line for the linear equation that is determined by the values of the request\_time and request\_length fields.

-   Query statement
    
    ```
    * | SELECT regr_slope(request_length,request_time)
    ```
    
-   Query and analysis results![regr_slope](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9013182361/p300405.png)
    

## beta\_cdf function

The beta\_cdf function returns a value for the beta distribution.

## Syntax

```
beta_cdf(α, β, v)
```

## Parameters

**Parameter**

**Description**

_α_

The parameter for the beta CDF. The value of this parameter is of the double type. The value is greater than 0.

_β_

The parameter for the beta CDF. The value of this parameter is of the double type. The value is greater than 0.

_v_

The input parameter for the beta CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | SELECT beta_cdf(0.1, 0.5, 0.7) 
    ```
    
-   Query and analysis results![beta_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578823.png)
    

## binomial\_cdf function

The binomial\_cdf function returns a value for the binomial distribution.

## Syntax

```
binomial_cdf(x, y, v)
```

## Parameters

**Parameter**

**Description**

_x_

The number of trials. The value of this parameter is of the integer type. The value is greater than 0.

_y_

The POS of a trial. The value of this parameter is of the double type. Value range: \[0,1\].

_v_

The input parameter for the binomial CDF. The value of this parameter is of the integer type.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select binomial_cdf(10, 0.1, 1)
    ```
    
-   Query and analysis results![binomial_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578836.png)
    

## cauchy\_cdf function

The cauchy\_cdf function returns a value for the Cauchy distribution.

## Syntax

```
cauchy_cdf(x, y, v)
```

## Parameters

**Parameter**

**Description**

_x_

The location parameter that indicates the peak of the distribution. The value of this parameter is of the double type.

_y_

The scale parameter. The value of this parameter is of the double type. The value must be greater than 0.

_v_

The input parameter for the Cauchy CDF. The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select cauchy_cdf(-10, 5, -12) 
    ```
    
-   Query and analysis results![cauchy_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578868.png)
    

## chi\_squared\_cdf function

The chi\_squared\_cdf function returns a value for the chi-square distribution.

## Syntax

```
chi_squared_cdf(k, v)
```

## Parameters

**Parameter**

**Description**

_k_

The degree of freedom. The value of this parameter is of the double type. The value is greater than 0.

_v_

The input parameter of the chi-square CDF. The value of this parameter is of the double type. The value is greater than or equal to 0.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select chi_squared_cdf(3, 10) 
    ```
    
-   Query and analysis results![chi_squared_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2860420861/p578872.png)
    

## inverse\_beta\_cdf function

The inverse\_beta\_cdf function returns a value for the inverse of the beta distribution.

## Syntax

```
inverse_beta_cdf(α, β, p)
```

## Parameters

**Parameter**

**Description**

_α_

The parameter for the beta CDF. The value of this parameter is of the double type. The value is greater than 0.

_β_

The parameter for the beta CDF. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the beta CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_beta_cdf(0.1, 0.5, 0.8926585878364057)
    ```
    
-   Query and analysis results![ inverse_beta_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2860420861/p578880.png)
    

## inverse\_binomial\_cdf function

The inverse\_binomial\_cdf function returns a value for the inverse of the binomial distribution.

## Syntax

```
inverse_binomial_cdf(x, y, p)
```

## Parameters

**Parameter**

**Description**

_x_

The number of trials. The value of this parameter is of the integer type. The value is greater than 0.

_y_

The POS of a trial. The value of this parameter is of the double type. Value range: \[0,1\].

_p_

The input parameter for the inverse of the binomial CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The integer type.

## Examples

-   Query statement
    
    ```
    * | select inverse_binomial_cdf(10, 0.1, 0.7360989291000001)   
    ```
    
-   Query and analysis results![inverse_binomial_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578882.png)
    

## inverse\_cauchy\_cdf function

The inverse\_cauchy\_cdf function returns a value for the inverse of the Cauchy distribution.

## Syntax

```
inverse_cauchy_cdf(x, y, p)
```

## Parameters

**Parameter**

**Description**

_x_

The location parameter that indicates the peak of the distribution. The value of this parameter is of the double type.

_y_

The scale parameter. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the Cauchy CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_cauchy_cdf(-10, 5, 0.3788810584091566)  
    ```
    
-   Query and analysis results![inverse_cauchy_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578895.png)
    

## inverse\_chi\_squared\_cdf function

The inverse\_chi\_squared\_cdf function returns a value for the inverse of the chi-square distribution.

## Syntax

```
chi_squared_cdf(k, p)
```

## Parameters

**Parameter**

**Description**

_k_

The degree of freedom. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the chi-square CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_chi_squared_cdf(3, 0.9814338645369567) 
    ```
    
-   Query and analysis results![inverse_chi_squared_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578889.png)
    

## inverse\_laplace\_cdf function

The inverse\_laplace\_cdf function returns a value for the inverse of the Laplace distribution.

## Syntax

```
inverse_laplace_cdf(μ, b, p)
```

## Parameters

**Parameter**

**Description**

_μ_

The location parameter for the Laplace CDF. The value of this parameter is of the double type.

_b_

The scale parameter for the Laplace CDF. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the Laplace CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_laplace_cdf(11, 0.5, 0.18393972058572118)
    ```
    
-   Query and analysis results![inverse_laplace_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578905.png)
    

## inverse\_normal\_cdf function

The inverse\_normal\_cdf function returns a value for the inverse of the normal distribution.

## Syntax

```
inverse_normal_cdf(x, y, p)
```

## Parameters

**Parameter**

**Description**

_x_

The mean value for the normal distribution. The value of this parameter is of the double type.

_y_

The standard deviation for the normal distribution. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the normal CDF. The value of this parameter is of the double type. Valid values: (0,1).

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_normal_cdf(85, 10, 0.06680720126885803)  
    ```
    
-   Query and analysis results![ inverse_normal_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578929.png)
    

## inverse\_poisson\_cdf function

The inverse\_poisson\_cdf function returns a value for the inverse of the Poisson distribution.

## Syntax

```
inverse_poisson_cdf(λ, p)
```

## Parameters

**Parameter**

**Description**

_λ_

The average probability of random events.

_p_

The input parameter for the inverse of the Poisson CDF. The value of this parameter is of the double type. Value range: \[0,1\].

## Return value type

The integer type.

## Examples

-   Query statement
    
    ```
    * | select inverse_poisson_cdf(0.1, 0.9953211598395556)    
    ```
    
-   Query and analysis results![inverse_poisson_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578947.png)
    

## inverse\_weibull\_cdf function

The inverse\_weibull\_cdf function returns a value for the inverse of the Weibull distribution.

## Syntax

```
inverse_weibull_cdf(x, y, p)
```

## Parameters

**Parameter**

**Description**

_x_

The scale parameter for the Weibull CDF. The value of this parameter is of the double type. The value is greater than 0.

_y_

The shape parameter for the Weibull CDF. The value of this parameter is of the double type. The value is greater than 0.

_p_

The input parameter for the inverse of the Weibull CDF. The value of this parameter is of the double type. Valid values: \[0,1\].

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select inverse_weibull_cdf(1, 5, 0.3296799539643607) 
    ```
    
-   Query and analysis results![ inverse_weibull_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578966.png)
    

## laplace\_cdf function

The laplace\_cdf function returns a value for the Laplace distribution.

## Syntax

```
laplace_cdf(μ, b, v)
```

## Parameters

**Parameter**

**Description**

_μ_

The location parameter for the Laplace CDF. The value of this parameter is of the double type.

_b_

The scale parameter for the Laplace CDF. The value of this parameter is of the double type. The value is greater than 0.

_v_

The input parameter for the Laplace CDF. The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select laplace_cdf(11, 0.5, 10.5) 
    ```
    
-   Query and analysis results![laplace_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578978.png)
    

## normal\_cdf function

The normal\_cdf function returns a value for the normal distribution.

## Syntax

```
normal_cdf(x, y, v)
```

## Parameters

**Parameter**

**Description**

_x_

The mean value for the normal distribution. The value of this parameter is of the double type.

_y_

The standard deviation for the normal distribution. The value of this parameter is of the double type. The value is greater than 0.

_v_

The input parameter for the normal CDF. The value of this parameter is of the double type.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select normal_cdf(85, 10, 70) 
    ```
    
-   Query and analysis results![normal_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578981.png)
    

## poisson\_cdf function

The poisson\_cdf function returns a value for the Poisson distribution.

## Syntax

```
poisson_cdf(λ, v)
```

## Parameters

**Parameter**

**Description**

_λ_

The average probability of random events.

_v_

The input parameter for the Poisson CDF. The value of this parameter is of the integer type. The value is greater than or equal to 0.

## Return value type

The double type.

## Examples

-   Query statement
    
    ```
    * | select poisson_cdf(0.1, 1) 
    ```
    
-   Query and analysis results![poisson_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578955.png)
    

## weibull\_cdf function

The weibull\_cdf function returns a value for the Weibull distribution.

## Syntax

```
weibull_cdf(x, y, v)
```

## Parameters

**Parameter**

**Description**

_x_

The scale parameter for the Weibull CDF. The value of this parameter is of the double type. The value is greater than 0.

_y_

The shape parameter for the Weibull CDF. The value of this parameter is of the double type. The value is greater than 0.

_v_

The input parameter for the Weibull CDF. The value of this parameter is of the double type.

## Return value type

## Examples

-   Query statement
    
    ```
    * | select weibull_cdf(1, 5, 2) 
    ```
    
-   Query and analysis results![weibull_cdf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6037610861/p578961.png)
