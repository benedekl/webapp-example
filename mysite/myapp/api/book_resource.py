from tastypie.resources import ModelResource
from tastypie.constants import ALL

from myapp.models import Book

from myapp.api import api

class BookResource(ModelResource):
    class Meta:
        queryset = Book.objects.all()
        resource_name = 'book'
        filtering = {'title': ALL}
        

api.register(BookResource())
