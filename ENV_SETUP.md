# 🔧 Configuração de Variáveis de Ambiente

> 📋 **Para mapeamento completo de produção, consulte:** `ENV_PRODUCTION.md`

## Variáveis Necessárias

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# ============================================
# OBRIGATÓRIAS
# ============================================

# URL do Site (OBRIGATÓRIO)
NEXT_PUBLIC_SITE_URL=https://dominustrategico.com.br

# Backend API (OBRIGATÓRIO para formulário)
BACKEND_URL=http://localhost:3131

# Token de Autenticação (OBRIGATÓRIO)
X_LP_TOKEN=seu-token-aqui

# ============================================
# OPCIONAIS
# ============================================

# Source identifier (OPCIONAL - padrão: lp-dominus-estrategico)
X_LP_SOURCE=lp-dominus-estrategico

# WhatsApp Number (OPCIONAL mas recomendado)
# Formato: 5511999999999 (código do país + DDD + número, sem espaços)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

# Google Search Console Verification (OPCIONAL)
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-google-aqui

# Google Analytics (OPCIONAL)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Como Configurar

1. **Criar arquivo `.env.local`**:
   ```bash
   touch .env.local
   ```

2. **Adicionar a URL do seu site**:
   ```env
   NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
   ```

3. **Reiniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

## Importante

- ⚠️ **NUNCA** commite o arquivo `.env.local` no Git
- ✅ O arquivo `.env.local` já está no `.gitignore`
- ✅ Use `.env.example` como referência (se necessário criar)
- ✅ Em produção, configure as variáveis no painel do seu provedor (Vercel, Netlify, etc.)

## Variáveis por Ambiente

### Desenvolvimento
- Use `.env.local` para configurações locais

### Produção
- Configure no painel do seu provedor de hospedagem
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables
