from django.shortcuts import render
from .models import Prenda

# Create your views here.
def home(request):
    searchPrenda = request.GET.get("searchPrenda")
    if searchPrenda:
        prendas = Prenda.objects.filter(nombre__icontains=searchPrenda)
    else:
        prendas = Prenda.objects.all()
    return render(request, 'home.html', {'searchPrenda':searchPrenda, 'prendas': prendas})

def precio(request):
    precio = request.GET.get("precio")
    if precio:
        prendas = Prenda.objects.filter(precio__icontains=precio)
    else:
        prendas = Prenda.objects.all()
    return render(request, 'home.html', {'prendas': prendas, 'precio':precio})