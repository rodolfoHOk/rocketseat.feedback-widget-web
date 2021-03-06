import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Widget } from './components/FeedbackWidget/Widget';
import { Header } from './components/Header/Header';
import { Feedbacks } from './pages/Feedbacks';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
        </Routes>
        <ToastContainer />
      </main>
      <Widget />
    </div>
  );
}
