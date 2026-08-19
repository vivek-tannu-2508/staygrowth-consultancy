"use client";
import {FormEvent, useState} from "react";

const services=[
 ["Property Launch & Setup","Feasibility, room categories, positioning, pricing, policies and launch planning."],
 ["OTA Listing Management","Booking.com, Airbnb, MMT, Agoda, Goibibo and other channel management."],
 ["Revenue Management","Dynamic pricing, competitor tracking, occupancy, ADR and RevPAR improvement."],
 ["Listing Optimization","Content, photos, amenities, reviews, promotions and visibility improvements."],
 ["Digital & Direct Sales","Website, booking engine, offers, corporate enquiries and direct-booking strategy."],
 ["Performance Consulting","Monthly reviews, action plans, audits and practical owner-focused guidance."]
];

export default function Home(){
 const [status,setStatus]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus("Sending...");const data=Object.fromEntries(new FormData(e.currentTarget));const r=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});setStatus(r.ok?"Thank you. We will contact you shortly.":"Something went wrong. Please try again.");if(r.ok)e.currentTarget.reset()}
 return <>
  <header><div className="container nav"><div className="brand">StayGrowth Consulting</div><nav className="navlinks"><a href="#services">Services</a><a href="#packages">Packages</a><a href="#why">Why Us</a><a href="#contact">Contact</a></nav><a className="btn" href="#contact">Book a Consultation</a></div></header>
  <main>
   <section className="hero"><div className="container"><p className="muted">Hospitality Revenue & OTA Consultancy</p><h1>Turn your property into a stronger revenue business.</h1><p>We help accommodation owners launch, optimize and grow their properties through better OTA management, revenue strategy and direct sales.</p><a className="btn" href="#contact">Get a Property Audit</a></div></section>
   <section id="services" className="section"><div className="container"><h2>What we do</h2><p className="muted">Practical support from property setup to profitable day-to-day operations.</p><div className="grid">{services.map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>)}</div></div></section>
   <section id="packages" className="section"><div className="container"><h2>Simple packages</h2><p className="muted">Choose the level of support that fits your property.</p><div className="grid"><div className="card"><h3>Starter Audit</h3><div className="price">₹5,000</div><p>OTA, pricing, visibility and revenue audit with an action plan.</p></div><div className="card"><h3>Growth</h3><div className="price">₹15,000<span style={{fontSize:14}}>/month</span></div><p>OTA management, promotions, pricing recommendations and monthly review.</p></div><div className="card"><h3>Premium</h3><div className="price">₹30,000+</div><p>Full revenue, OTA, sales and growth consulting for serious operators.</p></div></div></div></section>
   <section id="why" className="section"><div className="container"><h2>Why StayGrowth?</h2><div className="grid"><div className="card"><h3>OTA-first expertise</h3><p className="muted">Strategies built around real accommodation distribution channels.</p></div><div className="card"><h3>Revenue focused</h3><p className="muted">We focus on occupancy, ADR, RevPAR and profitable bookings.</p></div><div className="card"><h3>Owner friendly</h3><p className="muted">Clear reports and practical actions without unnecessary complexity.</p></div></div></div></section>
   <section id="contact" className="section contact"><div className="container"><h2>Book a consultation</h2><p className="muted">Tell us about your property and what you want to improve.</p><form className="form" onSubmit={submit}><input className="input" name="name" placeholder="Your name" required/><input className="input" name="phone" placeholder="Phone number" required/><input className="input" type="email" name="email" placeholder="Email" required/><input className="input" name="property" placeholder="Property / Hotel name"/><textarea className="textarea" name="message" placeholder="Tell us about your property or requirement"/><button className="btn" type="submit">Send Enquiry</button>{status&&<div className={status.startsWith("Thank")?"success":"error"}>{status}</div>}</form></div></section>
  </main>
  <footer className="footer"><div className="container">© {new Date().getFullYear()} StayGrowth Consulting. Hospitality revenue & OTA consultancy.</div></footer>
 </>
}
