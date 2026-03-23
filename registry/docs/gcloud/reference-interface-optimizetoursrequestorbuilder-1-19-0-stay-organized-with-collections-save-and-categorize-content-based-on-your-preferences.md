-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OptimizeToursRequestOrBuilder (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public interface OptimizeToursRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAllowLargeDeadlineDespiteInterruptionRisk()

```
public abstract boolean getAllowLargeDeadlineDespiteInterruptionRisk()
```

If this is set, then the request can have a deadline (see [https://grpc.io/blog/deadlines](https://grpc.io/blog/deadlines)) of up to 60 minutes. Otherwise, the maximum deadline is only 30 minutes. Note that long-lived requests have a significantly larger (but still small) risk of interruption.

`bool allow_large_deadline_despite_interruption_risk = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The allowLargeDeadlineDespiteInterruptionRisk.

### getConsiderRoadTraffic()

```
public abstract boolean getConsiderRoadTraffic()
```

Consider traffic estimation in calculating `ShipmentRoute` fields Transition.travel\_duration, Visit.start\_time, and `vehicle_end_time`; in setting the ShipmentRoute.has\_traffic\_infeasibilities field, and in calculating the OptimizeToursResponse.total\_cost field.

`bool consider_road_traffic = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The considerRoadTraffic.

### getGeodesicMetersPerSecond()

```
public abstract double getGeodesicMetersPerSecond()
```

When `use_geodesic_distances` is true, this field must be set and defines the speed applied to compute travel times. Its value must be at least 1.0 meters/seconds.

`optional double geodesic_meters_per_second = 16;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The geodesicMetersPerSecond.

### getInjectedFirstSolutionRoutes(int index)

```
public abstract ShipmentRoute getInjectedFirstSolutionRoutes(int index)
```

Guide the optimization algorithm in finding a first solution that is similar to a previous solution.

The model is constrained when the first solution is built. Any shipments not performed on a route are implicitly skipped in the first solution, but they may be performed in successive solutions.

The solution must satisfy some basic validity assumptions:

-   for all routes, `vehicle_index` must be in range and not be duplicated.
-   for all visits, `shipment_index` and `visit_request_index` must be in range.
-   a shipment may only be referenced on one route.
-   the pickup of a pickup-delivery shipment must be performed before the delivery.
-   no more than one pickup alternative or delivery alternative of a shipment may be performed.
-   for all routes, times are increasing (i.e., `vehicle_start_time <= visits[0].start_time <= visits[1].start_time ... <= vehicle_end_time`).
-   a shipment may only be performed on a vehicle that is allowed. A vehicle is allowed if Shipment.allowed\_vehicle\_indices is empty or its `vehicle_index` is included in Shipment.allowed\_vehicle\_indices.
    
    If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.
    

`repeated .google.cloud.optimization.v1.ShipmentRoute injected_first_solution_routes = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRoute)`

### getInjectedFirstSolutionRoutesCount()

```
public abstract int getInjectedFirstSolutionRoutesCount()
```

Guide the optimization algorithm in finding a first solution that is similar to a previous solution.

The model is constrained when the first solution is built. Any shipments not performed on a route are implicitly skipped in the first solution, but they may be performed in successive solutions.

The solution must satisfy some basic validity assumptions:

-   for all routes, `vehicle_index` must be in range and not be duplicated.
-   for all visits, `shipment_index` and `visit_request_index` must be in range.
-   a shipment may only be referenced on one route.
-   the pickup of a pickup-delivery shipment must be performed before the delivery.
-   no more than one pickup alternative or delivery alternative of a shipment may be performed.
-   for all routes, times are increasing (i.e., `vehicle_start_time <= visits[0].start_time <= visits[1].start_time ... <= vehicle_end_time`).
-   a shipment may only be performed on a vehicle that is allowed. A vehicle is allowed if Shipment.allowed\_vehicle\_indices is empty or its `vehicle_index` is included in Shipment.allowed\_vehicle\_indices.
    
    If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.
    

`repeated .google.cloud.optimization.v1.ShipmentRoute injected_first_solution_routes = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInjectedFirstSolutionRoutesList()

```
public abstract List<ShipmentRoute> getInjectedFirstSolutionRoutesList()
```

Guide the optimization algorithm in finding a first solution that is similar to a previous solution.

The model is constrained when the first solution is built. Any shipments not performed on a route are implicitly skipped in the first solution, but they may be performed in successive solutions.

The solution must satisfy some basic validity assumptions:

-   for all routes, `vehicle_index` must be in range and not be duplicated.
-   for all visits, `shipment_index` and `visit_request_index` must be in range.
-   a shipment may only be referenced on one route.
-   the pickup of a pickup-delivery shipment must be performed before the delivery.
-   no more than one pickup alternative or delivery alternative of a shipment may be performed.
-   for all routes, times are increasing (i.e., `vehicle_start_time <= visits[0].start_time <= visits[1].start_time ... <= vehicle_end_time`).
-   a shipment may only be performed on a vehicle that is allowed. A vehicle is allowed if Shipment.allowed\_vehicle\_indices is empty or its `vehicle_index` is included in Shipment.allowed\_vehicle\_indices.
    
    If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.
    

`repeated .google.cloud.optimization.v1.ShipmentRoute injected_first_solution_routes = 7;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRoute)>`

### getInjectedFirstSolutionRoutesOrBuilder(int index)

```
public abstract ShipmentRouteOrBuilder getInjectedFirstSolutionRoutesOrBuilder(int index)
```

Guide the optimization algorithm in finding a first solution that is similar to a previous solution.

The model is constrained when the first solution is built. Any shipments not performed on a route are implicitly skipped in the first solution, but they may be performed in successive solutions.

The solution must satisfy some basic validity assumptions:

-   for all routes, `vehicle_index` must be in range and not be duplicated.
-   for all visits, `shipment_index` and `visit_request_index` must be in range.
-   a shipment may only be referenced on one route.
-   the pickup of a pickup-delivery shipment must be performed before the delivery.
-   no more than one pickup alternative or delivery alternative of a shipment may be performed.
-   for all routes, times are increasing (i.e., `vehicle_start_time <= visits[0].start_time <= visits[1].start_time ... <= vehicle_end_time`).
-   a shipment may only be performed on a vehicle that is allowed. A vehicle is allowed if Shipment.allowed\_vehicle\_indices is empty or its `vehicle_index` is included in Shipment.allowed\_vehicle\_indices.
    
    If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.
    

`repeated .google.cloud.optimization.v1.ShipmentRoute injected_first_solution_routes = 7;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRouteOrBuilder](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRouteOrBuilder)`

### getInjectedFirstSolutionRoutesOrBuilderList()

```
public abstract List<? extends ShipmentRouteOrBuilder> getInjectedFirstSolutionRoutesOrBuilderList()
```

Guide the optimization algorithm in finding a first solution that is similar to a previous solution.

The model is constrained when the first solution is built. Any shipments not performed on a route are implicitly skipped in the first solution, but they may be performed in successive solutions.

The solution must satisfy some basic validity assumptions:

-   for all routes, `vehicle_index` must be in range and not be duplicated.
-   for all visits, `shipment_index` and `visit_request_index` must be in range.
-   a shipment may only be referenced on one route.
-   the pickup of a pickup-delivery shipment must be performed before the delivery.
-   no more than one pickup alternative or delivery alternative of a shipment may be performed.
-   for all routes, times are increasing (i.e., `vehicle_start_time <= visits[0].start_time <= visits[1].start_time ... <= vehicle_end_time`).
-   a shipment may only be performed on a vehicle that is allowed. A vehicle is allowed if Shipment.allowed\_vehicle\_indices is empty or its `vehicle_index` is included in Shipment.allowed\_vehicle\_indices.
    
    If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.
    

`repeated .google.cloud.optimization.v1.ShipmentRoute injected_first_solution_routes = 7;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRouteOrBuilder>`

### getInjectedSolutionConstraint()

```
public abstract InjectedSolutionConstraint getInjectedSolutionConstraint()
```

Constrain the optimization algorithm to find a final solution that is similar to a previous solution. For example, this may be used to freeze portions of routes which have already been completed or which are to be completed but must not be modified.

If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.

`.google.cloud.optimization.v1.InjectedSolutionConstraint injected_solution_constraint = 8;`

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint)`

The injectedSolutionConstraint.

### getInjectedSolutionConstraintOrBuilder()

```
public abstract InjectedSolutionConstraintOrBuilder getInjectedSolutionConstraintOrBuilder()
```

Constrain the optimization algorithm to find a final solution that is similar to a previous solution. For example, this may be used to freeze portions of routes which have already been completed or which are to be completed but must not be modified.

If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.

`.google.cloud.optimization.v1.InjectedSolutionConstraint injected_solution_constraint = 8;`

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraintOrBuilder](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.InjectedSolutionConstraintOrBuilder)`

### getInterpretInjectedSolutionsUsingLabels()

```
public abstract boolean getInterpretInjectedSolutionsUsingLabels()
```

If true:

-   uses ShipmentRoute.vehicle\_label instead of `vehicle_index` to match routes in an injected solution with vehicles in the request; reuses the mapping of original ShipmentRoute.vehicle\_index to new ShipmentRoute.vehicle\_index to update ConstraintRelaxation.vehicle\_indices if non-empty, but the mapping must be unambiguous (i.e., multiple `ShipmentRoute`s must not share the same original `vehicle_index`).
-   uses ShipmentRoute.Visit.shipment\_label instead of `shipment_index` to match visits in an injected solution with shipments in the request;
-   uses SkippedShipment.label instead of SkippedShipment.index to match skipped shipments in the injected solution with request shipments.
    
    This interpretation applies to the `injected_first_solution_routes`, `injected_solution_constraint`, and `refresh_details_routes` fields. It can be used when shipment or vehicle indices in the request have changed since the solution was created, perhaps because shipments or vehicles have been removed from or added to the request.
    
    If true, labels in the following categories must appear at most once in their category:
    
-   Vehicle.label in the request;
    
-   Shipment.label in the request;
-   ShipmentRoute.vehicle\_label in the injected solution;
-   SkippedShipment.label and ShipmentRoute.Visit.shipment\_label in the injected solution (except pickup/delivery visit pairs, whose `shipment_label` must appear twice).
    
    If a `vehicle_label` in the injected solution does not correspond to a request vehicle, the corresponding route is removed from the solution along with its visits. If a `shipment_label` in the injected solution does not correspond to a request shipment, the corresponding visit is removed from the solution. If a SkippedShipment.label in the injected solution does not correspond to a request shipment, the `SkippedShipment` is removed from the solution.
    
    Removing route visits or entire routes from an injected solution may have an effect on the implied constraints, which may lead to change in solution, validation errors, or infeasibility.
    
    NOTE: The caller must ensure that each Vehicle.label (resp. Shipment.label) uniquely identifies a vehicle (resp. shipment) entity used across the two relevant requests: the past request that produced the `OptimizeToursResponse` used in the injected solution and the current request that includes the injected solution. The uniqueness checks described above are not enough to guarantee this requirement.
    

`bool interpret_injected_solutions_using_labels = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The interpretInjectedSolutionsUsingLabels.

### getLabel()

```
public abstract String getLabel()
```

Label that may be used to identify this request, reported back in the OptimizeToursResponse.request\_label.

`string label = 17;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The label.

### getLabelBytes()

```
public abstract ByteString getLabelBytes()
```

Label that may be used to identify this request, reported back in the OptimizeToursResponse.request\_label.

`string label = 17;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for label.

### getMaxValidationErrors()

```
public abstract int getMaxValidationErrors()
```

Truncates the number of validation errors returned. These errors are typically attached to an INVALID\_ARGUMENT error payload as a BadRequest error detail ([https://cloud.google.com/apis/design/errors#error\_details](https://cloud.google.com/apis/design/errors#error_details)), unless solving\_mode=VALIDATE\_ONLY: see the OptimizeToursResponse.validation\_errors field. This defaults to 100 and is capped at 10,000.

`optional int32 max_validation_errors = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxValidationErrors.

### getModel()

```
public abstract ShipmentModel getModel()
```

Shipment model to solve.

`.google.cloud.optimization.v1.ShipmentModel model = 3;`

**Returns**

**Type**

**Description**

`[ShipmentModel](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentModel)`

The model.

### getModelOrBuilder()

```
public abstract ShipmentModelOrBuilder getModelOrBuilder()
```

Shipment model to solve.

`.google.cloud.optimization.v1.ShipmentModel model = 3;`

**Returns**

**Type**

**Description**

`[ShipmentModelOrBuilder](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentModelOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Required. Target project and location to make a call.

Format: `projects/{project-id}/locations/{location-id}`.

If no location is specified, a region will be chosen automatically.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. Target project and location to make a call.

Format: `projects/{project-id}/locations/{location-id}`.

If no location is specified, a region will be chosen automatically.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getPopulatePolylines()

```
public abstract boolean getPopulatePolylines()
```

If true, polylines will be populated in response `ShipmentRoute`s.

`bool populate_polylines = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The populatePolylines.

### getPopulateTransitionPolylines()

```
public abstract boolean getPopulateTransitionPolylines()
```

If true, polylines will be populated in response ShipmentRoute.transitions. Note that in this case, the polylines will also be populated in the deprecated `travel_steps`.

`bool populate_transition_polylines = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The populateTransitionPolylines.

### getPopulateTravelStepPolylines() (deprecated)

```
public abstract boolean getPopulateTravelStepPolylines()
```

**Deprecated.** _google.cloud.optimization.v1.OptimizeToursRequest.populate\_travel\_step\_polylines is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=351_

Deprecated: Use OptimizeToursRequest.populate\_transition\_polylines instead. If true, polylines will be populated in response ShipmentRoute.transitions. Note that in this case, the polylines will also be populated in the deprecated `travel_steps`.

`bool populate_travel_step_polylines = 20 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The populateTravelStepPolylines.

### getRefreshDetailsRoutes(int index)

```
public abstract ShipmentRoute getRefreshDetailsRoutes(int index)
```

If non-empty, the given routes will be refreshed, without modifying their underlying sequence of visits or travel times: only other details will be updated. This does not solve the model.

As of 2020/11, this only populates the polylines of non-empty routes and requires that `populate_polylines` is true.

The `route_polyline` fields of the passed-in routes may be inconsistent with route `transitions`.

This field must not be used together with `injected_first_solution_routes` or `injected_solution_constraint`.

`Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior. Polylines are still populated between all visits in all non-empty routes regardless of whether the related shipments or vehicles are ignored.

`repeated .google.cloud.optimization.v1.ShipmentRoute refresh_details_routes = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRoute)`

### getRefreshDetailsRoutesCount()

```
public abstract int getRefreshDetailsRoutesCount()
```

If non-empty, the given routes will be refreshed, without modifying their underlying sequence of visits or travel times: only other details will be updated. This does not solve the model.

As of 2020/11, this only populates the polylines of non-empty routes and requires that `populate_polylines` is true.

The `route_polyline` fields of the passed-in routes may be inconsistent with route `transitions`.

This field must not be used together with `injected_first_solution_routes` or `injected_solution_constraint`.

`Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior. Polylines are still populated between all visits in all non-empty routes regardless of whether the related shipments or vehicles are ignored.

