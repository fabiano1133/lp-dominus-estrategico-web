# Favicon - Instruções

## Status Atual

O layout está configurado para usar `/logo.png` como favicon temporário.

## Como Criar um Favicon Otimizado

### Opção 1: Gerador Online (Recomendado)

1. Acesse: https://favicon.io/
2. Faça upload da logo (`/public/logo.png`)
3. Baixe o pacote gerado
4. Extraia os arquivos na pasta `/public/`

### Opção 2: Converter Logo Existente

1. Use um conversor online: https://convertio.co/png-ico/
2. Faça upload de `/public/logo.png`
3. Configure tamanho: 32x32px ou 16x16px
4. Baixe como `favicon.ico`
5. Coloque em `/public/favicon.ico`

### Opção 3: Usar Next.js App Icon (Recomendado para Next.js 13+)

1. Coloque `icon.png` ou `icon.ico` em `/app/`
2. Next.js gerencia automaticamente
3. Tamanho recomendado: 512x512px

## Tamanhos Recomendados

- **favicon.ico**: 16x16px, 32x32px, 48x48px (formato ICO)
- **icon.png**: 512x512px (para Next.js App Router)
- **apple-touch-icon**: 180x180px (opcional)

## Após Criar

1. Coloque o arquivo em `/public/favicon.ico`
2. Atualize o layout se necessário
3. Teste no navegador (Ctrl+F5 para limpar cache)

## Nota

Atualmente o site usa `/logo.png` como favicon. Funciona, mas um favicon.ico dedicado é mais otimizado.
