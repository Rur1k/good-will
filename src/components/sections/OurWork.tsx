import Button from "@/components/ui/Button";

export default function OurWork() {
  return (
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
            <Button href="/what-we-do" className="our_work_info_text_btn">
              Learn more
            </Button>
          </div>
          <div className="our_work_info_img">
            <img src="/img/what_we_do_image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
