This topic introduces the features of NFSv4 access control lists (ACLs), including the sequence and inheritance of access permissions, the sorting and merging of access control entries (ACEs), and the migration of ACLs.

## Sequence of access permissions

ACEs in an ACL are evaluated in the sequence in which they appear.

ACEs support Allow and Deny types. A Deny ACE can be placed anywhere in the list. For example, if an ACL has two ACEs, group:adminis:rwxc and group:adminis:r---, their order determines whether user adminis2 has read permission. When you set an ACL, pay close attention to the position of each ACE.

For example, if the permissions for user adminis2 on the dir4 directory are set as follows, the user has all permissions on the directory.

```
#NFSv4 ACL
#owner:root
#group:root
group:adminis2:rwxc:allow
 (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (X)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED

group:adminis2:r---:deny
 (X)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED

special:owner@:---c:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (X)CHOWN        (-)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED

special:group@:----:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED

special:everyone@:----:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
```

If the permissions for user adminis2 on the dir4 directory are set as follows, the user does not have read permission.

```
#NFSv4 ACL
#owner:root
#group:root
group:adminis2:r---:deny
 (X)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED

group:adminis2:rwxc:allow
 (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (X)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED

special:owner@:---c:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (X)CHOWN        (-)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED

special:group@:----:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED

special:everyone@:----:allow
 (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
 (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
                
```

## Sorting and merging of ACEs

When you add a new ACE for a user, the new ACE is not merged with existing ACEs.

For example. the user 1001 who belongs to the group players has the following access permissions. If you add an ACE that allows access to the group players, the new ACE is not merged with the existing ones.

-   Previous ACE permissions
    
    ```
    #NFSv4 ACL
    #owner:root
    #group:root
    special:everyone@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    special:group@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    special:owner@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    group:adminis:rwxc:allow:FileInherit:DirInherit
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (X)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
    
    group:players:r-x-:allow:FileInherit:DirInherit
     (X)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    ```
    
-   New ACE permissions
    
    ```
    #NFSv4 ACL
    #owner:root
    #group:root
    group:players:rwx-:allow:Inherited
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
    
    special:everyone@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    special:group@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    special:owner@:----:allow:FileInherit:DirInherit
     (-)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    group:adminis:rwxc:allow:FileInherit:DirInherit
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (X)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
    
    group:players:r-x-:allow:FileInherit:DirInherit
     (X)READ/LIST (-)WRITE/CREATE (-)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    ```
    

Verify that the new permission takes effect.

-   Run the commands
    
    ```
    sudo su player -c 'echo 456 >> file'
    ```
    
    ```
    sudo su player -c 'cat file'
    ```
    
-   Sample output
    
    ```
    123
    456
    ```
    

## Inheritance of access permissions

For the directory dir5, the owner is granted the write permissions, the group is granted the read permissions, and other users are denied access.

-   Grant user player inheritable read and write permissions.
    
    1.  Configure read and write permissions for user player and save the rules to a text file, such as acl2.txt.
        
        ```
        #NFSv4 ACL
        #owner:root
        #group:root
        user:player:rwx-:allow:DirInherit
         (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
         (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
        
        user:player:rwx-:allow:FileInherit
         (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
         (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
        ```
        
    2.  Apply the rules from acl2.txt to the dir5 directory.
        
        ```
        mmputacl -i ~/acl2.txt dir5
        ```
        
-   Files or subdirectories created in the dir5 directory automatically inherit the ACE.
    
    1.  Go to the dir5 directory.
        
        ```
        cd  dir5
        ```
        
    2.  Create the file file.
        
        ```
        touch file
        ```
        
    3.  Confirm that the file file automatically inherits the ACE permissions from the dir5 directory.
        
        -   Run the command
            
            ```
            mmgetacl file
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            user:player:rwx-:allow:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            ```
            
    4.  Create the subdir directory.
        
        ```
        mkdir subdir
        ```
        
    5.  Confirm that the subdir subdirectory automatically inherits the ACE permissions from the dir5 directory.
        
        -   Run the command
            
            ```
            mmgetacl subdir
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            user:player:rwx-:allow:DirInherit:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            
            user:player:rwx-:allow:FileInherit:InheritOnly:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            ```
            
-   Files or subdirectories that you create in the subdir subdirectory also automatically inherit the ACE.
    
    1.  Create the subdir/subdir2 directory.
        
        ```
        mkdir subdir/subdir2
        ```
        
    2.  Confirm that the subdir/subdir2 directory automatically inherits the ACE from the subdir subdirectory.
        
        -   Run the command
            
            ```
            mmgetacl subdir/subdir2
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            user:player:rwx-:allow:DirInherit:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            
            user:player:rwx-:allow:FileInherit:InheritOnly:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            ```
            
    3.  Create the subdir/file2 file.
        
        ```
        touch subdir/file2
        ```
        
    4.  Confirm that the subdir/file2 file automatically inherits the ACE from the subdir subdirectory.
        
        -   Run the command
            
            ```
            mmgetacl subdir/file2
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            user:player:rwx-:allow:Inherited
             (X)READ/LIST (X)WRITE/CREATE (-)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED      
            ```
            

