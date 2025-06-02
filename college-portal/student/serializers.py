from rest_framework import serializers
from .models import Gender, Student

class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    # gender = GenderSerializer(read_only=True)
    birth_date = serializers.CharField(max_length=10, write_only=True)
    class Meta:
        model = Student
        fields = '__all__'
        # fields = ['id', 'first_name', 'gender'] # modify the displayed fields
        # extra_kwargs = {
        #     'birth_date': {'write_only': True}
        # }

# class StudentListSerializer(serializers.ModelSerializer):
#     gender = GenderSerializer(read_only=True)
#     birth_date = serializers.CharField(max_length=10, write_only=True)
#     class Meta:
#         model = Student
#         fields = '__all__'
#         # fields = ['id', 'first_name', 'gender'] # modify the displayed fields
#         # extra_kwargs = {
#         #     'birth_date': {'write_only': True}
#         # }
