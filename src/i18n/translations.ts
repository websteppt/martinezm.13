export type Language = 'pt' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.collection': 'Coleção',
    'nav.custom': 'Encomendas Personalizadas',
    'nav.contact': 'Contacto',

    // Hero
    'hero.preTitle': 'Coleção de Referência',
    'hero.brand': 'MARTINEZ',
    'hero.subBrand': 'M.13',
    'hero.tagline': 'Elegância Premium',
    'hero.viewCollection': 'Ver Coleção',
    'hero.whatsapp': 'WhatsApp',
    'hero.scroll': 'Rolar',

    // About
    'about.label': 'A Casa',
    'about.heading': 'O Nosso Legado',
    'about.story1': 'Nascida da paixão pelo desenho, da exploração da textura e da vontade de transformar superfícies em peças únicas',
    'about.story2': 'A Martinez M.13 nasceu da paixão pelo desenho e da vontade de transformar ideias em peças físicas capazes de dar uma nova identidade aos espaços.',
    'about.story3': 'Cada criação percorre um processo cuidado, onde o desenho, o relevo, a textura e o acabamento se unem para criar peças verdadeiramente únicas. Mais do que elementos decorativos, são superfícies pensadas para marcar presença e contar uma história.',
    'about.accent': 'Guiada pela ambição, pela irreverência e pela atenção ao detalhe, a Martinez M.13 procura desafiar o convencional e apresentar uma nova forma de interpretar o design modular para interiores.',

    // Collection
    'collection.label': 'Peças Assinatura',
    'collection.heading': 'A Coleção',
    'collection.description': 'Paredes modulares concebidoas para elevar os espaços através da textura e do design. Cada projeto representa um compromisso com a qualidade, criado para durar e inspirar ao longo do tempo.',
    'collection.note': 'Cada peça é produzida exclusivamente por encomenda, garantindo um resultado único.\n Mesmo dentro da mesma coleção, não existem duas peças exatamente iguais.',
    'collection.inquire': 'Consultar',

    // Collection products
    //'collection.product1.name': 'The Sovereign',
    //'collection.product1.category': 'Artigos em Couro',
    //'collection.product1.description': 'Couro bezerro italiano costurado à mão com ferragem dourada exclusiva.',
    //'collection.product2.name': 'Aura Noir',
    //'collection.product2.category': 'Relógios',
    //'collection.product2.description': 'Movimento suíço envolto em titânio escovado com cristal de safira.',
    //'collection.product3.name': 'Éclat Reserve',
    //'collection.product3.category': 'Fragrância',
    //'collection.product3.description': 'Oud, âmbar e orquídea negra — um aroma assinatura intoxicante.',
    //'collection.product4.name': 'The Monarch',
    //'collection.product4.category': 'Acessórios',
    //'collection.product4.description': 'Abotoaduras de ouro 18k usinadas com precisão e incrustação de ônix.',
    //'collection.product5.name': 'Noir Silhouette',
    //'collection.product5.category': 'Vestuário',
    //'collection.product5.description': 'Sobretudo de cashmere meia-noite sob medida com lapelas de cetim.',
    //'collection.product6.name': 'The Vault',
    //'collection.product6.category': 'Edição Limitada',
    //'collection.product6.description': 'Peças de colecionador numeradas — disponíveis apenas mediante convite.',

    // Custom Orders
    'custom.label': 'Além Da Coleção',
    'custom.heading': 'Encomendas Personalizadas',
    'custom.description': 'Cada espaço merece uma solução própria. Desenvolvemos projetos totalmente personalizados, adaptados à visão, às dimensões e à identidade de cada cliente.',
    'custom.feature1.title': 'Design Personalizado',
    'custom.feature1.description': 'Cada projeto nasce de uma colaboração direta, transformando uma ideia inicial numa peça exclusiva, pensada ao detalhe.',
    'custom.feature2.title': 'Seleção de Materiais',
    'custom.feature2.description': 'Trabalhamos com materiais cuidadosamente selecionados, explorando diferentes texturas, acabamentos e soluções para garantir um resultado distinto e duradouro.',
    'custom.feature3.title': 'Produção Artesanal',
    'custom.feature3.description': 'Cada peça é desenvolvida por encomenda, passando por um processo rigoroso que combina tecnologia de precisão com acabamentos executados manualmente, assegurando um elevado nível de detalhe e exclusividade.',
    'custom.cta.title': 'Dê vida à sua ideia',
    'custom.cta.description': 'Partilhe connosco a sua visão. Cada projeto começa com uma conversa e termina numa peça criada exclusivamente para o seu espaço.',
    'custom.cta.button': 'Contactar via WhatsApp',

    // Contact
    'contact.label': 'Vamos criar algo único',
    'contact.heading': 'Contacto',
    'contact.description': 'Se procura uma peça exclusiva, pretende desenvolver um projeto personalizado ou simplesmente conhecer melhor a Martinez M.13, teremos todo o gosto em falar consigo.',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': 'Converse Connosco',
    'contact.whatsapp.description': 'Conversa direta — resposta imediata',
    'contact.email.label': 'Email',
    'contact.email.value': 'contact@martinezm13.com',
    'contact.email.description': 'Rápida resposta ao seu pedido',
    'contact.instagram.label': 'Instagram',
    'contact.instagram.value': '@martinezm13',
    'contact.instagram.description': 'Siga as nossas criações mais recentes',
    'contact.location': 'Mediante Agendamento — Mundial',

    // Footer
    'footer.tagline': 'Elegância Premium',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.credit': 'Crafted by Web Step.'
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.collection': 'Collection',
    'nav.custom': 'Custom Orders',
    'nav.contact': 'Contact',

    // Hero
    'hero.preTitle': 'Established Collection',
    'hero.brand': 'MARTINEZ',
    'hero.subBrand': 'M.13',
    'hero.tagline': 'Premium Elegance',
    'hero.viewCollection': 'View Collection',
    'hero.whatsapp': 'WhatsApp',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'The House',
    'about.heading': 'Our Legacy',
    'about.story1': 'Born from a passion for design, the exploration of texture, and the desire to transform surfaces into unique pieces.',
    'about.story2': 'Martinez M.13 was born from a passion for design and the desire to turn ideas into physical pieces capable of giving spaces a new identity.',
    'about.story3': 'Each creation follows a careful process, where drawing, relief, texture, and finish come together to create truly unique pieces. More than decorative elements, they are surfaces designed to make a statement and tell a story.',
    'about.accent': 'Driven by ambition, irreverence, and attention to detail, Martinez M.13 seeks to challenge convention and present a new way of interpreting modular design for interiors.',

    // Collection
    'collection.label': 'Signature Pieces',
    'collection.heading': 'The Collection',
    'collection.description': 'Modular wall panels designed to transform interiors through texture, depth, and timeless design. Every project reflects our commitment to exceptional craftsmanship and enduring quality, creating spaces that inspire for years to come.',
    'collection.note': 'Each piece is produced exclusively to order, ensuring a unique result.\n Even within the same collection, no two pieces are ever exactly alike.',
    'collection.inquire': 'Inquire',

    // Collection products
    //'collection.product1.name': 'The Sovereign',
    //'collection.product1.category': 'Leather Goods',
    //'collection.product1.description': 'Hand-stitched Italian calfskin with signature gold hardware.',
    //'collection.product2.name': 'Aura Noir',
    //'collection.product2.category': 'Timepieces',
    //'collection.product2.description': 'Swiss movement encased in brushed titanium with sapphire crystal.',
    //'collection.product3.name': 'Éclat Reserve',
    //'collection.product3.category': 'Fragrance',
    //'collection.product3.description': 'Oud, amber, and black orchid — an intoxicating signature scent.',
    //'collection.product4.name': 'The Monarch',
    //'collection.product4.category': 'Accessories',
    //'collection.product4.description': 'Precision-milled 18k gold cuff links with onyx inlay.',
    //'collection.product5.name': 'Noir Silhouette',
    //'collection.product5.category': 'Apparel',
    //'collection.product5.description': 'Tailored midnight cashmere overcoat with satin lapels.',
    //'collection.product6.name': 'The Vault',
    //'collection.product6.category': 'Limited Edition',
    //'collection.product6.description': 'Numbered collector pieces — available by invitation only.',

    // Custom Orders
    'custom.label': 'Beyond The Collection',
    'custom.heading': 'Custom Orders',
    'custom.description': 'Every space deserves its own solution. We develop fully personalized projects, tailored to each client\'s vision, dimensions, and identity.',
    'custom.feature1.title': 'Custom Design',
    'custom.feature1.description': 'Each project begins with direct collaboration, turning an initial idea into an exclusive piece, thought through to the smallest detail.',
    'custom.feature2.title': 'Material Selection',
    'custom.feature2.description': 'We work with carefully selected materials, exploring different textures, finishes, and solutions to ensure a distinctive and long-lasting result.',
    'custom.feature3.title': 'Artisanal Production',
    'custom.feature3.description': 'Each piece is developed to order, through a rigorous process that combines precision technology with handcrafted finishes, ensuring a high level of detail and exclusivity.',
    'custom.cta.title': 'Bring your idea to life',
    'custom.cta.description': 'Share your vision with us. Every project begins with a conversation and ends in a piece created exclusively for your space.',
    'custom.cta.button': 'Contact via WhatsApp',

    // Contact
    'contact.label': 'Get In Touch',
    'contact.heading': 'Contact',
    'contact.description': 'We believe in personal connections. Reach us directly — no forms, no waiting.',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': 'Chat with us',
    'contact.whatsapp.description': 'Direct conversation — instant response',
    'contact.email.label': 'Email',
    'contact.email.value': 'contact@martinezm13.com',
    'contact.email.description': 'For detailed inquiries',
    'contact.instagram.label': 'Instagram',
    'contact.instagram.value': '@martinezm13',
    'contact.instagram.description': 'Follow our latest creations',
    'contact.location': 'By Appointment — Worldwide',

    // Footer
    'footer.tagline': 'Premium Elegance',
    'footer.rights': 'All rights reserved.',
    'footer.credit': 'Crafted by Web Step.'
  },
};