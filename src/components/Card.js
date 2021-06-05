import React from "react"

export default function Card({title, description}) {
  return (
    <section className="template">
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <span>Use Template</span>
    </section>
  )
}
