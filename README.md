# FISIOGASPAR — Website

**Estado:** Entregue ✅  
**Data de criação:** 2026-05-08  
**Data de entrega:** 2026-05-07  
**Prospect origem:** `projects/client-acquisition/prospects/fisiogaspar/`

## Sobre o cliente
Clínica de fisioterapia e reabilitação em Lisboa (Av. EUA 2C). Website anterior estava morto. Rating: 4.6★ (150 reviews).

## Stack
- HTML + CSS inline + JS vanilla
- Tailwind CSS via CDN
- Formulário via formsubmit.co (a confirmar email real com cliente)
- Google Fonts: Barlow Condensed + DM Sans

## Comandos
```bash
# Servidor local
node serve.mjs

# Screenshot desktop
node screenshot.mjs http://localhost:3000

# Screenshot mobile
node screenshot-mobile.mjs

# QA automático
npx playwright test --config playwright.config.js
```

## Deploy
- URL Vercel: https://fisiogaspar.vercel.app
- Repo GitHub: https://github.com/Hitshigo/fisiogaspar

## Notas
- Email `geral@fisiogaspar.pt` é inferido — confirmar com cliente
- Formulário usa formsubmit.co — se o cliente tiver email próprio, mudar o `action` do form
