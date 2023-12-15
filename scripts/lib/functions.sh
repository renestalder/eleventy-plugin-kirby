#!/bin/bash

# Common functions.

START_PATH=$(pwd)
BASE_PATH=${BASE_PATH:-$START_PATH}

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

cd $BASE_PATH

function npm_install {
  INSTALL_LOCATION="$1"

  if ! [ -z "$INSTALL_LOCATION" ]; then
    cd "${INSTALL_LOCATION}"
  fi

  if command -v npm &>/dev/null; then
    echo "Location: $(pwd)"
    if [ -f "package-lock.json" ]; then
      echo -e "${GREEN}Install node dependencies from lock file...${NC}"
      npm ci --cache "${BASE_PATH}/.npm" --prefer-offline --legacy-peer-deps
    elif [ -f "package.json" ]; then
      echo -e "${RED}Install node dependencies from package.json directly...${NC}"
      npm i --cache "${BASE_PATH}/.npm" --prefer-offline --legacy-peer-deps
    else
      echo "No package.json or lock file found. Skipping."
    fi
  else
    echo -e "${RED}'npm' could not be found. Skipping.${NC}"
    exit
  fi

  cd ${BASE_PATH}
}

function pnpm_install {
  INSTALL_LOCATION="$1"

  if ! [ -z "$INSTALL_LOCATION" ]; then
    cd "${INSTALL_LOCATION}"
  fi

  if command -v pnpm &>/dev/null; then
    echo "Location: $(pwd)"
    if [ -f "package.json" ]; then
      echo -e "${GREEN}Install node dependencies from package.json (via pnpm) directly...${NC}"
      pnpm i --prefer-offline
    else
      echo "No package.json found. Skipping."
    fi
  else
    echo -e "${RED}'pnpm' could not be found. Skipping.${NC}"
  fi

  cd ${BASE_PATH}
}

function composer_install {
  INSTALL_LOCATION="$1"

  if ! [ -z "$INSTALL_LOCATION" ]; then
    cd "${INSTALL_LOCATION}"
  fi

  if command -v composer &>/dev/null; then
    echo "COMPOSER_MIRROR_PATH_REPOS is set to ${COMPOSER_MIRROR_PATH_REPOS:-0}"
    echo "Location: $(pwd)"
    if [ -f "composer.json" ]; then
      echo -e "${GREEN}Install composer dependencies...${NC}"
      composer update --lock
      composer install --prefer-dist
    else
      echo "No composer.json found. Skipping."
    fi
  else
    echo -e "${RED}'composer' could not be found. Skipping.${NC}"
    exit
  fi

  cd ${BASE_PATH}
}

function composer_install_packages {
  for dir in ${BASE_PATH}/packages/*/; do # list directories in the form "packages/"
    dir=${dir%*/}                         # remove the trailing "/"
    composer_install "${BASE_PATH}/packages/${dir##*/}"
  done
}

function run_in_docker {
  docker compose run --rm node bash -c "$@"
}
