# Models

~~~
from django.db import models

class Musician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=100)

class Album(models.Model):
    artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    num_stars = models.IntegerField()
~~~

### Using Models

- Model 을 정의한 후에는 settings.py 에 INSTALLED_APPS 설정에 model 이 정의된 app을 추가해 주어야한다.
- Model 을 정의하거나 수정한 후에는 다음과 같은 순서로 Project 에 Model 변경사항을 적용시킨다.
  1. python manage.py makemigrations
  2. python manage.py migrate

### Fields

- Field 란 DB 테이블의 열을 나타내는 클래스의 속성으로 특정 테이블의 열을 나타낸다.

- **주요 Field Options**

  ~~~
  class User(models.Model):
  	USER_TYPE = (
  		('1','student'),
  		('2','professor'),
  		('3','worker'),
  	)
  	name = models.CharField(max_length=10, null=False, unique=True)
  	phone = models.CharField(max_lenght=30, null=True, blank=True)
  	age = models.IntegerField(help_text='User's age', blank=False, default=0)
  ~~~

  - max_length


  - null

  - blank - 해당 필드 빈값 허용 여부

  - choices

    ~~~
    >> tmp_user = User(USER_TYPE='1',name="JinHan",phone="010-3024-7034",age=26)
    >> print tmp_user.USER_TYPE
    >> '1'
    >> print tmp_user.get_USER_TYPE_display
    >> 'student'
    ~~~

    - get_XXX_display : 해당 값을 보여줌

  - default

  - help_text

  - primary_key

  - unique

  - verbose_name - 필드레이블 / 지정하지 않으면 필드명이 쓰여짐

  - validators  - 입력값 유효성 검사를 수행할 함수 지정

  - auto_now_add - Boolean 값으로 True 인 경우 생성시 현재 시간 저장

- **주요 Field Types**

  - AutoField
  - BooleanField


  - CharField

  - DateTimeField

  - FileField

  - ImageField

  - TextField

  - 그 외의 Field Types  https://docs.djangoproject.com/en/1.11/ref/models/fields/#model-field-types

- **Relationshios**

  - Many to One

    - ForeignKey 를 사용

      ~~~
      from django.db import models

      class Manufacturer(models.Model):
          # ...
          pass

      class Car(models.Model):
          manufacturer = models.ForeignKey(Manufacturer)
          # ...
      ~~~

  - Many to Many

    - ManyToManyField 를 사용

      ~~~
      from django.db import models

      class Topping(models.Model):
          # ...
          pass

      class Pizza(models.Model):
          # ...
          toppings = models.ManyToManyField(Topping)
      ~~~

  - One to One

    - OneToOneField 를 사용

      ~~~
      from django.db import models

      class Place(models.Model):
          name = models.CharField(max_length=50)
          address = models.CharField(max_length=80)

          def __str__(self):              # __unicode__ on Python 2
              return "%s the place" % self.name

      class Restaurant(models.Model):
          place = models.OneToOneField(
              Place,
              on_delete=models.CASCADE,
              primary_key=True,
          )
          serves_hot_dogs = models.BooleanField(default=False)
          serves_pizza = models.BooleanField(default=False)

          def __str__(self):              # __unicode__ on Python 2
              return "%s the restaurant" % self.place.name
      ~~~

- **__unicode__() ( Python 2 )**

  모델 객체가 문자열로 표현되어야 하는 경우에 호출됩니다. admin이나 console 에서 모델 객체를 표시하는 경우에 많이 쓰이게 됩니다.  

  **__str__() ( Python 3 )**

  파이썬3 의 경우에는, __unicode__() 대신에 __str__() 로 선언합니다.



#### 기존 DB 에서 모델 추출하기

- python manage.py inspectdb

바로적용하기

- python manage.py inspectdb > models.py