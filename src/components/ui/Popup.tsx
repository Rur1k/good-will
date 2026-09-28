type PopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function Popup({ open, onClose }: PopupProps) {
  return (
    <div className={`pop_up_wrapper${open ? " active" : ""}`}>
      <div className="pop_up_overlay" onClick={onClose}></div>
      <div className="pop_up">
        <div className="pop_up_animate">
          <img src="/img/pop_up_animate.gif" alt="" />
        </div>
        <h2 className="pop_up_title general_text">Thank you!</h2>
        <div className="pop_up_subtitle">Your message has been sent</div>
      </div>
    </div>
  );
}
