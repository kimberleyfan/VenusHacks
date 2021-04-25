import home from './pages/home.html'
import index from './index.css'
import "@fontsource/be-vietnam"

function App() {
  return (
    <body >
      <div class= "box">
        <div class="title">
          <div class="titleText">
            <h1>Find your</h1>
            <h1>Menstrual</h1>
            <h1>Helper</h1>
          </div>
          <div class="title-image">
            <img src="helper.jpg" alt="Menstrual helper image"></img>
          </div>
        </div>
        
        <div class="about">
          <div class="aboutText">
            <h2>About Us</h2>
            <p>period is all about women supporting women especially when it 
            comes to those tough days that we’re having. Sometimes our cycles 
            come when we are least prepared and we don’t have a product to help 
            us cover our leaks. With period, we help you find other nearby women 
            that have the products to help you get through your day.</p>
            <p>Alongside this, we have launched a resources page where all women can 
              learn more about the menstrual cycle world.</p>
            <p>                                          </p>
          </div>
          <div class="aboutImage">
            <img src="./support.png" alt="Support image"></img>
          </div>
        </div>

        <div class="more">
          <h1>Help Aid Our Community</h1>
          <p>
            Want to become a menstrual helper? Fill out the basic information in the
            form below and we will send you an email if you are a match! As a menstrual helper, 
            you are able to turn on your location (whenever you would like) and alert nearby women 
            that you have menstrual products to help them out!
          </p>
          <p>
            As a menstrual helper, you can also choose to stay anonymous or not on the site. What this 
            means is that, people will not be able to see your name and face on the app. They can only see 
            what products you have as well as requesting and contacting you. In addition, period values its 
            users’ safety meaning that we use a service to help conceal your and your requested user’s number.
          </p>
          <p>
            If you get accepted as a menstrual helper, you will need to provide a background check confirming 
            your identity (anon users will need to do this too). When first accepted, you will receive free swag 
            such as a free box of pads from our sponsors, a period shirt, and a period bucket hat. </p>
        </div>

        <div class="form">
          <h1 class="formTitle">Fill out more information below</h1>
          <div class = "first">
            <p> First Name</p>
            <div class = "sampleBox1"></div>
          </div>
          <div class = "first">
            <p> Last Name</p>
            <div class = "sampleBox2"></div>
          </div>
          <div class = "first">
            <p> Email</p>
            <div class = "sampleBox3"></div>
          </div>
          <div class = "first">
            <p> Phone</p>
            <div class = "sampleBox4"></div>
          </div>
          <div class = "first">
            <p> More Info</p>
            <div class = "sampleBox5"></div>
          </div>
          <div> 
            <div class = "sampleBox6">Submit</div>
          </div>
          
        </div>

        <div class ="end">
        </div>
      </div> 
    </body>
  );
}

export default App;