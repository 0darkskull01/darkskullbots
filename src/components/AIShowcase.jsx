import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Zap } from 'lucide-react';

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
    await bot.pathfinder.goto(
      new goals.GoalLookAtBlock(tree.position, bot.world)
    );
    await bot.dig(tree);
    bot.chat('Madera recolectada.');
    
    if (bot.inventory.items().length >= 27) {
      await depositInChest();
    } else {
      setTimeout(farmWood, 1000);
    }
  }
}

farmWood();`,
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
    await bot.pathfinder.goto(
      new goals.GoalLookAtBlock(tree.position, bot.world)
    );
    await bot.dig(tree);
    bot.chat('Madera recolectada.');
    
    if (bot.inventory.items().length >= 27) {
      await depositInChest(bot);
    } else {
      setTimeout(() => farmWood(bot), 1000);
    }
  }
}`,
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
});`,
  },
  {
    label: '🎣 Pesca con detección de encantados',
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
    const stack = item.getItem();
    if (stack?.name === 'enchanted_book') {
      bot.chat('¡Libro encantado pescado! 📚');
    }
  }
});

startFishing();`,
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
    startFishing(bot);
  } catch (err) {
    fishing = false;
    setTimeout(() => startFishing(bot), 2000);
  }
}

bot.on('playerCollect', (collector: Entity, item: Entity): void => {
  if (collector.username === bot.username) {
    const stack = item.getItem();
    if (stack?.name === 'enchanted_book') {
      bot.chat('¡Libro encantado pescado! 📚');
    }
  }
});`,
  },
];

// ── Very basic JS syntax tokenizer ──────────────────────────────────────────
const KEYWORDS = new Set([
  'const','let','var','function','async','await','return','if','else',
  'new','try','catch','import','from','export','class','extends',
  'typeof','instanceof','for','while','of','in','true','false','null',
  'undefined','void','this','super','static','get','set','type',
  'interface','Promise','require','setTimeout',
]);
const TYPES = new Set(['Bot','Entity','void','string','number','boolean','Promise']);

function tokenizeCode(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    // Comment
    if (code[i] === '/' && code[i + 1] === '/') {
      let j = i;
      while (j < code.length && code[j] !== '\n') j++;
      tokens.push({ type: 'comment', text: code.slice(i, j) });
      i = j;
      continue;
    }
    // String single
    if (code[i] === "'" || code[i] === '`') {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote) {
        if (code[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', text: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }
    // String double
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && code[j] !== '"') {
        if (code[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', text: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }
    // Number
    if (/\d/.test(code[i])) {
      let j = i;
      while (j < code.length && /[\d.]/.test(code[j])) j++;
      tokens.push({ type: 'number', text: code.slice(i, j) });
      i = j;
      continue;
    }
    // Word (keyword / type / identifier)
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[\w$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let type = 'plain';
      if (KEYWORDS.has(word)) type = 'keyword';
      else if (TYPES.has(word)) type = 'type';
      // function name if followed by (
      else if (/[A-Z]/.test(word[0])) type = 'type';
      tokens.push({ type, text: word });
      i = j;
      continue;
    }
    // Default
    tokens.push({ type: 'plain', text: code[i] });
    i++;
  }
  return tokens;
}

function SyntaxHighlight({ code }) {
  const tokens = tokenizeCode(code);
  return (
    <>
      {tokens.map((tok, idx) => (
        <span key={idx} className={`syn-${tok.type}`}>
          {tok.text}
        </span>
      ))}
    </>
  );
}

export default function AIShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lang, setLang] = useState('JS');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayedCode('');
    setTokenCount(0);

    const fullText = AI_PROMPTS[selectedIdx][lang];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        const chunk = fullText.slice(0, charIndex + 6);
        setDisplayedCode(chunk);
        setTokenCount(Math.floor(charIndex / 4));
        charIndex += 6;
      } else {
        setDisplayedCode(fullText);
        setTokenCount(Math.floor(fullText.length / 4));
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [selectedIdx, lang]);

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  return (
    <section className="section" id="ai" style={{ background: 'rgba(7, 3, 14, 0.4)' }}>
      <div className="container ai-section">
        {/* Text Side */}
        <div className="ai-text">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(176, 38, 255, 0.1)',
              border: '1px solid rgba(176, 38, 255, 0.25)',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--color-secondary)',
              marginBottom: '1.5rem',
            }}
          >
            <Sparkles size={13} />
            Generación con Inteligencia Artificial
          </div>

          <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
            Genera código en{' '}
            <span className="text-gradient-cyan-purple">JS & TypeScript</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            ¿No sabes programar? No te preocupes. Escribe qué quieres que haga tu bot en español y nuestro motor de IA integrado generará la lógica exacta lista para ejecutar.
          </p>

          <div className="ai-prompts-selector">
            <h5
              style={{
                textTransform: 'uppercase',
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.06em',
                marginBottom: '0.65rem',
              }}
            >
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

        {/* Terminal Side */}
        <div className="ai-terminal">
          <div className="ai-terminal-header">
            <div className="ai-terminal-status">
              <span className="ai-terminal-status-dot" />
              <span>IA Engine: DeepSeek-Coder + Autogen</span>
            </div>

            {/* JS / TS Switcher */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                padding: '2px',
                gap: '2px',
              }}
            >
              {['JS', 'TS'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background:
                      lang === l
                        ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
                        : 'transparent',
                    color: lang === l ? '#050208' : 'var(--color-text-secondary)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="ai-terminal-body">
            {/* Prompt box */}
            <div className="ai-prompt-box">
              <div className="ai-prompt-label">Orden del Usuario:</div>
              <div className="ai-prompt-text">"{AI_PROMPTS[selectedIdx].prompt}"</div>
            </div>

            {/* Code output */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  Código Mineflayer {lang === 'JS' ? 'JavaScript' : 'TypeScript'} Generado:
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: isTyping ? 'var(--color-accent)' : 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {isTyping && <Zap size={10} />}
                  {tokenCount} tokens
                </span>
              </div>
              <div className="ai-code-box">
                <SyntaxHighlight code={displayedCode} />
                {isTyping && <span className="ai-cursor" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
