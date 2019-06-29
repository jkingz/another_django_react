from django.urls import path

from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
)


urlpatterns = [
    path('', ArticleListView.as_view(
        {'get': 'list'}), name="article_list"),
    path(
        'create/', ArticleCreateView.as_view({'post': 'create'}), name="create_article"),
    path('detail/<int:pk>/', ArticleDetailView.as_view(
        {'get': 'retrieve'}), name="article_detail"),

]
