# lraton.github.io
AppLab Website

Commands for the docker file on debian based distro.

from the directory of the `Dockerfile`

`
sudo docker builder build -t applab .
`

To expose the TCP port and atach a volume use

`
sudo docker run --name applab-nginx -d -p 8080:80 -v volname:/app image-id
`

To start the container 

`
sudo docker start applab-nginx
`

http://localhost:8080 or http://host-ip:8080 to connect from your browser

To stop it 

`
sudo docker stop applab-nginx
`
