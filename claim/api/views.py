from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from .serializers import ClaimTypeSerializer, SubmissionTypeSerializer, ServiceAdvisorSerializer, TechnicianSerializer, ClaimSerializer
from .models import ClaimType, Dealership, SubmissionType, ServiceAdvisor, Technician, Claim
from rest_framework import status
import json
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import Permission
from django.shortcuts import get_object_or_404
from accounts.models import CustomUser
from datetime import datetime


# @api_view(["GET"])
# @csrf_exempt
# # @permission_classes([IsAuthenticated])
# def get_dealerships(request):
#     user_id = request.user.id
#     permissions = Permission.objects.filter(user=user_id)
#     print([p for p in permissions])
#     user = get_object_or_404(CustomUser, pk=user_id)
#     # if user.has_perm("auth.add_permission"): 
#     #     print("True")
#     # else:
#     #     print("False")
#     # if user.has_perm("auth.change_permission"): 
#     #     print("True")
#     # else:
#     #     print("False")
#     dealerships = ""
#     dealership_name = request.GET.get("name", "")
#     print([i for i in request.GET.items()])
#     print("##" + dealership_name + "##")
#     if dealership_name == "":
#         dealerships = Dealership.objects.all()
#     else:
#         dealerships = Dealership.objects.filter(name=dealership_name)
    
#     serializer = DealershipSerializer(dealerships, many=True)
#     return JsonResponse({'dealerships': serializer.data}, safe=False, status=status.HTTP_200_OK)


@api_view(["GET"])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
def get_claim_types(request):
    claim_types = ClaimType.objects.all()
    
    serializer = ClaimTypeSerializer(claim_types, many=True)
    return JsonResponse({'claim_types': serializer.data}, safe=False, status=status.HTTP_200_OK) 


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_submission_types(request):
    submission_types = SubmissionType.objects.all()
    
    serializer = SubmissionTypeSerializer(submission_types, many=True)
    return JsonResponse({'submission_types': serializer.data}, safe=False, status=status.HTTP_200_OK) 


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_service_advisors(request):
    service_advisor = ServiceAdvisor.objects.all()
    
    serializer = ServiceAdvisorSerializer(service_advisor, many=True)
    return JsonResponse({'service_advisor': serializer.data}, safe=False, status=status.HTTP_200_OK) 


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_technicians(request):
    technicians = Technician.objects.all()
    
    serializer = TechnicianSerializer(technicians, many=True)
    return JsonResponse({'technicians': serializer.data}, safe=False, status=status.HTTP_200_OK)         


@api_view(["POST"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def add_claim(request):
    try:
        dealership = Claim.objects.create(
            repair_order=request.POST["repair_order"],
            pdf=request.POST["pdf"],
            dealership = Dealership.objects.filter(name=request.POST["dealership"]).first(),
            claim_type = ClaimType.objects.filter(name=request.POST["claim_type"]).first(),
            submission_type = SubmissionType.objects.filter(name=request.POST["submission_type"]).first(),
            service_advisor = ServiceAdvisor.objects.filter(name=request.POST["service_advisor"]).first(),
            technician = Technician.objects.filter(name=request.POST["technician"]).first(),
            upload_date = datetime.now()
        )
        serializer = ClaimSerializer(dealership)
        return JsonResponse({'claims': serializer.data}, safe=False, status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        print(err)
        return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_claims(request):
    claims = Claim.objects.all()
    
    serializer = ClaimSerializer(claims, many=True)
    return JsonResponse({'claims': serializer.data}, safe=False, status=status.HTTP_200_OK)           


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_claim(request, claim_id):
    claims = Claim.objects.filter(id=claim_id)
    
    serializer = ClaimSerializer(claims, many=True)
    return JsonResponse({'claims': serializer.data}, safe=False, status=status.HTTP_200_OK)


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_claims_dealership(request, dealership_name):
    claims = Claim.objects.filter(dealership=dealership_name)
    
    serializer = ClaimSerializer(claims, many=True)
    return JsonResponse({'claims': serializer.data}, safe=False, status=status.HTTP_200_OK)    

#     repair_order = models.IntegerField( help_text='Enter Repair Order Number')
#     pdf = models.CharField( max_length=100, verbose_name='PDF file name' )
#     dealership = models.ForeignKey(Dealership, on_delete=models.CASCADE, verbose_name='dealership name', null=True) 
#     service_advisor = models.ForeignKey(ServiceAdvisor, on_delete=models.CASCADE, verbose_name='service advisor name', null=True) 
#     technician = models.ForeignKey(Technician, on_delete=models.CASCADE, verbose_name='technician name', null=True) 
#     claim_type = models.ForeignKey(ClaimType, on_delete=models.CASCADE, verbose_name='claim type', null=True) 
#     submission_type = models.ForeignKey(SubmissionType, on_delete=models.CASCADE, verbose_name='submission type', null=True)        


# @api_view(["POST"])
# # @csrf_exempt
# # @permission_classes([IsAuthenticated])
# def add_dealership(request):
#     print(request.body)
#     print(request.POST["name"])
#     print(request.POST["description"])
#     print(request.POST.get("description", ""))
#     # payload = json.loads(request.body)
#     try:
#         dealership = Dealership.objects.create(
#             name=request.POST["name"],
#             description=request.POST.get("description", ""),
#         )
#         print("1")
#         serializer = DealershipSerializer(dealership)
#         return JsonResponse({'dealerships': serializer.data}, safe=False, status=status.HTTP_201_CREATED)
#     except ObjectDoesNotExist as e:
#         return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
#     except Exception:
#         return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    