from django.shortcuts import render
from .models import Polera, Poleron, Usuario
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
        obj.save()
        context = {
            "mensaje": "Registro Exitoso",
        }
    return render(request, "pages/subirpolera.html", context)

def read(request):
    hoodies=Poleron.objects.all()
    polera=Polera.objects.all()
    context = {
        'polerones':hoodies,
        'poleras':polera
    }
    return render(request, "pages/read.html", context)

def buscar(request,pk):
    polera=Polera.objects.get(id_polera=pk)

    context = {
        'polera':polera,
    }
    return render(request, "pages/modificar.html", context)

def modificar(request,pk):
    polera=Polera.objects.get(id_polera=pk)
    if request.method == "POST":
        polera.nombre = request.POST.get("nombre")
        polera.descripcion = request.POST.get("descripcion")
        polera.detalle = request.POST.get("detalle")
        polera.precio = request.POST.get("precio")
        polera.envio = request.POST.get("envio")
        polera.rutaImg1 = request.POST.get("rutaImg1")
        polera.rutaImg2 = request.POST.get("rutaImg2")
        polera.rutaImg3 = request.POST.get("rutaImg3")
        polera.save()
        poleras=Polera.objects.all()
        polerones = Poleron.objects.all()
        
        context = {
        'poleras':poleras,
        'polerones':polerones,
        'mensaje':'Actualizado con exito'
        }
        return render(request, "pages/read.html", context)

def eliminar(request,pk): 
    polera = Polera.objects.get(id_polera=pk)
    polera.delete()
    poleras=Polera.objects.all()
    context = {
        'poleras':poleras,
        'mensaje':'Elimiando con exito'
    }
    return render(request, "pages/read.html", context)

def registro(request):

    if request.method == "POST":

        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        correo= request.POST.get('correo')
        contraseña = request.POST.get('contraseña')
        codigo_postal = request.POST.get('codigoP')

        obj = Usuario.objects.create(
            nombre= nombre,
            apellido = apellido,
            correo = correo,
            contraseña = contraseña,
            codigo_postal= codigo_postal,
            
        )
        obj.save()
        context = {
            "mensaje": "Registro Exitoso",
        }
        return render(request, "pages/owen.html", context)
