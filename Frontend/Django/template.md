### template system

**template code vs template file**

rendering 전 파일은 template code /  rendering 후의 파일은 template file 이라 한다.



#### template variable

​	{{ variable }}

- 변수의 속성에 접근할 수 있는 . 표현식도 가능

  ​	{{ foo.bar }}

  - foo 가 사전 타입인지 확인 후 foo['bar'] 로 해석
  - foo 속성에 bar 가 있다면 foo.bar 로 변환
  - foo 가 리스트라면 foo['bar'] 로 변환

- 정의 되어있지 않는 변수인 경우 '' 빈 값으로 치환 / settings.py 에서 TEMPLATE_STRING_IF_INVALID 을 지정하면 디폴트 값 변경 가능

#### template filter

- filter 는 일반적으로 | 문자를 사용하며, 동시에 여러개 사용가능. 인자도 가질수 있음
- angular 와 마찬가지로 사용자 정의 필터 사용 가능
- custome filter docs : https://docs.djangoproject.com/en/1.11/howto/custom-template-tags/
- 약 60 여 가지의 필터 제공 : https://docs.djangoproject.com/en/1.11/ref/templates/builtins/

#### template tag

​	{% tag %}

- template tag 는 기본적으로 위와 같은 형식을 가짐

- 많이 사용하는 tag 로써 {% for %}, {% if %}, {% url %}, {% with %}, {% load %}, {% csrf_token %} 등이 있다.

- {% for %}

  ~~~
  <ul>
  	{% for user in Users %}
  		<li>{{ user.name }}</li>
  	{% endfor %}
  </ul>
  ~~~

  for tag 에 사용되는 변수

  - forloop.counter - 현재까지 실행한 루프 카운트 ( 1부터 시작 )
  - forloop.counter() - 이하 동일 ( 0 부터 시작 )
  - forloop.revcounter - 루프 끝에서 현재가 몇번째인지 카운트 ( 1부터 시작 )
  - forloop.revcounter() - 이하 동일 ( 0 부터 시작 )
  - forloop.first - 루프에서 첫번째 실행일 경우 True 값을 가짐
  - forloop.last - 루프에서 마지막 실행이면 True 값을 가짐
  - forloop.parentloop - 중첩 루프에서 현재의 상위 루프에 접근 ( ex. forloop.parentloop.counter ... )

- {% if %}

  ~~~
  {% if user_list %}
  	Number of users : {{ user_list | length }}
  {% elif user_list | length > 100 %}
  	User full
  {% else %}
  	No User	
  {% endif %}
  ~~~

  - {% if  %} 안에는 boolean 연산자 / 비교연산자 사용 가능

- {% csrf_token %}

  ~~~
  <form action="." method="POST">{% csrf_token %}
  ~~~

  - POST 방식의 form 에서 CSRF 공격을 방지하기 위해 해당 tag 를 사용해야함

- {% url %}

  {% url 'namespace : view-name' arg1 arg2 %}

  - namespace - urls.py 에 정의한 include() 에서 정의한 namespace (이름)
  - view-name - urls.py 에 URL 패턴에서 정의한 뷰 함수 / 패턴 이름
  - arg - 뷰 함수에서 사용하는 인자 ( 없을 수도 있고 여러개인 경우는 스페이스로 구분 )

  ~~~
  사용 <form action = "{% url 'polls:vote' question.id %}" method="POST">
  미사용 <form action = "/polls/3/vote/" method="POST">
  ~~~

  - {% url %} tag 를 사용하여 손쉽게 작업

- {% with %}

  ~~~
  {% with total = User.count() %}
  	{{ total }} people
  {% endwith %}

  or

  {% with User.count() as total %}
  	{{ total }} people
  {% endwith %}
  ~~~

  특정 값을 변수에 저장해 두는 기능

- {% load %}

  {% load somelibrary package.otherlibrary %}

  사용자 정의 tag 및 filter 로딩

####  template comment

- {# "comment" #} - comment 에 코드가 있어도 주석으로 처리
- {% comment "comment_name (option)" %} comment {% endcomment %} 

#### template escape

- template 변수에 HTML 코드가 있을 시 아래와 같이 변환
  - '' < '' : &lt
  - " > " : &gt
  - " ' " : &#39
  - " " " : &quot
  - " & " : &amp
- escape 미적용시 아래와 같이 사용
  - {{ data | safe }}
  - {% autoescape off %} {{ data }} {% endautoescape %}

#### template inheritance

- template 상속을 통해 코드를 재사용 할 수 있게 한다.

- baseParent.html

  ~~~
  <html>
  <head>
  	<title>{% block title %}Hello{% endblock %}</title>
  </head>
  <body>
  	<div id="sidebar">
  		{% block sidebar %}
  		<ul>
  			<li>a</li>
  		</ul>
  		{% endblock %}
  	</div>
  	<div id="content">
  		{% block content %}
  		{% endblock %}
  	</div>
  </body>
  </html>
  ~~~

- contentChild.html

  ~~~
  {% extends "baseParent.html" %}
  {% block title %}World{% endblock %}
  {% block content %}
  	<h1>Hello World</h1>
  {% endblock %}
  ~~~

- contentChild.html 파일 rendering 결과

  - title -> World
  - div id="content" -> < h1>Hello World< /h1>
  - 나머지는 baseParent.html 에 따름

- 일반적인 template inheritance 과정

  1. 사이트 전체의 뼈대를 담은 base.html 생성
  2. 사이트 하위의 섹션별 스타일을 담은 base_content.html .. 등의 template 작성 후 {% extends "base.html" %} 로 상속받음
  3. 각각 개별 페이지에 대한 template 을 작성후 2단계의 template 을 상속받는다.

- 유의 사항

  - {% extends %} tag 는 사용하는 tag 중 가장 먼저 선언되어야 함
  - 1단계의 base.html 에 {% block %} tag 가 많을수록 좋음
  - 부모 template 의 내용을 사용하며 자식 template 에서 내용을 추가하고 싶다면  자식 template 에서 {{ % block.super }} 변수를 사용
  - 가독성을 높히기 위해 {% endblock content %} 사용가능

  ​

참고 문서 : https://docs.djangoproject.com/en/1.11/ref/templates/language/

