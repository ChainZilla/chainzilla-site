import React from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Element } from 'react-scroll'

import styles from './index.module.css'

import ContentCard from '../../templates/ContentCard'

import wave from '../../img/wave2.svg'

import LetterHead from '../../templates/LetterHead'

const DIY = ({ title,letterhead,tabs,tabpanels,currentLanguage }) => <Element name='diy'><div className={styles.diy}>
<div className={styles.diyWrapper}>
	<div>
    <LetterHead title={letterhead[currentLanguage]} />
    <h1 style={{textAlign: 'center', fontSize: '53.5px', marginBottom: '1rem'}}>{title[currentLanguage]}</h1>
  </div>
	<Tabs className={styles.tabs}>
    <TabList className={styles.tablist}>
      {tabs[currentLanguage].map(tab => <Tab selectedClassName={styles.selectedTab} className={styles.tab} key={tab}>{tab}</Tab>)}
    </TabList>
    {tabpanels[currentLanguage].map( (content, id) => <TabPanel className={styles.tabpanel} key={id}><ContentCard {...content} /></TabPanel>)}
  </Tabs>
</div>
<div className={styles.diyMobile}>
  <ul>
  {
    tabs[currentLanguage].map(tab => <li key={tab}>{tab}</li>)
  }
  </ul>
</div>
<img className={styles.wave} src={wave} />
</div>
</Element>

const mapStateToProps = state => ({
  title: state.diy.title,
  letterhead: state.diy.letterhead,
  tabs: state.diy.tabs,
  tabpanels: state.diy.tabpanels,
  currentLanguage: state.currentLanguage
})

export default connect(mapStateToProps)(DIY)