import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/Footer"
import pic1 from "../images/pic01.jpg"
import pic2 from "../images/pic02.jpg"
import pic3 from "../images/pic03.jpg"
import Sidebar from "../components/Sidebar"
import Scroll from "../components/Scroll"

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Lultech</h1>
          <p>
            We build data driven distributed software solutions for your
            business.
            <br />
            using blazing fast <a href="https://jamstack.org">JAMStack</a>{" "}
            deployed on optimized cloud architecture{" "}
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Nur M</h2>
              <p>
                Fullstack Javascript developer.
                <br /> JS, React, Svelte, NodeJS, Knex
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/fatahn/"
                    className="icon fa-github"
                    style={{ fontSize: "3rem" }}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Yunus A.</h2>
              <p>
                DevOps and cloud Engineer.
                <br /> Spring, GCP, AWS
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/SaidAbdullahi/"
                    className="icon fa-github"
                    style={{ fontSize: "3rem" }}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Said A.</h2>
              <p>
                Data Scientist.
                <br /> Python, GCP
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/yunus89"
                    className="icon fa-github"
                    style={{ fontSize: "3rem" }}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            We are a team of Javascript developers, based in Kenya. We help
            local companies build data inspired and data driven solutions.
            Companies can turn their already existing data collections into
            meaningful insights than can be used to make informed business
            decisions.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-database" />
              <h3>Data Collection</h3>
              <p>
                Our Data Engineers help you digitize, clean and structure your
                company's data.
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>Development</h3>
              <p>
                We build a solution that helps you derive insight from your data
                using the bleeding edge of JS, for a faster, offline-first
                experience.
              </p>
            </section>
            <section>
              <span className="icon major fa-terminal" />
              <h3>Deployment</h3>
              <p>
                We serve our solution on optimized cloud architecture or locally
                on premise.
              </p>
            </section>
            <section>
              <span className="icon major fa-shield" />
              <h3>Security</h3>
              <p>We attack the system to test possible vulnerabilities.</p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>Talk to us about your needs, get a quote of just say hi :).</p>
          <div className="split style1">
            <section>
              <form name="contact" method="POST" data-netlify="true">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    3rd Parklands Road #654
                    <br />
                    Nairobi
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="/#">team@lultech.com</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(+254) 732 886 886</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
