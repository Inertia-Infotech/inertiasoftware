import React from 'react';
import sitaiHero from '../assets/work/sitai-hero.jpg';
import sitaiMilk from '../assets/work/sitai-milk.jpg';
import sitaiButter from '../assets/work/sitai-butter.jpg';
import sitaiCombo from '../assets/work/sitai-combo.jpg';
import biryani from '../assets/work/ambika-biryani.jpg';
import paneer from '../assets/work/ambika-paneer.jpg';
import idli from '../assets/work/ambika-idli.jpg';
import samosa from '../assets/work/ambika-samosa.jpg';
import villa from '../assets/work/prop-villa.jpg';
import modern from '../assets/work/prop-modern.jpg';
import house from '../assets/work/prop-house.jpg';
import apartment from '../assets/work/prop-apartment.jpg';
import tmClass from '../assets/work/tm-class.jpg';
import tmBooks from '../assets/work/tm-books.jpg';

// Realistic product "screenshots" built in HTML/CSS. Everything is sized in `em`,
// where 1em = 1% of the card width (container query units), so each shot scales
// perfectly from a phone card to a full-width desktop card.

const Img = ({ src, alt = '' }) => <img src={src} alt={alt} decoding="async" fetchpriority="low" />;

function Browser({ url, children, className = '' }) {
  return (
    <div className={`sh-bw ${className}`} data-parallax="0.06">
      <div className="sh-bw__bar">
        <i />
        <i />
        <i />
        <span className="sh-bw__url">{url}</span>
      </div>
      <div className="sh-bw__body">{children}</div>
    </div>
  );
}

