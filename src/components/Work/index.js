import React from 'react'
import styles from './index.module.css'

import Card from '../../templates/Card'
import LetterHead from '../../templates/LetterHead'

import invoicing from '../../img/invoicing.png'
import agreement from '../../img/agreement.png'
import delivery from '../../img/delivery.png'
import deployment from '../../img/deployment.png'

const cards = [
	{
	title: "First Contact",
	text: "The first step is to reach out to Chainzilla with all the details of your new blockchain and details of the project.",
	img: invoicing
	},
	{
		title: "Invoicing & Agreement",
		text: "Once we have reviewed the information and confirm that our specialists have all the necessary details, and are 100% sure we can meet your expectations we will send you an invoice for the total cost. There are no hidden costs or fees.",
		img: agreement
	},
	{
		title: "Delivery",
		text: "Upon verification of payment we will set an official deadline for the delivery of your blockchain and applications. It takes Chainzilla 4 business weeks to render services. Once delivered our team will walk you through the process of testing your new dapps, website, wallet, block explorer, and spv servers. If your project requires ongoing consulting services by Chainzilla we can offer custom packages.",
		img: delivery
	},
	{
		title: "Deployment",
		text: "Finally, after your package is delivered you are ready to launch your dICO or traditional ICO on your own!",
		img: deployment
	}
]

export default () => <div className={styles.work}>
	<div className={styles.contentWrapper}>
		<LetterHead title="Let's do this" />
		<h1>HOW DOES IT WORK?</h1>
		<div className={styles.cards}>
		{
			cards.map(({ title, text, img }) => <Card className={styles.card} img={img} key={title} title={title} text={text} />)
		}
		</div>
	</div>
</div>