const Card = (props) => {
    const data = {
        title: props.title,
        auothors: props.authors,
        description: props.description,
        imageLink: props.imageLink,
        selfLink: props.selfLink
    }
    
    const handleClick = (event) => {
        console.log(data);
    }

    return (
        <div className="card mb-4">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={props.imageLink} alt="book cover"/>
                </div>
                <div className="col">
                    <div className="card-block px-2">
                        <h4 className="card-title mt-2">{props.title}</h4>   
                        <p className="card-text">{props.description}</p>
                        <a href={props.selfLink} className="btn btn-lg btn-primary mb-3">View</a>
                        <button onClick={handleClick} className="btn btn-lg btn-warning mb-3 ml-3">Add</button>
                    </div>
                </div>
            </div>
            <div className="card-footer w-100 text-muted">
                Authors: {props.authors}
            </div>
        </div>
    )
}

export default Card;