# Rabbit MQ

npm i 
node app.js
http://localhost:3000/api/users?offset=0&limit=5 : pagination part

docker run -d --hostname rabbit --name rabbit -p 15672:15672 -p 5672:5672 --restart always rabbitmq:3-management

node send.js    
node receive.js 

## TP1

https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
node send.js   
node receive.js

## TP2

https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html
Here the purpose is to send/receive from one to one
run node new_task.js to send messages
run node worker.js to receive messages


## TP3
https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html

Here the purpose is to send/receive from one to many
Open terminal
run node emit_log.js
duplicate window 
run receive_log.js
  again duplicate window
  again run receive_log.js

Emit log then could send message to two receiver




