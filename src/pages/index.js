import * as React from "react"

import "./index.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <h2>Submit form to Airtable</h2>
        <form action="/api/airtable" method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
          </div>          
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2>Send Email via Sendgrid</h2>
        <form action="/api/sendgrid" method="POST">
          <div>
            <label htmlFor="from">From</label>
            <input type="email" name="from" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label htmlFor="text">Message</label>
            <textarea name="text"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}

export default IndexPage
