'use client'
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import styles from './Contacto.module.css';

type Status = 'idle' | 'enviando' | 'exito';

interface FormData {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
}

function Contacto() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '', email: '', asunto: '', mensaje: ''
    });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('enviando');
        try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
            const response = await fetch(`${backendUrl}/api/contacto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setStatus('exito');
                setTimeout(() => {
                    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
                    setStatus('idle');
                }, 3000);
            } else {
                alert("Error al enviar: " + (data.error || "Inténtalo de nuevo"));
                setStatus('idle');
            }
            // ✅ Sin variable
} catch {
    alert("No se pudo conectar con el servidor.");
    setStatus('idle');
}
    };

    return (
        <section className={styles.contacto} id="contacto">
            <div className={styles['contacto-contenido']}>

                {/* Info izquierda */}
                <div className={styles['contacto-info']}>
                    <h2>Ponte en contacto <span>con Catarindo</span></h2>
                    <p>¿Tienes dudas sobre los departamentos o las áreas comunes? Nuestro equipo está disponible los 7 días de la semana.</p>

                    <div className={styles['contacto-grid']}>
                        <div className={styles['contacto-dato']}>
                            <span className={styles['icon-box']}><MapPin size={22} /></span>
                            <h4>Ubicación</h4>
                            <p>Mollendo, Arequipa - Perú</p>
                        </div>
                        <div className={styles['contacto-dato']}>
                            <span className={styles['icon-box']}><Phone size={22} /></span>
                            <h4>Teléfono Directo</h4>
                            <p>+51 999 999 999</p>
                        </div>
                        <div className={styles['contacto-dato']}>
                            <span className={styles['icon-box']}><Mail size={22} /></span>
                            <h4>Consultas Online</h4>
                            <p>contacto@clubcatarindo.com</p>
                        </div>
                        <div className={styles['contacto-dato']}>
                            <span className={styles['icon-box']}><Clock size={22} /></span>
                            <h4>Horario Administrativo</h4>
                            <p>Lun - Dom: 8am - 8pm</p>
                        </div>
                    </div>
                </div>

                {/* Formulario derecha */}
                <div className={styles['contacto-form']}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles['form-grupo']}>
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Escribe tu nombre" required />
                        </div>
                        <div className={styles['form-grupo']}>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@correo.com" required />
                        </div>
                        <div className={styles['form-grupo']}>
                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" required />
                        </div>
                        <div className={styles['form-grupo']}>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos más detalles..." rows={5} required></textarea>
                        </div>
                        <button type="submit" className={`${styles['btn-enviar']} ${status !== 'idle' ? styles.loading : ''}`} disabled={status !== 'idle'}>
                            {status === 'idle' && <><Send size={18} /> Enviar Mensaje</>}
                            {status === 'enviando' && <>Procesando...</>}
                            {status === 'exito' && <><CheckCircle size={18} /> ¡Enviado!</>}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contacto;