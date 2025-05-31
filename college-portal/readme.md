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
python3 -m venv venv  #linux
```
```bash
python -m venv venv  #windows
```
4. ## Activate Virtual environment
```bash
source venv/bin/activate #linux
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
python manage.py startapp <name_of_file>
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