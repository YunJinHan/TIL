### django.shortcut functions

- 여러 함수와 클래스를 결합 및 제어하는데 편의를 제공하는 패키지



#### render()

~~~
render(request, template_name, context=None, content_type=None, status=None, using=None)
~~~

- 지정한 템플릿과 context 를 결합하고 HttpResponse 에 렌더링된 내용을 리턴해준다.

- 필수 인자

  - request - 응답을 생성하는데 사용 된 요청 객체
  - template_name

- 선택 인자

  - context - 템플릿에 추가할 값
  - content_type - 결과 document 에 사용될 MIME 유형
  - status - 응답의 상태 , default = 200
  - using - 템플릿 로딩을 위해 사용될 템플릿 엔진 이름

  ~~~
  from django.shortcuts import render

  def my_view(request):
      # View code here...
      return render(request, 'myapp/index.html', {
          'foo': 'bar',
      }, content_type='application/xhtml+xml')
      
  or 

  from django.http import HttpResponse
  from django.template import loader

  def my_view(request):
      # View code here...
      t = loader.get_template('myapp/index.html')
      c = {'foo': 'bar'}
      return HttpResponse(t.render(c, request), content_type='application/xhtml+xml')
  ~~~



#### render_to_response()

~~~
render_to_response(template_name, context=None, content_type=None, status=None, using=None)
~~~

- **render()** 와 유사하게 작동하지만 request 를 사용할 수 없다.



#### redirect()

~~~
redirect(to, permanent=False, *args, **kwargs)
~~~

- URL 에 몇몇 인자를 주어 HttpResponseRedirect 를 리턴한다.

- 기본적으로 permanent 가 False 여서 임시 rediection 을 반환하나, True 로 변경시 영구 반환된다.

- 사용 가능 범위

  - model :  **get_absolute_url()** 함수를 불러온다.

    ~~~

    ~~~

  - view

    ~~~
    def my_view(request):
        ...
        return redirect('some-view-name', foo='bar')
    ~~~

  - absolute or relative URL

    ~~~
    def my_view(request):
        ...
        return redirect('/some/url/')

    def my_view(request):
        ...
        return redirect('https://example.com/')
    ~~~



참고문헌 : https://docs.djangoproject.com/en/1.11/topics/http/shortcuts/