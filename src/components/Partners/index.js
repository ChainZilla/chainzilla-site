import React from 'react'
import styles from './index.module.css'

import LetterHead from '../../templates/LetterHead'

import aroc from '../../img/aroc-panama.svg'
import CryptoGeeks from '../../img/Cryptogeeks_PartnerLogo-m.png'
import Abe from '../../img/Abee_PartnerLogo-lg.png'
import Panama from '../../img/BLockchainPanama_PartnerLogo-lg.png'
import Cryptopia from '../../img/Cryptopia_PartnerLogo-lg.png'
import CoinGate from '../../img/Coingate_PartnerLogo-lg.png'
import Cambridge from '../../img/Cambridge_PartnerLogo-lg.png'
import Coinexchange from '../../img/Coinexhange_PartnerLogo-lg.png'
import CryptoCore from '../../img/Cryptocore_PartnerLogo-lg.png'
import Libertaria from '../../img/Libertaria_PartnerLogo-m.png'
import Irakli from '../../img/IrakliMenabde_PartnerLogo-lg.png'
import Utrum from '../../img/Utrum_PartnerLogo-lg.png'
import Komodo from '../../img/Komodo_PartnerLogo-lg.png'
import ptyx from '../../img/PTYX_TeamIcon-lg.png'
import Sterling0X from '../../img/Sterling0X_TeamIcon-lg.png'

import placeholderImage from '../../img/placeholder-image.png'

const PartnerCard = ({title,text,img}) => <div className={styles.partnerCard}>
	<img src={img ? img : placeholderImage} alt={`${title}-logo`} className={styles.logo}/>
	<p style={{fontWeight: '300'}}>{title}</p>
	<p>{text}</p>
</div>

const members = [
	{
		title: "Charles Gonzalez / PTYX",
		text: "Founder & CEO",
		img: ptyx
	},
	{
		title: "Cesar Zambrano / St3rling0x",
		text: "Operational Manager",
		img: Sterling0X

	},
	{
		title: "Nournmene",
		text: "Creative Manager"
	},
	{
		title: "Xad",
		text: "Community Management"
	},
	{
		title: "Pixelstrici",
		text: "UX Designer"
	},
	{
		title: "JohnR",
		text: "Komodo Deployment Specialist"
	}
]

const partners = [
	{
		title: "Aroc Panama",
		text: "Legal & Marketing Advisors",
		img: aroc
	},
	{
		title: "CryptoGeeks",
		text: "Partner & Advisor",
		img: CryptoGeeks
	},
	{
		title: "Abee Ride",
		text: " Partner",
		img: Abe
	},
	{
		title: "Blockchain Embassy Panama",
		text: "Associate",
		img: Panama
	},
	{
		title: "Cryptopia",
		text: "Associate Exchange",
		img: Cryptopia
	},
	{
		title: "CoinGate",
		text: "Associate Payment Processor",
		img: CoinGate
	},
	{
		title: "Irakli Menabde",
		text: "UK Strategy Advisor",
		img: Irakli
	},
	{
		title: "Utrum",
		text: "Partner Project ",
		img: Utrum
	},
	{
		title: "Komodo Platform",
		text: "Partner Project",
		img: Komodo
	},
	{
		title: "CambridgeFX Global Payments",
		text: "Associate Payment Processor",
		img: Cambridge
	},
	{
		title: "Coinexchange.io",
		text: "Associate Exchange",
		img: Coinexchange
	},
	{
		title: "Crypto Core Media",
		text: "Partner",
		img: CryptoCore
	},
	{
		title: "Libertaria Movement",
		text: "Associate",
		img: Libertaria
	},
]

export default () => <div className={styles.partners}>
	<LetterHead title='MEET THE TEAM' />
	<h1 className={styles.title}>Core Members, Partners & Exchanges</h1>
	<div className={styles.cardsWrapper}>
	<div className={styles.cards}>
		{
			members.map((({ title, text, img }) => <PartnerCard img={img} key={title} title={title} text={text} />))
		}
	</div>
	</div>
	<div className={styles.cardsWrapper}>
	<div className={styles.hr}/>
	<div className={styles.cards}>
		{
			partners.map((({ title, text, img }) => <PartnerCard img={img} key={title} title={title} text={text} />))
		}
	</div>
	</div>
</div>