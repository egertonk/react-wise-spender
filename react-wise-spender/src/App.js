
import './App.css';
import PaycheckForm from './components/PaycheckForm.js';
import PaycheckHeader from './components/PaycheckHeader.js';
import PaycheckFooter from './components/PaycheckFooter.js';

function App() {
  return (
    <div className="App">
      <PaycheckHeader />
      <PaycheckForm />
      <PaycheckFooter />
    </div>
  );
}

export default App;
