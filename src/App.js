import React, { lazy, Suspense, memo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import GetInvolved from './components/GetInvolved';

// Lazy load the Research component
const Research = lazy(() => import('./components/Research'));

// Memoize static components
const MemoizedNavbar = memo(Navbar);
const MemoizedBanner = memo(Banner);
const MemoizedAbout = memo(About);
const MemoizedWork = memo(Work);
const MemoizedContact = memo(Contact);
const MemoizedGetInvolved = memo(GetInvolved);

const App = () => {
  return (
    <HashRouter>
      <div>
        <ScrollToTop/>
        <MemoizedNavbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
                <div className="p-1">
                  <MemoizedBanner />
                  <MemoizedAbout />
                  <MemoizedWork />
                  <MemoizedGetInvolved/>
                </div>
              }
            />
            <Route
              path="/research"
              element={<Research />}
            />
          </Routes>
        </Suspense>
        <MemoizedContact />
      </div>
    </HashRouter>
  );
};

export default App;
