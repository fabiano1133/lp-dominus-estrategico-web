# Landing Page - Dominus Estratégico

Landing Page de alta conversão desenvolvida com Next.js, focada em análise estratégica de comunicação para empresas e profissionais autônomos.

## 🚀 Deploy na Vercel

**Status**: ✅ Pronto para produção

### Documentação de Deploy
- 📋 **`VERCEL_DEPLOY.md`** - Guia completo de deploy
- 📋 **`ENV_PRODUCTION.md`** - Variáveis de ambiente
- 📋 **`PRE_DEPLOY_CHECKLIST.md`** - Checklist final
- 📋 **`REVISAO_FINAL.md`** - Revisão completa

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **react-hook-form**
- **axios**

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── api/
│   │   └── contact/          # API route para formulário
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout raiz
│   └── page.tsx               # Página principal (Client Component)
├── components/
│   ├── sections/              # Componentes de seção
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── AuthoritySection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── DeliverablesSection.tsx
│   │   ├── AudienceSection.tsx
│   │   ├── ManifestoSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/                    # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
└── lib/
    └── utils.ts               # Utilitários (cn function)
```

## 🎨 Identidade Visual

### Paleta de Cores
- **Primária**: Azul marinho profundo (`#0B1C2D`)
- **Secundária**: Dourado discreto (`#C9A24D`)
- **Neutros**: Branco e cinza claro

### Tipografia
- **Serif**: Playfair Display (títulos)
- **Sans**: Inter (corpo de texto)

## 📝 Configuração do Formulário

O formulário está configurado para enviar dados para `/api/contact`. Para integrar com um serviço externo:

1. Edite `app/api/contact/route.ts`
2. Configure integração com:
   - Serviço de email (SendGrid, Resend, etc.)
   - CRM (HubSpot, Salesforce, etc.)
   - Banco de dados
   - Webhook de terceiros

## ✨ Características

- ✅ Componentização desacoplada
- ✅ Arquitetura moderna (App Router)
- ✅ TypeScript para type safety
- ✅ Design responsivo
- ✅ Performance otimizada
- ✅ Acessibilidade

## 📄 Licença

Privado - Todos os direitos reservados
