import Button from "@/components/ui/Button";

export default function About() {
  return (
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
            <Button href="/who-we-are" className="about_info_text_btn">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
