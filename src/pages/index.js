import React from 'react';
import {Link, graphql} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import TextLoop from 'react-text-loop';
import ContactForm from '../components/contactForm';

const dataTextRotator = ['analysis', 'vizualisation', 'learning', 'modelling'];

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="divPage container">
        <div className="textRotator">
          data:
          <span>
            <TextLoop
              children={dataTextRotator}
              springConfig={{stiffness: 70, damping: 20}}
              adjustingSpeed={500}
              className="textLoop"
            />
          </span>{' '}
        </div>
      </div>
      <div className="divPage">
        <h1>
          <a name="about" className="anchorReposition"></a>
          About
        </h1>
        <div
          className="divText"
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </div>
      <div className="divPage divBottomPage">
        <h1>
          <a name="contact" className="anchorReposition"></a>
          Let's talk!
        </h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      html
    }
  }
`;
