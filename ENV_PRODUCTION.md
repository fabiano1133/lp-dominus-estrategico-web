# 🔐 Variáveis de Ambiente para Produção

## 📋 Mapeamento Completo

### ✅ OBRIGATÓRIAS (Críticas - Site não funciona sem elas)

#### 1. **NEXT_PUBLIC_SITE_URL**
- **Descrição**: URL completa do site em produção
- **Uso**: SEO, meta tags, structured data, sitemap, robots.txt
- **Onde é usado**:
  - `app/layout.tsx` (metadataBase, canonical)
  - `components/seo/StructuredData.tsx` (URLs do schema)
  - `app/sitemap.ts` (URLs do sitemap)
  - `app/robots.ts` (URL do sitemap)
- **Formato**: `https://dominustrategico.com.br`
- **Exemplo**: `https://dominustrategico.com.br`
- **⚠️ IMPORTANTE**: Deve ser HTTPS em produção

---

#### 2. **BACKEND_URL**
- **Descrição**: URL do backend/API que recebe os leads
- **Uso**: Integração do formulário de contato
- **Onde é usado**: `app/api/contact/route.ts`
- **Formato**: `https://api.seudominio.com.br` ou `http://localhost:3131` (dev)
- **Exemplo Produção**: `https://api.dominustrategico.com.br`
- **Exemplo Desenvolvimento**: `http://localhost:3131`
- **⚠️ IMPORTANTE**: Em produção, use HTTPS

---

#### 3. **X_LP_TOKEN**
- **Descrição**: Token de autenticação para comunicação com o backend
- **Uso**: Header `X-Lp-Token` nas requisições ao backend
- **Onde é usado**: `app/api/contact/route.ts`
- **Formato**: String (UUID ou token alfanumérico)
- **Exemplo**: `b9497d29-957d-4f90-9847-8a9a2808f4d6`
- **⚠️ SEGURANÇA**: Mantenha secreto, nunca exponha no frontend

---

### 🔧 OPCIONAIS (Recomendadas - Funcionalidades extras)

#### 4. **X_LP_SOURCE**
- **Descrição**: Identificador da fonte/landing page
- **Uso**: Header `X-Lp-Source` para rastreamento no backend
- **Onde é usado**: `app/api/contact/route.ts`
- **Formato**: String
- **Padrão**: `lp-dominus-estrategico`
- **Exemplo**: `lp-dominus-estrategico`
- **💡 DICA**: Útil para identificar de qual LP veio o lead

---

#### 5. **NEXT_PUBLIC_WHATSAPP_NUMBER**
- **Descrição**: Número do WhatsApp para o botão flutuante
- **Uso**: Botão WhatsApp fixo na tela
- **Onde é usado**: `app/page.tsx`
- **Formato**: Código do país + DDD + número (sem espaços ou caracteres)
- **Exemplo**: `5511999999999` (55 = Brasil, 11 = DDD, 999999999 = número)
- **⚠️ IMPORTANTE**: Sem espaços, parênteses ou hífens

---

### 📊 OPCIONAIS (Analytics e Verificação)

#### 6. **NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION**
- **Descrição**: Código de verificação do Google Search Console
- **Uso**: Verificação de propriedade no Google
- **Onde é usado**: `app/layout.tsx` (metadata.verification.google)
- **Formato**: String alfanumérica
- **Exemplo**: `abc123def456ghi789`
- **Como obter**: Google Search Console → Configurações → Verificação de propriedade

---

#### 7. **NEXT_PUBLIC_GA_ID**
- **Descrição**: ID do Google Analytics (se quiser tracking)
- **Uso**: Analytics e métricas de conversão
- **Onde é usado**: (Precisa implementar componente de tracking)
- **Formato**: `G-XXXXXXXXXX`
- **Exemplo**: `G-ABC123XYZ`
- **Como obter**: Google Analytics → Administração → Dados de medição

---

## 📝 Template Completo para Produção

