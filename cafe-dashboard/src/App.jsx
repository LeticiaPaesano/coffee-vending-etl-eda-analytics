import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Cell } from 'recharts';

export default function CafeDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // ═══════════════════════════════════════════════════════════════════════════
  // DADOS
  // ═══════════════════════════════════════════════════════════════════════════

  // 1. Análise Horária
  const horariaData = [
    { hora: '06h', vendas: 5, receita: 149.40, ticket: 29.88, periodo: 'Manhã', pico: false },
    { hora: '07h', vendas: 91, receita: 2940.02, ticket: 32.31, periodo: 'Manhã', pico: false },
    { hora: '08h', vendas: 235, receita: 7017.88, ticket: 29.86, periodo: 'Manhã', pico: false },
    { hora: '09h', vendas: 247, receita: 7429.28, ticket: 30.08, periodo: 'Manhã', pico: false },
    { hora: '10h', vendas: 349, receita: 10994.52, ticket: 31.50, periodo: 'Manhã', pico: true },
    { hora: '11h', vendas: 294, receita: 8849.10, ticket: 30.10, periodo: 'Manhã', pico: true },
    { hora: '12h', vendas: 249, receita: 7668.62, ticket: 30.80, periodo: 'Tarde', pico: false },
    { hora: '13h', vendas: 227, receita: 7108.76, ticket: 31.32, periodo: 'Tarde', pico: false },
    { hora: '14h', vendas: 228, receita: 7265.80, ticket: 31.87, periodo: 'Tarde', pico: false },
    { hora: '15h', vendas: 245, receita: 7789.02, ticket: 31.79, periodo: 'Tarde', pico: true },
    { hora: '16h', vendas: 283, receita: 9221.60, ticket: 32.59, periodo: 'Tarde', pico: true },
    { hora: '17h', vendas: 244, receita: 7925.00, ticket: 32.48, periodo: 'Tarde', pico: true },
    { hora: '18h', vendas: 220, receita: 7235.60, ticket: 32.89, periodo: 'Noite', pico: false },
    { hora: '19h', vendas: 235, receita: 7966.96, ticket: 33.90, periodo: 'Noite', pico: true },
    { hora: '20h', vendas: 171, receita: 5656.92, ticket: 30.08, periodo: 'Noite', pico: false },
    { hora: '21h', vendas: 197, receita: 6465.94, ticket: 32.82, periodo: 'Noite', pico: false },
    { hora: '22h', vendas: 116, receita: 3747.16, ticket: 32.30, periodo: 'Noite', pico: false }
  ];

  // 2. Método de Pagamento
  const pagamentoData = [
    { name: 'Cartão', value: 112245.58, transacoes: 3547, percent: 97.2 },
    { name: 'Dinheiro', value: 3186.00, transacoes: 89, percent: 2.8 }
  ];

  // 3. Mix de Produtos (ABC)
  const abcData = [
    { produto: 'Latte', receita: 27866.30, quantidade: 782, classe: 'A', percentual: 24.14 },
    { produto: 'Americano c/ Leite', receita: 25269.12, quantidade: 824, classe: 'A', percentual: 21.89 },
    { produto: 'Cappuccino', receita: 18034.14, quantidade: 501, classe: 'A', percentual: 15.62 },
    { produto: 'Americano', receita: 15062.26, quantidade: 578, classe: 'A', percentual: 13.05 },
    { produto: 'Chocolate Quente', receita: 10172.46, quantidade: 282, classe: 'B', percentual: 8.81 },
    { produto: 'Cacau', receita: 8678.16, quantidade: 243, classe: 'B', percentual: 7.52 },
    { produto: 'Cortado', receita: 7534.86, quantidade: 292, classe: 'C', percentual: 6.53 },
    { produto: 'Espresso', receita: 2814.28, quantidade: 134, classe: 'C', percentual: 2.44 }
  ];

  // 4. Performance Mensal
  const mensalData = [
    { mes: 'Mar/24', receita: 7050.20, vendas: 206 },
    { mes: 'Abr/24', receita: 6720.56, vendas: 196 },
    { mes: 'Mai/24', receita: 9063.42, vendas: 267 },
    { mes: 'Jun/24', receita: 7758.76, vendas: 227 },
    { mes: 'Jul/24', receita: 6915.94, vendas: 237 },
    { mes: 'Ago/24', receita: 7613.84, vendas: 272 },
    { mes: 'Set/24', receita: 9988.64, vendas: 344 },
    { mes: 'Out/24', receita: 13891.16, vendas: 426 },
    { mes: 'Nov/24', receita: 8590.54, vendas: 259 },
    { mes: 'Dez/24', receita: 8237.74, vendas: 259 },
    { mes: 'Jan/25', receita: 6398.86, vendas: 201 },
    { mes: 'Fev/25', receita: 13215.48, vendas: 423 },
    { mes: 'Mar/25', receita: 9986.44, vendas: 319 }
  ];

  // 5. Análise Semanal
  const semanalData = [
    { dia: 'Segunda', vendas: 561, receita: 17925.10, ticket: 31.95 },
    { dia: 'Terça', vendas: 585, receita: 18637.38, ticket: 31.86 },
    { dia: 'Quarta', vendas: 510, receita: 16093.46, ticket: 31.56 },
    { dia: 'Quinta', vendas: 520, receita: 16477.40, ticket: 31.69 },
    { dia: 'Sexta', vendas: 544, receita: 17257.66, ticket: 31.72 },
    { dia: 'Sábado', vendas: 482, receita: 15182.52, ticket: 31.50 },
    { dia: 'Domingo', vendas: 434, receita: 13858.06, ticket: 31.93 }
  ];

  // 6. Períodos do Dia
  const periodosDia = [
    { periodo: 'Manhã (07h-11h)', vendas: 1216, receita: 37230.80, ticket: 30.62, percent: 33.4 },
    { periodo: 'Tarde (12h-17h)', vendas: 1476, receita: 46978.80, ticket: 31.83, percent: 40.6 },
    { periodo: 'Noite (18h-22h)', vendas: 944, receita: 31221.98, ticket: 33.07, percent: 26.0 }
  ];

  // Paleta de cores
  const CORES = {
    preto: '#1A1A1A',
    escuro: '#5D3A1A',
    medio: '#8B5A3C',
    claro: '#C6A27E',
    muitoClaro: '#E8D4C4',
    fundo: '#F5EFE7'
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const label = payload[0].payload.hora || payload[0].payload.dia || payload[0].payload.mes || payload[0].payload.name;
      
      return (
        <div className="bg-white p-2 rounded shadow-lg border-2" style={{ borderColor: CORES.escuro }}>
          <p className="text-sm font-bold" style={{ color: CORES.escuro }}>{label}</p>
          {payload.map((entry, idx) => (
            <p key={idx} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {' '}
              {entry.name === 'receita' || entry.name === 'ticket' || entry.name === 'value' ? (
                entry.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
              ) : (
                entry.value.toLocaleString('pt-BR')
              )}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ backgroundColor: CORES.fundo }} className="min-h-screen p-8">
      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">☕</span>
          <div>
            <h1 className="text-4xl font-bold" style={{ color: CORES.escuro }}>Dashboard Executivo – Café</h1>
            <p style={{ color: CORES.medio }} className="text-sm mt-1">Análise completa de vendas, produtos e performance</p>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {[
          { id: 'overview', label: 'Visão Geral' },
          { id: 'produtos', label: 'Produtos (ABC)' },
          { id: 'temporal', label: 'Temporal' },
          { id: 'pagamento', label: 'Pagamentos' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === tab.id
                ? 'text-white shadow-lg'
                : 'border-2 text-gray-700'
            }`}
            style={{
              backgroundColor: activeTab === tab.id ? CORES.escuro : 'white',
              borderColor: CORES.escuro
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* TAB 1: OVERVIEW */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Gráfico 1: Distribuição Horária */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: CORES.escuro }}>Distribuição Horária de Vendas</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={horariaData}>
                <CartesianGrid strokeDasharray="3 3" stroke={CORES.muitoClaro} />
                <XAxis dataKey="hora" stroke={CORES.medio} />
                <YAxis stroke={CORES.medio} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="vendas" fill={CORES.claro} radius={[8, 8, 0, 0]}>
                  {horariaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.pico ? CORES.escuro : CORES.claro} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 rounded" style={{ backgroundColor: CORES.muitoClaro }}>
              <p className="text-sm" style={{ color: CORES.escuro }}><strong>Picos:</strong> 10h (349), 11h (294), 16h (283) vendas</p>
            </div>
          </div>

          {/* Gráfico 2: Períodos do Dia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Vendas por Período</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={periodosDia}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CORES.muitoClaro} />
                  <XAxis dataKey="periodo" stroke={CORES.medio} />
                  <YAxis stroke={CORES.medio} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="vendas" fill={CORES.medio} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Receita por Período</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={periodosDia}
                    dataKey="receita"
                    nameKey="periodo"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    <Cell fill={CORES.escuro} />
                    <Cell fill={CORES.medio} />
                    <Cell fill={CORES.claro} />
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* TAB 2: PRODUTOS (ABC) */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'produtos' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: CORES.escuro }}>Mix de Produtos (Análise ABC)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={abcData} layout="vertical" margin={{ left: 150 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={CORES.muitoClaro} />
                <XAxis type="number" stroke={CORES.medio} />
                <YAxis dataKey="produto" type="category" stroke={CORES.medio} width={140} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="receita" fill={CORES.medio} radius={[0, 8, 8, 0]}>
                  {abcData.map((entry, index) => {
                    const corClasse = entry.classe === 'A' ? CORES.escuro : entry.classe === 'B' ? CORES.medio : CORES.claro;
                    return <Cell key={`cell-${index}`} fill={corClasse} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {['A', 'B', 'C'].map(classe => {
                const produtos = abcData.filter(p => p.classe === classe);
                const receita = produtos.reduce((sum, p) => sum + p.receita, 0);
                const percentual = (receita / abcData.reduce((sum, p) => sum + p.receita, 0) * 100).toFixed(1);
                return (
                  <div key={classe} className="p-4 rounded-lg text-white text-center" 
                    style={{ backgroundColor: classe === 'A' ? CORES.escuro : classe === 'B' ? CORES.medio : CORES.claro }}>
                    <p className="text-2xl font-bold">Classe {classe}</p>
                    <p className="text-sm mt-2">{produtos.length} produtos | {percentual}% receita</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* TAB 3: ANÁLISE TEMPORAL */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'temporal' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mensal */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Performance Mensal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mensalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CORES.muitoClaro} />
                  <XAxis dataKey="mes" stroke={CORES.medio} />
                  <YAxis stroke={CORES.medio} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="receita" stroke={CORES.escuro} strokeWidth={3} dot={{ fill: CORES.escuro }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Semanal */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Performance Semanal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={semanalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CORES.muitoClaro} />
                  <XAxis dataKey="dia" stroke={CORES.medio} />
                  <YAxis stroke={CORES.medio} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="receita" fill={CORES.medio} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 rounded" style={{ backgroundColor: CORES.muitoClaro }}>
                <p className="text-sm" style={{ color: CORES.escuro }}><strong>Melhor:</strong> Terça (R$ 18.637) | <strong>Pior:</strong> Domingo (R$ 13.858)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* TAB 4: PAGAMENTOS */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'pagamento' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Métodos de Pagamento</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pagamentoData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    <Cell fill={CORES.escuro} />
                    <Cell fill={CORES.claro} />
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: CORES.escuro }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: CORES.escuro }}>Detalhes por Método</h3>
              <div className="space-y-4">
                {pagamentoData.map((metodo, idx) => (
                  <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: CORES.muitoClaro }}>
                    <p className="font-bold" style={{ color: CORES.escuro }}>{metodo.name}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <p>Transações: <strong>{metodo.transacoes.toLocaleString('uk-UA')}</strong></p>
                      <p>Receita: <strong>{metodo.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
                      <p>Percentual: <strong>{metodo.percent}%</strong></p>
                      <p>Ticket: <strong>{(metodo.value / metodo.transacoes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER - INSIGHTS / RECOMENDAÇÕES */}
          <div className="mt-12 p-6 rounded-lg text-white" style={{ backgroundColor: CORES.escuro }}>
            <h3 className="text-xl font-bold mb-4">Recomendações Estratégicas</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Promoções e upsell:</strong> Foco no período noturno, com ticket médio 8% superior, aproveitando comportamento previsível do consumidor.</li>
              <li>✓ <strong>Priorize produtos Classe A:</strong> Latte, Americano c/ Leite, Cappuccino e Americano geram 74,7% da receita; garantir estoque, manutenção e estratégias promocionais.</li>
              <li>✓ <strong>Revisão de produtos Classe C:</strong> Baixo impacto financeiro (ex.: Espresso); avaliar ajustes de preço, possível exclusão do portfólio ou estratégias de venda casada para aumentar receita.</li>
              <li>✓ <strong>Gestão de pagamentos:</strong> Cartão domina 97,6% das transações; oportunidade de renegociação de MDR e otimização de custos operacionais. Incentivar pagamento em dinheiro oferecendo brindes ou promoções, aproveitando ticket médio mais alto.</li>
              <li>✓ <strong>Planejamento sazonal:</strong> Picos mensais em setembro/outubro; feriados representam apenas 1,38% da receita, permitindo foco em horários e períodos de maior fluxo.</li>
              <li>✓ <strong>Horários de pico operacionais:</strong> 10h, 11h, 12h e 16h; reforço de abastecimento e ofertas programadas podem aumentar receita sem custos proporcionais.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}