import React from 'react'
import styles from './index.module.css'

import LetterHead from '../../templates/LetterHead'
import { connect } from 'react-redux';

const Step = ({text, alignment, color, status}) => <div className={styles.step}>
	<div
		className={styles.stepItem}
		style={
			alignment === 'left' ? {borderRight: `4px solid ${color}`, gridColumnStart: '1', textAlign: 'right'} : {borderLeft: `4px solid ${color}`, gridColumnStart: '2'}
		}
	>
		<div
			style={alignment === 'left' ? {background: `${status === 'completed' && color}`, border: `2px solid ${color}`, top: '10px', right: '-14px'} : {background: `${status === 'completed' && color}`, border: `2px solid ${color}`, top: '10px', left: '-14px'}} 
			// Hogy lehet ezt konnektelni??
			// {status === 'completed' ? {background: `${color}`} : {background: '#fff'}}
			className={styles.circle}>
		</div>
		<p style={alignment === 'left' ? {paddingRight: '20px'} : {paddingLeft: '20px'}}>{text}</p>
	</div>
</div>

const Phase = ({title, steps, color}) => <div>
	<p style={{background: `${color}`, textAlign: 'center', padding: '.3rem 0', color: '#fff' }}>{title}</p>
	<div className={styles.stepsWrapper}>
		{
			steps.map(({text, alignment,status}) => <Step status={status} key={text} color={color} text={text} alignment={alignment}/>)
		}
	</div>
</div>

const Roadmap = ({roadmap, currentLanguage}) => <div className={styles.roadmap}>
	<div className={styles.contentWrapper}>
	<LetterHead title={roadmap.letterhead[currentLanguage]} />
	<h1 style={{textAlign: "center", fontSize: '53.5px', color: '#121329'}}>{roadmap.launchText[currentLanguage]}</h1>
	{
		roadmap.phases[currentLanguage].map(({title,steps,color, status}) => <Phase key={title} title={title} steps={steps} color={color} />)
	}
	</div>
</div>

const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage,
	roadmap: state.roadmap
})

export default connect(mapStateToProps)(Roadmap)