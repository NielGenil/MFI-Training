from django.db import models

# Create your models here.
class Gender(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    birth_date = models.DateField()
    nationality = models.CharField(max_length=50, unique=True)
    religion = models.CharField(max_length=50, blank=True, null=True)
    contact_number = models.CharField(max_length=15, unique=True)
    email = models.EmailField(unique=True)
    address = models.TextField()
    birth_place = models.CharField(max_length=100)
    lrn_number = models.CharField(max_length=50, unique=True)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    # educational_background
    # degrees

    # def __str__(self):
    #     return f"{self.last_name} {self.first_name} {self.middle_name[0].upper()}."

    class Meta:
        ordering = ['last_name', 'first_name']

    def __str__(self):
        middle_initial = f"{self.middle_name[0].upper()}." if self.middle_name else ""
        return f"{self.last_name} {self.first_name} {middle_initial}"

class EducationBackground(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE,  related_name='educational_backgrounds')
    highschool_name = models.CharField(max_length=255)
    strand = models.CharField(max_length=100, blank=True, null=True)
    year_graduated = models.IntegerField()
    general_average = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    school_address = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.highschool_name} {self.student}"
    

class Degree(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE , related_name='degrees')
    school_attended = models.CharField(max_length=50)
    degree_earned = models.CharField(max_length=50)
    year_graduated = models.CharField(max_length=50)
    latin_honors = models.CharField(max_length=50, blank=True, null=True)
    thesis_title = models.CharField(max_length=100, blank=True, null=True)
    school_address = models.TextField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f'{self.student}, {self.degree_earned}'
    
class GuardianInformation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='guardians')
    full_name = models.CharField(max_length=100)
    contact_number = models.IntegerField()
    relationship = models.CharField(max_length=50)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.student}, {self.full_name}"

