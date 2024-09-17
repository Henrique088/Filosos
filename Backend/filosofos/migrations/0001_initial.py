# Generated by Django 5.0.6 on 2024-09-16 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Frases',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('link', models.URLField()),
                ('descricao', models.TextField(max_length=800)),
                ('frase', models.CharField(max_length=200)),
            ],
        ),
    ]