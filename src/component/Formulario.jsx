import { useState } from 'react';
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
const Formulario = () =>{
  const [userMail, setUserMail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [showCard, setShowCard] = useState(true)
  const [msjError, setMsjError] = useState(false)


  const onChangeUserMail=(e)=>setUserMail(e.target.value);
  const onChangeUserPassword=(e)=>setUserPassword(e.target.value);

  const validateUserMail = (userMail) => {
    //Se valida que sea mayor que 3 y que no contenga espacios en blanco al principio
    if (userMail.length >= 3 && userMail.trimStart()===userMail ) {
      return true;
    } else {
      return false;
    }
    };
    const validatePassword = (userPassword) => {
    //Se valida que sea mayor que 5
      const withoutSpaces = userPassword.trim();
      if (withoutSpaces.length > 5) {
        return true;
        } else {
        return false;
        }
    };

  

  function signUpUser(e) {
    e.preventDefault();
    const isEmailValid = validateUserMail(userMail);
    const isPasswordValid = validatePassword(userPassword);
  
    if (isPasswordValid && isEmailValid) {
        setShowCard(false);
      return
      } else {
        setMsjError(true);    
      }
    };

    function back(e) {
        e.preventDefault;
        setShowCard(true);
        setMsjError(false)
        
    }

  return (
    <>{(showCard?

    < form className="border border-4 rounded containerForm " onSubmit={signUpUser}>
      <div className="form-group" >
        <h3 className='msjError'>Login</h3>
        <label className='label-principal' htmlFor="exampleInputEmail1">Email address</label>
        <input onChange={onChangeUserMail} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userMail}/>
        </div>
      <div className="form-group">
        <label className='label-principal' htmlFor="exampleInputPassword1">Password</label>
        <input onChange={onChangeUserPassword} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" value={userPassword}/>
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
      {msjError? <h4 className='msjError'>“Por favor chequea que la información sea correcta”.</h4>:""}
    </form>
    :<Card mail={userMail} password={userPassword}>
        <button type="submit" className="btn btn-primary" onClick={back} >Back</button>
    </Card>
    )}
      
    </>
    
  )
}
export default Formulario;
