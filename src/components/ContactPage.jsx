import React from 'react';
import { cssStyle } from '../viewUtils';
export default function ContactPage({values}) {
const {waHref, submitForm, formNote} = values;
return <>
<main data-screen-label={"Contact"}>
<section style={cssStyle("padding:clamp(48px,8vw,96px) 0 clamp(56px,8vw,104px)")}>
<div className={"wrap"} style={cssStyle("max-width:1320px;margin:0 auto;padding:0 20px")}>
<div style={cssStyle("max-width:680px;margin:0 0 56px")}>
<p style={cssStyle("font:600 12px/1 'DM Sans',sans-serif;letter-spacing:.26em;text-transform:uppercase;color:#C07F2A;margin:0 0 22px")}>{"Contact"}</p>
<h1 style={cssStyle("font:700 clamp(30px,8vw,62px)/1.08 Montserrat,sans-serif;letter-spacing:-.025em;color:#0F3F21;margin:0 0 20px")}>{"Talk to the farm."}</h1>
<p style={cssStyle("font:400 18px/1.8 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Product questions, order support, wholesale and distribution — all reach the same family."}</p>
</div>
<div className={"g-contact g-why"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:28px;align-items:start")}>
<form onSubmit={submitForm} style={cssStyle("background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:24px;padding:44px")}>
<div style={cssStyle("display:grid;gap:22px")}>
<div className={"g-form2 g-2"} style={cssStyle("display:grid;grid-template-columns:1fr;gap:22px")}>
<div><label htmlFor={"c-name"} style={cssStyle("display:block;font:600 13px 'DM Sans',sans-serif;color:#0F3F21;margin-bottom:8px")}>{"Your name"}</label><input id={"c-name"} type={"text"} style={cssStyle("width:100%;min-height:52px;padding:0 16px;border:1.5px solid rgba(15,63,33,.18);border-radius:12px;font:400 15px 'DM Sans',sans-serif;color:#0F3F21;background:#F8F3EC")} /></div>
<div><label htmlFor={"c-phone"} style={cssStyle("display:block;font:600 13px 'DM Sans',sans-serif;color:#0F3F21;margin-bottom:8px")}>{"Phone"}</label><input id={"c-phone"} type={"tel"} style={cssStyle("width:100%;min-height:52px;padding:0 16px;border:1.5px solid rgba(15,63,33,.18);border-radius:12px;font:400 15px 'DM Sans',sans-serif;color:#0F3F21;background:#F8F3EC")} /></div>
</div>
<div><label htmlFor={"c-email"} style={cssStyle("display:block;font:600 13px 'DM Sans',sans-serif;color:#0F3F21;margin-bottom:8px")}>{"Email"}</label><input id={"c-email"} type={"email"} style={cssStyle("width:100%;min-height:52px;padding:0 16px;border:1.5px solid rgba(15,63,33,.18);border-radius:12px;font:400 15px 'DM Sans',sans-serif;color:#0F3F21;background:#F8F3EC")} /></div>
<div>
<label htmlFor={"c-type"} style={cssStyle("display:block;font:600 13px 'DM Sans',sans-serif;color:#0F3F21;margin-bottom:8px")}>{"What is this about?"}</label>
<select id={"c-type"} style={cssStyle("width:100%;min-height:52px;padding:0 16px;border:1.5px solid rgba(15,63,33,.18);border-radius:12px;font:400 15px 'DM Sans',sans-serif;color:#0F3F21;background:#F8F3EC")}>
<option>{"Product question"}</option>
<option>{"Order support"}</option>
<option>{"Wholesale enquiry"}</option>
<option>{"Distributor enquiry"}</option>
</select>
</div>
<div><label htmlFor={"c-msg"} style={cssStyle("display:block;font:600 13px 'DM Sans',sans-serif;color:#0F3F21;margin-bottom:8px")}>{"Message"}</label><textarea id={"c-msg"} rows={"5"} style={cssStyle("width:100%;padding:14px 16px;border:1.5px solid rgba(15,63,33,.18);border-radius:12px;font:400 15px/1.6 'DM Sans',sans-serif;color:#0F3F21;background:#F8F3EC;resize:vertical")}></textarea></div>
<div className={"form-actions"} style={cssStyle("display:flex;align-items:center;gap:18px")}>
<button type={"submit"} style={cssStyle("min-height:54px;padding:0 32px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer")}>{"Send message"}</button>
<p aria-live={"polite"} style={cssStyle("font:500 14px 'DM Sans',sans-serif;color:#C07F2A;margin:0")}>{formNote}</p>
</div>
</div>
</form>
<div style={cssStyle("display:grid;gap:20px")}>
<div style={cssStyle("background:#0F3F21;border-radius:22px;padding:38px")}>
<h2 style={cssStyle("font:600 22px Montserrat,sans-serif;color:#F8F3EC;margin:0 0 22px")}>{"Reach us directly"}</h2>
<dl style={cssStyle("margin:0;display:grid;row-gap:18px")}>
<div><dt style={cssStyle("font:500 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin-bottom:5px")}>{"Phone / WhatsApp"}</dt><dd style={cssStyle("font:500 16px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"+91 92702 64137"}</dd></div>
<div><dt style={cssStyle("font:500 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin-bottom:5px")}>{"Email"}</dt><dd style={cssStyle("font:500 16px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"connectayshva@gmail.com"}</dd></div>
<div><dt style={cssStyle("font:500 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin-bottom:5px")}>{"Instagram"}</dt><dd style={cssStyle("font:500 16px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"@ayshva.official"}</dd></div>
<div><dt style={cssStyle("font:500 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin-bottom:5px")}>{"Address"}</dt><dd style={cssStyle("font:500 16px/1.6 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"Malipura, At Post Sevali,"}<br />{"Jalna, Maharashtra – 431213"}</dd></div>
<div><dt style={cssStyle("font:500 13px 'DM Sans',sans-serif;color:rgba(248,243,236,.55);margin-bottom:5px")}>{"Business hours"}</dt><dd style={cssStyle("font:500 16px 'DM Sans',sans-serif;color:#F8F3EC;margin:0")}>{"[Business hours]"}</dd></div>
</dl>
<a href={waHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 26px;margin-top:28px;border-radius:999px;background:#E8A329;color:#0F3F21;font:600 15px 'DM Sans',sans-serif")}>{"Chat on WhatsApp"}</a>
</div>
<div style={cssStyle("border:1px dashed rgba(15,63,33,.3);border-radius:22px;padding:32px;background:#fff")}>
<p style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 8px")}>{"Map"}</p>
<p style={cssStyle("font:400 14px/1.7 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{"A map embed is added once the public farm location is confirmed for publication."}</p>
</div>
</div>
</div>
</div>
</section>
</main>
</>;
}
