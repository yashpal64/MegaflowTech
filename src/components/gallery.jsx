import React, { Component } from "react";
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

export class Gallery extends Component {
 state={items1 : [
    {
      id: 1,
      header: 'UI/UX design',
      description:
        'Our UI/UX design team will help you build an engaging product easily and quickly. Megaflow provides all UX and UI design services encompassing the website app development.',
      image: 'img/space.png'
    },
    {
      id: 2,
      header: 'Development',
      description:
        'Armed with the latest technology, our front and back-end development teams bring your designs to life. We develop for the now and build for the future.',
      image: 'img/webdevelopment.png'
    },
    {
      id: 3,
      header: 'Branding',
      description:
        'Our branding team creates powerful and holistic brand strategies that set the stage for your marketing initiatives for today and tomorrow',
      image: 'img/companybranding.png'
    }
  ],

items2:  [
  {
    id: 1,
    header: 'Custom Design',
    description:
      'We craft smart solutions with research-backed strategies and high-quality, professional-grade custom product designs. We are fanatical about the UX/UI design process, and we go deep to cover all user scenarios and edge cases. We get noticed for our brand design, too.',
    image: 'img/mobiledesign.png'
  },
  {
    id: 2,
    header: 'Scalable Apps',
    description:
      'We architect and code hard-core iOS and Android mobile apps, built for scale and security. We do not shy away from building custom web platforms either. Our product engineering folks are industry veterans from leading technology organizations. We’ve seen it all.',
    image: 'img/mobilescalable.png'
  },
  {
    id: 3,
    header: 'Security',
    description:
      'More people use their phones to access the internet than desktops. That is why phones are now more vulnerable to cyber-attacks. As a mobile application development company, security is always our top priority while developing a mobile app.',
    image: 'img/mobilesecurity.png'
  }
],

items3:  [
  {
    id: 1,
    header: 'Creative IT Solutions',
    description:
      'Nobody wants a cookie-cutter solution. CompCiti provides customized, creative solutions for your IT needs.',
    image: 'img/businesscreative.png'
  },
  {
    id: 2,
    header: 'Business Operations',
    description:
      'businesses engage in on a daily basis to increase the value of the enterprise and earn a profit. The activities can be optimized to generate sufficient revenues.',
    image: 'img/businessoperations.png'
  },
  {
    id: 3,
    header: 'Cost Optimization',
    description:
      'Cost optimization is a business-focused, continuous discipline to drive spending and cost reduction, while maximizing business value. It includes: Obtaining the best pricing and terms for all business purchases.',
    image: 'img/businesscost.png'
  },
],

items4:  [
  {
    id: 1,
    header: 'B2B Marketing',
    description:
      'We provide marketing strategy and execution for B2B organizations. Specialization is important to us. We bring together the following disciplines to drive growth for B2B',
    image: 'img/b2bmarketing.png'
  },
  {
    id: 2,
    header: 'Focused Marketing',
    description:
      'Our work focuses on activities and actions that drive three core metrics. By having such a pointed focus, we are able to move faster and cut through the clutter that exists in the marketing industry today',
    image: 'img/focused.png'
  },
  {
    id: 3,
    header: 'Content Writing',
    description:
      'Cardinal’s experienced writers will provide fresh content for your blogs and website, utilizing SEO while still providing quality, engaging copy.',
    image: 'img/contentwriting.jpg'
  },
]}
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Techonolgies & Industries</h2>
            
             <p>
             <br/>
             <br/>
               <br />
               <br/>
               <br/>
               <br/>
               <br/>

               <h2>Technologies</h2>
               <br/>
               <br/>
               <h4>Web Applications</h4>
             <CardView
                      items={this.state.items1}
                      activeColor='#000'
                      imageHeight='420px'
                      imageWidth='85%'
                    />
                    
            </p>
            <p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h5>Mobile Applications</h5>

            <CardView
                      items={this.state.items2}
                      activeColor='#000'
                      imageHeight='420px'
                      imageWidth='85%'
                    />
                    </p>
                    <p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h5>Business Solutions</h5>

            <CardView
                      items={this.state.items3}
                      activeColor='#000'
                      imageHeight='420px'
                      imageWidth='85%'
                    />
                    </p>
                    <p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h5>Digital Marketing</h5>

            <CardView
                      items={this.state.items4}
                      activeColor='#000'
                      imageHeight='420px'
                      imageWidth='85%'
                    />
                    </p>


            
          </div> 
          
        </div>
      </div>
    );
  }
}

export default Gallery;
