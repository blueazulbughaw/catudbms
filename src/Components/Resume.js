import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3><a target="_blank" href={education.url}>{education.school}</a></h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3><a target="_blank" href={work.url}>{work.company}</a></h3>
            <p className="info"><b>{work.title}</b><span>&bull;</span> <em className="date">{work.years}</em> - <span className="info">{work.place}</span></p>
            <p></p>
             </div>
   
      })
      
      var business = this.props.data.business.map(function(business){
        return <div key={business.company}><h3><a target="_blank" href={business.url}>{business.company}</a></h3>
            <p className="info"><b>{business.title}</b><span>&bull;</span> <em className="date">{business.years}</em></p>
        </div>
      })   
      
      var certificates = this.props.data.certificates.map(function(certificates){
         return <div key={certificates.title}><li>{certificates.title}</li>
         </div>
       })         
      
      var techskills = this.props.data.techskills.skills.map(function(techskills){
        return <div key={techskills.name}><div>{techskills.name}</div><i class={techskills.className}></i></div>
      })
      var techskillsMessage = this.props.data.techskills.skillmessage;
      var expertise = this.props.data.expertise.skillmessage;
      var mngtskills = this.props.data.mngtskills.skills.map(function(mngtskills){
        var className = 'bar-expand '+mngtskills.name.toLowerCase();
        return <li key={mngtskills.name}><span style={{width:mngtskills.level}}className={className}></span><em>{mngtskills.name}</em></li>
      })
      var mngtskillsMessage = this.props.data.mngtskills.skillmessage;    

    }

    return (
      <section id="resume">

         <div className="row section-head">
         <h2><span>Résumé</span></h2>                  
         </div>
      <div className="row education">
      
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row education">

         <div className="three columns header-col">
            <h1><span>Business Related</span></h1>
         </div>

         <div className="nine columns main-col">
          {business}
        </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row work">

<div className="three columns header-col">
   <h1><span>Achievements</span></h1>
</div>

<div className="nine columns main-col">
 {certificates}
</div>
</div>

    <div className="row skill">

<div className="three columns header-col">
   <h1><span>Expertise</span></h1>
</div>

<div className="nine columns main-col">

   <p>{expertise}</p>
   <div >
   </div>
</div>
</div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{techskillsMessage}</p>
				<div >
				</div>
			</div>
      </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Management Skills</span></h1>
         </div>

         <div className="nine columns main-col">
            <p>{mngtskillsMessage}</p>
			</div>
     
      </div>    
      
   </section>
    );
  }
}

export default Resume;
