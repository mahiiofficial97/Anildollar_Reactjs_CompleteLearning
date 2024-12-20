import React from 'react'
import Layout from './component/layout/Layout';
import Section from './component/layout/Section';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './Style.css';

export default function App() {
  return (

    <Layout>
      <Section>

        <Page1></Page1>
        <Page2></Page2>

      </Section>

    </Layout>
  )
}
