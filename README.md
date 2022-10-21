## Rabbit mq

npm i 
node app.js
http://localhost:3000/api/users?offset=0&limit=5 : pagination part

## RabbitMq

docker run -d --hostname rabbit --name rabbit -p 15672:15672 -p 5672:5672 --restart always rabbitmq:3-management



node send.js    
node receive.js 

# Example terminal 

torea jour2/exo [main] $ node send.js   
 [x] Sent BONJOUR!
torea jour2/exo [main] $ node receive.js
 [*] Waiting for messages in hello. To exit press CTRL+C
 [x] Received BONJOUR!

# TP2
Here the purpose is to send/receive from one to one

run node new_task.js to send messages
run node worker.js to receive messages


# TP3
https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html

Here the purpose is to send/receive from one to many
Open terminal
run node emit_log.js
duplicate window 
run receive_log.js
  again duplicate window
  again run receive_log.js

Emit log then could send message to two receiver




