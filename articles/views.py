from rest_framework import viewsets

from articles.models import Article
from .serializers import ArticleSerializer


# Article list
class ArticleListView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
