    import { Socket, Server } from "socket.io";
    import http from "http";
    import express from 'express'

    const app = express();
    const port = 3000; 

    const server = http.createServer(http);
    
    app.use(express.json());

    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    /*
    server.get('/api/live-data', (req, res) => {
        res.json({ message: 'Data received successfully!', data: receivedData });
    });
    */

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });