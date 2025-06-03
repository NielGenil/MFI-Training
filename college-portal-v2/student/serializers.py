from rest_framework import serializers
from .models import Student, Gender, EducationBackground

class StudentGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        depth = 1 
        fields = ['id', 
                  'first_name', 
                  'last_name', 
                  'middle_name', 
                  'birth_date',
                  'gender',
                  'nationality', 
                  'religion', 
                  'contact_number', 
                  'email', 
                  'address', 
                  'birth_place', 
                  'lrn_number',
                  'educational_backgrounds',
        ]

class StudentPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
         # This will include related fields like educational_backgrounds
        fields = ['id', 
                  'first_name', 
                  'last_name', 
                  'middle_name', 
                  'birth_date',
                  'gender',
                  'nationality', 
                  'religion', 
                  'contact_number', 
                  'email', 
                  'address', 
                  'birth_place', 
                  'lrn_number',
               
        ]
          # This will include related fields like educational_backgrounds

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'

    
class EducationBackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationBackground
        fields = ['id', 
                  'student', 
                  'highschool_name', 
                  'strand', 
                  'year_graduated', 
                  'general_average', 
                  'school_address']
        depth = 1  # This will include related fields like student

