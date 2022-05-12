import React from 'react';
import HomeAgency from './all-home-version/HomeAgency';
import StoRadimo from './inner-pages/service/StoRadimo';
import EcommerceDetails from './inner-pages/service/EcommerceDetails';
import WebAndMobileDetails from './inner-pages/service/WebAndMobileDetails';
import DigitalMarketingDetails from './inner-pages/service/DigitalMarketingDetails';
import AboutUs from './inner-pages/about/AboutUs';
import Contact from './inner-pages/Contact';
import BlogGrid from './inner-pages/blog/BlogGrid';
//import WorksListing from './inner-pages/portfolio/WorksListing';

//import WorksCarousel from './inner-pages/portfolio/WorksCarousel';
import WorksGrid from './inner-pages/portfolio/WorksGrid';

export default class Page extends React.Component {

    render(){
        switch(this.props.slug) {
            case "home-agency":
                return <HomeAgency homeAgency={this.props.acf} key={this.props.id}/>
            case "service":
                return <StoRadimo stoRadimo={this.props.acf} key={this.props.id}/>
            case "blog":
                return <BlogGrid blog={this.props.acf} key={this.props.id}/>
            case "ecommerce":
                return <EcommerceDetails ecommerce={this.props.acf} key={this.props.id}/>
            case "web-mobile":
                return <WebAndMobileDetails web={this.props.acf} key={this.props.id}/>
            case "digitalni-marketing":
                return <DigitalMarketingDetails digital={this.props.acf} key={this.props.id} />
            case "about-us":
                return <AboutUs onama={this.props.acf} key={this.props.id} />
            case "works-carousel":
                return <WorksGrid port={this.props} key={this.props.id} />
            case "contact":
                return <Contact kontakt={this.props.acf} key={this.props.id} />
            default:
                return null
        }
    }
}