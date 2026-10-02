import React from 'react';
import CustomerReviews from './CustomerReviews';
import { cssStyle } from '../viewUtils';
export default function HomePage({values}) {
const {navShop, navStory, navProcess, navContact, waHref, buyNow, packLabel, sizes, price, sizeLabel, stockLine, dec, qty, inc, addToCart, announce, waSizeHref, sizesDark} = values;
return <>
<main data-screen-label={"Home"}>



<section className={"brand-hero"} aria-labelledby={"hero-heading"}>
<h1 id={"hero-heading"} className={"visually-hidden"}>{"From Our Farm To Your Kitchen"}</h1>
<img className={"brand-banner"} src={"/assets/ayshva-home-banner.png"} width={"1969"} height={"768"} alt={"From our farm to your kitchen. AYSHVA turmeric powder available in 100g, 200g and 500g packs."} fetchPriority={"high"} />
<button className={"banner-shop"} type={"button"} onClick={navShop}>{"SHOP NOW "}<span aria-hidden={"true"}>{"→"}</span></button>
<button className={"banner-process"} type={"button"} onClick={navProcess}>{"See Our Process "}<span aria-hidden={"true"}>{"→"}</span></button>
</section>
<section aria-label={"Product assurances"} className={"product-assurances"} style={cssStyle("background:#f8f3ec;padding:24px 0")}>
<div className={"assurance-grid"}>
<img src={"/assets/pure-turmeric.png"} alt={"Pure Turmeric Powder"} width={"768"} height={"768"} loading={"lazy"} />
<img src={"/assets/no-artificial-colours.png"} alt={"No Artificial Colours"} width={"768"} height={"768"} loading={"lazy"} />
<img src={"/assets/no-artificial-flavours.png"} alt={"No Artificial Flavours"} width={"768"} height={"768"} loading={"lazy"} />
<img src={"/assets/hygienically-processed.png"} alt={"Hygienically Processed"} width={"768"} height={"768"} loading={"lazy"} />
</div>
</section>
<section aria-labelledby={"own-farm"} style={cssStyle("background:#0F3F21;padding:clamp(56px,8vw,112px) 0")}>
<div className={"g-2 wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:28px;align-items:center")}>
<div style={cssStyle("height:clamp(220px,70vw,560px);border-radius:24px 200px 24px 200px;overflow:hidden")}>
    <img src={"/assets/farm-owner-img.png"} alt={"AYSHVA farm owner standing in the turmeric field"} width={1092} height={1440} loading="lazy" style={cssStyle("display:block;width:100%;height:100%;object-fit:cover;object-position:50% 65%")} />
