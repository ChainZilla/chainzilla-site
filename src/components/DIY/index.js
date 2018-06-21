import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styles from './index.module.css'

import ContentCard from '../../templates/ContentCard'

import img from '../../img/diy-bg.jpg'
import komodo from '../../img/komodo.png'
import pos from '../../img/pos.png'
import erc1 from '../../img/erc1.png'
import erc2 from '../../img/erc2.png'
import whitepaper from '../../img/whitepaper.png'
import airdrop from '../../img/airdrop.png'
import wave from '../../img/wave2.svg'

import LetterHead from '../../templates/LetterHead'

const tabs = [
  "Komodo (KMD) Platform Assetchain",
  "PoS Altcoin",
  "ERC-20 Universal Standard",
  "ERC-20 Migration to KMD Platform or Native Blockchain",
  "Advanced Whitepaper Development",
  "Airdrop ICO Model",
  "NEM Mosaics"
]

const tabpanels = [
  {
    title: "Komodo Platform Assetchain",
    subtitle: "(a native blockchain with the capabilities of zero knowledge transactions and a full integration with Komodo’s features)",
    columns: [
      {
        title: "DIY Custom Komodo Assetchain",
        items: [
          "Komodo tokenization (launch a custom blockchain on Komodo Platform)",
          "dICO App (custom app to launch a decentralized ICO with 5 coin options including ZEC, BTC, LTC, BCH, and KMD)",
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
          "ICO WebApp (ChainZilla's proprietary technology to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
          "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
        ]
      }
    ],
    img: img,
    logo: komodo,
  },
  {
    title: "PoS Altcoin",
    subtitle: "(a native blockchain powered by PoS and with all the capabilities of Bitcoin)",
    columns: [
      {
        title: "DIY Custom PoS Altcoin",
        items: [
          "Bitcoin compatible blockchain (launch a secure PoS blockchain)",
          "dICO App (custom app to launch a decentralized ICO with 5 coin options including ZEC, BTC, LTC, BCH, and KMD)",
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
          "ICO WebApp (ChainZilla's proprietary technology to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
          "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
        ]
      }
    ],
    img: img,
    logo: pos
  },
  {
    title: "ERC-20 universal standard ",
    subtitle: "",
    img: img,
    logo: erc1,
    columns: [
      {
        title: "DIY ETH Tokenization & ICO",
        items: [
          "ERC20 Token Deployment (ChainZilla will create a custom erc20 token)",
          "Wallet (MEW wallet integration)",
          "Block Explorer (ready to host)"
        ]
      },
      {
        title: "Premium Package Only",
        items: [
          "ICO WebApp (ChainZilla's proprietary technology to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
          "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
        ]
      }
    ],
  },
  {
    title: "ERC-20 universal standard Migration to Komodo Platform or Native blockchain",
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
          "ICO WebApp (ChainZilla's proprietary technology to launch an ICO - this option is ideal for ETH contributions)",
          "Wallet (custom standalone wallet)",
          "Block Explorer (block explorer with 1 year of hosting)",
          "SPV Implementation (Light wallet server with 1 year of hosting)"
        ]
      }
    ],
  },
  {
    title: "NEM Mosaics",
    subtitle: "(coming soon)",
    img: img,
    logo: airdrop,
    coming: true,
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
          "ICO WebApp (ChainZilla's proprietary technology to launch your ICO - this option is ideal for ETH contributions and payment processor integration. One of the most secure ICO mechanisms available. This option requires minimal efforts to run a initial coin offering)",
          "Automated Pricing (customize your ICO with rewards and special deals and custom distribution schemes)"
        ]
      }
    ]
  }
]

export default () => <div className={styles.diy}>
<div className={styles.diyWrapper}>
	<div>
    <LetterHead title='Take what you need' />
    <h1 style={{textAlign: 'center', fontSize: '53.5px', marginBottom: '1rem'}}>DIY SERVICES</h1>
  </div>
	<Tabs className={styles.tabs}>
    <TabList className={styles.tablist}>
      {tabs.map(tab => <Tab selectedClassName={styles.selectedTab} className={styles.tab} key={tab}>{tab}</Tab>)}
    </TabList>
    {tabpanels.map( (content, id) => <TabPanel className={styles.tabpanel} key={id}><ContentCard {...content} /></TabPanel>)}
  </Tabs>
</div>
<div className={styles.diyMobile}>
  <ul>
  {
    tabs.map(tab => <li key={tab}>{tab}</li>)
  }
  </ul>
</div>
<img className={styles.wave} src={wave} />
</div>
