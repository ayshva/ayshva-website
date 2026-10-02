import React from 'react';
import SiteView from './SiteView';
import './App.css';


export default class App extends React.Component {
  state = { page: 'home', size: '200g', qty: 1, cart: [], cartOpen: false, announce: '', openFaq: 0, shot: 'packTable', formNote: '', menuOpen: false };

  wa(msg) {
    return 'https://wa.me/919270264137?text=' + encodeURIComponent(msg);
  }

  go(page) {
    return (e) => {
      if (e && e.preventDefault) e.preventDefault();
      window.location.hash = page;
      this.setState({ page, announce: '', menuOpen: false });
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
  }

  sizeBtn(id, dark, active) {
    const base = 'display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:56px;padding:10px 18px;border-radius:14px;cursor:pointer;font-family:"DM Sans",sans-serif;transition:background .2s,border-color .2s,color .2s;flex:1 1 auto;';
    if (dark) {
      return base + (active
        ? 'background:#E8A329;border:1.5px solid #E8A329;color:#0F3F21;'
        : 'background:transparent;border:1.5px solid rgba(248,243,236,.34);color:#F8F3EC;');
    }
    return base + (active
      ? 'background:#0F3F21;border:1.5px solid #0F3F21;color:#F8F3EC;'
      : 'background:transparent;border:1.5px solid rgba(15,63,33,.2);color:#0F3F21;');
  }

  faqData() {
    return [
      { q: 'Is the turmeric grown on AYSHVA\u2019s own farm?', a: 'Yes. Every batch is grown on our own farms in Malipura, At Post Sevali, Jalna, Maharashtra, and processed by us.' },
      { q: 'Does it contain artificial colours?', a: 'No. The colour you see comes from the root. The ingredient declaration reads: turmeric powder (100%).' },
      { q: 'Does it contain preservatives?', a: 'No preservatives, and no anti-caking agents.' },
      { q: 'Which pack sizes are available?', a: '100g, 200g and 500g resealable pouches of the same turmeric.' },
      { q: 'How should it be stored?', a: '[Storage instructions]' },
      { q: 'What is the shelf life?', a: '[Shelf life]' },
      { q: 'Where do you deliver?', a: '[Shipping information]' },
      { q: 'How can I see the laboratory information?', a: 'Reports are published in full on the Process & Quality page, with the laboratory named and the batch identified. Nothing is summarised into a claim.' }
    ];
  }

  renderVals() {
    const p = this.props || {};
    const page = this.state.page;
    const size = this.state.size;
    const prices = { '100g': p.price100 || '₹49', '200g': p.price200 || '₹99', '500g': p.price500 || '₹199' };
    const subs = { '100g': 'trial pack', '200g': 'everyday', '500g': 'best value' };
    const hero = p.heroTreatment || 'Editorial ivory';
    const waMsg = {
      home: 'Hello AYSHVA, I would like to know more about your turmeric.',
      shop: 'Hello AYSHVA, I need help choosing the 200g or 500g pack.',
      story: 'Hello AYSHVA, I would like to know more about your farm.',
      process: 'Hello AYSHVA, I would like more information about your process and quality reports.',
      contact: 'Hello AYSHVA, I have an enquiry.'
    }[page] || 'Hello AYSHVA, I would like to know more about your turmeric.';

    const mkSizes = (dark) => ['100g', '200g', '500g'].map((id) => ({
      label: id,
      sub: subs[id],
      checked: size === id ? 'true' : 'false',
      style: this.sizeBtn(id, dark, size === id),
      select: () => this.setState({ size: id, qty: 1, announce: 'Pack size updated to ' + id + '. Price and weight refreshed.' })
    }));

    const cartSubtotalValue = this.state.cart.reduce((total, line) => {
      const packPrice = Number(String(prices[line.size] || '').replace(/[^\d.]/g, '')) || 0;
      return total + packPrice * line.qty;
    }, 0);

    const orderLines = this.state.cart.map((line) => line.qty + ' × AYSHVA Turmeric Powder (' + line.size + ') — ' + prices[line.size]).join('\n');
    const checkoutMessage = orderLines
      ? 'Hello AYSHVA, I would like to place this order:\n\n' + orderLines + '\n\nSubtotal: ₹' + cartSubtotalValue.toLocaleString('en-IN') + '\n\nPlease share delivery details and payment options.'
      : 'Hello AYSHVA, I would like to place an order. Please help me choose a pack.';

    return {
      isHome: page === 'home', isShop: page === 'shop', isStory: page === 'story',
      isProcess: page === 'process', isContact: page === 'contact',
      heroEditorial: hero === 'Editorial ivory', heroFarm: hero === 'Farm atmosphere', heroSplit: hero === 'Split panel', hideLegacyHero: false,
      navHome: this.go('home'), navShop: this.go('shop'), navStory: this.go('story'),
      navProcess: this.go('process'), navContact: this.go('contact'),
      sizes: mkSizes(false), sizesDark: mkSizes(true),
      sizeLabel: size, packLabel: size + ' pack shown',
      price: prices[size],
      stockLine: p.inStock === false ? 'Currently out of stock — WhatsApp us to be notified.' : 'In stock · dispatched from our own packing unit',
      qty: this.state.qty,
      inc: () => this.setState((s) => ({ qty: Math.min(20, s.qty + 1) })),
      dec: () => this.setState((s) => ({ qty: Math.max(1, s.qty - 1) })),
      addToCart: () => this.setState((s) => ({
        cart: s.cart.concat([{ size: s.size, qty: s.qty }]),
        announce: s.qty + ' × ' + s.size + ' pack added to your cart.'
      })),
      buyNow: () => this.setState((s) => ({
        cart: s.cart.concat([{ size: s.size, qty: s.qty }]), cartOpen: true,
        announce: s.qty + ' × ' + s.size + ' pack added to your cart.'
      })),
      cartCount: this.state.cart.reduce((n, l) => n + l.qty, 0),
      cartSubtotal: '₹' + cartSubtotalValue.toLocaleString('en-IN'),
      hasCart: this.state.cart.length > 0,
      cartEmpty: this.state.cart.length === 0,
      cartOpen: this.state.cartOpen,
      menuOpen: this.state.menuOpen ? 'true' : 'false',
      menuClass: this.state.menuOpen ? 'is-open' : '',
      toggleMenu: () => this.setState((s) => {
        const menuOpen = !s.menuOpen;
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return { menuOpen };
      }),
      openCart: () => this.setState({ cartOpen: true, menuOpen: false }),
      closeCart: () => this.setState({ cartOpen: false }),
      cartLines: this.state.cart.map((l, i) => ({
        size: l.size, qty: l.qty, price: prices[l.size],
        remove: () => this.setState((s) => ({ cart: s.cart.filter((_, j) => j !== i) }))
      })),
      announce: this.state.announce,
      waHref: this.wa(waMsg),
      waSizeHref: this.wa('Hello AYSHVA, I need help choosing between the 200g and 500g pack.'),
      waCartHref: this.wa('Hello AYSHVA, I need assistance with my order.'),
      checkoutHref: this.wa(checkoutMessage),
      shot1Style: 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .2s;opacity:' + (this.state.shot === 'packTable' ? '1' : '0'),
      shot2Style: 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .2s;opacity:' + (this.state.shot === 'packHands' ? '1' : '0'),
      pickShot1: () => this.setState({ shot: 'packTable' }),
      pickShot2: () => this.setState({ shot: 'packHands' }),
      faqs: this.faqData().map((f, i) => ({
        q: f.q, a: f.a,
        open: this.state.openFaq === i ? 'true' : 'false',
        iconStyle: 'font:300 26px "DM Sans",sans-serif;color:#C07F2A;flex:none;transition:transform .25s;transform:rotate(' + (this.state.openFaq === i ? '45deg' : '0deg') + ')',
        toggle: () => this.setState((s) => ({ openFaq: s.openFaq === i ? -1 : i }))
      })),
      formNote: this.state.formNote,
      submitForm: (e) => { e.preventDefault(); this.setState({ formNote: 'Thanks — we\u2019ll reply within [Business hours].' }); }
    };
  }

  onKeyDown = (event) => {
    if (event.key === 'Escape') this.setState({ cartOpen: false, menuOpen: false });
  };
  syncPage = () => {
    const page = window.location.hash.slice(1);
    if (['home', 'shop', 'story', 'process', 'contact'].includes(page)) {
      this.setState({ page, menuOpen: false });
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('hashchange', this.syncPage);
    this.syncPage();
  }
  componentDidUpdate() { document.body.style.overflow = this.state.cartOpen || this.state.menuOpen ? 'hidden' : ''; }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('hashchange', this.syncPage);
    document.body.style.overflow = '';
  }
  render() { return <SiteView values={this.renderVals()} />; }
}
