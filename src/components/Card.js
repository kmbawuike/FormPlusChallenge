import React from "react"

export default function Card({title, description}) {
  return (
    <section className="template" data-testid="custom-card">
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <span>Use Template</span>
    </section>
  )
}
