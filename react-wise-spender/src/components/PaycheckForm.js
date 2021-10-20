
import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { RiCloseCircleLine } from 'react-icons/ri'; 

function PaycheckForm() {
    const THIRTY_PERCENT = 0.30;
    const TEN_PERCENT = 0.10, TWENTY_PERCENT = 0.20, Five_PERCENT = 0.05;

    const [name, setName] = useState('');
    const [userAmount, setUserAmount] = useState('');

    const [userName, setUserName] = useState('');
    const [rent_Amount, setRent_Amount] = useState('');
    const [reinvestment_Amount, setReinvestment_Amount] = useState('');
    const [charity_Amount, setCharity_Amount] = useState('');
    const [otherBills, setOtherBills] = useState('');
    const [vacation_Amount, setVacation_Amount] = useState('');
    const [saving_Amount, setSaving_Amount] = useState('');
    const [car_Amount, setCar_Amount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(userName !== '' && userAmount >= 0){
            //Reset input
            setUserAmount('');
            setName('');
            document.getElementById("result-div").style.display="block";
        }
        else{
            alert("***** Please Try again ***");
        }
        
    };

    const handleName = (name) => {
        if(name.target.value !== ""){
            setName(name.target.value);
            setUserName(name.target.value);
        }
    };


    const handleAmount = (amount) => {
        let decimal=  /^[-+]?[0-9]+\.[0-9]+$/; 
        
        if(amount.target.value >= 0){
            setUserAmount(amount.target.value);
            setRent_Amount((amount.target.value * THIRTY_PERCENT).toFixed(2));
            setReinvestment_Amount((amount.target.value * TWENTY_PERCENT).toFixed(2));
            setCharity_Amount((amount.target.value * TEN_PERCENT).toFixed(2));
            setOtherBills((amount.target.value * TEN_PERCENT).toFixed(2));
            setVacation_Amount((amount.target.value * TWENTY_PERCENT).toFixed(2));
            setSaving_Amount((amount.target.value * Five_PERCENT).toFixed(2));
            setCar_Amount((amount.target.value *Five_PERCENT).toFixed(2));
        }
        else{
            alert("***** Please Enter a number *****");
        }
    };

    const closeResult = () =>{ 
        document.getElementById("result-div").style.display="none";
    }
    
    return (
        <div className="pay-form">
            <form className="input-Form form-group" onSubmit={handleSubmit}>

                <label className="labels">
                    First Name:
                </label>
                <input className="input-row form-control" value={name} name="firstName" type="text" onChange={handleName} placeholder='Enter first name'/>
                
                <label className="labels">
                    Monthly Paycheck Total:
                </label>
                <input className="input-row form-control" value={userAmount} name="userAmount" type="text" onChange={handleAmount} placeholder="Enter monthly amount"/>
               
                

                <button className='sub-button '>
                    Submit
                </button>
            </form>

            <div id="result-div">

                <div className='icons'>
                    <RiCloseCircleLine
                        onClick={closeResult}
                        className='close-icon'
                    />
                </div>

                <div class="card-header">
                    {userName} Paycheck Distribution
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span className="result">Car Amount       : </span>${car_Amount}</li>
                    <li class="list-group-item"><span className="result">Other Bills      : </span>${otherBills}</li>
                    <li class="list-group-item"><span className="result">Rent Amount : </span>${rent_Amount}</li>
                    <li class="list-group-item"><span className="result">Saving Amount    : </span>${saving_Amount}</li>
                    <li class="list-group-item"><span className="result">Charity Amount   : </span>${charity_Amount}</li>
                    <li class="list-group-item"><span className="result">Vacation Amount  : </span>${vacation_Amount}</li>
                    <li class="list-group-item"><span className="result">Investment Amount: </span>${reinvestment_Amount}</li>
                </ul>
            </div>
 
        </div>
    ) 
}

export default PaycheckForm 
