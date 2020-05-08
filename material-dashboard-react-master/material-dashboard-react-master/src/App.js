import React from 'react';
import AppList from './components/AppList';

function App(props) {
									
					 //console.log(props.engine);
  return (
    <div className="App">
      <AppList engine={props.engine}> </AppList>
    </div>
  );
}

export default App;
