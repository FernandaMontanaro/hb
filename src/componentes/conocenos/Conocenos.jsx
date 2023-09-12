import img1 from '../../img/logo.jpg'
import './Conocenos.css'

const Conocenos = () => {


  return (
    <div>
      <main className='Contenedor-principal'>

        <section className="contenedor-blog">
          <article className="blog">
            <h1 className='conocenos'>About</h1>
            <div className='texto-imagen'>
              <div className='imagen'>
                <div className='blog'></div>
                <img src={img1} alt="imagen" />
              </div>
              <div className='blog-2'>

                <div className='texto'>
                  <h1>Happy Burger!</h1>
                  <p>Uniting families and making hearts happy since 1994! 
                    Our business promises high quality product for all pockets. 
                  </p>
                </div>
                <hr />
                <div className='rating'>
                  <div className='nacimiento'>
                    <p>Born in</p>
                    <p>1994</p>
                  </div>

                  <div className='Rating'>
                    <p>Rating</p>
                    <p className='stars'>★★★★★</p>
                  </div>

                  <div className='ubicacion'>
                    <p>Location</p>
                    <p>50 states of US</p>
                  </div>
                </div>

                <hr />

                <div className='contacto'>

                  <div className='dirección'>
                    <h4>Drive Thru</h4>
                    <p>24/7</p>
                  </div>
                  <div className='telefono'>

                    <h4>Delivery</h4>
                    <p>01-Happy-Burger</p>
                  </div>

                </div>
                <div className='horarios'>
                  <h4>Opened 24/7, all days of the year! </h4>
                </div>
              </div>
            </div>

          </article>
        </section>
      
      </main>
    </div>
  )
}

export default Conocenos