# 🚀 Guia de Deploy na Vercel - Dominus Estratégico

## ✅ Checklist Pré-Deploy

### 1. Build Local
- [x] Build compilando sem erros
- [x] TypeScript sem erros
- [x] Linter sem erros
- [x] Todas as rotas geradas corretamente

### 2. Código
- [x] Componentes funcionando
- [x] Formulário integrado
- [x] SEO implementado
- [x] Performance otimizada

---

## 📦 Passo a Passo - Deploy na Vercel

### Opção 1: Via Dashboard Vercel (Recomendado)

1. **Acesse**: https://vercel.com
2. **Faça login** ou crie conta
3. **Clique em "Add New Project"**
4. **Conecte seu repositório** (GitHub, GitLab, Bitbucket)
5. **Configure o projeto**:
   - Framework Preset: **Next.js** (detectado automaticamente)
   - Root Directory: `./` (padrão)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
   - Install Command: `npm install` (automático)

6. **Configure Environment Variables** (⚠️ CRÍTICO):
   - Clique em "Environment Variables"
   - Adicione cada variável abaixo
   - Selecione ambientes: Production, Preview, Development

7. **Clique em "Deploy"**

---

### Opção 2: Via Vercel CLI

1. **Instalar Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy para produção**:
   ```bash
   vercel --prod
   ```

---

## 🔐 Variáveis de Ambiente na Vercel

### Como Adicionar

1. No dashboard da Vercel: **Settings → Environment Variables**
2. Adicione cada variável abaixo
3. Selecione os ambientes (Production, Preview, Development)
4. Clique em **Save**

### Variáveis Obrigatórias

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
BACKEND_URL=https://api.seudominio.com.br
X_LP_TOKEN=seu-token-secreto-aqui
```

### Variáveis Opcionais (Recomendadas)

```env
X_LP_SOURCE=lp-dominus-estrategico
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### Variáveis Opcionais (Analytics)

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ⚙️ Configurações da Vercel

### Build Settings (Automático)
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Node.js Version
- A Vercel usa automaticamente a versão do Node.js compatível
- Recomendado: Node.js 18.x ou superior

---

## 🌐 Domínio Personalizado (Opcional)

### Adicionar Domínio Próprio

1. **Settings → Domains**
2. **Add Domain**
3. **Digite seu domínio**: `dominustrategico.com.br`
4. **Configure DNS** conforme instruções da Vercel:
   - Adicione registro CNAME ou A
   - Aguarde propagação DNS (pode levar até 48h)

5. **Atualize variável de ambiente**:
   - `NEXT_PUBLIC_SITE_URL=https://dominustrategico.com.br`

---

## ✅ Pós-Deploy - Verificações

### 1. Testar Site
- [ ] Site acessível na URL da Vercel
- [ ] Todas as seções carregando
- [ ] Imagens exibindo corretamente
- [ ] Logo aparecendo

### 2. Testar Formulário
- [ ] Preencher e enviar formulário
- [ ] Verificar se chega no backend
- [ ] Testar mensagens de erro
- [ ] Testar mensagens de sucesso

### 3. Testar WhatsApp
- [ ] Botão flutuante visível
- [ ] Clique abre WhatsApp
- [ ] Mensagem pré-preenchida correta

### 4. Testar SEO
- [ ] Acessar `/sitemap.xml` - deve funcionar
- [ ] Acessar `/robots.txt` - deve funcionar
- [ ] Verificar meta tags no código fonte
- [ ] Testar structured data: https://search.google.com/test/rich-results

### 5. Performance
- [ ] Testar velocidade: https://pagespeed.web.dev/
- [ ] Verificar Core Web Vitals
- [ ] Testar em mobile

---

## 🔍 Troubleshooting

### Build Falha

**Erro**: "Module not found"
- ✅ Verificar se todas as dependências estão no `package.json`
- ✅ Executar `npm install` localmente para testar

**Erro**: "Environment variable not found"
- ✅ Verificar se variáveis estão configuradas na Vercel
- ✅ Verificar se estão marcadas para "Production"

### Site não carrega

**Problema**: Página em branco
- ✅ Verificar console do navegador (F12)
- ✅ Verificar logs da Vercel (Deployments → View Function Logs)

### Formulário não funciona

**Problema**: Erro 500
- ✅ Verificar `BACKEND_URL` está correto
- ✅ Verificar `X_LP_TOKEN` está configurado
- ✅ Verificar logs da Vercel
- ✅ Testar backend separadamente

### WhatsApp não funciona

**Problema**: Botão não aparece ou não funciona
- ✅ Verificar `NEXT_PUBLIC_WHATSAPP_NUMBER` está configurado
- ✅ Verificar formato do número (sem espaços)

---

## 📊 Monitoramento

### Vercel Analytics (Opcional)

1. **Settings → Analytics**
2. **Enable Vercel Analytics**
3. Visualize métricas de performance

### Logs

1. **Deployments → Seu Deploy → View Function Logs**
2. Veja logs em tempo real
3. Útil para debug

---

## 🔄 Atualizações Futuras

### Como Atualizar

1. **Faça push para o repositório**:
   ```bash
   git add .
   git commit -m "Atualização"
   git push
   ```

2. **Vercel detecta automaticamente** e faz redeploy

3. **Ou faça deploy manual**:
   ```bash
   vercel --prod
   ```

---

## 📝 Checklist Final

### Antes do Deploy
- [ ] Build local funcionando (`npm run build`)
- [ ] Todas as variáveis de ambiente mapeadas
- [ ] Código sem erros de lint
- [ ] Testado localmente (`npm run dev`)

### Durante o Deploy
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Domínio configurado (se aplicável)
- [ ] Build completou com sucesso

### Após o Deploy
- [ ] Site acessível
- [ ] Formulário funcionando
- [ ] WhatsApp funcionando
- [ ] SEO verificado
- [ ] Performance testada

---

## 🎯 Comandos Úteis

### Verificar Deploy
```bash
vercel ls
```

### Ver Logs
```bash
vercel logs
```

### Remover Deploy
```bash
vercel remove
```

### Inspectar Build
```bash
vercel inspect
```

---

## ✨ Resumo Rápido

1. **Conecte repositório** na Vercel
2. **Configure variáveis de ambiente** (3 obrigatórias)
3. **Deploy automático** ou manual
4. **Teste tudo** após deploy
5. **Configure domínio** (opcional)

**Tempo estimado**: 10-15 minutos

---

## 🆘 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Status Vercel**: https://vercel-status.com
- **Comunidade**: https://github.com/vercel/next.js/discussions

---

## ✅ Status Final

**Projeto**: ✅ Pronto para produção
**Build**: ✅ Compilando sem erros
**Código**: ✅ Limpo e otimizado
**Documentação**: ✅ Completa

**Próximo passo**: Deploy na Vercel! 🚀
