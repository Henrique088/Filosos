from django.urls import path
from filosofos import views

urlpatterns = [
    path('envia/', views.envia, name= "envia"),    
]