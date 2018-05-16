import React from 'react';
// LISTEN TO WINDOW HREF
import listen from './meiosis-router';
// ROUTES & STATICS
import createRoutes from './routes/routes';
import createStatics from './statics/statics';
// HTTP
import { GET } from './http';
// DEFAULT MODEL
import defaultModel from './model';
// STYLES
import { App } from './styles/components';

// APP
export default function create(update) {

    // CURRENT ROUTE ID
    function getId() {
        return window.location.href.replace(/.*\/(.{1,})/, '$1');
    }

    // INITIAL DATA
    GET.authenticate(update);
    GET.allOrganisations(update);
    GET.organisation(update, getId());

    // LISTEN TO ROUTES
    listen(update);

    // CHILDREN
    let routes = createRoutes(update);
    let statics = createStatics(update);

    // COMPONENT
    return {
        // TOP LEVEL MODEL
        model() {
            return defaultModel;
        },
        // TOP LEVEL VIEW
        view(model) {
            console.log("APP MODEL");
            console.log(model);
            return (
                <App id="app">
                    {routes.view(model)}
                    {statics.view(model)}
                </App>
            );
        }
    };
}
