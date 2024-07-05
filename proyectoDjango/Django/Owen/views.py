from django.shortcuts import render
from .models import Polera, Poleron
# Create your views here.
def Owen(request):  
    context = {}
    return render(request, "pages/Owen.html", context)

def poleras(request):
    poleras = Polera.objects.all()
    context = {
        'poleras' : poleras
    }
    return render(request, "pages/poleras.html", context)

def hoodies(request):
    polerones = Poleron.objects.all()
    context = {
        'poleron' : polerones
    }
    return render(request, "pages/hoodies.html", context)

def nosotros(request):
    context = {}
    return render(request, "pages/nosotros.html", context)

def subirpolera(request):

    if request.method != "POST":
        context = {}
        return render(request, "pages/subirpolera.html", context)

    else:

        nombre = request.POST.get('nombre')
        descripcion = request.POST.get('descripcion')
        detalle = request.POST.get('detalle')
        precio = request.POST.get('precio')
        envio = request.POST.get('envio')
        imagen1 = request.POST.get('rutaImg1')
        imagen2 = request.POST.get('rutaImg2')
        imagen3 = request.POST.get('rutaImg3')


        obj = Polera.objects.create(

            nombre= nombre,
            descripcion = descripcion,
            detalle = detalle,
            precio = precio,
            envio = envio,
            rutaImg1 = imagen1,
            rutaImg2= imagen2,
            rutaImg3 = imagen3,


        )
        obj.save
        context = {
            "mensaje": "Registro Exitoso",
        }
        context = {}
    return render(request, "pages/subirpolera.html", context)