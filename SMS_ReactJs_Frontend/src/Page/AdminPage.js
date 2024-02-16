import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
function AdminPage(){

    const navigate = useNavigate();
    
    const handleButtonOrgClick = () => {
    navigate('/OrganizationDetailsPage');
    };

    const handleButtonEmpClick = () => {
        navigate('/EmployeeDetailsPage');
    };

    const handleButtonServerClick = () => {
        navigate('/ServerDetailsPage');
    };

    return(
        <div>
            <div className="topnav">
                <a href="/">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                
                <button type="button" class="btn btn-light m-2">LogOut</button>
                
            </div>

            <div className="container p-5">
                <div className="box">
                    <div>
                        <button
                            type="button"
                            class="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonOrgClick}
                        >
                            Organization Details
                        </button>
                    </div>
                    
                    <div>
                        <button
                            type="button"
                            class="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonEmpClick}
                        >
                            Employee Details
                        </button>
                    </div>

                    <div>
                        <button
                            type="button"
                            class="btn btn-light m-4"
                            style={{width :300}}
                            onClick={handleButtonServerClick}
                        >
                            Server Details
                        </button>
                    </div>

                    <div>
                        <button
                            type="button"
                            class="btn btn-light m-4"
                            style={{width :300}}
                        >
                            Notification Details
                        </button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default AdminPage;