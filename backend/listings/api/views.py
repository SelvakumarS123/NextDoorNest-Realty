from .serializers import ListingSerializer
from listings.models import Listing
from rest_framework import generics

class ListingList(generics.ListAPIView): #this view will show all the property listings in json format
    queryset = Listing.objects.all().order_by('-date_posted')
    serializer_class = ListingSerializer
