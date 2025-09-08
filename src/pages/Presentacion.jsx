import React, { useState } from "react";
import robotsLogo from "../assets/logo.jpg";

export default function Presentacion() {
  const year = new Date().getFullYear();

  const WHATSAPP_NUMBER = "522712128513";

  const [sector, setSector] = useState("consultorios");
  const [customRole, setCustomRole] = useState("");

  const planes = {
    consultorios: [
      {
        tier: "Esencial",
        price: "$2,490",
        period: "/mes",
        bullets: [
          "Citas y recordatorios",
          "Respuestas a preguntas frecuentes",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$4,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Reprogramaciones + confirmaciones",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$6,990",
        period: "/mes",
        bullets: [
          "Agenda multi-doctor",
          "Reportes automáticos",
          "Integraciones a medida",
          "SLA básico",
        ],
      },
    ],

    concesionarias: [
      {
        tier: "Esencial",
        price: "$6,990",
        period: "/mes",
        bullets: [
          "Leads y seguimiento",
          "Catálogo y cotizaciones simples",
          "1–2 integraciones",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$9,990",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Agendador de pruebas de manejo",
          "3–4 integraciones (CRM/Drive)",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$14,990",
        period: "/mes",
        bullets: [
          "Integración avanzada a CRM",
          "Reportes y KPIs",
          "SLA y capacitación",
          "Onboarding dedicado",
        ],
      },
    ],

    restaurantes: [
      {
        tier: "Esencial",
        price: "$1,990",
        period: "/mes",
        bullets: [
          "Reservas y confirmaciones",
          "Menú en WhatsApp",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$3,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Pedidos simples para recoger",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$4,990",
        period: "/mes",
        bullets: [
          "Segmentación de clientes",
          "Promos automatizadas",
          "Reportes de ocupación",
          "Integraciones a medida",
        ],
      },
    ],

    gimnasios: [
      {
        tier: "Esencial",
        price: "$1,990",
        period: "/mes",
        bullets: [
          "Inscripciones y consultas",
          "Horarios y clases",
          "1 integración (Sheets)",
          "Soporte por chat",
        ],
      },
      {
        tier: "Pro",
        price: "$3,490",
        period: "/mes",
        bullets: [
          "Todo Esencial",
          "Recordatorios de pagos",
          "2–3 integraciones",
          "Flujos personalizados",
        ],
        highlight: true,
      },
      {
        tier: "Plus",
        price: "$5,490",
        period: "/mes",
        bullets: [
          "Gestión de membresías",
          "Reportes y retención",
          "Integraciones a medida",
          "SLA básico",
        ],
      },
    ],
  };

  const otherBizHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, tengo un negocio de tipo: ${customRole || "(especificar)"} y me interesa un chatbot RObots.`
  )}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-neutral-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-amber-600/20 blur-3xl" />
        <div className="absolute top-1/2 -right-16 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={robotsLogo}
                alt="RObots logo"
                className="h-8 w-8 rounded-xl bg-amber-400/10 p-1 shadow-lg shadow-amber-500/20 object-contain"
              />
              <span className="text-lg font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                  RO
                </span>
                <span className="text-white/90">bots</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <li><a className="hover:text-white" href="#beneficios">Beneficios</a></li>
              <li><a className="hover:text-white" href="#industrias">Industrias</a></li>
              <li><a className="hover:text-white" href="#funciona">Cómo funciona</a></li>
              <li><a className="hover:text-white" href="#integraciones">Integraciones</a></li>
              <li><a className="hover:text-white" href="#precios">Precios</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-amber-500/20 hover:brightness-110"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Solicitar demo
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-14 md:grid-cols-2 md:pt-24">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <SparklesIcon className="h-3.5 w-3.5" />
              Ya operando en agencias automotrices
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Chatbot de WhatsApp que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                atiende por ti
              </span>{" "}
              24/7
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Somos <strong>RObots</strong>, un equipo que crea soluciones con IA para automatizar la atención al cliente.
              Nuestro chatbot se conecta con <strong>Google Sheets</strong> y archivos para almacenar, consultar y actualizar información en tiempo real.
            </p>
            <ul className="mt-6 space-y-2 text-white/90">
              {[
                "Responder automáticamente a clientes 24/7.",
                "Agendar citas sin intervención humana.",
                "Compartir promociones, planes o catálogos al instante.",
                "Centralizar toda la información en un solo lugar.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
              >
                Agendar visita presencial
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                Ver planes
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900/60 p-4 shadow-2xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-amber-400/20 grid place-items-center overflow-hidden">
                    <img src={robotsLogo} alt="RObots" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">RObots Asistente</p>
                    <p className="text-xs text-white/60">en línea • WhatsApp</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                </div>
              </div>

              <div className="space-y-3">
                <ChatBubble side="left" text="¡Hola! 👋 Soy el asistente de RObots. ¿En qué negocio quieres automatizar la atención?" />
                <ChatBubble side="right" text="Restaurante" />
                <ChatBubble side="left" text="Perfecto 🍽️ Puedo tomar reservaciones, enviar menús y confirmar asistencia sin intervención humana." />
                <ChatBubble side="right" text="¿Se integra con Google Sheets?" />
                <ChatBubble side="left" text="Sí. Guardamos clientes, citas y pedidos en Sheets y otros formatos en tiempo real." />
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-800 px-3 py-2 text-sm text-white/60">
                <div className="flex -space-x-1">
                  <Dot />
                  <Dot />
                  <Dot />
                </div>
                Generando respuesta…
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Beneficios clave</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Ahorra tiempo, reduce costos y brinda una experiencia consistente a cada cliente.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Atención 24/7" desc="Nunca pierdas oportunidades por fuera de horario." icon={<ClockIcon className="h-5 w-5" />} />
            <FeatureCard title="Agenda automática" desc="Reservas y recordatorios sin intervención humana." icon={<CalendarIcon className="h-5 w-5" />} />
            <FeatureCard title="Promos al instante" desc="Comparte menús, planes, catálogos y PDFs." icon={<BoltIcon className="h-5 w-5" />} />
            <FeatureCard title="Datos centralizados" desc="Todo en un solo lugar: clientes, citas y pedidos." icon={<DatabaseIcon className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      <section id="industrias" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Funciona para distintos giros</h2>
              <p className="mt-2 text-white/70">Personalizamos flujos para tu operativa actual.</p>
            </div>
            <a href="#contacto" className="hidden md:inline rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5">
              Solicitar casos de uso
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Restaurantes", items: ["Reservas", "Menús", "Confirmaciones"] },
              { title: "Consultorios", items: ["Citas", "Recordatorios", "Historial básico"] },
              { title: "Talleres", items: ["Órdenes", "Presupuestos", "Seguimiento"] },
              { title: "Gimnasios", items: ["Inscripciones", "Pagos", "Clases"] },
              { title: "Escuelas", items: ["Inscripciones", "Reportes", "Avisos"] },
              { title: "Tiendas", items: ["Catálogo", "Stock", "Pedidos"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <ul className="mt-3 space-y-1 text-white/80 text-sm">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="funciona" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Cómo funciona</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step n={1} title="Diagnóstico" desc="Entendemos tu proceso actual y definimos objetivos claros." />
            <Step n={2} title="Implementación" desc="Conectamos WhatsApp con Sheets/archivos y adaptamos los flujos." />
            <Step n={3} title="Optimización" desc="Medimos, mejoramos y agregamos nuevas funciones según tu operación." />
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section id="integraciones" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Integraciones nativas</h2>
              <p className="mt-2 text-white/70">Conectamos con tus herramientas de todos los días.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <IntegrationCard title="WhatsApp" desc="Atiende y automatiza donde están tus clientes.">
              <WhatsAppIcon className="h-6 w-6" />
            </IntegrationCard>
            <IntegrationCard title="Google Sheets" desc="Registra clientes, citas, pedidos y reportes.">
              <SheetsIcon className="h-6 w-6" />
            </IntegrationCard>
            <IntegrationCard title="Google Drive" desc="Comparte catálogos y PDFs en segundos.">
              <DriveIcon className="h-6 w-6" />
            </IntegrationCard>
            <IntegrationCard title="Zapier / Webhooks" desc="Conecta con tu CRM, ERP o sistema propio.">
              <ZapIcon className="h-6 w-6" />
            </IntegrationCard>
          </div>
        </div>
      </section>

      {/* Precios con tabs por giro */}
      <section id="precios" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Planes por giro</h2>
              <p className="mt-2 text-white/70">Precios en MXN (referencia). Ajustamos según complejidad y volumen.</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["consultorios", "Consultorios"],
              ["concesionarias", "Concesionarias"],
              ["restaurantes", "Restaurantes"],
              ["gimnasios", "Gimnasios"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSector(key)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold border ${sector === key
                    ? "bg-amber-500 text-neutral-900 border-amber-400"
                    : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid de planes del sector activo */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {planes[sector].map((p) => (
              <PriceCard
                key={p.tier}
                tier={p.tier}
                price={p.price}
                period={p.period}
                bullets={p.bullets}
                highlight={p.highlight}
              />
            ))}
          </div>

          {/* Otro giro */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              ¿Otro giro?
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-300 border border-amber-400/30">Servicio especializado</span>
            </h3>
            <p className="mt-2 text-white/80 text-sm">
              Cuéntanos tu tipo de negocio y armamos un flujo a tu medida.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="Ej. clínica dental, escuela de música, spa…"
                className="flex-1 rounded-xl border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
              />
              <a
                href={otherBizHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:brightness-110"
              >
                Enviar por WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-white/60">
            * Implementación inicial puede requerir un pago único según complejidad.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Faq q="¿Necesito cambiar mis herramientas actuales?" a="No. Nos integramos a tus flujos existentes (Sheets, Drive o tu CRM vía webhooks)." />
            <Faq q="¿Cuánto tarda la implementación?" a="Depende del alcance. Un flujo base suele estar listo en pocos días una vez recibimos la información." />
            <Faq q="¿Puedo pausar o cambiar de plan?" a="Sí, los planes son flexibles y puedes escalar conforme crece tu operación." />
            <Faq q="¿Manejan confidencialidad?" a="Sí. Ofrecemos acuerdos de confidencialidad (NDA) y buenas prácticas de seguridad." />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="text-xl font-bold">Agenda una visita presencial</h3>
              <p className="mt-2 text-white/70">
                Vamos a tu negocio en el horario que indiques. Te mostramos el sistema y resolvemos dudas.
              </p>
              <a
                href="mailto:hola@robots.ai?subject=Cita%20presencial%20RObots&body=Hola%2C%20quisiera%20agendar%20una%20cita%20presencial%20para%20ver%20el%20chatbot."
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
              >
                Escribir por correo
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="text-xl font-bold">Escríbenos por WhatsApp</h3>
              <p className="mt-2 text-white/70">Asesoría sin compromiso, demo en vivo y total confidencialidad.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-400 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow hover:brightness-110"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chatear ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con redes */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p>© {year} RObots — Automatización con IA</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Planes</a>
              <a href="#" className="hover:text-white">FAQ</a>
              <a href="#" className="hover:text-white">Contacto</a>
            </div>
            <div className="flex items-center gap-3">
              {/* Reemplaza los href con los perfiles reales de los devs */}
              <a href="https://www.instagram.com/reyvallejo003/" aria-label="Instagram" className="hover:text-white"><InstagramIcon className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/waldopenaa/" aria-label="Instagram" className="hover:text-white"><InstagramIcon className="h-5 w-5" /></a>
              <a href="https://github.com/Francisco2000003" aria-label="GitHub" className="hover:text-white"><GithubIcon className="h-5 w-5" /></a>
              <a href="https://github.com/Reynaldo003" aria-label="GitHub" className="hover:text-white"><GithubIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* CTA flotante WhatsApp (más arriba) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20una%20demo%20de%20RObots`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-3 font-semibold text-neutral-950 shadow-xl transition hover:brightness-110"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Contacto
      </a>
    </div>
  );
}

/* -------------------- UI atoms -------------------- */
function ChatBubble({ side = "left", text }) {
  const isLeft = side === "left";
  const bubbleClass = isLeft
    ? "rounded-2xl rounded-tl-sm bg-white/10"
    : "rounded-2xl rounded-tr-sm bg-gradient-to-r from-amber-600/70 to-amber-400/70";

  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div className={`${bubbleClass} max-w-[85%] p-3 text-sm backdrop-blur`}>
        {text}
      </div>
    </div>
  );
}

function Dot() {
  return <div className="h-2 w-2 animate-bounce rounded-full bg-white/40 [animation-delay:0.15s]" />;
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
        {icon}
        {title}
      </div>
      <p className="text-white/80">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-2.5 py-1 text-xs text-white/80">
        Paso {n}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-white/80">{desc}</p>
    </div>
  );
}

