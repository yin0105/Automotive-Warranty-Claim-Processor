from rest_framework import serializers
from .models import ClaimType, SubmissionType, ServiceAdvisor, Technician

class ClaimTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClaimType
        fields = ['name']


class SubmissionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubmissionType
        fields = ['name']


class ServiceAdvisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceAdvisor
        fields = ['id', 'name']


class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = ['id', 'name']

# class DealershipSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dealership
#         fields = ['name', 'description']       

