# Generated by Django 5.2.1 on 2025-06-04 17:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0005_rename_national_id_student_nationality'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'ordering': ['last_name', 'first_name']},
        ),
    ]
