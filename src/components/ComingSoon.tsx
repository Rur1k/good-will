import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

type ComingSoonProps = {
  title: string;
};

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="page">
      <Header />
      <section className="coming_soon">
        <div className="container">
          <span className="general_title coming_soon_label">{title}</span>
          <h1 className="coming_soon_title gold_text">Coming soon</h1>
          <p className="coming_soon_text">We are working on this page. It will be available shortly.</p>
          <Button href="/" className="coming_soon_btn">
            Back to main
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
