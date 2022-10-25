import Truck from './Truck';
import Car from './Car';
import Model from './Model';
import Color from './Color';
import Year from './Year';

function App() {
  return (
    <div className="App">
      <h1>Hello world.</h1>
      <Car brand="Ford"/>
      <Model brand="Mustang"/>
      <Color brand="rouge"/>
      <Year brand="2003" />
    </div>
  );
}

export default App;
