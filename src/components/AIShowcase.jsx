import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const AI_PROMPTS = [
  {
    label: '🪵 Talar madera y almacenar',
    prompt: 'Busca árboles de roble cercanos, corta la madera y guárdala en un cofre cuando el inventario esté lleno.',
    JS: `// Código generado por la IA de DarkSkull (JavaScript)
const { pathfinder, goals } = require('mineflayer-pathfinder');

async function farmWood() {
  const tree = bot.findBlock({
    matching: block => block.name === 'oak_log',
    maxDistance: 32
  });
  
  if (tree) {
    bot.chat('Moviéndome hacia el árbol...');
    await bot.pathfinder.goto(new goals.GoalLookAtBlock(tree.position, bot.world));
    await bot.dig(tree);
    bot.chat('Madera recolectada.');
    
    if (bot.inventory.items().length >= 27) {
      await depositInChest();
    } else {
      setTimeout(farmWood, 1000);
    }
  }
}`,
    TS: `// Código generado por la IA de DarkSkull (TypeScript)
import { Bot } from 'mineflayer';
import { pathfinder, goals } from 'mineflayer-pathfinder';

async function farmWood(bot: Bot): Promise<void> {
  const tree = bot.findBlock({
    matching: block => block.name === 'oak_log',
    maxDistance: 32
  });
  
  if (tree) {
    bot.chat('Moviéndome hacia el árbol...');
    await bot.pathfinder.goto(new goals.GoalLookAtBlock(tree.position, bot.world));
    await bot.dig(tree);
    bot.chat('Madera recolectada.');
    
    if (bot.inventory.items().length >= 27) {
      await depositInChest(bot);
    } else {
      setTimeout(() => farmWood(bot), 1000);
    }
  }
}`
  },
  {
    label: '🛡️ Guardaespaldas de combate',
    prompt: 'Sigue al jugador Tairlag y ataca a cualquier monstruo hostil que se acerque en un radio de 10 bloques.',
    JS: `// Código generado por la IA de DarkSkull (JavaScript)
const pvp = require('mineflayer-pvp');

bot.on('physicsTick', () => {
  const player = bot.players['Tairlag']?.entity;
  if (!player) return;
  
  // Buscar monstruo hostil cercano
  const enemy = bot.nearestEntity(entity => 
    entity.type === 'hostile' && 
    entity.position.distanceTo(bot.entity.position) < 10
  );
  
  if (enemy) {
    bot.pvp.attack(enemy);
  } else {
    // Seguir al jugador principal
    bot.pathfinder.setGoal(new goals.GoalFollow(player, 2));
  }
});`,
    TS: `// Código generado por la IA de DarkSkull (TypeScript)
import { Bot } from 'mineflayer';
import { Entity } from 'prismarine-entity';

bot.on('physicsTick', (): void => {
  const player = bot.players['Tairlag']?.entity;
  if (!player) return;
  
  // Buscar monstruo hostil cercano
  const enemy = bot.nearestEntity((entity: Entity) => 
    entity.type === 'hostile' && 
    entity.position.distanceTo(bot.entity.position) < 10
  );
  
  if (enemy) {
    bot.pvp.attack(enemy);
  } else {
    // Seguir al jugador principal
    bot.pathfinder.setGoal(new goals.GoalFollow(player, 2));
  }
});`
  },
  {
    label: '🎣 Pesca inteligente encantada',
    prompt: 'Ponte a pescar indefinidamente. Si pescas un libro encantado, avísalo en el chat público.',
    JS: `// Código generado por la IA de DarkSkull (JavaScript)
let fishing = false;

async function startFishing() {
  if (fishing) return;
  try {
    fishing = true;
    await bot.fish();
    fishing = false;
    startFishing(); // Pesca en bucle
  } catch (err) {
    fishing = false;
    setTimeout(startFishing, 2000);
  }
}

bot.on('playerCollect', (collector, item) => {
  if (collector.username === bot.username) {
    const itemStack = item.getItem();
    if (itemStack && itemStack.name === 'enchanted_book') {
      bot.chat('¡Libro encantado pescado con éxito! Guardando en inventario.');
    }
  }
});`,
    TS: `// Código generado por la IA de DarkSkull (TypeScript)
import { Bot } from 'mineflayer';
import { Entity } from 'prismarine-entity';

let fishing = false;

async function startFishing(bot: Bot): Promise<void> {
  if (fishing) return;
  try {
    fishing = true;
    await bot.fish();
    fishing = false;
    startFishing(bot); // Pesca en bucle
  } catch (err) {
    fishing = false;
    setTimeout(() => startFishing(bot), 2000);
  }
}

bot.on('playerCollect', (collector: Entity, item: Entity): void => {
  if (collector.username === bot.username) {
    const itemStack = item.getItem();
    if (itemStack && itemStack.name === 'enchanted_book') {
      bot.chat('¡Libro encantado pescado con éxito! Guardando en inventario.');
    }
  }
});`
  }
];

export default function AIShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lang, setLang] = useState('JS'); // 'JS' or 'TS'
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedCode('');
    
    let currentText = '';
    const fullText = AI_PROMPTS[selectedIdx][lang];
    let charIndex = 0;
    
    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        setDisplayedCode(currentText);
        charIndex += 5; // Faster typing speed
      } else {
        setDisplayedCode(fullText);
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [selectedIdx, lang]);

  return (
    <section className="section" id="ai" style={{ background: 'rgba(7, 3, 14, 0.4)' }}>
      <div className="container ai-section">
        <div className="ai-text">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(189, 0, 255, 0.1)', border: '1px solid rgba(189, 0, 255, 0.2)', padding: '0.35rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
            <Sparkles size={14} />
            Generación con Inteligencia Artificial
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Genera tu código en <span className="text-gradient-cyan-purple">JS & TypeScript</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            ¿No sabes programar? No te preocupes. Escribe qué quieres que haga tu bot en español y nuestro motor de IA integrado generará la lógica exacta en **JavaScript** o **TypeScript** listo para ejecutar.
          </p>

          <div className="ai-prompts-selector">
            <h5 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Selecciona una orden de ejemplo:
            </h5>
            {AI_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                className={`ai-prompt-btn ${selectedIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ai-terminal">
          <div className="ai-terminal-header">
            <div className="ai-terminal-status">
              <span className="ai-terminal-status-dot"></span>
              <span>IA Engine: DeepSeek-Coder + TypeScript Autogen</span>
            </div>
            
            {/* JS / TS Switcher */}
            <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '2px' }}>
              {['JS', 'TS'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' : 'transparent',
                    color: lang === l ? '#050208' : 'var(--color-text-secondary)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          
          <div className="ai-terminal-body">
            <div className="ai-prompt-box">
              <div className="ai-prompt-label">Orden del Usuario:</div>
              <div className="ai-prompt-text">
                "{AI_PROMPTS[selectedIdx].prompt}"
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Código Mineflayer {lang === 'JS' ? 'JavaScript' : 'TypeScript'} Generado:
                </span>
              </div>
              <div className="ai-code-box">
                {displayedCode}
                {isTyping && <span className="ai-cursor"></span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
