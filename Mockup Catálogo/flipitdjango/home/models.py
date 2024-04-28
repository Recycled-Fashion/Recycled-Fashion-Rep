from django.db import models

# Create your models here.
class Prenda(models.Model):
    imagen = models.ImageField(upload_to='movie/img/')
    nombre = models.CharField(max_length=200)
    precio = models.IntegerField()
    estado = models.CharField(max_length=200)
    talla = models.CharField(max_length=200)