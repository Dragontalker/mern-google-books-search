import axios from 'axios';

const SavedCard = (props) => {
    const data = {
        title: props.title,
        authors: props.authors,
        description: props.description,
        imageLink: props.imageLink,
        selfLink: props.selfLink
    }
    
    const handleClick = (event) => {
        console.log(data);
        axios({
            url: "/api/save",
            method: "POST",
            data: data
          })
            .then(() => {
              console.log("Data has been sent to the server!");
            })
            .catch(() => {
              console.log("Internal server error...");
            });
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
                        <a href={props.selfLink} className="btn btn-md btn-primary mb-3">View eBook</a>
                        <button onClick={handleClick} className="btn btn-md btn-danger mb-3 ml-2">Delete from Your Library</button>
                    </div>
                </div>
            </div>
            <div className="card-footer w-100 text-muted">
                Authors: {props.authors}
            </div>
        </div>
    )
}

export default SavedCard;