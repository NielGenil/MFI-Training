from django.db import models
from student.models import Student  # Adjust the import path as necessary
from course.models import Course  # Adjust the import path as necessary
# Adjust the import path as necessary

# Create your models here.
class EnrollmentType(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    
class EnrollmentStatu(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    
class ModeOfLearning(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)  # Assuming 'student.Student' is the correct path to the Student model
    type = models.ForeignKey(EnrollmentType, on_delete=models.CASCADE)
    status = models.ForeignKey(EnrollmentStatu, on_delete=models.CASCADE)
    mode_of_learning = models.ForeignKey(ModeOfLearning, on_delete=models.CASCADE)
    academic_year = models.CharField(max_length=10)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)  # Assuming 'course.Course' is the correct path to the Course model
    date = models.DateField()

    def __str__(self):
        return f"{self.student} - {self.course}"
    
class RequiredDocument(models.Model):
    enrollment_id = models.ForeignKey(Enrollment, on_delete=models.CASCADE)
    psa = models.BooleanField(default=False)
    tor = models.BooleanField(default=False)
    transfer_credentials = models.BooleanField(default=False)
    good_moral = models.BooleanField(default=False)
    photo = models.BooleanField(default=False)
    medical_certificate = models.BooleanField(default=False)
    vaccination_card = models.BooleanField(default=False)
    valid_id = models.BooleanField(default=False)

    def __str__(self):
        return f"Required documents for {self.enrollment_id.student} - {self.enrollment_id.course}"
