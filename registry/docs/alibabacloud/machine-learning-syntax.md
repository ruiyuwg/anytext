Simple Log Service features machine learning capabilities that support various algorithms and calling methods. You can use analytic statements and machine learning functions to analyze the characteristics of one or more fields over time. Various analysis algorithms are offered to address time series data challenges, such as predicting trends, detecting anomalies, decomposing series, and clustering multiple series. These algorithms are compatible with standard SQL functions, simplifying usage and enhancing troubleshooting efficiency.

## Features

-   Various smooth operations for single-time series data.
    
-   Algorithms for prediction, anomaly detection, change point detection, inflection point detection, and multi-period estimation of single-time series data.
    
-   Decomposition operations for analyzing single-time series data.
    
-   Various clustering algorithms for multi-time series data.
    
-   Multi-field pattern mining based on sequences of numeric data or text.
    

## Limits

-   Time series data must be sampled at the same interval.
    
-   The data cannot contain multiple samples from the same point in time.
    
-   Processing capacity must not exceed the maximum limits listed below:
    
    **Item**
    
    **Limit**
    
    Capacity of the time-series data processing
    
    Data can be collected from a maximum of 150,000 consecutive points in time.
    
    If the data volume exceeds the processing capacity, you must aggregate the data or reduce the sampling amount.
    
    Capacity of the density-based clustering algorithm
    
    Up to 5,000 time series curves can be clustered simultaneously, with each curve limited to 1,440 points in time.
    
    Capacity of the hierarchical clustering algorithm
    
    Up to 2,000 time series curves can be clustered simultaneously, with each curve limited to 1,440 points in time.
    

## Machine learning functions

**Category**

**Function**

**Description**

Time series

[Smooth function](/help/en/sls/smooth-functions#undefined)

ts\_smooth\_simple

Uses the Holt Winters algorithm to smooth time series data.

ts\_smooth\_fir

Uses the finite impulse response (FIR) filter to smooth time series data.

ts\_smooth\_iir

Uses the infinite impulse response (IIR) filter to smooth time series data.

[Multi-period estimation function](/help/en/sls/multi-period-estimation-functions#undefined)

ts\_period\_detect

Estimates time series data by period.

[Change point detection function](/help/en/sls/change-point-detection-functions#undefined)

ts\_cp\_detect

Detects intervals with differing statistical features, identifying the interval endpoints as change points.

ts\_breakout\_detect

Detects the points in time at which data experiences dramatic changes.

[Maximum value detection function](/help/en/sls/maximum-value-detection-functions#undefined)

ts\_find\_peaks

Detects the local maximum value of time series data in a specified window.

[Prediction and anomaly detection function](/help/en/sls/prediction-and-anomaly-detection-functions#undefined)

ts\_predicate\_simple

Uses default parameters to model time series data, predict time series data, and detect anomalies.

ts\_predicate\_ar

Uses an autoregressive (AR) model to model time series data, predict time series data, and detect anomalies.

ts\_predicate\_arma

Uses an autoregressive moving average (ARMA) model to model time series data, predict time series data, and detect anomalies.

ts\_predicate\_arima

Uses an autoregressive integrated moving average (ARIMA) model to model time series data, predict time series data, and detect anomalies.

ts\_regression\_predict

Predicts the long-run trend for a single periodic time series.

[Sequence decomposition function](/help/en/sls/sequence-decomposition-function#undefined)

ts\_decompose

Uses the Seasonal and Trend decomposition using Loess (STL) algorithm to decompose time series data.

[Kernal density estimation functions](/help/en/sls/kernal-density-estimation-functions#concept-2336048)

kernel\_density\_estimation

Fits observed data points using a smooth peak function to simulate the actual probability distribution curve.

Pattern mining

[Frequent pattern statistical function](/help/en/sls/frequent-pattern-mining-function#undefined)

pattern\_stat

Mines representative combinations of attributes among the given multi-attribute field samples to obtain frequent statistical patterns.

[Differential pattern statistical function](/help/en/sls/difference-pattern-mining-drill-down-analysis-of-tabular-data-function#undefined)

pattern\_diff

Identifies the pattern that causes differences between two collections in specified conditions.

[Root cause analysis function](/help/en/sls/root-cause-analysis-function#concept-c55-csr-dhb)

rca\_kpi\_search

Analyzes the subdimension attributes that cause anomalies of the monitoring metric.

[Correlation analysis functions](/help/en/sls/correlation-analysis-functions#concept-827007)

ts\_association\_analysis

Identifies the metrics correlated to a specified metric among multiple observed metrics in the system.

ts\_similar

Identifies the metrics correlated to specified time series data among multiple observed ones in the system.

[Request URL classification function](/help/en/sls/request-url-classification-function#concept-2461828)

url\_classify

Classifies a request URL and assigns a tag to it, along with a regular expression that defines the tag's pattern.
