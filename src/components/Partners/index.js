import React from 'react'
import { Element } from 'react-scroll'
import { connect } from "react-redux";
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

const PartnerCard = ({title,text,img,url}) => {
	
	const Card = url ? (
		<div>
		<a href={url}>
			<img src={img ? img : placeholderImage} alt={`${title}-logo`} className={styles.logo}/>
			<p style={{fontWeight: '300'}}>{title}</p>
			<p>{text}</p>
		</a>
		</div>
	) : (
		<div>
			<img src={img ? img : placeholderImage} alt={`${title}-logo`} className={styles.logo}/>
			<p style={{fontWeight: '300'}}>{title}</p>
			<p>{text}</p>
		</div>
	)
	
	return (
		<div className={styles.partnerCard}>
			{Card}	
		</div>
	)
}


const members = [
	{
		title: "Charles Gonzalez / PTYX",
		text: "Founder & CEO",
		img: ptyx,
		url: "https://www.linkedin.com/in/blockchainasaservice"
	},
	{
		title: "Cesar Zambrano / St3rling0x",
		text: "Operational Manager",
		img: Sterling0X,
		url: "https://bitcointalk.org/index.php?action=profile;u=2076820;sa=summary"

	},
	{
		title: "Nournmene",
		text: "Creative Manager",
		url: ""
	},
	{
		title: "Xad",
		text: "Community Management",
		url: ""
	},
	{
		title: "Pixelstrici",
		text: "UX Designer",
		url: ""
	},
	{
		title: "JohnR",
		text: "Komodo Deployment Specialist",
		url: ""
	},
	{
		title: "Sonia Ortega",
		text: "Social Media Manager",
		url: ""
	},
	{
		title: "Webworker01",
		text: "Web Developer",
		url: ""
	}
]

const partners = [
	{
		title: "Aroc Panama",
		text: "Legal & Marketing Advisors",
		img: aroc,
		url: "http://arocpanama.com/"
	},
	{
		title: "CryptoGeeks",
		text: "Partner & Advisor",
		img: CryptoGeeks,
		url: "https://www.cryptogeeks.eu/"
	},
	{
		title: "Abee Ride",
		text: " Partner",
		img: Abe,
		url: "https://www.abeeride.com/"
	},
	{
		title: "Blockchain Embassy Panama",
		text: "Associate",
		img: Panama,
		url: "https://www.embassypty.com"
	},
	{
		title: "Cryptopia",
		text: "Associate Exchange",
		img: Cryptopia,
		url: "http://www.cryptopia.co.nz"
	},
	{
		title: "CoinGate",
		text: "Associate Payment Processor",
		img: CoinGate,
		url: "http://www.coingate.com"
	},
	{
		title: "Irakli Menabde",
		text: "UK Strategy Advisor",
		img: Irakli,
		url: "https://www.linkedin.com/in/irakli-menabde-0152103/"
	},
	{
		title: "Utrum",
		text: "Partner Project ",
		img: Utrum,
		url: "http://www.utrum.io"
	},
	{
		title: "Komodo Platform",
		text: "Partner Project",
		img: Komodo,
		url: "https://komodoplatform.com/"
	},
	{
		title: "CambridgeFX Global Payments",
		text: "Associate Payment Processor",
		img: Cambridge,
		url: "http://www.cambridgefx.com/home/"
	},
	{
		title: "Coinexchange.io",
		text: "Associate Exchange",
		img: Coinexchange,
		url: "https://coinexchange.io"
	},
	{
		title: "Crypto Core Media",
		text: "Partner",
		img: CryptoCore,
		url: "https://cryptocoremedia.com/"
	},
	{
		title: "Libertaria Movement",
		text: "Associate",
		img: Libertaria,
		url: "https://libertaria.world/"
	},
]

const Partners = ({currentLanguage, title, letterhead}) => <Element name='partners'><div className={styles.partners}>
	<LetterHead title={letterhead[currentLanguage]} />
	<h1 className={styles.title}>{title[currentLanguage]}</h1>
	<div className={styles.cardsWrapper}>
	<div className={styles.cards}>
		{
			members.map((({ title, text, img, url }) => <PartnerCard img={img} key={title} title={title} text={text} url={url} />))
		}
	</div>
	</div>
	<div className={styles.cardsWrapper}>
	<div className={styles.hr}/>
	<div className={styles.cards}>
		{
			partners.map((({ title, text, img, url }) => <PartnerCard img={img} key={title} title={title} text={text} url={url} />))
		}
	</div>
	</div>
</div>
</Element>

const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage,
	letterhead: state.partners.letterhead,
	title: state.partners.title
})

export default connect(mapStateToProps)(Partners)