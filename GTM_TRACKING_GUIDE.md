# 🎯 Guia de Rastreamento GTM - Landing Page

## ✅ Estrutura Implementada

A Landing Page está preparada para rastreamento via **Google Tag Manager (GA4)** com atributos semânticos e estrutura previsível.

---

## 📍 IDs e Data Attributes Implementados

### Seções Principais

| Seção | ID | Data Attribute |
|-------|----|----------------|
| Hero | `id="hero"` | `data-gtm-section="hero"` |
| Problema | `id="problema"` | `data-gtm-section="problem"` |
| Método | `id="metodo"` | `data-gtm-section="method"` |
| CTA Intermediário | `id="cta-intermediate"` | `data-gtm-section="cta-intermediate"` |
| Manifesto | `id="manifesto"` | `data-gtm-section="manifesto"` |
| CTA Final | `id="final-cta"` | `data-gtm-section="final-cta"` |

### Página Principal

```html
<main data-gtm-page="landing-page" data-gtm-page-name="dominustrategico">
```

---

## 🔘 CTAs (Call-to-Actions)

### Hero Section
```html
<button 
  data-gtm-element="cta-hero"
  data-gtm-action="click"
  data-gtm-label="quero-estruturar-minhas-vendas"
>
  Quero estruturar minhas vendas
</button>
```

### CTA Intermediário
```html
<button 
  data-gtm-element="cta-intermediate"
  data-gtm-action="click"
  data-gtm-label="quero-estruturar-minhas-vendas"
>
  Quero estruturar minhas vendas
</button>
```

### Formulário (Submit)
```html
<button 
  type="submit"
  data-gtm-element="cta-form-submit"
  data-gtm-action="submit"
  data-gtm-label="quero-estruturar-minhas-vendas"
>
  Quero estruturar minhas vendas
</button>
```

---

## 📱 WhatsApp Buttons

### Mobile
```html
<button 
  data-gtm-element="whatsapp-mobile"
  data-gtm-action="click"
  data-gtm-label="falar-com-especialista"
  data-gtm-channel="whatsapp"
>
  Falar com um especialista
</button>
```

### Desktop
```html
<button 
  data-gtm-element="whatsapp-desktop"
  data-gtm-action="click"
  data-gtm-label="falar-com-especialista"
  data-gtm-channel="whatsapp"
>
  Falar com um especialista
</button>
```

---

## 📝 Formulário de Contato

### Form Container
```html
<form 
  id="contact-form"
  data-gtm-form="contact-form"
  data-gtm-form-name="diagnostico-estrategico"
>
```

### Campos do Formulário
```html
<!-- Nome -->
<input 
  id="fullname"
  data-gtm-field="fullname"
/>

<!-- E-mail -->
<input 
  id="email"
  type="email"
  data-gtm-field="email"
/>

<!-- Telefone -->
<input 
  id="mobileNumber"
  type="tel"
  data-gtm-field="mobile-number"
/>
```

### Estados do Formulário

**Sucesso:**
```html
<div 
  data-gtm-event="form-success"
  data-gtm-form-status="success"
>
  Formulário enviado com sucesso...
</div>
```

**Erro:**
```html
<div 
  data-gtm-event="form-error"
  data-gtm-form-status="error"
>
  Erro ao enviar formulário...
</div>
```

---

## 🎯 Eventos Rastreáveis no GTM

### 1. Cliques em CTAs
- **Trigger**: Click em elementos com `data-gtm-element="cta-*"`
- **Variáveis**:
  - `gtm.element`: ID do elemento
  - `gtm.action`: "click"
  - `gtm.label`: Label do CTA

### 2. Cliques em WhatsApp
- **Trigger**: Click em elementos com `data-gtm-channel="whatsapp"`
- **Variáveis**:
  - `gtm.element`: "whatsapp-mobile" ou "whatsapp-desktop"
  - `gtm.action`: "click"
  - `gtm.label`: "falar-com-especialista"
  - `gtm.channel`: "whatsapp"

### 3. Submissão de Formulário
- **Trigger**: Submit em `#contact-form`
- **Variáveis**:
  - `gtm.formId`: "contact-form"
  - `gtm.formName`: "diagnostico-estrategico"
  - `gtm.element`: "cta-form-submit"

### 4. Sucesso/Erro do Formulário
- **Trigger**: Elemento visível com `data-gtm-event="form-success"` ou `data-gtm-event="form-error"`
- **Variáveis**:
  - `gtm.event`: "form-success" ou "form-error"
  - `gtm.formStatus`: "success" ou "error"

### 5. Scroll por Seção
- **Trigger**: Elemento visível com `data-gtm-section="*"`
- **Variáveis**:
  - `gtm.section`: Nome da seção (hero, problem, method, etc.)

