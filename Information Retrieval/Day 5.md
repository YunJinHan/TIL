Dictionaries and tolerant retrival
============

Hashtables
------------
- Each vocalulary term is hashed to an integer.
- Procs : Lookup is faster than a tree => O(1)
- Cons : No easy way to find minor variants
         No prefix search
         if vocalbulary keeps growing, need to occasionally do the expensive operaiton of rehashing everything.
         **Waste memory space**
         **In the worst case, it performs terribly**
         **Irregular search time**
<br>
Trees
------------
- Simplest Binary tree
- More usual : B+ tree
- Trees require a standard ordering of characters and hence strings ... but, we typically have one
- Pros : Solves the prefix problem (ex. terms starting with hany)
Optimized for disk-based retrieval
- Cons :         