import axios from 'axios';

export function message(update, type, message_id, text, channel_id) {
    return axios.put(`/api/messages/${type}/${message_id}`, { text })
        .then(({ data: messages }) => {
            update(model => {
                console.log("UPDATING MODEL ON UPDATE MESSAGE");
                model.organisation[type + 's'].find(group => group.id == channel_id).messages = messages;
                return model;
            });
        })
        .catch(console.error);
}
