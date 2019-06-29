from rest_framework import viewsets, generics
from rest_framework.generics import CreateAPIView

from articles.models import Article
from .serializers import ArticleSerializer


# Article list
class ArticleListView(viewsets.ModelViewSet):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# Article Details
class ArticleDetailView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# Article Create VIEW
class ArticleCreateView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
