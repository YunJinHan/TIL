- Django 에서의 form 을 통한 request 는 GET / POST 로 보내고 받을 수 있다.

#### Two snippets are functionally identical

1. First snippet

   <pre>

   if 'name' in request.POST:

   ​	x = request.POST['name']

   else:

   ​	x = None

   </pre>

2.  Second snippet

   <pre>

   x = request.POST.get('name', None)

