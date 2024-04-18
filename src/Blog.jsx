import data from './datos/datos.json'

export default function Blog () {
  return (
    <div className='content min-vh-100'>
      <h1>{data.titulo}</h1> 
      {data.secciones.map((blog, index) => (
        <div key={blog.titulo}>
          <h3>
             {index + 1}. {blog.titulo}
          </h3>
          <p>{blog.contenido}</p>

        </div>
      ))}
      <h2>Conclusión</h2>
      <p>{data.conclusion}</p>


    </div>
  )
}
