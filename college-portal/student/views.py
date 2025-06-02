from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GenderSerializer, StudentSerializer #, StudentListSerializer
from .models import Gender, Student

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
        

class StudentView(APIView):
    # Implement student-related views here
    def get(self, request):
        students = Student.objects.all().order_by("last_name")
        serializer = StudentSerializer(students, many=True)
        # serializer = StudentListSerializer(students, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    def patch(self, request):
        try:
            instance = Student.objects.get(id=request.data['id'])
        except:
            return Response({"detail": "Not found"}, status=404)
        else:
            serializer = StudentSerializer(instance, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
    def delete(self, request):  
        try:
            instance = Student.objects.get(id=request.data['id'])
        except:
            return Response({"detail": "Not found"}, status=404)
        else:
            instance.delete()
            return Response({"detail": "Deleted"}, status=204)