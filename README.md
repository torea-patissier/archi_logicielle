## archi_logicielle

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