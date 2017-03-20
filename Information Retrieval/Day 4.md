Intersecting two postings lists ( Continue )
============

AND NOT (p1, p2) -> p1 에는 있고 p2 에는 없는것
<pre>
Intersect AND NOT (p1,p2)
	answer = {}
	while p1 is not null and p2 is not null:
		if docId(p1) < docId(p2):
			add(answer,docId(p1))
			p1 <- next(p1)
		else if docId(p2) < docId(p1):
			p2 <- next(p2)
		else :
			p1 <- next(p1)
			p2 <- next(p2)
	while p1 is not NULL:
		add(answer,docId(p1))
		p1 <- next(p1)
	return answer
</pre>

OR (p1,p2) -> p1 이나 p2 둘중 아무 곳에다 있는것
<pre>
Intersect OR (p1,p2)
	answer = {}
	if p1 is not NULL:
	    while p2 is not NULL:
	    	add(answer, p2)
	    	p2 <- next(p2)
	if p2 is not NULL:
	    while p1 not NULL:      
	        add(answer, p1)
	        p1 <- next(p1)
</pre>
Boolean queries
============
Boolean Queries are queries using AND, OR and NOT to join query terms / Perhaps the simplest model to build an IR system on<br>
- Views each document as a **set** of words<br>
- Is precise: document matches condition or not<br>
==> set : word 의 order / frequency 는 고려하지 않는다.

Example: WestLaw
------------
LIMIT! /3 STATUTE ACTION /S FEDERAL /2 TORT /3 CLAIM<br>
blank : or operation<br>
~! : start with prefix ( ex LIMIT 로 시작하는 단어 )<br>
<br>
Phrase queries
============
Biword indexes
------------
- Index every consecutive pair of terms in the text as a phrase<br>
- Each of these biwords is now a dictionary term<br>

Problem<br>
Longer phrase queries -> n words ==> (n+1)Combination(2) ==> O(n^2)<br>
Index blowup due to bigger dictionary<br>
Infeasible for more than biwords, big even for them
ex)
A B C D E -> there is 6 position to stand words<br>
So (6)Combination(2) biwords exists<br>
<br>
Positional indexes
------------
1. Extract inverted index entries for each distinct term
2. Merge their doc: position lists to enumerate all positions with terms
3. Same general method for proximity searches
<br>
ex)




