export default function Form() {
  return ` <h1>Schedule A Visit !! </h1>
    <div class="container">
    <div class="card">
       
        <div class="time__container">
            <div class="section">
                <div class="box">
                    1
                </div><span>Date &amp; Time</span>
            </div>
            <form action="" class="form__time">
                <div class="date">
                    <label for="date">Date</label> <input id="date" type="date">
                </div>
                <div class="time">
                    <label for="time">Time</label> <input id="time" type="time">
                </div>
                <div class="">
                   
                            </option>
                        </select>
                </div>
            </form>
        </div>
        <div class="message__container">
            <div class="section">
                <div class="box">
                    2
                </div><span>Your Message</span>
            </div>
            <textarea placeholder="e.g. Please do .. Also, .." cols="50" rows="5"></textarea>
        </div>
        <div class="contact__container">
            <div class="section">
                <div class="box">
                    3
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
