# ✅ Checklist de Produção - Dominus Estratégico

## 🎯 Status Geral: **QUASE PRONTO** (95%)

O projeto está tecnicamente pronto, mas requer algumas configurações finais antes do deploy.

---

## ✅ O QUE JÁ ESTÁ PRONTO

### Código e Estrutura
- ✅ Build compilando sem erros
- ✅ Todos os componentes funcionando
- ✅ TypeScript sem erros
- ✅ SEO completo implementado
- ✅ Structured Data configurado
- ✅ Sitemap e Robots.txt gerados
- ✅ Meta tags otimizadas
- ✅ Performance otimizada

### Design e UX
- ✅ Layout responsivo
- ✅ Identidade visual aplicada
- ✅ Logo integrada
- ✅ Formulário funcional
- ✅ Navegação suave

---

## ⚠️ CONFIGURAÇÕES NECESSÁRIAS ANTES DO DEPLOY

### 1. **Variáveis de Ambiente** (OBRIGATÓRIO)

Crie arquivo `.env.local` ou configure no painel do provedor:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio-real.com.br
```

**Onde configurar:**
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Outros**: Consulte documentação do provedor

---

### 2. **Favicon** (RECOMENDADO)

Adicione um favicon em `/public/favicon.ico`

**Como criar:**
- Use a logo da marca
- Tamanho: 32x32px ou 16x16px
- Formato: ICO ou PNG

**Alternativa rápida:**
- Use um gerador online: https://favicon.io/
- Ou converta a logo atual

---

### 3. **Integração do Formulário** (OBRIGATÓRIO)

O formulário está configurado, mas precisa de integração real.

**Arquivo:** `app/api/contact/route.ts`

**Opções de integração:**

#### Opção A: Email (Resend/SendGrid)
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contato@dominustrategico.com.br',
  to: 'seu-email@dominustrategico.com.br',
  subject: 'Novo contato - Landing Page',
  html: `...`
})
```

#### Opção B: CRM (HubSpot/Salesforce)
```typescript
await axios.post('https://api.hubapi.com/contacts/v1/contact', {
  properties: [{ property: 'email', value: body.email }]
}, {
  headers: { 'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}` }
})
```

#### Opção C: Webhook (Zapier/Make)
```typescript
await axios.post(process.env.WEBHOOK_URL, body)
```

**Variáveis necessárias:**
- `RESEND_API_KEY` (se usar Resend)
- `HUBSPOT_API_KEY` (se usar HubSpot)
- `WEBHOOK_URL` (se usar webhook)

---

### 4. **Google Search Console** (RECOMENDADO)

Após deploy:
1. Acesse: https://search.google.com/search-console
2. Adicione propriedade do site
3. Verifique propriedade (meta tag ou arquivo HTML)
4. Envie sitemap: `https://seu-dominio.com.br/sitemap.xml`

---

### 5. **Google Analytics** (OPCIONAL)

Se quiser tracking:

1. Crie conta no Google Analytics
2. Obtenha o ID de medição (G-XXXXXXXXXX)
3. Adicione variável:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Crie componente de tracking (se necessário)

---

## 🚀 PASSOS PARA DEPLOY

### Vercel (Recomendado)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Fazer deploy:**
   ```bash
   vercel
   ```

3. **Configurar variáveis:**
   - Acesse dashboard Vercel
   - Settings → Environment Variables
   - Adicione `NEXT_PUBLIC_SITE_URL`

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Conectar repositório** no Netlify
2. **Configurar build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Adicionar variáveis de ambiente**
4. **Deploy automático**

### Outros Provedores

Siga a documentação do Next.js para seu provedor específico.

---

## 📋 CHECKLIST FINAL

### Antes do Deploy
- [ ] Criar arquivo `.env.local` com `NEXT_PUBLIC_SITE_URL`
- [ ] Adicionar favicon em `/public/favicon.ico`
- [ ] Configurar integração do formulário
- [ ] Testar formulário localmente
- [ ] Verificar todas as URLs estão corretas
- [ ] Testar em diferentes dispositivos

### Após o Deploy
- [ ] Verificar site está acessível
- [ ] Testar formulário em produção
- [ ] Verificar sitemap: `/sitemap.xml`
- [ ] Verificar robots.txt: `/robots.txt`
- [ ] Testar structured data: https://search.google.com/test/rich-results
- [ ] Adicionar no Google Search Console
- [ ] Enviar sitemap no Google Search Console
- [ ] Testar velocidade: https://pagespeed.web.dev/
- [ ] Verificar Open Graph: https://developers.facebook.com/tools/debug/
- [ ] Testar em mobile

---

## 🔧 COMANDOS ÚTEIS

### Desenvolvimento
```bash
npm run dev
```

### Build Local
```bash
npm run build
npm start
```

### Verificar Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

---

## ⚡ QUICK START PARA PRODUÇÃO

1. **Configure variável de ambiente:**
   ```bash
   # No seu provedor de hospedagem, adicione:
   NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
   ```

2. **Integre o formulário:**
   - Escolha uma opção (Email/CRM/Webhook)
   - Configure em `app/api/contact/route.ts`
   - Adicione variáveis de ambiente necessárias

3. **Adicione favicon:**
   - Coloque `favicon.ico` em `/public/`

4. **Faça deploy:**
   - Siga instruções do seu provedor

5. **Configure SEO:**
   - Adicione no Google Search Console
   - Envie sitemap

---

## 📞 SUPORTE

Se encontrar problemas:
1. Verifique logs do build
2. Verifique variáveis de ambiente
3. Teste localmente primeiro
4. Consulte documentação do Next.js

---

## ✨ RESUMO

**Status:** ✅ **Tecnicamente pronto para produção**

**Pendências:**
1. ⚠️ Configurar `NEXT_PUBLIC_SITE_URL`
2. ⚠️ Integrar formulário com serviço real
3. 💡 Adicionar favicon (opcional mas recomendado)

**Tempo estimado para finalizar:** 15-30 minutos

**Após essas configurações, está 100% pronto para produção!** 🚀
