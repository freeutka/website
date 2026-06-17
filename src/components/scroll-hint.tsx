import React from "react";

const ScrollHint = () => (
  <>
    <button
      id="scroll-hint"
      type="button"
      className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] text-text-secondary transition-opacity duration-300 hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      // @ts-expect-error static onclick for SSR
      _onclick="document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })"
      aria-label="Scroll to projects"
    >
      <span>Scroll to projects</span>
      <svg
        className="h-3.5 w-3.5 animate-bounce motion-reduce:animate-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </>
);

export default ScrollHint;