</div>
<div>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#E8A329;margin:0 0 22px")}>{"Our own farm"}</p>
<h2 id={"own-farm"} style={cssStyle("font:700 clamp(28px,7vw,52px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#F8F3EC;margin:0 0 28px;text-wrap:balance")}>{"We don't just sell turmeric, we grow it."}</h2>
<p style={cssStyle("font:400 17px/1.8 'DM Sans',sans-serif;color:rgba(248,243,236,.78);margin:0 0 20px;max-width:48ch")}>{"Our journey begins on our own farms, where every turmeric plant is nurtured from cultivation to harvest. We oversee cultivation, harvesting, processing, grinding and hygienic packing ourselves."}</p>
<p style={cssStyle("font:400 17px/1.8 'DM Sans',sans-serif;color:rgba(248,243,236,.78);margin:0 0 38px;max-width:48ch")}>{"By controlling the entire journey we preserve turmeric's natural colour, rich aroma and authentic flavour."}</p>
<button type={"button"} onClick={navStory} style={cssStyle("display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;border-radius:999px;background:transparent;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:1.5px solid rgba(248,243,236,.36);cursor:pointer")} className={" interactive-5"}>{"Read Our Story"}</button>
</div>
</div>
</section>
<section aria-labelledby={"quick-buy"} style={cssStyle("padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div style={cssStyle("max-width:640px;margin:0 0 48px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"The product"}</p>
<h2 id={"quick-buy"} style={cssStyle("font:700 clamp(25px,5vw,46px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0;white-space:nowrap")}>{"Choose your pack"}</h2>
</div>
<div className={"g-product"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:0;background:#fff;border-radius:28px;overflow:hidden;border:1px solid rgba(15,63,33,.1);box-shadow:0 30px 60px -40px rgba(15,63,33,.3)")}>
<div style={cssStyle("position:relative;background:#EFE6D8;min-height:clamp(220px,70vw,560px)")}>
<img src={"/assets/bundled/ee61a4bc-1d15-45e4-a8f8-c3ddc1e1ba4e.png"} alt={"AYSHVA Turmeric Powder pack"} style={cssStyle("position:absolute;inset:0;width:100%;height:100%;object-fit:cover")} />
<span style={cssStyle("position:absolute;left:24px;bottom:24px;padding:8px 16px;border-radius:999px;background:rgba(248,243,236,.94);font:600 12px 'DM Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#0F3F21")}>{packLabel}</span>
</div>
<div className={"card-pad-lg"} style={cssStyle("padding:28px 22px 24px")}>
<h3 style={cssStyle("font:700 clamp(22px,4vw,30px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"AYSHVA Turmeric Powder "}{`(${sizeLabel})`}</h3> 
<p style={cssStyle("font:400 16px/1.6 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 32px")}>{"Farm-grown, stone-ground, hygienically packed."}</p>
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
<p style={cssStyle("font:700 clamp(28px,6vw,38px)/1 Montserrat,sans-serif;color:#0F3F21;margin:0")}>{price}</p>
<p style={cssStyle("font:400 14px/1.6 'DM Sans',sans-serif;color:#7A8A7E;margin:0 0 4px")}>{"per " + sizeLabel + " pack · incl. taxes"}</p>
</div>
<p style={cssStyle("font:400 14px/1.6 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 30px")}>{stockLine}</p>
<div className={"qty-row pack-actions"} style={cssStyle("display:flex;align-items:center;gap:14px;margin-bottom:20px")}>
<div style={cssStyle("display:flex;align-items:center;border:1.5px solid rgba(15,63,33,.2);border-radius:999px;overflow:hidden")}>
<button type={"button"} onClick={dec} aria-label={"Decrease quantity"} style={cssStyle("width:48px;height:52px;border:none;background:transparent;cursor:pointer;font:500 20px 'DM Sans',sans-serif;color:#0F3F21")}>{"−"}</button>
<span aria-live={"off"} style={cssStyle("min-width:36px;text-align:center;font:600 16px 'DM Sans',sans-serif;color:#0F3F21")}>{qty}</span>
<button type={"button"} onClick={inc} aria-label={"Increase quantity"} style={cssStyle("width:48px;height:52px;border:none;background:transparent;cursor:pointer;font:500 20px 'DM Sans',sans-serif;color:#0F3F21")}>{"+"}</button>
</div>
<button type={"button"} onClick={addToCart} style={cssStyle("flex:1;min-height:52px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")} className={" interactive-3"}>{"Add to Cart"}</button>
<button type={"button"} onClick={buyNow} style={cssStyle("flex:1;min-height:52px;border-radius:999px;background:#E8A329;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")} className={" interactive-4"}>{"Buy Now"}</button>
</div>
<p aria-live={"polite"} style={cssStyle("font:500 13px/1.5 'DM Sans',sans-serif;color:#C07F2A;margin:0 0 22px;min-height:20px")}>{announce}</p>
<a href={waSizeHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:inline-flex;align-items:center;gap:9px;font:500 14px 'DM Sans',sans-serif;color:#0F3F21;border-bottom:1px solid rgba(15,63,33,.25);padding-bottom:3px")}>
<svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0F3F21"} strokeWidth={"1.6"} strokeLinecap={"round"} aria-hidden={"true"}><path d={"M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5Z"}></path></svg>{"\n            Not sure which size? Ask us on WhatsApp\n          "}</a>
</div>
</div>
</div>
</section>

<section aria-labelledby={"why"} style={cssStyle("padding:clamp(56px,8vw,112px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div className={"seed-head"} style={cssStyle("display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-bottom:52px")}>
<div style={cssStyle("max-width:620px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"Why AYSHVA"}</p>
<h2 id={"why"} style={cssStyle("font:700 clamp(22px,4.5vw,46px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0;white-space:nowrap")}>{"Four reasons to choose AYSHVA"}</h2>
</div>
</div>
<div className={"g-4"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px;margin-bottom:20px")}>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:20px;padding:34px 30px 36px")}>
<p style={cssStyle("font:700 13px 'DM Sans',sans-serif;color:#E8A329;margin:0 0 26px")}>{"01"}</p>
<h3 style={cssStyle("font:600 21px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"Farm-grown premium turmeric"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Cultivated on AYSHVA's own land in Jalna, not bought from open markets."}</p>
</article>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:20px;padding:34px 30px 36px")}>
<p style={cssStyle("font:700 13px 'DM Sans',sans-serif;color:#E8A329;margin:0 0 26px")}>{"02"}</p>
<h3 style={cssStyle("font:600 21px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"Natural colour, fresh aroma"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Colour and aroma come from the root itself — nothing is added to enhance either."}</p>
</article>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:20px;padding:34px 30px 36px")}>
<p style={cssStyle("font:700 13px 'DM Sans',sans-serif;color:#E8A329;margin:0 0 26px")}>{"03"}</p>
<h3 style={cssStyle("font:600 21px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"No artificial colours or preservatives"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"One ingredient on the label: turmeric powder."}</p>
</article>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:20px;padding:34px 30px 36px")}>
<p style={cssStyle("font:700 13px 'DM Sans',sans-serif;color:#E8A329;margin:0 0 26px")}>{"04"}</p>
<h3 style={cssStyle("font:600 21px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"Hygienic processing, consistent quality"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Processed in a clean environment and inspected batch by batch."}</p>
</article>
</div>
<div className={"g-why"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:0;background:#EFE6D8;border-radius:24px;overflow:hidden")}>
<div className={"card-pad"} style={cssStyle("padding:28px 22px")}>
<h3 style={cssStyle("font:600 28px/1.35 Montserrat,sans-serif;color:#0F3F21;margin:0 0 18px;max-width:34ch")}>{"Farm-to-kitchen traceability isn't a slogan for us — it's the only supply chain we have."}</h3>
<p style={cssStyle("font:400 16px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0;max-width:52ch")}>{"Because the same family grows, processes and packs every batch, we can tell you which harvest your pack came from. Every batch undergoes careful inspection before reaching your kitchen."}</p>
</div>
<div style={cssStyle("min-height:280px")}>
<div className="image-placeholder" role="img" aria-label="Drop a photo of hands with turmeric powder or a processing detail">{"Drop a photo of hands with turmeric powder or a processing detail"}</div>
</div>
</div>
</div>
</section>
<section aria-labelledby={"seed"} style={cssStyle("background:#EFE6D8;padding:clamp(56px,8vw,112px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div className={"seed-head"} style={cssStyle("display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:52px")}>
<div style={cssStyle("max-width:560px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"Seed to spice"}</p>
<h2 id={"seed"} style={cssStyle("font:700 clamp(26px,6vw,46px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0")}>{"Four stages you can see."}</h2>
</div>
<button type={"button"} onClick={navProcess} style={cssStyle("flex:none;display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 28px;border-radius:999px;background:transparent;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:1.5px solid rgba(15,63,33,.26);cursor:pointer")} className={" interactive-6"}>{"Explore the Complete Process"}</button>
</div>
<div className={"g-4"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:24px")}>
<article>
<div style={cssStyle("height:clamp(180px,48vw,300px);border-radius:18px;overflow:hidden;margin-bottom:20px")}><div className="image-placeholder" role="img" aria-label="Harvest photo">{"Harvest photo"}</div></div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;color:#C07F2A;margin:0 0 8px")}>{"Stage 01"}</p>
<h3 style={cssStyle("font:600 20px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 8px")}>{"Grown and Harvested"}</h3>
<p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Rhizomes are lifted from our own fields at maturity."}</p>
</article>
<article>
<div style={cssStyle("height:clamp(180px,48vw,300px);border-radius:18px;overflow:hidden;margin-bottom:20px")}><div className="image-placeholder" role="img" aria-label="Sorting / boiling photo">{"Sorting / boiling photo"}</div></div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;color:#C07F2A;margin:0 0 8px")}>{"Stage 02"}</p>
<h3 style={cssStyle("font:600 20px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 8px")}>{"Selected and Prepared"}</h3>
<p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Sorted, cleaned, boiled, sun-dried and polished."}</p>
</article>
<article>
<div style={cssStyle("height:clamp(180px,48vw,300px);border-radius:18px;overflow:hidden;margin-bottom:20px")}><div className="image-placeholder" role="img" aria-label="Grinding photo">{"Grinding photo"}</div></div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;color:#C07F2A;margin:0 0 8px")}>{"Stage 03"}</p>
<h3 style={cssStyle("font:600 20px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 8px")}>{"Ground with Care"}</h3>
<p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Ground slowly so colour and aroma survive the mill."}</p>
</article>
<article>
<div style={cssStyle("height:clamp(180px,48vw,300px);border-radius:18px;overflow:hidden;margin-bottom:20px")}><div className="image-placeholder" role="img" aria-label="Packing photo">{"Packing photo"}</div></div>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.18em;color:#C07F2A;margin:0 0 8px")}>{"Stage 04"}</p>
<h3 style={cssStyle("font:600 20px/1.3 Montserrat,sans-serif;color:#0F3F21;margin:0 0 8px")}>{"Hygienically Packed"}</h3>
<p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Sealed in a clean environment to hold freshness."}</p>
</article>
</div>
</div>
</section>
<section aria-labelledby={"quality"} style={cssStyle("padding:clamp(56px,8vw,112px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div style={cssStyle("max-width:600px;margin:0 0 48px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"Evidence"}</p>
<h2 id={"quality"} style={cssStyle("font:700 clamp(26px,6vw,46px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 18px")}>{"Quality you can verify."}</h2>
<p style={cssStyle("font:400 17px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"We publish what we can prove. Nothing on this page is a claim without a document behind it."}</p>
</div>
<div className={"g-quality"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px")}>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.12);border-radius:22px;padding:40px")}>
<div style={cssStyle("display:flex;align-items:center;justify-content:space-between;margin-bottom:28px")}>
<h3 style={cssStyle("font:600 22px Montserrat,sans-serif;color:#0F3F21;margin:0")}>{"Laboratory report"}</h3>
<span style={cssStyle("padding:6px 14px;border-radius:999px;background:rgba(192,127,42,.12);font:600 11px 'DM Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#C07F2A")}>{"Awaiting upload"}</span>
</div>
<dl className={"g-dl"} style={cssStyle("margin:0;display:grid;grid-template-columns:1fr;row-gap:16px;column-gap:24px")}>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"Report title"}</dt>
<dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Laboratory report]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"Laboratory name"}</dt>
<dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Laboratory name]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"Report date"}</dt>
<dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Report date]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"Batch / sample no."}</dt>
<dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Batch number]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"Tested parameters"}</dt>
<dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Tested parameters]"}</dd>
</dl>
<p style={cssStyle("font:400 14px/1.7 'DM Sans',sans-serif;color:#7A8A7E;margin:26px 0 0;padding-top:22px;border-top:1px solid rgba(15,63,33,.1)")}>{"No curcumin percentage is shown until a verified report is published here."}</p>
</article>
<div style={cssStyle("display:grid;gap:20px")}>
<article style={cssStyle("background:#0F3F21;border-radius:22px;padding:34px 34px 36px")}>
<h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 14px")}>{"Certifications"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0 0 20px")}>{"[Certification] · [Food licence number]"}</p>
<p style={cssStyle("font:400 14px/1.6 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin:0")}>{"Badges appear only once the certificate is on file."}</p>
</article>
<article style={cssStyle("background:#EFE6D8;border-radius:22px;padding:34px")}>
<h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Ingredient declaration"}</h3>
<p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Turmeric powder (100%). No added colour, no preservative, no anti-caking agent."}</p>
</article>
<button type={"button"} onClick={navProcess} style={cssStyle("min-height:52px;border-radius:999px;background:transparent;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:1.5px solid rgba(15,63,33,.26);cursor:pointer")}>{"View Process & Quality"}</button>
</div>
</div>
</div>
</section>
<CustomerReviews />

<section aria-labelledby={"wa"} style={cssStyle("padding:clamp(48px,7vw,96px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div className={"card-pad g-cta"} style={cssStyle("background:#fff;border:1px solid rgba(232,163,41,.4);border-radius:26px;padding:28px 22px;display:grid;grid-template-columns:1fr;gap:48px;align-items:center")}>
<div>
<h2 id={"wa"} style={cssStyle("font:700 clamp(22px,5vw,36px)/1.15 Montserrat,sans-serif;color:#0F3F21;margin:0 0 12px")}>{"Questions about our turmeric?"}</h2>
<p style={cssStyle("font:400 17px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0;max-width:52ch")}>{"Message us on WhatsApp — pack sizes, delivery, bulk orders or anything on the label."}</p>
</div>
<div className={"wa-actions"} style={cssStyle("display:flex;align-items:center;gap:12px")}>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 28px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif")}>{"Chat on WhatsApp"}</a>
<button type={"button"} onClick={navContact} style={cssStyle("min-height:52px;padding:0 26px;border-radius:999px;background:transparent;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:1.5px solid rgba(15,63,33,.26);cursor:pointer")}>{"Contact AYSHVA"}</button>
<button type={"button"} onClick={navShop} style={cssStyle("min-height:52px;padding:0 26px;border-radius:999px;background:#E8A329;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Shop Turmeric"}</button>
</div>
</div>
</div>
</section>
<section aria-labelledby={"final"} style={cssStyle("background:#0F3F21;padding:clamp(48px,7vw,88px) 0")}>
<div className={"wrap g-final"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:24px;align-items:center")}>
<img src={"/assets/bundled/8326c99c-3c84-4aca-8ce0-10fd0cedfa55.png"} alt={"AYSHVA Turmeric Powder pack held in hands"} className={"pack-shot"} style={cssStyle("width:min(200px,100%);height:clamp(180px,50vw,250px);object-fit:cover;border-radius:16px")} />
<div>
<h2 id={"final"} style={cssStyle("font:700 clamp(24px,5.5vw,38px)/1.15 Montserrat,sans-serif;color:#F8F3EC;margin:0 0 14px;max-width:22ch")}>{"Bring farm-grown turmeric into your everyday kitchen."}</h2>
<div role={"radiogroup"} aria-label={"Pack size"} style={cssStyle("display:flex;gap:10px;margin-top:22px")}>
{sizesDark.map((s, index) => <React.Fragment key={index}>
<button type={"button"} role={"radio"} aria-checked={s.checked} onClick={s.select} style={cssStyle(s.style)}>{s.label}</button>
</React.Fragment>)}
</div>
</div>
<div className={"final-side"} style={cssStyle("text-align:right")}>
<p style={cssStyle("font:700 clamp(26px,5.5vw,34px)/1 Montserrat,sans-serif;color:#E8A329;margin:0 0 6px")}>{price}</p>
<p style={cssStyle("font:400 14px 'DM Sans',sans-serif;color:rgba(248,243,236,.6);margin:0 0 22px")}>{sizeLabel + " · qty " + qty}</p>
<div className={"final-actions"} style={cssStyle("display:flex;gap:12px;justify-content:flex-end")}>
<button type={"button"} onClick={addToCart} style={cssStyle("min-height:52px;padding:0 26px;border-radius:999px;background:transparent;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:1.5px solid rgba(248,243,236,.36);cursor:pointer")}>{"Add to Cart"}</button>
<button type={"button"} onClick={buyNow} style={cssStyle("min-height:52px;padding:0 30px;border-radius:999px;background:#E8A329;color:#0F3F21;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Buy Now"}</button>
</div>
</div>
</div>
</section>
<section aria-labelledby={"pano"} style={cssStyle("background:#F8F3EC;padding:clamp(48px,7vw,96px) 0 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;text-align:center")}>
<h2 id={"pano"} style={cssStyle("font:700 clamp(24px,5.5vw,42px)/1.15 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 14px")}>{"Every step, from our farm to your kitchen."}</h2>
<p style={cssStyle("font:400 17px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 48px")}>{"Grown, prepared, packed, and shared with care."}</p>
</div>
<img src={"/assets/bundled/53208748-c091-48de-90a2-f821561abd14.png"} alt={"Illustration of the AYSHVA journey: harvesting turmeric on the farm, washing and slicing, sun-drying, stone-grinding, and cooking in a family kitchen"} style={cssStyle("display:block;width:100%;max-width:1800px;margin:0 auto;height:auto;animation:wipeIn 1.4s .1s cubic-bezier(.3,.7,.2,1) both")} />
</section>
</main>
</>;
}
