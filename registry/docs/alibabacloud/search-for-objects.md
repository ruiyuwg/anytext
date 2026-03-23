When a bucket contains a large number of objects, use prefix search to quickly locate objects and directories without browsing the entire bucket.

## How prefix search works

A prefix is a string that matches the beginning of an object name. When you enter a prefix, OSS returns all objects and directories at the current directory level whose names start with that string — similar to filtering files by name in a folder.

Two constraints apply:

-   **Case-sensitive**: The prefix `Example` matches `ExampleFile.jpg` but not `exampleFile.jpg`.
    
-   **Current level only**: Only objects and directories directly in the searched directory are returned. Contents inside subdirectories are not included.
    

### Flat search vs. recursive listing

Prefix search covers only the current directory level. If you need to list all objects across all subdirectory levels, use one of the following approaches instead:

**Approach**

**Method**

API

[GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) operation

CLI

[�PH1�](/help/en/oss/developer-reference/ls#section-q9u-n4s-3ah) command of ossutil

## Limits

**Constraint**

**Detail**

Match type

Prefix only — matches the beginning of the object name

Case sensitivity

Case-sensitive

Prefix characters

Cannot contain a forward slash (/)

Search scope

Current directory level only (non-recursive)

## Search for objects in the OSS console

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the target bucket.
    
3.  In the left-side navigation tree, choose **Object Management** > **Objects**.
    
4.  Search for objects: OSS returns all objects and directories at the current level whose names start with the specified prefix.
    
    -   **In the root directory**: Enter the prefix in the search box and press Enter, or click the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1967549951/p59253.png) icon.
        
    -   **In a subdirectory**: Click the directory name to navigate into it, then enter the prefix in the search box and press Enter, or click the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1967549951/p59253.png) icon.
        

### Examples

**Root directory search**

`TestBucket` contains:

```
TestBucket/
├── Examplesrcfolder1/
│   ├── test.txt
│   └── abc.jpg
├── Exampledestfolder.png
└── example.txt
```

Searching with prefix `Example` returns:

**Result**

**Reason**

`Examplesrcfolder1`

Name starts with `Example`

`Exampledestfolder.png`

Name starts with `Example`

Not returned: `example.txt` (lowercase `e`), and files inside `Examplesrcfolder1` (outside current level scope).

**Subdirectory search**

`Examplesrcfolder1` contains:

```
Examplesrcfolder1/
├── Projectfolder/
│   ├── a.txt
│   └── b.txt
├── ProjectA.jpg
├── ProjectB.doc
└── projectC.doc
```

Searching with prefix `Project` returns:

**Result**

**Reason**

`Projectfolder`

Name starts with `Project`

`ProjectA.jpg`

Name starts with `Project`

`ProjectB.doc`

Name starts with `Project`

Not returned: `projectC.doc` (lowercase `p`), and files inside `Projectfolder` (outside current level scope).

### **Search for objects using ossbrowser**

ossbrowser supports the same bucket-level operations as the OSS console. Follow the on-screen instructions in ossbrowser to search for objects. For more information, see [Use ossbrowser](/help/en/oss/developer-reference/ossbrowser-2-0-overview/#5e106bb4ea9if).

## What's next

To recursively list objects across directories, use the [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) API operation or the [�PH1�](/help/en/oss/developer-reference/ls#section-q9u-n4s-3ah) command of ossutil.
