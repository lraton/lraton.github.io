# AppLab Website


Commands for the docker file on debian based distro.

from the directory of the `Dockerfile`

`
sudo docker builder build -t applab .
`

To create a volume use

`
sudo docker volume create volname
`

and to remove it 

`
sudo docker volume rm volname
`

To expose the TCP port and attach a volume use

`
sudo docker run --name applab-nginx -d -p 80:80 -v volname:/usr/share/nginx/html image-id
`

To start the container 

`
sudo docker start applab-nginx
`
To copy a the directory on the container use

`
sudo docker cp path-of-the-folder applab-nginx:/usr/share/nginx/html
`
http://localhost:80 or http://host-ip:80 to connect from your browser

To stop it 

`
sudo docker stop applab-nginx
`
