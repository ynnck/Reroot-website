import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextLoop from "react-text-loop"
import ContactForm from "../components/contactForm"

let data = ["analysis", "vizualisation", "learning", "modelling"]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="divPage container">
      <div className="textRotator">
        data:
        <span>
          <TextLoop
            children={data}
            springConfig={{ stiffness: 70, damping: 20 }}
            adjustingSpeed={500}
          />
        </span>{" "}
      </div>
    </div>
    <div className="divPage">
      <h1>
        <a name="about" className="anchorReposition"></a>
        About
      </h1>
      <div className="divText">
        <p>
          Lorem ipsum dolor sit amet, mei nisl adhuc et, impedit gubergren
          dissentiet et sea. Accusamus inciderint quo te, esse meis simul in
          vis. Dolore ridens cu sed, eos at ferri munere mentitum. Sed illud
          utinam consul ut. Labores persequeris suscipiantur eu eam, eu his
          elitr partiendo inciderint. Mel tation scripta voluptaria et, mel te
          solum urbanitas, eos admodum molestie epicurei eu. Aliquip molestie
          theophrastus per ut, an ubique eligendi nec. Quem falli aliquando eam
          ne, has ne tibique scriptorem.
        </p>
        <p className="pAlignRight">
          At usu dolore sadipscing neglegentur, cum justo tempor ad, id vix alia
          veritus. Ea vim summo praesent liberavisse. Ei qui appareat officiis,
          per et vulputate constituto. Per harum mentitum et. Dicunt moderatius
          at vix, an sea vocent option probatus. Usu id verear alienum.Tamquam
          volutpat mei ea, ne sed movet nonumes efficiantur, admodum consulatu
          mei ei. Integre instructior an eum, ius id malis suavitate. Cu per
          tota option labitur, ex mel prompta indoctum imperdiet. No scripta
          menandri corrumpit sed, eam habeo assum hendrerit et, ex has
          complectitur conclusionemque. Adhuc semper tritani ea has.
        </p>
        <p>
          Ancillae reprehendunt quo ex, regione feugiat ea eum. Vis possit
          menandri petentium at, sint quodsi civibus vis ex, vim cu nibh soleat
          docendi. Nec nemore concludaturque eu, in eum dicit utamur. Ad vix
          rebum dissentiet, ut has delenit nominati dissentias, luptatum
          reprimique reprehendunt eu vis. Ei his agam electram salutandi, sed
          stet ornatus sententiae eu.
        </p>
      </div>
    </div>
    <div className="divPage divBottomPage">
      <h1>
        <a name="contact" className="anchorReposition"></a>
        Let's talk!
      </h1>
      <ContactForm />
    </div>
  </Layout>
)

export default IndexPage
