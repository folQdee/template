import React from 'react';

import dissentient from './images/dissentient.jpg';
import angelmaker from './images/angelmaker.png';
import sanctum from './images/sanctum.jpg';
import decay from './images/decay.jpg';

function App() {
  return (
    <div className="App">
            <h1>AngelMaker</h1>
            <p>
                AngelMaker — канадская дэткор-группа, основанная в 2011 году. 
                Известна своим мощным звучанием, агрессивными риффами и уникальными 
                двойными вокалами.
            </p>
            
            <h2>Альбомы</h2>
            <div className="albums-grid"> 
                <div className="album">
                    <img src={decay} alt="Decay" />
                    <p>Decay (2012)</p>
                </div>
                <div className="album">
                    <img src={dissentient} alt="Dissentient" />
                    <p>Dissentient (2015)</p>
                </div>
                <div className="album">
                    <img src={angelmaker} alt="AngelMaker" />
                    <p>AngelMaker (2019)</p>
                </div>
                <div className="album">
                    <img src={sanctum} alt="Sanctum" />
                    <p>Sanctum (2022)</p>
                </div>
            </div>
            
            <footer>
                <p>&copy; 2025 AngelMaker Albums Page</p>
            </footer>
        </div>
  );
}

export default App;
