from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/list', LeadViewSet, 'list')

urlpatterns = router.urls