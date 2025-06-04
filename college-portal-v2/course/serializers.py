from rest_framework import serializers
from .models import Course, CourseType

class CourseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseType
        fields = '__all__'
        
class CourseSerializer(serializers.ModelSerializer):
    type = CourseTypeSerializer(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'
        depth = 1  # Adjust depth as needed for nested serialization