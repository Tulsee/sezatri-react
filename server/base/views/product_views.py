from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from base.models import Product
from base.serializer import ProductSerializer, ProductWithReviewSerializer

from rest_framework import status


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:4]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getLatestProducts(request):
    products = Product.objects.order_by("-createdAt")[0:4]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductWithReviewSerializer(product, many=False)
    return Response(serializer.data)
