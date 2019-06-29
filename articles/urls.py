from django.urls import path

from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    ArticleUpdateVIew,
    ArticleDeleteView,
)


urlpatterns = [
    path('', ArticleListView.as_view(
        {'get': 'list'}), name="article_list"),
    path(
        'create/', ArticleCreateView.as_view({'post': 'create'}), name="create_article"),
    path(
        'update/<int:pk>/', ArticleUpdateVIew.as_view({'put': 'update'}), name="create_article"),
    path(
        'delete/<int:pk>/', ArticleDeleteView.as_view({'delete': 'destroy'}), name="create_article"),
    path('detail/<int:pk>/', ArticleDetailView.as_view(
        {'get': 'retrieve'}), name="article_detail"),

]
