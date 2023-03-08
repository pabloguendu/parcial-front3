const Card = ({mail, password,children})=>{
    return(
        <div className="border border-4">
            <h2>Su login fue correcto con estos datos:</h2>
            <h4>Mail:        {mail}</h4>
            <h4>Password:        {password}</h4>
            {children}
        </div>
    )
}

export default Card;