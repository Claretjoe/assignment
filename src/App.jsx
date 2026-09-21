import react from 'react'
import image1 from './assets/london.png'
import logo from './assets/logo.png'
import image2 from './assets/newyork.png'
import image3 from './assets/washington.png'
import './App.css'

const  App = () => {

  return (

   <div>
    <section className="header">
        <nav>
        <a href="index.html"><img src={logo} alt="logo1"/></a>
        <div className="nav-links">
           <ul>
            <li> <a href="">HOME</a></li>
            <li> <a href="">ABOUT</a></li>
            <li> <a href="">COURSE</a></li>
            <li> <a href="">BLOG</a></li>
            <li> <a href="">HOME</a></li>
           </ul>

        </div>
        </nav>
        <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>making website is now one of the easiest things in the world. you just need to learn HTML,<br/> CSS AND Javascript and you are go to go.</p>
          <a href="" className="hero-btn">Visit Us To Know More</a>  
        </div>

    </section>
    <section className="course">
        <h1>Courses We Offer</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus eos aperiam laborum recusandae sint enim facere fuga nemo quod!</p>
  <div className="row">
    <div className="course-col">
        <h3>Intermediate</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus neque ex nemo, aliquid quaerat nostrum obcaecati dignissimos aut ducimus atque porro minus eveniet excepturi nesciunt molestias voluptatem commodi perferendis. Modi sequi numquam facilis repellat voluptatibus porro ut explicabo accusamus.</p>
    </div>
     <div className="course-col">
        <h3>Degree</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus neque ex nemo, aliquid quaerat nostrum obcaecati dignissimos aut ducimus atque porro minus eveniet excepturi nesciunt molestias voluptatem commodi perferendis. Modi sequi numquam facilis repellat voluptatibus porro ut explicabo accusamus.</p>
    </div>
     <div className="course-col">
        <h3>post-Graduate</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus neque ex nemo, aliquid quaerat nostrum obcaecati dignissimos aut ducimus atque porro minus eveniet excepturi nesciunt molestias voluptatem commodi perferendis. Modi sequi numquam facilis repellat voluptatibus porro ut explicabo accusamus.</p>
    </div>
  </div>  
</section>
{/* <!-- CAMPUS --> */}
 <section className="campus">
    <h1> Our Global Campus</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus neque ex nemo, aliquid quaerat nostrum obcaecati dignissimos aut ducimus atque porro minus eveniet excepturi nesciunt molestias voluptatem commodi perferendis. Modi sequi numquam facilis repellat voluptatibus porro ut explicabo accusamus.</p>
 <div className="row">
    <div className="campus-col">
        <img src={image1} alt='place1'/>
     <div className="layer">
       <h3>LONDON</h3>
     </div>
    </div>
     <div className="campus-col">
        <img src={image2} alt='place'/>
    <div className="layer">
    <h3>NEW YORK</h3>
      </div>
    </div>
     <div className="campus-col">
         <img src={image3} alt='place3'/>
        <div className="layer">
          <h3>WASHINGTON</h3>
        </div>
    </div>
 </div>
 </section>
 {/* <!-- FACILITIES --> */}
  <section className="facilities">
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat.</p>

    <div className="row">
      <div className="facilities-col">
        <img src="c:\Users\HP\Desktop\my personal lecture\images\library.png"/>
        <h3>World Class Library</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum nihil pariatur nesciunt qui culpa iure quaerat blanditiis quia? Dolor.</p>
      </div>
      <div className="facilities-col">
        <img src="c:\Users\HP\Desktop\my personal lecture\images\basketball.png"/>
        <h3>Largest Play Ground</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum nihil pariatur nesciunt qui culpa iure quaerat blanditiis quia? Dolor.</p>
      </div>
<div className="facilities-col">
        <img src="c:\Users\HP\Desktop\my personal lecture\images\cafeteria.png"/>
        <h3>Tasty and Healthy Food</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum nihil pariatur nesciunt qui culpa iure quaerat blanditiis quia? Dolor.</p>
      </div>
    </div>
  </section>
  {/* <!-- TESTIMONIALS --> */}
 <section className="testimonials">
  <h1>What Our Student Says</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus ex consequuntur accusantium laboriosam velit.</p>

  <div className="row">
    <div className="testimonial-col">
      <img src="c:\Users\HP\Desktop\my personal lecture\images\user1.jpg"/>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque culpa unde repudiandae voluptatum, minima corrupti. Magni consectetur fugiat sunt.</p>
        <h3>Christine Berkley</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
      </div>
    </div>
      <div className="testimonial-col">
      <img src="c:\Users\HP\Desktop\my personal lecture\images\user2.jpg"/>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque culpa unde repudiandae voluptatum, minima corrupti. Magni consectetur fugiat sunt.</p>
        <h3>Christine David</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
      </div>
    </div>
  </div>
 </section>
 {/* <!-- CALL TO ACTION --> */}
  <section className="cta">
    <h1>Enroll For Our Online Class From <br/>Anywhere In The World</h1>
    <a href="" className="hero-btn">CONTACT US</a>
  </section>
  {/* <!-- FOOTER --> */}
   <section className="footer">
    <h4>About Us</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facere quibusdam <br/>dolores harum, ab tempora minima quidem amet voluptas? Cupiditate voluptatibus, recusandae sapiente quae dolor harum<br/> aperiam nemo cumque perspiciatis expedita ipsam? Eligendi, sequi voluptatum aut quam velit qui modi!</p>
    <div className="icons">
      <i className="fa fa-facebook"></i>
      <i className="fa fa-twitter"></i>
      <i className="fa fa-instagram"></i>
      <i className="fa fa-linkedin"></i>
    </div>
   </section>
   </div>

  )
}

export default App
