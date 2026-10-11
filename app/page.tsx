export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      {/* Encabezado */}
      <header className="flex justify-between items-center border-b border-slate-700 pb-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-cyan-400 tracking-wider">
            SMARTTOOL ERP
          </h1>
          <p className="text-sm text-slate-400">
            Sistema de Gestión e Inventario - Machining Just In Time
          </p>
        </div>
        <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
          ● Sistema en línea
        </span>
      </header>

      {/* Tarjetas de Indicadores Rapidos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Herramientas Registradas</h3>
          <p className="text-3xl font-bold mt-2 text-cyan-300">0</p>
          <span className="text-xs text-slate-500">Esperando primer registro</span>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Órdenes de Maquinado</h3>
          <p className="text-3xl font-bold mt-2 text-emerald-400">0</p>
          <span className="text-xs text-slate-500">Sin órdenes activas</span>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Alertas de Reorden</h3>
          <p className="text-3xl font-bold mt-2 text-amber-400">0</p>
          <span className="text-xs text-slate-500">Stock en niveles óptimos</span>
        </div>
      </section>

      {/* Panel de Inicio */}
      <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h2 className="text-xl font-semibold mb-2 text-slate-200">
          Panel de Control Inicial
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Bienvenido al núcleo de **SmartTool ERP**. La estructura base está lista para comenzar a construir el módulo de control de herramientas, inventario JIT e indicadores de producción.
        </p>
      </section>
    </main>
  );
}