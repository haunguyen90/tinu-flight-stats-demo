// Mantra code
import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import flightModule from './modules/flight';

// init context
const context = initContext();
// create app
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(flightModule);
app.init();
