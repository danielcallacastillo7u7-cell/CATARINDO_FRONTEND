import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles['hero-overlay']}>
                <div className={styles['hero-contenido']}>
                    <h1>Bienvenido a <br /><span>Club Catarindo</span></h1>
                    <p>
                        Tu espacio exclusivo de descanso y recreación en el corazón de Mollendo. 
                        Disfruta de instalaciones de primer nivel diseñadas para tu bienestar.
                    </p>
                    <div className={styles['hero-botones']}>
                        <a href="#servicios" className={styles['btn-primario']}>
                            Ver Servicios
                        </a>
                        <a href="#contacto" className={styles['btn-secundario']}>
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles['scroll-indicator']}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;