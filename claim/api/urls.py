from django.urls import include, path
from . import views

urlpatterns = [
  path('get_claim_types', views.get_claim_types),
  path('get_submission_types', views.get_submission_types),
  path('get_service_advisors', views.get_service_advisors),
  path('get_technicians', views.get_technicians),
  # path('add_dealership', views.add_dealership),
#   path('updatebook/<int:book_id>', views.update_book),
#   path('deletebook/<int:book_id>', views.delete_book)
]