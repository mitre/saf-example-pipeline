# inspec

## nginx_inputs.yml
This 'inputs' file feeds into our nginx inspec scan.
The purpose on an inputs file is to provide custom configurations to the scan being run.
This inputs file simply specifies the nginx version allowed,
disallowes the use of PKI (Public Key Infrastructure),
and defines the system admin and system admin group to be 'root'.
