from django.db import models

# Create your models here.
class Training(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


    # price = models.DecimalField(max_digits=10, decimal_places=2)
    # date = models.DateField()
    # duration = models.IntegerField(help_text="Duration in hours")
    # location = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    # class Meta:
    #     verbose_name_plural = "Trainings"
    #     ordering = ['date']     
