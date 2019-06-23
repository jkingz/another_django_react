from django.urls import path

from .views import ArticleListView, ArticleDetailView


urlpatterns = [
    path('', ArticleListView.as_view(
        {'get': 'list'}), name="article_list"),
    path('detail/<int:pk>/', ArticleDetailView.as_view(
        {'get': 'retrieve'}), name="article_detail"),
]