`repeated .google.cloud.optimization.v1.ShipmentRoute refresh_details_routes = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRefreshDetailsRoutesList()

```
public abstract List<ShipmentRoute> getRefreshDetailsRoutesList()
```

If non-empty, the given routes will be refreshed, without modifying their underlying sequence of visits or travel times: only other details will be updated. This does not solve the model.

As of 2020/11, this only populates the polylines of non-empty routes and requires that `populate_polylines` is true.

The `route_polyline` fields of the passed-in routes may be inconsistent with route `transitions`.

This field must not be used together with `injected_first_solution_routes` or `injected_solution_constraint`.

`Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior. Polylines are still populated between all visits in all non-empty routes regardless of whether the related shipments or vehicles are ignored.

`repeated .google.cloud.optimization.v1.ShipmentRoute refresh_details_routes = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRoute)>`

### getRefreshDetailsRoutesOrBuilder(int index)

```
public abstract ShipmentRouteOrBuilder getRefreshDetailsRoutesOrBuilder(int index)
```

If non-empty, the given routes will be refreshed, without modifying their underlying sequence of visits or travel times: only other details will be updated. This does not solve the model.

As of 2020/11, this only populates the polylines of non-empty routes and requires that `populate_polylines` is true.

The `route_polyline` fields of the passed-in routes may be inconsistent with route `transitions`.

