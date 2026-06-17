import React from "react";
import Layout from "../layouts/layout";
import ScrollHint from "../components/scroll-hint";
import Projects from "../components/projects";
import MainCard from "../components/main-card";

const Index = () => (
  <Layout canonical="/">
    <div id="main" className="mx-auto w-full max-w-2xl px-4 text-text">
      <section className="flex min-h-dvh flex-col items-center justify-center py-16">
        <MainCard />
      </section>

      <section id="projects-section" className="pb-24 pt-4">
        <header className="mb-8 border-b border-border pb-6">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mt-1">Things I&apos;ve worked on</p>
        </header>
        <Projects />
      </section>
    </div>
    <ScrollHint />
  </Layout>
);

export default Index;
