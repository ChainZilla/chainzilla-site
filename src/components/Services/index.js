import React from 'react'
import { connect } from 'react-redux'
import styles from './index.module.css'

import Tile from '../../templates/Tile'
import logo from '../../img/zilla-foot.png'

import wave from '../../img/wave2.svg'

const Services = ({services, currentLanguage}) => <div className={styles.services}>
	<img className={styles.wave} src={wave} />
	<div className={styles.contentWrapper}>
		<h1 className={styles.title}>{services.title[currentLanguage]}</h1>
		<p className={styles.subtitle}>{services.subTitle[currentLanguage]}</p>
		<div className={styles.tiles}>
			{
				services.items[currentLanguage].map((({ title, text }) => <Tile key={title} logo={logo} title={title} text={text} />))
			}
		</div>
	</div>
</div>

const mapStateToProps = state => {
  return {
		services: state.services,
		currentLanguage: state.currentLanguage
	};
};

export default connect(mapStateToProps)(Services)