from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('articles.urls')),
    path('admin/', admin.site.urls),
]
