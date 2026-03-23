This topic describes the syntax of a tag policy and the supported inheritance operators.

## Syntax

Tag policies support the JSON format and follow the standard JSON syntax. The syntax of a tag policy varies based on the use scenario of the tag policy.

### **Addition of tags that have specific tag values to resources**

The document of a tag policy used for this scenario starts with `tags`.

**Element**

**Required**

**Description**

**Example**

Policy key

Yes

A policy key is the unique identifier of a statement in a tag policy. A policy key must be in lowercase. You can specify multiple policy keys in a tag policy. If capitalization is not considered, policy keys are the same as tag keys.

`color`

Tag key

Yes

Tag keys are specified by `tag_key` and are case-sensitive.

`COLER`

Tag value

Yes

Tag values are specified by `tag_value`. You can set tag\_value to an asterisk (\*), which indicates any tag values.

`red`, `green`, and `grey`

Resource type scope

No

You can configure `resource_type_scope` to specify the resource types for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource types that support tag policies.

`ecs:instance`

Region scope

No

You can configure `region_scope` to specify the regions in which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect in all regions.

`cn-hangzhou`

Resource group scope

No

You can configure `rg_scope` to specify the resource groups for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource groups.

`rg-xxxx`

Pre-event interception

No

You can configure `enforced_for` to specify the resource types for which pre-event interception is used. If you do not configure this parameter, pre-event interception is not performed.

`ecs:instance`

Automatic remediation

No

You can configure `tag_value_correction` to enable automatic remediation for non-compliant resources. If you do not configure this parameter, automatic remediation is not performed.

```
{
	"red": {
		"value_type": "Tag",
		"value_scope": {
			"acs:rm:rgId": "rg-xx1"
		}
	}
}
```

Inheritance operator

Yes

An inheritance operator is used to aggregate the tag policy that is attached to an object and the tag policy that is inherited by the object to obtain an effective policy for the object.

