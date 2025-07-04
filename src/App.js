import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme.js';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import MyTickets from './pages/tickets/MyTickets';
import NewTicket from './pages/tickets/NewTicket';
import ViewTicket from './pages/tickets/ViewTicket';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import PrivateRoute from './components/PrivateRoutes';

// ✅ Layout wrapper
const Layout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <main style={{ flexGrow: 1 }}>
      <TopBar />
      {children}
    </main>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <Layout>
                  <MyTickets />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets/new"
            element={
              <PrivateRoute>
                <Layout>
                  <NewTicket />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets/:id"
            element={
              <PrivateRoute>
                <Layout>
                  <ViewTicket />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
