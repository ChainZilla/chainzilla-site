import React from 'react'
import styles from './index.module.css'

import logo from '../../img/header-logo.png'
import fullLogo from '../../img/FullLogo.png'
import bg from '../../img/header-bg.png'
import rocket from '../../img/rocket.png'

import arrowDown from '../../img/arrow-down.png'

const menuItems = [
	{item: "DIY Services", n: 695},
	{item: "How it Works", n: 1650},
	{item: "FAQ & Support", n: 4825},
	{item: "Team", n: 7515}
]

export default () => <header className={styles.header}>
	<div className={styles.navWrapper}>
	<img alt='logo' src={fullLogo} className={styles.navLogo}/>
	<nav>
		<ul className={styles.nav}>
			{menuItems.map(({item, n}) => <li onClick={() => window.scrollTo({ top: n, behavior: 'smooth'})} className={styles.item} key={item}>{item}</li>)}
		</ul>
	</nav>
	</div>
	<div className={styles.texts}>
		<p className={styles.inBanking}>In <span style={{fontWeight: 'bold'}}>BANKING</span>, math is based on trust.</p>
		<p className={styles.inCrypto}>In <span style={{fontWeight: 'bold'}}>CRYPTO</span>, trust is based on math.</p>
		<p className={styles.mission}>ChainZilla’s mission is to become the standard in development of DIY solutions, decentralized applications, and blockchain deployment.</p>
		<p className={styles.diy}>DIY Blockchain Kit- 4 Week Delivery</p>
		<p className={styles.komodo}>ChainZilla is a 4th gen DIY blockchain service provider of Komodo Assetchains, Altcoins, and ERC20 Tokens. No programming needed!</p>
		<div onClick={() => window.scrollTo({ top: 3915, behavior: "smooth"}) } className={styles.launch}>
			<p className={styles.launchText}>READY TO LAUNCH?</p>
			<img style={{width: '25px'}} src={rocket} />
		</div>
	</div>
	<div className={styles.mobileTexts}>
		<p className={styles.inBankingMobile} style={{textAlign: 'center', color: '#fff', fontWeight: '300'}}>In <span style={{fontWeight: 'bold'}}>BANKING</span>, math is based on trust.</p>
		<p className={styles.inCryptoMobile} style={{textAlign: 'center', color: '#121329', fontWeight: '300'}}>In <span style={{fontWeight: 'bold'}}>CRYPTO</span>, trust is based on math.</p>
		<p className={styles.diyMobile}>DIY Blockchain Kit - 4 Week Delivery</p>
		<p className={styles.komodoMobile}>ChainZilla is a 4th gen DIY blockchain service provider of Komodo Assetchains, Altcoins, and ERC20 Tokens. No programming needed!</p>
		<p className={styles.komodoMobile}>ChainZilla’s mission is to become the standard in development of DIY solutions, decentralized applications, and blockchain deployment.</p>
		<button className={styles.launchMobile}>READY TO LAUNCH?</button>
	</div>
	<div onClick={() => window.scrollTo({ top: 3915, behavior: "smooth"})} className={styles.circle}>
		<img style={{width: '40px'}} src={arrowDown} />
	</div>
	<img className={styles.logo} src={logo} alt='logo' />
</header>
