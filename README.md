<p align="center">
  <img src="https://github.com/user-attachments/assets/97d2ba6d-dc3f-48ef-9c1a-f124454dbf91" width="900px">
</p>

<h1 align="center">☕ Análise vendas de café (máquina automática)
<h3 align="center">✅ ETL e engenharia de features • ✅ Análise exploratória (EDA) • ✅ Visualizações e estatística descritiva • ✅ Índices de sazonalidade</h3>

---
  
**Fonte do dataset:**  [Yaroslav Isaienkov — Kaggle](https://www.kaggle.com/code/ihelon/coffee-sales-eda)


## 📌 Contextualização do Projeto

* **Período analisado** 01/03/2024 a 17/07/2024 
* **Localização** Ucrânia (GMT+2)        
* **Moeda** Hryvnia Ucraniana (UAH) 
* **Volume total de vendas** 976 transações  

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


### Resposta Estratégica (Síntese de Achados)

**Oportunidade Crítica: Concentração de Receita**
O faturamento 78,5% está concentrado em apenas 4 produtos (Classe A).

* **Apesar da Diversidade:** Embora a empresa tenha um portfólio amplo (com muitos itens nas Classes B e C), a falha de qualquer um dos 4 produtos principais (Classe A) não poderá ser compensada pelo volume de vendas dos itens B e C.

**Janelas de Oportunidade Temporal**
O período das 12h às 17h é o motor de vendas, gerando 42,8% do volume total. Esta é a zona de alavancagem primária para a gestão de estoque, estratégias de preço dinâmico e monitoramento de desempenho da máquina, garantindo a máxima conversão no pico de demanda.

---

## 🎯 SEÇÃO 1: CARREGAMENTO E PRÉ-PROCESSAMENTO DOS DADOS

**Status:** ✓ Dataset original carregado: 976 registros  
**Status:** ✓ Dados filtrados (até 17/07/2024): 976 registros

**Metodologia ETL Aplicada:**
- Conversão de colunas de data/hora para formato datetime
- Filtro de período até 17/07/2024
- Validação de integridade de dados

---

## 📊 Resumo Executivo (KPIs)

| Métrica                    | Resultado             |
|----------------------------|-----------------------|
| **Dias em operação**       | 136 dias              |
| **Transações totais**      | 976 vendas            |
| **Receita total**          | **33.066,64 UAH**     |
| **Ticket médio**           | **33,88 UAH**         |
| **Ticket mínimo / máximo** | 23,02 UAH / 40,00 UAH |
| **Média de vendas/dia**    | 7,18                  |
| **Receita média/dia**      | 243,14 UAH            |

### Meios de pagamento

| Método       | % Transações | Receita       | Ticket médio  |
|--------------|--------------|---------------|---------------|
| **Cartão**   | 90,9%        | 29.880,64 UAH | 33,69 UAH     |
| **Dinheiro** | 9,1%         | 3.186,00 UAH  | **35,80 UAH** |

## ☕ Curva ABC — Mix de Produtos

| Classe | % Receita | Nº de Produtos |
|--------|-----------|----------------|
| **A**  | 78,5%     | 4 produtos     |
| **B**  | 15,5%     | 2 produtos     |
| **C**  | 6,0%      | 2 produtos     |

**Produto âncora:** *Latte (7.696,34 UAH)*

## 📅 Análise Temporal — Evolução Mensal

| Mês (2024) | Vendas | Receita (UAH)  | Ticket Médio | Crescimento |
|------------|--------|----------------|--------------|-------------|
| Março      | 206    | 7.050,20       | 34,22        |    —        |
| Abril      | 196    | 6.720,56       | 34,29        | -4,7%       |
| Maio       | 267    | 9.063,42       | 33,95        | **+34,9%**  |
| Junho      | 227    | 7.758,76       | 34,18        | -14,4%      |
| Julho*     | 80     | 2.473,70       | 30,92        | parcial     |

## ⏱️ Sazonalidade — Dias e Horários

### 💡 Melhor dia:
**Terça-feira — 5.102,06 UAH**

### 🕐 Períodos do dia

| Período             | % Vendas | Receita       | Ticket Médio |
|---------------------|----------|---------------|--------------|
| **Tarde (12h–17h)** | 42,8%    | 13.929,08 UAH | 33,32        |
| Manhã (07h–11h)     | 27,9%    | 9.176,96 UAH  | 33,74        |
| Noite (18h–22h)     | 29,3%    | 9.960,60 UAH  | **34,83**    |

**Pico absoluto:** `10h00 — 122 vendas`

## 💡 Insights Estratégicos

1. **Produto âncora: Latte.**
2. **Classe A representa 78,5% da receita total.**
3. **Agenda operacional eficiente:** reforço de estoque antes das 10h.
4. **Altíssima digitalização:** 90,9% das vendas por cartão → baixo risco de gestão de caixa.

---

# Gráfico 1: Distribuição por Método de Pagamento
