import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { useAuthContext } from './utils/AuthContext';

function App() {
  const { state } = useAuthContext();

  return (
    <div className="App">
      {
        <Router>
          <Routes isAuthenticated={state?.isAuthenticated} />
        </Router>
      }
    </div>
  );
}

export default App;
