from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .models import Category, Menu
from .serializers import MenuSerializer, CategorySerializer


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class MenuView(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

def FoodCategory(request, menu_id):
    menu = get_object_or_404(Menu, id=menu_id)
    return render(request, 'food-category.html', {'menu': menu})