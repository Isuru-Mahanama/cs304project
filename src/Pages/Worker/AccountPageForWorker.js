import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
//import './AccountPageHire.css';
import {CardBody} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
import SearchBar from "../../components/components/searchbar";
import '../Hire/AccountPageHire.css'
import { Link } from "react-router-dom";

class AccountPageWorker extends React.Component {
 
  
   state = {  } ;
   
  render(
      
  ) { 
    
    return (
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">

          <div className="mostright">
          

        <Link  to="/setupworker">
          <button className="b1" >Set up your account!!!!!!</button>
          </Link>
       
       
         <Link  to="/setupworker">
          <button className="b1" >Edit your profile!!!</button>
          </Link>
     
          <Link  to="/portfolio">
          <button className="b1" >Portfolio!!!</button>
          </Link>
         
          </div>
     
        </div>
      
        <SearchBar options={this.state.options}></SearchBar>
        <div className="middleright">
        
       
        <div class="col">
          <Card className="cards-pack" >
              <Link to="/viewproject">
              <img className="img-card"
              alt="Sample"
              src="https://picsum.photos/300/200"
       
              />
              </Link>
              <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              I wiill do a large project of house
              </CardTitle>
          
              <CardText className="cardtext">
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              
           
              <CardLink href="/portfolio" className="cardlink">
           
              FreelancerAccount_Link
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              <h3 className="price">5$</h3>
              </CardBody>
          </Card>

         
        <Card className="cards-pack" >
            <Link to="/viewproject">
            <img className="img-card"
            alt="Sample"
            src="https://picsum.photos/300/200"
       
             />
            </Link>
            <CardBody className="cardbody">
            <CardTitle tag="h5" className="cardtitle">
            I wiill do a large project of house
            </CardTitle>
          
            <CardText className="cardtext">
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
              
           
            <CardLink href="/portfolio" className="cardlink">
           
            FreelancerAccount_Link
            <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />

                 
            </CardLink>
            <h3 className="price">5$</h3>
            </CardBody>
          </Card>
            </div>

        <div class="col">
            <Card className="cards-pack" >
            <Link to="/viewproject">
            <img className="img-card"
            alt="Sample"
            src="https://picsum.photos/300/200"
       
              />
             </Link>
            <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              I wiill do a large project of house
              </CardTitle>
          
            <CardText className="cardtext">
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
              
           
            <CardLink href="/portfolio" className="cardlink">
           
                  FreelancerAccount_Link
                  <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />

                 
            </CardLink>
            <h3 className="price">5$</h3>
            </CardBody>
          </Card>

          <Card className="cards-pack" >
            <Link to="/viewproject">
            <img className="img-card"
            alt="Sample"
            src="https://picsum.photos/300/200"
       
              />
             </Link>
            <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              I wiill do a large project of house
              </CardTitle>
          
            <CardText className="cardtext">
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
              
           
            <CardLink href="/portfolio" className="cardlink">
           
                  FreelancerAccount_Link
                  <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />

                 
            </CardLink>
            <h3 className="price">5$</h3>
            </CardBody>
          </Card>
          </div>
          
          <div className="profile-card">
          <img className="profile-photo" alt="Sample" src="https://picsum.photos/300/200" /> 
          <div className="text-profile1">userName</div>

          <div className="text-profile">
          <hr className="line"></hr>
         <div className="font">From ----</div>
         Pilimathalawa
         <hr className="line"></hr>
         <div className="font">Member -</div>
         Since 2020
         <hr className="line"></hr>
         <div className="font">Description about me,, -</div>
         <hr className="line"></hr>
         <div className="font">Languages -</div>
         Sinhala
         English
         <hr className="line"></hr>
         <div className="font">Education -</div>
         <hr className="line"></hr>
         <div className="font">Certification -</div>
         <div>Kandy Girls' High School</div>
          </div>
          </div>
          </div>
          
        </div>
      

    );
  }
}


export default AccountPageWorker ;