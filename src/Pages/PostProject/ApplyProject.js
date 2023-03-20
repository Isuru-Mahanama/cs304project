import React, { useEffect, useState } from "react";
import './Post_project.css'
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { FcBusinesswoman } from "react-icons/fc";
import {  FcBusinessman } from "react-icons/fc"
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const apiLink ="http://localhost:8080/api/v1/user";

const ApplyProject=()=>{
   
    const location = useLocation();
    console.log("HI")
    const passedValue = location.state?.pID;
    const email = location.state?.email;
    console.log(email)
    const [currency,setCurrency]=useState([]);
    const [subcategories,setSubCategory] = useState([]);
    const [selectedCurrency,setSelectedCurrency] = useState('');
    const [selectedSubCategory,setSelectedSubCategory] = useState('');
    const [moreDescription,setDescription] = useState('');
    const [hourlyRate,setHourlyRates] = useState('');
    const [file,setFiles] = useState([]);

     const setMoreDescription=(e)=>{
        setDescription(e.target.value);
        console.log(moreDescription)
     }
     const setHourlyRate=(e)=>{
        setHourlyRates(e.target.value);
     }
    const handleChange =(e)=>{
        console.log(e.target.value);
       setSelectedCurrency(e.target.value);
    }
    const handleChangeCategory =(e)=>{
        setSelectedSubCategory(e.target.value);
     }

      
     const appliedProjects ={
        email:email,
        projectIDD:passedValue,
        moreDescription:moreDescription,
        selectedCurrency:selectedCurrency,
        selectedSubCategory:selectedSubCategory,
        hourlyRate:hourlyRate,
        
    }
  const fileUploadHandler = () => {
    const formData = new FormData();
   // formData.append("file", props.value.files);
    formData.append("file",file);
   // console.log(project)
   console.log(appliedProjects)
    formData.append("appliedProjects", JSON.stringify(appliedProjects));
  //  console.log(props.value.image)
    axios
      .post(apiLink+"/postApplications", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const setFile=(e)=>{
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
     setFiles(files[0]);
   // this.setState({ files: files[0] }, () => { console.log(this.state.files) });
  
    }
  }

    const fetchData =async() =>{
        try{
          const response =await axios.get(apiLink+'/getAllProjectDetails/'+passedValue);
          const setCurrencyType = response.data.currencyTypes;
          const setSubcategories = response.data.subcateogry;
          setSubCategory(setSubcategories);
          console.log(response);
          setCurrency(setCurrencyType);
        
        }catch(error){
          console.log(error);
        }
      } 
   
      useEffect(()=>{
        fetchData();
      },[]);

        return (
            <div className="background">
                <div className="text" >  <div className="img-middle"> < FcBusinessman className="middle"/><FcBusinesswoman className="middle"/> </div>Apply For The Project!!</div>
                <div className="textsubtitle ">Accurate information is essential !!</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> </div>
               
                <div className="size">
                <input type="text"  required onChange={setMoreDescription}></input>
                <span ><VscAccount /> Description </span>
                </div>

                <div  className = "inputBox">
          {  <select  onClick={handleChangeCategory} placeholder='SELECT THE JOB TYPE'>
                <option value={null}>SELECT THE JOB TYPE!!</option>
                    {
                        subcategories.map(option =>(
                            <option key = {option.esubCategoryID} value={option.esubCategoryName}>
                               {option.category} - {option.esubCategoryName}
                            </option>
                        ))
                    }
                </select> }
                

                <label for="currency" className="sr-only">Currency</label>
                
             {    <select  id="currency" name="currency" onClick={handleChange} placeholder='SELECT THE JOB TYPE'>
                    <option value={null}>SELECT THE CURENCY TYPE!!</option>
                    {
                        currency.map(option =>(
                            <option key = {option.currencyType} value={option.currency}>
                                {option.currency}
                            </option>
                        ))
                    }
                    </select> }

                    <input type="number" required onChange={(e)=>setHourlyRate(e)}></input>
                    <span><VscMail/>HOURLY RATE</span>
                </div>
               
                
                <div>
                
                    </div>

                    <div >
                     <label for="file-upload" >
                    <span  className ="text2 inputBox">Upload a resume</span>
                    <input id="file-upload" name="file-upload" type="file" className=" inputBox text2" onChange={(e)=>setFile(e)}/>
                    <p className="text3">PNG, JPG, GIF up to 10MB</p>
                    </label>
           
                </div>
                </div>
                <div className="buttons">
                 <Link to ="/">
                <button className="button" onClick={fileUploadHandler}>Apply</button>
                </Link>
                </div>
                </div>
          
        );
    }

 
export default ApplyProject;