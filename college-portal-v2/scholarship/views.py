from django.shortcuts import render
from rest_framework import generics
from .models import Scholarship  # Adjust the import path as necessary
from .serializers import ScholarshipSerializer

# Create your views here.
class ScholarshipListCreate(generics.ListCreateAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ScholarshipSerializer
        return super().get_serializer_class()
    
class ScholarshipRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ScholarshipSerializer
        return super().get_serializer_class()