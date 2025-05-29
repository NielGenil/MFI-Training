# create a directory/folder

0. python3 -m venv django

1. go to that folder

cd name_of_folder

2. create a virtual environmet

-wind
venv\Script\activate

-linux
source venv/bin/activate

3. install django

pip install django

4. create django project

django-admin startproject core .

5. run django server

python manage.py runserver

6. migrate database

python manage.py migrate

7. create admin account

python manage.py createsuperuser

8. create django apps

python manage.py startapp <name of app>

9. update db

python manage.py makemigrations