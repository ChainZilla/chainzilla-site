import React from 'react'
import { connect } from 'react-redux'
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
import footerTopBg from '../../img/footer_top_bg.png' 

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

const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage,
	socialTitle: state.footer.socialTitle,
	paymentsTitle: state.footer.paymentsTitle,
	desc: state.footer.desc
})

const Footer = ({currentLanguage, socialTitle, paymentsTitle, desc}) => <div className={styles.footer}>
	<img src={footerTopBg} style={{width: "100%"}} /> 
	<div className={styles.footerWrapper}>
	<div className={styles.social}>
		<p>{socialTitle[currentLanguage]}</p>
		<div className={styles.socialIcons} >
			{
				social.map(({ icon, link }) => <Item key={link} icon={icon} link={link}/>)
			}
		</div>
	</div>
	<div>
		<img src={fullLogo} style={{width: '246px'}} />
		<h1 className={styles.email}><a href="mailto:contact@chainzilla.io">contact@chainzilla.io</a></h1>
	</div>
	<div className={styles.social}>
		<p>{paymentsTitle[currentLanguage]}</p>
		<div className={styles.paymentIcons}>
			{
				payments.map(({ icon, link }, id) => <Item key={id} icon={icon} link={link}/>)
			}
		</div>
	</div>
	</div>
	<p className={styles.disc}>
			{desc[currentLanguage]}
	</p>
</div>

export default connect(mapStateToProps)(Footer)