# URL

### urlpatterns 사용법

<pre>

urlpatterns = [

​	url(r'^polls/', include('polls.urls')),

​	url(r'^admin/', admin.site.urls),

]

</pre>

- include() 는 다른 URL 패턴을 포함시킬 때 항상 사용하며,  admin.site.urls 만 예외다.

### url() argument

- 두개의 필수 인자인 **regex / view** 와 두개의 옵션 인자인 **kwargs / name** 을 전달 받는다.

  1. **regex**

     - regular expression  을 뜻하는 약어이며, url 패턴 매칭을 위해 사용된다.
     - Request 요청이 들어온 url 과 매칭되는 regular expression 을 찾을때까지 모든 regular expression 을 확인한다.
     - GET / POST / PUT / DELETE 등의 파라메터나 도메인 이름은 확인하지 않는다. ( /myapp/ or /myapp/?page=3 은 동일한 myapp/ 을 찾는다.)
     - 처음 URLconf 모듈이 로딩될 때 컴파일되며, 너무 복잡한 표현은 퍼포먼스를 저하시킨다.

  2.  **view**

     - 일치하는 regex 를 찾으면 , url() 에 인수로 전달된 특정 view 함수를 실행한다.
     - HttpRequest Object 를 첫번째 인자로, regular expression 으로 캡쳐한 값을 두번째 인자로 전달한다.

  3. **kwargs**

     - 임위로 만들어진 키워드 인수는 파이썬 사전으로 타겟 뷰로 전달된다.

  4. **name**

     - url(r'^$', views.index, name = 'index')  처럼 템플릿과 같은 파일에서 참조가 가능하다.

     ​