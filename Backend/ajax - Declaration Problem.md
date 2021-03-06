Ajax
================
Ajax = ‘Asynchronous JavaScript and XML’<br>
Web에서 화면을 갱신하지 않고 Server로부터 Data를 가져오는 방법입니다.<br>
Ajax의 동작원리는 Browser에서 서버로 보낼 Data를 Ajax Engine을 통해 Server로 전송합니다.<br>
이 때 Ajax Engine 에서는 JavaScript를 통해 DOM을 사용하여 XMLHttpRequest(XHR) 객체로 Data를 전달합니다. 이 XHR을 이용해서 Server에서 비동기 방식으로 자료를 조회해 올 수 있습니다. Server에서 Data를 전달 할 때 화면전체의 HTML을 전달하지 않고 Text 또는 Xml형식으로 Browser에 전달합니다.


Declaration Problem
-------------------
Ajax 안에서 Predeclare 된 변수들중 DOM 으로 선언된 변수들은 찾지 못할수도 있다.

ex)

<pre>
this.test = document.getElementById('test');

...

this.test 사용 ---->  O
$("#test) 사용 ---->  O

$.ajax({

	type : 'POST',
	url : '',
	data : {
		what : 0
	},
	success: function(data){
		
		this.test 사용 ---->  X
		$("#test) 사용 ---->  O
		
	}, error: function(data){
	
	}
	
});

</pre>

---> ajax 통신이 Asynchronous (비동기식) 통신으로 구동되어 Predeclare 된 변수들은 Checking 하지 못한다.

해결 방안
-----

<pre>
this.test = document.getElementById('test');

...

this.test 사용 ---->  O
$("#test) 사용 ---->  O

$.ajax({

	type : 'POST',
	url : '',
	data : {
		what : 0
	},
	
	async: false, // 비동기를 false 로 바꾼다. default 값이 true
	
	success: function(data){
		
		this.test 사용 ---->  O
		$("#test) 사용 ---->  O
		
	}, error: function(data){
	
	}
	
});

</pre>

----> async: false 옵션을 부여하여 사용한다.. default 값은 true

