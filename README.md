# NextDoorNest-Realty
cd frontend
npm install
python -m venv ndnvenv(opt)
ndnvenv\Scripts\activate.bat
pip install django
django-admin startproject backend(opt)
cd backend
python manage.py startapp listings(opt)
pip install <--path to {(gdal-wheel)gdal304(cp311)}-->

#settings.py
    import os
    if os.name == 'nt':
        VENV_BASE = os.environ['VIRTUAL_ENV']
        os.environ['PATH'] = os.path.join(
            VENV_BASE, 'Lib\\site-packages\\osgeo') + ';' + os.environ['PATH']
        os.environ['PROJ_LIB'] = os.path.join(
            VENV_BASE, 'Lib\\site-packages\\osgeo\\data\\proj') + ';' + os.environ['PATH']

    under installed apps:
        'listings.apps.ListingsConfig',
        'django.contrib.gis',

|comit|

Install PostgreSQL16(Under "Categories", expand "Spatial extensions" -> Check "PostGISXXXXX")
install pgadmin
setup db
backend>pip install psycopg2

(opt)python manage.py createsuperuser
(opt)run migrations -> python manage.py makemigrations, python manage.py migrate     

|comit|

REST api -> To convert the instances of the listing model into json data(for serializing) -> listings/api/serializers.py

backend>pip install djangorestframework

create a view that will show all of the instances of listing model in their json format
-> listings/api/views.py

backend>pip install djangorestframework-gis (makes it easier to access the location data from the frontend /api/listings)

|comit|

Setup Django-CORS to make request from frontend to backend

backend>pip install django-cors-headers

frontend>npm install axios
