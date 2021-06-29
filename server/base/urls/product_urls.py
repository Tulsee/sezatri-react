from django.urls import path
from base.views import product_views as views

urlpatterns = [
    path('', views.getProducts, name='products'),

    path('top/', views.getTopProducts, name='top-products'),
    path('latest/', views.getLatestProducts, name='latest-product'),

    path('<str:pk>/', views.getProduct, name='product')
]
