import React from 'react'

export default function Contact() {
  return (
      <div>
          <form>
      <label for="fname">First Name:</label>
      <input type="text" id="fname" placeholder="John" required></input>
      <br></br>
      <label for="lname">Last Name:</label>
      <input type="text" id="lname" placeholder="Doe" required></input>
      <br></br>
      <br></br>
      <label for="Email">Email:</label>
      <input type="text" id="fname" placeholder="basicdudeguy@hotmail.com" required></input>
      <br></br>
      <br></br>
      <label for="phone">Phone Number:</label>
      <input type="number" name="phone" placeholder="###-###-####" required></input>
      <br></br>
      <br></br>
      <label for="message">Message:</label>
      <textarea id="message" placeholder="abcdef... y'know... the alphabet..."></textarea>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
