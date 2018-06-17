import React from 'react'
import PropTypes from 'prop-types'
import './index.module.css'

import Header from '../components/Header'
import Work from '../components/Work'
import DIY from '../components/DIY'
import Services from '../components/Services'
import Form from '../components/Form'
import FAQ from '../components/FAQ'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const IndexPage = () => <div>
  <Header />
  <DIY />
  <Work />
  <Services />
  <Form />
  <FAQ />
  <Roadmap />
  <Partners />
  <Footer />
</div>


export default IndexPage