This field must not be used together with `injected_first_solution_routes` or `injected_solution_constraint`.

`Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior. Polylines are still populated between all visits in all non-empty routes regardless of whether the related shipments or vehicles are ignored.

`repeated .google.cloud.optimization.v1.ShipmentRoute refresh_details_routes = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRouteOrBuilder](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.ShipmentRouteOrBuilder)`

### getRefreshDetailsRoutesOrBuilderList()

```
public abstract List<? extends ShipmentRouteOrBuilder> getRefreshDetailsRoutesOrBuilderList()
```

If non-empty, the given routes will be refreshed, without modifying their underlying sequence of visits or travel times: only other details will be updated. This does not solve the model.

As of 2020/11, this only populates the polylines of non-empty routes and requires that `populate_polylines` is true.

The `route_polyline` fields of the passed-in routes may be inconsistent with route `transitions`.

This field must not be used together with `injected_first_solution_routes` or `injected_solution_constraint`.

`Shipment.ignore` and `Vehicle.ignore` have no effect on the behavior. Polylines are still populated between all visits in all non-empty routes regardless of whether the related shipments or vehicles are ignored.

`repeated .google.cloud.optimization.v1.ShipmentRoute refresh_details_routes = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRouteOrBuilder>`

### getSearchMode()

```
public abstract OptimizeToursRequest.SearchMode getSearchMode()
```

Search mode used to solve the request.

`.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode search_mode = 6;`

**Returns**

**Type**

**Description**

`[OptimizeToursRequest.SearchMode](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode)`

The searchMode.

### getSearchModeValue()

```
public abstract int getSearchModeValue()
```

Search mode used to solve the request.

`.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode search_mode = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for searchMode.

