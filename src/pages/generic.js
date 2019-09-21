import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Footer from "../components/Footer"

import pic4 from "../images/pic04.jpg"
import Header from "../components/Header"

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">About</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <p>
            At lultech, we provide companies with the ability to use use their
            business data to derive meaningful insights from it. We do this by
            working with AI experts to turn your old data into a treasure trove
            of insight.
          </p>
          <p>
            We can plug into your existing data or build you new data collection
            pipeline and tools. We gather what is important and together with
            our AI partners, transform the data into meaningful insights,
            carefully visualized and presented in a way that helps you make
            confident business decisions.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
)

export default SecondPage
