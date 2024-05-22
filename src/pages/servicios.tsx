import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/ui/Title";
import styles from "../styles/services.module.scss";

export default function Servicios() {
  return (
    <>
      <Layout heroMessage="Alianzas que motivan" showHeroLine={false}>
        <Head>
          <title>Servicios</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/img/hero/logocolor.png" />
        </Head>
        <main className={styles.layout}>
          <div className={styles.title}>
            <div className={styles.line}></div>
            <Title
              title="Encuentra nuestros servicios aquí"
              color="#03495C"
              size="large"
            />
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img src="/img/services/serv5.png" alt="" />
              <div className={styles.text}>
                <h2>Doble razón para Unirte</h2>
                <p>Serviclick se unió a COANIQUEM, solo faltas tú. Suscribe tu asistencia y nosotros donaremos un 27% del costo del plan a la rehabilitación de los niños, niñas y adolescentes con quemaduras</p>
                <a href="https://coaniquem.serviclick.cl/" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/img/services/serv6.png" alt="" />
              <div className={styles.text}>
                <h2>Sala de Urgencia Bci</h2>
                <p>Sufrir una urgencia por accidente o enfermedad es algo que no puedes anticipar. Usa tu seguro Sala de Urgencia comunicándote siempre antes de la atención, con ServiClick</p>
                <a href="https://www.bci.cl/corredora-de-seguros/asistencias/asistencia-sala-de-urgencia" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/img/services/serv7.png" alt="" />
              <div className={styles.text}>
                <h2>Mi Mascota Protegida</h2>
                <p>Junto a VSPT Wine Group, te brindamos las mejores Asistencias diseñadas especialmente para ti y tu Mascota</p>
                <a href="https://personas.serviclick.cl/alianza/vinasanpedro" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/img/services/serv8.png" alt="" />
              <div className={styles.text}>
                <h2>1er Mes Gratis</h2>
                <p>Suscribe tu Asistencia de Serviclick usando tu Tarjeta Cuenta los Heroes Prepago y podrás obtener el 1er mes gratis</p>
                <a href="https://alianza.serviclick.cl/prepago-los-heroes" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/img/services/serv9.png" alt="" />
              <div className={styles.text}>
                <h2>Dona & Protégete</h2>
                <p>ServiClick, un plan de beneficios y asistencia para ciclistas, por casi 100 pesos al día</p>
                <a href="https://www.bicicultura.cl/2022/12/19/serviclick-un-plan-de-beneficios-y-asistencia-para-ciclistas-por-casi-100-pesos-al-dia/" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/img/services/serv10.png" alt="" />
              <div className={styles.text}>
                <h2>Protección para ti y tu familia</h2>
                <p>Junto a Sindicato n°1 Prosegur Chile, te brindamos las mejores Asistencias diseñadas especialmente para ti y tu familia</p>
                <a href="https://personas.serviclick.cl/alianza/sindicato1prosegur" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
          </div>

          <div className={styles.mobile}>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>Doble razón para Unirte</h2>
                <img src="/img/services/serv5.png" alt="" />
                <a href="https://coaniquem.serviclick.cl/" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
                <p>Serviclick se unió a COANIQUEM, solo faltas tú. Suscribe tu asistencia y nosotros donaremos un 27% del costo del plan a la rehabilitación de los niños, niñas y adolescentes con quemaduras</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>Sala de Urgencia Bci</h2>
                <img src="/img/services/serv6.png" alt="" />
                <p>Sufrir una urgencia por accidente o enfermedad es algo que no puedes anticipar. Usa tu seguro Sala de Urgencia comunicándote siempre antes de la atención, con ServiClick</p>
                <a href="https://www.bci.cl/corredora-de-seguros/asistencias/asistencia-sala-de-urgencia" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>Mi Mascota Protegida</h2>
                <img src="/img/services/serv7.png" alt="" />
                <a href="https://personas.serviclick.cl/alianza/vinasanpedro" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
                <p>Junto a VSPT Wine Group, te brindamos las mejores Asistencias diseñadas especialmente para ti y tu Mascota</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>1er Mes Gratis</h2>
                <img src="/img/services/serv8.png" alt="" />
                <a href="https://alianza.serviclick.cl/prepago-los-heroes" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
                <p>Suscribe tu Asistencia de Serviclick usando tu Tarjeta Cuenta los Heroes Prepago y podrás obtener el 1er mes gratis</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>Dona & Protégete</h2>
                <img src="/img/services/serv9.png" alt="" />
                <a href="https://www.bicicultura.cl/2022/12/19/serviclick-un-plan-de-beneficios-y-asistencia-para-ciclistas-por-casi-100-pesos-al-dia/" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
                <p>ServiClick, un plan de beneficios y asistencia para ciclistas, por casi 100 pesos al día</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.text}>
                <h2>Protección para ti y tu familia</h2>
                <img src="/img/services/serv10.png" alt="" />
                <a href="https://personas.serviclick.cl/alianza/sindicato1prosegur" target="_blank" rel="noopener noreferrer"><button>Conoce más</button></a>
                <p>Junto a Sindicato n°1 Prosegur Chile, te brindamos las mejores Asistencias diseñadas especialmente para ti y tu familia</p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
