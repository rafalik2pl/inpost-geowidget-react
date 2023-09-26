# inpost-geowidget-react

Package includes simple React Component for Inpost Geowidget v5.

## Installation

```sh
npm i inpost-geowidget-react
# or
yarn add inpost-geowidget-react
```

## Usage

```tsx
// App.tsx
import React from 'react'
import { InpostGeowidgetReact } from 'inpost-geowidget-react'

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

```


## Generate token

Production: https://manager.paczkomaty.pl

Sandbox: https://sandbox-manager.paczkomaty.pl


## Documentation of Inpost Geowidget v5

Read more about Inpost Geowidget v5, possible way to implementation, config parameters in the [docs](https://dokumentacja-inpost.atlassian.net/wiki/spaces/PL/pages/50069505/Geowidget+v5+Beta) and [here](https://geowidget.inpost.pl/docs/).
All API method are describedand [here](https://geowidget.inpost.pl/docs/interfaces/ApiInterface.html).


## License

This project is licensed under the MIT License.
