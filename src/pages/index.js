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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "calc(10px + 5vmin)",
          textAnchor: "middle",
          width: "28vw",
        }}
      >
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
    <div style={{ minHeight: "100vh" }}>
      <h1>
        <a
          name="about"
          style={{
            display: "block",
            position: "relative",
            top: "calc(-10px - 13vmin)",
          }}
        ></a>
        About
      </h1>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <p style={{ width: "48%", minWidth: "325px", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, mei nisl adhuc et, impedit gubergren
          dissentiet et sea. Accusamus inciderint quo te, esse meis simul in
          vis. Dolore ridens cu sed, eos at ferri munere mentitum. Sed illud
          utinam consul ut. Labores persequeris suscipiantur eu eam, eu his
          elitr partiendo inciderint. Mel tation scripta voluptaria et, mel te
          solum urbanitas, eos admodum molestie epicurei eu. Aliquip molestie
          theophrastus per ut, an ubique eligendi nec. Quem falli aliquando eam
          ne, has ne tibique scriptorem.
        </p>
        <p
          style={{
            alignSelf: "flex-end",
            width: "48%",
            minWidth: "325px",
            textAlign: "justify",
          }}
        >
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
        <p style={{ width: "48%", minWidth: "325px", textAlign: "justify" }}>
          Ancillae reprehendunt quo ex, regione feugiat ea eum. Vis possit
          menandri petentium at, sint quodsi civibus vis ex, vim cu nibh soleat
          docendi. Nec nemore concludaturque eu, in eum dicit utamur. Ad vix
          rebum dissentiet, ut has delenit nominati dissentias, luptatum
          reprimique reprehendunt eu vis. Ei his agam electram salutandi, sed
          stet ornatus sententiae eu.
        </p>
      </div>
    </div>
    <div style={{ minHeight: "calc(100vh - (20px + 14vmin))", width: "100%" }}>
      <h1>
        <a
          name="contact"
          style={{
            display: "block",
            position: "relative",
            top: "calc(-10px - 13vmin)",
          }}
        ></a>
        Let's talk!
      </h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default IndexPage
