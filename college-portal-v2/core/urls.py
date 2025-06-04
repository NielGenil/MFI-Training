"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from student.views import StudentListCreate, StudentRetrieveUpdateDestroy, GenderListCreate, GenderRetrieveUpdateDestroy, EducationBackgroundListCreate, EducationBackgroundRetrieveUpdateDestroy
from enrollment.views import EnrollmentListCreate, EnrollmentRetrieveUpdateDestroy, EnrollmentTypeListCreate, EnrollmentTypeRetrieveUpdateDestroy, EnrollmentStatusListCreate, EnrollmentStatusRetrieveUpdateDestroy, ModeOfLearningListCreate, ModeOfLearningRetrieveUpdateDestroy , RequiredDocumentListCreate, RequiredDocumentRetrieveUpdateDestroy
from course.views import CourseListCreate, CourseRetrieveUpdateDestroy, CourseTypeListCreate, CourseTypeRetrieveUpdateDestroy
from scholarship.views import ScholarshipListCreate, ScholarshipRetrieveUpdateDestroy


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/students/', StudentListCreate.as_view()),
    path('api/students/<int:pk>/', StudentRetrieveUpdateDestroy.as_view()),
    path('api/gender/', GenderListCreate.as_view()),
    path('api/gender/<int:pk>/', GenderRetrieveUpdateDestroy.as_view()),
    path('api/education-background/', EducationBackgroundListCreate.as_view()),
    path('api/education-background/<int:pk>/', EducationBackgroundRetrieveUpdateDestroy.as_view()),
    
    path('api/enrollment/', EnrollmentListCreate.as_view()),
    path('api/enrollment/<int:pk>/', EnrollmentRetrieveUpdateDestroy.as_view()),
    path('api/enrollment-type/', EnrollmentTypeListCreate.as_view()),
    path('api/enrollment-type/<int:pk>/', EnrollmentTypeRetrieveUpdateDestroy.as_view()),
    path('api/enrollment-status/', EnrollmentStatusListCreate.as_view()),
    path('api/enrollment-status/<int:pk>/', EnrollmentStatusRetrieveUpdateDestroy.as_view()),
    path('api/mode-of-learning/', ModeOfLearningListCreate.as_view()),
    path('api/mode-of-learning/<int:pk>/', ModeOfLearningRetrieveUpdateDestroy.as_view()),
    path('api/required-document/', RequiredDocumentListCreate.as_view()),
    path('api/required-document/<int:pk>/', RequiredDocumentRetrieveUpdateDestroy.as_view()),

    path('api/courses/', CourseListCreate.as_view()),
    path('api/courses/<int:pk>/', CourseRetrieveUpdateDestroy.as_view()),
    path('api/course-types/', CourseTypeListCreate.as_view()),
    path('api/course-types/<int:pk>/', CourseTypeRetrieveUpdateDestroy.as_view()),

    path('api/scholarships/', ScholarshipListCreate.as_view()),
    path('api/scholarships/<int:pk>/', ScholarshipRetrieveUpdateDestroy.as_view()),
]
