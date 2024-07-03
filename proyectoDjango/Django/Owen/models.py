from django.db import models

# Create your models here.
class Polera(models.Model):
    id_polera = models.AutoField(primary_key=True, db_column="IdPolera")
    nombre = models.CharField(max_length=20, null=False, blank=False)
    descripcion = models.TextField(null=False, blank=False)
    detalle = models.TextField(null=False, blank=False)
    precio = models.IntegerField(null=False, blank=False)
    envio = models.TextField(null=False, blank=False)
    rutaImg1 = models.CharField(max_length=100, null=False, blank=False)
    rutaImg2 = models.CharField(max_length=100, null=False, blank=False)
    rutaImg3 = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return (
            "nombre: " +
            str(self.nombre)
            + ", precio: $"
            + str(self.precio)
        )
    
class Poleron(models.Model):
    id_poleron = models.AutoField(primary_key=True, db_column="IdPoleron")
    nombre = models.CharField(max_length=20, null=False, blank=False)
    descripcion = models.TextField(null=False, blank=False)
    detalle = models.TextField(null=False, blank=False)
    precio = models.IntegerField(null=False, blank=False)
    envio = models.TextField(null=False, blank=False)
    rutaImg1 = models.CharField(max_length=100, null=False, blank=False)
    rutaImg2 = models.CharField(max_length=100, null=False, blank=False)
    rutaImg3 = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return (
            "nombre: " +
            str(self.nombre)
            + ", precio: $"
            + str(self.precio)
        )



