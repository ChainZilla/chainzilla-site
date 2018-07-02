import React from 'react';
import { Provider } from "react-redux";
import store from '../store';
import './index.module.css';

import Header from '../components/Header'
import Work from '../components/Work'
import DIY from '../components/DIY'
import Services from '../components/Services'
import Form from '../components/Form'
import FAQ from '../components/FAQ'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const IndexPage = () => <Provider store={store}><div>
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
</Provider>


export default IndexPage
