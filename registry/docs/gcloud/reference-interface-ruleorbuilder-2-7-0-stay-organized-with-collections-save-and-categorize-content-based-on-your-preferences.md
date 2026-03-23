-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RuleOrBuilder (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface RuleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getActionCase()

```
public abstract Rule.ActionCase getActionCase()
```

**Returns**

**Type**

**Description**

[Rule.ActionCase](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.ActionCase)

### getBoostAction()

```
public abstract Rule.BoostAction getBoostAction()
```

A boost action.

`.google.cloud.retail.v2beta.Rule.BoostAction boost_action = 2;`

**Returns**

**Type**

**Description**

[Rule.BoostAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.BoostAction)

The boostAction.

### getBoostActionOrBuilder()

```
public abstract Rule.BoostActionOrBuilder getBoostActionOrBuilder()
```

A boost action.

`.google.cloud.retail.v2beta.Rule.BoostAction boost_action = 2;`

**Returns**

**Type**

**Description**

[Rule.BoostActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.BoostActionOrBuilder)

### getCondition()

```
public abstract Condition getCondition()
```

Required. The condition that triggers the rule. If the condition is empty, the rule will always apply.

`.google.cloud.retail.v2beta.Condition condition = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[Condition](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Condition)

The condition.

### getConditionOrBuilder()

```
public abstract ConditionOrBuilder getConditionOrBuilder()
```

Required. The condition that triggers the rule. If the condition is empty, the rule will always apply.

`.google.cloud.retail.v2beta.Condition condition = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ConditionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.ConditionOrBuilder)

### getDoNotAssociateAction()

```
public abstract Rule.DoNotAssociateAction getDoNotAssociateAction()
```

Prevents term from being associated with other terms.

`.google.cloud.retail.v2beta.Rule.DoNotAssociateAction do_not_associate_action = 7;`

**Returns**

**Type**

**Description**

[Rule.DoNotAssociateAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.DoNotAssociateAction)

The doNotAssociateAction.

### getDoNotAssociateActionOrBuilder()

```
public abstract Rule.DoNotAssociateActionOrBuilder getDoNotAssociateActionOrBuilder()
```

Prevents term from being associated with other terms.

`.google.cloud.retail.v2beta.Rule.DoNotAssociateAction do_not_associate_action = 7;`

**Returns**

**Type**

**Description**

[Rule.DoNotAssociateActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.DoNotAssociateActionOrBuilder)

### getFilterAction()

```
public abstract Rule.FilterAction getFilterAction()
```

Filters results.

`.google.cloud.retail.v2beta.Rule.FilterAction filter_action = 10;`

**Returns**

**Type**

**Description**

[Rule.FilterAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.FilterAction)

The filterAction.

### getFilterActionOrBuilder()

```
public abstract Rule.FilterActionOrBuilder getFilterActionOrBuilder()
```

Filters results.

`.google.cloud.retail.v2beta.Rule.FilterAction filter_action = 10;`

**Returns**

**Type**

**Description**

[Rule.FilterActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.FilterActionOrBuilder)

### getIgnoreAction()

```
public abstract Rule.IgnoreAction getIgnoreAction()
```

Ignores specific terms from query during search.

`.google.cloud.retail.v2beta.Rule.IgnoreAction ignore_action = 9;`

**Returns**

**Type**

**Description**

[Rule.IgnoreAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.IgnoreAction)

The ignoreAction.

### getIgnoreActionOrBuilder()

```
public abstract Rule.IgnoreActionOrBuilder getIgnoreActionOrBuilder()
```

Ignores specific terms from query during search.

`.google.cloud.retail.v2beta.Rule.IgnoreAction ignore_action = 9;`

**Returns**

**Type**

**Description**

[Rule.IgnoreActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.IgnoreActionOrBuilder)

### getOnewaySynonymsAction()

```
public abstract Rule.OnewaySynonymsAction getOnewaySynonymsAction()
```

Treats specific term as a synonym with a group of terms. Group of terms will not be treated as synonyms with the specific term.

`.google.cloud.retail.v2beta.Rule.OnewaySynonymsAction oneway_synonyms_action = 6;`

**Returns**

**Type**

**Description**

[Rule.OnewaySynonymsAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.OnewaySynonymsAction)

The onewaySynonymsAction.

### getOnewaySynonymsActionOrBuilder()

```
public abstract Rule.OnewaySynonymsActionOrBuilder getOnewaySynonymsActionOrBuilder()
```

Treats specific term as a synonym with a group of terms. Group of terms will not be treated as synonyms with the specific term.

`.google.cloud.retail.v2beta.Rule.OnewaySynonymsAction oneway_synonyms_action = 6;`

**Returns**

**Type**

**Description**

[Rule.OnewaySynonymsActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.OnewaySynonymsActionOrBuilder)

