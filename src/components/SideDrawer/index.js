import React from 'react'
import { scroller } from 'react-scroll'
import './index.css'

const items = [
  {
    title: 'DIY Services',
    n: 'diy'
  },
  {
    title: 'How it Works',
    n: 'works'
  },
  {
    title: 'FAQ & Support',
    n: 'faq'
  },
  {
    title: 'Team',
    n: 'partners'
  },
]

const languages = [
  'en',
  'es'
]

const sideDrawer = ({ isNavOpen, switchLanguage, currentLanguage, menuItems }) => {

  let drawerClasses = 'sideDrawer';

  if (isNavOpen) {
    drawerClasses = 'sideDrawer open';
  }

  return (
    <div className={drawerClasses}>
      <ul className='links'>
        {menuItems[currentLanguage].map(({item, n}) => <li onClick={() => scroller.scrollTo(n, {smooth: true}) } key={item}>{item}</li>)}
        <li><a style={{textDecoration: 'none', color: '#fff'}} href="http://www.zillaexplorer.io/" target="_blank">ZillaExplorer</a></li>
        <li><a style={{textDecoration: 'none', color: '#fff'}} href="/ChainZilla_Litepaper_v1.pdf" >Litepaper</a></li>
        <li><a style={{textDecoration: 'none', color: '#fff'}} href="https://komodoplatform.com/komodo-wallets/" target="_blank">Wallet</a></li>
        <li><a style={{textDecoration: 'none', color: '#fff'}} href="https://medium.com/chainzilla" target="_blank">Blog</a></li>
        <li><a style={{textDecoration: 'none', color: '#fff'}} href="https://faucet.chainzilla.io" target="_blank">Faucet</a></li>
      </ul>
      {/* @todo: add whitepaper pdf */} 
      <div className='languages'>
        {languages.map(language => <p style={currentLanguage === language ? {color: 'red'} : null} onClick={() => switchLanguage(language)} key={language}>{language.toUpperCase()}</p>)}
      </div>
    </div>
  );
}

export default sideDrawer;
