# 🏛️ Canto Estúdio — Site Institucional

Site institucional premium para o Canto Estúdio de Arquitetura de Interiores.

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página principal (one-page)
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   ├── main.js            # Interações gerais
│   └── projects.js        # Dados do portfólio
├── assets/
│   ├── favicon.svg        # Favicon SVG
│   └── images/            # 31 imagens (1.png a 31.png)
└── README.md              # Este arquivo
```

## 🚀 Como Rodar

### Opção 1: Live Server (Recomendado)

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito no `index.html`
3. Selecione "Open with Live Server"
4. O site abrirá em `http://localhost:5500` (ou similar)

### Opção 2: Servidor HTTP Simples (Python)

```bash
# Python 3.x
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 3: Servidor HTTP Simples (Node.js)

```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server

# Acesse: http://localhost:8080
```

### Opção 4: Abrir Diretamente

⚠️ Alguns recursos podem não funcionar corretamente devido a restrições CORS.

Simplesmente abra o arquivo `index.html` no navegador.

## 🎨 Características

### Design
- ✅ Estética editorial premium
- ✅ Tipografia forte e hierarquia clara
- ✅ Muito respiro visual (white space)
- ✅ Microinterações suaves
- ✅ Paleta minimalista (preto, branco, cinzas)

### Funcionalidades
- ✅ Header sticky com blur
- ✅ Menu mobile responsivo
- ✅ Scroll suave entre seções
- ✅ Reveal on scroll (Intersection Observer)
- ✅ Portfólio com modal full-screen
- ✅ Sistema de tabs (Entregas/Serviços)
- ✅ Formulário com validação JS
- ✅ Lazy loading de imagens

### Técnicas
- ✅ HTML semântico (acessibilidade)
- ✅ CSS puro (sem frameworks)
- ✅ JavaScript vanilla (zero dependências)
- ✅ Mobile-first responsivo
- ✅ Performance otimizada
- ✅ SEO básico (meta tags, OG)

## 📱 Responsividade

O site se adapta perfeitamente a:
- **Desktop**: 1920px+
- **Laptop**: 1024px - 1440px
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 768px

## 🖼️ Imagens

O site usa **31 imagens** (1.png a 31.png), cada uma em seu local correto:

- **1.png**: Hero principal (imagem destaque)
- **2.png**: Seção "O que é o Canto"
- **3.png**: Seção "Pilares"
- **4.png**: Seção "Como trabalhamos"
- **5.png**: Seção "Quem é o Canto"
- **6.png**: Banner abertura do Portfólio
- **7-13.png**: Projeto Apartamento Santo Antônio
- **14-15.png**: Projeto Banheiro Contemporâneo
- **16-19.png**: Projeto Quarto Casal
- **20-23.png**: Projeto Show Room Docol
- **24.png**: Banner abertura "Entregas"
- **25-27.png**: Tab "Arquitetura de Interiores"
- **28-30.png**: Tab "Design de Ambientes"
- **31.png**: CTA final (background)

> **Importante**: Certifique-se de que todas as 31 imagens estão na pasta `/assets/images/` com os nomes corretos (1.png, 2.png, etc).

## 🛠️ Personalização

### Atualizar Contatos

Edite as seguintes linhas no `index.html`:

```html
<!-- Linha ~517 (E-mail) -->
<a href="mailto:contato@cantoestudio.com.br" ...>

<!-- Linha ~522 (WhatsApp) -->
<a href="https://wa.me/5531999999999" ...>

<!-- Linha ~527 (Instagram) -->
<a href="https://instagram.com/cantoestudio" ...>
```

### Alterar Cores

Edite as variáveis CSS em `/css/styles.css` (linhas 17-21):

```css
:root {
    --color-dark: #1a1a1a;
    --color-accent: #1a1a1a;
    /* ... */
}
```

### Adicionar/Remover Projetos

Edite o arquivo `/js/projects.js` e ajuste o array `window.projects`.

## 🌐 Deploy (GitHub Pages)

1. Faça upload de todos os arquivos para um repositório GitHub
2. Vá em **Settings** → **Pages**
3. Selecione a branch `main` (ou `master`)
4. Selecione a pasta `/` (root)
5. Clique em **Save**
6. Aguarde alguns minutos e acesse: `https://seu-usuario.github.io/seu-repo/`

## 📋 Checklist de Deploy

Antes de publicar, verifique:

- [ ] Todas as 31 imagens estão na pasta correta
- [ ] Links de contato (e-mail, WhatsApp, Instagram) estão atualizados
- [ ] Meta tags OG estão com URL correto
- [ ] Favicon está funcionando
- [ ] Site funciona em mobile
- [ ] Formulário exibe feedback correto
- [ ] Modal do portfólio abre e fecha corretamente
- [ ] Tabs de "Entregas" funcionam

## 🎯 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📄 Licença

© 2026 Canto Estúdio. Todos os direitos reservados.

---

**Desenvolvido com atenção ao detalhe e respeito pela estética editorial.**
