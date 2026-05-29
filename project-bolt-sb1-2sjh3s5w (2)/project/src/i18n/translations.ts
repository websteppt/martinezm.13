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
    'hero.preTitle': 'Coleção Estabelecida',
    'hero.brand': 'MARTINEZ',
    'hero.subBrand': 'M.13',
    'hero.tagline': 'Elegância Premium',
    'hero.viewCollection': 'Ver Coleção',
    'hero.whatsapp': 'WhatsApp',
    'hero.scroll': 'Rolar',

     // About
    'about.label': 'A Casa',
    'about.heading': 'O Nosso Legado',
    'about.story1': 'Nascida da reverência pelo artesanato intemporal e de uma busca constante pela perfeição.',
    'about.story2': 'A Martinez M.13 é mais do que uma marca — é uma declaração de intenção. Cada peça da coleção resulta da fusão entre técnica tradicional e visão contemporânea, criada para aqueles que entendem que o verdadeiro luxo não precisa de ser anunciado.',
    'about.story3': 'Da seleção rigorosa dos materiais ao detalhe preciso de cada acabamento, cada criação reflete a dedicação de um saber artesanal construído ao longo de anos de experiência.',
    'about.accent': 'Uma elegância silenciosa. Intencional. Duradoura.',

    // Collection
    'collection.label': 'Peças Assinatura',
    'collection.heading': 'A Coleção',
    'collection.description': 'Cada peça é um testemunho de qualidade inabalável — projetada para durar, criada para inspirar.',
    //'collection.inquire': 'Consultar',

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
    'custom.description': 'Para quem procura algo verdadeiramente único. Um serviço feito à medida que transforma visão em peça, com a mesma exigência e rigor que definem a Martinez M.13.',
    'custom.feature1.title': 'Design Sob Medida',
    'custom.feature1.description': 'Criações desenvolvidas em colaboração direta, desde a ideia inicial até à execução final — cada detalhe pensado para refletir a sua identidade.',
    'custom.feature2.title': 'Seleção de Materiais',
    'custom.feature2.description': 'Escolha entre um portfólio exclusivo de materiais premium, provenientes dos melhores fornecedores.',
    'custom.feature3.title': 'Artesanato de Mestre',
    'custom.feature3.description': 'Cada peça é desenvolvida manualmente com atenção absoluta ao detalhe, onde técnica e precisão se unem para garantir um resultado irrepreensível.',
    'custom.cta.title': 'Inicie a Sua Jornada Sob Medida',
    'custom.cta.description': 'Compartilhe a sua visão conosco diretamente. Cada encomenda personalizada começa com uma conversa.',
    'custom.cta.button': 'Contactar via WhatsApp',

    // Contact
    'contact.label': 'Entre Em Contato',
    'contact.heading': 'Contacto',
    'contact.description': 'Acreditamos em conexões pessoais. Contacte-nos diretamente — sem formulários, sem esperas.',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': 'Converse Conosco',
    'contact.whatsapp.description': 'Conversa direta — resposta imediata',
    'contact.email.label': 'Email',
    'contact.email.value': 'contact@martinezm13.com',
    'contact.email.description': 'Para consultas detalhadas',
    'contact.instagram.label': 'Instagram',
    'contact.instagram.value': '@martinezm13',
    'contact.instagram.description': 'Siga nossas criações mais recentes',
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
    'about.story1': 'Born from a reverence for timeless craftsmanship and an unwavering pursuit of perfection.',
    'about.story2': 'Martinez M.13 is more than a brand — it is a statement of intent. Each piece in the collection is the result of a fusion between traditional technique and contemporary vision, created for those who understand that true luxury needs no announcement.',
    'about.story3': 'From the rigorous selection of materials to the precise detail of every finish, each creation reflects the dedication of a craft built over years of experience.',
    'about.accent': 'A silent elegance. Intentional. Lasting.',

    // Collection
    'collection.label': 'Signature Pieces',
    'collection.heading': 'The Collection',
    'collection.description': 'Each piece is a testament to uncompromising quality — designed to endure, crafted to inspire.',
    'collection.inquire': 'Inquire',

    // Collection products
    'collection.product1.name': 'The Sovereign',
    'collection.product1.category': 'Leather Goods',
    'collection.product1.description': 'Hand-stitched Italian calfskin with signature gold hardware.',
    'collection.product2.name': 'Aura Noir',
    'collection.product2.category': 'Timepieces',
    'collection.product2.description': 'Swiss movement encased in brushed titanium with sapphire crystal.',
    'collection.product3.name': 'Éclat Reserve',
    'collection.product3.category': 'Fragrance',
    'collection.product3.description': 'Oud, amber, and black orchid — an intoxicating signature scent.',
    'collection.product4.name': 'The Monarch',
    'collection.product4.category': 'Accessories',
    'collection.product4.description': 'Precision-milled 18k gold cuff links with onyx inlay.',
    'collection.product5.name': 'Noir Silhouette',
    'collection.product5.category': 'Apparel',
    'collection.product5.description': 'Tailored midnight cashmere overcoat with satin lapels.',
    'collection.product6.name': 'The Vault',
    'collection.product6.category': 'Limited Edition',
    'collection.product6.description': 'Numbered collector pieces — available by invitation only.',

    // Custom Orders
    'custom.label': 'Beyond The Collection',
    'custom.heading': 'Custom Orders',
    'custom.description': 'For those seeking something truly unique. A bespoke service that transforms vision into form, guided by the same uncompromising standards that define Martinez M.13.',
    'custom.feature1.title': 'Bespoke Design',
    'custom.feature1.description': 'Creations developed in close collaboration, from initial concept to final execution — every detail carefully considered to reflect your identity.',
    'custom.feature2.title': 'Material Selection',
    'custom.feature2.description': "Choose from an exclusive portfolio of premium materials, sourced from the finest suppliers.",
    'custom.feature3.title': 'Master Craftsmanship',
    'custom.feature3.description': 'Each piece is carefully handcrafted with absolute attention to detail, where precision and technique come together to deliver an impeccable final result.',
    'custom.cta.title': 'Begin Your Bespoke Journey',
    'custom.cta.description': 'Share your vision with us directly. Every custom order begins with a conversation.',
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
