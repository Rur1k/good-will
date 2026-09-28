"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";

const FIELDS = [
  { label: "Name", className: "name_place" },
  { label: "Phone", className: "phone_place" },
  { label: "E-mail", className: "e_mail_place" },
  { label: "Topic", className: "topic_place" },
  { label: "Message", className: "message_place" },
];

export default function Questions() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
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
            <form action="#" className="form" onSubmit={(event) => event.preventDefault()}>
              {FIELDS.map((field) => (
                <div key={field.label} className="input_group">
                  <input type="text" required className={`common ${field.className}`} />
                  <label className="input_valeu">{field.label}</label>
                </div>
              ))}
              <Button
                href="#"
                className="questions_info_text_btn"
                onClick={(event) => {
                  event.preventDefault();
                  setPopupOpen(true);
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
