import React from 'react';
import { connect } from "react-redux";
import { scroller } from 'react-scroll'
import { switchLanguage, toggleNav } from '../../actions'
import styles from './index.module.css'

import SideDrawer from '../SideDrawer'
import Backdrop from '../Backdrop'

import smallLogo from '../../img/small-logo.png'
import logo from '../../img/header-logo.png'
import fullLogo from '../../img/FullLogo.png'
import rocket from '../../img/rocket.png'

import arrowDown from '../../img/arrow-down.png'

const mapStateToProps = state => ({
	isNavOpen: state.toggleNav,
	currentLanguage: state.currentLanguage,
	menuItems: state.header.menuItems,
	inBanking: state.header.inBanking,
	inCrypto: state.header.inCrypto,
	mission: state.header.mission,
	diy: state.header.diy,
	komodo: state.header.komodo,
	launchText: state.header.launchText,
	launchTextMobile: state.header.launchTextMobile
})

const mapDispatchToProps = dispatch => {
  return {
		switchLanguage: language => dispatch(switchLanguage(language)),
		toggleNav: value => dispatch(toggleNav(value))
  };
};

class Header extends React.Component {

	state = {
		dark: false
	}

	componentDidMount() {
		window && window.addEventListener("scroll", this.onScroll, false);
	}

	componentWillUnmount() {
    window && window.removeEventListener("scroll", this.onScroll, false);
	}
	
	onScroll = () => {
    if (window.scrollY >= 50) {
      this.setState({dark: true});
    } else {
      this.setState({dark: false});
    }
  }

	render() {

		const {
			isNavOpen,
			switchLanguage,
			toggleNav,
			currentLanguage,
			menuItems,
			inBanking,
			inCrypto,
			mission,
			diy,
			komodo,
			launchText,
			launchTextMobile
		} = this.props;

		return (
			<header className={styles.header}>
	<div style={this.state.dark ? {background: '#1D2B45'} : {background: 'transparent'}} className={styles.navWrapper}>
		<img alt='logo' src={fullLogo} className={styles.navLogo}/>
		<nav className={styles.nav}>
			<ul className={styles.nav}>
				{menuItems[currentLanguage].map(({item, n}) => <li onClick={() => scroller.scrollTo(n, {smooth: true}) } style={this.state.dark ? {color: '#fff'} : {color: '#111126'}} className={styles.item} key={item}>{item}</li>)}
				<a style={this.state.dark ? {color: '#fff'} : null} href="http://www.zillaexplorer.io/" target="_blank" className={styles.item}>Explorer</a> 
				<a style={this.state.dark ? {color: '#fff'} : null} href="https://komodoplatform.com/komodo-wallets/" target="_blank" className={styles.item}>Wallet</a>
				<a style={this.state.dark ? {color: '#fff'} : null} href="https://medium.com/chainzilla" target="_blank" className={styles.item}>Blog</a>
				<a style={this.state.dark ? {color: '#fff'} : null} href="https://faucet.chainzilla.io" target="_blank" className={styles.item}>Faucet</a>
        <a style={this.state.dark ? {color: '#fff'} : null} href="/ChainZilla_Litepaper_v1.pdf" className={styles.item} target="_blank">Litepaper</a> 
				<select className={styles.select} onChange={(e) => switchLanguage(e.target.value)}>
					<option value='en'>EN</option>
					<option value='es'>ES</option>
				</select>
			</ul>
		</nav>
		<nav className={styles.mobileNav}>
		<img alt='logo' src={smallLogo} />
			<button className={styles.toggleButton} onClick={() => toggleNav(!isNavOpen)}>
					<div className={styles.toggleButtonLine} />
					<div className={styles.toggleButtonLine} />
					<div className={styles.toggleButtonLine} />
			</button>
		</nav>
	</div>
	{
		isNavOpen && 	<Backdrop />
	}
	<SideDrawer
		isNavOpen={isNavOpen}
		switchLanguage={switchLanguage}
		currentLanguage={currentLanguage}
		menuItems={menuItems}
	/>
	<div className={styles.texts}>
		<p className={styles.inBanking}>{inBanking[currentLanguage]}</p>
		<p className={styles.inCrypto}>{inCrypto[currentLanguage]}</p>
		<p className={styles.mission}>{mission[currentLanguage]}</p>
		<p className={styles.diy}>{diy[currentLanguage]}</p>
		<p className={styles.komodo}>{komodo[currentLanguage]}</p>
		<div className={styles.launch}>
			<p onClick={() => scroller.scrollTo('form', {smooth: true})} className={styles.launchText}>{launchText[currentLanguage]}</p>
			<img style={{width: '25px'}} src={rocket} />
		</div>
	</div>
	<div className={styles.mobileTexts}>
		<p className={styles.inBankingMobile} style={{textAlign: 'center', color: '#fff', fontWeight: '300'}}>{inBanking[currentLanguage]}</p>
		<p className={styles.inCryptoMobile} style={{textAlign: 'center', color: '#121329', fontWeight: '300'}}>{inCrypto[currentLanguage]}</p>
		<p className={styles.diyMobile}>{diy[currentLanguage]}</p>
		<p className={styles.komodoMobile}>{mission[currentLanguage]}</p>
		<p className={styles.komodoMobile}>{komodo[currentLanguage]}</p>
		<button onClick={() => scroller.scrollTo('form', {smooth: true})} className={styles.launchMobile}>{launchTextMobile[currentLanguage]}</button>
	</div>
	<div onClick={() => scroller.scrollTo('form', {smooth: true})}  className={styles.circle}>
		<img style={{width: '40px'}} src={arrowDown} />
	</div>
	<img className={styles.logo} src={logo} alt='logo' />
</header>
		)
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
