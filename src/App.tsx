import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Layout } from './components/Layout.tsx';
import { Links } from './components/Links.tsx';
import { Resume } from './components/Resume.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/links" />} />
          <Route path="/links" element={<Links />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
