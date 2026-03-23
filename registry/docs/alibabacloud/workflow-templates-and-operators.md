This topic describes workflow templates and supported operators of Intelligent Media Management (IMM).

## Overview

When you create a project or dataset in IMM, you can specify a workflow template for the project or dataset. The workflow template specifies a workflow to be executed. When you index metadata of files stored in services such as Object Storage Service (OSS) and Photo and Drive Service, IMM uses operators that correspond to the specified workflow template to collect metadata and index the metadata into the metadata storage engine.

## Usage notes

-   When you bind an OSS bucket or index metadata by calling the [IndexFileMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-indexfilemeta) or [BatchIndexFileMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta) operation, the operators used are determined by the workflow templates specified for the dataset and project.
    
-   When you create a metadata index in a dataset, the workflow template specified for the dataset takes precedence over the workflow template specified for the project to which the dataset belongs. If an empty workflow template is specified for the dataset, the workflow template for the project is used.
    
-   A workflow template does not impose a limit on your proactive API operation calls to perform actions such as video transcoding, face detection, image scoring, and face clustering. However, these actions may not take effect if no metadata exists in the index.
    
-   Indexing incurs operator fees and index storage fees. For more information, see [Billable items](/help/en/imm/product-overview/billable-items).
    

## Workflow templates

The following table describes the workflow templates provided by IMM.

**TemplateId**

**Description**

Official:DefaultEmptyId

An empty workflow template.

When you create a metadata index, no operator is used and no metadata is collected.

Official:OSSBasicMeta

The workflow template used to collect basic metadata from OSS.

When you create a metadata index, the OSSMeta operator is used to collect basic metadata of objects stored in OSS.

Official:AllFunction

The full-featured workflow template (for testing only).

When you create a metadata index, all operators are used to collect metadata, such as basic metadata of objects in OSS, Multipurpose Internet Mail Extensions (MIME) information, face information, labels, image quality scores, location information, video information, Exchangeable Image File Format (EXIF) data, and document content.

**Important**

The workflow template contains operators for all IMM capabilities. It is intended only for testing. IMM adds operators to or remove operators from the workflow template based on feature availability. Take note that operator addition or removal may cause billing changes. If you need only a set of specific capabilities, select the corresponding workflow template.

Official:FaceManagement

The workflow template for facial recognition.

When you create a metadata index, the workflow template detects faces in images and indexes faces. You can use the workflow template together with the face clustering operation to add the face-based photo grouping capability to your album application, or combine it with the face search operation to implement access control and attendance tracking.

Official:ImageManagement

The workflow template for image management.

The workflow template collects image information such as sizes, locations, faces, and tags. You can use this template to create a full-featured intelligent album application.

Official:CognitionImageManagement

The workflow template for semantic image search

The workflow template enables image comprehension in addition to analyses of image information such as sizes, locations, faces, and tags. You can use the workflow template together with the [SemanticQuery](/help/en/imm/developer-reference/api-imm-2020-09-30-semanticquery) operation to implement more advanced and accurate image search capabilities based on image semantics. Semantic image search allows you to create intelligent album applications powered by a large language model.

**Important**

