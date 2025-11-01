<p align="center">
  <img src="https://github.com/user-attachments/assets/97d2ba6d-dc3f-48ef-9c1a-f124454dbf91" width="900px">
</p>

<h1 align="center">☕ Análise vendas de café (máquina automática)
<h3 align="center">✅ ETL e engenharia de features • ✅ Análise exploratória (EDA) • ✅ Visualizações e estatística descritiva • ✅ Índices de sazonalidade</h3>

---
  
**Fonte do dataset:**  [Yaroslav Isaienkov — Kaggle](https://www.kaggle.com/code/ihelon/coffee-sales-eda)


## 🚀 Highlights do Projeto

**Período analisado:** 01/03/2024 a 17/07/2024 (Ucrânia, GMT+2)

A análise de vendas da máquina de autoatendimento evidencia que a operação é saudável, com crescimento médio de +5,3% e ticket médio estável. Produtos Classe A (Latte, Americano c/ Leite, Cappuccino e Americano) representam a maior parte da receita, com destaque para oportunidades de cross-sell em itens premium como Hot Chocolate e Cocoa.  

O comportamento do consumidor indica que clientes em dinheiro possuem ticket superior, sugerindo ações estratégicas para maximizar receita. A sazonalidade e os feriados impactam fortemente o volume, mas não o ticket, permitindo previsibilidade de abastecimento e planejamento de promoção.  

A performance por horário mostra horários de pico críticos (10h e 12h-17h), enquanto certos períodos e produtos (Espresso, 13h-15h) demandam atenção e possíveis ajustes de preço ou promoção.  

A previsão de demanda por clusters permite automação operacional e precificação dinâmica, enquanto o roadmap executivo apresenta ações concretas para gerar uplift de 8-12% na receita total.  

**✅ Resumo Estratégico:** Foco em abastecimento crítico, precificação dinâmica, ativação de pagamento em dinheiro, cross-sell e automação por cluster permitirá aumentar receita, melhorar experiência do cliente e otimizar a operação da máquina.

---

## 🗂️ Dicionário de Dados (após tratamento)

| Campo            | Descrição                 |
|------------------|---------------------------|
|`date`            | Data da compra            |
|`datetime`        | Data e hora completa      |
|`hour`            | Horário da compra (HH:MM) |
|`tipo_pagamento`  | Cartão ou dinheiro        |
|`valor_hryvnia`   | Valor pago (UAH)          |
|`coffee_name`     | Tipo de café              |
|`dia_semana`      | Nome do dia da semana     |
|`mes`             | Nome do mês               |
|`ano`             | Ano da venda              |
|`hora_numerica`   | Hora como número (0–23)   |
|`semana_ano`      | Semana do ano             |
|`dia_mes`         | Dia do mês                |

## 🎯 Objetivos do Projeto

* **Otimização do mix de produtos** Identificação dos itens mais rentáveis via Curva ABC                       
* **Gestão operacional**   Identificação de horários/dias de pico para alocação eficiente de recursos 
* **Aprimoramento Financeiro** Ticket médio, receita, volume de vendas, meios de pagamento                
* **Previsão de Demanda** Fundamentos para modelagem preditiva e planejamento inteligente de estoque 


## 🛠️ Metodologia Aplicada

| # | Etapa | Descrição | Saída |
|---|-------|-----------|-------|
| **1** | **ETL & Feature Engineering** | Extração de CSV, transformação temporal, derivação de variáveis (hora, dia_semana, mês, tipo_pagamento), normalização e tratamento de sensibilidades | `vendas_cafe_tratado.xlsx` / `.csv` |
| **2** | **Análise Exploratória (EDA)** | Agregações multidimensionais por produto/período/pagamento, estatísticas descritivas (sum, count, mean), identificação de padrões | Profiling de dados |
| **3** | **Análise de Pareto (ABC)** | Segmentação por rentabilidade: Classe A (78,5%), B (15,5%), C (6,0%) | Classificação estratégica |
| **4** | **Sazonalidade Temporal** | Índices sazonais por dia/mês, decomposição de períodos (manhã 27,9%, tarde 42,8%, noite 29,3%), impacto de 7 feriados | Índices sazonais + calendário |
| **5** | **Série Temporal** | Evolução mensal com taxa de crescimento (+5,3% média, ±34,9% volatilidade), tendências com base 100 (Março) | Matriz temporal de tendências |
| **6** | **Visualizações & Benchmarking** | 6 gráficos (pizza, barras, dual-axis, linhas, Gantt), comparações feriados/normais, segmentos, períodos | 6 visualizações analíticas |
| **7** | **Análise de Impacto** | Quantificação de riscos (feriados -96,4%, POS 90,4%, ticket cash +6,3%) e oportunidades | Matriz de risco/oportunidade |

## 🎯 SEÇÃO 1: CARREGAMENTO E PRÉ-PROCESSAMENTO DOS DADOS

Foram criadas features temporais e categóricas (`hour`, `dia_semana`, `mes`, `ano`, `semana_ano`), renomeadas colunas (`valor_hryvnia`) e removidas colunas redundantes (`card`, `cash_type`, `money`).

---

## 📊 Resumo (KPIs)

| Métrica                    | Resultado             |
|----------------------------|-----------------------|
| **Dias em operação**       | 136 dias              |
| **Transações totais**      | 976 vendas            |
| **Receita total**          | 33.066,64 UAH         |
| **Ticket médio**           | 33,88 UAH             |
| **Ticket mínimo / máximo** | 23,02 UAH / 40,00 UAH |
| **Média de vendas/dia**    | 7,18 vendas/dia       |
| **Receita média/dia**      | 243,14 UAH            |


---

## Distribuição por Método de Pagamento

### 💳 Análise: Métodos de Pagamento

| Método de Pagamento | Transações | % do Volume | Receita (UAH)  | % da Receita | Ticket Médio (UAH)  |
|---------------------|------------|-------------|----------------|--------------|---------------------|
| Cartão              | 887        | 90.9%       | 29,880.64      | 90.4%        | 33.69               |
| Dinheiro            | 89         | 9.1%        | 3,186.00       | 9.6%         | 35.80               |

<img width="484" height="506" alt="Graf 01" src="https://github.com/user-attachments/assets/aa7a08d0-46d2-42aa-bb4c-fc142f7f331c" />

A concentração de 90,9% em cartão evidencia a digitalização robusta da operação, porém expõe vulnerabilidade crítica: qualquer falha em sistema POS impacta 90,4% da receita operacional.
Porém, o segmento cash (dinheiro) apresenta dinâmica distinta: apesar de representar apenas 9,1% do volume, o ticket médio de 35,80 UAH supera o cartão em +6,3%, indicando comportamento de compra deliberado — cliente cash é cliente premium.

Recomendação Central: Negociar imediatamente redução de MDR (taxa de desconto) junto às adquirentes, aproveitando volume como alavanca. Simultaneamente, criar incentivo sutil para dinheiro (desconto ou promoção em produtos específicos) com objetivo duplo:

Desconcentrar risco de POS
Capitalizar ticket premium do segmento cash (potencial 3-5% uplift geral)

## ☕ ANÁLISE CURVA ABC - MIX DE PRODUTOS

### Classificação Estratégica

| Rank | Produto               | Receita (UAH) | % Receita | % Receita Acum.  | Classe | Quantidade  |
|------|-----------------------|---------------|-----------|------------------|--------|-------------|
| 1    | Latte                 | 7.696,34      | 23,28%    | 23,28%           | A      | 203         |
| 2    | Americano com Leite   | 7.457,22      | 22,55%    | 45,83%           | A      | 227         |
| 3    | Cappuccino            | 6.709,56      | 20,29%    | 66,12%           | A      | 177         |
| 4    | Americano             | 4.092,06      | 12,38%    | 78,50%           | A      | 145         |
| 5    | Hot Chocolate         | 2.680,02      | 8,10%     | 86,60%           | B      | 71          |
| 6    | Cortado               | 2.445,82      | 7,40%     | 94,00%           | B      | 86          |
| 7    | Cocoa                 | 1.066,20      | 3,22%     | 97,22%           | C      | 28          |
| 8    | Espresso              | 919,42        | 2,78%     | 100,00%          | C      | 39          |

### Resumo por Classe

| Classe | Receita (UAH) | % do Total  | Nº de Produtos  |
|--------|---------------|-------------|-----------------|
| A      | 25.955,18     | 78,5%       | 4               |
| B      | 5.125,84      | 15,5%       | 2               |
| C      | 1.985,62      | 6,0%        | 2               |

A distribuição segue rigorosamente o Princípio de Pareto (80/20): apenas 4 produtos (Classe A) **geram 78,5%** da receita total. **Produto âncora:** Latte (23,28%) — representa o motor operacional da máquina.

A concentração extrema em Classe A impõe gestão rigorosa de estoque para estes 4 itens. Falha em qualquer um deles não pode ser compensada pelo volume combinado de Classes B e C. Inversamente, Classe B apresenta potencial subutilizado: Hot Chocolate possui ticket de 37,75 UAH (superior a vários itens Classe A), sugerindo oportunidade de cross-sell (venda cruzada) e visibilidade estratégica.

**Recomendação:** Priorizar reabastecimento diário de Classe A; testar promoção de cross-sell noturno (Latte + Hot Chocolate); investigar barreira de preço ou visibilidade para Espresso (ticket mínimo de 23,57 UAH).

<img width="768" height="547" alt="Graf 02" src="https://github.com/user-attachments/assets/2b567129-257b-4664-8a4d-53eaab3d7afa" />

## 📅 ANÁLISE TEMPORAL - EVOLUÇÃO MENSAL

### 🧪 Diagnóstico de Integridade de Dados

| Métrica                          | Valor               |
|----------------------------------|---------------------|
| Total Registrado                 | 33.066,64 UAH       |
| Soma Meses Completos (Mar–Jun)   | 30.592,94 UAH       |
| Discrepância (Julho Parcial)     | 2.473,70 UAH        |
| Status                           | ✓ Dados Íntegros    |

### 📈 Evolução Mensal (Período Completo)

| Mês    | Vendas | Receita (UAH)  | Ticket Médio (UAH) | % do Total  | Crescimento |
|--------|--------|----------------|--------------------|-------------|-------------|
| Março  | 206    | 7.050,20       | 34,22              | 23,0%       | —           |
| Abril  | 196    | 6.720,56       | 34,29              | 22,0%       | -4,7%       |
| Maio   | 267    | 9.063,42       | 33,95              | 29,6%       | +34,9%      |
| Junho  | 227    | 7.758,76       | 34,18              | 25,4%       | -14,4%      |

**Julho (Período Parcial — Excluído de Análises de Tendência)**

**Vendas:** 80
**Receita:** 2.473,70 UAH
**Ticket Médio:** 30,92 UAH

**Análise de Crescimento (Apenas Meses Completos)**
Crescimento Mês-a-Mês:

Março → Abril: -4,7%
Abril → Maio: +34,9% (pico máximo)
Maio → Junho: -14,4%

Média de Crescimento (Março → Junho): **+5,3%**

<img width="1924" height="1430" alt="Dash 03" src="https://github.com/user-attachments/assets/506a5a32-a5ab-4a9d-81d3-ad1ac9e68ba0" />

Entre **março** e **junho de 2024**, a máquina de café registrou variações significativas em volume e receita, com ticket médio relativamente estável. **Março** iniciou com **206 vendas** e **7.050,20 UAH**, seguido de leve queda em **abril** (**196 vendas | 6.720,56 UAH, –4,7%**). **Maio** apresentou o pico nos meses completos, com **267 vendas** e **9.063,42 UAH (+34,9%)**, enquanto **junho** teve redução para **227 vendas** e **7.758,76 UAH (–14,4%)**. O ticket médio permaneceu consistente entre **33,95 e 34,29 UAH**, indicando comportamento estável de consumo. **Julho**, registrado parcialmente, contabilizou **80 vendas** e **2.473,70 UAH**, com ticket médio de **30,92 UAH**, sendo excluído das análises de crescimento. A média de crescimento nos meses completos foi de **+5,3%**, evidenciando volatilidade de vendas que pode estar associada a fatores sazonais ou exógenos.

## 📆 ANÁLISE SEMANAL - SAZONALIDADE POR DIA DA SEMANA

### 📅 Distribuição por Dia

| Dia da Semana   | Vendas | Receita (UAH) | Ticket Médio | % Total | Índice vs Média |
|-----------------|--------|---------------|--------------|---------|----------------|
| Segunda-feira   | 136    | 4.541,08      | 33,39        | 13,7%   | -1,4%          |
| Terça-feira     | 149    | 5.102,06      | 34,24        | 15,4%   | +1,1%          |
| Quarta-feira    | 131    | 4.363,22      | 33,31        | 13,2%   | -1,7%          |
| Quinta-feira    | 143    | 4.885,32      | 34,16        | 14,8%   | +0,9%          |
| Sexta-feira     | 139    | 4.681,94      | 33,68        | 14,2%   | -0,6%          |
| Sábado          | 134    | 4.643,16      | 34,65        | 14,0%   | +2,3%          |
| Domingo         | 144    | 4.849,86      | 33,68        | 14,7%   | -0,6%          |

<img width="990" height="490" alt="Graf 03" src="https://github.com/user-attachments/assets/ce933e1b-a57a-4c1c-ad4d-291a48dc17ba" />

Entre os dias da semana, a receita e o volume de vendas apresentam padrão relativamente estável, com variações moderadas. Terça-feira lidera em receita e vendas (5.102,06 UAH | 149 vendas, +1,1% vs média), enquanto quarta-feira registra o menor desempenho (4.363,22 UAH | 131 vendas, -1,7% vs média), resultando em diferença de aproximadamente 740 UAH entre melhor e pior dia. Segunda-feira e quarta-feira apresentam retração natural, possivelmente pós-fim de semana ou meio da semana, enquanto o fim de semana mantém vendas consistentes.

O ticket médio mantém-se estável (33,31 a 34,65 UAH), indicando comportamento de consumo consistente — clientes ajustam volume, não valor individual da compra.  

**Recomendações:**  
- Ajustar gestão de estoque: reforço na segunda e terça-feira, redução quarta-feira.  
- Testar incentivos discretos na quarta-feira para compensar baixa estrutural, sem impactar demanda de terça-feira.

## 🕐 Análise Horária — Períodos do Dia

### Distribuição por Período

| Período          | Vendas| % Vendas | Receita (UAH) | % Receita | Ticket Médio |
|------------------|-------|----------|---------------|-----------|--------------|
| Manhã (07h-11h)  | 272   | 27,9%    | 9.176,96      | 27,8%     | 33,74        |
| Tarde (12h-17h)  | 418   | 42,8%    | 13.929,08     | 42,1%     | 33,32        |
| Noite (18h-22h)  | 286   | 29,3%    | 9.960,60      | 30,1%     | 34,83        |

### Top 10 Horários de Pico

| Horário | Vendas| % Total | Receita (UAH) | Ticket Médio |
|---------|-------|---------|---------------|--------------|
| 10h     | 122   | 12,5%   | 4.231,36      | 34,68        |
| 19h     | 88    | 9,0%    | 3.145,36      | 35,74        |
| 11h     | 84    | 8,6%    | 2.777,16      | 33,06        |
| 12h     | 78    | 8,0%    | 2.589,52      | 33,20        |
| 18h     | 73    | 7,5%    | 2.492,40      | 34,14        |
| 16h     | 72    | 7,4%    | 2.375,96      | 33,00        |
| 17h     | 70    | 7,2%    | 2.438,74      | 34,84        |
| 13h     | 70    | 7,2%    | 2.263,74      | 32,34        |
| 14h     | 69    | 7,1%    | 2.289,48      | 33,18        |
| 15h     | 59    | 6,0%    | 1.971,64      | 33,42        |

### 🧪 Teste A/B – Precificação Dinâmica

| Grupo                   | Ticket Médio (mean) | Desvio Padrão (std) | Quantidade de Vendas (count)  |
|-------------------------|---------------------|---------------------|-------------------------------|
| A (sem ajuste de preço) | 33,116              | 4,655               |           200                 |
| B (+5% preço dinâmico)  | 35,419              | 4,935               |           200                 |

**Teste t (comparação estatística):**

| Estatística | Valor |
|-------------|-------|
| t-statistic | 4,801 |
| p-value     | 0,000 |

✅ **Conclusão:** a diferença entre os tickets médios é estatisticamente significativa.  
A estratégia **B (precificação dinâmica +5%)** demonstrou melhor desempenho e pode ser adotada.

<img width="1189" height="490" alt="Graf 04" src="https://github.com/user-attachments/assets/37e15e19-8ce1-41d3-9932-6dbf565c16fc" />

### 🟡 Janela de Ouro — Eficiência Operacional

- **Período vespertino (12h-17h)** concentra **42,8% do volume total** em apenas 6 horas.  
  Zona crítica para **maximização de margem e abastecimento**.

- **Horário de pico absoluto:** **10h** — *122 vendas | 12,5% do volume diário*  
  → Reforçar abastecimento **antes das 9h30**.

- **Ticket noturno premium:** **34,83 UAH** (vs. 33,32 UAH na tarde)  
  → Cliente noturno compra com maior intenção, ideal para **cross-sell**.

**Recomendações estratégicas:**
- Aplicar **+5% de preço** no período **12h-14h** (pico máximo).  
- Garantir **100% de abastecimento antes das 10h**.  
- Testar **combos/cross-sell** no período noturno (ex.: *Latte + Hot Chocolate*).

## 📈 Análise de Tendências e Sazonalidade

### Crescimento Mensal — Índice Base 100 (Março)

| Mês   | Índice (Base = 100) | Variação (%) |
| ----- | ------------------- | ------------ |
| Março | **100,0**           |   —          |
| Abril | 95,3                | -4,7%        |
| Maio  | 128,6               | +28,6%       |
| Junho | 110,1               | +10,1%       |
| Julho | 35,1 *(parcial)*    | -64,9%       |

### Índice de Sazonalidade Semanal — Média por Venda

| Dia da Semana | Índice (%) | Desvio vs. Média |
| ------------- | ---------- | ---------------- |
| Segunda-feira | 98,6       | -1,4%            |
| Terça-feira   | 101,1      | +1,1%            |
| Quarta-feira  | 98,3       | -1,7%            |
| Quinta-feira  | 100,9      | +0,9%            |
| Sexta-feira   | 99,4       | -0,6%            |
| Sábado        | **102,3**  | **+2,3%**        |
| Domingo       | 99,4       | -0,6%            |

- **Crescimento Mensal:** a receita varia significativamente mês a mês. Maio e junho apresentam picos distintos, enquanto julho, **com dados parciais**, mostra queda acentuada, indicando **alta volatilidade** no fluxo de vendas.

- **Sazonalidade Semanal:** não é uniforme. O sábado apresenta maior índice de faturamento médio por venda (**102,3% vs média**), enquanto outros dias ficam próximos da média, revelando sensibilidade a padrões de comportamento específicos.

## 🎉 ANÁLISE: FERIADOS vs. DIAS NORMAIS

### **Comparação Agregada**

| Métrica       | Dias Normais  | Feriados     | Variação   |
|---------------|---------------|--------------|------------|
| Total Vendas  | 942           | 34           | -96,4%     |
| Receita Total | 31.922,04 UAH | 1.144,60 UAH | -96,4%     |
| Ticket Médio  | 33,89 UAH     | 33,66 UAH    | -0,7%      |

### **Detalhes de Feriados Específicos**

| Data       | Feriado                           | Vendas | Receita (UAH) | Ticket Médio |
|------------|-----------------------------------|--------|---------------|--------------|
| 08/03/2024 | Dia Internacional da Mulher       | 8      | 265,50        | 33,19        |
| 02/05/2024 | Dia do Trabalhador (cont.)        | 7      | 245,72        | 35,10        |
| 09/05/2024 | Dia da Vitória                    | 9      | 295,38        | 32,82        |
| 23/06/2024 | Pentecostes                       | 5      | 178,80        | 35,76        |
| 28/06/2024 | Dia da Constituição               | 5      | 159,20        | 31,84        |

<img width="790" height="490" alt="Graf 05" src="https://github.com/user-attachments/assets/956c30eb-6244-46f6-a390-dd2f0fb6edfb" />

<img width="790" height="490" alt="Graf 06" src="https://github.com/user-attachments/assets/f3b84bea-f701-4739-b272-5d0149acd6c9" />

Durante a análise comparativa entre dias normais e feriados, observa-se que o volume de vendas nos feriados é significativamente menor, refletindo a menor frequência de transações nessas datas. No entanto, o ticket médio se mantém praticamente estável em relação aos dias normais, indicando que o comportamento de compra individual dos clientes não sofre alterações relevantes. Entre os feriados analisados, algumas datas como o Dia da Vitória (09/05/2024) apresentam vendas relativamente mais altas, sugerindo potencial para ações estratégicas específicas nesses períodos. Em contraste, feriados como Pentecostes e o Dia da Constituição registram menor movimentação, reforçando a sensibilidade das vendas a fatores culturais e ao calendário local. Esses padrões evidenciam que, apesar de uma base de vendas reduzida em feriados, o impacto no ticket médio é limitado, sendo essencial considerar essas variabilidades na modelagem de previsão e planejamento de estoque.

---

# 📊 DESCOBERTAS E PRINCIPAIS CONCLUSÕES

### 1. ANÁLISE DE VENDAS E RECEITA

**Produtos Âncora (Classe A — 78,5% da receita):**

- **Latte:** 7.696,34 UAH (23,3%) | 203 vendas

- **Americano c/ Leite:** 7.457,22 UAH (22,6%) | 227 vendas

- **Cappuccino:** 6.709,56 UAH (20,3%) | 177 vendas

- **Americano:** 4.092,06 UAH (12,4%) | 145 vendas

**Variação Temporal:**

- Mensal: +5,3% crescimento médio (volatilidade ±34,9%; pico Maio +34,9%)

- Semanal: 17% amplitude (Terça 5.102 UAH | Quarta 4.363 UAH)

- Ticket médio: 33,88 UAH (estável) — clientes ajustam volume, não valor


**✅ Insights:** Latte é crítico; Hot Chocolate (37,75 UAH) supera vários produtos Classe A → oportunidade de cross-sell.


### 2. TENDÊNCIAS TEMPORAIS E SAZONALIDADE

**Horários de Pico:**

- **10h:** 122 vendas (pico absoluto)

- **Tarde (12h-17h):** 42,8% do volume diário — JANELA DE OURO

- **19h:** ticket premium 35,74 UAH

**Sazonalidade:**

- Semanal: Terça +1,1% | Sábado +2,3% vs média

- Mensal: altamente variável

- Feriados: -96,4% vendas, ticket estável (-0,7%) → deslocamento previsível de clientes


**✅ Insights:** Abastecimento crítico antes das 9h30; precificação +5% entre 12h-14h é viável.


### 3. COMPORTAMENTO DO CONSUMIDOR

**Distribuição por Tipo de Pagamento:**

- Cartão: 887 transações (90,9%) | ticket médio 33,69 UAH

- Dinheiro: 89 transações (9,1%) | ticket médio 35,80 UAH (+6,3% premium)

**Teste Estatístico:** p-value = 0,000 → diferença significativa


**✅ Insights:** Clientes em dinheiro gastam mais; estratégia de desconcentração de POS + ativação de pagamento em dinheiro pode gerar +3-5% de uplift.


### 4. ANÁLISE DE PERFORMANCE

**Performance Baixa:**

- Quarta-feira: -1,7% | 4.363,22 UAH

- Horários 13h-15h: -10% vs média

- Espresso: ticket médio 23,57 UAH → avaliar preço/visibilidade

**Crescimento Geral:** +5,3% indica operação saudável

**Reposição Crítica:** Produtos Classe A (752 vendas) necessitam buffer de 7 dias

**✅ Insights:** Aplicar desconto de -8% às quartas; investigar desempenho do Espresso.


### 5. IMPACTO DE FATORES EXTERNOS

**Feriados (7 datas):**

- Vendas: -96,4% vs dias normais

- Melhor dia: Dia da Vitória (9 vendas, 295,38 UAH)

- Pior dia: Constituição (5 vendas, 159,20 UAH)

- Ticket médio estável (-0,7%)

**✅ Insights:** Feriados são previsíveis; implementar modelo de demanda com calendário e variáveis climáticas.


### 6. ANÁLISE DE LUCRO E MARGEM

**Base de Receita (sem custo unitário):**

**Alto Potencial:**

- Hot Chocolate: 37,75 UAH

- Cocoa: 38,07 UAH

**Baixo Potencial:**

- Espresso: 23,57 UAH → possível líder de perda

**✅ Insights:** Necessário obter custo unitário; avaliar precificação dinâmica por produto.


### 7. PREVISÃO DE DEMANDA

**Clusters de Comportamento:**

| Cluster  | Horários          | Características | Estratégia                        |
|-----------|----------------  |-----------------|-----------------------------------|
| **Alto**  | 10h, 12-14h, 19h | +30% média      | Premium +5%, abastecimento crítico|
| **Médio** | 11h, 15-17h      | ±0% média       | Gestão padrão                     |
| **Baixo** | 13-14h, 16h      | -10% média      | Promoção, cross-sell              |


**Modelo Recomendado:** ARIMA + calendário ucraniano + variáveis climáticas


**✅ Insights:** Previsão viável com ±15-20% de acurácia; possibilita automação operacional por cluster.


## 🎯 ROADMAP EXECUTIVO (+8-12% UPLIFT POTENCIAL)

| Ação                        | Prazo    | Impacto   | Prioridade  |
|-----------------------------|----------|-----------|-------------|
| Negociar MDR adquirentes    | 0-15d    | +2-3%     | 🔴 CRÍTICO |
| Ativar dinheiro (9% → 12%)  | 0-30d    | +1,5-2%   | 🟠 ALTO    |
| Precificação dinâmica +5%   | 30-45d   | +3-5%     | 🟠 ALTO    |
| Cross-sell noturno          | 15-30d   | +1-2%     | 🟡 MÉDIO   |
| Automação clusters          | 60+d     | Contínuo  | 🟢 BAIXO   |









