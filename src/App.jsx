import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Authpage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path='*' element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
