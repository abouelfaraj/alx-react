import logo from './logo.svg';
import './App.css';
import Notifications from'./Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from './utils'; 

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <header className="App-header">
	  <Header />
        <div className="App-body">
          <login />
        </div>
        <footer className="App-footer">
	  <Footer />
        </footer>
      </div>     
    </React.Fragment>
  );
}

export default App;