This workflow template is available only in the China (Beijing) region and is offered as an invitational preview at no cost. If you want to use this workflow template, contact your account manager or [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

Official:DocumentManagement

The workflow template for full-text search.

The workflow template retrieves text from documents and indexes text. You can use the workflow template with the search operation to implement full-text search capabilities.

Official:MediaMeta

The workflow template for media management.

The workflow template extracts multimedia information from files such as images and videos. Multimedia information includes the file size, creation time, location, duration, encoding format, and more. You can use the workflow template in business scenarios such as media file grouping, management, and statistics.

Official:CognitionDocumentManagement

The workflow template for semantic text search.

The workflow template analyzes text in documents to provide content understanding based on a large language model. You can use the workflow template together with the [SemanticQuery](/help/en/imm/developer-reference/api-imm-2020-09-30-semanticquery) operation to implement semantic document retrieval.

**Important**

This workflow template is available only in the China (Beijing) region and is offered as an invitational preview at no cost. If you want to use this workflow template, contact your account manager or [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

## Operators

The following table describes the supported operators in IMM.

**Warning**

Operators incur fees. For more information, see [Operators and billable items](/help/en/imm/product-overview/billable-items#section-oct-t16-2kb).

**Operator**

**Description**

OSSMeta

Collects metadata from OSS, such as object names, object types, object sizes, object hashes, modification time, ETags, and tags

MIME

Collects MIME data.

FaceDetection

Collects face data.

LabelClassification (for images)

Collects image label information.

LabelClassification (for videos)

Collects video label information.

ImageScoring

Generates image scores.

ExtractImageEmbeddings

Collects image features.

ReGEO

Collects geolocation information.

MediaMeta

Collects video information.

EXIF

Collects EXIF data.

ExtractDocumentText

Extracts document information.

## Workflow templates and supported operators

The following table describes the operators supported by individual workflow templates. The check mark (**✓**) indicates that an operator is supported. The cross mark (**X**) indicates that an operator is not supported.

**TemplateId**

**Operator**

**OSSMeta**

**MIME**

**FaceDetection**

**LabelClassification**

**ImageScoring**

**ExtractImageEmbeddings**

**ReGEO**

**MediaMeta**

**EXIF**

**ExtractDocumentText**

Official:DefaultEmptyId

X

X

X

X

X

X

X

X

X

X

Official:OSSBasicMeta

✓

X

X

X

X

X

X

X

X

X

Official:AllFunction

✓

✓

✓ (for video files and image files)

✓ (for video files and image files)

✓

X

✓

✓

✓

✓

Official:FaceManagement

✓

X

✓ (for video files and image files)

X

X

X

X

X

X

X

Official:ImageManagement

✓

✓

✓

✓

✓

X

✓

X

✓

X

Official:CognitionImageManagement

✓

✓

✓

✓

✓

✓

✓

X

✓

X

Official:DocumentManagement

✓

✓

X

X

X

X

X

X

X

✓

Official:MediaMeta

✓

✓

X

X

X

X

✓

✓

✓

X

Official:CognitionDocumentManagement

✓

✓

X

X

X

X

X

X

X

X

## Examples of workflow template usage

This section uses the Official:AllFunction workflow template as an example to describe how to use a workflow template.

1.  Call the [CreateDataset](/help/en/imm/developer-reference/api-imm-2020-09-30-createdataset) operation to create a dataset named **allfunction** in the **test-project** project and specify the **Official:AllFunction** template for the dataset. For more information, see [Create a dataset](/help/en/imm/user-guide/create-datasets).
    
    -   Sample request
        
        ```
        {
         "ProjectName": "test-project",
         "DatasetName": "allfunction",
         "Description": "Dataset that uses the full-featured workflow template",
         "TemplateId": "Official:AllFunction"
        }
        ```
        
    -   Sample response
        
        ```
        {
            "RequestId": "9AB4BD43-C4E5-06AA-A8AB-****",
            "Dataset": {
                "FileCount": 0,
                "BindCount": 0,
                "ProjectName": "test-project",
                "CreateTime": "2022-07-08T10:43:32.429344821+08:00",
                "DatasetMaxTotalFileSize": 90000000000000000,
                "DatasetMaxRelationCount": 100000000000,
                "DatasetMaxFileCount": 100000000,
                "DatasetName": "allfunction",
                "DatasetMaxBindCount": 10,
                "UpdateTime": "2022-07-08T10:43:32.429344821+08:00",
                "DatasetMaxEntityCount": 10000000000,
                "TotalFileSize": 0,
                "TemplateId": "Official:AllFunction"
            }
        }
        ```
        
2.  Call the [IndexFileMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-indexfilemeta) operation to create a metadata index for the **oss://test-bucket/test-object.jpg** object stored in OSS. For more information, see [Create a metadata index](/help/en/imm/user-guide/create-a-metadata-index).
    
    -   Sample request
        
        ```
        {
          "ProjectName": "test-project",
          "DatasetName": "allfunction",
          "File": {
            "URI": "oss://test-bucket/test-object.jpg",
            "CustomLabels": {
              "category": "Persons"
            }
          },
          "Notification": {
            "MNS": {
              "TopicName": "test-topic"
            }
          }
        }
        ```
        
    -   Sample response
        
        ```
        {
            "RequestId": "5AA694AD-3D10-0B6A-86B4-****",
            "EventId": "17C-1Kofq1mlJxRYF7vNGF****"
        }
        ```
        
3.  Call the [GetFileMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-getfilemeta) operation to query the metadata of the **oss://test-bucket/test-object.jpg** object stored in OSS. For more information, see [Query file metadata](/help/en/imm/user-guide/query-file-information).
    
    -   Sample request
        
        ```
        {
            "ProjectName": "test-project",
            "URI": "oss://test-bucket/test-object.jpg",
            "DatasetName": "allfunction"
        }
        ```
        
    -   Sample response
        
        ```
        {
            "RequestId": "F79E92D5-FA41-0AD6-8948-****",
            "Files": [
                {
                    "ProduceTime": "2020-08-19T17:11:11+08:00",
                    "ObjectACL": "default",
                    "ContentType": "image/jpeg",
                    "ProjectName": "test-project",
                    "Size": 22868,
                    "URI": "oss://test-bucket/test-object.jpg",
                    "Addresses": [
                        {
                            "Language": "zh-Hans",
                            "Township": "Tanggou Town",
                            "AddressLine": "Chenlongzhuang, Tanggou Town, Shuyang County, Suqian City, Jiangsu Province",
                            "Country": "China",
                            "City": "Suqian",
                            "District": "Shuyang",
                            "Province": "Jiangsu"
                        }
                    ],
                    "ObjectType": "file",
                    "CustomLabels": {
                        "category": "Image"
                    },
                    "OwnerId": "****",
                    "FileModifiedTime": "2021-05-13T10:22:44+08:00",
                    "ImageWidth": 270,
                    "OSSStorageClass": "Standard",
                    "MediaType": "image",
                    "ObjectId": "75d5de2c50754e3dadd5c35dbca5f9949369e****",
                    "CreateTime": "2022-07-08T14:34:01.400716231+08:00",
                    "Filename": "1.jpg",
                    "Labels": [
                        {
                            "CentricScore": 0.859000027179718,
                            "Language": "zh-Hans",
                            "LabelConfidence": 1,
                            "LabelName": "Female",
                            "LabelLevel": 2,
                            "ParentLabelName": "Face"
                        },
                        {
                            "CentricScore": 0.7770000100135803,
                            "Language": "zh-Hans",
                            "LabelConfidence": 1,
                            "LabelName": "Apparel",
                            "LabelLevel": 2,
                            "ParentLabelName": "Clothing"
                        },
                        {
                            "CentricScore": 0.8809999823570251,
                            "Language": "zh-Hans",
                            "LabelConfidence": 1,
                            "LabelName": "Long hair",
                            "LabelLevel": 2,
                            "ParentLabelName": "Appearance"
                        },
                        {
                            "CentricScore": 0.8899999856948853,
                            "Language": "zh-Hans",
                            "LabelConfidence": 1,
                            "LabelName": "Black hair",
                            "LabelLevel": 2,
                            "ParentLabelName": "Appearance"
                        },
                        {
                            "CentricScore": 0.8330000042915344,
                            "Language": "zh-Hans",
                            "LabelConfidence": 1,
                            "LabelName": "Portrait photography",
                            "LabelLevel": 2,
                            "ParentLabelName": "Artwork"
                        },
                        {
                            "CentricScore": 0.8299999833106995,
                            "Language": "zh-Hans",
                            "LabelConfidence": 0.9879999756813049,
                            "LabelName": "Beauty",
                            "LabelLevel": 2,
                            "ParentLabelName": "Appearance"
                        },
                        {
                            "CentricScore": 0.8399999737739563,
                            "Language": "zh-Hans",
                            "LabelConfidence": 0.9589999914169312,
                            "LabelName": "Person close-up",
                            "LabelLevel": 2,
                            "ParentLabelName": "Other scenes"
                        },
                        {
                            "CentricScore": 0.8429999947547913,
                            "Language": "zh-Hans",
                            "LabelConfidence": 0.949999988079071,
                            "LabelName": "Portrait",
                            "LabelLevel": 2,
                            "ParentLabelName": "Face"
                        },
                        {
                            "CentricScore": 0.8519999980926514,
                            "Language": "zh-Hans",
                            "LabelConfidence": 0.925000011920929,
                            "LabelName": "Human",
                            "LabelLevel": 2,
                            "ParentLabelName": "Face"
                        },
                        {
                            "CentricScore": 0.8859999775886536,
                            "Language": "zh-Hans",
                            "LabelConfidence": 0.9129999876022339,
                            "LabelName": "Girl",
                            "LabelLevel": 2,
                            "ParentLabelName": "Face"
                        },
                        ...
                    ],
                    "Orientation": 1,
                    "Figures": [
                        {
                            "Beard": "none",
                            "MaskConfidence": 0.6959999799728394,
                            "Gender": "female",
                            "Boundary": {
                                "Left": 70,
                                "Top": 75,
                                "Height": 134,
                                "Width": 101
                            },
                            "BeardConfidence": 1,
                            "FigureId": "b51a7c91-1ce7-44d8-ae53-****",
                            "Mouth": "close",
                            "Emotion": "none",
                            "Age": 25,
                            "MouthConfidence": 0.996999979019165,
                            "FigureType": "face",
                            "GenderConfidence": 1,
                            "HeadPose": {
                                "Pitch": 21.562999725341797,
                                "Roll": 12.322999954223633,
                                "Yaw": 11.529999732971191
                            },
                            "Mask": "none",
                            "EmotionConfidence": 0.9819999933242798,
                            "HatConfidence": 1,
                            "GlassesConfidence": 0.9990000128746033,
                            "Sharpness": 1,
                            "FigureClusterId": "figure-cluster-id-unavailable",
                            "FaceQuality": 0.9990000128746033,
                            "Attractive": 0.9819999933242798,
                            "AgeSD": 5,
                            "Glasses": "none",
                            "FigureConfidence": 0.9980000257492065,
                            "Hat": "none"
                        }
                    ],
                    "EXIF": "{\"Compression\":{\"value\":\"6\"},\"DateTime\":{\"value\":\"2020:08:19 17:11:11\"},\"DateTimeOriginal\":{\"value\":\"2020:08:19 17:11:11\"},\"ExifTag\":{\"value\":\"82\"},\"FileSize\":{\"value\":\"22868\"},\"Format\":{\"value\":\"jpg\"},\"GPSLatitude\":{\"value\":\"34deg \"},\"GPSLatitudeRef\":{\"value\":\"North\"},\"GPSLongitude\":{\"value\":\"119deg \"},\"GPSLongitudeRef\":{\"value\":\"East\"},\"GPSMapDatum\":{\"value\":\"WGS-84\"},\"GPSTag\":{\"value\":\"120\"},\"GPSVersionID\":{\"value\":\"2 2 0 0\"},\"ImageHeight\":{\"value\":\"270\"},\"ImageWidth\":{\"value\":\"270\"},\"JPEGInterchangeFormat\":{\"value\":\"294\"},\"JPEGInterchangeFormatLength\":{\"value\":\"2700\"},\"Orientation\":{\"value\":\"1\"},\"ResolutionUnit\":{\"value\":\"2\"},\"XResolution\":{\"value\":\"72/1\"},\"YResolution\":{\"value\":\"72/1\"}}",
                    "ContentMd5": "HZwoCnxPZ/fvhz4o****==",
                    "ImageHeight": 270,
                    "ImageScore": {
                        "OverallQualityScore": 0.6140000224113464
                    },
                    "ETag": "\"1D9C280A7C4F67F7EF873E28****\"",
                    "DatasetName": "allfunction",
                    "FileHash": "\"1D9C280A7C4F67F7EF873E28****\"",
                    "CustomId": "abc",
                    "UpdateTime": "2022-07-08T14:34:01.400716231+08:00",
                    "OSSCRC64": "56344477456500****",
                    "OSSTaggingCount": 0,
                    "LatLong": "34.000000,119.000000",
                    "OSSObjectType": "Normal"
                }
            ]
        }
                                    
        ```
