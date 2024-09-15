import * as React from "react";

function SectionComponent({ title, description, children, className }) {
  return (
    <section className={className}>
      <div className="text-3xl text-black">{title}</div>
      <p className="self-stretch mt-3 text-neutral-400">{description}</p>
      {children}
    </section>
  );
}

export default SectionComponent;