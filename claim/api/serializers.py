from rest_framework import serializers, fields
from .models import ClaimType, SubmissionType, ServiceAdvisor, Technician, Claim

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


class ClaimSerializer(serializers.ModelSerializer):
    # upload_date = fields.DateField(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ'])
    class Meta:
        model = Claim
        fields = ['id', 'repair_order', 'pdf', 'dealership', 'claim_type', 'submission_type', 'service_advisor', 'technician', 'upload_date']               

# class DealershipSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dealership
#         fields = ['name', 'description']       

