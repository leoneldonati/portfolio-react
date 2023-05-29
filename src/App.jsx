import { Routes, Route } from "react-router-dom";
import { Home, Projects, About, NotFound } from './pages/index'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './index.scss'

export const App = () =>
  <main className="Main">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </main>