function Phone({ children, className = '', dark = false }) {
  return (
    <div className={`sh-ph ${className}`}>
      <div className={`sh-ph__screen ${dark ? 'is-dark' : ''}`}>
        <div className="sh-ph__notch" />
        <div className="sh-ph__status">
          <span>9:41</span>
          <span className="sh-ph__icons">
            <i />
            <i />
            <i />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* Sitai Milk Products — e-commerce storefront ----------------------------- */
function Sitai() {
  const products = [
    { img: sitaiMilk, name: 'A2 Cow Milk', size: '1 litre', price: '₹72' },
    { img: sitaiButter, name: 'White Butter', size: '500 g', price: '₹260' },
    { img: sitaiCombo, name: 'Morning Combo', size: 'Milk + bread + eggs', price: '₹199' },
  ];
  return (
    <Browser url="sitaimilk.in">
      <div className="sm">
        <nav className="sm-nav">
          <b className="sm-logo">
            <span className="sm-leaf" />
            Sitai
          </b>
          <span>Shop</span>
          <span>Subscriptions</span>
          <span>Our farms</span>
          <span>Contact</span>
          <em className="sm-cart">Cart · 2</em>
        </nav>
        <div className="sm-hero">
          <div className="sm-copy">
            <span className="sm-badge">Farm fresh · Delivered daily</span>
            <h4>
              Pure milk,
              <br />
              delivered every
              <br />
              morning.
            </h4>
            <p>Fresh cow &amp; buffalo milk, paneer, ghee and butter from local farms.</p>
            <div className="sm-btns">
              <span className="sm-btn">Shop now</span>
              <span className="sm-btn sm-btn--o">Start subscription</span>
            </div>
          </div>
          <div className="sm-photo">
            <Img src={sitaiHero} alt="Milk being poured into a glass" />
            <span className="sm-chip">Delivered by 7 AM</span>
          </div>
        </div>
        <div className="sm-products">
          {products.map((p) => (
            <div className="sm-card" key={p.name}>
              <div className="sm-card__img">
                <Img src={p.img} />
              </div>
              <b>{p.name}</b>
              <span>{p.size}</span>
              <div className="sm-row">
                <strong>{p.price}</strong>
                <em>Add</em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* PropVista — real estate portal ------------------------------------------ */
function PropVista() {
  const listings = [
    { img: modern, price: '₹1.25 Cr', title: '3 BHK Apartment', loc: 'Baner, Pune', specs: '3 Beds · 2 Baths · 1,450 sq.ft' },
    { img: house, price: '₹2.40 Cr', title: '4 BHK Villa', loc: 'Gangapur Road, Nashik', specs: '4 Beds · 4 Baths · 2,900 sq.ft' },
    { img: apartment, price: '₹68 L', title: '2 BHK Flat', loc: 'Wakad, Pune', specs: '2 Beds · 2 Baths · 980 sq.ft' },
  ];
  return (
    <Browser url="propvista.in">
      <div className="pv">
        <nav className="pv-nav">
          <b className="pv-logo">
            <span className="pv-mark" />
            PropVista
          </b>
          <span>Buy</span>
          <span>Rent</span>
          <span>New projects</span>
          <span>Sell</span>
          <em>Post property</em>
        </nav>
        <div className="pv-hero">
          <Img src={villa} alt="Modern villa with a pool" />
          <div className="pv-hero__in">
            <h4>
              Find a home
              <br />
              you’ll love.
            </h4>
            <div className="pv-search">
              <div>
                <small>Location</small>
                <b>Pune, Maharashtra</b>
              </div>
              <div>
                <small>Property type</small>
                <b>Apartment</b>
              </div>
              <div>
                <small>Budget</small>
                <b>₹50L – 1.5Cr</b>
              </div>
              <span className="pv-go">Search</span>
            </div>
          </div>
        </div>
        <div className="pv-head">
          <b>Featured properties</b>
          <span>View all →</span>
        </div>
        <div className="pv-list">
          {listings.map((l) => (
            <div className="pv-card" key={l.title}>
              <div className="pv-card__img">
                <Img src={l.img} />
                <span>Verified</span>
              </div>
              <strong>{l.price}</strong>
              <b>{l.title}</b>
              <small>{l.loc}</small>
              <em>{l.specs}</em>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* Cashflow — ERP dashboard ------------------------------------------------ */
function Cashflow() {
  const nav = ['Dashboard', 'Inventory', 'Sales', 'Purchases', 'Production', 'HR & Payroll', 'Reports', 'Settings'];
  const kpis = [
    { label: 'Revenue (Nov)', value: '₹48.2L', delta: '+12.4%' },
    { label: 'Orders', value: '1,284', delta: '+8.1%' },
    { label: 'Stock value', value: '₹1.36Cr', delta: '+3.2%' },
    { label: 'Pending invoices', value: '23', delta: '−5' },
  ];
  const months = [
    ['Jun', 52, 38],
    ['Jul', 61, 44],
    ['Aug', 58, 47],
    ['Sep', 72, 50],
    ['Oct', 80, 56],
    ['Nov', 92, 61],
  ];
  const invoices = [
    ['INV-2041', 'Shree Traders', '₹1,24,500', 'Paid'],
    ['INV-2040', 'Om Distributors', '₹86,200', 'Pending'],
    ['INV-2039', 'Patil Industries', '₹2,10,000', 'Paid'],
  ];
  return (
    <div className="cf" data-parallax="0.06">
      <aside className="cf-side">
        <b className="cf-logo">
          <span />
          Cashflow
        </b>
        {nav.map((n, i) => (
          <span key={n} className={i === 0 ? 'is-on' : ''}>
            <i />
            {n}
          </span>
        ))}
      </aside>
      <div className="cf-main">
        <div className="cf-top">
          <div>
            <b>Dashboard</b>
            <small>Good morning, Admin</small>
          </div>
          <span className="cf-search">Search orders, items, parties…</span>
          <span className="cf-chip">Nov 2026</span>
          <span className="cf-avatar">A</span>
        </div>
        <div className="cf-kpis">
          {kpis.map((k) => (
            <div className="cf-card" key={k.label}>
              <small>{k.label}</small>
              <b>{k.value}</b>
              <em>{k.delta}</em>
            </div>
          ))}
        </div>
        <div className="cf-row">
          <div className="cf-card cf-chart">
            <div className="cf-card__head">
              <b>Sales vs Purchases</b>
              <span>
                <i className="a" /> Sales <i className="b" /> Purchases
              </span>
            </div>
            <div className="cf-bars">
              {months.map(([m, s, p]) => (
                <div key={m}>
                  <span className="cf-bar a" style={{ height: `${s}%` }} />
                  <span className="cf-bar b" style={{ height: `${p}%` }} />
                  <small>{m}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="cf-card cf-donut">
            <b>Stock by category</b>
            <div className="cf-ring">
              <span>
                <b>8,420</b>
                <small>items</small>
              </span>
            </div>
            <ul>
              <li><i className="a" />Raw material 42%</li>
              <li><i className="c" />Finished goods 33%</li>
              <li><i className="b" />Packaging 25%</li>
            </ul>
          </div>
        </div>
        <div className="cf-card cf-table">
          <div className="cf-card__head">
            <b>Recent invoices</b>
            <span>View all</span>
          </div>
          {invoices.map((r) => (
            <div className="cf-tr" key={r[0]}>
              <span>{r[0]}</span>
              <span>{r[1]}</span>
              <span>{r[2]}</span>
              <em className={r[3] === 'Paid' ? 'ok' : 'wait'}>{r[3]}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ThinkingMinds — learning app -------------------------------------------- */
function ThinkingMinds() {
  return (
    <div className="tm" data-parallax="0.06">
      <Phone className="tm-a">
        <div className="tm-pad">
          <div className="tm-hi">
            <div>
              <b>Hi, Aarav</b>
              <small>Ready for today’s goal?</small>
            </div>
            <span className="tm-av">A</span>
          </div>
          <div className="tm-live">
            <span className="tm-badge">● LIVE NOW</span>
            <b>Physics: Motion &amp; Force</b>
            <small>with Neha Ma’am · 1.2k watching</small>
            <span className="tm-join">Join class</span>
          </div>
          <div className="tm-label">Continue learning</div>
          <div className="tm-course">
            <div className="tm-course__img">
              <Img src={tmBooks} />
            </div>
            <div>
              <b>Mathematics</b>
              <small>Chapter 6 · Algebra</small>
              <span className="tm-prog">
                <i style={{ width: '68%' }} />
              </span>
            </div>
            <em>68%</em>
          </div>
          <div className="tm-stats">
            <div>
              <b>12</b>
              <small>day streak</small>
            </div>
            <div>
              <b>340</b>
              <small>XP this week</small>
            </div>
          </div>
        </div>
        <div className="tm-tabbar">
          <i className="is-on" />
          <i />
          <i />
          <i />
        </div>
      </Phone>
      <Phone className="tm-b">
        <div className="tm-video">
          <Img src={tmClass} alt="Students in a classroom" />
          <span className="tm-badge">● LIVE</span>
          <span className="tm-views">1.2k</span>
        </div>
        <div className="tm-pad">
          <b className="tm-title">Motion &amp; Force</b>
          <small className="tm-sub">Class 8 · Lesson 4</small>
          <div className="tm-quiz">
            <span className="tm-quiz__tag">Quick quiz</span>
            <p>Which force keeps the planets in orbit?</p>
            <span className="tm-opt is-right">A. Gravity ✓</span>
            <span className="tm-opt">B. Friction</span>
            <span className="tm-opt">C. Magnetism</span>
          </div>
          <span className="tm-ask">Ask a doubt…</span>
        </div>
      </Phone>
    </div>
  );
}

/* Ambika Hotel — ordering app + live tracking ----------------------------- */
function Ambika() {
  const items = [
    { img: biryani, name: 'Veg Biryani', desc: 'Basmati, saffron, raita', price: '₹210' },
    { img: paneer, name: 'Paneer Butter Masala', desc: 'Creamy tomato gravy', price: '₹240' },
    { img: idli, name: 'Idli Sambar', desc: '3 idli, chutney', price: '₹90' },
    { img: samosa, name: 'Samosa (2 pcs)', desc: 'With mint chutney', price: '₹40' },
  ];
  return (
    <div className="am" data-parallax="0.06">
      <Phone className="am-a">
        <div className="am-pad">
          <b className="am-name">Ambika Hotel</b>
          <small className="am-sub">Pure veg · Dine-in &amp; delivery</small>
          <span className="am-search">Search dishes…</span>
          <div className="am-cats">
            <span className="is-on">All</span>
            <span>Thali</span>
            <span>South Indian</span>
            <span>Snacks</span>
          </div>
          {items.map((it) => (
            <div className="am-item" key={it.name}>
              <div className="am-item__img">
                <Img src={it.img} />
              </div>
              <div>
                <b>{it.name}</b>
                <small>{it.desc}</small>
                <strong>{it.price}</strong>
              </div>
              <em>+ ADD</em>
            </div>
          ))}
        </div>
        <div className="am-cart">
          <span>3 items · ₹490</span>
          <b>View cart →</b>
        </div>
      </Phone>
      <Phone className="am-b">
        <div className="am-map">
          <svg viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 22 H100 M0 48 H100 M28 0 V70 M70 0 V70" />
            <path className="route" d="M18 60 C 30 48, 28 30, 48 26 S 72 14, 84 12" />
          </svg>
          <span className="am-pin am-pin--a" />
          <span className="am-pin am-pin--b" />
        </div>
        <div className="am-pad">
          <small className="am-sub">Order #A-1042</small>
          <b className="am-eta">Arriving in 18 min</b>
          <ul className="am-steps">
            <li className="done">Order placed <small>7:42 PM</small></li>
            <li className="done">Preparing <small>7:44 PM</small></li>
            <li className="now">Out for delivery</li>
            <li>Delivered</li>
          </ul>
          <div className="am-rider">
            <span className="am-av">R</span>
            <div>
              <b>Rahul</b>
              <small>Your delivery partner</small>
            </div>
            <em>Call</em>
          </div>
          <small className="am-paid">Paid via UPI · ₹490</small>
        </div>
      </Phone>
    </div>
  );
}

const SHOTS = { sitai: Sitai, propvista: PropVista, cashflow: Cashflow, thinkingminds: ThinkingMinds, ambika: Ambika };

export default function ProjectShot({ project }) {
  const Shot = SHOTS[project.id];
  return (
    <div className={`shot shot--${project.id}`} role="img" aria-label={`${project.title} — product screens`}>
      <div className="shot__c" aria-hidden="true">
        {Shot ? <Shot /> : null}
      </div>
    </div>
  );
}
