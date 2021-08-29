/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Contact, Navbar } from "..";
import { prefix } from "../../lib/prefix";
import {
  CloudHand,
  DatabaseCash,
  Diamond,
  DonationHeart,
  EarthShare,
  FlowChart,
  Presentation,
  TeamChat,
  TextShield,
} from "../Icons";

export default function Main() {
  return (
    <>
      <Navbar />
      <section className="banner_main">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="text-bg">
                <h1 className="hero-header">
                  Decentralized Scientific Research
                </h1>
                <p>
                  SCINET is a decentralized life sciences research and
                  investment platform that revolutionizes the way people do and
                  support science. Powered by blockchain technologies, SCINET
                  allows retail and institutional investors to invest directly
                  in life sciences research and technology with security and
                  authenticity.
                </p>
                <a href="#contact">Get Started</a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-img">
                <figure>
                  <img src={`${prefix}/img.png`} alt="get-started" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="" className="hosting">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Own Your Life's Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="web_hosting">
                <figure>
                  <img src={`${prefix}/web.jpg`} alt="#" />
                </figure>
                <p>
                  We know that your work means more to you than anything. SCINET
                  can help you not only perform that work faster, more
                  accurately, and more efficiently, but also help you, your
                  team, and your lab fund and profit from your life's work from
                  inception to translation and beyond.
                </p>
                <a href="#service">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service" className="Services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Crowdfunding Made Easy</h2>
                <p>
                  Lorem ipsum dolor sittem ametamngcing elit, per sed do
                  eiusmoad
                  <br />
                  teimpor sittem elit inuning ut sed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <CloudHand color="#ffffff" />
                <h3>Enhance your Research</h3>
                <p>
                  Access our revolutionary, blockchain-powered cloud laboratory
                  that will propel your research to the next level.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <DonationHeart color="#ffffff" />
                <h3>Get the Funding You Need</h3>
                <p>
                  Ensure your work’s continuity by finding unique and untapped
                  sources of investor funding.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <TextShield color="#ffffff" />
                <h3>Secure your Intellectual Property</h3>
                <p>
                  Document your intellectual property on an immutable blockchain
                  to ensure that you and your lab receive the credit you deserve
                  wherever your discoveries are utilized.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <DatabaseCash color="#ffffff" />
                <h3>Invest in Science and Data</h3>
                <p>
                  Participate in the growth, potential, and excitement of the
                  next generation of life sciences research, no matter who you
                  are.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <EarthShare color="#ffffff" />
                <h3>Decentralized Publishing and Peer Review</h3>
                <p>
                  Publish your research with rigorous peer review from the
                  global scientific community.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="Services-box">
                <TeamChat color="#ffffff" />
                <h3>Help Others Leverage your Data</h3>
                <p>
                  Collaborate with scientists around the world to enhance shared
                  goals. Securely monetize your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="why" className="why">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Why you should choose SCINET</h2>
                <p>
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div id="box_ho" className="why-box">
                <FlowChart color="black" />
                <h3>Organic Enhancement of Laboratory Workflows</h3>
                <p>
                  Unlike off-the-shelf, noncompliant digital tools like Google
                  Docs and Evernote, or even last-gen electronic lab notebooks,
                  SCINET cloud laboratory is uniquely designed with a
                  simple-to-deploy intuitive user interface that promotes good
                  science, meets regulatory compliance, and facilitates
                  collaboration.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="why-box">
                <Diamond color="black" />
                <h3>One-of-a-kind Investment Opportunities</h3>
                <p>
                  Whether you are a retail investor looking for the next
                  exciting investment, an asset manager looking for
                  diversification, or a general partner for a venture capitalist
                  firm, you will have the access to a completely new and unique
                  asset class for your portfolio or clients.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="why-box">
                <Presentation color="black" />
                <h3>Novel Funding Sources and Revenue Streams for your Lab</h3>
                <p>
                  From raising funds for a new research project, to university
                  spin-offs, and data publication on the blockchain, your lab
                  can get the funding and revenue it needs to accomplish its
                  research goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Let's connect!</h2>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <div>
        <footer>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>© SCINET 2021 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
