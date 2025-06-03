# DRF GENERICS API VIEWS

1. ## Update views.py
```python
from django.shortcuts import render
from rest_framework import generics # new import "generics"
from .models import Student, Gender, EducationBackground
from .serializers import StudentPostSerializer, StudentGetSerializer, GenderSerializer, EducationBackgroundSerializer

# Create your views here.
class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentPostSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return StudentGetSerializer
        return super().get_serializer_class()

class StudentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentPostSerializer

class GenderListCreate(generics.ListCreateAPIView):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer

class GenderRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer

class EducationBackgroundListCreate(generics.ListCreateAPIView):
    queryset = EducationBackground.objects.all()
    serializer_class = EducationBackgroundSerializer

class EducationBackgroundRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EducationBackground.objects.all()
    serializer_class = EducationBackgroundSerializerfrom django.shortcuts import render

```
