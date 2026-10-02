import React from 'react';
import { cssStyle } from '../viewUtils';
export default function StoryPage({values}) {
const {navShop} = values;
return <>
<main data-screen-label={"Our Story"}>
<section style={cssStyle("padding:clamp(48px,8vw,96px) 0 clamp(40px,7vw,88px)")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;max-width:1000px;text-align:center")}>
<p style={cssStyle("font:600 12px/1 'DM Sans',sans-serif;letter-spacing:.26em;text-transform:uppercase;color:#C07F2A;margin:0 0 22px")}>{"Our story"}</p>
<h1 style={cssStyle("font:700 clamp(32px,8vw,68px)/1.08 Montserrat,sans-serif;letter-spacing:-.025em;color:#0F3F21;margin:0 0 24px;text-wrap:balance")}>{"Turmeric grown by us, for your kitchen."}</h1>
<p style={cssStyle("font:400 18px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0 auto;max-width:62ch")}>{"A farming family in Malipura, At Post Sevali, Jalna — growing turmeric on our own land and finishing it ourselves, so nothing about the pack is a mystery to us or to you."}</p>
</div>
</section>
<div className={"story-banner wrap wrap"} style={cssStyle("max-width:1800px;margin:0 auto 96px;padding:0 20px;height:clamp(220px,70vw,560px);border-radius:28px;overflow:hidden")}>
<div className="image-placeholder" role="img" aria-label="Drop a wide farm photograph — the family and the field">{"Drop a wide farm photograph — the family and the field"}</div>
</div>
<section style={cssStyle("padding:0 0 clamp(48px,8vw,104px)")}>
<div className={"g-2 wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:28px;align-items:center")}>
<div>
<h2 style={cssStyle("font:700 clamp(26px,6vw,46px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 26px")}>{"We don't just sell turmeric—we grow it."}</h2>
<p style={cssStyle("font:400 17px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 20px")}>{"Our journey begins on our own farms, where every turmeric plant is carefully nurtured from cultivation to harvest. We oversee every step — harvesting, processing, grinding and safe, hygienic packaging."}</p>
<p style={cssStyle("font:400 17px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 20px")}>{"Traditional practices decide how we grow. Modern quality standards decide how we finish and pack. Every pack of AYSHVA reflects that farming heritage."}</p>
<p style={cssStyle("font:400 17px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"[The people behind the farm — names and roles to be confirmed.]"}</p>
</div>
<div style={cssStyle("height:clamp(220px,68vw,520px);border-radius:200px 24px 200px 24px;overflow:hidden")}>
<div className="image-placeholder" role="img" aria-label="Drop a portrait — the family on the farm">{"Drop a portrait — the family on the farm"}</div>
</div>
</div>
</section>
<section style={cssStyle("background:#0F3F21;padding:clamp(56px,8vw,104px) 0")}>
<div className={"g-2 wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:28px")}>
<div style={cssStyle("padding:44px;border-radius:22px;background:rgba(248,243,236,.06)")}>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#E8A329;margin:0 0 20px")}>{"Our mission"}</p>
<p style={cssStyle("font:500 clamp(18px,4.2vw,26px)/1.5 Montserrat,sans-serif;color:#F8F3EC;margin:0")}>{"To preserve traditional farming practices while embracing modern quality standards, ensuring every family enjoys the goodness of pure turmeric."}</p>
</div>
<div style={cssStyle("padding:44px;border-radius:22px;background:rgba(248,243,236,.06)")}>
<p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#E8A329;margin:0 0 20px")}>{"Our vision"}</p>
<p style={cssStyle("font:500 clamp(18px,4.2vw,26px)/1.5 Montserrat,sans-serif;color:#F8F3EC;margin:0")}>{"To become one of India's most trusted farm-to-home spice brands by delivering authentic, natural, and premium-quality products."}</p>
</div>
</div>
</section>
<section style={cssStyle("padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#C07F2A;margin:0 0 18px")}>{"What we hold to"}</p>
<h2 style={cssStyle("font:700 clamp(26px,6vw,44px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 48px")}>{"Brand values"}</h2>
<div className={"g-4"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px")}>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Purity"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"One ingredient, nothing added."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Natural growth"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Grown to the season, not to a schedule."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Wellness"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Everyday nourishment, honestly described."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Nourishment"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Made for daily Indian cooking."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Trust"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"We publish only what we can show."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Care"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Hand-checked at every stage."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Quality"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Consistent colour and aroma, pack to pack."}</p></div>
<div style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:18px;padding:32px 28px")}><h3 style={cssStyle("font:600 20px Montserrat,sans-serif;color:#0F3F21;margin:0 0 10px")}>{"Traceability"}</h3><p style={cssStyle("font:400 15px/1.65 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Farm, batch and pack are all linked."}</p></div>
</div>
</div>
</section>
<section style={cssStyle("background:#EFE6D8;padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;text-align:center")}>
<h2 style={cssStyle("font:700 clamp(28px,7vw,52px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 32px")}>{"Experience turmeric grown with care."}</h2>
<button type={"button"} onClick={navShop} style={cssStyle("min-height:56px;padding:0 36px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Shop Turmeric"}</button>
</div>
</section>
</main>
</>;
}
