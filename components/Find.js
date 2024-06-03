
import React, { useEffect, useState } from 'react';

import { FaMapMarkerAlt, FaBriefcase, FaCalendar, FaSearchDollar, FaSearch, FaBars } from 'react-icons/fa';
import SalaryFilter from './SalaryFilter';

import './Find.css';
import Email from '../Email';

function Find() {

  const [cart, setCart] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    getAllTodoList();
  }, []);

  async function getAllTodoList() {

    const response = await fetch("https://remotive.com/api/remote-jobs", {
      method: 'GET'
    });

    const data = await response.json();
    const slicedData = data.jobs.slice(0, 5);
    setSlicedData(slicedData);
  };


  const addToCart = () => {
    const filteredJobs = slicedData.filter(job =>
      job.title.toLowerCase().includes(position.toLowerCase()) &&
      job.candidate_required_location.toLowerCase().includes(location.toLowerCase()) &&
      (salary ? job.salary_range && job.salary_range.includes(salary) : true)

    );
    setCart(filteredJobs);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };



  const handleFilterChange = (e) => {
    const filter = e.target.value;
    let sortedJobs = [...cart];

    if (filter === "A - Z") {
      sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter === "Z - A") {
      sortedJobs.sort((a, b) => b.title.localeCompare(a.title));
    }

    setCart(sortedJobs);
  };


  const inputStylePosition = {
    width: "250px",
    height: "30px",
    padding: "5px 10px 5px 40px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    backgroundSize: "20px 20px",
  };





  return (
    <div className="find-container" >

      <div>
        <h1>Find your <span style={{ color: "blue" }}>new job</span> today</h1>
        <p>Thousands of jobs in the computer engineering and technology sectors are waiting for you.</p>
      </div>
      <div style={{ display: "flex", marginLeft: "0px", width: "100%" }}>


        <div className="input-wrapper">
          <FaSearch className="input-icon" />
          <input
            className="textInput"
            type="text"
            placeholder="What position are you looking for?"
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <FaMapMarkerAlt className="input-icon" />
          <input
            className="textInput"
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>

        <button
          className="search-button"
          onClick={async () => {
            await getAllTodoList();
            addToCart();
          }}
        >
          Search job
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#ebedf0" }}>


        <div style={{
          marginRight: "10px",
          backgroundColor: "#fafcfc",
          width: "150px",
          marginTop: "70px",
          marginLeft: "15px"
        }}>

          <h3 className="para1">Filters</h3>
          <p className="para1">Location</p>
          <div>
            <input
              type="radio"
              id="radio1"
              name="location"
              value=""
              onChange={handleLocationChange}
            />
            <label htmlFor="radio1">Worldwide</label><br />

            <input
              type="radio"
              id="radio2"
              name="location"
              value="canada"
              onChange={handleLocationChange}
            />
            <label htmlFor="radio2">Canada</label><br />


            <input
              type="radio"
              id="radio3"
              name="location"
              value="usa"
              onChange={handleLocationChange}
            />
            <label htmlFor="radio3">USA</label><br />

            <input
              type="radio"
              id="radio4"
              name="location"
              value="uk"
              onChange={handleLocationChange}
            />
            <label htmlFor="radio4">UK</label><br />

            <input
              type="radio"
              id="radio5"
              name="location"
              value="brazil"
              onChange={handleLocationChange}
            />
            <label htmlFor="radio5">Brazil</label><br />

            <input
              type="radio"
              id="radio6"
              name="location"
              value="apac"
              onChange={handleLocationChange}
            />
            <label htmlFor="radio6">APAC</label><br />
          </div>

          <SalaryFilter onSalaryChange={handleSalaryChange} />

          <p className="para1">Date of posting</p>
          <div>
            <input type="radio" id="radio12" name="time" value="radio12" />
            <label htmlFor="radio12">All time</label><br />
            <input type="radio" id="radio13" name="time" value="radio13" />
            <label htmlFor="radio13">Last 24 hours</label><br />
            <input type="radio" id="radio14" name="time" value="radio14" />
            <label htmlFor="radio14">Last 2 days</label><br />
            <input type="radio" id="radio15" name="time" value="radio15" />
            <label htmlFor="radio15">Last 7 days</label><br />
          </div>

          <p className="para1">Work experience</p>
          <div>
            <input type="radio" id="radio16" name="work" value="radio16" />
            <label htmlFor="radio16">Any experience</label><br />
            <input type="radio" id="radio17" name="work" value="radio17" />
            <label htmlFor="radio17">Internship</label><br />
            <input type="radio" id="radio18" name="work" value="radio18" />
            <label htmlFor="radio18">Work remotely</label><br />
          </div>
        </div>



        <div className="job-listing-section">


          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>{cart.length} Jobs</h3>



            <div style={{ marginLeft: "250px", position: "relative", display: "inline-block" }}>
              <select style={{
                width: "180px",
                height: "25px",
                padding: "5px 10px 5px 30px",
                background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"%23000\" d=\"M16 132h416c8.837 0 16-7.163 16-16v-8c0-8.837-7.163-16-16-16H16C7.163 92 0 99.163 0 108v8c0 8.837 7.163 16 16 16zm416 144H16c-8.837 0-16 7.163-16 16v8c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-8c0-8.837-7.163-16-16-16zm0 160H16c-8.837 0-16 7.163-16 16v8c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-8c0-8.837-7.163-16-16-16z\"/></svg>') no-repeat 10px center",
                appearance: "none",
                backgroundColor: "white",
              }} name="filter" onChange={handleFilterChange}>
                <option value="volvo">Filter by</option>
                <option value="Newest">Newest</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
              </select>
            </div>




          </div>
          {cart.map((item, index) => (
            <div key={index} style={{ display: "flex", border: '1px solid #ccc', width: "100%", marginTop: "10px", backgroundColor: "white", margin: '10px', padding: '10px', borderRadius: '0px' }}>
              <div>

                <img src={item.company_logo} style={{ width: '50px', height: '50px' }} />
                {/* <img src={item.company_logo} style={{ width: '50px', height: '50px' }} /> */}


              </div>
              <div>
                <h5>{item.company_name}</h5>
                <h3>{item.title}</h3>
                <div style={{ display: "flex", gap: "20px" , }}>
                  <p>
                    <FaMapMarkerAlt /> {item.candidate_required_location}
                  </p>
                  <p>
                    <FaBriefcase /> {item.job_type}
                  </p>
                  <p>
                    <FaSearchDollar /> {item.category}
                  </p>
                  <p>
                    <FaCalendar /> {item.publication_date}
                  </p>
                </div>
                <p> Adding a job description to each job listing will provide users with more detailed information about each position. </p>
                <p> Below is how you can modify your code to include and display</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "70px", width: "300px", marginRight: "0px", }}>
          <Email />
        </div>
      </div>
    </div>

  );
}

export default Find;
