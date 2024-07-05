from django.urls import path
from . import views

urlpatterns = [
    path('', views.Owen, name='Owen'),
    path('poleras', views.poleras, name='poleras'),
    path('hoodies', views.hoodies, name='hoodies'),
    path('nosotros', views.nosotros, name='nosotros'),
    path('subirpolera', views.subirpolera, name='subirpolera'),
]