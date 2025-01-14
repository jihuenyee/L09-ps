import React from "react";

function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <details>
        <summary>What is this portal for?</summary>
        <p>This portal allows you to explore diplomas and register interest in courses.</p>
      </details>
      <details>
        <summary>How do I register for a course?</summary>
        <p>Navigate to a diploma, select a course, and fill out the registration form.</p>
      </details>
    </div>
  );
}

export default FAQ;