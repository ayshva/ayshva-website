import React from 'react';
import { cssStyle, isVisible } from '../viewUtils';
export default function CartDrawer({values}) {
const {hasCart, closeCart, cartLines, cartEmpty, cartSubtotal, checkoutHref, waCartHref} = values;
return <>
<div role={"dialog"} aria-modal={"true"} aria-label={"Your cart"} style={cssStyle("position:fixed;inset:0;z-index:60;animation:fadeIn .2s both")}>
<div onClick={closeCart} style={cssStyle("position:absolute;inset:0;background:rgba(15,63,33,.4)")}></div>
<aside className={"cart-panel"} style={cssStyle("position:absolute;top:0;right:0;bottom:0;width:min(460px,100%);background:#F8F3EC;display:flex;flex-direction:column;box-shadow:-30px 0 60px -30px rgba(15,63,33,.4);animation:riseIn .32s cubic-bezier(.22,.7,.3,1) both")}>
<div style={cssStyle("display:flex;align-items:center;justify-content:space-between;padding:28px 32px;border-bottom:1px solid rgba(15,63,33,.12)")}>
<h2 style={cssStyle("font:700 24px Montserrat,sans-serif;color:#0F3F21;margin:0")}>{"Your cart"}</h2>
<button type={"button"} onClick={closeCart} aria-label={"Close cart"} style={cssStyle("width:44px;height:44px;border-radius:999px;border:1.5px solid rgba(15,63,33,.2);background:transparent;cursor:pointer;font:400 20px 'DM Sans',sans-serif;color:#0F3F21")}>{"×"}</button>
</div>
<div style={cssStyle("flex:1;overflow:auto;padding:24px 32px")}>
{isVisible(hasCart) && <>
<div style={cssStyle("display:grid;gap:16px")}>
{cartLines.map((l, index) => <React.Fragment key={index}>
<div style={cssStyle("display:grid;grid-template-columns:76px 1fr auto;gap:16px;align-items:center;background:#fff;border:1px solid rgba(15,63,33,.1);border-radius:16px;padding:14px")}>
<img src={"/assets/bundled/ee61a4bc-1d15-45e4-a8f8-c3ddc1e1ba4e.png"} alt={""} style={cssStyle("width:76px;height:76px;object-fit:cover;border-radius:10px")} />
<div>
<p style={cssStyle("font:600 16px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 4px")}>{"AYSHVA Turmeric Powder"}</p>
<p style={cssStyle("font:400 14px 'DM Sans',sans-serif;color:#7A8A7E;margin:0")}>{l.size + " · qty " + l.qty}</p>
</div>
<div className={"final-side"} style={cssStyle("text-align:right")}>
<p style={cssStyle("font:600 15px 'DM Sans',sans-serif;color:#0F3F21;margin:0 0 6px")}>{l.price}</p>
<button type={"button"} onClick={l.remove} style={cssStyle("background:transparent;border:none;cursor:pointer;font:500 13px 'DM Sans',sans-serif;color:#C07F2A;padding:0")}>{"Remove"}</button>
</div>
</div>
</React.Fragment>)}
</div>
</>}
{isVisible(cartEmpty) && <>
<p style={cssStyle("font:400 16px/1.7 'DM Sans',sans-serif;color:#4A5A4E;margin:24px 0 0")}>{"Your cart is empty. Choose a pack size to get started."}</p>
</>}
</div>
<div style={cssStyle("padding:24px 32px 32px;border-top:1px solid rgba(15,63,33,.12)")}>
<div style={cssStyle("display:flex;justify-content:space-between;margin-bottom:8px")}>
<p style={cssStyle("font:500 15px 'DM Sans',sans-serif;color:#4A5A4E;margin:0")}>{"Subtotal"}</p>
<p style={cssStyle("font:600 16px 'DM Sans',sans-serif;color:#0F3F21;margin:0")}>{cartSubtotal}</p>
</div>
<p style={cssStyle("font:400 13px/1.6 'DM Sans',sans-serif;color:#7A8A7E;margin:0 0 20px")}>{"Shipping: [Shipping information] — shown before payment, never added later."}</p>
<a href={checkoutHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("width:100%;display:flex;align-items:center;justify-content:center;min-height:54px;border-radius:999px;background:#0F3F21;color:#F8F3EC;font:600 15px 'DM Sans',sans-serif;border:none;cursor:pointer;margin-bottom:12px")}>{"Proceed to checkout"}</a>
<a href={waCartHref} target={"_blank"} rel={"noopener noreferrer"} style={cssStyle("display:flex;align-items:center;justify-content:center;min-height:48px;font:600 14px 'DM Sans',sans-serif;color:#0F3F21")}>{"Need help with your order? WhatsApp us"}</a>
</div>
</aside>
</div>
</>;
}
