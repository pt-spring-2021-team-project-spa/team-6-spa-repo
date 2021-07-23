export default function Contact() {
    return `
    <style>
 input[type=text], select, textarea {
      width: 100%; 
      padding: 12px; 
      border: 1px solid #ccc; 
      border-radius: 4px; 
      box-sizing: border-box; 
      margin-top: 6px; 
      margin-bottom: 16px; 
      
    }
    

    input[type=submit] {
      background-color: blue;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
   
    input[type=submit]:hover {
      background-color: gray;
    }
    
    
    .container {
      border-radius: 5px;
      background-color: red;
      padding: 20px;
    }

    </style> 
   
    
    
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

    `
}
