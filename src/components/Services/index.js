import React from 'react'
import styles from './index.module.css'

import Tile from '../../templates/Tile'
import logo from '../../img/zilla-foot.png'

import wave from '../../img/wave2.svg'

const services = [
	{
		title: "DIY Token Sale",
		text: "Launch your own token sale with a visual interface. Remove all the worry of hackers taking advantage of bugs by using our tested and secure software. This includes the automation of transfers, cold storage or time-locked transactions, and token distribution without third parties."
	},
	{
		title: "Komodo Assetchain",
		text: "ChainZilla lets anyone create, manage, and deploy native blockchains on the Komodo blockchain with just a few clicks. No programming required. Select from our catalog of pre-configured blockchains."
	},
	{
		title: "Erc20 Token",
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
		text: "A custom application that runs server-side. It allows your users to participate in your ico through an easy to use website. It’s ideal for initial coin offerings of all types. It is one of the most secure ICO webapps available. Your funds are always in cold storage."
	},
	{
		title: "SPV Servers",
		text: "SPV or Electrum is a technique described in Satoshi Nakamoto’s paper. SPV allows a lightweight client to verify that a transaction is included in the blockchain without downloading the entire blockchain. Also known as a Lite wallet."
	},
	{
		title: "wallets",
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
		text: "In collaboration with DevSEC we will go back to our hacker roots. Our hackathons and bounty programs will strengthen our bonds with the white/grey-hat community and promote the their continuous growth. ChainZilla will leverage the expertise of the most capable professionals in this field to pentest, peer-review, and provide critical bug reports to other blockchain projects."
	},
]

export default () => <div className={styles.services}>
	<img className={styles.wave} src={wave} />
	<div className={styles.contentWrapper}>
		<h1 className={styles.title}>CHAINZILLA SERVICES</h1>
		<p className={styles.subtitle}>All DIY packages are delivered with logo & General branding</p>
		<div className={styles.tiles}>
			{
				services.map((({ title, text }) => <Tile key={title} logo={logo} title={title} text={text} />))
			}
		</div>
	</div>
</div>
