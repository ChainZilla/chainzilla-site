import React from 'react';
import { connect } from "react-redux";
import { Element } from 'react-scroll'

import styles from './index.module.css';

const FAQ = ({faq, currentLanguage}) => <Element name='faq'><div className={styles.faq}>
	<div className={styles.contentWrapper}>
		<h1 style={{textAlign: 'center', fontSize: '53.5px'}}>{faq.title[currentLanguage]}</h1>
		<div className={styles.wrapper}>
			<h2>{faq.help[currentLanguage]}</h2>
			<p style={{fontWeight: '300', fontSize: '.7rem'}}>
				<a href="http://support.chainzilla.io/a/solutions/" target="_blank">{faq.click[currentLanguage]}</a>
			</p>
			<h2>{faq.use[currentLanguage]}</h2>
			<ul>
				{
					faq.items[currentLanguage].map(item => <li key={item}>{item}</li>)
				}
			</ul>
			<h2>{faq.partnership[currentLanguage]}</h2>
			<p>{faq.offers[currentLanguage]}</p>
		</div>
	</div>
</div>
</Element>

const mapStateToProps = state => {
  return {
		faq: state.faq,
		currentLanguage: state.currentLanguage
	};
};

export default connect(mapStateToProps)(FAQ)