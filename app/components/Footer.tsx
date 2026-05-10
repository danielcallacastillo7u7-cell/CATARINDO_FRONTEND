import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
    const year: number = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-contenido']}>

                {/* Sección 1: Propósito */}
                <div className={styles['footer-seccion']}>
                    <div className={styles['footer-logo']}>
                        <h2>Club Catarindo</h2>
                    </div>
                    <p>
                        Comprometidos con la excelencia y la sostenibilidad en la 
                        administración de recursos para la comunidad de Mollendo.
                    </p>
                    <p>Servicio en línea 24/7</p>
                </div>

                {/* Sección 2: Navegación */}
                <div className={styles['footer-seccion']}>
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="#inicio">Vista General</a></li>
                        <li><a href="#servicios">Nuestros Servicios</a></li>
                        <li><a href="#galeria">Reseña Visual</a></li>
                        <li><Link href="/login">Acceso Residentes</Link></li>
                    </ul>
                </div>

                {/* Sección 3: Gestión */}
                <div className={styles['footer-seccion']}>
                    <h3>Gestión y Transparencia</h3>
                    <p><strong>RUC:</strong> 20123456789</p>
                    <p><strong>Asamblea:</strong> Último sábado/mes</p>
                    <p>Sede Mollendo, Arequipa</p>
                </div>

            </div>

            {/* Barra inferior */}
            <div className={styles['footer-bottom']}>
                <div className={styles['footer-bottom-flex']}>
                    <p>© {year} Club Catarindo. Todos los derechos reservados.</p>
                    <div className={styles['footer-legal']}>
                        <a href="#">Privacidad</a>
                        <a href="#">Estatutos</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;