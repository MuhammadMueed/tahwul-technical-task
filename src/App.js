import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import PerspectiveDetails from './pages/PerspectiveDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="perspective-details" element={<PerspectiveDetails />} />
        </Route>
      </Routes>
    </Router>
  );
  // return <AppLayout children={<Dashboard />}></AppLayout>;
}

export default App;
