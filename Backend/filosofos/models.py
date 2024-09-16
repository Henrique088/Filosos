from django.db import models

class Frases(models.Model):
    titulo = models.CharField(max_length=50)
    link = models.URLField()
    descricao = models.TextField(max_length=800)
    frase = models.CharField(max_length=200) 
# Create your models here.
