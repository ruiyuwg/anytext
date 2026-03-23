OSS uses a flat namespace: all data is stored as objects with no real folder hierarchy. When you mount an OSS bucket with ossfs 2.0, it simulates a file system by splitting object names on the forward slash (`/`) and inferring whether each object is a file or a virtual folder.

## How it works

ossfs 2.0 builds a virtual folder tree by treating `/` as a path separator. For each object it finds, it applies the following logic to determine the object type:

-   An object name with no trailing slash is a file.
    
-   An object name with a trailing slash (e.g., `a/`) is a virtual folder.
    
-   An object whose name appears as a path prefix for other objects (e.g., `a` in `a/b`) is inferred as a virtual folder, even if no `a/` object exists.
    

One key difference from traditional file systems: in a traditional file system, `a` (a file) and `a/` (a folder) cannot coexist in the same directory. In OSS, `a` and `a/` are two independent objects with no logical association. When both exist in the same bucket, ossfs 2.0 cannot apply file system conventions, and the result is undefined behavior.

## Detection rules

**Important**

If you use tools such as ossfs 1.0 and ossfs 2.0 or products such as Cloud Storage Gateway (CSG) to mount an OSS bucket, follow file system naming conventions when creating objects. Do not create objects whose names differ only by a trailing slash, such as `a` and `a/`.

The table below shows how ossfs 2.0 interprets objects in a bucket.

**Objects in the bucket**

**Detection result**

**Reason**

Only `a`

File

An object without a trailing slash is a file.

Only `a/`

Folder

An object with a trailing slash is a virtual folder.

Only `a/b` (no `a` or `a/`)

Folder

ossfs 2.0 infers `a` as a virtual folder from the sub-object path `a/b`.

Both `a` and `a/`

Undefined behavior

Object naming does not follow file system conventions.

Both `a` and `a/b` (no `a/`)

Undefined behavior

Object naming does not follow file system conventions.
