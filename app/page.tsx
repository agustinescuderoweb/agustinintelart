import styles from "./page.module.css";
import Image from "next/image";
import logo from "@/public/AIA.jpg"

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>

        {/* HEADER */}
        <header className={styles.header}>
          <Image src={logo} width={100} alt="logo"></Image>
          <h1 className={styles.logo}>AgustínIntelArt · IA</h1>
        </header>

        {/* HERO */}
        <section className={styles.hero}>
          <div>
            <h2 className={styles.heroTitle}>
              Automatizá tu negocio con Inteligencia Artificial
            </h2>

            <p className={styles.heroSubtitle}>
              Bots y chatbots que responden por vos 24/7, ahorran tiempo y te ayudan a vender más sin contratar personal.
            </p>

            <ul className={styles.heroList}>
              <li><span>›</span> Automatización de consultas</li>
              <li><span>›</span> Recordatorios de pago</li>
              <li><span>›</span> Integración con WhatsApp y tu web</li>
            </ul>

            <a
              href="https://wa.me/5492612388045?text=Hola%20Agust%C3%ADn"
              className={styles.btnPrimary}
            >
              Hablar por WhatsApp
            </a>

            <a href="https://drive.google.com/file/d/1DDOPWEj90PHCrWbUlO9IB2KDtGGDnIkk/view?usp=sharing" className={styles.btnSecondary}>
              Ver brochure PDF
            </a>
          </div>

          <div className={styles.heroCard}>
            <h3 className={styles.cardTitle}>Soluciones de IA</h3>
            <p className={styles.cardText}>
              Automatizaciones y ChatBots que trabajan por vos.
            </p>

            <ul className={styles.cardList}>
              <li>• Respuestas inmediatas</li>
              <li>• Ahorro de tiempo</li>
              <li>• Más ventas</li>
            </ul>

            <p className={styles.cardText}>
              Desde USD 400 + 2 meses gratis
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios de IA para tu negocio</h2>

          <div className={styles.servicesGrid}>

            {/* Servicio 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>Bot de Telegram</div>
              <div className={styles.serviceTitle}>Bot Automatizado</div>
              <ul className={styles.serviceList}>
                <li>Registra clientes</li>
                <li>Guarda contactos</li>
                <li>Envía recordatorios</li>
              </ul>
              <p className={styles.price}>USD 400 + chequeo mensual USD 40</p>
            </div>

            {/* Servicio 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>ChatBot + WhatsApp</div>
              <div className={styles.serviceTitle}>ChatBot de atención</div>
              <ul className={styles.serviceList}>
                <li>Respuestas automáticas</li>
                <li>Deriva a asesor humano</li>
                <li>Funciona 24/7</li>
              </ul>
              <p className={styles.price}>USD 400 + chequeo mensual USD 40</p>
            </div>

            {/* Servicio 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceTag}>ChatBot Web</div>
              <div className={styles.serviceTitle}>ChatBot para tu sitio</div>
              <ul className={styles.serviceList}>
                <li>Integrado en tu web</li>
                <li>Respuestas en tiempo real</li>
                <li>Mejora la conversión</li>
              </ul>
              <p className={styles.price}>USD 400 + chequeo mensual USD 40</p>
            </div>

          </div>

          {/* CTA Final */}
          <div className={styles.cta}>
            <p>¿Querés ver una demo aplicada a tu negocio?</p>
            <a
              href="https://wa.me/5492612388045"
              className={styles.btnPrimary}
            >
              Quiero una demo gratis
            </a>
          </div>
        </section>

        {/* BROCHURE */}
        <section id="brochure" className={styles.brochure}>
          <h2 className={styles.brochureTitle}>Brochure en PDF</h2>
          <p className={styles.brochureText}>
            Descargá el brochure completo con todos los servicios.
          </p>
          <a
            href="https://drive.google.com/file/d/1DDOPWEj90PHCrWbUlO9IB2KDtGGDnIkk/view?usp=sharing"
            className={styles.btnPrimary}
            download
          >
            Descargar PDF
          </a>
        </section>

      </div>
    </main>
  );
}