```env
# ============================================
# OBRIGATÓRIAS - CONFIGURE ANTES DO DEPLOY
# ============================================

# URL do Site (OBRIGATÓRIO)
NEXT_PUBLIC_SITE_URL=https://dominustrategico.com.br

# Backend API (OBRIGATÓRIO)
BACKEND_URL=https://api.dominustrategico.com.br

# Token de Autenticação (OBRIGATÓRIO)
X_LP_TOKEN=seu-token-secreto-aqui

# ============================================
# OPCIONAIS - RECOMENDADAS
# ============================================

# Identificador da Landing Page (OPCIONAL)
X_LP_SOURCE=lp-dominus-estrategico

# WhatsApp Number (OPCIONAL mas recomendado)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

# ============================================
# OPCIONAIS - ANALYTICS
# ============================================

# Google Search Console (OPCIONAL)
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-google

# Google Analytics (OPCIONAL)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🎯 Checklist de Configuração

### Antes do Deploy
- [ ] `NEXT_PUBLIC_SITE_URL` configurado com URL de produção (HTTPS)
- [ ] `BACKEND_URL` configurado com URL do backend (HTTPS em produção)
- [ ] `X_LP_TOKEN` configurado com token válido do backend
- [ ] `X_LP_SOURCE` configurado (ou deixar padrão)
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` configurado (se usar botão WhatsApp)

### Após o Deploy
- [ ] Testar formulário de contato
- [ ] Verificar se botão WhatsApp funciona
- [ ] Verificar URLs no sitemap e robots.txt
- [ ] Verificar structured data no Google Rich Results Test

---

## 🔒 Segurança

### Variáveis Públicas (NEXT_PUBLIC_*)
- ✅ Expostas no frontend (browser)
- ✅ Podem ser vistas no código fonte
- ⚠️ **NÃO** coloque tokens ou dados sensíveis aqui

**Variáveis Públicas:**
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_ID`

### Variáveis Privadas (Sem NEXT_PUBLIC_)
- ✅ Apenas no servidor (API routes)
- ✅ Não expostas no frontend
- ✅ Seguras para tokens e credenciais

**Variáveis Privadas:**
- `BACKEND_URL`
- `X_LP_TOKEN`
- `X_LP_SOURCE`

---

## 📍 Onde Configurar por Provedor

### Vercel
1. Acesse: Dashboard → Seu Projeto → Settings → Environment Variables
2. Adicione cada variável
3. Selecione os ambientes (Production, Preview, Development)
4. Clique em "Save"
5. Faça redeploy

### Netlify
1. Acesse: Site settings → Environment variables
2. Adicione cada variável
3. Selecione o escopo (All scopes, Production, Deploy previews)
4. Salve
5. Faça redeploy

### Outros Provedores
- Consulte a documentação do seu provedor
- Geralmente em: Settings → Environment Variables ou Config

---

## 🧪 Validação

### Como Testar se Está Configurado Corretamente

1. **Teste o Formulário:**
   - Preencha e envie
   - Verifique se chega no backend
   - Verifique logs do backend

2. **Teste o WhatsApp:**
   - Clique no botão flutuante
   - Verifique se abre com número correto

3. **Teste SEO:**
   - Acesse `/sitemap.xml` - deve ter URL correta
   - Acesse `/robots.txt` - deve referenciar sitemap correto
   - Use Google Rich Results Test para structured data

4. **Verificar no Código:**
   - Abra DevTools → Network
   - Verifique requisições para `/api/contact`
   - Headers devem ter `X-Lp-Token` e `X-Lp-Source`

---

## ⚠️ Problemas Comuns

### Formulário não funciona
- ✅ Verificar se `BACKEND_URL` está correto
- ✅ Verificar se `X_LP_TOKEN` está configurado
- ✅ Verificar se backend está acessível
- ✅ Verificar CORS no backend (se aplicável)

### WhatsApp não funciona
- ✅ Verificar formato do número (sem espaços)
- ✅ Verificar se `NEXT_PUBLIC_WHATSAPP_NUMBER` está configurado

### SEO não funciona
- ✅ Verificar se `NEXT_PUBLIC_SITE_URL` está com HTTPS
- ✅ Verificar se URL está correta (sem barra final)
- ✅ Aguardar indexação do Google (pode levar dias)

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique logs do servidor
2. Verifique variáveis no painel do provedor
3. Teste localmente com `.env.local`
4. Verifique documentação do Next.js sobre variáveis de ambiente

---

## ✨ Resumo Rápido

**Mínimo para funcionar:**
```env
NEXT_PUBLIC_SITE_URL=https://dominustrategico.com.br
BACKEND_URL=https://api.dominustrategico.com.br
X_LP_TOKEN=seu-token-aqui
```

**Recomendado completo:**
```env
NEXT_PUBLIC_SITE_URL=https://dominustrategico.com.br
BACKEND_URL=https://api.dominustrategico.com.br
X_LP_TOKEN=seu-token-aqui
X_LP_SOURCE=lp-dominus-estrategico
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```
