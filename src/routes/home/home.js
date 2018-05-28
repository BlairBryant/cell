import React from 'react';
import { Home } from '../../styles/components';

export default function create(update) {
    // COMPONENT
    return {
        view(model) {
            return (
                <Home id="home" >
                    <h2>Welcome</h2>
                </Home>
            );
        }
    };
}
