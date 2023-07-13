const WebSocket = require('ws');


const wss = new WebSocket.Server({
    port:6969
});



wss.on("connection",function(ws){
    ws.on('message',function(data){
        // console.log(data.toString());
        // ws.send(data.toString());
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data.toString())
            }
        })
    })
})


