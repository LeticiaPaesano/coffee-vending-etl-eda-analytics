<p align="center">
  <img src="https://github.com/user-attachments/assets/97d2ba6d-dc3f-48ef-9c1a-f124454dbf91" width="900px">
</p>

<h1 align="center">☕ ANÁLISE DE VENDAS DE CAFÉ — MÁQUINA DE AUTOATENDIMENTO</h1>

<h3 align="center">ETL • EDA • Curva ABC • Sazonalidade • KPIs Financeiros</h3>

## 📌 Contextualização do Projeto

**Fonte do dataset:**  
[Yaroslav Isaienkov — Kaggle](https://www.kaggle.com/code/ihelon/coffee-sales-eda)


| Item                       |    Informacao           |
|----------------------------|-------------------------|
| **Período analisado**      | 01/03/2024 a 17/07/2024 |
| **Localização**            | Ucrânia (GMT+2)         |
| **Moeda**                  | Hryvnia Ucraniana (UAH) |
| **Volume total de vendas** | 976 transações          |

## 🎯 Objetivos do Projeto

|            Objetivo               |                         Descrição                                          |
|-----------------------------------|----------------------------------------------------------------------------|
| **Otimização do mix de produtos** | Identificação dos itens mais rentáveis via Curva ABC                       |
| **Gestão operacional**            | Identificação de horários/dias de pico para alocação eficiente de recursos |
| **Análise financeira**            | Ticket médio, receita, volume de vendas, meios de pagamento                |
| **Base para previsões futuras**   | Estruturação dos dados para forecasting e planejamento de estoque          |

## 🛠️ Metodologia Aplicada
ETL → Limpeza e Engenharia de Features → Análise Exploratória (EDA)
→ Visualizações → Insights Estratégicos → Exportação de Resultados

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

## 📊 Resumo Executivo (KPIs)

| Métrica | Resultado |
|---------|----------|
| **Dias em operação** | 136 dias |
| **Transações totais** | 976 vendas |
| **Receita total** | **33.066,64 UAH** |
| **Ticket médio** | **33,88 UAH** |
| **Ticket mínimo / máximo** | 23,02 UAH / 40,00 UAH |
| **Média de vendas/dia** | 7,18 |
| **Receita média/dia** | 243,14 UAH |

### Meios de pagamento

| Método | % Transações | Receita | Ticket médio |
|--------|--------------|----------|--------------|
| **Cartão** | 90,9% | 29.880,64 UAH | 33,69 UAH |
| **Dinheiro** | 9,1% | 3.186,00 UAH | **35,80 UAH** |

## ☕ Curva ABC — Mix de Produtos

| Classe | % Receita | Nº de Produtos |
|--------|-----------|----------------|
| **A** | 78,5% | 4 produtos |
| **B** | 15,5% | 2 produtos |
| **C** | 6,0% | 2 produtos |

**Produto âncora:** *Latte (7.696,34 UAH)*

## 📅 Análise Temporal — Evolução Mensal

| Mês (2024) | Vendas | Receita (UAH) | Ticket Médio | Crescimento |
|------------|--------|----------------|--------------|-------------|
| Março | 206 | 7.050,20 | 34,22 | — |
| Abril | 196 | 6.720,56 | 34,29 | -4,7% |
| Maio | 267 | 9.063,42 | 33,95 | **+34,9%** |
| Junho | 227 | 7.758,76 | 34,18 | -14,4% |
| Julho* | 80 | 2.473,70 | 30,92 | parcial |

## ⏱️ Sazonalidade — Dias e Horários

### 💡 Melhor dia:
**Terça-feira — 5.102,06 UAH**

### 🕐 Períodos do dia

| Período | % Vendas | Receita | Ticket Médio |
|---------|----------|----------|--------------|
| **Tarde (12h–17h)** | 42,8% | 13.929,08 UAH | 33,32 |
| Manhã (07h–11h) | 27,9% | 9.176,96 UAH | 33,74 |
| Noite (18h–22h) | 29,3% | 9.960,60 UAH | **34,83** |

**Pico absoluto:** `10h00 — 122 vendas`

## 💡 Insights Estratégicos

1. **Produto âncora: Latte.**
2. **Classe A representa 78,5% da receita total.**
3. **Agenda operacional eficiente:** reforço de estoque antes das 10h.
4. **Altíssima digitalização:** 90,9% das vendas por cartão → baixo risco de gestão de caixa.

