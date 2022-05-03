import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './components/layout/Home';
import FocusedView from './components/layout/FocusedView';
import { Helmet } from "react-helmet";
import logoIcon from './components/logo/logo-icon.png';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <meta name="description" content="A photo collection created by Aden Tran." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Star Gallery" />
                <meta property="og:description" content="A photo collection created by Aden Tran." />
                <meta property="og:image" content={logoIcon} />
                <meta property="og:url" content="https://stargallery.vercel.app/" />
                <title>Star Gallery</title>
              </Helmet>
              <Home />
            </>
          } />
          <Route path="/photo" element={<FocusedView />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
