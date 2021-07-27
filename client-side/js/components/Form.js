export default function Form() {
  return ` 
  <link rel="stylesheet" href="css/form.css">
  
  <h1>Schedule A Visit !! </h1>
    <div class="container">
    <div class="card">
       
        <div class="time__container">
            <div class="section">
                <div class="box">
                    
                </div><span>Date &amp; Time</span>
            </div>
            <form action="" class="form__time">
                <div class="date">
                    <label for="date">Date</label> <input id="date" type="date">
                </div>
                <div class="time">
                    <label for="time">Time</label> <input id="time" type="time">
                </div>
                </div>
<div><span>School Type</span>
                <select style="width: 280px" id="Mobility" name="Mobility">
  <option selected="">Please Select</option>
  <option>Public</option>
  <option>Private</option>
  
</select>
<span>  Elementary Class by Grade</span>
                <select style="width: 280px" id="Mobility" name="Mobility">
  <option selected="">Please Select</option>
  <option>First grade</option>
  <option>Second grade</option>
  <option>Third grade</option>
  <option>Fourth grade</option>
  <option>Fifth grade</option>
</select>
                </div>
                
<div><span>  Middle School Class by Grade</span>
                <select style="width: 280px" id="Mobility" name="Mobility">
  <option selected="">Please Select</option>
  <option>Sixth grade</option>
  <option>Seventh grade</option>
  <option>Third grade</option>
  <option>Eighth grade</option>
</select> </div>
<div><span>  High School Class by Grade</span>
<select style="width: 280px" id="Mobility" name="Mobility">
<option selected="">Please Select</option>
<option>Freshmen</option></option>
<option>Sophomores</option>
<option>Juniors</option>
<option>Seniors</option>
</select> </div>            
                
        <div class="message__container">
            <div class="section">
                <div class="box">
                    
                </div> Any Concerns to Address <span> </span>
            </div>
            <textarea placeholder="e.g. Please do .. Also, .." cols="50" rows="5"></textarea>
        </div>
        <div class="contact__container">
            <div class="section">
                <div class="box">
                    
                </div><span>Contact Information</span>
            </div>
            <form action="" class="form__contact">
                <div class="cname">
                    <label for="cname">Name</label> <input placeholder="e.g. Richard Bovell" id="cname" type="text">
                </div>
                <div class="cnum">
                    <label for="cnum">Phone Number</label> <input id="cnum" type="text">
                </div>
                <div class="email">
                    <label for="cemail">Email</label> <input placeholder="e.g. rb@email.com" id="cemail" type="email">
                </div>
            </form>
        </div>
        <div class="form__confirmation">
            <button>Confirm Information</button>
        </div>
    </div>
</div>
    `;
}
