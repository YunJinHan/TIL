Dictionaries and tolerant retrival
============

Hashtables
------------
- Each vocalulary term is hashed to an integer.
- Procs : Lookup is faster than a tree => O(1)
- Cons : No easy way to find minor variants<br>
         No prefix search<br>
         if vocalbulary keeps growing, need to occasionally do the expensive operaiton of rehashing everything.<br>
         **Waste memory space**<br>
         **In the worst case, it performs terribly**<br>
         **Irregular search time**

Trees
------------
- Simplest Binary tree
- More usual : B+ tree
- Trees require a standard ordering of characters and hence strings ... but, we typically have one
- Pros : Solves the prefix problem (ex. terms starting with hany)
Optimized for disk-based retrieval
- Cons : Slower => O(logM) ( this requires balanced tree ) / Rebalancing binary trees is expensive


B+ tree
============
- Indexing mechanisms used to speed up access to desired data.
- **Search Key** : attribute to set of attributes used to look up records in a file
- **Index file** : consists of records ( called index entries ) of them
- TWO basic kind of indices :
1. **Ordered Indices** : search keys are stored in sorted order
2. **Hash indices** : search keys are distributed uniformly across "bucket" using a "hash function"

Index Evaluataion Metrics
------------
- Access types supported efficiently
- Access time
- Insertion time
- Deletion time
- Space overhead

Ordered Indics
------------
- In an **Ordered Index**, Index entries are stored sorted on the search key value
- **Primary Index** (**Clustering index**): in sequentially ordered fiel, this index whose search key specifies the sequential order of the file.
- **Secondary Index** ("non-clustering index"): ans index whose search by key specfiies an order diffent from the sequential of the file.
<br>
<br>
Dense_Index_Files
-------------
Dens-Index - Index record appears for every search-key value in the file.
<br>
![screenshot]()(바램, 정준영);
<br>
--<<div 
