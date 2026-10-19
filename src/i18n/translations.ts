export type Language = 'pt' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.collection': 'Coleções',
    'nav.custom': 'Encomendas Personalizadas',
    'nav.contact': 'Contacto',

    // Hero
    'hero.preTitle': 'Coleções de Referência',
    'hero.brand': 'M',
    'hero.subBrand': 'Signature',
    'hero.tagline': 'Elegância Premium',
    'hero.viewCollection': 'Ver Coleção',
    'hero.whatsapp': 'WhatsApp',
    'hero.scroll': 'Rolar',

    // WhatsApp messages
    'whatsapp.hero': 'Olá M Signature, tenho interesse na vossa coleção.',
    'whatsapp.custom': 'Olá! Gostaria de ter mais informações sobre os serviços de personalização da M Signature.',
    'whatsapp.product': 'Olá, tenho interesse em saber mais sobre',
    'whatsapp.contact': 'Olá M Signature, gostaria de saber mais.',

    // About
    'about.label': 'A Casa',
    'about.heading': 'O Nosso Legado',
    'about.story1': 'Nascida da paixão pelo desenho, da exploração da textura e da vontade de transformar superfícies em peças únicas',
    'about.story2': 'A M Signature nasceu da paixão pelo desenho e da vontade de transformar ideias em peças físicas capazes de dar uma nova identidade aos espaços.',
    'about.story3': 'Cada criação percorre um processo cuidado, onde o desenho, o relevo, a textura e o acabamento se unem para criar peças verdadeiramente únicas. Mais do que elementos decorativos, são superfícies pensadas para marcar presença e contar uma história.',
    'about.accent': 'Guiada pela ambição, pela irreverência e pela atenção ao detalhe, a M Signature procura desafiar o convencional e apresentar uma nova forma de interpretar o design modular para interiores.',

    // Collection
    'collection.label': 'Peças Assinatura',
    'collection.heading': 'A Coleção',
    'collection.description': 'Paredes modulares e painéis concebidos para elevar os espaços através da textura e do design. Cada projeto representa um compromisso com a qualidade, criado para durar e inspirar ao longo do tempo.',
    'collection.note': 'Cada peça é produzida exclusivamente por encomenda, garantindo um resultado único.\n Mesmo dentro da mesma coleção, não existem duas peças exatamente iguais.',
    'collection.inquire': 'Consultar',
    'collection.back': 'Coleções',

    // Collections
    'collection.col1.name': 'Coleção Painéis',
    'collection.col1.description': 'Painéis decorativos em relevo, onde cada traço é uma declaração.',

    'collection.col1.product1.name': 'Atlas',
    'collection.col1.product1.description':
      'O peso da grandeza.\n\n' +
      'Inspirado na figura mitológica condenada a sustentar os céus, Atlas representa força, resistência e a capacidade de carregar grandes responsabilidades sem ceder perante o seu peso.\n\n' +
      'Na composição, a figura emerge da própria matéria enquanto sustenta o mundo sobre os ombros. A tensão do corpo, a escala do globo e a textura rochosa que envolve toda a peça criam uma presença escultórica poderosa, onde cada elemento transmite esforço, determinação e domínio.\n\n' +
      'Atlas é uma homenagem a quem escolhe carregar mais para alcançar mais.\n\n' +
      'Uma peça concebida para espaços de liderança, decisão e ambição — escritórios executivos, salas de reunião e interiores onde a arte deve transmitir tanto quanto a própria arquitetura.\n\n' +
      'O seu relevo tridimensional intensifica a interação entre matéria e luz, revelando progressivamente a força dos volumes e conferindo à peça uma presença monumental.\n\n' +
      'Porque grandes conquistas exigem força para suportar o seu peso.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product2.name': 'Ascension',
    'collection.col1.product2.description':
      'Elevar-se para além dos limites.\n\n' +
      'Ascension representa o instante em que a matéria dá lugar à elevação.\n\n' +
      'Uma figura alada emerge da pedra, rompendo a superfície que a envolve e elevando-se acima dela. As asas abertas dominam a composição, criando uma imagem de força e liberdade onde luz, matéria e movimento parecem convergir num único momento.\n\n' +
      'A peça simboliza superação, transformação e transcendência — a capacidade de abandonar aquilo que nos limita e procurar algo maior.\n\n' +
      'O profundo trabalho de relevo confere às asas uma presença escultórica marcante, enquanto as fraturas da superfície reforçam a sensação de que a figura não foi colocada sobre a pedra: nasceu dela e rompeu-a para se libertar.\n\n' +
      'Concebido para interiores onde a arte assume um significado para além da estética, Ascension transforma a parede num símbolo de evolução e conquista pessoal.\n\n' +
      'Ascension. Não fomos feitos para permanecer onde começámos.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product3.name': 'Portucale',
    'collection.col1.product3.description':
      'A força de uma origem.\n\n' +
      'Portucale é uma celebração de identidade, território e pertença.\n\n' +
      'Da superfície marcada pela matéria emerge a silhueta de Portugal, esculpida em relevo como se sempre tivesse pertencido à própria pedra. Uma composição onde território e matéria se tornam um só, evocando a permanência de uma identidade construída através de séculos de história.\n\n' +
      'O nome Portucale remete às origens do território que viria a tornar-se Portugal — uma referência ao passado transformada numa peça de expressão contemporânea.\n\n' +
      'O relevo pronunciado e a textura mineral conferem profundidade à obra, enquanto a interação com a luz revela progressivamente os seus contornos e irregularidades.\n\n' +
      'Concebido para residências, escritórios, empresas e espaços onde a identidade portuguesa merece assumir uma presença distinta.\n\n' +
      'Portucale. A terra muda. A origem permanece.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product4.name': 'Redemption',
    'collection.col1.product4.description':
      'Da dor nasce a redenção.\n\n' +
      'Redemption é uma representação de sacrifício, fé e esperança.\n\n' +
      'Ao centro da composição, Cristo emerge da matéria coroado de espinhos, envolvido por um relevo que se expande à sua volta como uma manifestação de luz. A expressão serena perante o sofrimento transforma a peça num poderoso contraste entre dor e paz, fragilidade e força, sacrifício e eternidade.\n\n' +
      'Cada elemento remete para uma das mensagens mais profundas da tradição cristã: a redenção através do sacrifício e a esperança que permanece mesmo nos momentos mais sombrios.\n\n' +
      'Esculpida em profundo relevo, a composição ganha uma presença quase monumental. A incidência da luz percorre as diferentes camadas da peça, acentuando os volumes e revelando progressivamente os detalhes da figura e da matéria que a envolve.\n\n' +
      'Redemption foi concebido para quem procura mais do que uma obra decorativa — para quem deseja que a arte presente no seu espaço seja também uma expressão de fé, memória e significado.\n\n' +
      'Redemption. O sacrifício termina. A esperança permanece.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product5.name': 'Terra',
    'collection.col1.product5.description':
      'O mundo como horizonte.\n\n' +
      'Terra transforma a representação do mundo numa peça escultórica de presença monumental.\n\n' +
      'Os continentes emergem de uma superfície de inspiração mineral, como se tivessem sido esculpidos diretamente na própria matéria. O relevo, as irregularidades e a profundidade da composição afastam-se da representação tradicional de um mapa para criar uma interpretação mais arquitetónica, intemporal e imponente do planeta.\n\n' +
      'Concebido para espaços que refletem ambição, visão e conquista, Terra encontra o seu lugar natural em escritórios executivos, salas de reunião, espaços empresariais e interiores contemporâneos de carácter distinto.\n\n' +
      'A incidência da luz sobre o relevo acentua os contornos e transforma a perceção da peça ao longo do dia, reforçando a sua dimensão escultórica.\n\n' +
      'Terra é para quem não vê fronteiras. Vê possibilidades.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product6.name': 'Vigilis',
    'collection.col1.product6.description':
      'Presença. Visão. Poder.\n\n' +
      'Vigilis nasce da ideia de que o verdadeiro poder não precisa de se anunciar — basta estar presente.\n\n' +
      'A composição cria uma sensação permanente de vigilância e domínio, transformando o espaço à sua volta e atraindo inevitavelmente o olhar de quem entra.\n\n' +
      'Mais do que um elemento decorativo, Vigilis é uma peça de presença. Concebido para ambientes onde arquitetura e identidade se encontram, assume particular força em salas de reunião, escritórios executivos, espaços empresariais e interiores contemporâneos de carácter marcante.\n\n' +
      'O relevo tridimensional reage à iluminação ao longo do dia, revelando diferentes profundidades, sombras e detalhes conforme o ponto de observação.\n\n' +
      'Vigilis não ocupa simplesmente uma parede. Impõe-se sobre ela.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product7.name': 'Lux Marie',
    'collection.col1.product7.description':
      'Uma expressão de fé, luz e elegância intemporal.\n\n' +
      'Lux Marie é uma homenagem a Nossa Senhora, figura maior da devoção cristã e símbolo de pureza, esperança e proteção.\n\n' +
      'De mãos unidas em oração e olhar sereno, Nossa Senhora emerge no centro da composição, envolta por um halo radiante esculpido na própria pedra. O manto, delicadamente trabalhado e pontuado por estrelas, desce em pregas suaves que se fundem com o relevo envolvente.\n\n' +
      'À sua volta, a pedra ondula em camadas orgânicas, como raios de luz que se propagam a partir da figura, conferindo à peça movimento, profundidade e uma forte presença escultórica.\n\n' +
      'Cada detalhe evoca recolhimento, esperança e devoção, transformando este painel numa peça de arte sacra de forte simbolismo e identidade.\n\n' +
      'Lux Marie transcende a decoração, tornando-se uma presença intemporal que confere elegância, serenidade e significado a qualquer espaço.\n\n' +
      'Lux Marie. Onde a fé se torna luz.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product8.name': 'Pater Aeternus',
    'collection.col1.product8.description':
      'O amor que sustenta a eternidade.\n\n' +
      'Pater Aeternus é uma celebração do amor divino, da proteção e do vínculo eterno entre Pai e Filho.\n\n' +
      'No centro da composição, Deus Pai acolhe o Menino Jesus nos seus braços, num gesto de ternura e proteção que contrasta com a imponência da matéria que os envolve. A serenidade dos rostos e a delicadeza do abraço revelam uma dimensão profundamente humana do amor celestial.\n\n' +
      'Por detrás das figuras, a cruz emerge como símbolo de fé, sacrifício e redenção, estabelecendo uma ligação entre a inocência do Menino Jesus e o destino espiritual que marcaria a história do cristianismo.\n\n' +
      'O profundo relevo tridimensional confere à composição uma presença escultórica monumental. As formas orgânicas da pedra, a riqueza dos detalhes e os contrastes de profundidade transformam a peça numa expressão artística de espiritualidade e devoção.\n\n' +
      'Concebido para espaços onde a arte transcende a decoração, Pater Aeternus representa a força de um amor incondicional, capaz de atravessar o tempo e permanecer para além da própria existência.\n\n' +
      'Pater Aeternus. Nos braços do Pai, a eternidade encontra o amor.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product9.name': 'Cena Domini',
    'collection.col1.product9.description':
      'A presença que permanece.\n\n' +
      'Cena Domini é uma interpretação escultórica de um dos momentos mais marcantes da história do cristianismo: a Última Ceia.\n\n' +
      'Numa composição onde a ausência humana se transforma em presença espiritual, a mesa permanece preparada, evocando o instante sagrado em que Cristo partilhou o pão e o vinho com os seus discípulos.\n\n' +
      'Cada elemento carrega um significado profundo. O pão representa a entrega, o vinho simboliza o sacrifício e a mesa torna-se uma expressão de comunhão, fé e amor incondicional.\n\n' +
      'Ao fundo, a luz emerge de uma composição arquitetónica de inspiração sagrada, conferindo à obra uma atmosfera de serenidade e transcendência.\n\n' +
      'A riqueza do relevo tridimensional, presente nas dobras dos tecidos, nos elementos da mesa e na textura mineral envolvente, transforma a cena numa peça escultórica de carácter intemporal.\n\n' +
      'Cena Domini não representa apenas uma mesa vazia. Representa uma presença que nunca deixou de existir.\n\n' +
      'Concebida para interiores onde a arte e a espiritualidade se encontram, esta peça convida à contemplação e à reflexão sobre o verdadeiro significado da fé, da partilha e da eternidade.\n\n' +
      'Cena Domini. A mesa permanece. A fé também.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col1.product10.name': 'Noctis',
    'collection.col1.product10.description':
      'O chamamento da eternidade.\n\n' +
      'Noctis nasce do encontro entre a força indomável da natureza e o mistério silencioso do universo.\n\n' +
      'Numa paisagem onde a realidade parece aproximar-se do extraordinário, uma Lua monumental ergue-se sobre um horizonte de montanhas, revelando uma superfície marcada por crateras, fissuras e formações esculpidas pelo tempo.\n\n' +
      'No primeiro plano, um lobo solitário eleva o seu olhar aos céus, deixando escapar um chamamento que parece atravessar a imensidão da noite.\n\n' +
      'A composição transforma este instante numa representação escultórica de liberdade, instinto e ligação à natureza.\n\n' +
      'Noctis é uma homenagem ao espírito indomável, àqueles que encontram na solidão não uma ausência, mas uma forma de liberdade.\n\n' +
      'A grandiosidade da Lua contrasta com a presença singular do lobo, criando um equilíbrio entre a imensidão do universo e a determinação de quem permanece firme perante o desconhecido.\n\n' +
      'O relevo tridimensional confere à obra uma profundidade extraordinária. As irregularidades da superfície lunar, as formações rochosas e os detalhes da figura animal estabelecem diferentes planos escultóricos, enquanto a incidência da luz revela novas texturas, sombras e contrastes.\n\n' +
      'Concebido para interiores sofisticados, onde a arte assume um papel central na identidade do espaço, Noctis transforma uma parede numa paisagem de contemplação, mistério e imponência.\n\n' +
      'Mais do que uma representação da natureza, esta criação procura despertar uma sensação universal: o desejo de liberdade, a coragem de seguir o próprio caminho e a necessidade de encontrar o nosso lugar perante a imensidão do mundo.\n\n' +
      'Noctis — Há vozes que só a noite consegue ouvir.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.name': 'Coleção Paredes Modulares',
    'collection.col2.description': 'Paredes modulares para interiores únicos.',

    'collection.col2.product1.name': 'Quartzite Drift',
    'collection.col2.product1.description':
      'Geologia em movimento.\n\n' +
      'Quartzite Drift interpreta a irregularidade das grandes formações de quartzito através de uma superfície modular marcada por fragmentos, sobreposições e diferentes níveis de profundidade.\n\n' +
      'As formas percorrem a parede numa direção predominantemente vertical, criando um ritmo orgânico que quebra a rigidez da arquitetura e introduz no interior a sensação de uma formação rochosa monumental.\n\n' +
      'Cada módulo integra-se na composição seguinte, permitindo que a textura se prolongue pela superfície e seja percecionada como uma única formação contínua.\n\n' +
      'A incidência da luz revela gradualmente as diferentes camadas do relevo, fazendo com que a parede adquira novas expressões conforme o ambiente e o ponto de observação.\n\n' +
      'Quartzite Drift. A natureza não desenha linhas perfeitas. \n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.product2.name': 'Stone Monolit',
    'collection.col2.product2.description':
      'Presença em estado bruto.\n\n' +
      'Stone Monolith é a expressão mais intensa e dramática da nossa interpretação da pedra.\n\n' +
      'Inspirado em grandes formações rochosas e superfícies esculpidas pela erosão, apresenta um relevo profundo e irregular, composto por sucessivas camadas de matéria que conferem à parede uma presença quase monumental.\n\n' +
      'O sistema modular permite expandir esta linguagem por grandes superfícies, transformando uma parede convencional numa formação escultórica integrada na própria arquitetura.\n\n' +
      'A sua profundidade torna a iluminação parte essencial da experiência visual: a luz percorre os diferentes níveis da superfície, revelando volumes, cavidades e texturas que alteram constantemente a perceção da composição.\n\n' +
      'Concebido para espaços onde a parede não deve desaparecer na arquitetura — deve tornar-se protagonista.\n\n' +
      'Stone Monolith. Monumental por natureza.  \n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.product3.name': 'Stone Origins',
    'collection.col2.product3.description':
      'Regresso à essência da matéria.\n\n' +
      'Stone Origins nasce da forma mais elementar da pedra: grandes superfícies fraturadas, separadas por linhas profundas e irregulares que parecem resultar de movimentos naturais da própria matéria.\n\n' +
      'A composição privilegia volumes amplos e uma linguagem visual mais serena, permitindo criar paredes monumentais sem sobrecarregar o espaço.\n\n' +
      'O sistema modular transforma diferentes elementos numa superfície contínua, onde as transições e fraturas fazem parte de uma composição maior.\n\n' +
      'Minimalista na forma, mas profundamente marcada pela textura e pelo relevo, Stone Origins estabelece uma ligação entre arquitetura contemporânea e a natureza no seu estado mais primordial.\n\n' +
      'Stone Origins. Tudo começa na matéria.  \n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.product4.name': 'Strata Veil',
    'collection.col2.product4.description':
      'A pedra transformada em movimento.\n\n' +
      'Strata Veil é um sistema de parede modular inspirado nas formações rochosas criadas pela sobreposição e transformação de diferentes estratos ao longo do tempo.\n\n' +
      'A sua composição vertical combina volumes profundos, superfícies fragmentadas e linhas orgânicas que percorrem toda a parede, criando a sensação de grandes lâminas de pedra que emergem umas das outras.\n\n' +
      'Mais do que revestir uma superfície, Strata Veil transforma a própria parede numa peça escultórica.\n\n' +
      'A continuidade entre os diferentes módulos permite criar composições de grande escala, enquanto o relevo tridimensional reage à iluminação e acentua constantemente novas profundidades, formas e contrastes.\n\n' +
      'Concebido para interiores contemporâneos onde a arquitetura procura aproximar-se da força e da imperfeição da natureza.\n\n' +
      'Strata Veil. Camadas de matéria. Esculpidas pelo tempo.  \n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.product5.name': 'Aeterna',
    'collection.col2.product5.description':
      'Onde a natureza encontra a eternidade.\n\n' +
      'Aeterna nasce da imponência das grandes formações montanhosas, onde a força da natureza e a passagem do tempo se encontram numa expressão de beleza intemporal.\n\n' +
      'Inspirada na grandiosidade das paisagens alpinas, esta parede modular transforma a monumentalidade das montanhas numa composição escultórica de extraordinária profundidade. Picos imponentes, encostas fragmentadas e sucessivas camadas de relevo desenham uma paisagem que parece emergir da própria arquitetura, criando um equilíbrio singular entre a força da matéria e a elegância do espaço.\n\n' +
      'Cada elevação, cada irregularidade e cada transição entre os diferentes planos foram concebidas para transmitir movimento, dimensão e autenticidade. A interação entre luz e sombra percorre as superfícies tridimensionais, revelando novos detalhes e perspetivas à medida que a iluminação se transforma.\n\n' +
      'Aeterna representa mais do que uma paisagem. É uma expressão de permanência, liberdade e grandeza.\n\n' +
      'As montanhas, símbolos ancestrais de resistência e superação, assumem aqui uma interpretação contemporânea, onde a natureza deixa de ser apenas contemplada para se tornar parte integrante do ambiente.\n\n' +
      'Desenvolvida através de um sistema modular, esta composição permite transformar grandes superfícies numa obra escultórica contínua, integrando-se na arquitetura com uma presença simultaneamente monumental e sofisticada.\n\n' +
      'Concebida para interiores de carácter distinto, desde suítes de luxo e residências contemporâneas até espaços de hospitalidade exclusivos, Aeterna estabelece uma relação única entre arte, natureza e arquitetura.\n\n' +
      'Uma criação destinada a quem procura ultrapassar os limites da decoração convencional e transformar o seu espaço numa experiência visual verdadeiramente singular.\n\n' +
      'Aeterna — Há grandezas que o tempo não consegue apagar.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

    'collection.col2.product6.name': 'Lunaris',
    'collection.col2.product6.description':
      'A eternidade esculpida no silêncio.\n\n' +
      'Lunaris nasce do fascínio pelo desconhecido, da beleza dos mundos distantes e da imponência silenciosa de uma paisagem que permanece praticamente intocada pelo tempo.\n\n' +
      'Inspirada na superfície lunar, esta parede modular transporta para a arquitetura contemporânea uma interpretação escultórica de um dos cenários mais enigmáticos do universo.\n\n' +
      'Grandes crateras, depressões profundas, fissuras irregulares e sucessivas formações geológicas desenham uma composição de extraordinária riqueza visual, onde cada detalhe evoca a história de um território moldado por milhões de anos de impactos e transformações.\n\n' +
      'Lunaris não procura simplesmente reproduzir a Lua. Procura transformar a sua essência numa experiência arquitetónica.\n\n' +
      'A superfície tridimensional estabelece um diálogo permanente com a iluminação. A luz percorre as extremidades das crateras, revela a profundidade das cavidades e acentua as irregularidades do relevo, criando um jogo de contrastes que transforma a perceção da parede ao longo do dia.\n\n' +
      'O equilíbrio entre as grandes formações circulares e a natureza imprevisível das fissuras confere à composição uma identidade simultaneamente orgânica, monumental e futurista.\n\n' +
      'Desenvolvida através de um sistema modular, Lunaris permite transformar grandes superfícies numa paisagem escultórica contínua, ultrapassando os limites dos revestimentos decorativos tradicionais.\n\n' +
      'Concebida para residências de luxo, espaços de arquitetura contemporânea, ambientes de hospitalidade exclusivos e interiores onde a singularidade assume um papel central, esta criação estabelece uma ligação inesperada entre a matéria, o espaço e o universo.\n\n' +
      'Mais do que uma parede, Lunaris representa uma viagem visual para além do nosso mundo. Uma obra que desperta a curiosidade, convida à contemplação e transforma o desconhecido numa expressão de beleza intemporal.\n\n' +
      'Lunaris — Um fragmento de outro mundo. Uma presença impossível de ignorar.\n\n' +
      'Nota: A iluminação apresentada nas imagens é meramente ilustrativa e não está atualmente incluída nem disponível para fornecimento com esta peça.\n\n' +
      'Cada modelo é apresentado numa dimensão standard, cuidadosamente definida para preservar as proporções e o impacto visual da peça. Pretende uma dimensão diferente? Todos os nossos modelos podem ser produzidos por medida. Entre em contacto connosco e indique as dimensões pretendidas para avaliarmos a produção de uma versão personalizada para o seu espaço.',

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
    'contact.description': 'Se procura uma peça exclusiva, pretende desenvolver um projeto personalizado ou simplesmente conhecer melhor a M Signature, teremos todo o gosto em falar consigo.',
    'contact.whatsapp.label': 'WhatsApp',
    'contact.whatsapp.value': 'Converse Connosco',
    'contact.whatsapp.description': 'Conversa direta — resposta imediata',
    'contact.email.label': 'Email',
    'contact.email.value': 'geralmsignature@gmail.com',
    'contact.email.description': 'Rápida resposta ao seu pedido',
    'contact.instagram.label': 'Instagram',
    'contact.instagram.value': '@M._signature',
    'contact.instagram.description': 'Siga as nossas criações mais recentes',
    'contact.location': 'Mediante Agendamento — Mundial',

    // Footer
    'footer.tagline': 'Elegância Premium',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.credit': 'Crafted by Web Step.',
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.collection': 'Collections',
    'nav.custom': 'Custom Orders',
    'nav.contact': 'Contact',

    // Hero
    'hero.preTitle': 'Established Collections',
    'hero.brand': 'M',
    'hero.subBrand': 'SIGNATURE',
    'hero.tagline': 'Premium Elegance',
    'hero.viewCollection': 'View Collection',
    'hero.whatsapp': 'WhatsApp',
    'hero.scroll': 'Scroll',

    // WhatsApp messages
    'whatsapp.hero': 'Hello M Signature, I am interested in your collection.',
    'whatsapp.custom': "Hello! I would like more information about M Signature's custom services.",
    'whatsapp.product': 'Hello, I am interested in learning more about',
    'whatsapp.contact': 'Hello M Signature, I would like to know more.',

    // About
    'about.label': 'The House',
    'about.heading': 'Our Legacy',
    'about.story1': 'Born from a passion for design, the exploration of texture, and the desire to transform surfaces into unique pieces.',
    'about.story2': 'M Signature was born from a passion for design and the desire to turn ideas into physical pieces capable of giving spaces a new identity.',
    'about.story3': 'Each creation follows a careful process, where drawing, relief, texture, and finish come together to create truly unique pieces. More than decorative elements, they are surfaces designed to make a statement and tell a story.',
    'about.accent': 'Driven by ambition, irreverence, and attention to detail, M Signature seeks to challenge convention and present a new way of interpreting modular design for interiors.',

    // Collection
    'collection.label': 'Signature Pieces',
    'collection.heading': 'The Collection',
    'collection.description': 'Modular walls and panels designed to transform interiors through texture, depth, and timeless design. Every project reflects our commitment to exceptional craftsmanship and enduring quality, creating spaces that inspire for years to come.',
    'collection.note': 'Each piece is produced exclusively to order, ensuring a unique result.\n Even within the same collection, no two pieces are ever exactly alike.',
    'collection.inquire': 'Inquire',
    'collection.back': 'Collections',

    // Collections
    'collection.col1.name': 'Panels Collection',
    'collection.col1.description': 'Decorative relief panels — where every line is a statement.',

    'collection.col1.product1.name': 'Atlas',
    'collection.col1.product1.description':
      'The weight of greatness.\n\n' +
      'Inspired by the mythological figure condemned to hold up the heavens, Atlas embodies strength, endurance, and the ability to carry great responsibility without bending under its weight.\n\n' +
      'In the composition, the figure rises from the stone itself as it bears the world on its shoulders. The tension in the body, the scale of the globe, and the rugged texture surrounding the piece come together in a powerful sculptural presence, where every detail speaks of effort, determination, and command.\n\n' +
      'Atlas is a tribute to those who choose to carry more in order to achieve more.\n\n' +
      'A piece designed for spaces of leadership, decision-making, and ambition — executive offices, boardrooms, and interiors where art should speak as powerfully as the architecture itself.\n\n' +
      'Its three-dimensional relief deepens the interplay between material and light, gradually revealing the strength of its forms and giving the piece a monumental presence.\n\n' +
      'Because great achievements demand the strength to carry their weight.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product2.name': 'Ascension',
    'collection.col1.product2.description':
      'Rising beyond limits.\n\n' +
      'Ascension captures the moment matter gives way to elevation.\n\n' +
      'A winged figure emerges from the stone, breaking through the surface that surrounds it and rising above. Its open wings dominate the composition, creating an image of strength and freedom where light, material, and movement converge in a single instant.\n\n' +
      'The piece symbolizes overcoming, transformation, and transcendence — the ability to let go of what holds us back and reach for something greater.\n\n' +
      "The deep relief work gives the wings a striking sculptural presence, while the fractures across the surface reinforce the sense that the figure wasn't placed on the stone — it was born from it, breaking free.\n\n" +
      'Designed for interiors where art carries meaning beyond aesthetics, Ascension turns the wall into a symbol of personal growth and achievement.\n\n' +
      'Ascension. We were never meant to stay where we began.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product3.name': 'Portucale',
    'collection.col1.product3.description':
      'The strength of an origin.\n\n' +
      'Portucale is a celebration of identity, land, and belonging.\n\n' +
      'From a surface shaped by raw material, the silhouette of Portugal emerges in relief, as though it had always belonged to the stone itself. A composition where land and material become one, evoking an identity built and preserved through centuries of history.\n\n' +
      'The name Portucale traces back to the origins of the territory that would become Portugal — a nod to the past, reimagined as a piece of contemporary expression.\n\n' +
      'The pronounced relief and mineral texture give the work depth, while the play of light gradually reveals its contours and irregularities.\n\n' +
      'Designed for homes, offices, businesses, and spaces where Portuguese identity deserves a distinctive presence.\n\n' +
      'Portucale. The land changes. The origin remains.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product4.name': 'Redemption',
    'collection.col1.product4.description':
      'From suffering, redemption is born.\n\n' +
      'Redemption is a portrayal of sacrifice, faith, and hope.\n\n' +
      "At the center of the composition, Christ emerges from the stone crowned with thorns, surrounded by a relief that radiates outward like a burst of light. His serene expression amid suffering creates a powerful contrast between pain and peace, fragility and strength, sacrifice and eternity.\n\n" +
      "Every detail speaks to one of Christianity's deepest messages: redemption through sacrifice, and the hope that endures even in the darkest moments.\n\n" +
      'Carved in deep relief, the composition takes on an almost monumental presence. As light moves across its layers, it heightens the volumes and gradually reveals the details of the figure and the material surrounding it.\n\n' +
      'Redemption was created for those seeking more than a decorative piece — for those who want the art in their space to also be an expression of faith, memory, and meaning.\n\n' +
      'Redemption. The suffering ends. The hope remains.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product5.name': 'Terra',
    'collection.col1.product5.description':
      'The world as horizon.\n\n' +
      'Terra reimagines the map of the world as a sculptural piece of monumental presence.\n\n' +
      'The continents rise from a stone-like surface, as though carved directly from the material itself. Its relief, irregularities, and depth move beyond the traditional map to create a more architectural, timeless, and commanding interpretation of the planet.\n\n' +
      'Designed for spaces that reflect ambition, vision, and achievement, Terra feels at home in executive offices, boardrooms, corporate spaces, and contemporary interiors with a distinctive character.\n\n' +
      "As light plays across the relief, it sharpens the contours and reshapes the piece's presence throughout the day, heightening its sculptural depth.\n\n" +
      'Terra is for those who see no borders. Only possibilities.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product6.name': 'Vigilis',
    'collection.col1.product6.description':
      "Presence. Vision. Power.\n\n" +
      "Vigilis is built on a simple idea: true power doesn't need to announce itself — it only needs to be present.\n\n" +
      'The composition creates a constant sense of watchfulness and command, reshaping the space around it and drawing the eye of everyone who enters.\n\n' +
      'More than a decorative element, Vigilis is a piece defined by presence. Designed for environments where architecture and identity meet, it holds particular force in boardrooms, executive offices, corporate spaces, and contemporary interiors with a strong character.\n\n' +
      "Its three-dimensional relief responds to light throughout the day, revealing different depths, shadows, and details depending on the angle from which it's viewed.\n\n" +
      "Vigilis doesn't simply occupy a wall. It takes command of it.\n\n" +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product7.name': 'Lux Marie',
    'collection.col1.product7.description':
      'An expression of faith, light, and timeless elegance.\n\n' +
      'Lux Marie is a tribute to Our Lady, a central figure of Christian devotion and a symbol of purity, hope, and protection.\n\n' +
      'With hands joined in prayer and a serene gaze, Our Lady emerges at the heart of the composition, framed by a radiant halo carved into the stone itself. Her mantle, delicately worked and adorned with stars, falls in soft folds that merge with the surrounding relief.\n\n' +
      'Around her, the stone ripples in organic layers, like rays of light spreading outward from the figure, giving the piece movement, depth, and a powerful sculptural presence.\n\n' +
      'Every detail evokes contemplation, hope, and devotion, turning this panel into a work of sacred art with powerful symbolism and identity.\n\n' +
      'Lux Marie transcends decoration, becoming a timeless presence that brings elegance, serenity, and meaning to any space.\n\n' +
      'Lux Marie. Where faith becomes light.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product8.name': 'Pater Aeternus',
    'collection.col1.product8.description':
      'The love that sustains eternity.\n\n' +
      'Pater Aeternus is a celebration of divine love, protection, and the eternal bond between Father and Son.\n\n' +
      'At the heart of the composition, God the Father holds the Child Jesus in His arms, in a gesture of tenderness and protection that contrasts with the grandeur of the material surrounding them. The serenity of their faces and the delicacy of the embrace reveal a deeply human dimension of heavenly love.\n\n' +
      'Behind the figures, the cross emerges as a symbol of faith, sacrifice, and redemption, linking the innocence of the Child Jesus to the spiritual destiny that would shape the history of Christianity.\n\n' +
      'The deep three-dimensional relief gives the composition a monumental sculptural presence. The organic forms of the stone, the richness of detail, and the contrasts of depth turn the piece into an artistic expression of spirituality and devotion.\n\n' +
      'Designed for spaces where art transcends decoration, Pater Aeternus embodies the strength of unconditional love, able to cross time and endure beyond existence itself.\n\n' +
      "Pater Aeternus. In the Father's arms, eternity meets love.\n\n" +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product9.name': 'Cena Domini',
    'collection.col1.product9.description':
      'The presence that remains.\n\n' +
      'Cena Domini is a sculptural interpretation of one of the most defining moments in the history of Christianity: the Last Supper.\n\n' +
      'In a composition where human absence becomes spiritual presence, the table remains set, evoking the sacred moment when Christ shared bread and wine with His disciples.\n\n' +
      'Every element carries deep meaning. The bread represents self-giving, the wine symbolizes sacrifice, and the table becomes an expression of communion, faith, and unconditional love.\n\n' +
      'In the background, light emerges from an architectural composition of sacred inspiration, giving the work an atmosphere of serenity and transcendence.\n\n' +
      'The richness of the three-dimensional relief — in the folds of the fabric, the elements on the table, and the surrounding mineral texture — turns the scene into a sculptural piece of timeless character.\n\n' +
      'Cena Domini does not depict merely an empty table. It depicts a presence that never ceased to exist.\n\n' +
      'Designed for interiors where art and spirituality meet, this piece invites contemplation and reflection on the true meaning of faith, sharing, and eternity.\n\n' +
      'Cena Domini. The table remains. So does faith.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col1.product10.name': 'Noctis',
    'collection.col1.product10.description':
      'The call of eternity.\n\n' +
      'Noctis is born from the meeting of the untamed force of nature and the silent mystery of the universe.\n\n' +
      'In a landscape where reality seems to draw close to the extraordinary, a monumental Moon rises above a horizon of mountains, revealing a surface marked by craters, fissures, and formations sculpted by time.\n\n' +
      'In the foreground, a lone wolf lifts its gaze to the sky, releasing a call that seems to travel across the vastness of the night.\n\n' +
      'The composition turns this instant into a sculptural portrayal of freedom, instinct, and connection with nature.\n\n' +
      'Noctis is a tribute to the untamed spirit, to those who find in solitude not an absence, but a form of freedom.\n\n' +
      'The grandeur of the Moon contrasts with the singular presence of the wolf, striking a balance between the vastness of the universe and the resolve of those who stand firm before the unknown.\n\n' +
      'The three-dimensional relief gives the work extraordinary depth. The irregularities of the lunar surface, the rock formations, and the details of the animal figure create distinct sculptural planes, while the play of light reveals new textures, shadows, and contrasts.\n\n' +
      'Designed for sophisticated interiors where art plays a central role in the identity of the space, Noctis turns a wall into a landscape of contemplation, mystery, and grandeur.\n\n' +
      "More than a depiction of nature, this creation seeks to awaken a universal feeling: the desire for freedom, the courage to follow one's own path, and the need to find our place in the vastness of the world.\n\n" +
      'Noctis — Some voices only the night can hear.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.name': 'Modular Walls Collection',
    'collection.col2.description': 'Modular wall panels for unique interiors.',

    'collection.col2.product1.name': 'Quartzite Drift',
    'collection.col2.product1.description':
      'Geology in motion.\n\n' +
      'Quartzite Drift interprets the irregularity of large quartzite formations through a modular surface marked by fragments, overlaps, and varying levels of depth.\n\n' +
      'Its forms travel the wall in a predominantly vertical direction, creating an organic rhythm that breaks the rigidity of architecture and introduces the feeling of a monumental rock formation into the interior.\n\n' +
      'Each module integrates seamlessly into the next, allowing the texture to extend across the surface and be perceived as a single continuous formation.\n\n' +
      'The play of light gradually reveals the different layers of the relief, giving the wall new expressions as the environment and point of observation change.\n\n' +
      'Quartzite Drift. Nature never draws straight lines. \n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.product2.name': 'Stone Monolith',
    'collection.col2.product2.description':
      'Presence in its rawest form.\n\n' +
      'Stone Monolith is the most intense and dramatic expression of our interpretation of stone.\n\n' +
      'Inspired by large rock formations and surfaces carved by erosion, it features a deep, irregular relief composed of successive layers of material that give the wall an almost monumental presence.\n\n' +
      'The modular system allows this language to expand across large surfaces, transforming a conventional wall into a sculptural formation integrated into the architecture itself.\n\n' +
      'Its depth makes lighting an essential part of the visual experience: light travels across the different levels of the surface, revealing volumes, cavities, and textures that constantly shift the perception of the composition.\n\n' +
      "Designed for spaces where the wall shouldn't fade into the architecture — it should become the protagonist.\n\n" +
      'Stone Monolith. Monumental by nature. \n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.product3.name': 'Stone Origins',
    'collection.col2.product3.description':
      'A return to the essence of material.\n\n' +
      'Stone Origins begins with the most elemental form of stone: large fractured surfaces, separated by deep, irregular lines that seem to result from the natural movement of the material itself.\n\n' +
      'The composition favors broad volumes and a more serene visual language, allowing monumental walls to be created without overwhelming the space.\n\n' +
      'The modular system brings together different elements into a continuous surface, where transitions and fractures are part of a larger composition.\n\n' +
      'Minimal in form, yet deeply defined by texture and relief, Stone Origins establishes a connection between contemporary architecture and nature in its most primordial state.\n\n' +
      'Stone Origins. Everything begins in the material. \n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.product4.name': 'Strata Veil',
    'collection.col2.product4.description':
      'Stone transformed into movement.\n\n' +
      'Strata Veil is a modular wall system inspired by the rock formations created through the layering and transformation of different strata over time.\n\n' +
      'Its vertical composition combines deep volumes, fragmented surfaces, and organic lines that travel the full length of the wall, creating the sensation of great slabs of stone emerging from one another.\n\n' +
      'More than a surface covering, Strata Veil transforms the wall itself into a sculptural piece.\n\n' +
      'The continuity between modules allows for large-scale compositions, while the three-dimensional relief responds to lighting and constantly reveals new depths, forms, and contrasts.\n\n' +
      'Designed for contemporary interiors where architecture seeks to draw closer to the strength and imperfection of nature.\n\n' +
      'Strata Veil. Layers of material. Sculpted by time.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.product5.name': 'Aeterna',
    'collection.col2.product5.description':
      'Where nature meets eternity.\n\n' +
      'Aeterna is born from the majesty of great mountain ranges, where the force of nature and the passage of time come together in an expression of timeless beauty.\n\n' +
      'Inspired by the grandeur of alpine landscapes, this modular wall turns the monumental scale of the mountains into a sculptural composition of extraordinary depth. Towering peaks, fractured slopes, and successive layers of relief trace a landscape that seems to rise from the architecture itself, striking a rare balance between the strength of the material and the elegance of the space.\n\n' +
      'Every rise, every irregularity, and every transition between planes has been designed to convey movement, scale, and authenticity. Light and shadow travel across the three-dimensional surfaces, revealing new details and perspectives as the lighting changes.\n\n' +
      'Aeterna is more than a landscape. It is an expression of permanence, freedom, and greatness.\n\n' +
      'Mountains, ancient symbols of endurance and perseverance, take on a contemporary interpretation here, where nature is no longer simply admired from afar but becomes an integral part of the space.\n\n' +
      'Built on a modular system, this composition turns large surfaces into a continuous sculptural work, blending into the architecture with a presence that is at once monumental and refined.\n\n' +
      'Designed for interiors of distinctive character, from luxury suites and contemporary residences to exclusive hospitality spaces, Aeterna creates a unique dialogue between art, nature, and architecture.\n\n' +
      'A creation for those who wish to go beyond the limits of conventional decoration and turn their space into a truly singular visual experience.\n\n' +
      'Aeterna — Some greatness not even time can erase.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    'collection.col2.product6.name': 'Lunaris',
    'collection.col2.product6.description':
      'Eternity sculpted in silence.\n\n' +
      'Lunaris is born from a fascination with the unknown, the beauty of distant worlds, and the silent majesty of a landscape left almost untouched by time.\n\n' +
      'Inspired by the lunar surface, this modular wall brings into contemporary architecture a sculptural interpretation of one of the most enigmatic landscapes in the universe.\n\n' +
      'Vast craters, deep depressions, irregular fissures, and successive geological formations create a composition of extraordinary visual richness, where every detail tells the story of a terrain shaped by millions of years of impacts and transformation.\n\n' +
      'Lunaris does not simply seek to reproduce the Moon. It seeks to transform its essence into an architectural experience.\n\n' +
      'The three-dimensional surface holds a constant dialogue with light. Light traces the rims of the craters, reveals the depth of the hollows, and accentuates the irregularities of the relief, creating a play of contrasts that changes how the wall is perceived throughout the day.\n\n' +
      'The balance between the great circular formations and the unpredictable nature of the fissures gives the composition an identity that is at once organic, monumental, and futuristic.\n\n' +
      'Built on a modular system, Lunaris turns large surfaces into a continuous sculptural landscape, going beyond the limits of traditional decorative cladding.\n\n' +
      'Designed for luxury residences, contemporary architectural spaces, exclusive hospitality settings, and interiors where uniqueness takes center stage, this creation forges an unexpected connection between material, space, and the universe.\n\n' +
      'More than a wall, Lunaris is a visual journey beyond our world. A work that sparks curiosity, invites contemplation, and turns the unknown into an expression of timeless beauty.\n\n' +
      'Lunaris — A fragment of another world. A presence impossible to ignore.\n\n' +
      'Note: The lighting shown in the images is for illustration purposes only and is not currently included or available for supply with this piece.\n\n' +
      "Each model is shown in a standard size, carefully defined to preserve the piece's proportions and visual impact. Looking for a different size? All our models can be custom made. Contact us with your desired dimensions so we can evaluate producing a personalized version for your space.",

    // Custom Orders
    'custom.label': 'Beyond The Collection',
    'custom.heading': 'Custom Orders',
    'custom.description': "Every space deserves its own solution. We develop fully personalized projects, tailored to each client's vision, dimensions, and identity.",
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
    'contact.email.value': 'geralmsignature@gmail.com',
    'contact.email.description': 'For detailed inquiries',
    'contact.instagram.label': 'Instagram',
    'contact.instagram.value': '@M._signature',
    'contact.instagram.description': 'Follow our latest creations',
    'contact.location': 'By Appointment — Worldwide',

    // Footer
    'footer.tagline': 'Premium Elegance',
    'footer.rights': 'All rights reserved.',
    'footer.credit': 'Crafted by Web Step.',
  },
};