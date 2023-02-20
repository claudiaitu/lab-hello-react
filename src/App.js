import './App.css';

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'

function App() {
  return (
    <div>

      <div className='body'>

        <div className='nav'>
          <img src={logo} alt='logo' id='logo' />
          <img src={menu} alt='menu' id='menu' />
        </div>

        <div className='main'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>
        </div>

        <div className='button'>
          <button>Awesome!</button>
        </div>

      </div>

      <div className='images'>

        <div>
          <img src={icon1} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon2} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon3} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div>
          <img src={icon4} />

          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>

      </div>

    </div>
  );
}



export default App;
