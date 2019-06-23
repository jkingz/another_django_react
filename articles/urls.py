from django.urls import path

from .views import ArticleListView, ArticleDetailView


urlpatterns = [
    path('', ArticleListView.as_view(
        {'get': 'list'}), name="article_list"),
    path('', ArticleDetailView.as_view(
        {'get': 'detail'}), name="article_detail"),
]