---

## 🔧 Configuração no GTM

### Exemplo: Trigger para CTA Hero

1. **Criar Trigger**:
   - Tipo: Click - All Elements
   - Condição: `Click Element` → `matches CSS selector` → `[data-gtm-element="cta-hero"]`

2. **Criar Tag GA4**:
   - Tipo: Google Analytics: GA4 Event
   - Event Name: `cta_click`
   - Parâmetros:
     - `element`: `{{Click Element}}` → `data-gtm-element`
     - `action`: `{{Click Element}}` → `data-gtm-action`
     - `label`: `{{Click Element}}` → `data-gtm-label`
     - `section`: `hero`

### Exemplo: Trigger para WhatsApp

1. **Criar Trigger**:
   - Tipo: Click - All Elements
   - Condição: `Click Element` → `matches CSS selector` → `[data-gtm-channel="whatsapp"]`

2. **Criar Tag GA4**:
   - Event Name: `whatsapp_click`
   - Parâmetros:
     - `element`: `{{Click Element}}` → `data-gtm-element`
     - `channel`: `whatsapp`
     - `device`: `{{Click Element}}` → `data-gtm-element` (mobile/desktop)

### Exemplo: Trigger para Formulário

1. **Criar Trigger**:
   - Tipo: Form Submission
   - Form ID: `contact-form`

2. **Criar Tag GA4**:
   - Event Name: `form_submit`
   - Parâmetros:
     - `form_id`: `contact-form`
     - `form_name`: `diagnostico-estrategico`

---

## 📊 Métricas Recomendadas

### Eventos Principais
- `page_view` (automático)
- `cta_click` (todos os CTAs)
- `whatsapp_click` (mobile + desktop)
- `form_submit` (submissão)
- `form_success` (sucesso)
- `form_error` (erro)
- `section_view` (scroll por seção)

### Dimensões Customizadas
- `element` (cta-hero, cta-intermediate, cta-form-submit, etc.)
- `action` (click, submit)
- `label` (quero-estruturar-minhas-vendas, falar-com-especialista)
- `section` (hero, problem, method, etc.)
- `channel` (whatsapp)
- `device` (mobile, desktop)
- `form_status` (success, error)

---

## ✅ Checklist de Implementação GTM

- [x] IDs semânticos em todas as seções
- [x] Data attributes em todos os CTAs
- [x] Data attributes no formulário
- [x] Data attributes nos botões WhatsApp
- [x] Estrutura previsível e escalável
- [x] Sem código de tracking no frontend
- [x] Sem gtag direto no código
- [x] Sem console.logs de tracking

---

## 🚀 Próximos Passos

1. **Configurar Triggers no GTM** usando os seletores CSS fornecidos
2. **Criar Tags GA4** para cada evento
3. **Testar no Preview Mode** do GTM
4. **Validar eventos** no GA4 Real-Time
5. **Configurar Conversões** para eventos importantes

---

## 📝 Notas Importantes

- ✅ **Nenhum código de tracking** foi inserido no frontend
- ✅ **Apenas atributos HTML** foram adicionados
- ✅ **Performance preservada** (sem JS adicional)
- ✅ **Estrutura escalável** para novos elementos
- ✅ **Compatível com GTM** e outras ferramentas de tag management

---

## 🎯 Estrutura Completa de Data Attributes

```
Página
├── data-gtm-page="landing-page"
└── data-gtm-page-name="dominustrategico"

Seções
├── data-gtm-section="hero"
├── data-gtm-section="problem"
├── data-gtm-section="method"
├── data-gtm-section="cta-intermediate"
├── data-gtm-section="manifesto"
└── data-gtm-section="final-cta"

CTAs
├── data-gtm-element="cta-hero"
├── data-gtm-element="cta-intermediate"
└── data-gtm-element="cta-form-submit"
    ├── data-gtm-action="click" ou "submit"
    └── data-gtm-label="quero-estruturar-minhas-vendas"

WhatsApp
├── data-gtm-element="whatsapp-mobile" ou "whatsapp-desktop"
├── data-gtm-action="click"
├── data-gtm-label="falar-com-especialista"
└── data-gtm-channel="whatsapp"

Formulário
├── data-gtm-form="contact-form"
├── data-gtm-form-name="diagnostico-estrategico"
├── data-gtm-field="fullname"
├── data-gtm-field="email"
├── data-gtm-field="mobile-number"
├── data-gtm-event="form-success" (quando sucesso)
└── data-gtm-event="form-error" (quando erro)
```

---

**A Landing Page está 100% preparada para rastreamento via GTM! 🎉**
