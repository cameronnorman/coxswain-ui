import React from "react";
import "./App.css";
import Navbar from './components/layout/Navbar.js';
import Card from './components/application/card.js';
import ServerStatusBar from './components/ServerStatusBar/ServerStatusBar.js';
import Backdrop from './components/Backdrop/Backdrop.js';

function App() {
    let apps = [
      {
        name: 'Sheetzu',
        attributes: [
          { label: 'URL', value: 'sheets.normans.co.za' },
          { label: 'SSL Certificate', value: 'normans.pem'},
          { label: 'SSL Certificate Key', value: 'normans_key.pem'},
          { label: 'Host', value: 'sheetsu_web_1'},
          { label: 'Port', value: '3000'},
          { label: 'Exposed Port', value: '443'}
        ],
        route: 'Protected'
      },
      {
        name: 'Monitoring',
        attributes: [
          { label: 'URL', value: 'monitoring.normans.co.za' },
          { label: 'SSL Certificate', value: 'normans.pem'},
          { label: 'SSL Certificate Key', value: 'normans_key.pem'},
          { label: 'Host', value: 'sheetsu_web_1'},
          { label: 'Port', value: '3000'},
          { label: 'Exposed Port', value: '443'}
        ],
        route: 'Open'
      },
      {
        name: 'Movie Library',
        attributes: [
          { label: 'URL', value: 'library.normans.co.za' },
          { label: 'SSL Certificate', value: 'normans.pem'},
          { label: 'SSL Certificate Key', value: 'normans_key.pem'},
          { label: 'Host', value: 'sheetsu_web_1'},
          { label: 'Port', value: '3000'},
          { label: 'Exposed Port', value: '443'}
        ],
        route: 'Open'
      }
    ]

    let rendered_apps = apps.map((info) =>
      <Card info={info}/>
    );

    const Container = () => {
      return (
        <div className="container">
          <ServerStatusBar />
          {rendered_apps}
        </div>
      )
    }
    return (
      <div>
        <Backdrop />
        <Navbar />
        <Container />
      </div>
    );
}

export default App;
