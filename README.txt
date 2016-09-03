-------------------------------------------------
 Telepítés:
-------------------------------------------------

$ sh ./bootstrap.sh


-------------------------------------------------
 VENV aktiválása:
-------------------------------------------------

$ . venv/bin/activate


-------------------------------------------------
 Új Django projekt indítása:
-------------------------------------------------

$ django-admin.py startproject mysite
$ cd mysite
$ python manage.py startapp myapp


-------------------------------------------------
 Migrációs feladatok:
-------------------------------------------------

- db migrációk készítése
$ python manage.py makemigrations

- db migráció SQL ellenőrzése
$ python manage.py sqlmigrate myapp 00xx

- db migrációk futtatása
$ python manage.py migrate


-------------------------------------------------
 Shell indítása:
-------------------------------------------------

$ python manage.py shell
$ python manage.py dbshell


-------------------------------------------------
 Teszt szerver indítása:
-------------------------------------------------

$ python manage.py runserver


-------------------------------------------------
 Admin user felvétele:
-------------------------------------------------

$ python manage.py createsuperuser


-------------------------------------------------
 DoneJs keretrendszer telepítése:
-------------------------------------------------

$ npm install donejs
$ node_modules/donejs/bin/donejs add app webapp-example
$ npm update   <- csomagok frissítése
