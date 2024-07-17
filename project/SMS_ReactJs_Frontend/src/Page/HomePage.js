import "./HomePage.css";
import main from "./main.jpg"
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
//These is home file

function HomePage() {
    
    const navigate = useNavigate();

    const handleButtonSystemClick = () => {
        navigate('/SystemLogin');
        };
    
    const handleButtonAdminClick = () => {
    navigate('/AdminLogin');
    };

    const handleButtonEmpClick = () => {
        navigate('/EmployeeLogin');
    };

    const [isHovered, setIsHovered] = useState(false);
      
        const stopMarquee = () => {
          setIsHovered(true);
        };
      
        const startMarquee = () => {
          setIsHovered(false);
        };

    return(

        <div>
            <div className="topnav">
                <a href="/">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About</a>
            </div>
            <div
      onMouseOver={stopMarquee}
      onMouseOut={startMarquee}
      style={{ backgroundColor: isHovered ? '#bcbcbc' : '#ccc' }}
    >
      <marquee direction="left" scrollamount="5">
        WELCOME TO SMS BASED REMOTE SERVER MONITORING SYSTEM
      </marquee>
    </div>

            <div className="container p-5">
            <div className="row">
                <div className="col-8">
                    <img
                        src={main}
                        className="img-fluid rounded-top"
                        alt=""
                        id="mainimg"
                    />
                </div>
                <div className="col-4" id="main">
                
                <div className="box">
                    <div>
                        <button
                            type="button"
                            className="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonSystemClick}
                        >
                            System
                        </button>
                    </div>
                    
                    <div>
                        <button
                            type="button"
                            className="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonAdminClick}
                        >
                            Admin
                        </button>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonEmpClick}
                        >
                            Employee
                        </button>
                    </div>
                </div>
                    
                </div>
            </div>

            </div>
            
        </div>
        
    );
}

export default HomePage;
