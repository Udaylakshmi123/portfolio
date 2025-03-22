function Contact() {
  return (
    <section id="contact" className="mb-24 text-center">
      <h3 className="text-center text-2xl font-bold mt-20 mb-6 underline">CONTACT</h3>
      <label className="input validator">
  <input type="input" required placeholder="Name" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
</label>
<p className="validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
<div>
  <label className="input validator">
  <input type="email" placeholder="mail@site.com" required/>
</label>
<div className="validator-hint hidden">Enter valid email address</div>
</div>
<div>
<textarea className="textarea mt-8" placeholder="Message"></textarea>
</div>
<button className="mt-2 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Submit</button>
    </section>
  );
}

export default Contact;