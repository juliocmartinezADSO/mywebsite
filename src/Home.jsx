export default function Home () {
  return (
    <div className='content min-vh-100'>
      {/* Introducción Personal */}
      <section className='intro-section'>
        <h1>Bienvenido a mi sitio web</h1>
        <p>
          Me llamo Julio César Martínez y soy un desarrollador web especializado
          en JavaScript y React. Además, tengo conocimientos en el desarrollo
          backend utilizando Node.js y Express. Aquí encontrarás más información
          sobre mis proyectos, blogs y cursos.
        </p>
      </section>
      {/* Últimas Publicaciones del Blog */}
      <section className='latest-blog-section'>
        <h2>Últimas Publicaciones del Blog</h2>
        <ul>
    <li><a href='#'>Introducción a React Hooks</a></li>
    <li><a href='#'>Cómo optimizar el rendimiento en JavaScript</a></li>
    <li><a href='#'>Guía completa de Node.js y Express</a></li>
  </ul>
      </section>
      {/* Proyectos Destacados */}
      <section className='featured-projects-section'>
        <h2>Proyectos Destacados</h2>
        <ul>
    <li><a href='#'>E-commerce con React y Redux</a></li>
    <li><a href='#'>Gestor de tareas con Node.js y MongoDB</a></li>
    <li><a href='#'>Sitio web personal con diseño responsivo</a></li>
  </ul>
      </section>
      {/* Cursos Recomendados */}
      <section className='recommended-courses-section'>
        <h2>Cursos Recomendados</h2>
        <ul>
    <li><a href='#'>Curso de React desde cero</a></li>
    <li><a href='#'>Fundamentos de Node.js y Express</a></li>
    <li><a href='#'>Desarrollo web moderno con JavaScript</a></li>
  </ul>
      </section>
      {/* Testimonios */}
      <section className='testimonials-section'>
        <h2>Testimonios</h2>
        <div className='testimonial'>
          <blockquote>
            "Julio hizo un trabajo excepcional en nuestro proyecto. Su
            experiencia en desarrollo web y su enfoque detallado nos dejó muy
            satisfechos. ¡Altamente recomendado!"
          </blockquote>
          <p className='testimonial-author'>- Cliente satisfecho</p>
        </div>
      </section>
      {/* Llamado a la Acción */}
      <section className='cta-section'>
        <h2>¿Listo para comenzar un nuevo proyecto?</h2>
        <p>
          Contáctame ahora para discutir tus ideas y cómo puedo ayudarte a
          hacerlas realidad.
        </p>
        <button className='btn btn-primary'>Contactar</button>
      </section>{' '}
    </div>
  )
}
