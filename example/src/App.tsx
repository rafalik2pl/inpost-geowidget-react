import React from 'react'

import { InpostGeowidgetReact } from 'inpost-geowidget-react'
import 'inpost-geowidget-react/dist/index.css'

const App = () => {
  const token = 'YOUR_TOKEN';     // Generate YOUR_TOKEN on https://manager.paczkomaty.pl (for production environment) or https://sandbox-manager.paczkomaty.pl (for sandbox environment).
  const identifier = 'Geo1';      // Html element identifier, default: 'Geo1'
  const language = 'pl';          // Language, default: 'pl'
  const config = 'parcelcollect'; // Config, default: 'parcelcollect'
  const sandbox = false;          // Run as sandbox environment, default: false

  const apiReady = (api: any) => {
    // You can also use API Methods, as example
    api.changePosition({ longitude: 20.318968, latitude: 49.731131 }, 16);
    // console.log(api);
  }

  const pointSelect = (point: any) => {
    console.log('Object of selected point: ', point);
  }

  return <div>
    <h1>inpost-geowidget-react</h1>
    <div style={{ height: '1000px', width: '1000px' }}>
      <InpostGeowidgetReact token={ token } identifier={ identifier } apiReady={ apiReady } pointSelect={ pointSelect } />
    </div>
  </div>
}

export default App
