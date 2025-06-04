from django.db import models


class CourseType(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


# Create your models here.
class Course(models.Model):
    course_name = models.CharField(max_length=100, unique=True)
    type = models.ForeignKey(CourseType, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.type.name} in {self.course_name}"

