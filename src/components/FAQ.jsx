import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    q: '¿En qué versiones de Minecraft funciona?',
    a: 'BotsDarkSkull es compatible con Minecraft Java Edition versiones 1.8 a 1.21+. Usamos Mineflayer como librería base, lo cual garantiza soporte amplio con actualizaciones constantes.'
  },
  {
    q: '¿Necesito saber programar para usar los bots?',
    a: 'No. Puedes usar los módulos preconfigurados (Farming, Mining, Fishing, etc.) sin escribir una sola línea de código. Además, el generador de IA te permite escribir órdenes en español como "mina hierro cerca" y la IA crea el código JavaScript automáticamente.'
  },
  {
    q: '¿Los bots funcionan en servidores con anti-cheat?',
    a: 'BotsDarkSkull incluye sistema de proxies individuales para cada bot, tiempos de respuesta humanizados y movimiento suavizado. Sin embargo, la compatibilidad con anti-cheats depende de cada servidor y su configuración.'
  },
  {
    q: '¿Puedo usar cuentas de Minecraft piratas (offline)?',
    a: 'Sí. BotsDarkSkull soporta autenticación offline (cuentas piratas o no-premium) de forma nativa. Solo necesitas escribir el nombre de usuario y conectarte al servidor.'
  },
  {
    q: '¿Cómo funciona la IA local?',
    a: 'Puedes conectar modelos locales de inteligencia artificial usando Ollama (por ejemplo: Llama3, Mistral, DeepSeek-Coder). Esto significa que tu código se genera en tu máquina, sin enviar datos a servidores externos. También soportamos proveedores en la nube si lo prefieres.'
  },
  {
    q: '¿En qué sistemas operativos funciona?',
    a: 'Disponible como AppImage nativa para Linux (optimizada para Wayland/Hyprland) y como ejecutable .exe para Windows. También tenemos un modo Lite que corre como servidor sin interfaz gráfica para instalar en VPS remotos.'
  },
  {
    q: '¿Cuántos bots puedo ejecutar al mismo tiempo?',
    a: 'La cantidad de bots depende de los recursos de tu máquina y de tu licencia. Con una buena conexión a internet y un equipo decente puedes manejar docenas de bots sin problemas.'
  },
  {
    q: '¿El pago es recurrente o puedo pagar una sola vez?',
    a: 'Ofrecemos dos opciones: una licencia mensual de $5 USD (sin soporte técnico incluido), o una licencia vitalicia de $13 USD con soporte ilimitado 24/7 y actualizaciones para siempre.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: '860px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Preguntas <span className="text-gradient-purple-green">Frecuentes</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem' }}>
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQ_DATA.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: openIndex === idx ? 'rgba(189, 0, 255, 0.05)' : 'var(--color-bg-card)',
                border: `1px solid ${openIndex === idx ? 'rgba(189, 0, 255, 0.3)' : 'var(--color-border)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  color: openIndex === idx ? 'var(--color-primary)' : 'var(--color-text-primary)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-sans)',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.q}
                <ChevronDown
                  size={20}
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '1rem',
                    color: openIndex === idx ? 'var(--color-primary)' : 'var(--color-text-muted)'
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: openIndex === idx ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease'
                }}
              >
                <p style={{
                  padding: '0 1.5rem 1.25rem 1.5rem',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.65
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
