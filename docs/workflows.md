# github workflows


## fullpipeline.yml
This wrapper script calls the other scripts in the repo, namely 
code analyst [codeanalysis.yml](/.github/workflows/codeanalysis.yml),
generate hardened images [generatehardenedimages.yml](/.github/workflows/generatehardenedimages.yml),
and container analysis [containeranalysis.yml](/.github/workflows/containeranalysis.yml)

## [codeanalysis.yml](/.github/workflows/codeanalysis.yml)
Analize code in this git repo and import it into Heinmall
### Steps
repo code -> sonarqube -> heimdall

#### Check out
checks out the git repo
#### Sonarqube scan
Scans the code for vulnerabilities
#### Convert sonarqube scan to hdf
converts the scan results to HDF file format
#### Upload sonarqube hdf to heimdall
Uploads the sonarqube results to heimdall


## [generatehardenedimages.yml](/.github/workflows/generatehardenedimages.yml)
Generate hardened images and push them to ironbank
### Steps
repo on ansible -> ironbank nginx container -> hardened container -> images from hardened container -> image pushed to ironbank

#### Check out
checks out the git repo
#### Set up python
Install python
#### Install ansible dependencies
Install ansible
#### Run playbook to pull images and start containers
Run the [pull_images_and_start_containers.yml](/ansible/pull_images_and_start_containers.yml) script, which creates and starts the ironbank nginx container
#### Run playbook to harden nginx
Run the [nginx_hardening.yml](/ansible/nginx_hardening.yml) script, which hardens the nginx container. Specific configurations can be found at [ansible.md](/ansible/nginx_hardening.yml) lines 88-376
#### Run playbook to generate new images from hardened containers
Run the [docker_commit.yml](/ansible/docker_commit.yml) script, which adds the hardened container to the ironbank inventory
#### Create images
Builds images from the hardened ironbank containers
#### Push to ironbank base to GHCR
Pushes images to ironbank using GHCS(Github Container Registry)


## [containeranalysis.yml](/.github/workflows/containeranalysis.yml)
Scan results of generatehardenedimages agains inspec and trivy, and upload results to heimdall
### Steps
RHEL8 OS  -> inspec -> heimdall
NGINX app -> inspec -> heimdall
Image     -> Trivy  -> heimdall

#### Run RHEL8 profile
Installs inspec, runs scan on RHEL8 OS from generatehardenedimages.yml, and uploads results to heimdall

#### Run NGINX profile
Installs inspec, runs scan on hardened app from generatehardenedimages.yml with config from
[nginx_inputs.yml](/inspec/nginx_inputs.yml), and uploads results to heimdall

#### Run Trivy scan
Runs Trivy scan on hardened image from generatehardenedimages.yml, and uploads results to heimdall