The `InheritOnly` flag indicates that the ACE is not used for permission checks on the current directory, but the ACE is inherited by child objects.

**Note**

-   Configure DirInherit and FileInherit in separate ACEs. Otherwise, the error `Combining FileInherit and DirInherit makes the mask ambiguous` is returned.
    
-   When you use inherit only, the ACE itself is not used for permission checks. You must configure read (r) and execute (x) permissions on the parent directory. Otherwise, user `player` cannot access the subdirectory.
    

## Outputs

You cannot use extended attributes to export NFSv4 ACLs.

## Migration

Use tools such as cp to migrate NFSv4 ACLs.

Alibaba Cloud Cloud Parallel File Storage (CPFS) lets you use the cp, tar, and rsync tools to migrate NFSv4 ACLs. For more information, see [How to preserve NFS v4 ACLs via extended attributes when copying file](https://access.redhat.com/solutions/3628891).

In the following example, the cp --preserve=xattr file2 file5 command copies the ACL when it copies file2 to `file5`.

**Note**

The rsync tool might fail to migrate NFSv4 ACLs if its version is earlier than 3.1.2.

1.  Migrate the ACL of file2 to file5.
    
    ```
    cp --preserve=xattr newsub/file2 newsub/file5
    ```
    
2.  View the ACL of file2.
    
    -   Run the command
        
        ```
        mmgetacl newsub/file2
        ```
        
    -   Sample output
        
        ```
        #NFSv4 ACL
        #owner:player
        #group:players
        user:player:rwx-:allow:Inherited
         (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
         (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (X)WRITE_ATTR (-)WRITE_NAMED
        ```
        
3.  View the ACL of file5.
    
    -   Run the command
        
        ```
        mmgetacl newsub/file5
        ```
        
    -   Sample output
        
        ```
        #NFSv4 ACL
        #owner:root
        #group:root
        user:player:rwx-:allow:Inherited
         (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (-)SYNCHRONIZE (-)READ_ACL  (-)READ_ATTR  (-)READ_NAMED
         (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (X)WRITE_ATTR (-)WRITE_NAMED
        ```
        

## Interaction between NFSv4 ACLs and umasks

NFSv4 ACL and mode are interconnected. Modifying an ACL can change the mode, and vice versa.

For example, the current mode of the file file is 0666.

-   Mode permissions of the file file
    
    ```
    -rw-rw-rw- 1 root root 0 Jun  1 14:45 file
    ```
    
-   ACE permissions of the file file
    
    ```
    #NFSv4 ACL
    #owner:root
    #group:root
    special:owner@:rw-c:allow
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (X)CHOWN        (-)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
    
    special:group@:rw--:allow
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    
    special:everyone@:rw--:allow
     (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
     (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
    ```
    

-   Add execute permission for the owner by setting the mode. The corresponding ACE is also updated with execute permission.
    
    1.  Add execute permission for the owner by setting the mode.
        
        ```
        chmod u+x file
        ```
        
    2.  View the mode permissions of the file file.
        
        -   Run the command
            
            ```
            ls -l file
            ```
            
        -   Sample output
            
            ```
            -rwxrw-rw- 1 root root 0 Jun  1 14:45 file
            ```
            
    3.  Confirm that execute permission is added to the owner's ACE.
        
        -   Run the command
            
            ```
            mmgetacl file
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            special:owner@:rwxc:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (X)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
            
            special:group@:rw--:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            
            special:everyone@:rw--:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            ```
            
-   Add execute permission for the group by setting the ACE. The corresponding mode is also updated with execute permission.
    
    1.  Edit the ACL attributes of the file file to add execute permission for the group.
        
        ```
        mmeditacl file
        ```
        
    2.  After the information is returned, enter `yes` to apply the permission changes.
        
    3.  View the ACE permissions that the group has on the file file.
        
        -   Run the command
            
            ```
            mmgetacl file
            ```
            
        -   Sample output
            
            ```
            #NFSv4 ACL
            #owner:root
            #group:root
            special:owner@:rwxc:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (X)CHOWN        (X)EXEC/SEARCH (X)WRITE_ACL (X)WRITE_ATTR (X)WRITE_NAMED
            
            special:group@:rwx-:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (X)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            
            special:everyone@:rw--:allow
             (X)READ/LIST (X)WRITE/CREATE (X)APPEND/MKDIR (X)SYNCHRONIZE (X)READ_ACL  (X)READ_ATTR  (X)READ_NAMED
             (-)DELETE    (-)DELETE_CHILD (-)CHOWN        (-)EXEC/SEARCH (-)WRITE_ACL (-)WRITE_ATTR (-)WRITE_NAMED
            ```
            
    4.  Confirm that execute permission is added to the group in the mode.
        
        -   Run the command
            
            ```
            ls -l file
            ```
            
        -   Sample output
            
            ```
            -rwxrwxrw- 1 root root 0 Jun  1 14:45 file
            ```
            

## Interaction between NFSv4 ACLs and POSIX ACLs

Interaction between NFSv4 ACLs and POSIX ACLs is not supported.
