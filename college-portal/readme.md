# django step by step Guide

1. ## Create a directory/folder
```bash
mkdir <name_of_folder>
```
2. ## Go inside of the newly created folder
```bash
cd <name_of_folder>
```
3. ## Create VE
```bash
python3 -m venv <name_of_folder>  #linux for example the name of folder is student
```
```bash
python -m venv <name_of_folder>  #windows for example the name of folder is student
```
4. ## Activate Virtual environment
```bash
source <name_of_folder>/bin/activate #linux for example the name of folder is student
```
```bash
venv\Scripts\activate #windows
```
5. ## Install django
```bash
pip install django
```
6. ## Check the dependencies
```bash
pip freeze
```
7. ## Save the dependencies into requirements.txt
```bash
pip freeze > requirements.txt
```
8. ## Create django projects
```bash
django-admin startproject core .
```
9. ## Migrate the database
```bash
python manage.py migrate
```
10. ## Create admin user
```bash
python manage.py createsuperuser
```
11. ## Create django app
```bash
python manage.py startapp <name_of_file>  #for example the name is student
```
12. ## Register your app `setting.py`

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'student',
]
```

13. ## Create Model

```python
from django.db import models

# Create your models here.
class Gender(models.Model):
    name = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return self.name

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField()
    birth_date = models.DateField()
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    contact_number = models.IntegerField(max_length=15, blank=True, null=True)
    emergency_number = models.IntegerField(max_length=15, blank=True, null=True)
    
    def __str__(self):
        return f"{self.last_name} {self.first_name} {self.middle_name}"`
```

14. ## Register your model to admin panel `admin.py`

```python
from django.contrib import admin
from .models import Student, Gender, Course, College, StudentCourse
# Register your models here.
admin.site.register(Student)
admin.site.register(Gender)
admin.site.register(Course)
admin.site.register(College)
admin.site.register(StudentCourse)
```
15. ## Create a migration file
```bash
python manage.py makemigration
```
16. ## Apply changes to database
```bash
python manage.py migration
```
17. ## Run server
```bash
python manage.py runserver
```
18. ## Goto 127.0.0.1:8000/admin/
```
Done!
```


19. ## Install djangorestframework
```
pip install djangorestframework
```
```
pip freeze
```
```
pip freeze > requirements.txt
```

20. ## Go to this site
```
https://www.django-rest-framework.org/#installation
```
21. ## Add this to settings.py but commnet first the Rest_framework
```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}
```
urls.py
```python
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls'))
]
```
22. ## Goto views.py
```python
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class GenderView(APIView):
    
    def get(self, request):
        return Response("Hello, World")
```
23. ## Update urls.py
```python
from django.contrib import admin
from django.urls import path, include
from student.views import GenderView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/gender/', GenderView.as_view()),
]
```
you can run the server using "api/gender/"

24. ## Add "serializer.py" to folder that you create on step 3 ( for example the name of folder is student)
```python
from rest_framework import serializers
from .models import Gender

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'
```
25. ## Update the views.py to access the serializer
```python
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GenderSerializer
from .models import Gender

# Create your views here.
class GenderView(APIView):

    def get(self, request):
        queryset = Gender.objects.all().order_by("-id")  # Assuming you want to list all
        serializer = GenderSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = GenderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request):
        try:
            instance = Gender.objects.get(id=request.data['id'])
        except:
            return Response({"detail": "Not found"}, status=404)
        else:
            serializer = GenderSerializer(instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)

    def delete(self, request):
        try:
            instance = Gender.objects.get(id=request.data['id'])
        except:
            return Response({"detail": "Not found"}, status=404)
        else:
            instance.delete()
            return Response({"detail": "Deleted"}, status=204)
```
you can check if the data is displaying by refreshing the page

