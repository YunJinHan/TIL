Intersecting two postings lists ( Continue )
============
<br>
For the intersection of two posting lists of lengths x and y, its time complexity is O(x + y)
<br>
<pre>
Intersect(p1,p2)
	answer = {}
	while p1 is not null and p2 is not null:
		if docId(p1) == docId(p2):
			add(answer,docId(p1))
			p1 <- next(p1)
			p2 <- next(p2)
		else if docId(p1) < docId(p2):
			p1 <- next(p1)
		else :
			p2 <- next(p2)
	return answer
</pre>

Completeness
------------
<br>
Prove that the algorithm INTERSECTION finds the complete list of common docIDs
<br>
##<Proof by mathematical induction>

1. Premise
Lists L1 and L2 share a set of common docIDs <d1, d2, .., dn> which are in the increasing order

2. Prove
&nbsp;&nbsp;- we change the presudo code slightly that initial answer is { d0 }
&nbsp;&nbsp;- At the beginning of each Iteration where d(i-1) < docId(p1) < d(i) and d(i-1) < docId(p2) < d(i)<br>
-> answer is {d0, d1, d2, ... d(i-1)}<br>
(Loop Invariant)

3. Maintenance
<pre>
</pre>