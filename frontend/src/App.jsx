import React, { Suspense, lazy, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";

// 1. CORE COMPONENTS
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundIcons from "./components/BackgroundIcons";

// 2. LAZY LOADED SECTIONS (Performance Optimization)
const FeatureHighlights = lazy(() => import('./components/FeatureHighlights'));
const ProductExperience = lazy(() => import('./components/ProductExperience'));
const About = lazy(() => import('./components/About'));
const Capabilities = lazy(() => import('./components/Capabilities'));
const AdvancedCertificationsProcess = lazy(() => import('./components/AdvancedCertificationsProcess'));
const FAQ = lazy(() => import('./components/FAQ'));
const Step5Contact = lazy(() => import('./components/Step5Contact'));
const Footer = lazy(() => import('./components/Footer'));
const HimalayanEdibleSaltPage = lazy(() => import('./components/HimalayanEdibleSaltPage'));
const PinkSaltPage = lazy(() => import('./components/PinkSaltPage'));
const WhiteSaltPage = lazy(() => import('./components/WhiteSaltPage'));
const BlackSaltPage = lazy(() => import('./components/BlackSaltPage'));
const SaltCulinaryPage = lazy(() => import('./components/SaltCulinaryPage'));
const WellnessPage = lazy(() => import('./components/WellnessPage'));
const BathSaltPage = lazy(() => import('./components/BathSaltPage'));
const AnimalLickSaltPage = lazy(() => import('./components/AnimalLickSaltPage'));

// Lightweight hash-based route identifiers
const ROUTE_HIMALAYAN_SALT = "#/himalayan-edible-salt";
const ROUTE_PINK_SALT = "#/pink-salt";
const ROUTE_WHITE_SALT = "#/white-salt";
const ROUTE_BLACK_SALT = "#/black-salt";
const ROUTE_SALT_CULINARY = "#/salt-culinary";
const ROUTE_WELLNESS = "#/wellness";
const ROUTE_BATH_SALT = "#/bath-salt";
const ROUTE_ANIMAL_LICK_SALT = "#/animal-lick-salt";

// 3. ANALYTICS INITIALIZATION (GA4)
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with real ID
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  const [route, setRoute] = useState(typeof window !== "undefined" ? window.location.hash : "");

  useEffect(() => {
    // Track initial page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isSaltPage = route === ROUTE_HIMALAYAN_SALT;
  const isPinkSaltPage = route === ROUTE_PINK_SALT;
  const isWhiteSaltPage = route === ROUTE_WHITE_SALT;
  const isBlackSaltPage = route === ROUTE_BLACK_SALT;
  const isSaltCulinaryPage = route === ROUTE_SALT_CULINARY;
  const isWellnessPage = route === ROUTE_WELLNESS;
  const isBathSaltPage = route === ROUTE_BATH_SALT;
  const isAnimalLickSaltPage = route === ROUTE_ANIMAL_LICK_SALT;
  const isSubPage = isSaltPage || isPinkSaltPage || isWhiteSaltPage || isBlackSaltPage || isSaltCulinaryPage || isWellnessPage || isBathSaltPage || isAnimalLickSaltPage;

  // Structured Data (JSON-LD) for Organization & Business
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GlobexisImpex International",
    "url": "https://globexisimpex.com",
    "logo": "https://globexisimpex.com/img/logo.png",
    "description": "Premium exporters of Himalayan Salt, Basmati Rice, and Industrial Minerals worldwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office # 137, Johar Town, G1 Block",
      "addressLocality": "Lahore",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923210005192",
      "contactType": "Customer Service",
      "email": "info@globexisimpex.com"
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-white">
      <BackgroundIcons />
      
      {/* 4. SEO & META TAGS HUB */}
      <Helmet>
        <title>GlobexisImpex | Premium Exporters of Himalayan Salt, Rice & Minerals</title>
        <meta name="description" content="GlobexisImpex is a leading global exporter specializing in high-quality Himalayan Pink Salt, Basmati Rice, and Industrial Minerals with certified export standards." />
        <meta name="keywords" content="Himalayan Salt Exporter, Basmati Rice Supplier, Industrial Minerals, Pink Salt Wholesale, GlobexisImpex Impex" />
        <meta property="og:title" content="GlobexisImpex | Global Premium Export Solutions" />
        <meta property="og:description" content="Trusted worldwide for quality, reliability, and precision in salt and mineral distribution." />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Inject Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* 5. ACCESSIBLE UI STRUCTURE */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[2000] bg-brand-gold text-white px-6 py-3 rounded-xl font-bold">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" role="main">
        {isSubPage ? (
          <Suspense fallback={<LoadingState />}>
            {isSaltPage && <HimalayanEdibleSaltPage />}
            {isPinkSaltPage && <PinkSaltPage />}
            {isWhiteSaltPage && <WhiteSaltPage />}
            {isBlackSaltPage && <BlackSaltPage />}
            {isSaltCulinaryPage && <SaltCulinaryPage />}
            {isWellnessPage && <WellnessPage />}
            {isBathSaltPage && <BathSaltPage />}
            {isAnimalLickSaltPage && <AnimalLickSaltPage />}
          </Suspense>
        ) : (
          <>
            <Hero />

            {/* Performance: Load non-critical sections on demand */}
            <Suspense fallback={<LoadingState />}>
              <FeatureHighlights />
              <ProductExperience />
              <About />
              <Capabilities />
              <AdvancedCertificationsProcess />

              <Step5Contact />
            </Suspense>
          </>
        )}
      </main>

      <Suspense fallback={<div className="h-64 bg-brand-navy" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

/**
 * Standardized Loading Skeleton for High-End UX
 */
const LoadingState = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-brand-navy font-black tracking-[0.4em] uppercase text-xs animate-pulse">Loading Global Data...</p>
      </div>
  </div>
);

export default App;
