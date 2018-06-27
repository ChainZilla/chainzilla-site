import React from 'react'
import styles from './index.module.css'

import LetterHead from '../../templates/LetterHead'
import wave from '../../img/wave3.svg'

const phases = [
	{
		title: 'Second Quarter 2018',
		color: '#b2b2b2',
		steps: [
			{
				text: 'Unveil ChainZilla (completed)',
				alignment: 'right'
			},
			{
				text: 'Setup Legal Structure (completed)',
				alignment: 'left'
			},
			{
				text: 'Establish Partnerships with exchanges, security experts, and crypto communities to endorse ChainZilla',
				alignment: 'right'
			},
			{
				text: 'Initiate development of ChainZilla’s own Basilisk multi-wallet design for Komodo & its assetchains (in process)',
				alignment: 'left'
			},
			{
				text: 'Present our first official contract with a project (in process)',
				alignment: 'right'
			}
		]
	},
	{
		title: 'Fourth quarter 2018 - Project Launch (phase 1)',
		color: '#2c3b61',
		steps: [
			{
				text: 'Komodo DIY',
				alignment: 'right'
			},
			{
				text: 'PoS Altcoin DIY',
				alignment: 'left'
			},
			{
				text: 'ETH ERC20 DIY',
				alignment: 'right'
			},
			{
				text: 'ETH Migration Services',
				alignment: 'left'
			},
			{
				text: 'White Paper Development Services',
				alignment: 'right'
			},
			{
				text: 'Alpha Tests of ChainZilla’s Basilisk multi-wallet for Komodo & all its assetchains. It will become the MEW of Komodo.',
				alignment: 'left'
			}
		]
	},
	{
		title: 'First Quarter 2019 - Zilla Chain Launch (phase 2)',
		color: '#13172f',
		steps: [
			{
				text: 'Launch a utility token that will be used to pay for some ChainZilla’s services such as Komodo notarizations, document storage (IPFS), voting, development services, and for key-value storage on the blockchain.',
				alignment: 'right'
			},
			{
				text: 'ICO to fund second phase of the project',
				alignment: 'left'
			},
			{
				text: 'After a successful and modest ICO, we will initiate an expansion of Chainzilla’s Basilisk multi-wallet  extending wallet functionalities and updated UI.',
				alignment: 'right'
			},
			{
				text: 'Begin development of the Chameleon dICO dapp for all blockchains & ERC20. ChainZilla will expand upon the groundwork laid down by the AGAMA Multiwallet developers. These improvements will increase the usability of Komodo assetchains and extend wallet functionalities. Additionally it will provide users with a state-of-the-art user interface that can be relevant for years to come.',
				alignment: 'left'
			},
			{
				text: "NEM Mosaics",
				alignment: 'right'
			},
			{
				text: "Airdrop ICO Model",
				alignment: 'left'
			}
		]
	},
	{
		title: 'Third Quarter 2019 - Mobile Development (phase 3)',
		color: '#b2b2b2',
		steps: [
			{
				text: 'Deliver new BASILISK Multiwallet UI and initiate peer-review',
				alignment: 'right'
			},
			{
				text: 'Deliver Chameleon dICO dapp and initiate peer-review',
				alignment: 'left'
			},
			{
				text: 'Initiate Basilisk mobile design',
				alignment: 'right'
			},
			{
				text: 'ChainZilla will re-designed an improved version of Agama Mobile Multiwallet. We will seek appstore approval.',
				alignment: 'left'
			},
			{
				text: 'Present our first official contract with a reputable project',
				alignment: 'right'
			}
		]
	},
	{
		title: 'Fourth Quarter 2019 - (phase 4)',
		color: '#2c3b61',
		steps: [
			{
				text: 'Initiate development for standalone Jumblr dapp. ChainZilla will fund the development of a new SPV based Jumblr service.',
				alignment: 'right'
			}
		]
	},
	{
		title: 'First Quarter 2020 - (phase 5)',
		color: '#13172f',
		steps: [
			{
				text: 'Begin development of standalone whitelabel voting app. The dapp will allow users to “tune” into voting sessions and participate without having to install new software for each election held on the blockchain.',
				alignment: 'right'
			}
		]
	}
]

const Step = ({text, alignment,color}) => <div className={styles.step}>
	<div
		className={styles.stepItem}
		style={
			alignment === 'left' ? {borderRight: `4px solid ${color}`, gridColumnStart: '1', textAlign: 'right'} : {borderLeft: `4px solid ${color}`, gridColumnStart: '2'}
		}
	>
		<div style={alignment === 'left' ? {border: `2px solid ${color}`, top: '10px', right: '-14px'} : {border: `2px solid ${color}`, top: '10px', left: '-14px'}} className={styles.circle}></div>
		<p style={alignment === 'left' ? {paddingRight: '20px'} : {paddingLeft: '20px'}}>{text}</p>
	</div>
</div>

const Phase = ({title, steps, color, textColor}) => <div>
	<p style={{background: `${color}`, textAlign: 'center', padding: '.3rem 0', color: '#fff' }}>{title}</p>
	<div className={styles.stepsWrapper}>
		{
			steps.map(({text, alignment}) => <Step key={text} color={color} text={text} alignment={alignment}/>)
		}
	</div>
</div>

export default () => <div className={styles.roadmap}>
	<div className={styles.contentWrapper}>
	<LetterHead title="What's Next?" />
	<h1 style={{textAlign: "center", fontSize: '53.5px', color: '#121329'}}>CHAINZILLA ROADMAP</h1>
	{
		phases.map(({title,steps,color}) => <Phase key={title} title={title} steps={steps} color={color} />)
	}
	</div>
</div>
