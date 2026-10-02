import React from 'react';
import { cssStyle, isVisible } from '../viewUtils';
export default function ShopPage({values}) {
const {navProcess, waHref, buyNow, sizes, price, sizeLabel, stockLine, dec, qty, inc, addToCart, announce, waSizeHref, shot1Style, shot2Style, pickShot1, pickShot2, faqs} = values;
return <>
<main data-screen-label={"Shop Turmeric"} style={cssStyle("padding:32px 0 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<p style={cssStyle("font:400 13px 'DM Sans',sans-serif;color:#7A8A7E;margin:0 0 40px")}>{"Home / Shop Turmeric"}</p>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:start")}>
<div>
<div style={cssStyle("background:#EFE6D8;border-radius:24px;overflow:hidden;margin-bottom:16px;position:relative;height:clamp(240px,85vw,660px)")}>
<img src={"/assets/bundled/ee61a4bc-1d15-45e4-a8f8-c3ddc1e1ba4e.png"} alt={"AYSHVA Turmeric Powder pack on a wooden table"} style={cssStyle(shot1Style)} />
<img src={"/assets/bundled/8326c99c-3c84-4aca-8ce0-10fd0cedfa55.png"} alt={"AYSHVA Turmeric Powder pack held in hands"} style={cssStyle(shot2Style)} />
</div>
<div className={"g-thumbs g-4"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:16px")}>
<button type={"button"} onClick={pickShot1} aria-label={"View pack on table"} style={cssStyle("padding:0;border:none;border-radius:14px;overflow:hidden;cursor:pointer;background:#EFE6D8;height:120px")}>
<img src={"/assets/bundled/ee61a4bc-1d15-45e4-a8f8-c3ddc1e1ba4e.png"} alt={""} style={cssStyle("display:block;width:100%;height:100%;object-fit:cover")} />
</button>
<button type={"button"} onClick={pickShot2} aria-label={"View pack in hands"} style={cssStyle("padding:0;border:none;border-radius:14px;overflow:hidden;cursor:pointer;background:#EFE6D8;height:120px")}>
<img src={"/assets/bundled/8326c99c-3c84-4aca-8ce0-10fd0cedfa55.png"} alt={""} style={cssStyle("display:block;width:100%;height:100%;object-fit:cover")} />
</button>
<div style={cssStyle("height:120px;border-radius:14px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Pack back / label">{"Pack back / label"}</div></div>
<div style={cssStyle("height:120px;border-radius:14px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Powder macro">{"Powder macro"}</div></div>
</div>
</div>
<div className={"shop-sticky"} style={cssStyle("position:static;top:auto")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 16px")}>{"Pure • Natural • Premium"}</p>
<h1 style={cssStyle("font:700 clamp(26px,6.5vw,48px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 16px")}>{"AYSHVA Turmeric Powder"}</h1>
<p style={cssStyle("font:400 17px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 34px;max-width:48ch")}>{"Grown on our own farms in Jalna, Maharashtra. Harvested, boiled, sun-dried, polished, ground and packed by us."}</p>
<fieldset style={cssStyle("border:none;padding:0;margin:0 0 30px")}>
<legend style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#0F3F21;padding:0;margin:0 0 14px")}>{"Pack size"}</legend>
<div role={"radiogroup"} aria-label={"Pack size"} style={cssStyle("display:flex;gap:12px")}>
{sizes.map((s, index) => <React.Fragment key={index}>
<button type={"button"} role={"radio"} aria-checked={s.checked} onClick={s.select} style={cssStyle(s.style)}>
<span style={cssStyle("font:700 17px Montserrat,sans-serif")}>{s.label}</span>
<span style={cssStyle("font:400 12px 'DM Sans',sans-serif;opacity:.72")}>{s.sub}</span>
</button>
</React.Fragment>)}
</div>
</fieldset>
<div style={cssStyle("display:flex;align-items:flex-end;gap:14px;margin-bottom:8px")}>
<p style={cssStyle("font:700 clamp(28px,6vw,40px)/1 Montserrat,sans-serif;color:#0F3F21;margin:0")}>{price}</p>
<p style={cssStyle("font:400 14px/1.6 'DM Sans',sans-serif;color:#7A8A7E;margin:0 0 4px")}>{"incl. taxes · [Shipping information]"}</p>
</div>
<p style={cssStyle("font:400 14px/1.6 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 28px")}>{stockLine}</p>
<div className={"qty-row pack-actions"} style={cssStyle("display:flex;align-items:center;gap:14px;margin-bottom:18px")}>
<div style={cssStyle("display:flex;align-items:center;border:1.5px solid rgba(15,63,33,.2);border-radius:999px")}>
<button type={"button"} onClick={dec} aria-label={"Decrease quantity"} style={cssStyle("width:48px;height:52px;border:none;background:transparent;cursor:pointer;font:500 20px 'DM Sans',sans-serif;color:#0F3F21")}>{"−"}</button>
<span style={cssStyle("min-width:36px;text-align:center;font:600 16px 'DM Sans',sans-serif;color:#0F3F21")}>{qty}</span>
<button type={"button"} onClick={inc} aria-label={"Increase quantity"} style={cssStyle("width:48px;height:52px;border:none;background:transparent;cursor:pointer;font:500 20px 'DM Sans',sans-serif;color:#0F3F21")}>{"+"}</button>
</div>
<button type={"button"} onClick={addToCart} style={cssStyle("flex:1;min-height:52px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Add to Cart"}</button>
<button type={"button"} onClick={buyNow} style={cssStyle("flex:1;min-height:52px;border-radius:999px;background:#E8A329;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Buy Now"}</button>
</div>
<p aria-live={"polite"} style={cssStyle("font:500 13px/1.5 'DM Sans',sans-serif;color:#C07F2A;margin:0 0 26px;min-height:20px")}>{announce}</p>
<div style={cssStyle("display:flex;flex-direction:column;gap:10px;padding:24px 26px;border-radius:18px;background:#EFE6D8;margin-bottom:36px")}>
<p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Delivery: [Shipping information]"}</p>
<p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Returns & cancellations: "}<a href={"#contact"} style={cssStyle("border-bottom:1px solid rgba(15,63,33,.3)")}>{"read the full policy"}</a></p>
<a href={waSizeHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:inline-flex;align-items:center;gap:9px;font:600 14px 'DM Sans',sans-serif;color:#0F3F21;margin-top:4px")}>
<svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0F3F21"} strokeWidth={"1.6"} strokeLinecap={"round"} aria-hidden={"true"}><path d={"M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5Z"}></path></svg>{"\n            WhatsApp support — help choosing a size\n          "}</a>
</div>
<ul className={"g-2"} style={cssStyle("list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr;gap:14px 24px")}>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"Farm-grown"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"Rich natural colour"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"Fresh aroma"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"No artificial colours"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"No preservatives"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"Hygienically processed"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"Farm-to-kitchen traceability"}</li>
<li style={cssStyle("font:500 15px/1.5 'DM Sans',sans-serif;color:#0F3F21;padding-left:22px;position:relative")}><span style={cssStyle("position:absolute;left:0;top:6px;width:8px;height:8px;border-radius:50%;background:#E8A329")}></span>{"One ingredient only"}</li>
</ul>
</div>
</div>
</div>
<section aria-labelledby={"pinfo"} style={cssStyle("padding:clamp(56px,8vw,104px) 0")}>
<div className={"g-2 wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:24px")}>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:22px;padding:44px")}>
<h2 id={"pinfo"} style={cssStyle("font:700 clamp(22px,4vw,30px)/1.15 Montserrat,sans-serif;color:#0F3F21;margin:0 0 28px")}>{"Product information"}</h2>
<dl className={"g-dl"} style={cssStyle("margin:0;display:grid;grid-template-columns:1fr;row-gap:15px;column-gap:20px")}>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Ingredient"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Turmeric powder (100%)"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Net weight"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{sizeLabel}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Origin"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Malipura, At Post Sevali, Jalna, Maharashtra"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Storage"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Storage instructions]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Shelf life"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Shelf life]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Packaging"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Resealable stand-up pouch"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Packed by"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"AYSHVA, Jalna, Maharashtra – 431213"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Batch information"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Batch number] · printed on pack"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Food licence"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Food licence number]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Customer care"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"+91 92702 64137 · connectayshva@gmail.com"}</dd>
</dl>
</div>
<div style={cssStyle("display:grid;gap:24px;align-content:start")}>
<div style={cssStyle("background:#0F3F21;border-radius:22px;padding:44px")}>
<h2 style={cssStyle("font:700 28px/1.2 Montserrat,sans-serif;color:#F8F3EC;margin:0 0 22px")}>{"Quality evidence"}</h2>
<dl className={"g-dl"} style={cssStyle("margin:0 0 26px;display:grid;grid-template-columns:1fr;row-gap:13px;column-gap:20px")}>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6)")}>{"Report"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Laboratory report]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6)")}>{"Laboratory"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Laboratory name]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6)")}>{"Date"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Report date]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6)")}>{"Parameters"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Tested parameters]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6)")}>{"Certification"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Certification]"}</dd>
</dl>
<button type={"button"} disabled={true} style={cssStyle("min-height:48px;padding:0 24px;border-radius:999px;background:rgba(248,243,236,.12);color:rgba(248,243,236,.55);font:600 14px 'DM Sans',sans-serif;border:1px solid rgba(248,243,236,.2);cursor:not-allowed")}>{"Download report — pending upload"}</button>
</div>
<div style={cssStyle("background:#EFE6D8;border-radius:22px;padding:40px 44px")}>
<h2 style={cssStyle("font:700 26px/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 16px")}>{"From seed to spice"}</h2>
<p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 24px")}>{"Harvesting → sorting & cleaning → boiling → drying → polishing → grinding → packing. Seven stages, all of them ours."}</p>
<button type={"button"} onClick={navProcess} style={cssStyle("min-height:50px;padding:0 26px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"See the complete process"}</button>
</div>
</div>
</div>
</section>
<section aria-labelledby={"faq"} style={cssStyle("background:#EFE6D8;padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap g-faq"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:28px;align-items:start")}>
<div>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"FAQ"}</p>
<h2 id={"faq"} style={cssStyle("font:700 clamp(24px,5.5vw,40px)/1.15 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 20px")}>{"Straight answers."}</h2>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;border-bottom:1px solid rgba(15,63,33,.3)")}>{"Ask something else on WhatsApp"}</a>
</div>
<div>
{faqs.map((f, index) => <React.Fragment key={index}>
<div style={cssStyle("border-bottom:1px solid rgba(15,63,33,.14)")}>
<button type={"button"} onClick={f.toggle} aria-expanded={f.open} style={cssStyle("width:100%;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px 0;background:transparent;border:none;cursor:pointer;text-align:left")}>
<span style={cssStyle("font:600 18px/1.4 Montserrat,sans-serif;color:#0F3F21")}>{f.q}</span>
<span aria-hidden={"true"} style={cssStyle(f.iconStyle)}>{"+"}</span>
</button>
{isVisible(f.open) && <>
<p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 26px;max-width:70ch;animation:riseIn .3s both")}>{f.a}</p>
</>}
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={cssStyle("padding:clamp(48px,7vw,96px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<h2 style={cssStyle("font:700 clamp(22px,5vw,36px)/1.15 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"Reviews"}</h2>
<p style={cssStyle("font:400 16px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 36px")}>{"Only verified purchases appear here. Layout shown with placeholders."}</p>
<div className={"g-3"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px")}>
<article style={cssStyle("background:#fff;border:1px dashed rgba(15,63,33,.28);border-radius:20px;padding:32px")}>
<p style={cssStyle("font:400 16px/1.7 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 24px")}>{"[Customer review]"}</p>
<p style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 4px")}>{"[Customer name]"}</p>
<p style={cssStyle("font:400 13px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"[Pack size] · [Date]"}</p>
</article>
<article style={cssStyle("background:#fff;border:1px dashed rgba(15,63,33,.28);border-radius:20px;padding:32px")}>
<p style={cssStyle("font:400 16px/1.7 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 24px")}>{"[Customer review]"}</p>
<p style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 4px")}>{"[Customer name]"}</p>
<p style={cssStyle("font:400 13px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"[Pack size] · [Date]"}</p>
</article>
<article style={cssStyle("background:#fff;border:1px dashed rgba(15,63,33,.28);border-radius:20px;padding:32px")}>
<p style={cssStyle("font:400 16px/1.7 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 24px")}>{"[Customer review]"}</p>
<p style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 4px")}>{"[Customer name]"}</p>
<p style={cssStyle("font:400 13px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"[Pack size] · [Date]"}</p>
</article>
</div>
</div>
</section>
</main>
</>;
}
