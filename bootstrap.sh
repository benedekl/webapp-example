#!/bin/sh

set -e
set -u

# függőségek a rendszeren:
# apt-get install python3 python3-pip python3-venv nodejs-legacy npm

VENV_NAME=venv

cd $(dirname "$0")

if [ -d ./"$VENV_NAME" ] ; then
  echo "venv already exists in dir \"$VENV_NAME\", to activate it type:"
  echo ". \"$VENV_NAME/bin/activate\""
  exit 1
fi

pyvenv "$VENV_NAME"

set +u
. "$VENV_NAME/bin/activate"
set -u

pip install -r requirements.txt
