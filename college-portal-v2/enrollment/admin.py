from django.contrib import admin
from .models import EnrollmentType, EnrollmentStatu, ModeOfLearning, Enrollment, RequiredDocument


# Register your models here.
admin.site.register(Enrollment)
admin.site.register(EnrollmentType)
admin.site.register(EnrollmentStatu)
admin.site.register(ModeOfLearning)
admin.site.register(RequiredDocument)
