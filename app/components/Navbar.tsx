'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-wrapper']}>

                {/* Logo */}
                <div className={styles['navbar-logo']}>
                    <Link href="/" onClick={cerrarMenu}>Club Catarindo</Link>
                </div>

                {/* Links */}
                <ul className={`${styles['navbar-links']} ${menuAbierto ? styles.activo : ''}`}>
                    <li><Link href="/" onClick={cerrarMenu}>Inicio</Link></li>
                    <li><a href="#servicios" onClick={cerrarMenu}>Servicios</a></li>
                    <li><a href="#galeria" onClick={cerrarMenu}>Galería</a></li>
                    <li><a href="#contacto" onClick={cerrarMenu}>Contacto</a></li>
                </ul>

                {/* Botón Login escritorio */}
                <div className={styles['navbar-desktop-action']}>
                    <Link href="/login" className={styles['btn-login']}>
                        Iniciar Sesión
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;