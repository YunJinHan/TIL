### django.http functions

#### HttpResponse()

~~~
HttpResponse(json.dumps(get_volume_list()),content_type="application/json; charset=utf8")

HttpResponse(json.dumps({'result': '%s' % e}), status=400)

HttpResponse(json.dumps({'result': 'success'}))
~~~

- HttpResponse() Subclass  : https://docs.djangoproject.com/en/1.11/ref/request-response/#httpresponse-subclasses

- Subclass : **HttpResponseRedirct()**

  - 첫번째 인자는 redirection 할 경로임

    ~~~
    @csrf_exempt
    def searchWithSubject(request):
        searchStr = request.POST['searchStr']
        print 'searchStr = ', searchStr
        url = '/listSearchedSpecificPageWork?searchStr=' + searchStr + '&pageForView=1'
        return HttpResponseRedirect(url)
    ~~~



참고 문헌 : https://docs.djangoproject.com/en/1.11/ref/request-response/