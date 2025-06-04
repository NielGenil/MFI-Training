from django.contrib import admin
from .models import Student, Gender, EducationBackground, Degree, GuardianInformation

# Register your models here.
admin.site.register(Student)
admin.site.register(Gender)
admin.site.register(EducationBackground)
admin.site.register(Degree)
admin.site.register(GuardianInformation)