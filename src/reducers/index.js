import React from 'react';

import invoicing from '../img/invoicing.png'
import agreement from '../img/agreement.png'
import delivery from '../img/delivery.png'
import deployment from '../img/deployment.png'

import img from '../img/diy-bg.jpg'
import komodo from '../img/komodo.png'
import nem from '../img/nem-mosaics.png'
import pos from '../img/pos.png'
import erc1 from '../img/erc1.png'
import erc2 from '../img/erc2.png'
import whitepaper from '../img/whitepaper.png'
import airdrop from '../img/airdrop.png'

import { SWITCH_LANGUAGE, TOGGLE_NAV } from '../actions/types';

const initialState = {
  toggleNav: false,
  currentLanguage: 'en',
  faq: {
    title: {
      en: 'FAQ',
      es: 'Preguntas frecuentes y soporte'
    },
    help: {
      en: 'Where can I go for help?',
      es: '¿A dónde puedo ir por ayuda?'
    },
    use: {
      en: 'Who can use ChainZilla?',
      es: '¿Quién puede usar ChainZilla?'
    },
    click: {
      en: 'Click HERE to open a ticket and we will address your issue as soon as we can.',
      es: 'Haga clic AQUÍ para abrir un ticket y solucionaremos su problema tan pronto como podamos.'
    },
    partnership: {
      en: 'Does ChainZilla OFFER SPECIAL PARTNERSHIPS?',
      es: '¿OFRECE ChainZilla ALIANZAS ESPECIALES?'
    },
    offers: {
      en: "Yes, ChainZilla offers special partnerships to qualified projects and custom blockchain solutions. Our management consulting services focus on our clients' most critical issues and opportunities: strategy, technology, marketing, and community. We bring deep, functional expertise provided by highly skilled professionals from the blockchain space.",
      es: 'Sí, ChainZilla ofrece alianzas especiales para proyectos calificados y soluciones blockchain personalizadas. Nuestros servicios de consultoría de gestión se centran en los problemas y oportunidades más importantes de nuestros clientes: estrategia, tecnología, marketing y comunidad. Brindamos experiencia profunda y funcional provista por profesionales altamente calificados del espacio blockchain.'
    },
    items: {
      en: ["Blockchain entrepreneurs",
      "Blockchain entrepreneurs that want to launch a transparent crowdfund or initial coin offering",
      "ONGs that are upgrading to the blockchain era",
      "Private companies that require a blockcain for commercial or testing purposes",
      "Individuals with an idea who want to create a cryptocurrency and build a community",
      "Companies that are implementing a utility token",
      "Non profit cryptocurrency projects",
      "Academic blockchain researchers",
      ],
      es: [
        "Emprendedores de Blockchain que desean lanzar un crowdfund transparente o una oferta inicial de monedas.",
        "Las ONG que se están actualizando a la era blockchain y desean recibir fondos a través de tecnología ledger transparente.",
        "Compañías privadas que requieren una cadena de bloques para fines comerciales o de prueba.",
        "Personas con una gran idea que desean crear una criptomoneda y construir una comunidad a su alrededor.",
        "Empresas que están implementando un token de utilidad.",
        "Proyectos de criptomonedas sin fines de lucro.",
        "Investigadores académicos de blockchain."
      ]
    }
  },
  form: {
    letterhead: {
      en: 'Tell us everything',
      es: 'Dinos todo'
    },
    launchText: {
      en: 'READY TO LAUNCH?',
      es: "LISTO PARA LANZAR?"
    },
    project: {
      en: 'PROJECT INFORMATION',
      es: 'INFORMACIÓN DEL PROYECTO'
    },
    started: {
      en: 'GET STARTED',
      es: 'EMPEZAR'
    }
  },
  header: {
    menuItems: {
      en: [
        {item: "DIY Services", n: 'diy'},
        {item: "How it Works", n: 'works'},
        {item: "FAQ & Support", n: 'faq'},
        {item: "Team", n: 'partners'}
      ],
      es: [
        {item: "Servicios Blockchain", n: 'diy'},
        {item: "¿Como funciona?", n: 'works'},
        {item: "Preguntas frecuentes y soporte", n: 'faq'},
        {item: "Equipo", n: 'partners'}
      ]
    },
    inBanking: {
      en: 'In BANKING, math is based on trust.',
      es: 'En la banca, la matemática es basada en la confianza.'
    },
    inCrypto: {
      en: `In CRYPTO trust is based on math.`,
      es: 'En crypto, la confianza es basada en matemática.'
    },
    mission: {
      en: "Our mission is to provide you the most efficient bespoke blockchain solutions, decentralized applications, and blockchain deployment.",
      es: "Nuestra misión es proporcionar soluciones blockchain a medida, aplicaciones descentralizadas y lanzamiento de blockchains."
    },
    diy: {
      en: "DIY Blockchain Kit- 4 Week Delivery",
      es: "Paquete Ejecutivo - Entrega En 4 Semanas"
    },
    komodo: {
      en: "ChainZilla is a 4th gen DIY blockchain as a service provider for NEM, Komodo, QTum, and Ethereum. No programming needed!",
      es: "ChainZilla es un proveedor de servicios para NEM, Komodo, QTum y Ethereum de 4ta generación. ¡No se necesita programación!"
    },
    launchText: {
      en: "READY TO LAUNCH?",
      es: "LISTO PARA LANZAR?"
    },
    launchTextMobile: {
      en: "READY TO LAUNCH",
      es: "LISTO PARA LANZAR?"
    },
  },
  work: {
    title: {
      en: "HOW DOES IT WORK?",
      es: "¿Como funciona?",
    },
    letterhead: {
      en: 'LET\'S DO THIS',
      es: 'HAGÁMOSLO'
    },
    cards: {
      en: [
        {
        title: "First Contact",
        text: "The first step is to reach out to ChainZilla with all the details of your new blockchain and details of the project.",
        img: invoicing
        },
        {
          title: "Invoicing & Agreement",
          text: "Once we have reviewed the information and confirm that our specialists have all the necessary details, and are 100% sure we can meet your expectations we will send you an invoice for the total cost. There are no hidden costs or fees.",
          img: agreement
        },
        {
          title: "Delivery",
          text: "Upon verification of payment we will set an official deadline for the delivery of your blockchain and applications. It takes ChainZilla 4 business weeks to render services. Once delivered our team will walk you through the process of testing your new dapps, website, wallet, block explorer, and spv servers. If your project requires ongoing consulting services by ChainZilla we can offer custom packages.",
          img: delivery
        },
        {
          title: "Deployment",
          text: "Finally, after your package is delivered you are ready to launch your dICO or traditional ICO on your own!",
          img: deployment
        }
      ],
      es: [
        {
        title: "Primer Contacto",
        text: "El primer paso es contactar a un representante de ChainZilla con todos los detalles de su nuevo blockchain y proyecto.",
        img: invoicing
        },
        {
          title: "Facturación y Firma de Contrato",
          text: "Una vez que hayamos revisado la información y confirmado que nuestros especialistas tienen todos los detalles necesarios y estamos 100% seguros de que podemos cumplir con sus expectativas, le enviaremos una factura por el costo total. No hay costos ocultos y los pagos se pueden hacer en criptomoneda o Fiat.",
          img: agreement
        },
        {
          title: "Entrega de Producto",
          text: "Tras la verificación del pago, estableceremos un plazo oficial para la entrega de su blockchain y sus aplicaciones. En ChainZilla, se necesitan 4 semanas laborales para prestar servicios de bricolaje. Una vez entregado, nuestro equipo lo guiará a través del proceso de prueba de sus nuevas aplicaciones, sitio web, billetera, explorador de bloques y servidores spv. Si su proyecto requiere servicios de consultoría continuos por parte de ChainZilla, podemos ofrecer paquetes personalizados.",
          img: delivery
        },
        {
          title: "Lanzamiento",
          text: "¡finalmente, después de entregar su paquete, está listo para utilizar su blockchain y lanzar su ICO!",
          img: deployment
        }
      ]
    }
  },
  diy: {
    title: {
      en: 'DIY SERVICES',
      es: 'Servicios Blockchain'
    },
    letterhead: {
      en: 'Take what you need',
      es: 'Toma lo que necesites'
    },
    tabs: {
      en: [
        "Komodo (KMD) Platform Assetchain",
        "NEM Mosaics",
        "PoS Altcoin",
        "ERC20 Universal Standard",
        "ERC20 Migration to KMD Platform or Native Blockchain",
        "Advanced Whitepaper Development",
        "Airdrop ICO Model"
      ],
      es: [
        "Komodo Platform Assetchain",
        "Mosaics de NEM",
        "Blockchain PoS Alternativo",
        "Estandard Universal ERC20",
        "Migración fuera de ERC20 a un mínimo blockchain viable.",
        "Desarrollo de Papel Tecnico",
        "ICO por Airdrop"
      ],
    },
    tabpanels: {
      en: [
        {
          title: "Komodo Platform Assetchain",
          subtitle: "(a native blockchain with the capabilities of zero knowledge transactions and a full integration with Komodo’s features)",
          columns: [
            {
              title: "DIY Custom Komodo Assetchain",
              items: [
                "Komodo tokenization (launch a custom blockchain on Komodo Platform)",
                "dICO App (custom dico app to launch a decentralized ico with 5 coin options including ZEC, BTC, ETH, BCH, and KMD)",
                "Wallet (Basilisk multi-wallet)",
                "Block Explorer (1 year hosting)",
                "Mining Pool Setup (if the blockchain is mineable) ",
                "SPV Implementation (1 year hosting)",
                "dPoW Notarization Integration (annual payment)",
                "Integration to Igami paperwallet (with logo and color scheme)"
              ]
            },
            {
              title: "Premium Package Only",
              items: [
                "ICO WebApp (ChainZilla's proprietary website to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
                "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
              ]
            }
          ],
          img: img,
          logo: komodo,
        },
        {
          title: "NEM Mosaics",
          img: img,
          logo: nem,
          columns: [
            {
              title: "NEM Mosaics",
              items: [
                "NEM Mosaic Creation",
                "NEM Namespace Creation",
                "Integration to Explorer"
              ]
            },
            {
              title: "Premium Package Only",
              items: [
                "ICO WebApp (ChainZilla's proprietary ico website to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
                "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
              ]
            }
          ]
        },
        {
          title: "PoS Altcoin",
          subtitle: "(a native blockchain powered by PoS and with all the capabilities of Bitcoin)",
          columns: [
            {
              title: "DIY Custom PoS Altcoin",
              items: [
                "Bitcoin compatible blockchain (launch a secure PoS blockchain)",
                "dICO App (custom dico app to launch a decentralized ICO with 5 coin options including ZEC, BTC, ETH, BCH, and KMD)",
                "Wallet (Basilisk multi-wallet)",
                "Block Explorer (1 year hosting)",
                "SPV Implementation (1 year hosting)",
                "Mining Pool Setup",
                "Custom Paper Wallet (with logo and color scheme)"
              ]
            },
            {
              title: "Premium Package Only",
              items: [
                "ICO WebApp (ChainZilla's proprietary ICO website to launch your ico - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
                "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
              ]
            }
          ],
          img: img,
          logo: pos
        },
        {
          title: "ERC20 universal standard ",
          subtitle: "",
          img: img,
          logo: erc1,
          columns: [
            {
              title: "DIY ETH Tokenization & ICO",
              items: [
                "ERC20 Token Deployment (ChainZilla will create a custom ERC20 token)",
                "Wallet (MEW wallet integration)",
                "Block Explorer (ready to host)"
              ]
            },
            {
              title: "Premium Package Only",
              items: [
                "ICO WebApp (ChainZilla's proprietary ico website to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
                "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
              ]
            }
          ],
        },
        {
          title: "ERC20 universal standard Migration to Komodo Platform or Native blockchain",
          subtitle: "This package must be ordered as an add-on to our DIY packages. In addition to all services offered in our blockchain creation package we will deliver an easy to use webapp in order for you to make a full migration away from Ethereum.",
          img: img,
          logo: erc2,
          columns: [],
        },
        {
          title: "Advanced Whitepaper Development",
          subtitle: "Our team of skilled writers with knowledge in blockchain and fintech industry will work collaboratively with you to develop white papers on the topic of your choice to be used as resources and additional assets on your website.",
          img: img,
          logo: whitepaper,
          columns: [],
        },
        {
          title: "Airdrop ICO Model",
          subtitle: "(coming soon)",
          img: img,
          logo: airdrop,
          coming: true,
          columns: [
            {
              title: "Airdrop ICO Model",
              items: [
                "Komodo tokenization (launch a custom blockchain on Komodo Platform)",
                "Airdrop Automation",
                "ICO WebApp (ChainZilla's proprietary ico website to launch an ICO - this option is ideal for ETH contributions)",
                "Wallet (custom standalone wallet)",
                "Block Explorer (block explorer with 1 year of hosting)",
                "SPV Implementation (Light wallet server with 1 year of hosting)"
              ]
            }
          ],
        }
      ],
      es: [
        {
          title: "Komodo Platform Assetchain",
          subtitle: "(un blockchain completo con las capacidades de zk-snarks y una integración completa con la plataforma de Komodo)",
          columns: [
            {
              title: "Paquete DIY hecho a la media",
              items: [
                "Tokenización en Komodo (lanza tu propio blockchain a la medida en Komodo Platform)",
                "Aplicación dICO  (aplicación para lanzar un dICO con 5 opciones para contribuir incluyendo ZEC, BTC, ETH, BCH, and KMD)",
                "Monedero (Basilisk multi-monedero)",
                "Explorador de Transacciones (1 año de hosting)",
                "Grupo de Minería (depende si el blockchain lo permite) ",
                "Implementación SPV (1 año de hosting)",
                "Integracion con dPoW (pago anual)",
                "Integración con Igami, el monedero offline (con el logo y esquema de color)"
              ]
            },
            {
              title: "Paquete Premium",
              items: [
                "ICO WebApp (tecnología propiedad de ChainZilla para lanzar su ICO - esta opción es ideal para las contribuciones en ETH y la integración del procesador de pagos. Uno de los mecanismos de ICO más seguros disponibles. Esta opción requiere un mínimo esfuerzo para ejecutar una oferta de moneda inicial)",
                "Precio Automatizado (personalice su ICO con recompensas y ofertas especiales y esquemas de distribución personalizados)"
              ]
            }
          ],
          img: img,
          logo: komodo,
        },
        {
          title: "Mosaics de NEM",
          img: img,
          logo: nem,
          columns: [
            {
              title: "NEM Mosaics",
              items: [
                "Creación de un Mosaic a la medida",
                "Creación de un namespace"
              ]
            },
            {
              title: "Paquete Premium",
              items: [
                "ICO WebApp (tecnología propiedad de ChainZilla para lanzar su ICO - esta opción es ideal para las contribuciones en ETH y la integración del procesador de pagos. Uno de los mecanismos más seguros disponibles para lanzar su ICO. (Esta opción requiere un mínimo esfuerzo para ejecutar una oferta de moneda inicial)",
                "Precio Automatizado (personalice su ICO con recompensas, ofertas especiales y esquemas de distribución personalizados)"
              ]
            }
          ]
        },
        {
          title: "Blockchain PoS Alternativo",
          subtitle: "(un blockchain completo con las capacidades de Bitcoin y protegido por proof-of-stake)",
          columns: [
            {
              title: "Paquete DIY hecho a la media",
              items: [
                "Blockchain compatible con Bitcoin (lanza un blockchain asegurado por PoS)",
                "Aplicación dICO  (aplicación para lanzar un dICO con 5 opciones para contribuir incluyendo ZEC, BTC, ETH, BCH, and KMD)",
                "Monedero (Basilisk multi-monedero)",
                "Explorador de Transacciones (1 año de hosting)",
                "Grupo de Minería (depende si el blockchain lo permite) ",
                "Implementación SPV (1 año de hosting)",
                "Integracion con dPoW (pago anual)",
                "Monedero Offline al a medida (con el esquema de color y logo)"
              ]
            },
            {
              title: "Paquete Premium",
              items: [
                "ICO WebApp (tecnología propiedad de ChainZilla para lanzar su ICO - esta opción es ideal para las contribuciones en ETH y la integración del procesador de pagos. Uno de los mecanismos más seguros disponibles para lanzar su ICO. (Esta opción requiere un mínimo esfuerzo para ejecutar una oferta de moneda inicial)",
                "Precio Automatizado (personalice su ICO con recompensas, ofertas especiales y esquemas de distribución personalizados)"
              ]
            }
          ],
          img: img,
          logo: pos
        },
        {
          title: "Estandard Universal ERC20",
          subtitle: "",
          img: img,
          logo: erc1,
          columns: [
            {
              title: "Tokenización en Ethereum & ICO",
              items: [
                "Lanzamiento de token a la medida en Ethereum",
                "Integración a MEW (mi monedero de Ethereum)",
                "Explorador de Transacciones (listo para hosting)"
              ]
            },
            {
              title: "Paquete Premium",
              items: [
                "ICO WebApp (tecnología propiedad de ChainZilla para lanzar su ICO - esta opción es ideal para las contribuciones en ETH y la integración del procesador de pagos. Uno de los mecanismos más seguros disponibles para lanzar su ICO. (Esta opción requiere un mínimo esfuerzo para ejecutar una oferta de moneda inicial)",
                "Precio Automatizado (personalice su ICO con recompensas, ofertas especiales y esquemas de distribución personalizados)"
              ]
            }
          ],
        },
        {
          title: "Migración fuera de ERC20 a un mínimo blockchain viable.",
          subtitle: "Este paquete debe pedirse como complemento de nuestros paquetes de tokenización. Además de todos los servicios ofrecidos en nuestro paquete de creación de blockchain, le entregaremos una aplicación web fácil de usar para que realice una migración completa fuera de Ethereum.",
          img: img,
          logo: erc2,
          columns: [],
        },
        {
          title: "Desarrollo de Papel Tecnico",
          subtitle: "Nuestro equipo de escritores con conocimiento en blockchain y en la industria de la tecnología financiera trabajará en colaboración con usted para desarrollar documentos técnicos sobre su proyecto para ser utilizados como recursos y activos adicionales en su sitio web.",
          img: img,
          logo: whitepaper,
          columns: [],
        },
        {
          title: "ICO por Airdrop",
          subtitle: "(coming soon)",
          img: img,
          logo: airdrop,
          coming: true,
          columns: [
            {
              title: "Lanza un ICO por medio de airdrops",
              items: [
                "Tokenización (lanzar un blockchain personalizado en la plataforma de Komodo o en NEM, QTUM y ETH)",
                "Automatizacion de el Airdrop",
                "Monedero (una aplicación a la medida para su blockchain)",
                "Explorador de Transacciones (con 1 año de hosting)",
                "Implementación SPV (1 año de hosting)"
              ]
            }
          ],
        }
      ]
    }
  },
  footer: {
    socialTitle: {
      en: "SOCIAL MEDIA CHANNELS",
      es: "Medios de comunicación social"
    },
    paymentsTitle: {
      en: "PAYMENTS ACCEPTED",
      es: "PAGOS ACEPTADOS"
    },
    desc: {
      en: "Please consult your professional financial, investment, and tax advisers before making any investment or launching an initial coin offering (“ICO”). ChainZilla.io does not provide investment or financial advice and does not endorse or recommend investment in any ICOs advertised on this site. The content on this site is provided for informational purposes only and should be supplemented with independent research and factual verification. ChainZilla.io receives compensation for promoting certain ICOs. Such compensation is not based on whether or not users of ChainZilla.io invest in advertised ICOs or other types of “success” fees. ChainZilla.io is not regulated as either a broker-dealer or funding portal and is not a member of FINRA. ChainZilla.io does not offer or sell any securities, solicit investors for securities offerings, engage in any negotiations regarding potential investments, or participate in the sale or purchase of any securities or otherwise effect transactions in securities. Any offer, sale or purchase in ICOs is in the sole discretion of, and is conducted directly between, issuers and the prospective investors. All information provided regarding potential ICO investment opportunities is prepared solely by the issuer, and such issuer is solely responsible for the accuracy of all such statements. ChainZilla.io has not independently verified any such information. ChainZilla.io does not host third-party ICOs. ChainZilla.io team members, associates, and partners shall not be liable for any claims, expenses, damages (including direct, indirect, special or consequential damages), loss of profits, opportunities or information arising from: the use of or reliance on information contained in this website; any inaccuracy or omission in such information or failure to keep the information current; use of any third party websites linked to this website; any Internet software used in connection with this website or computer viruses or other destructive programs encountered as a result of using this website; and any other matter connected with this website; even if ChainZilla.io is made aware of the possibility of such claims, expenses, damages or losses.",
      es: "Consulte a sus asesores financieros, de inversión e impuestos profesionales antes de realizar cualquier inversión o lanzar una oferta de moneda inicial (\"ICO\"). ChainZilla.io no brinda asesoramiento financiero o de inversión y no respalda ni recomienda inversiones en ninguna ICO anunciada en este sitio. El contenido de este sitio se proporciona solo con fines informativos y debe complementarse con investigación independiente y verificación de hechos. ChainZilla.io recibe una compensación por promover ciertas ICO. Dicha compensación no se basa en si los usuarios de ChainZilla.io invierten en ICO anunciadas u otros tipos de tarifas de \"éxito\". ChainZilla.io no está regulado como corredor de bolsa o portal de financiación y no es miembro de FINRA. ChainZilla.io no ofrece ni vende valores, solicita inversores para ofertas de valores, participa en negociaciones sobre posibles inversiones o participa en la venta o compra de valores o realiza transacciones en valores. Cualquier oferta, venta o compra en ICO se realiza a discreción y se realiza directamente entre los emisores y los posibles inversores. Toda la información proporcionada con respecto a las posibles oportunidades de inversión de ICO está preparada exclusivamente por el emisor, y dicho emisor es el único responsable de la exactitud de tales declaraciones. ChainZilla.io no ha verificado independientemente dicha información. Chainzilla.io no aloja ICOs de terceros. Los miembros del equipo, asociados y socios de ChainZilla.io no serán responsables por reclamos, gastos, daños (incluidos los daños directos, indirectos, especiales o consecuentes), la pérdida de beneficios, oportunidades o información que surja de: el uso o la confianza en la información contenido en este sitio web; cualquier inexactitud u omisión en dicha información o la falta de mantener actualizada la información; uso de sitios web de terceros vinculados a este sitio web; cualquier software de Internet utilizado en conexión con este sitio web o virus informáticos u otros programas destructivos encontrados como resultado del uso de este sitio web; y cualquier otro asunto relacionado con este sitio web; incluso si Chainzilla.io tiene conocimiento de la posibilidad de dichos reclamos, gastos, daños o pérdidas. EL SITIO Y LOS SERVICIOS, Y TODO EL CONTENIDO, LA INFORMACIÓN Y LOS MATERIALES PUBLICADOS O PROPORCIONADOS POR O A TRAVÉS DEL SITIO O DE LOS SERVICIOS SE PROPORCIONAN \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITO, INCLUYENDO SIN LIMITACIÓN, CUALQUIER GARANTÍA DE EXACTITUD O IDONEIDAD PARA UN PROPÓSITO EN PARTICULAR. AL UTILIZAR EL SITIO Y / O LOS SERVICIOS, SE COMPROMETE A UTILIZAR SU PROPIO JUICIO, PRECAUCIÓN Y SENTIDO COMÚN PARA GESTIONAR TODO EL CONTENIDO, LA INFORMACIÓN Y LOS MATERIALES OFRECIDOS Y ACEPTA QUE CUALQUIER USO QUE HAGA DE DICHO CONTENIDO, INFORMACIÓN O MATERIAL ESTÁ EN SU PROPIO RIESGO."
    }
  },
  services: {
    title: {
      en: "ChainZilla Services",
      es: "Servicios de ChainZilla"
    },
    subTitle: {
      en: "All DIY packages are delivered with logo & General branding",
      es: "Todos los paquetes se entregan con un logotipo básico y una marca de esquema de color"
    },
    items: {
      en: [
        {
          title: "DIY Token Sale",
          text: "Launch your own token sale with a visual interface. Remove all the worry of hackers taking advantage of bugs by using our tested and secure software. This includes the automation of transfers, cold storage or time-locked transactions, and token distribution without third parties."
        },
        {
          title: "Komodo Assetchain",
          text: "ChainZilla lets anyone create, manage, and deploy native blockchains on the Komodo blockchain with just a few clicks. No programming required. Select from our catalog of pre-configured blockchains."
        },
        {
          title: "ERC20 Token",
          text: "ChainZilla lets anyone create, manage, and deploy smart contracts on the Ethereum blockchain with just a few clicks. No programming required. Select from our catalog of easy to configure smart contract templates."
        },
        {
          title: "NEM Mosaics",
          text: "ChainZilla lets anyone create, manage, and distribute NEM Mosaics and Namespace with just a few clicks. No programming required."
        },
        {
          title: "dICO APP",
          text: "A custom application that runs user-side. It allows end-users to participate in an decentralized ICO. The dapp is powered by BarterDEX core. It’s ideal for dICOs of Bitcoin and Komodo compatibles."
        },
        {
          title: "ICO WebApp",
          text: "A custom application that runs server-side. It allows your users to participate in your ICO through an easy to use website. It’s ideal for initial coin offerings of all types. It is one of the most secure ICO webapps available. Your funds are always in cold storage."
        },
        {
          title: "SPV Servers",
          text: "SPV or Electrum is a technique described in Satoshi Nakamoto’s paper. SPV allows a lightweight client to verify that a transaction is included in the blockchain without downloading the entire blockchain. Also known as a Lite wallet."
        },
        {
          title: "Wallets",
          text: "Store and manage digital currencies with ease with your own custom cryptocurrency wallet."
        },
        {
          title: "Block Explorers",
          text: "An online blockchain browser that displays the contents of individual blocks and transactions and the transaction histories and balances."
        },
        {
          title: "E-commerce Integration",
          text: "Boost your business sales by adding cryptocurrency payment options to your existing website. Our team of professionals will assure that you integrate the most efficient payment solution for your business."
        },
        {
          title: "Cyber Security Services",
          text: "In collaboration with DevSEC we will go back to our hacker roots. Our hackathons and bounty programs will strengthen our bonds with the white/grey-hat community and promote the their continuous growth. ChainZilla will leverage the expertise of the most capable professionals in this field to pentest, peer-review, and provide critical bug reports to secure your blockchain."
        },
      ],
      es: [
        {
          title: "Venta de Moneda o ICO",
          text: "Lanza tu propia venta de tokens con un interfaz visual. Elimine toda la preocupación de hackers que aprovechan los errores utilizando nuestro software probado y seguro. Esto incluye la automatización de transferencias, almacenamiento en cold storage o transacciones con bloqueo de tiempo, y la distribución de tokens sin terceros."
        },
        {
          title: "Blockchain en Komodo",
          text: "ChainZilla permite a cualquier persona crear, administrar y desplegar block chains utilizando la tecnología de Komodo con solo unos pocos clics. No se requiere programación. Seleccione de nuestro catálogo de plantillas fáciles de configurar."
        },
        {
          title: "Tokenización en ERC-20",
          text: "ChainZilla permite a cualquier persona crear, gestionar e implementar contratos inteligentes en el blockchain de Ethereum con solo unos pocos clics. No se requiere programación. Seleccione de nuestro catálogo de plantillas de contratos inteligentes fáciles de configurar."
        },
        {
          title: "NEM Mosaics",
          text: "ChainZilla permite que cualquiera cree, administre y distribuya Mosaicos y Espacio de nombres NEM con solo unos pocos clics. No se requiere programación."
        },
        {
          title: "Aplicación Desktop para dICO",
          text: "Una aplicación personalizada que se ejecuta en el lado del usuario. Le permite a sus usuarios participar en un ICO descentralizado. La aplicación funciona con BarterDEX Core. Es ideal para dICOs de Bitcoin y Komodo compatibles."
        },
        {
          title: "Aplicación Web para dICO",
          text: "Una aplicación propietaria que se ejecuta en el servidor. Permite a sus usuarios participar en su ICO a través de un sitio web fácil de usar. Es ideal para ofertas de monedas iniciales de todo tipo. Es una de las webapps ICO más seguras disponibles. Sus fondos están siempre almacenados en frío."
        },
        {
          title: "Monederos",
          text: "Almacene y administre divisas digitales con facilidad con su billetera criptomoneda personalizada."
        },
        {
          title: "Explorador de Transacciones",
          text: "Un explorador de transacciones que muestra los historiales y saldos de transacciones."
        },
        {
          title: "Servidores SPV",
          text: "SPV o Electrum es una técnica descrita en el artículo de Satoshi Nakamoto. SPV permite a un cliente liviano verificar que se incluye una transacción en blockchain sin descargar toda la cadena de bloques. También conocido como una monedero Lite."
        },
        {
          title: "Integracion E-commercio",
          text: "Aumente las ventas de su negocio agregando opciones de pago de criptomonedas a su sitio web existente. Nuestro equipo de profesionales le asegurará que integra la solución de pago más eficiente para su negocio."
        },
        {
          title: "Servicios de seguridad cibernética",
          text: "En colaboración con DevSEC volveremos a nuestras raíces de hackers. Nuestros hackathons y programas de recompensas fortalecerán nuestros lazos con la comunidad blanca / sombrero gris y promoverán su crecimiento continuo. ChainZilla aprovechará la experiencia de los profesionales más capaces en este campo para evaluar, revisar por pares y proporcionar informes críticos para su proyecto."
        },
        {
          title: "Servicios diversos (consultar plazos de entrega)",
          text: "Bots de recompensa para redes sociales. Monedero y aplicaciones con grandes modificaciones. Blockchain complejo y plantillas no estándar. Monedero Offline con diseño. Blockchains experimentales. Diseño de monedero móvil."
        }
      ]
    }
  },
  partners: {
    letterhead: {
      es: 'CONOCER AL EQUIPO',
      en: 'MEET THE TEAM'
    },
    title: {
      en: 'Core Members, Partners & Exchanges',
      es: 'Miembros principales, socios e intercambios'
    }
  },
  roadmap: {
    letterhead: {
      es: 'DINOS TODO',
      en: 'TELL US EVERYTHING'
    },
    launchText: {
      en: 'READY TO LAUNCH?',
      es: "LISTO PARA LANZAR?"
    },
    phases: {
      en: [
        {
          title: 'Second Quarter 2018',
          color: '#b2b2b2',
          steps: [
            {
              text: 'Unveil ChainZilla (completed)',
              alignment: 'right'
            },
            {
              text: 'Setup Legal Structure (completed)',
              alignment: 'left'
            },
            {
              text: 'Establish Partnerships with exchanges, security experts, and crypto communities to endorse ChainZilla',
              alignment: 'right'
            },
            {
              text: 'Initiate development of ChainZilla’s own Basilisk multi-wallet design for Komodo & its assetchains (in process)',
              alignment: 'left'
            },
            {
              text: 'Present our first official contract with a reputable project (in process)',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'Fourth quarter 2018 - Project Launch (phase 1)',
          color: '#2c3b61',
          steps: [
            {
              text: 'Komodo DIY',
              alignment: 'right'
            },
            {
              text: 'PoS Altcoin DIY',
              alignment: 'left'
            },
            {
              text: 'ETH ERC20 DIY',
              alignment: 'right'
            },
            {
              text: 'ETH Migration Services',
              alignment: 'left'
            },
            {
              text: 'White Paper Development Services',
              alignment: 'right'
            },
            {
              text: 'Alpha Tests of ChainZilla’s Basilisk multi-wallet for Komodo & all its assetchains. It will become the MEW of Komodo.',
              alignment: 'left'
            }
          ]
        },
        {
          title: 'First Quarter 2019 - Zilla Chain Launch (phase 2)',
          color: '#13172f',
          steps: [
            {
              text: 'Launch a utility token that will be used to pay for some ChainZilla’s services such as Komodo notarizations, document storage (IPFS), voting, development services, and for key-value storage on the blockchain.',
              alignment: 'right'
            },
            {
              text: 'ICO to fund second phase of the project',
              alignment: 'left'
            },
            {
              text: 'After a successful and modest ICO, we will initiate an expansion of Chainzilla’s Basilisk multi-wallet  extending wallet functionalities and updated UI.',
              alignment: 'right'
            },
            {
              text: 'Begin development of the Chameleon dICO dapp for all blockchains & ERC20. ChainZilla will expand upon the groundwork laid down by the AGAMA Multiwallet developers. These improvements will increase the usability of Komodo assetchains and extend wallet functionalities. Additionally it will provide users with a state-of-the-art user interface that can be relevant for years to come.',
              alignment: 'left'
            },
            {
              text: "NEM Mosaics",
              alignment: 'right'
            },
            {
              text: "Airdrop ICO Model",
              alignment: 'left'
            }
          ]
        },
        {
          title: 'Third Quarter 2019 - Mobile Development (phase 3)',
          color: '#b2b2b2',
          steps: [
            {
              text: 'Deliver new BASILISK Multiwallet UI and initiate peer-review',
              alignment: 'right'
            },
            {
              text: 'Deliver Chameleon dICO dapp and initiate peer-review',
              alignment: 'left'
            },
            {
              text: 'Initiate Basilisk mobile design',
              alignment: 'right'
            },
            {
              text: 'ChainZilla will re-designed an improved version of Agama Mobile Multiwallet. We will seek appstore approval.',
              alignment: 'left'
            },
            {
              text: 'Present our first official contract with a reputable project',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'Fourth Quarter 2019 - (phase 4)',
          color: '#2c3b61',
          steps: [
            {
              text: 'Initiate development for standalone Jumblr dapp. ChainZilla will fund the development of a new SPV based Jumblr service.',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'First Quarter 2020 - (phase 5)',
          color: '#13172f',
          steps: [
            {
              text: 'Begin development of standalone whitelabel voting app. The dapp will allow users to “tune” into voting sessions and participate without having to install new software for each election held on the blockchain.',
              alignment: 'right'
            }
          ]
        }
      ],
      es: [
        {
          title: 'Segundo trimestre de 2018',
          color: '#b2b2b2',
          steps: [
            {
              text: 'Revelar ChainZilla (completado)',
              alignment: 'right'
            },
            {
              text: 'Configurar estructura legal (completada)',
              alignment: 'left'
            },
            {
              text: 'Establecer alianzas con intercambios, expertos en seguridad y comunidades criptográficas para respaldar a ChainZilla (en proceso)',
              alignment: 'right'
            },
            {
              text: 'Iniciar el desarrollo del diseño BASILISK - un monedero múltiple de ChainZilla para Komodo y todos los assetchains (en proceso)',
              alignment: 'left'
            },
            {
              text: 'Presentar nuestro primer contrato oficial con un proyecto (en proceso)',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'Cuarto trimestre 2018 - Lanzamiento del proyecto (fase 1)',
          color: '#2c3b61',
          steps: [
            {
              text: 'Komodo DIY',
              alignment: 'right'
            },
            {
              text: 'PoS Altcoin DIY',
              alignment: 'left'
            },
            {
              text: 'ETH ERC20 DIY',
              alignment: 'right'
            },
            {
              text: 'Emigracion de ETH',
              alignment: 'left'
            },
            {
              text: 'Desarrollo de Papel Tecnico',
              alignment: 'right'
            },
            {
              text: 'Pruebas alpha de la mondero múltiple BASILISK de ChainZilla para Komodo y todas las cadenas de activos. Se convertirá en el MEW de Komodo.',
              alignment: 'left'
            }
          ]
        },
        {
          title: 'Primer trimestre de 2019 - Lanzamiento la moneda ZILLA (fase 2)',
          color: '#13172f',
          steps: [
            {
              text: 'Lanzaremos un token de utilidad que se utilizará para pagar servicios tales como notarizaciones de Komodo, almacenamiento de documentos (IPFS), votación, servicios de desarrollo y almacenamiento clave-valor. Además, crearemos los blockchains de TESTZILLA para fomentar las pruebas.',
              alignment: 'right'
            },
            {
              text: 'Iniciaremos una expansión de el monedero múltiple BASILISK de Chainzilla',
              alignment: 'left'
            },
            {
              text: 'ChainZilla se expandirá sobre la base establecida por los desarrolladores de AGAMA Multiwallet. Estas mejoras aumentarán la usabilidad de las redes de activos de Komodo y extenderán las funcionalidades de el monedero. Además, proporcionará a los usuarios una interfaz de usuario de última generación que puede ser relevante en los próximos años.',
              alignment: 'right'
            },
            {
              text: 'Empieza el desarrollo de la aplicación dico Chameleon para todos los blockchains y ERC20',
              alignment: 'left'
            },
            {
              text: "Mosaics de NEM",
              alignment: 'right'
            },
            {
              text: "ICO por Airdrops",
              alignment: 'left'
            }
          ]
        },
        {
          title: 'Tercer trimestre de 2019 - Desarrollo móvil (fase 3)',
          color: '#b2b2b2',
          steps: [
            {
              text: 'Entregar nueva interfaz de usuario de BASILISK Multiwallet e iniciar la revisión oficial',
              alignment: 'right'
            },
            {
              text: 'Entregar la aplicación Chameleon dICO e iniciar la revisión oficial',
              alignment: 'left'
            },
            {
              text: 'Iniciar el diseño móvil de Basilisk',
              alignment: 'right'
            },
            {
              text: 'ChainZilla rediseñará una versión mejorada de Agama Mobile Multiwallet. Buscaremos la aprobación de el appstore.',
              alignment: 'left'
            },
            {
              text: 'Presente nuestro primer contrato oficial con un proyecto acreditado',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'Cuarto trimestre 2019 - (fase 4)',
          color: '#2c3b61',
          steps: [
            {
              text: 'Iniciar el desarrollo de la aplicación independiente basada en Jumblr llamada CAMO. ChainZilla financiará el desarrollo de un nuevo servicio Jumblr basado en SPV. (Esto depende de las actualizaciones sapling del equipo zcash)',
              alignment: 'right'
            }
          ]
        },
        {
          title: 'Primer trimestre de 2020 - (fase 5)',
          color: '#13172f',
          steps: [
            {
              text: 'Comienza el desarrollo de la aplicación de votación de etiqueta blanca independiente llamada BALLOT. La aplicación permitirá a los usuarios "sintonizar" las sesiones de votación y participar sin tener que instalar un nuevo software para cada elección celebrada en el blockchain.',
              alignment: 'right'
            }
          ]
        }
      ]
    }
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload
      };
    case TOGGLE_NAV:
      return {
        ...state,
        toggleNav: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
