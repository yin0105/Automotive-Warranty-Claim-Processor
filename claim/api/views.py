from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from .serializers import DealershipSerializer
from .models import Dealership
from rest_framework import status
import json
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import Permission
from django.shortcuts import get_object_or_404
from accounts.models import CustomUser


@api_view(["GET"])
@csrf_exempt
# @permission_classes([IsAuthenticated])
def get_dealerships(request):
    user_id = request.user.id
    print("user = " + str(user_id))
    permissions = Permission.objects.filter(user=user_id)
    print("# permissions #############")
    print([p for p in permissions])
    user = get_object_or_404(CustomUser, pk=user_id)
    print(user.email)
    if user.has_perm("auth.add_permission"): 
        print("True")
    else:
        print("False")
    if user.has_perm("auth.change_permission"): 
        print("True")
    else:
        print("False")
    dealerships = ""
    dealership_name = request.GET.get("name", "")
    print([i for i in request.GET.items()])
    print("##" + dealership_name + "##")
    # print(request.GET["description"])
    if dealership_name == "":
        dealerships = Dealership.objects.all()
    else:
        dealerships = Dealership.objects.filter(name=dealership_name)
    
    serializer = DealershipSerializer(dealerships, many=True)
    return JsonResponse({'dealerships': serializer.data}, safe=False, status=status.HTTP_200_OK)


@api_view(["POST"])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
def add_dealership(request):
    print(request.body)
    print(request.POST["name"])
    print(request.POST["description"])
    print(request.POST.get("description", ""))
    # payload = json.loads(request.body)
    try:
        dealership = Dealership.objects.create(
            name=request.POST["name"],
            description=request.POST.get("description", ""),
        )
        print("1")
        serializer = DealershipSerializer(dealership)
        return JsonResponse({'dealerships': serializer.data}, safe=False, status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    