import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email check
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);

    // Simple client-side simulate send (no backend)
    setTimeout(() => {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Contact Us</h1>
          <p>Have questions? Our support team is ready to help. Fill the form and we'll get back to you shortly.</p>

          <div className={styles.info}>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:support@better-replica.com">support@better-replica.com</a></p>
            </div>
            <div>
              <strong>Phone</strong>
              <p><a href="tel:+18001234567">+91 1234567890</a></p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {!sent ? (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {error && <div className={styles.error}>{error}</div>}
              <label className={styles.field}>
                <span>Name</span>
                <input name="name" value={form.name} onChange={handleChange} />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input name="email" value={form.email} onChange={handleChange} />
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea name="message" value={form.message} onChange={handleChange} rows="6" />
              </label>

              <button type="submit" className={styles.submit}>Send Message</button>
            </form>
          ) : (
            <div className={styles.success}>
              <h3>Thanks — message sent!</h3>
              <p>We’ll reply to your email soon. If it’s urgent, call +91 1234567890.</p>
              <button className={styles.submit} onClick={() => setSent(false)}>Send another message</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
