import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import StoryPage from './components/StoryPage';
import ProcessPage from './components/ProcessPage';
import ContactPage from './components/ContactPage';
import CartDrawer from './components/CartDrawer';
import React from 'react';
import { cssStyle, isVisible } from './viewUtils';
export default function SiteView({
  values
}) {
  const { menuClass, navHome, navShop, navStory, navProcess, navContact, waHref, openCart, hasCart, cartCount, buyNow, toggleMenu, menuOpen, isHome, isShop, isStory, isProcess, isContact, cartOpen } = values;
  return <>
<div style={cssStyle("background:#F8F3EC;min-height:100vh;font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased")}>
<header className={menuClass} style={cssStyle("position:sticky;top:0;z-index:40;background:rgba(248,243,236,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(15,63,33,.1)")}>
<div className={"bar wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;height:88px;display:flex;align-items:center;gap:16px;width:100%")}>
<a href={"#home"} onClick={navHome} style={cssStyle("display:flex;align-items:center;flex:none")} aria-label={"AYSHVA home"}>
<img className={"site-logo"} src={"/assets/ayshva-logo.png"} alt={"AYSHVA Turmeric Powder"} width={"134"} height={"60"} style={cssStyle("height:60px;width:auto;max-width:none;display:block;flex:none")} />
</a>
<nav className={"nav-desktop"} aria-label={"Main"} style={cssStyle("display:flex;align-items:center;gap:32px")}>
<a href={"#shop"} onClick={navShop} style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;padding:8px 0")}>{"Shop Turmeric"}</a>
<a href={"#story"} onClick={navStory} style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;padding:8px 0")}>{"Our Story"}</a>
<a href={"#process"} onClick={navProcess} style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;padding:8px 0")}>{"Process & Quality"}</a>
<a href={"#contact"} onClick={navContact} style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;padding:8px 0")}>{"Contact"}</a>
</nav>
<div className={"header-actions"} style={cssStyle("margin-left:auto;display:flex;align-items:center;gap:14px")}>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 14px;border-radius:999px;font:500 14px 'DM Sans',sans-serif;color:#0F3F21")} className={" interactive-1"}>
<svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0F3F21"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5Z"}></path><path d={"M8.6 9.2c0 3 2.3 5.3 5.2 5.3l1-1.3 1.7.9-.5 1.4c-2.8.5-6.1-2-7.3-4.8l1.2-.7Z"}></path></svg>
<span className={"header-wa-text"}>{"WhatsApp Support"}</span>
</a>
<button type={"button"} onClick={openCart} aria-label={"Open cart"} style={cssStyle("position:relative;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:999px;border:1.5px solid rgba(15,63,33,.2);background:transparent;cursor:pointer")}>
<svg width={"19"} height={"19"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0F3F21"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 7h16l-1.4 12.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7Z"}></path><path d={"M9 7V5.5a3 3 0 0 1 6 0V7"}></path></svg>
{isVisible(hasCart) && <>
<span style={cssStyle("position:absolute;top:-3px;right:-3px;min-width:20px;height:20px;padding:0 5px;border-radius:999px;background:#E8A329;color:#0F3F21;font:700 11px/20px 'DM Sans',sans-serif;text-align:center")}>{cartCount}</span>
</>}
</button>
<button type={"button"} className={"header-buynow interactive-2"} onClick={buyNow} style={cssStyle("display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 24px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 14px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Buy Now"}</button>
<button type={"button"} className={"menu-toggle"} onClick={toggleMenu} aria-label={"Menu"} aria-expanded={menuOpen}>
<svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0F3F21"} strokeWidth={"1.7"} strokeLinecap={"round"} aria-hidden={"true"}><path d={"M4 7h16M4 12h16M4 17h16"}></path></svg>
</button>
</div>
</div>
<nav className={"nav-mobile"} aria-label={"Mobile"}>
<a href={"#shop"} onClick={navShop}>{"Shop Turmeric"}</a>
<a href={"#story"} onClick={navStory}>{"Our Story"}</a>
<a href={"#process"} onClick={navProcess}>{"Process & Quality"}</a>
<a href={"#contact"} onClick={navContact}>{"Contact"}</a>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"}>{"WhatsApp Support"}</a>
<button type={"button"} className={"nav-mobile-buy"} onClick={buyNow}>{"Buy Now"}</button>
</nav>
</header>
{isVisible(isHome) && <HomePage values={values} />}
{isVisible(isShop) && <ShopPage values={values} />}
{isVisible(isStory) && <StoryPage values={values} />}
{isVisible(isProcess) && <ProcessPage values={values} />}
{isVisible(isContact) && <ContactPage values={values} />}
<footer style={cssStyle("background:#0F3F21;padding:clamp(48px,7vw,80px) 0 32px")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div className={"g-footer"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:48px;padding-bottom:56px;border-bottom:1px solid rgba(248,243,236,.14)")}>
<div>
<img src={"/assets/ayshva-logo.png"} alt={"AYSHVA"} width={"170"} height={"76"} style={cssStyle("height:52px;width:auto;display:block;filter:brightness(0) invert(1);opacity:.94;margin-bottom:24px")} />
<p style={cssStyle("font:500 18px/1.6 Montserrat,sans-serif;color:#F8F3EC;margin:0 0 12px;max-width:26ch")}>{"We don't just sell turmeric—we grow it."}</p>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.62);margin:0")}>{"Malipura, At Post Sevali,"}<br />{"Jalna, Maharashtra – 431213"}</p>
</div>
<div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#E8A329;margin:0 0 20px")}>{"Explore"}</p>
<div style={cssStyle("display:grid;gap:12px")}>
<a href={"#shop"} onClick={navShop} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Shop Turmeric"}</a>
<a href={"#story"} onClick={navStory} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Our Story"}</a>
<a href={"#process"} onClick={navProcess} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Process & Quality"}</a>
<a href={"#contact"} onClick={navContact} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Contact"}</a>
</div>
</div>
<div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#E8A329;margin:0 0 20px")}>{"Help"}</p>
<div style={cssStyle("display:grid;gap:12px")}>
<a href={"#contact"} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"FAQ"}</a>
<a href={"#contact"} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Shipping, Returns and Cancellations"}</a>
<a href={"#contact"} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Privacy Policy"}</a>
<a href={"#contact"} style={cssStyle("font:400 15px 'DM Sans',sans-serif;color:rgba(248,243,236,.8)")}>{"Terms and Conditions"}</a>
</div>
</div>
<div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#E8A329;margin:0 0 20px")}>{"Contact"}</p>
<div style={cssStyle("display:grid;gap:12px")}>
<a className="footer-contact-link" href="tel:+919270264137"><span className="footer-contact-icon footer-icon-phone" aria-hidden="true" /><span>+91 92702 64137</span></a>
<a className="footer-contact-link" href="mailto:connectayshva@gmail.com"><span className="footer-contact-icon footer-icon-email" aria-hidden="true" /><span>connectayshva@gmail.com</span></a>
<a className="footer-contact-link" href={waHref} target="_blank" rel="noopener noreferrer"><span className="footer-contact-icon footer-icon-whatsapp" aria-hidden="true" /><span>WhatsApp</span></a>
<a className="footer-contact-link" href="https://instagram.com/ayshva.official" target="_blank" rel="noopener noreferrer"><span className="footer-contact-icon footer-icon-instagram" aria-hidden="true" /><span>@ayshva.official</span></a>
</div>
</div>
</div>
<div className={"foot-meta"} style={cssStyle("padding-top:32px;display:flex;align-items:center;justify-content:space-between")}>
<p style={cssStyle("font:400 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.5);margin:0")}>{"© 2026 AYSHVA. All rights reserved."}</p>
<p style={cssStyle("font:600 11px 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:rgba(232,163,41,.85);margin:0")}>{"Pure • Natural • Premium"}</p>
</div>
</div>
</footer>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"} aria-label={"Chat with AYSHVA on WhatsApp"} className={"wa-fab interactive-7"} style={cssStyle("position:fixed;right:32px;bottom:32px;z-index:50;display:inline-flex;align-items:center;gap:10px;height:56px;padding:0 20px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 14px 'DM Sans',sans-serif;box-shadow:0 16px 32px -12px rgba(15,63,33,.6)")}>
<svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E8A329"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5Z"}></path><path d={"M8.6 9.2c0 3 2.3 5.3 5.2 5.3l1-1.3 1.7.9-.5 1.4c-2.8.5-6.1-2-7.3-4.8l1.2-.7Z"}></path></svg>{"\n  WhatsApp us\n"}</a>
{isVisible(cartOpen) && <CartDrawer values={values} />}
</div>
</>;
}
