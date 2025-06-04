from rest_framework import serializers
from .models import Enrollment, EnrollmentType, EnrollmentStatu, ModeOfLearning, RequiredDocument

class EnrollmentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnrollmentType
        fields = '__all__'

class EnrollmentStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnrollmentStatu
        fields = '__all__'

class ModeOfLearningSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModeOfLearning
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
        depth = 1

class RequiredDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredDocument
        fields = '__all__'
        depth = 1