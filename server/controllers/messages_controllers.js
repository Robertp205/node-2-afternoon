const messages = [];

let id = 0;

const create = (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time})
    id + 1;
    res.status(200).send(messages)
};

const read = (req, res) => {
    res.status(200).send(messages)
};

const update = (req, res) => {
    const {text} = req.body;
    const updateID = req.params.id
    const messageIndex = messages.findIndex(message =>  message.id === +updateID)
    let message = message[messageIndex]
    message[messageIndex] = {
        id: message.id,
        time:message.time,
        text:text || message.text
    }
    res.status(200).send(messages)
};

const deleteMessage = (req, res) => {
    const deleteID = req.params.id;    
    const messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
}

module.exports = {
    create,
    read,
    update,
    deleteMessage
}