### getRedirectAction()

```
public abstract Rule.RedirectAction getRedirectAction()
```

Redirects a shopper to a specific page.

`.google.cloud.retail.v2beta.Rule.RedirectAction redirect_action = 3;`

**Returns**

**Type**

**Description**

[Rule.RedirectAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.RedirectAction)

The redirectAction.

### getRedirectActionOrBuilder()

```
public abstract Rule.RedirectActionOrBuilder getRedirectActionOrBuilder()
```

Redirects a shopper to a specific page.

`.google.cloud.retail.v2beta.Rule.RedirectAction redirect_action = 3;`

**Returns**

**Type**

**Description**

[Rule.RedirectActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.RedirectActionOrBuilder)

### getReplacementAction()

```
public abstract Rule.ReplacementAction getReplacementAction()
```

Replaces specific terms in the query.

`.google.cloud.retail.v2beta.Rule.ReplacementAction replacement_action = 8;`

**Returns**

**Type**

**Description**

[Rule.ReplacementAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.ReplacementAction)

The replacementAction.

### getReplacementActionOrBuilder()

```
public abstract Rule.ReplacementActionOrBuilder getReplacementActionOrBuilder()
```

Replaces specific terms in the query.

`.google.cloud.retail.v2beta.Rule.ReplacementAction replacement_action = 8;`

**Returns**

**Type**

**Description**

[Rule.ReplacementActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.ReplacementActionOrBuilder)

### getTwowaySynonymsAction()

```
public abstract Rule.TwowaySynonymsAction getTwowaySynonymsAction()
```

Treats a set of terms as synonyms of one another.

`.google.cloud.retail.v2beta.Rule.TwowaySynonymsAction twoway_synonyms_action = 11;`

**Returns**

**Type**

**Description**

[Rule.TwowaySynonymsAction](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.TwowaySynonymsAction)

The twowaySynonymsAction.

### getTwowaySynonymsActionOrBuilder()

```
public abstract Rule.TwowaySynonymsActionOrBuilder getTwowaySynonymsActionOrBuilder()
```

Treats a set of terms as synonyms of one another.

`.google.cloud.retail.v2beta.Rule.TwowaySynonymsAction twoway_synonyms_action = 11;`

**Returns**

**Type**

**Description**

[Rule.TwowaySynonymsActionOrBuilder](/java/docs/reference/google-cloud-retail/2.7.0/com.google.cloud.retail.v2beta.Rule.TwowaySynonymsActionOrBuilder)

### hasBoostAction()

```
public abstract boolean hasBoostAction()
```

A boost action.

`.google.cloud.retail.v2beta.Rule.BoostAction boost_action = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the boostAction field is set.

### hasCondition()

```
public abstract boolean hasCondition()
```

Required. The condition that triggers the rule. If the condition is empty, the rule will always apply.

`.google.cloud.retail.v2beta.Condition condition = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the condition field is set.

### hasDoNotAssociateAction()

```
public abstract boolean hasDoNotAssociateAction()
```

Prevents term from being associated with other terms.

`.google.cloud.retail.v2beta.Rule.DoNotAssociateAction do_not_associate_action = 7;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the doNotAssociateAction field is set.

### hasFilterAction()

```
public abstract boolean hasFilterAction()
```

Filters results.

`.google.cloud.retail.v2beta.Rule.FilterAction filter_action = 10;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the filterAction field is set.

### hasIgnoreAction()

```
public abstract boolean hasIgnoreAction()
```

Ignores specific terms from query during search.

`.google.cloud.retail.v2beta.Rule.IgnoreAction ignore_action = 9;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the ignoreAction field is set.

### hasOnewaySynonymsAction()

```
public abstract boolean hasOnewaySynonymsAction()
```

Treats specific term as a synonym with a group of terms. Group of terms will not be treated as synonyms with the specific term.

`.google.cloud.retail.v2beta.Rule.OnewaySynonymsAction oneway_synonyms_action = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the onewaySynonymsAction field is set.

### hasRedirectAction()

```
public abstract boolean hasRedirectAction()
```

Redirects a shopper to a specific page.

`.google.cloud.retail.v2beta.Rule.RedirectAction redirect_action = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the redirectAction field is set.

### hasReplacementAction()

```
public abstract boolean hasReplacementAction()
```

Replaces specific terms in the query.

`.google.cloud.retail.v2beta.Rule.ReplacementAction replacement_action = 8;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the replacementAction field is set.

### hasTwowaySynonymsAction()

```
public abstract boolean hasTwowaySynonymsAction()
```

Treats a set of terms as synonyms of one another.

`.google.cloud.retail.v2beta.Rule.TwowaySynonymsAction twoway_synonyms_action = 11;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the twowaySynonymsAction field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
