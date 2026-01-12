# ansible

## pull_images_and_start_containers.yml
Script used in generatehardenedimages.yml [generatehardenedimages.yml](/.github/workflows/generatehardenedimages.yml).
Creates and starts the ironbank nginx container

## nginx_hardening.yml
Script used in generatehardenedimages.yml [generatehardenedimages.yml](/.github/workflows/generatehardenedimages.yml).
Hardens the nginx container. Specific hardening configurations can be found at [ansible.md](/ansible/nginx_hardening.yml) lines 88-376

## hosts.yml
Variables used in nginx_hardening.yml.
Provides connection type and host name

## docker_commit.yml
Script used in generatehardenedimages.yml [generatehardenedimages.yml](/.github/workflows/generatehardenedimages.yml).
Adds the hardened container to the ironbank inventory

## etc-nginx.conf.js
Config file used in nginx_hardening.yml [nginx_hardening.yml](/ansible/nginx_hardening.yml). 
Creates the nginx config file on the machine

## hardening.conf.js
Config file used in nginx_hardening.yml [nginx_hardening.yml](/ansible/nginx_hardening.yml). 
Creates the hardeneing config file on the machine
