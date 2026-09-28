export default function Hero() {
  return (
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
  );
}
