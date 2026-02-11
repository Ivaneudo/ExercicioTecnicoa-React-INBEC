# Processo Seletivo: Shark School - TI

## Comandos:

- Instação:
  - Para instalar as dependencias rode: npm i
- Rode os projetos:
  - Questão 1: npm run q1
  - Questão 2: npm run q2
  - Questão 3: npm run q3

## Desafio Técnico de Lógica de Programação

### Questão 01: Monitor de Recursos do Servidor (Nível: Fácil)

**Contexto:** Para garantir a estabilidade dos nossos sistemas, precisamos de um script que monitore o
consumo de hardware.

**O Desafio:** Escreva um programa que receba dois valores decimais: a porcentagem de uso de **CPU** e a porcentagem de uso de Memória **RAM**. O programa deve exibir uma mensagem de status baseada nas seguintes regras:

1. Sistema Estável: Se ambos (CPU e RAM) forem menores que 50%.
2. ALERTA: Sobrecarga: Se qualquer um dos dois for maior que 80%.
3. Atenção: Uso Moderado: Para qualquer outra situação.

Exemplo de Teste:

- Entrada: CPU: 45% | RAM: 48% → Saída: "Sistema Estável"
- Entrada: CPU: 85% | RAM: 30% → Saída: "ALERTA: Sobrecarga"

---

### Questão 02: Validador de Senha Forte (Nível: Intermediário)

**Contexto:** Segurança é prioridade. Você deve criar um validador para garantir que os usuários criem senhas seguras no sistema.

**O Desafio:** Crie uma função/programa que receba uma string (senha) e verifique se ela cumpre **todos** os requisitos abaixo, retornando "Senha Válida" ou "Senha Inválida":

1. Ter no mínimo **8 caracteres**.
2. Conter pelo menos **um número (0-9)**.
3. Conter pelo menos **uma letra maiúscula**.

**Exemplo de Teste:**

- Entrada: shark2026 → Saída: "Senha Inválida" (Falta letra maiúscula)
- Entrada: Inbec123 → Saída: "Senha Válida"

---

### Questão 03: Processamento de Cashback (Nível: Difícil)

**Contexto:** Uma empresa parceira do Shark School quer implementar um sistema de recompensas para seus clientes.

**O Desafio:** Escreva um programa que receba uma **lista de valores** (representando os produtos no
carrinho de compras). O programa deve calcular o cashback individual de cada item e, ao final,
exibir o **valor total que o cliente receberá de volta** e o **valor líquido da compra** (Total -
Cashback).

**Regras de Cashback:**

- Itens com valor de até R$ 100,00: 5% de cashback.
- Itens com valor acima de R$ 100,00: 10% de cashback.

**Exemplo de Teste:**

- **Entrada (Lista):** [50.00, 200.00]
- **Processamento:**
  - Item 1 (50.00): 5% = 2.50 de cashback.
  - Item 2 (200.00): 10% = 20.00 de cashback.
- **Saída Esperada:**
  - Total de Cashback: R$ 22,50
  - Valor Final da Compra: R$ 227,50