### getSolvingMode()

```
public abstract OptimizeToursRequest.SolvingMode getSolvingMode()
```

By default, the solving mode is `DEFAULT_SOLVE` (0).

`.google.cloud.optimization.v1.OptimizeToursRequest.SolvingMode solving_mode = 4;`

**Returns**

**Type**

**Description**

`[OptimizeToursRequest.SolvingMode](/java/docs/reference/google-cloud-optimization/1.19.0/com.google.cloud.optimization.v1.OptimizeToursRequest.SolvingMode)`

The solvingMode.

### getSolvingModeValue()

```
public abstract int getSolvingModeValue()
```

By default, the solving mode is `DEFAULT_SOLVE` (0).

`.google.cloud.optimization.v1.OptimizeToursRequest.SolvingMode solving_mode = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for solvingMode.

### getTimeout()

```
public abstract Duration getTimeout()
```

If this timeout is set, the server returns a response before the timeout period has elapsed or the server deadline for synchronous requests is reached, whichever is sooner.

For asynchronous requests, the server will generate a solution (if possible) before the timeout has elapsed.

`.google.protobuf.Duration timeout = 2;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeout.

### getTimeoutOrBuilder()

```
public abstract DurationOrBuilder getTimeoutOrBuilder()
```

If this timeout is set, the server returns a response before the timeout period has elapsed or the server deadline for synchronous requests is reached, whichever is sooner.

