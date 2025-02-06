import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div class="container">
        
        <Header />
        
        <section className="contacto section">
            <p>Realice la primaria en la escuela Heroinas.</p>
            <p><strong>Dirección:</strong> Calle 12 de septiembre, Cochabamba (Quillacollo)</p>
            <p><strong>Teléfono:</strong> (+591) 69461855</p>
            <p><strong>Email:</strong> <span class="highlight">douglash.dcz@gmail.com</span></p>
        </section>

        <section className="experiencia section">
            <h2 className="highlight">EXPERIENCIA</h2>
            <ul>
                <li><strong>Empresa UAB, Cochabamba</strong>: <em>Ayudante de TI</em> (2017 - 2019) <br/> Mantenimiento de computadores.</li>
                <li><strong>ContaBit</strong>: <em>Desarrollador</em> (2020 - 2021)<br/> Programador Full Stack en sistema contable.</li>
                <li><strong>365Group</strong>: <em>Desarrollador</em> (2022)<br/> Programador Full Stack en sistema de inventarios.</li>
            </ul>
        </section>

        <section className="formacion section">
            <h2 className="highlight">FORMACIÓN</h2>
            <ul>
                <li><strong>Universidad Adventista de Bolivia</strong>: <em>Egresado en ingeniería de sistemas</em> (Junio 2023)</li>
                <li><strong>U.E Nestor Adriazola Menendez</strong>, Cochabamba: <em>Bachiller</em> (2013 - 2017)</li>
                <li><strong>U.E Heroinas</strong>, Cochabamba: <em>Primaria</em> (2008 - 2012)</li>
            </ul>
        </section>

        <section className="aptitudes section">
            <h2 className="highlight">APTITUDES</h2>
            <ul>
                <li>Node.js</li>
                <li>Python, Django REST, C#</li>
                <li>Angular</li>
                <li>PHP, Laravel</li>
            </ul>
        </section>

        <section className="idiomas section">
            <h2 className="highlight">IDIOMAS</h2>
            <ul>
                <li>Español</li>
                <li>Inglés básico</li>
            </ul>
        </section>
    </div>
  );
}

export default App;
