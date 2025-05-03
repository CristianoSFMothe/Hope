import '@mmisty/cypress-allure-adapter/support';
import { addCommands } from 'cypress-mongodb/dist/index-browser'
import 'cypress-plugin-api'

import './commands'
import './views/map'
import './views/create'
import './views/components'
addCommands();

