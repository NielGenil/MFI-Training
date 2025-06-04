from django.db import models
from student.models import Student  # Adjust the import path as necessary
# Create your models here.

class Scholarship(models.Model):
    enrollment = models.ForeignKey(Student, on_delete=models.CASCADE)
    provider = models.CharField(max_length=100)
    reference_code = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"Scholarship for {self.enrollment} by {self.provider}"
