import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const SCRIPTS = {
  JS: {
    'macro_miner.js': {
      code: `// macro_miner.js - JavaScript
const targetBlock = 'iron_ore';

bot.chat('Iniciando escaneo de menas...');
const blocks = bot.findBlocks({
  matching: block => block.name === targetBlock,
  maxDistance: 16,
  count: 5
});

if (blocks.length > 0) {
  bot.chat(\`Menas de hierro encontradas: \${blocks.length}\`);
  for (const pos of blocks) {
    await bot.dig(bot.blockAt(pos));
  }
  bot.chat('Ciclo completado.');
} else {
  bot.chat('No se encontraron menas.');
}`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Iniciando escaneo de menas...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Iniciando escaneo de menas...', type: 'info' },
        { bot: 'Skull_Bot1', text: 'Menas de hierro encontradas: 3', type: 'success' },
        { bot: 'Skull_Bot2', text: 'Menas de hierro encontradas: 2', type: 'success' },
        { bot: 'Skull_Bot1', text: 'Minando bloque de hierro en (120, 64, -200)...', type: 'text' },
        { bot: 'Skull_Bot2', text: 'Minando bloque de hierro en (125, 63, -198)...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Ciclo completado. Guardando 3 menas de hierro.', type: 'success' },
        { bot: 'Skull_Bot2', text: 'Ciclo completado. Guardando 2 menas de hierro.', type: 'success' }
      ]
    },
    'inventory_dump.js': {
      code: `// inventory_dump.js - JavaScript
const chestBlock = bot.findBlock({
  matching: block => block.name === 'chest',
  maxDistance: 8
});

if (chestBlock) {
  const chest = await bot.openChest(chestBlock);
  for (const item of bot.inventory.items()) {
    await chest.deposit(item.type, null, item.count);
  }
  chest.close();
  bot.chat('Inventario vaciado con éxito.');
} else {
  bot.chat('No encontré ningún cofre cerca.');
}`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Buscando cofre en rango (8 bloques)...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Buscando cofre en rango (8 bloques)...', type: 'info' },
        { bot: 'Skull_Bot1', text: 'Cofre encontrado en (118, 64, -204). Abriendo...', type: 'text' },
        { bot: 'Skull_Bot2', text: 'No encontré ningún cofre cerca.', type: 'error' },
        { bot: 'Skull_Bot1', text: 'Depositando trigo x64...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Depositando semillas de trigo x32...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Inventario vaciado con éxito.', type: 'success' }
      ]
    },
    'sentry_alert.js': {
      code: `// sentry_alert.js - JavaScript
bot.on('entityGone', (entity) => {
  if (entity.type === 'mob') {
    bot.chat(\`Hostil eliminado: \${entity.displayName}\`);
  }
});

bot.on('attacked', (target) => {
  bot.chat('¡Me están atacando! Solicitando ayuda...');
  squad.broadcastPosition(bot.entity.position);
});`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Modo Centinela activado. Rango 20 bloques.', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Modo Centinela activado. Rango 20 bloques.', type: 'info' },
        { bot: 'Skull_Bot1', text: '¡Me están atacando! Solicitando ayuda...', type: 'error' },
        { bot: 'Skull_Bot2', text: 'Recibido auxilio de Skull_Bot1. Moviéndome a (112, 64, -190)...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Atacando Zombie con Espada de Hierro.', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Hostil eliminado: Zombie', type: 'success' }
      ]
    }
  },
  TS: {
    'macro_miner.ts': {
      code: `// macro_miner.ts - TypeScript
import { Bot } from 'mineflayer';
import { Vec3 } from 'vec3';

const targetBlock: string = 'iron_ore';

bot.chat('Iniciando escaneo de menas...');
const blocks: Vec3[] = bot.findBlocks({
  matching: block => block.name === targetBlock,
  maxDistance: 16,
  count: 5
});

if (blocks.length > 0) {
  bot.chat(\`Menas de hierro encontradas: \${blocks.length}\`);
  for (const pos of blocks) {
    await bot.dig(bot.blockAt(pos)!);
  }
  bot.chat('Ciclo completado.');
} else {
  bot.chat('No se encontraron menas.');
}`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Iniciando escaneo de menas...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Iniciando escaneo de menas...', type: 'info' },
        { bot: 'Skull_Bot1', text: 'Menas de hierro encontradas: 3', type: 'success' },
        { bot: 'Skull_Bot2', text: 'Menas de hierro encontradas: 2', type: 'success' },
        { bot: 'Skull_Bot1', text: 'Minando bloque de hierro en (120, 64, -200)...', type: 'text' },
        { bot: 'Skull_Bot2', text: 'Minando bloque de hierro en (125, 63, -198)...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Ciclo completado. Guardando 3 menas de hierro.', type: 'success' },
        { bot: 'Skull_Bot2', text: 'Ciclo completado. Guardando 2 menas de hierro.', type: 'success' }
      ]
    },
    'inventory_dump.ts': {
      code: `// inventory_dump.ts - TypeScript
import { Bot } from 'mineflayer';
import { Chest } from 'mineflayer-chest';

const chestBlock = bot.findBlock({
  matching: block => block.name === 'chest',
  maxDistance: 8
});

if (chestBlock) {
  const chest: Chest = await bot.openChest(chestBlock);
  for (const item of bot.inventory.items()) {
    await chest.deposit(item.type, null, item.count);
  }
  chest.close();
  bot.chat('Inventario vaciado con éxito.');
} else {
  bot.chat('No encontré ningún cofre cerca.');
}`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Buscando cofre en rango (8 bloques)...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Buscando cofre en rango (8 bloques)...', type: 'info' },
        { bot: 'Skull_Bot1', text: 'Cofre encontrado en (118, 64, -204). Abriendo...', type: 'text' },
        { bot: 'Skull_Bot2', text: 'No encontré ningún cofre cerca.', type: 'error' },
        { bot: 'Skull_Bot1', text: 'Depositando trigo x64...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Depositando semillas de trigo x32...', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Inventario vaciado con éxito.', type: 'success' }
      ]
    },
    'sentry_alert.ts': {
      code: `// sentry_alert.ts - TypeScript
import { Bot } from 'mineflayer';
import { Entity } from 'prismarine-entity';

bot.on('entityGone', (entity: Entity): void => {
  if (entity.type === 'mob') {
    bot.chat(\`Hostil eliminado: \${entity.displayName}\`);
  }
});

bot.on('attacked', (target: Entity): void => {
  bot.chat('¡Me están atacando! Solicitando ayuda...');
  squad.broadcastPosition(bot.entity.position);
});`,
      logs: [
        { bot: 'Skull_Bot1', text: 'Modo Centinela activado. Rango 20 bloques.', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Modo Centinela activado. Rango 20 bloques.', type: 'info' },
        { bot: 'Skull_Bot1', text: '¡Me están atacando! Solicitando ayuda...', type: 'error' },
        { bot: 'Skull_Bot2', text: 'Recibido auxilio de Skull_Bot1. Moviéndome a (112, 64, -190)...', type: 'info' },
        { bot: 'Skull_Bot2', text: 'Atacando Zombie con Espada de Hierro.', type: 'text' },
        { bot: 'Skull_Bot1', text: 'Hostil eliminado: Zombie', type: 'success' }
      ]
    }
  }
};

