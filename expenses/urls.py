from django.urls import path
from . import views


urlpatterns = [
    path('',views.index,name='expenses'),
    path('add-expense',views.add_expense,name='add-expenses'),
    # path('add-expense',views.add_EXPENSE,name='add-expenses'),
]
