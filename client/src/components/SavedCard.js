import axios from 'axios';

const SavedCard = (props) => {

    const handleDelete = () => {
        console.log(props.id);
        axios({
            url: `/api/delete/${props.id}`,
            method: "DELETE"
          })
            .then(() => {
              console.log(`Data with id:${props.id} has been deleted to the server!`);
            })
            .catch(() => {
              console.log("Internal server error...");
            });
        window.location.reload(false);
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
                        <button onClick={handleDelete} className="btn btn-md btn-danger mb-3 ml-2">Delete from Your Library</button>
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