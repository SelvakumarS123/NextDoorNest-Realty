#REST To convert the instances of the listing model into json data
from rest_framework import serializers
from listings.models import Listing


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__' #listing model is serialized