export default function CoderConsole() {
  const [lang, setLang] = useState('JS'); // 'JS' or 'TS'
  const [activeTab, setActiveTab] = useState('macro_miner.js');
  const [currentLogs, setCurrentLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  // Sync activeTab when switching languages
  useEffect(() => {
    const filenameNoExt = activeTab.split('.')[0];
    const newExt = lang === 'JS' ? 'js' : 'ts';
    setActiveTab(`${filenameNoExt}.${newExt}`);
    setCurrentLogs([]);
  }, [lang]);

  const runScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentLogs([]);

    const scriptLogs = SCRIPTS[lang][activeTab].logs;
    let logIndex = 0;

    const interval = setInterval(() => {
      if (logIndex < scriptLogs.length) {
        setCurrentLogs((prev) => [...prev, scriptLogs[logIndex]]);
        logIndex++;
      } else {
        setIsRunning(false);
        clearInterval(interval);
      }
    }, 600);
  };

  return (
    <section className="section" id="console">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5.5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Consola Coder <span className="text-gradient-cyan-purple">JS & TS</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Ejecuta código JavaScript o TypeScript personalizado en tus bots simultáneamente y observa la salida de consola en tiempo real.
          </p>
        </div>

        <div className="console-wrapper">
          {/* Code Editor Mockup */}
          <div className="console-editor">
            <div className="console-editor-header">
              <div className="console-tabs">
                {Object.keys(SCRIPTS[lang]).map((fileName) => (
                  <button
                    key={fileName}
                    className={`console-tab ${activeTab === fileName ? 'active' : ''}`}
                    onClick={() => {
                      if (!isRunning) {
                        setActiveTab(fileName);
                        setCurrentLogs([]);
                      }
                    }}
                  >
                    {fileName}
                  </button>
                ))}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* JS / TS Switcher */}
                <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--color-border)', borderRadius: '6px', padding: '2px' }}>
                  {['JS', 'TS'].map((l) => (
                    <button
                      key={l}
                      onClick={() => !isRunning && setLang(l)}
                      style={{
                        background: lang === l ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' : 'transparent',
                        color: lang === l ? '#050208' : 'var(--color-text-secondary)',
                        border: 'none',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        cursor: isRunning ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease',
                        opacity: isRunning ? 0.5 : 1
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <button
                  className="console-btn-run"
                  onClick={runScript}
                  disabled={isRunning}
                  style={{ opacity: isRunning ? 0.6 : 1 }}
                >
                  <Play size={12} fill="currentColor" />
                  {isRunning ? 'Ejecutando...' : 'Ejecutar'}
                </button>
              </div>
            </div>

            <div className="console-textarea-mock">
              {SCRIPTS[lang][activeTab]?.code}
            </div>
          </div>

          {/* Code Output Terminal Mockup */}
          <div className="console-output">
            <div className="console-output-header">
              <span className="console-output-title">Logs de Salida ({lang === 'JS' ? 'JS Engine' : 'TS Compiler'})</span>
            </div>

            <div className="console-output-terminal">
              {currentLogs.length === 0 ? (
                <div style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  Haz clic en "Ejecutar" para ver la salida de los bots en consola...
                </div>
              ) : (
                currentLogs.map((log, idx) => {
                  let logColor = '#cbd5e1';
                  if (log.type === 'success') logColor = 'var(--color-accent)';
                  if (log.type === 'error') logColor = '#ff5f56';
                  if (log.type === 'info') logColor = 'var(--color-primary)';

                  return (
                    <div key={idx} className="console-log-row">
                      <span className="console-log-bot">[{log.bot}]</span>
                      <span className="console-log-text" style={{ color: logColor }}>
                        {log.text}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
