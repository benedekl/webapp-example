from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return "{t} ({r})".format(t=self.title, r=self.rating)
