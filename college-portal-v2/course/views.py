from django.shortcuts import render
from rest_framework import generics
from .models import Course, CourseType
from .serializers import CourseSerializer, CourseTypeSerializer

# Create your views here.
class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return CourseSerializer
        return super().get_serializer_class()
    
class CourseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return CourseSerializer
        return super().get_serializer_class()
    
class CourseTypeListCreate(generics.ListCreateAPIView):
    queryset = CourseType.objects.all()
    serializer_class = CourseTypeSerializer

class CourseTypeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseType.objects.all()
    serializer_class = CourseTypeSerializer