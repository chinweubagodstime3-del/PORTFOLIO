
function Contact() {
  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">LET'S CONNECT</p>

      <h2 className="section-title">
        Let's Work <span>Together</span>
      </h2>

      <p className="contact-intro">
        Have a project idea or an opportunity? I'd love to hear from you.
        Let's create something amazing together.
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-label">EMAIL</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chinweubagodstime3@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            chinweubagodstime3@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">WHATSAPP</span>
          <a
            href="https://wa.me/23480101120310"
            target="_blank"
            rel="noreferrer"
          >
            Chat with me on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">PHONE</span>
          <a href="tel:+23480101120310">
            08101120310
          </a>
        </div>
      </div>

      <div className="contact-actions">
        <a
          className="contact-button"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chinweubagodstime3@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me ↗
        </a>

        <a
          className="contact-button"
          href="https://wa.me/23480101120310"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Me ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