[Inheritance operators](#section-07z-y05-x4t)

Sample code:

```
{
    "tags": {
        "color": {
            "tag_key": {
                "@@operators_allowed_for_child_policies": [
                    "@@none"
                ],
                "@@assign": "COLER"
            },
            "tag_value": {
                "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "red",
                    "green",
                    "grey"
                ]
            },
          	"resource_type_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "ecs:instance"
                ]
            },
          	"region_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "cn-hangzhou"
                ]
            },
          	"rg_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "rg-xxxx"
                ]
            },
            "enforced_for": {
              "@@operators_allowed_for_child_policies": [
                    "@@remove"
                ],
                "@@assign": [
                    "ecs:instance"
                ]
            },
            "tag_value_correction": {
                "@@operators_allowed_for_child_policies": [
                    "@@none"
                ],
                "@@assign": {
                    "red": {
                        "value_type": "Tag",
                        "value_scope": {
                            "acs:rm:rgId": "rg-xx1"
                        }
                    },
                    "green": {
                        "value_type": "Tag",
                        "value_scope": {
                            "k1": "v2"
                        }
                    },
                    "grey": {
                        "value_type": "Tag",
                        "value_scope": {
                            "k111": "v222"
                        }
                    }
                }
            }
        }
    }
}
```

### **Automatic tag inheritance from resource groups**

The document of a tag policy used for this scenario starts with `rg_inherit`.

**Element**

**Required**

**Description**

**Example**

Policy key

Yes

A policy key is the unique identifier of a statement in a tag policy. A policy key must be in lowercase. You can specify multiple policy keys in a tag policy. If capitalization is not considered, policy keys are the same as tag keys.

`color`

Tag key

Yes

Tag keys are specified by `tag_key` and are case-sensitive.

`COLER`

Resource type scope

No

You can configure `resource_type_scope` to specify the resource types for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource types that support tag policies.

`ecs:instance`

Region scope

No

You can configure `region_scope` to specify the regions in which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect in all regions.

`cn-hangzhou`

Resource group scope

No

You can configure `rg_scope` to specify the resource groups for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource groups.

`rg-xxxx`

Inheritance operator

Yes

An inheritance operator is used to aggregate the tag policy that is attached to an object and the tag policy that is inherited by the object to obtain an effective policy for the object.

[Inheritance operators](#section-07z-y05-x4t)

Sample code:

```
{
    "rg_inherit": {
        "color": {
            "tag_key": {
                "@@operators_allowed_for_child_policies": [
                    "@@none"
                ],
                "@@assign": "COLER"
            },
          	"resource_type_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "ecs:instance"
                ]
            },
          	"region_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "cn-hangzhou"
                ]
            },
          	"rg_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "rg-xxxx"
                ]
            }
        }
    }
}
```

### Matching between tag values and a specific regular expression

The document of a tag policy used for this scenario starts with `matched_tags`.

**Element**

**Required**

**Description**

**Example**

Policy key

Yes

A policy key is the unique identifier of a statement in a tag policy. A policy key must be in lowercase. You can specify multiple policy keys in a tag policy. If capitalization is not considered, policy keys are the same as tag keys.

`number`

Tag key

Yes

Tag keys are specified by `tag_key` and are case-sensitive.

`NUMBER`

Tag value

Yes

The regular expression that tag values must match is specified by `tag_value`.

`^[0-9]+$`

Resource type scope

No

You can configure `resource_type_scope` to specify the resource types for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource types that support tag policies.

`ecs:instance`

Region scope

No

You can configure `region_scope` to specify the regions in which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect in all regions.

`cn-hangzhou`

Resource group scope

No

You can configure `rg_scope` to specify the resource groups for which the tag policy takes effect. If you do not configure this parameter, the tag policy takes effect for all resource groups.

`rg-xxxx`

Automatic remediation

No

You can configure `tag_value_correction` to enable automatic remediation for non-compliant resources. If you do not configure this parameter, automatic remediation is not performed.

```
{
	"1": {
		"value_type": "Tag",
		"value_scope": {
			"acs:rm:rgId": "rg-xx1"
		}
	}
}
```

Inheritance operator

Yes

An inheritance operator is used to aggregate the tag policy that is attached to an object and the tag policy that is inherited by the object to obtain an effective policy for the object.

[Inheritance operators](#section-07z-y05-x4t)

```
{
    "matched_tags": {
        "number": {
            "tag_key": {
                "@@operators_allowed_for_child_policies": [
                    "@@none"
                ],
                "@@assign": "NUMBER"
            },
            "tag_value": {
                "@@operators_allowed_for_child_policies": [
                    "@@assign"
                ],
                "@@assign": [
                    "^[0-9]+$"
                ]
            },
          	"resource_type_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "ecs:instance"
                ]
            },
          	"region_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "cn-hangzhou"
                ]
            },
          	"rg_scope": {
              "@@operators_allowed_for_child_policies": [
                    "@@append"
                ],
                "@@assign": [
                    "rg-xxxx"
                ]
            },
            "tag_value_correction": {
                "@@operators_allowed_for_child_policies": [
                    "@@none"
                ],
                "@@assign": {
                    "1": {
                        "value_type": "Tag",
                        "value_scope": {
                            "acs:rm:rgId": "rg-xx1"
                        }
                    },
                    "2": {
                        "value_type": "Tag",
                        "value_scope": {
                            "k1": "v2"
                        }
                    },
                    "3": {
                        "value_type": "Tag",
                        "value_scope": {
                            "k111": "v222"
                        }
                    }
                }
            }
        }
    }
}
```

## Inheritance operators

An inheritance operator is used to aggregate the tag policy that is attached to an object and the tag policy that is inherited by the object to obtain an effective policy for the object. Inheritance operators are classified into value-setting operators and child control operators.

**Note**

If you configure a tag policy on the **Quick Mode** tab in the Resource Management console, you can use only the `@@assign` operator. This operator is a basic operator. If you configure a tag policy on the **JSON** tab in the Resource Management console, you can use all operators described in this section. Operators other than @@assign are advanced operators.

-   **Value-setting operators**
    
    **Operator**
    
    **Description**
    
    `@@assign`
    
    This operator indicates the overwrite operation.
    
    -   If you specify this operator for a setting in a tag policy attached to an object, and the setting conflicts with the related setting in the tag policy inherited by the object, the setting in the attached tag policy overwrites the related setting in the inherited tag policy.
        
    -   If the settings for `@@assign` in tag policies attached to an object conflict with each other, the setting in the tag policy that is first attached is used.
        
    
    `@@append`
    
    This operator indicates the append operation. If you specify this operator for a setting in a tag policy attached to an object, the setting is appended to the tag policy inherited by the object. You can use this operator only if you specify multiple tag values for a tag key in a tag policy attached to an object.
    
    `@@remove`
    
    This operator indicates the remove operation. If you specify this operator for a setting in a tag policy attached to an object, the related setting is removed from the tag policy inherited by the object. You can use this operator only if you specify multiple tag values for a tag key in a tag policy attached to an object.
    
-   **Child control operators**
    
    Child control operators are advanced operators. You can use child control operators if you want to limit the value-setting operators that can be used in child policies. By default, all value-setting operators are allowed in child policies.
    
    **Operator**
    
    **Description**
    
    `"@@operators_allowed_for_child_policies":["@@all"]`
    
    If you specify this operator in a tag policy attached to a folder, you can use any value-setting operator in the policies attached to the subfolders of the folder and members in the folder. By default, if no child control operator is specified in a parent policy, all value-setting operators are allowed in child policies.
    
    `"@@operators_allowed_for_child_policies":["@@assign"`
    
    If you specify this operator in a tag policy attached to a folder, you can use the value-setting operator @@assign in the policies attached to the subfolders of the folder and members in the folder. You can specify one or more value-setting operators in this operator.
    
    `"@@operators_allowed_for_child_policies":["@@none"]`
    
    If you specify this operator in a tag policy attached to a folder, value-setting operators cannot be used in the policies attached to the subfolders of the folder and members in the folder. You can use this operator to lock the settings that are defined in a parent policy. This way, child policies do not take effect during the calculation of an effective policy, and the parent policy is used as an effective policy.
    

## **References**

-   [Inheritance of a tag policy and calculation of an effective policy](/help/en/resource-management/tag/user-guide/inheritance-of-a-tag-policy-and-calculation-of-an-effective-policy)
    
-   [Perform automatic tag detection](/help/en/resource-management/tag/user-guide/perform-automatic-tag-detection)
    
-   [Enable automatic tag remediation](/help/en/resource-management/tag/user-guide/enable-automatic-tag-remediation)
    
-   [Enable pre-event interception of non-compliant tags](/help/en/resource-management/tag/user-guide/enable-tag-compliance-enforcement)
    
-   [Enable automatic tag inheritance from a resource group](/help/en/resource-management/tag/user-guide/enable-automatic-tag-inheritance-from-a-resource-group)
    
-   [Use a regular expression to check the compliance of tag values](/help/en/resource-management/tag/user-guide/use-regular-expressions-to-detect-compliance-of-label-values)
