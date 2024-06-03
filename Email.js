
import React, { useState } from 'react';
import { FaEnvelope  ,  FaRocket} from 'react-icons/fa';
import { useRef ,useEffect } from 'react';

const Email = () => {
    const [email, setEmail] = useState(''); // Added state to manage the email input
    const fileInputRef = useRef(null); 


    const btn = {
        width: "200px",
        height: "30px",
        backgroundColor: "blue",
        color: "white"
    };

    const showAlert = (value) => { 
        if (value !== "") { // Changed != to !== for strict equality check
            window.alert("Email is submitted");
        } else {
            window.alert("Email is not submitted");
        }
    };
    
    const handleFileUploadClick = () => {
        fileInputRef.current.click(); // Trigger click event on the hidden file input
    };

    return (
        <>
        <div style={{ border: "0px solid black", margin: "10px", backgroundColor:"white" }}> {/* Added solid to the border style */}
            <h3>  <FaEnvelope /> Email me for jobs</h3>
            <p>It seems like you need more information on a specific</p>
          
            <input
                style={{ width: "250px", height: "25px" }}
                placeholder='name@email.com'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            /><br /><br />
         
            <button style={btn} onClick={() => showAlert(email)}>Subscribe</button> 
        </div>
        
        <div style={{ backgroundColor:"white"}}>
               <h3> < FaRocket/>Get noticed faster </h3>
               <p>It seems like you need more information on a specific</p>
            
            <input
                    type='file'
                    name='file1'
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                />
                <button style={btn} onClick={handleFileUploadClick}>Upload your resume</button> {/* Add click handler to button */}

        </div>

        </>



    );
};

export default Email;
