import React from 'react'
import { Element } from 'react-scroll'
import { connect } from "react-redux";
import styles from './index.module.css'

import Card from '../../templates/Card'
import LetterHead from '../../templates/LetterHead'

const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage,
	cards: state.work.cards,
	title: state.work.title,
	letterhead: state.work.letterhead
})

const Work = ({currentLanguage,title,letterhead,cards}) => <Element name='works'><div className={styles.work}>
	<div className={styles.contentWrapper}>
		<LetterHead title={letterhead[currentLanguage]} />
		<h1>{title[currentLanguage]}</h1>
		<div className={styles.cards}>
		{
			cards[currentLanguage].map(({ title, text, img }) => <Card className={styles.card} img={img} key={title} title={title} text={text} />)
		}
		</div>
	</div>
</div>
</Element>

export default connect(mapStateToProps)(Work)