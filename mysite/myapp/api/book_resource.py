from tastypie.resources import ModelResource
from tastypie.constants import ALL
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import DjangoAuthorization

from myapp.models import Book

from myapp.api import api

class BookResource(ModelResource):
    class Meta:
        queryset = Book.objects.all()
        resource_name = 'book'
        filtering = {'title': ALL}
        authentication = BasicAuthentication()
        authorization = DjangoAuthorization()
        always_return_data = True

api.register(BookResource())
