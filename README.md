<p align="center">
  <img src="https://github.com/user-attachments/assets/97d2ba6d-dc3f-48ef-9c1a-f124454dbf91" width="900px">
</p>

<h1 align="center"> ☕ Análise vendas de café (máquina automática)</h1>
<h3 align="center">✅ ETL • ✅ Engenharia de features • ✅ Análise exploratória (EDA) • ✅ Visualizações e estatística descritiva • ✅ Curva ABC • ✅ Análise de sazonalidade • ✅ Dashboard Interativo</h3>
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

## 📁 Estrutura do repositório

Os arquivos estão organizados por finalidade: dados originais, análise em Python, dados tratados, imagens de apoio e código do dashboard.

| Arquivo ou pasta | Descrição |
|---|---|
| [`index_1.csv`](index_1.csv) | **Base original:** dados brutos das transações de venda, utilizados como ponto de partida para a análise. |
| [`coffee_vending.ipynb`](coffee_vending.ipynb) | **Notebook Python:** etapas de carregamento, validação, tratamento, criação de variáveis, análise exploratória, indicadores e visualizações. |
| [`Dados_tratados/`](Dados_tratados/) | **Dados tratados:** versões exportadas após o processamento, disponíveis em CSV e Excel. |
| [`Dados_tratados/vendas_cafe_tratado.csv`](Dados_tratados/vendas_cafe_tratado.csv) | Base tratada em formato CSV, adequada para leitura por Python e outras ferramentas de análise. |
| [`Dados_tratados/vendas_cafe_tratado.xlsx`](Dados_tratados/vendas_cafe_tratado.xlsx) | Base tratada em formato Excel, para consulta e exploração em planilhas. |
| [`Imagens/`](Imagens/) | **Gráficos exportados:** imagens de apoio produzidas para documentar os resultados da análise. |
| [`cafe-dashboard/`](cafe-dashboard/) | **Dashboard interativo:** código-fonte da aplicação desenvolvida com React, Vite e Tailwind CSS. |
| [`.github/workflows/deploy-dashboard.yml`](.github/workflows/deploy-dashboard.yml) | **Publicação automatizada:** workflow do GitHub Actions responsável pelo processo de implantação do dashboard no GitHub Pages. |

### 🔎 Como navegar pelo projeto

