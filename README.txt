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
