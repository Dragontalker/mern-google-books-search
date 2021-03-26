const Card = (props) => {
    return (
        <div class="card mb-4">
            <div class="row no-gutters">
                <div class="col-auto">
                    <img src={props.imageLink} alt="book cover"/>
                </div>
                <div class="col">
                    <div class="card-block px-2">
                        <h4 className="card-title mt-2">{props.title}</h4>   
                        <p className="card-text">{props.description}</p>
                        <a href={props.selfLink} className="btn btn-lg btn-primary mb-3">View</a>
                        <a href={props.selfLink} className="btn btn-lg btn-warning mb-3 ml-3">Add</a>
                    </div>
                </div>
            </div>
            <div class="card-footer w-100 text-muted">
                Authors: {props.authors}
            </div>
        </div>
    )
}

export default Card;