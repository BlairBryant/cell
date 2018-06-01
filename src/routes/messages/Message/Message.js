import React, { Component } from 'react';
import MessageHover from './MessageHover';

export default class Message extends Component {
    constructor(props) {
        super(props);
        if (props.own) {
            this.state = {
                editing: false,
                input: props.message.text
            };
            this.toggleEdit = () => this.setState({ editing: !this.state.editing });
        } else this.state = {};
    }
    cancel = () => {
        this.setState({
            editing: false,
            input: this.props.message.text
        });
    }
    onKeyDown = ({ key }) => {
        if (key === 'Enter') {
            this.props.saveEdit(this.props.message.id, this.state.input)
                .then(this.cancel);
        }
    }
    handleInput = ({ target: { value } }) => {
        this.setState({ input: value });
    }
    _delete = () => {
        this.props._delete(this.props.message.id);
    }
    render() {
        let {
            toggleEdit,
            handleInput,
            cancel,
            _delete,
            onKeyDown,
            props: { message, saveEdit, own },
            state: { editing, input }
        } = this;
        return (
            <div className="message" >
                <div className="image-wrapper">
                    <img src={message.img} />
                </div>
                <div>
                    <span>
                        <h3>ID: {message.id}</h3>
                        <h3>AUTHOR ID: {message.author_id}</h3>
                        <h5>{message.first_name} {message.last_name}</h5>
                        <h6>{message.timestamp}</h6>
                    </span>
                    {editing ?
                        <input value={input} onChange={handleInput} onKeyDown={onKeyDown} />
                        :
                        <span>{message.text}</span>}
                    {editing && <button onClick={cancel} >Cancel</button>}
                    {editing && <button onClick={saveEdit} >Save</button>}
                </div>
                <MessageHover message={message} toggleEdit={toggleEdit} _delete={_delete} own={own} />
            </div>
        );
    }
}
