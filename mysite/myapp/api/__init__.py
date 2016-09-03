from tastypie.api import Api
api = Api(api_name='v1')

from .book_resource import BookResource
