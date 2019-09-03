const express = require('express');
const messageController = require('./controllers/messages_controllers');
const cors = require('cors')

const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));
app.use(cors())

app.post("/api/messages", messageController.create);
app.get("/api/messages", messageController.read);
app.put("/api/messages/:id", messageController.update);
app.delete("/api/messages/:id", messageController.delete);

app.listen(3001, () => {
    console.log('the server works')
})