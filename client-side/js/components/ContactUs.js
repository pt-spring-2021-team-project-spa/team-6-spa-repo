
export default function Contact() {
  return `
  <link rel="stylesheet" href="css/form.css">
    
    <h1> Talk To Us !! </h1> 
    <div class="container">
  
  <div class="row">
    <div class="column">
    </div>
    <div class="column">
      <form action="/action_page.php">
      
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

        <label for="email">Email</label>
        <input type="text" id="email" name="email placeholder="Your email..">

        <label for="email"> Your Thoughts </label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>

    `;
}
