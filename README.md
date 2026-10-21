<p align="center">
  <img src="https://github.com/user-attachments/assets/97d2ba6d-dc3f-48ef-9c1a-f124454dbf91" width="900px">
</p>

<h1 align="center"> ☕ Análise vendas de café (máquina automática)
<h3 align="center">✅ ETL • ✅ Engenharia de features • ✅ Análise exploratória (EDA) • ✅ Visualizações e estatística descritiva • ✅ Curva ABC • ✅ Índices de sazonalidade • ✅ Dashboard Interativo</h3>
    <p align="center">
      
  <!-- Badges Tecnologias -->
  <img src="https://img.shields.io/badge/Python-3.12-blue?logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-8A2BE2?logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-Framework-38bdf8?logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Kaggle-Dataset-20beff?logo=kaggle&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Online-success?logo=github&logoColor=white">
</p>

---

Fonte do dataset:  [Yaroslav Isaienkov — Kaggle](https://www.kaggle.com/code/ihelon/coffee-sales-eda)

---

## 🌐 Acesse o Dashboard Interativo (React)
Dashboard criado em **React + Vite + Tailwind + Recharts**, hospedado no GitHub Pages.

👉 **https://leticiapaesano.github.io/coffee-vending-etl-eda-analytics/**

---

# Contextualização do Projeto

Este projeto consiste na análise completa das vendas de uma máquina automática de café, abrangendo:

**Período analisado:** 01/03/2024 → 23/03/2025     

**Local:** Ucrânia (UTC+2)   

**Moeda:** Hryvnia Ucraniana (UAH)  

**Dias com operação:** 381 (conforme validação da base)

**Total de vendas:** 3.636 transações

## 📈 INDICADORES-CHAVE DE PERFORMANCE (KPIs)

| Indicador                         | Valor                   |
|-----------------------------------|-------------------------|
| Período analisado                 | 2024-03-01 → 2025-03-23 |
| Dias com operação                 | 381                     |
| Transações totais                 | 3,636                   |
| Receita total                     | 115,431.58 UAH          |
| Ticket médio                      | 31.75 UAH               |
| Ticket mínimo                     | 18.12 UAH               |
| Ticket máximo                     | 40.00 UAH               |
| Desvio padrão                     | 4.92 UAH                |
| Vendas média/dia                  | 9.54                    |
| Receita média/dia com operação    | 302.97 UAH              |
| Cartão                            | 3,547 (97.6%)           |
| Dinheiro                          | 89 (2.4%)               |
| Vendas em feriados                | 48 (1.3%)               |


## 📘 Dicionário de Dados (após tratamento do dataset)

| Coluna          | Descrição                            |
|-----------------|--------------------------------------|
| `date`          | Data da transação                    |
| `datetime`      | Data e hora completa                 |
| `hour`          | Horário (formato HH:MM)              |
| `valor_hryvnia` | Valor da venda (UAH)                 |
| `coffee_name`   | Nome do produto                      |
| `tipo_pagamento`| Cartão ou dinheiro                   |
| `dia_semana`    | Nome do dia da semana                |
| `mes_nome`      | Nome do mês da transação             |
| `ano`           | Ano da transação                     |
| `semana_ano`    | Número da semana no ano              |
| `dia_mes`       | Dia do mês                           |
| `periodo_dia`   | Período do dia (manhã, tarde, noite) |
| `feriado_nome`  | Nome do feriado, quando aplicável    |

# 🎯 Objetivos do Projeto

- Identificar o mix de produtos mais rentável (Curva ABC).
- Detectar padrões de sazonalidade: horários, dias da semana e meses de maior fluxo.
- Analisar KPIs financeiros: receita total, ticket médio e frequência de vendas.
- Avaliar o impacto de feriados no volume de vendas.

---

# 🧠 Interpretação Geral e Insights

**📂 Carregamento e Validação**

Base íntegra e sem duplicidades.

Apenas 89 nulos irrelevantes para análises financeiras.

Intervalo de 381 dias permite análises temporais consistentes.

### ➕ Engenharia de Features

**Variáveis derivadas:** período do dia, nome do mês, semana do ano, dia da semana e identificação de feriados.

**Variáveis utilizadas na análise:** método de pagamento e demais características disponíveis na base original.

**Benefício:** permite segmentar as vendas e investigar padrões temporais e de comportamento.

### 💳 Pagamentos

**Cartão** representa 97,6% das transações e 97,2% da receita.
O ticket médio em dinheiro é aproximadamente 13% superior ao ticket médio no cartão.

**📌 Recomendação:** avaliar as taxas cobradas pela adquirente e negociar melhores condições, considerando o peso dos pagamentos com cartão na receita. A decisão deve levar em conta os custos operacionais e a margem efetiva de cada meio de pagamento.

### 🎉 Feriados

- Foram registradas 48 transações em feriados, equivalentes a 1,3% do volume total.
- O ticket médio nos feriados foi superior ao observado nos dias normais.

**📌 Recomendação:** antes de priorizar campanhas em feriados, comparar o volume médio diário de vendas em feriados e dias normais, considerando o número de dias observados e possíveis diferenças de operação.

### 🛒 Mix de Produtos

**Classe A** concentra aproximadamente 74,7% da receita total.

**Classe C** reúne Espresso e Cortado, com menor participação individual na receita.

**📌 Recomendação:** avaliar o desempenho dos produtos Classe C considerando também custos, demanda, margem de contribuição e função no portfólio antes de decidir por alterações de preço ou retirada de itens.

### 📆 Sazonalidade Mensal

Alta concentração entre setembro e outubro — clima mais frio.

**📌 Recomendação:** reforçar abastecimento e manutenção preventiva em meses críticos.

### 📅 Sazonalidade Semanal

Maior consumo: terça-feira
Menor consumo: domingo

### 🕒 Sazonalidade por Horário

Período da tarde representa 40,7% da receita.

**📌 Recomendação:** campanhas “happy hour” (17h–19h).

<details>
<summary><strong>💳 ANÁLISE POR MÉTODO DE PAGAMENTO</strong></summary>
  
<br>

| Método       | Transações | % Volume | Receita (UAH) | % Receita | Ticket Médio |
| ------------ | ---------- | -------- | ------------- | --------- | ------------ |
| **Cartão**   | 3.547      | 97.6%    | 112,245.58    | 97.2%     | 31.65        |
| **Dinheiro** | 89         | 2.4%     | 3,186.00      | 2.8%      | 35.80        |

</details>

<details>
<summary><strong>📅 IMPACTO DOS FERIADOS NAS VENDAS</strong></summary>
<br>

| Dia            | Transações | Receita    | Ticket Médio | % Receita |
| -------------- | ---------- | ---------- | ------------ | --------- |
| **Dia normal** | 3.588      | 113,843.48 | 31.73        | 98.62%    |
| **Feriado**    | 48         | 1,588.10   | 33.09        | 1.38%     |

</details>

<details>
<summary><strong>📦 ANÁLISE ABC — MIX DE PRODUTOS</strong></summary>
<br>

| Produto             | Receita Total | Qtde | Preço Médio | % Receita | % Acumulado | ABC |
| ------------------- | ------------: | ---: | ----------: | --------: | ----------: | :-: |
| Latte               |     27,866.30 |  782 |       35.63 |    24.14% |      24.14% |  A  |
| Americano with Milk |     25,269.12 |  824 |       30.67 |    21.89% |      46.03% |  A  |
| Cappuccino          |     18,034.14 |  501 |       36.00 |    15.62% |      61.65% |  A  |
| Americano           |     15,062.26 |  578 |       26.06 |    13.05% |      74.70% |  A  |
| Hot Chocolate       |     10,172.46 |  282 |       36.07 |     8.81% |      83.51% |  B  |
| Cocoa               |      8,678.16 |  243 |       35.71 |     7.52% |      91.03% |  B  |
| Cortado             |      7,534.86 |  292 |       25.80 |     6.53% |      97.56% |  C  |
| Espresso            |      2,814.28 |  134 |       21.00 |     2.44% |     100.00% |  C  |

</details>

<details>
<summary><strong>📆 ANÁLISE TEMPORAL — Performance Mensal</strong></summary>
<br>

| Mês/Ano        |   Receita | Vendas | Ticket | % Total | Crescimento                            |
| -------------- | --------: | -----: | -----: | ------: | -------------------------------------: |
| Março/2024     |  7,050.20 |    206 |  34.22 |    6.1% |         —                              |
| Abril/2024     |  6,720.56 |    196 |  34.29 |    5.8% |       -4.7%                            |
| Maio/2024      |  9,063.42 |    267 |  33.95 |    7.8% |    **+34.9%**                          |
| Junho/2024     |  7,758.76 |    227 |  34.18 |    6.7% |      -14.4%                            |
| Julho/2024     |  6,915.94 |    237 |  29.18 |    6.0% |      -10.9%                            |
| Agosto/2024    |  7,613.84 |    272 |  27.99 |    6.6% |      +10.1%                            |
| Setembro/2024  |  9,988.64 |    344 |  29.04 |    8.7% |      +31.2%                            |
| Outubro/2024   | 13,891.16 |    426 |  32.61 |   12.0% |  **+39.1%**                            |
| Novembro/2024  |  8,590.54 |    259 |  33.17 |    7.4% |      -38.2%                            |
| Dezembro/2024  |  8,237.74 |    259 |  31.81 |    7.1% |       -4.1%                            |
| Janeiro/2025   |  6,398.86 |    201 |  31.84 |    5.5% |      -22.3%                            |
| Fevereiro/2025 | 13,215.48 |    423 |  31.24 |   11.4% |    **+106.5%**                         |
| Março/2025 (P) |  9,986.44 |    319 |  31.31 |    8.7% |      -24.4% Não comparável diretamente |

</details>

<img width="2113" height="1436" alt="download" src="https://github.com/user-attachments/assets/dbe75fb1-c66c-4c7f-a920-6fcd9a7942e3" />


<details>
<summary><strong>📅 SAZONALIDADE — Dia da Semana</strong></summary>
<br>

| Dia     | Vendas |   Receita | Ticket |   % Total |
| ------- | -----: | --------: | -----: | --------: |
| Segunda |    561 | 17,925.10 |  31.95 |     15.5% |
| Terça   |    585 | 18,637.38 |  31.86 | **16.1%** |
| Quarta  |    510 | 16,093.46 |  31.56 |     13.9% |
| Quinta  |    520 | 16,477.40 |  31.69 |     14.3% |
| Sexta   |    544 | 17,257.66 |  31.72 |     15.0% |
| Sábado  |    482 | 15,182.52 |  31.50 |     13.2% |
| Domingo |    434 | 13,858.06 |  31.93 | **12.0%** |

</details>

<details>
<summary><strong>🕒 SAZONALIDADE — Períodos do Dia</strong></summary>
<br>

| Período | Vendas | % Vendas |   Receita | % Receita | Ticket |
| ------- | -----: | -------: | --------: | --------: | -----: |
| Manhã   |  1,216 |    33.4% | 37,230.80 |     32.3% |  30.62 |
| Tarde   |  1,476 |    40.6% | 46,978.80 |     40.7% |  31.83 |
| Noite   |    944 |    26.0% | 31,221.98 |     27.0% |  33.07 |

</details>

<details>
<summary><strong>🔥 Top 10 Horários de Pico</strong></summary>
<br>

| Horário | Vendas | % Total |   Receita | Ticket |
| ------- | -----: | ------: | --------: | -----: |
| 10h     |    349 |    9.6% | 10,994.52 |  31.50 |
| 11h     |    294 |    8.1% |  8,849.10 |  30.10 |
| 16h     |    283 |    7.8% |  9,221.60 |  32.59 |
| 12h     |    249 |    6.8% |  7,668.62 |  30.80 |
| 09h     |    247 |    6.8% |  7,429.28 |  30.08 |
| 15h     |    245 |    6.7% |  7,789.02 |  31.79 |
| 17h     |    244 |    6.7% |  7,925.00 |  32.48 |
| 19h     |    235 |    6.5% |  7,966.96 |  33.90 |
| 08h     |    235 |    6.5% |  7,017.88 |  29.86 |
| 14h     |    228 |    6.3% |  7,265.80 |  31.87 |

</details>

---

## 📌 Conclusão Geral do Projeto

A base registra 3.636 transações e receita acumulada de 115.431,58 UAH no período analisado, com ticket médio de 31,75 UAH. As análises temporais permitem identificar variações no volume e na receita ao longo dos meses, dias da semana e horários. Esses padrões oferecem subsídios para decisões operacionais, mas a avaliação da rentabilidade e da estabilidade financeira exige informações adicionais sobre custos, despesas e margens.

Os padrões de consumo são definidos e claramente identificáveis:

- **Sazonalidade mensal:** picos concentrados entre setembro e outubro, reforçando a influência direta do clima no aumento da demanda.  
- **Ciclo semanal:** terça-feira é o melhor dia de vendas; domingo apresenta o menor movimento.  
- **Horários de maior fluxo:** a tarde lidera o desempenho, respondendo por **40,7% da receita**, indicando comportamento dominante e previsível do consumidor.

O **mix de produtos** mostra concentração relevante: quatro bebidas classificadas como **Classe A** representam **74,7% da receita**, exigindo priorização de estoque, manutenção e estratégias promocionais voltadas a esses itens. Produtos da **Classe C**, com destaque para o Espresso, possuem impacto financeiro mínimo e devem passar por revisão de preço ou possível retirada do portfólio.

O comportamento de pagamento é praticamente homogêneo: **97,6% das transações são realizadas via cartão**. Apesar de o ticket médio em dinheiro ser maior, o volume é insuficiente para gerar impacto real. Essa concentração impõe uma dependência elevada do MDR, o que afeta diretamente a margem. Há oportunidade concreta para renegociação com a adquirente ou ajustes operacionais que reduzam esse custo.

O impacto dos **feriados** é insignificante, representando apenas **1,38% da receita anual**, mostrando que ações promocionais nessas datas não são prioridade. Em contrapartida, os **horários de pico (10h, 11h, 12h e 16h)** apresentam padrão consistente e previsível, criando espaço para intervenções táticas como ofertas programadas ou reforço de abastecimento.

De forma geral, o negócio demonstra operação estável, sazonalidade bem definida e um conjunto claro de oportunidades de otimização: priorização de itens Classe A, revisão estratégica dos produtos Classe C, gestão mais eficiente do MDR, alocação de atenção operacional nos horários de maior fluxo e preparação prévia para os meses mais fortes. Trata-se de um ambiente com previsibilidade elevada, oportunidades de otimização operacional e comercial identificadas a partir dos padrões de vendas.

---

## 📁 Estrutura do Repositório

* **coffee-vending-etl-eda-analytics/**
    * **Dados tratados/**
        * `vendas_cafe_tratado.csv` (dados tratados)
        * `vendas_cafe_tratado.xlsx` (dados tratados)
    * **cafe-dashboard/**
        * **public/**
        * **src/**
        * `.gitignore`
        * `README.md` (instruções do dashboard)
        * `eslint.config.js`
        * `index.html`
        * `package-lock.json`
        * `package.json`
        * `postcss.config.js`
        * `tailwind.config.js`
        * `vite.config.js`
    * **Dashboard/**
    * `Imagem.png` (gráfico)
    * `README.md` (README principal)
    * `coffee-vending-etl-eda-analytics.ipynb` (Notebook Python)
    * `index_1.csv` (dados não tratados)






