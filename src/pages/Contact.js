import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Words } from '../components/Words';
import { SwapArrow, Mail, WhatsApp, Phone, Pin, Check } from '../components/Icons';
import { services } from '../data/services';
import { site, whatsappLink } from '../data/site';
import { useReveal } from '../lib/motion';
import useTitle from '../lib/useTitle';

const budgets = ['Under ₹50k', '₹50k – 2L', '₹2L – 5L', '₹5L +', 'Not sure yet'];

function buildMessage(form) {
  const lines = ["Hi Inertia! I'd like to discuss a project.", '', `Name: ${form.name}`];
  if (form.company) lines.push(`Company: ${form.company}`);
  lines.push(`Email: ${form.email}`);
  if (form.phone) lines.push(`Phone: ${form.phone}`);
  if (form.services.length) lines.push(`Interested in: ${form.services.join(', ')}`);
  if (form.budget) lines.push(`Budget: ${form.budget}`);
  lines.push('', form.message);
  return lines.join('\n');
}

export default function Contact() {
  const root = useRef(null);
  const [params] = useSearchParams();
  const preset = services.find((s) => s.slug === params.get('service'));
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: preset ? [preset.title] : [],
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  useTitle('Contact', 'Tell us about your project. Inertia Software designs and builds ERP software, websites and apps.');
  useReveal(root);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const toggleService = (title) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(title) ? f.services.filter((t) => t !== title) : [...f.services, title],
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage(form)), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const mailHref = () =>
    `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry — ${form.name || 'New project'}`)}&body=${encodeURIComponent(buildMessage(form))}`;

  return (
    <div ref={root} className="contact">
      <section className="phero">
        <div className="container contact__grid">
          <div className="contact__intro">
            <p className="eyebrow" data-fade="">Contact</p>
            <Words as="h1" className="display contact__title" text="Let’s talk about your *project*." />
            <p className="lede" data-fade="0.25">
              Tell us what you’re building. {site.responseTime}, and you get a <strong>free working demo of your
              product within two days</strong>, no obligation.
            </p>

            <ul className="contact__direct" data-stagger="">
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail /> <span><span className="mono">Email</span>{site.email}</span>
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsApp /> <span><span className="mono">WhatsApp</span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref}>
                  <Phone /> <span><span className="mono">Call</span>{site.phone}</span>
                </a>
              </li>
              <li>
                <span className="contact__static">
                  <Pin /> <span><span className="mono">Based in</span>{site.location}</span>
                </span>
              </li>
            </ul>
          </div>

          <form className="brief" onSubmit={onSubmit} data-fade="0.2" aria-labelledby="brief-title">
            <h2 id="brief-title" className="brief__title">Project brief</h2>

            <fieldset className="brief__set">
              <legend className="brief__label mono">What do you need?</legend>
              <div className="chips">
                {services.map((s) => {
                  const on = form.services.includes(s.title);
                  return (
                    <button
                      type="button"
                      key={s.slug}
                      className={`chip ${on ? 'is-active' : ''}`}
                      aria-pressed={on}
                      onClick={() => toggleService(s.title)}
                    >
                      {on && <Check width={16} height={16} />}
                      {s.title}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="brief__row">
              <label className="field">
                <span className="brief__label mono">Your name *</span>
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label className="field">
                <span className="brief__label mono">Company</span>
                <input name="company" value={form.company} onChange={update} autoComplete="organization" />
              </label>
            </div>
            <div className="brief__row">
              <label className="field">
                <span className="brief__label mono">Email *</span>
                <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
              </label>
              <label className="field">
                <span className="brief__label mono">Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" />
              </label>
            </div>

            <fieldset className="brief__set">
              <legend className="brief__label mono">Budget (optional)</legend>
              <div className="chips">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    className={`chip ${form.budget === b ? 'is-active' : ''}`}
                    aria-pressed={form.budget === b}
                    onClick={() => setForm((f) => ({ ...f, budget: f.budget === b ? '' : b }))}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="field">
              <span className="brief__label mono">Tell us about the project *</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={update}
                required
                placeholder="Goals, timeline, anything we should know…"
              />
            </label>

            <div className="brief__actions">
              <button type="submit" className="btn">
                <span>Send via WhatsApp</span>
                <SwapArrow up />
              </button>
              <a className="textlink" href={mailHref()}>
                or send by email <SwapArrow />
              </a>
            </div>
            <p className={`brief__note ${sent ? 'is-sent' : ''}`} role="status">
              {sent
                ? 'Thanks! WhatsApp should have opened with your brief ready to send.'
                : 'Your brief opens in WhatsApp, ready to send. Nothing is stored on this site.'}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
