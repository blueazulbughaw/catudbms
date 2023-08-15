import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      //var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var bio = this.props.data.bio.map(function(bio){
        return <li key={bio.bioItem}>{bio.bioItem}</li>
      })      
    

    }

    return (
      <section id="about">
         <div className="row section-head">
         <h2><span>About Me</span></h2>
   </div>         
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Glad Cedeno Profile Pic" />
         </div>
         <div className="nine columns main-col">

            <ul><p>{bio}</p></ul>
         </div>

      </div> 
      <p><a target="_blank" href={resumeDownload} className="button"><i className="fa fa-download"></i>&nbsp;Download My Resume</a></p>        
   </section>
    );
  }
}

export default About;
