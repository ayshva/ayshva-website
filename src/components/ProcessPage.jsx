import React from 'react';
import { cssStyle } from '../viewUtils';
export default function ProcessPage({values}) {
const {navShop} = values;
return <>
<main data-screen-label={"Process and Quality"}>
<section style={cssStyle("padding:clamp(48px,8vw,96px) 0 clamp(40px,7vw,80px)")}>
<div className={"wrap g-hero-farm"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:1fr;gap:28px;align-items:end")}>
<div>
<p style={cssStyle("font:600 12px/1 'DM Sans',sans-serif;letter-spacing:.26em;text-transform:uppercase;color:#C07F2A;margin:0 0 22px")}>{"Process & quality"}</p>
<h1 style={cssStyle("font:700 clamp(32px,8.5vw,72px)/1.08 Montserrat,sans-serif;letter-spacing:-.025em;color:#0F3F21;margin:0 0 24px")}>{"From Seed to Spice"}</h1>
<p style={cssStyle("font:400 18px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0;max-width:52ch")}>{"Quality is created through every step, from the soil to your kitchen. Seven stages, each one carried out by us."}</p>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:16px")}>
<div style={cssStyle("padding:24px;border-radius:16px;background:#fff;border:1px solid rgba(15,63,33,.1)")}><p style={cssStyle("font:700 28px Montserrat,sans-serif;color:#0F3F21;margin:0 0 6px")}>{"7"}</p><p style={cssStyle("font:400 14px 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"stages, all in-house"}</p></div>
<div style={cssStyle("padding:24px;border-radius:16px;background:#fff;border:1px solid rgba(15,63,33,.1)")}><p style={cssStyle("font:700 28px Montserrat,sans-serif;color:#0F3F21;margin:0 0 6px")}>{"1"}</p><p style={cssStyle("font:400 14px 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"farm, one family"}</p></div>
</div>
</div>
</section>
<section style={cssStyle("padding:0 0 clamp(48px,7vw,96px)")}>
<div className={"wrap"} style={cssStyle("max-width:1200px;margin:0 auto;padding:0 20px;position:relative")}>
<div aria-hidden={"true"} className={"process-line"} style={cssStyle("position:absolute;left:50%;top:0;bottom:0;width:1px;background:linear-gradient(180deg,rgba(15,63,33,0),rgba(15,63,33,.2) 8%,rgba(15,63,33,.2) 92%,rgba(15,63,33,0))")}></div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 01"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Harvesting"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Rhizomes are lifted from our own fields once the crop has fully matured."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: maturity and moisture assessed field by field"}</p></div>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Harvesting photo">{"Harvesting photo"}</div></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Sorting & cleaning photo">{"Sorting & cleaning photo"}</div></div>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 02"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Sorting and Cleaning"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Roots are graded by hand and washed until no field soil remains."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: damaged and undersized rhizomes removed"}</p></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 03"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Boiling"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Cleaned roots are boiled to set colour evenly through the flesh."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: batch timing recorded"}</p></div>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Boiling photo">{"Boiling photo"}</div></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Sun-drying photo">{"Sun-drying photo"}</div></div>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 04"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Drying"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Boiled turmeric is dried until it is hard enough to mill cleanly."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: dryness checked before polishing"}</p></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 05"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Polishing"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"The rough outer skin is removed so only clean turmeric goes to the mill."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: visual inspection after polishing"}</p></div>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Polishing photo">{"Polishing photo"}</div></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Grinding photo">{"Grinding photo"}</div></div>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 06"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Grinding"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Ground with care so the natural colour and aroma are not lost to heat."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: consistency of grind checked per batch"}</p></div>
</div>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:40px 0")}>
<div><p style={cssStyle("font:600 12px 'DM Sans',sans-serif;letter-spacing:.2em;color:#C07F2A;margin:0 0 12px")}>{"Step 07"}</p><h3 style={cssStyle("font:700 clamp(22px,4.5vw,32px)/1.2 Montserrat,sans-serif;color:#0F3F21;margin:0 0 14px")}>{"Packing"}</h3><p style={cssStyle("font:400 16px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 18px")}>{"Packed in a clean, hygienic environment and sealed to hold freshness."}</p><p style={cssStyle("font:500 14px/1.6 'DM Sans',sans-serif;color:#0F3F21;margin:0;padding-left:16px;border-left:2px solid #E8A329")}>{"Checkpoint: batch code recorded on every pack"}</p></div>
<div style={cssStyle("height:clamp(180px,50vw,340px);border-radius:20px;overflow:hidden")}><div className="image-placeholder" role="img" aria-label="Packing photo">{"Packing photo"}</div></div>
</div>
</div>
</section>
<section style={cssStyle("background:#0F3F21;padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div style={cssStyle("max-width:620px;margin:0 0 48px")}>
<p style={cssStyle("font:600 14px/1 'DM Sans',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#E8A329;margin:0 0 18px")}>{"Quality"}</p>
<h2 style={cssStyle("font:700 clamp(26px,6vw,44px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#F8F3EC;margin:0")}>{"What we control, and how we show it."}</h2>
</div>
<div className={"g-3"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px")}>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"Farm-to-kitchen traceability"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"Every pack ties back to a harvest and a batch."}</p></div>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"Hygienic processing"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"Clean environment from drying yard to sealing."}</p></div>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"Batch inspection"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"Every batch is inspected before it leaves us."}</p></div>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"Natural colour and aroma"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"From the root — never corrected with additives."}</p></div>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"No colours, no preservatives"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"Ingredient declaration: turmeric powder (100%)."}</p></div>
<div style={cssStyle("padding:32px;border-radius:18px;background:rgba(248,243,236,.06)")}><h3 style={cssStyle("font:600 19px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 10px")}>{"Consistency controls"}</h3><p style={cssStyle("font:400 15px/1.7 'DM Sans',sans-serif;color:rgba(248,243,236,.72);margin:0")}>{"Same grind, same colour, pack after pack."}</p></div>
</div>
</div>
</section>
<section style={cssStyle("padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<h2 style={cssStyle("font:700 clamp(24px,5.5vw,40px)/1.15 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 14px")}>{"Laboratory reports and certifications"}</h2>
<p style={cssStyle("font:400 17px/1.75 'DM Sans',sans-serif;color:#4A5A4E;margin:0 0 44px;max-width:64ch")}>{"Each report is published whole, with the laboratory named and the batch identified. Until then, these cards stay in their pending state rather than showing an unverified number."}</p>
<div className={"g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:20px")}>
<article style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.12);border-radius:22px;padding:38px")}>
<div style={cssStyle("display:flex;align-items:center;justify-content:space-between;margin-bottom:24px")}>
<h3 style={cssStyle("font:600 21px Montserrat,sans-serif;color:#0F3F21;margin:0")}>{"[Laboratory report]"}</h3>
<span style={cssStyle("padding:6px 14px;border-radius:999px;background:rgba(192,127,42,.12);font:600 11px 'DM Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#C07F2A")}>{"Pending"}</span>
</div>
<dl className={"g-dl"} style={cssStyle("margin:0 0 26px;display:grid;grid-template-columns:1fr;row-gap:14px;column-gap:20px")}>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Laboratory name"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Laboratory name]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Report date"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Report date]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Batch / sample"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Batch number]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Tested parameters"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Tested parameters]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Result summary"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Result summary]"}</dd>
</dl>
<button type={"button"} style={cssStyle("min-height:48px;padding:0 24px;border-radius:999px;background:transparent;color:#7A8A7E;font:600 14px 'DM Sans',sans-serif;border:1.5px solid rgba(15,63,33,.18);cursor:not-allowed")}>{"View full report"}</button>
</article>
<article style={cssStyle("background:#EFE6D8;border-radius:22px;padding:38px")}>
<h3 style={cssStyle("font:600 21px Montserrat,sans-serif;color:#0F3F21;margin:0 0 24px")}>{"Certifications and licences"}</h3>
<dl className={"g-dl"} style={cssStyle("margin:0 0 26px;display:grid;grid-template-columns:1fr;row-gap:14px;column-gap:20px")}>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Food licence"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Food licence number]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Certification"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Certification]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Valid until"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"[Validity date]"}</dd>
<dt style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#7A8A7E")}>{"Manufacturing"}</dt><dd style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{"Malipura, At Post Sevali, Jalna – 431213"}</dd>
</dl>
<p style={cssStyle("font:400 14px/1.7 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"No badge is displayed until the certificate is uploaded and current."}</p>
</article>
</div>
</div>
</section>
<section style={cssStyle("background:#EFE6D8;padding:clamp(56px,8vw,104px) 0")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px;text-align:center")}>
<h2 style={cssStyle("font:700 clamp(28px,7vw,52px)/1.12 Montserrat,sans-serif;letter-spacing:-.02em;color:#0F3F21;margin:0 0 32px")}>{"See the care behind every pack."}</h2>
<button type={"button"} onClick={navShop} style={cssStyle("min-height:56px;padding:0 36px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Shop Turmeric"}</button>
</div>
</section>
</main>
</>;
}
