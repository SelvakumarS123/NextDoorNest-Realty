# NextDoorNest-Realty
cd frontend
npm install
python -m venv ndnvenv(opt)
ndnvenv\Scripts\activate.bat
pip install django
django-admin startproject backend(opt)
cd backend
python manage.py startapp listings(opt)
pip install (gdal-wheel)

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



