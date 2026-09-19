"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SvgSprite from "@/components/SvgSprite";

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="page">
      <SvgSprite />
      <Header />

      <main
        className="main"
        style={{ background: "url(/img/main-bg.png) no-repeat center", backgroundSize: "cover" }}
      >
        <div className="ovarlay"></div>
        <div className="container">
          <div className="offer">
            <img src="/img/offer_text.svg" alt="" className="offer_logo" />
            <h2 className="description_text">Your growth is our passion</h2>
          </div>
        </div>
      </main>

      <section className="about">
        <div className="container">
          <span className="about_title general_title">about us</span>
          <div className="title_text_wrapper">
            <h2 className="title_text about_title_text">
              <span className="gold_text">Goodwill Capital</span> is a private equity fund that finance promising
              private businesses with special purpose acquisition companies (SPACs) on the NASDAQ and NSYE markets .
            </h2>
          </div>
          <div className="about_info d-flex">
            <div className="about_info_img">
              <img src="/img/about_image.jpg" alt="" />
            </div>
            <div className="about_info_text_wrapper">
              <p className="about_info_text_up about_info_text">
                The basis of our success is a team of international specialists and partners <br /> in the field of
                investment, finance and law.
              </p>
              <p className="about_info_text_down about_info_text">
                Our international presence, global vision and expertise enable us to maintain high rates of return
                with controlled risk.
              </p>
              <a href="/who-we-are" className="about_info_text_btn general_btn d-flex">
                <span className="btn_text">Learn more</span>
                <img src="/img/btn.svg" alt="" />
                <span className="btn_line"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="our_work">
        <div className="container">
          <span className="our_work_title general_title">OUR ACTIVITIES</span>
          <div className="title_text_wrapper title_text_wrapper_work">
            <h2 className="title_text activities_title_text">
              <span className="gold_text">Goodwill Capital</span> provides an opportunity for non-qualified investors
              to participate in the creation of SPAC with part of the required capital.
            </h2>
          </div>
          <div className="our_work_info d-flex">
            <div className="our_work_info_text_wrapper info_text_wrapper">
              <p className="our_work_info_text_up our_work_info_text">
                Accumulating funds for subsequent investment, the fund acts as a sponsor, organizing a SPAC, for
                which it receives a share in the new company.
              </p>
              <p className="our_work_info_text_down our_work_info_text">
                Goodwill Capital&apos;s objective is to then exit the equity at the most opportune time.
              </p>
              <a href="/what-we-do" className="our_work_info_text_btn general_btn d-flex">
                <span className="btn_text">Learn more</span>
                <img src="/img/btn.svg" alt="" />
                <span className="btn_line"></span>
              </a>
            </div>
            <div className="our_work_info_img">
              <img src="/img/what_we_do_image.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <span className="general_title values_title">values</span>
          <div className="values_group">
            <div id="values_item_1" className="values_item d-flex">
              <div className="values_animate">
                <img src="/img/animtion_1.gif" alt="" />
              </div>
              <h2 className="values_item_title">Legality</h2>
              <p className="values_text">
                We pay special attention to legal aspects and closely monitor compliance with all legal norms
              </p>
            </div>
            <div id="values_item_2" className="values_item d-flex">
              <div className="values_animate values_animate_center">
                <img src="/img/animtion_2.gif" alt="" />
              </div>
              <h2 className="values_item_title">High income</h2>
              <p className="values_text">We choose only effective instruments that guarantee long term income</p>
            </div>
            <div id="values_item_3" className="values_item d-flex">
              <div className="values_animate values_animate3 d-flex">
                <img src="/img/move_circle.gif" alt="" />
              </div>
              <h2 className="values_item_title">Team</h2>
              <p className="values_text">
                We have a wide range of skills and experience cooperating with many well-known industry players
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <span className="general_title partners_title">OUR PARTNERS</span>
          <div className="partners_row d-flex">
            <a href="#" className="partners_item">
              <span className="partners_logo">
                <img src="/img/partners1.png" alt="ARC Capital" />
              </span>
              <p className="partners_name">ARC Capital</p>
              <span className="partners_link">www.arccap.us</span>
            </a>
            <a href="#" className="partners_item">
              <span className="partners_logo">
                <img src="/img/partners2.png" alt="Knights Capital Partners Sdn" />
              </span>
              <p className="partners_name">Knights Capital Partners Sdn</p>
              <span className="partners_link">www.knights.vc</span>
            </a>
            <a href="#" className="partners_item">
              <span className="partners_logo">
                <img src="/img/partners3.png" alt="Liso Consulting" />
              </span>
              <p className="partners_name">Liso Consulting</p>
              <span className="partners_link">www.lisoconsulting.com</span>
            </a>
          </div>
        </div>
      </section>

      <section className="questions">
        <div className="container">
          <span className="questions_title general_title">HAVE A QUESTION?</span>
          <div className="questions_content d-flex">
            <div className="questions_info">
              <h2 className="questions_title_text title_text">
                We are always in touch and ready to provide you with advice, assistance <br /> and support
              </h2>
              <div className="questions_img">
                <img src="/img/questios_image.jpg" alt="" />
              </div>
            </div>
            <form
              action="#"
              className="form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="input_group">
                <input type="text" required className="common name_place" />
                <label className="input_valeu">Name</label>
              </div>
              <div className="input_group">
                <input type="text" required className="common phone_place" />
                <label className="input_valeu">Phone</label>
              </div>
              <div className="input_group">
                <input type="text" required className="common e_mail_place" />
                <label className="input_valeu">E-mail</label>
              </div>
              <div className="input_group">
                <input type="text" required className="common topic_place" />
                <label className="input_valeu">Topic</label>
              </div>
              <div className="input_group">
                <input type="text" required className="common message_place" />
                <label className="input_valeu">Message</label>
              </div>
              <a
                href="#"
                className="questions_info_text_btn general_btn d-flex"
                onClick={(event) => {
                  event.preventDefault();
                  setPopupOpen(true);
                }}
              >
                <span className="btn_text">Send</span>
                <img src="/img/btn.svg" alt="" />
                <span className="btn_line"></span>
              </a>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <div className={`pop_up_wrapper${popupOpen ? " active" : ""}`}>
        <div className="pop_up_overlay" onClick={() => setPopupOpen(false)}></div>
        <div className="pop_up">
          <div className="pop_up_animate">
            <img src="/img/pop_up_animate.gif" alt="" />
          </div>
          <h2 className="pop_up_title general_text">Thank you!</h2>
          <div className="pop_up_subtitle">Your message has been sent</div>
        </div>
      </div>
    </div>
  );
}