1. Comece pelo notebook `coffee_vending.ipynb` para acompanhar as etapas da análise.
2. Consulte `Dados_tratados/` para acessar os arquivos resultantes do tratamento.
3. Abra o [dashboard publicado](https://leticiapaesano.github.io/coffee-vending-etl-eda-analytics/) para explorar os indicadores e gráficos de forma interativa.
4. Consulte `Imagens/` para visualizar os gráficos exportados que documentam os resultados.

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
| Vendas em datas especiais cadastradas | 48 (1.3%)               |


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
| `feriado_nome`  | Nome da data especial cadastrada para referência de calendário |

# 🎯 Objetivos do Projeto

- Identificar o mix de produtos mais rentável (Curva ABC).
- Detectar padrões de sazonalidade: horários, dias da semana e meses de maior fluxo.
- Analisar KPIs financeiros: receita total, ticket médio e frequência de vendas.
- Comparar descritivamente as vendas em datas especiais cadastradas, sem presumir causalidade.

---

# 🧠 Interpretação Geral e Insights

**📂 Carregamento e Validação**

Os 89 nulos estão na coluna `card` e correspondem exatamente às vendas em dinheiro (que não têm cartão associado).

A base tem 381 dias com ao menos uma venda, em um intervalo de 388 dias corridos.

### ➕ Engenharia de Features

**Variáveis derivadas:** período do dia, nome do mês, semana do ano, dia da semana e identificação de datas especiais cadastradas.

**Variáveis utilizadas na análise:** método de pagamento e demais características disponíveis na base original.

**Benefício:** permite segmentar as vendas e investigar padrões temporais e de comportamento.

### 💳 Pagamentos

**Cartão** representa 97,6% das transações e 97,2% da receita.
O ticket médio em dinheiro (35,80) é superior ao do cartão (31,65), mas a comparação não é equivalente: todas as vendas em dinheiro ocorrem entre 01/03/2024 e 03/06/2024, período de preços mais altos, enquanto o cartão cobre toda a série. Na mesma janela e para o mesmo produto, a diferença é de cerca de 3% a 4% (ex.: Latte a 40,00 em dinheiro contra 38,70 no cartão).

**📌 Recomendação:** avaliar as taxas cobradas pela adquirente e negociar melhores condições, considerando o peso dos pagamentos com cartão na receita. A decisão deve levar em conta os custos operacionais e a margem efetiva de cada meio de pagamento.

### 📅 Datas especiais cadastradas

- Foram registradas 48 transações em datas classificadas no dicionário, equivalentes a 1,3% do volume total.
- Nos 8 dias classificados como especiais, foram observadas em média 6,0 vendas e cerca de 199 UAH de receita por dia com vendas; nos demais 373 dias com vendas, as médias foram de 9,6 transações e cerca de 305 UAH por dia.
- O ticket médio das transações classificadas como data especial foi de 33,09 UAH, contra 31,73 UAH nos demais dias.

Esses valores são uma comparação descritiva da amostra. A classificação serve como referência de calendário: não confirma que todas as datas sejam feriados oficiais, nem demonstra que elas tenham causado diferenças nas vendas. A lista de datas é uma seleção cadastrada para análise, não um calendário oficial completo.

### 🛒 Mix de Produtos

**Classe A** concentra aproximadamente 74,7% da receita total.

**Classe C** reúne Espresso e Cortado, com menor participação individual na receita.

**📌 Recomendação:** avaliar o desempenho dos produtos Classe C considerando também custos, demanda, margem de contribuição e função no portfólio antes de decidir por alterações de preço ou retirada de itens.

### 📆 Variação mensal

Outubro/2024 e fevereiro/2025 são os meses de maior receita. A série mistura preço e volume (os preços unitários variaram ao longo do período), e com apenas um ciclo anual não é possível separar sazonalidade de tendência de crescimento. Os dados de vendas isoladamente também não permitem atribuir o aumento ao clima.

**📌 Recomendação:** planejar o abastecimento e a manutenção com base no histórico de demanda, monitorando também as condições climáticas e os resultados de cada período.

### 📅 Sazonalidade Semanal

Maior consumo: terça-feira (≈ 339 UAH por dia operado)
Menor consumo: domingo (≈ 257 UAH por dia operado)

### 🕒 Sazonalidade por Horário

Período da tarde representa 40,7% da receita.

**📌 Recomendação:** reforçar abastecimento e atenção operacional nos horários de maior volume (10h–11h e 16h, conforme o Top 10). A janela de 17h–19h aparece no ranking, mas não é o pico; uma campanha ali deve ser testada antes de ser adotada.

<details>
<summary><strong>💳 ANÁLISE POR MÉTODO DE PAGAMENTO</strong></summary>
  
<br>

| Método       | Transações | % Volume | Receita (UAH) | % Receita | Ticket Médio |
| ------------ | ---------- | -------- | ------------- | --------- | ------------ |
| **Cartão**   | 3.547      | 97.6%    | 112,245.58    | 97.2%     | 31.65        |
| **Dinheiro** | 89         | 2.4%     | 3,186.00      | 2.8%      | 35.80        |

</details>
<img width="414" height="234" alt="Metodos de Pagamento" src="https://github.com/user-attachments/assets/9020442a-29a9-43a5-b08e-8820867a54b0" />

<details>
<summary><strong>📅 VENDAS EM DATAS ESPECIAIS CADASTRADAS</strong></summary>
<br>

| Dia            | Transações | Receita    | Ticket Médio | % Receita |
| -------------- | ---------- | ---------- | ------------ | --------- |
| **Sem data especial cadastrada** | 3.588 | 113,843.48 | 31.73 | 98.62% |
| **Data especial cadastrada** | 48 | 1,588.10 | 33.09 | 1.38% |

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
<img width="1243" height="419" alt="Mix de Produtos (Analise ABC)" src="https://github.com/user-attachments/assets/1ae25cab-c032-4a02-9c46-86a2a87bb31f" />

<details>
<summary><strong>📆 ANÁLISE TEMPORAL — Performance Mensal</strong></summary>
<br>

| Mês/Ano        |   Receita | Vendas | Ticket | % Total | Crescimento     |
| -------------- | --------: | -----: | -----: | ------: | --------------: |
| Março/2024     |  7,050.20 |    206 |  34.22 |    6.1% |         —       |
| Abril/2024     |  6,720.56 |    196 |  34.29 |    5.8% |       -4.7%     |
| Maio/2024      |  9,063.42 |    267 |  33.95 |    7.9% |    **+34.9%**   |
| Junho/2024     |  7,758.76 |    227 |  34.18 |    6.7% |      -14.4%     |
| Julho/2024     |  6,915.94 |    237 |  29.18 |    6.0% |      -10.9%     |
| Agosto/2024    |  7,613.84 |    272 |  27.99 |    6.6% |      +10.1%     |
| Setembro/2024  |  9,988.64 |    344 |  29.04 |    8.7% |      +31.2%     |
| Outubro/2024   | 13,891.16 |    426 |  32.61 |   12.0% |  **+39.1%**     |
| Novembro/2024  |  8,590.54 |    259 |  33.17 |    7.4% |      -38.2%     |
| Dezembro/2024  |  8,237.74 |    259 |  31.81 |    7.1% |       -4.1%     |
| Janeiro/2025   |  6,398.86 |    201 |  31.84 |    5.5% |      -22.3%     |
| Fevereiro/2025 | 13,215.48 |    423 |  31.24 |   11.4% |    **+106.5%**  |
| Março/2025 (P) |  9,986.44 |    319 |  31.31 |    8.7% |      N/A        |

</details>
<img width="606" height="264" alt="Performance Mensal" src="https://github.com/user-attachments/assets/3e15fc67-2fb0-4413-b5f2-77a7a8de082c" />

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
<img width="577" height="277" alt="Performance Semanal" src="https://github.com/user-attachments/assets/fe20fd25-c243-4c25-8379-5d27a06dc2b0" />

<details>
<summary><strong>🕒 SAZONALIDADE — Períodos do Dia</strong></summary>
<br>

| Período | Vendas | % Vendas |   Receita | % Receita | Ticket |
| ------- | -----: | -------: | --------: | --------: | -----: |
| Manhã (06h–11h) | 1,221 | 33.6% | 37,380.20 | 32.4% | 30.61 |
| Tarde (12h–17h) | 1,476 | 40.6% | 46,978.80 | 40.7% | 31.83 |
| Noite (18h–23h) | 939 | 25.8% | 31,072.58 | 26.9% | 33.09 |

</details>
<img width="754" height="360" alt="Vendas por periodo" src="https://github.com/user-attachments/assets/be5fdf82-3e1a-4c8f-9ccf-8284c1b5322a" />

<img width="658" height="332" alt="Receita por Periodo" src="https://github.com/user-attachments/assets/efd0fbe3-ca47-4962-9bdd-d0c77b45e2d3" />

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
<img width="1251" height="451" alt="Distribuicao Horaria de Vendas" src="https://github.com/user-attachments/assets/3fd3c541-06c6-4e04-8bc9-4fee27b7460d" />

---

## 📌 Conclusão Geral do Projeto

A base registra 3.636 transações e receita acumulada de 115.431,58 UAH no período analisado, com ticket médio de 31,75 UAH. As análises temporais permitem identificar variações no volume e na receita ao longo dos meses, dias da semana e horários. Esses padrões oferecem subsídios para decisões operacionais, mas a avaliação da rentabilidade e da estabilidade financeira exige informações adicionais sobre custos, despesas e margens.

Os principais padrões observados no período são:

- **Variação mensal:** picos em outubro/2024 e fevereiro/2025. Com apenas um ciclo anual observado, não é possível separar sazonalidade de tendência de crescimento, nem atribuir o efeito ao clima.
- **Ciclo semanal:** terça-feira é o melhor dia de vendas; domingo apresenta o menor movimento.  
- **Horários de maior fluxo:** a tarde lidera o desempenho, respondendo por **40,7% da receita**, indicando o período de maior demanda.

O **mix de produtos** mostra concentração relevante: quatro bebidas classificadas como **Classe A** representam **74,7% da receita**, exigindo priorização de estoque, manutenção e estratégias promocionais voltadas a esses itens. Produtos da **Classe C**, com destaque para o Espresso, possuem menor participação na receita e devem ser avaliados com dados de custo e margem antes de qualquer decisão de preço ou retirada.

O comportamento de pagamento é concentrado no cartão, responsável por 97,6% das transações e 97,2% da receita. O dinheiro só aparece até 03/06/2024, e a diferença de ticket em relação ao cartão decorre do período de preços mais altos, não de comportamento do cliente. Recomenda-se avaliar as taxas da adquirente e os custos associados a cada forma de pagamento para identificar possíveis oportunidades de redução de despesas.

As datas especiais cadastradas representam 1,38% da receita total observada. Nos dias classificados, houve 48 transações, com ticket médio de 33,09 UAH. Essa comparação é descritiva e não comprova que as datas tenham causado diferenças nas vendas.

De forma geral, o negócio demonstra padrões semanais e horários bem definidos e um conjunto claro de oportunidades de otimização: priorização de itens Classe A, avaliação dos produtos Classe C com dados de custo e margem, negociação das taxas da adquirente, alocação de atenção operacional nos horários de maior fluxo e acompanhamento da demanda mensal para planejar o abastecimento. Trata-se de um ambiente com oportunidades de otimização operacional e comercial identificadas a partir dos padrões de vendas.
