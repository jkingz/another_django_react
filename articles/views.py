from rest_framework.viewsets import ModelViewSet

from articles.models import Article
from .serializers import ArticleSerializer


# FRY KISS YAGNI
class ArticleViewSet(ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


# # Article list
# class ArticleListView(viewsets.ModelViewSet):

#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# # Article Details
# class ArticleDetailView(viewsets.ModelViewSet):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# # Article Create VIEW
# class ArticleCreateView(viewsets.ModelViewSet):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# # Article Update View
# class ArticleUpdateVIew(viewsets.ModelViewSet):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# # Article Delete View
# class ArticleDeleteView(viewsets.ModelViewSet):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