function IntegrationCard({ title, desc, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-2.5 py-1 text-xs text-white/80">
        {children}
        {title}
      </div>
      <p className="text-white/80">{desc}</p>
    </div>
  );
}

function CaseCard({ title, lines, emoji }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="mb-2 text-3xl">{emoji}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-white/80 text-sm">
        {lines.map((l) => (
          <li key={l} className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> {l}</li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({ tier, price, period, bullets, highlight }) {
  return (
    <div
      className={`relative rounded-2xl border p-5 ${highlight
          ? "border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-amber-400/10"
          : "border-white/10 bg-neutral-900/40"
        }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">
          Recomendado
        </div>
      )}
      <h3 className="text-lg font-bold">{tier}</h3>
      <div className="mt-2 text-3xl font-black">
        {price} <span className="text-sm font-semibold text-white/70">{period}</span>
      </div>
      <ul className="mt-4 space-y-1 text-white/80 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> {b}</li>
        ))}
      </ul>
      <a
        href="#contacto"
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90"
      >
        Empezar
      </a>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
      <summary className="cursor-pointer list-none text-base font-semibold">
        <span className="inline-flex items-center gap-2">
          <QuestionIcon className="h-5 w-5" />
          {q}
        </span>
      </summary>
      <p className="mt-2 text-white/80">{a}</p>
    </details>
  );
}

/* -------------------- Inline icons (SVG) -------------------- */
function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 3.9A10 10 0 0 0 3.6 17.4L3 21l3.7-.6A10 10 0 1 0 20 3.9Zm-8 16.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.4.4.5-2.3-.2-.3A8.1 8.1 0 1 1 12 20Zm4.4-6.1c-.2-.1-1.3-.6-1.5-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.4 0-.5c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3l-.3.5c-.2.4-.5 1 .6 2.6A12.5 12.5 0 0 0 10 14c1.4 1.1 2.7 1.4 3.6 1.6h.8c.3 0 1-.4 1.1-.8.2-.4.2-.8.1-.9 0-.1-.2-.1-.2-.1Z" />
    </svg>
  );
}
function SheetsIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z" />
    </svg>
  );
}
function DriveIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.5 3 2 12l5.5 9H22L16.5 12 22 3H7.5Zm1.7 3h4.9l4.2 6.9H13.4L9.2 6ZM5.4 12l3.1-5.1 4.2 6.9-3.1 5.2L5.4 12Zm9.2 7-3.1-5.1h8.3L20.9 19h-6.3Z" />
    </svg>
  );
}
function ZapIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2 3 14h7l-1 8 11-12h-7l1-8Z" />
    </svg>
  );
}
function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
    </svg>
  );
}
function SparklesIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11 2 9 8l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Zm8 6-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z" />
    </svg>
  );
}
function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11h5v-2h-4V6h-2v7Z" />
    </svg>
  );
}
function CalendarIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2Zm13 8H4v10h16V10Z" />
    </svg>
  );
}
function BoltIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11Z" />
    </svg>
  );
}
function DatabaseIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C7 2 3 3.8 3 6v12c0 2.2 4 4 9 4s9-1.8 9-4V6c0-2.2-4-4-9-4Zm0 2c4.4 0 7 .9 7 2s-2.6 2-7 2-7-.9-7-2 2.6-2 7-2Zm0 16c-4.4 0-7-.9-7-2v-2c1.7 1 4.2 1.5 7 1.5s5.3-.5 7-1.5v2c0 1.1-2.6 2-7 2Zm0-6c-4.4 0-7-.9-7-2V8c1.7 1 4.2 1.5 7 1.5S17.3 9 19 8v2c0 1.1-2.6 2-7 2Z" />
    </svg>
  );
}
function QuestionIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm2.1-6.9-.6.5c-.8.7-1.5 1.3-1.5 2.4v.5h-2v-.7c0-1.4.9-2.3 1.7-3l.6-.5c.4-.3.7-.7.7-1.3 0-.9-.8-1.7-1.8-1.7-1 0-1.8.8-1.8 1.8H7.8c0-2.1 1.7-3.8 3.9-3.8s3.9 1.7 3.9 3.8c0 .9-.4 1.7-1.3 2.4Z" />
    </svg>
  );
}

/* Redes (SVG) */
function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9Zm6.5-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}
function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.7v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.8 2.6 4.8 6v6h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    </svg>
  );
}
function GithubIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.8-1.4-3.8-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.9-.8 1.8-1.2-2.5-.3-5-1.3-5-5.7 0-1.3.5-2.5 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.8 1.1 2 1.1 3.3 0 4.4-2.6 5.4-5.1 5.7 1 .8 1 2.2 1 3.2v3.2c0 .4.2.8.8.6A11.5 11.5 0 1 0 12 .5Z" />
    </svg>
  );
}
function YouTubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 7.5a4 4 0 0 0-2.8-2.8C18.7 4 12 4 12 4s-6.7 0-8.7.7A4 4 0 0 0 .5 7.5 41.6 41.6 0 0 0 0 12a41.6 41.6 0 0 0 .5 4.5 4 4 0 0 0 2.8 2.8C5.3 20 12 20 12 20s6.7 0 8.7-.7a4 4 0 0 0 2.8-2.8c.3-1.5.5-3 .5-4.5s-.2-3-.5-4.5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}
function XIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.7 10.5 22 2h-2.1l-6.2 7.1L9 2H2l7.8 11.2L2 22h2.1l6.6-7.5L15 22h7l-7.3-11.5Zm-3 3.3L4.4 3.5H7L18 20.5h-2.6l-3.7-6.7Z" />
    </svg>
  );
}
