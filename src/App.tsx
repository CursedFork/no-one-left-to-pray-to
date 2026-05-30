import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterPage from './pages/CharacterPage';
import Sessions from './pages/Sessions';
import SessionPage from './pages/SessionPage';
import World from './pages/World';
import Bestiary from './pages/Bestiary';
import BestiaryPage from './pages/BestiaryPage';
import Items from './pages/Items';
import ItemPage from './pages/ItemPage';
import Maps from './pages/Maps';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="world" element={<World />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:slug" element={<CharacterPage />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="sessions/:slug" element={<SessionPage />} />
          <Route path="bestiary" element={<Bestiary />} />
          <Route path="bestiary/:slug" element={<BestiaryPage />} />
          <Route path="items" element={<Items />} />
          <Route path="items/:slug" element={<ItemPage />} />
          <Route path="maps" element={<Maps />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-32 text-center">
      <p
        className="text-6xl font-bold text-parchment-dark/20 mb-6"
        style={{ fontFamily: "'Cinzel', Georgia, serif" }}
      >
        404
      </p>
      <p
        className="text-lg italic text-parchment-dark/50"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        This page has been claimed by the void.
      </p>
    </div>
  );
}