For asynchronous requests, the server will generate a solution (if possible) before the timeout has elapsed.

`.google.protobuf.Duration timeout = 2;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getUseGeodesicDistances()

```
public abstract boolean getUseGeodesicDistances()
```

If true, travel distances will be computed using geodesic distances instead of Google Maps distances, and travel times will be computed using geodesic distances with a speed defined by `geodesic_meters_per_second`.

`bool use_geodesic_distances = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The useGeodesicDistances.

### hasGeodesicMetersPerSecond()

```
public abstract boolean hasGeodesicMetersPerSecond()
```

When `use_geodesic_distances` is true, this field must be set and defines the speed applied to compute travel times. Its value must be at least 1.0 meters/seconds.

`optional double geodesic_meters_per_second = 16;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the geodesicMetersPerSecond field is set.

### hasInjectedSolutionConstraint()

```
public abstract boolean hasInjectedSolutionConstraint()
```

Constrain the optimization algorithm to find a final solution that is similar to a previous solution. For example, this may be used to freeze portions of routes which have already been completed or which are to be completed but must not be modified.

If the injected solution is not feasible, a validation error is not necessarily returned and an error indicating infeasibility may be returned instead.

`.google.cloud.optimization.v1.InjectedSolutionConstraint injected_solution_constraint = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the injectedSolutionConstraint field is set.

### hasMaxValidationErrors()

```
public abstract boolean hasMaxValidationErrors()
```

Truncates the number of validation errors returned. These errors are typically attached to an INVALID\_ARGUMENT error payload as a BadRequest error detail ([https://cloud.google.com/apis/design/errors#error\_details](https://cloud.google.com/apis/design/errors#error_details)), unless solving\_mode=VALIDATE\_ONLY: see the OptimizeToursResponse.validation\_errors field. This defaults to 100 and is capped at 10,000.

`optional int32 max_validation_errors = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the maxValidationErrors field is set.

### hasModel()

```
public abstract boolean hasModel()
```

Shipment model to solve.

`.google.cloud.optimization.v1.ShipmentModel model = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the model field is set.

### hasTimeout()

```
public abstract boolean hasTimeout()
```

If this timeout is set, the server returns a response before the timeout period has elapsed or the server deadline for synchronous requests is reached, whichever is sooner.

For asynchronous requests, the server will generate a solution (if possible) before the timeout has elapsed.

`.google.protobuf.Duration timeout = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeout field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
