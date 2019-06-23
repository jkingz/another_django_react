from django.db import models

# Create your models here.


class Article(models.Model):
    """Model definition for MODELNAME."""
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return f"{self.title}"
