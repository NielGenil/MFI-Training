from django.shortcuts import render
from rest_framework import generics
from .models import Enrollment, EnrollmentType, EnrollmentStatu, ModeOfLearning, RequiredDocument
from .serializers import EnrollmentSerializer, EnrollmentTypeSerializer, EnrollmentStatusSerializer, ModeOfLearningSerializer, RequiredDocumentSerializer

# Create your views here.
class EnrollmentListCreate(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return EnrollmentSerializer
        return super().get_serializer_class()
    
class EnrollmentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return EnrollmentSerializer
        return super().get_serializer_class()
    
class EnrollmentTypeListCreate(generics.ListCreateAPIView):
    queryset = EnrollmentType.objects.all()
    serializer_class = EnrollmentTypeSerializer

class EnrollmentTypeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EnrollmentType.objects.all()
    serializer_class = EnrollmentTypeSerializer

class EnrollmentStatusListCreate(generics.ListCreateAPIView):
    queryset = EnrollmentStatu.objects.all()
    serializer_class = EnrollmentStatusSerializer

class EnrollmentStatusRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EnrollmentStatu.objects.all()
    serializer_class = EnrollmentStatusSerializer

class ModeOfLearningListCreate(generics.ListCreateAPIView):
    queryset = ModeOfLearning.objects.all()
    serializer_class = ModeOfLearningSerializer
    
class ModeOfLearningRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ModeOfLearning.objects.all()
    serializer_class = ModeOfLearningSerializer

class RequiredDocumentListCreate(generics.ListCreateAPIView):
    queryset = RequiredDocument.objects.all()
    serializer_class = RequiredDocumentSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return RequiredDocumentSerializer
        return super().get_serializer_class()
    
class RequiredDocumentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RequiredDocument.objects.all()
    serializer_class = RequiredDocumentSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return RequiredDocumentSerializer
        return super().get_serializer_class()
