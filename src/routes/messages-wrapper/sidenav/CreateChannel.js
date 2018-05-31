import React, { Component, createRef } from 'react';

export default function Create({ create }) {

    let $check = createRef();

    const onKeyDown = ({ target, key }) => {
        if (key === 'Enter') {
            create(target.value, $check.current.checked);
            target.value = '';
        }
    }

    return (
        <div id="create" >
            <h3>Create a Channel</h3>
            <input onKeyDown={onKeyDown} placeholder="enter your channel's name..." />
            Private? <input ref={$check} onChange={() => console.log($check)} type="checkbox" />
        </div>
    );
}
