import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: '¿En qué versiones de Minecraft funciona?',
    a: 'BotsDarkSkull es compatible con Minecraft Java Edition versiones 1.8 a 1.21+. Usamos Mineflayer como librería base, lo cual garantiza soporte amplio con actualizaciones constantes.',
  },
  {
    q: '¿Necesito saber programar para usar los bots?',
    a: 'No. Puedes usar los módulos preconfigurados (Farming, Mining, Fishing, etc.) sin escribir una sola línea de código. Además, el generador de IA te permite escribir órdenes en español como "mina hierro cerca" y la IA crea el código JavaScript automáticamente.',
  },
  {
    q: '¿Los bots funcionan en servidores con anti-cheat?',
    a: 'BotsDarkSkull incluye sistema de proxies individuales para cada bot, tiempos de respuesta humanizados y movimiento suavizado. Sin embargo, la compatibilidad con anti-cheats depende de cada servidor y su configuración específica.',
  },
  {
    q: '¿Puedo usar cuentas de Minecraft piratas (offline)?',
    a: 'Sí. BotsDarkSkull soporta autenticación offline (cuentas piratas o no-premium) de forma nativa. Solo necesitas escribir el nombre de usuario y conectarte al servidor.',
  },
  {
    q: '¿Cómo funciona la IA local?',
    a: 'Puedes conectar modelos locales usando Ollama (por ejemplo: Llama3, Mistral, DeepSeek-Coder). Esto significa que tu código se genera en tu máquina, sin enviar datos a servidores externos. También soportamos proveedores en la nube si lo prefieres.',
  },
  {
    q: '¿En qué sistemas operativos funciona?',
    a: 'Disponible como AppImage nativa para Linux (optimizada para Wayland/Hyprland) y como ejecutable .exe para Windows. También tenemos un modo Lite que corre como servidor sin interfaz gráfica para instalar en VPS remotos.',
  },
  {
    q: '¿Cuántos bots puedo ejecutar al mismo tiempo?',
    a: 'La cantidad de bots depende de los recursos de tu máquina y tu conexión a internet. Con un equipo decente puedes manejar docenas de bots sin problemas. La app está optimizada para minimizar el consumo de RAM por bot.',
  },
  {
    q: '¿El pago es recurrente o puedo pagar una sola vez?',
    a: 'Ofrecemos dos opciones: una licencia mensual de $5 USD (sin soporte técnico incluido), o una licencia vitalicia de $13 USD con soporte ilimitado 24/7 y todas las actualizaciones futuras incluidas.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: '820px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Preguntas <span className="text-gradient-purple-green">Frecuentes</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(idx)}>
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>

                {/* Grid trick: 0fr → 1fr for perfect smooth animation */}
                <div className="faq-body">
                  <div className="faq-body-inner">
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
