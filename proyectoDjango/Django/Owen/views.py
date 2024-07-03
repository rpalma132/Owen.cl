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