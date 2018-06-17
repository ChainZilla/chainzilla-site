import React from 'react'

import styles from './index.module.css'

import discord from '../../img/Discord_Icon-lg.jpg'
import github from '../../img/Github_Icon-lg.jpg'
import telegram from '../../img/Telegram_Icon-lg.jpg'
import twitter from '../../img/Twitter_Icon-lg.jpg'
import reddit from '../../img/Reddit_Icon-lg.jpg'
import fullLogo from '../../img/FullLogo.png'
import bitcoin from '../../img/Bitcoin_PayIcon-lg.jpg'
import ethereum from '../../img/Etheruem_PayIcon-lg.jpg'
import komodo from '../../img/KMD_PayIcon-lg.jpg'
import litecoin from '../../img/Litecoin_PayIcon-lg.jpg'
import visa from '../../img/Visa_PayIcon-lg.jpg'
import mastercard from '../../img/Mastercard_PayIcon-lg.jpg'

const Item = ({icon, link}) => <div className={styles.item}>
	<a href={link}>
		<img style={{width: '100%'}} src={icon} />
	</a>
</div>

const social = [
	{
		icon: discord,
		link: 'https://discord.gg/G4dxgmv'
	},
	{
		icon: telegram,
		link: 'https://t.me/chainzillaio'
	},
	{
		icon: twitter,
		link: 'https://twitter.com/ChainZillaio?s=09'
	},
	{
		icon: reddit,
		link: 'https://www.reddit.com/r/ChainZilla/'
	},
	{
		icon: github,
		link: 'https://github.com/orgs/ChainZilla'
	}
]
const payments = [
	{
		icon: bitcoin
	},
	{
		icon: ethereum
	},
	{
		icon: komodo
	},
	{
		icon: litecoin
	},
	{
		icon: visa
	},
	{
		icon: mastercard
	}
]

export default () => <div className={styles.footer}>
	<div className={styles.footerWrapper}>
	<div className={styles.social}>
		<p>SOCIAL MEDIA CHANNELS</p>
		<div className={styles.socialIcons} >
			{
				social.map(({ icon, link }) => <Item icon={icon} link={link}/>)
			}
		</div>
	</div>
	<div>
		<img src={fullLogo} style={{width: '246px'}} />
		<h1 className={styles.email}><a href="mailto:contact@chainzilla.io">contact@chainzilla.io</a></h1>
	</div>
	<div className={styles.social}>
		<p>PAYMENTS ACCEPTED</p>
		<div className={styles.socialIcons}>
			{
				payments.map(({ icon, link }) => <Item icon={icon} link={link}/>)
			}
		</div>
	</div>
	</div>
	<p className={styles.disc}>
		Please consult your professional financial, investment, and tax advisers before making any investment or launching an initial coin offering (“ICO”). ChainZilla.io does not provide investment or financial advice and does not endorse or recommend investment in any ICOs advertised on this site. The content on this site is provided for informational purposes only and should be supplemented with independent research and factual verification. ChainZilla.io receives compensation for promoting certain ICOs. Such compensation is not based on whether or not users of ChainZilla.io invest in advertised ICOs or other types of “success” fees. ChainZilla.io is not regulated as either a broker-dealer or funding portal and is not a member of FINRA. ChainZilla.io does not offer or sell any securities, solicit investors for securities offerings, engage in any negotiations regarding potential investments, or participate in the sale or purchase of any securities or otherwise effect transactions in securities. Any offer, sale or purchase in ICOs is in the sole discretion of, and is conducted directly between, issuers and the prospective investors. All information provided regarding potential ICO investment opportunities is prepared solely by the issuer, and such issuer is solely responsible for the accuracy of all such statements. ChainZilla.io has not independently verified any such information. Chainzilla.io does not host third-party ICOs. ChainZilla.io team members, associates, and partners shall not be liable for any claims, expenses, damages (including direct, indirect, special or consequential damages), loss of profits, opportunities or information arising from: the use of or reliance on information contained in this website; any inaccuracy or omission in such information or failure to keep the information current; use of any third party websites linked to this website; any Internet software used in connection with this website or computer viruses or other destructive programs encountered as a result of using this website; and any other matter connected with this website; even if Chainzilla.io is made aware of the possibility of such claims, expenses, damages or losses.
	</p>
</div>