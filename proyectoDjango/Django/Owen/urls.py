from django.urls import path
from . import views

urlpatterns = [
    path('', views.Owen, name='Owen'),
    path('poleras', views.poleras, name='poleras'),
    path('hoodies', views.hoodies, name='hoodies'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('subirpolera', views.subirpolera, name='subirpolera'),
    path('read', views.read, name='read'),
    path('modificar/<str:pk>', views.modificar, name='modificar'),
    path('eliminar/<str:pk>', views.eliminar, name='eliminar'),
    path('buscar/<str:pk>', views.buscar, name='buscar'),
    path('registro', views.registro, name='registro'),
]