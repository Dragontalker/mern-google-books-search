const Card = () => {
    return (
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0">
                <img src="//placehold.it/200" alt=""/>
            </div>
            <div class="card-block px-2">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Description</p>
                <a href="#" class="btn btn-primary">BUTTON</a>
            </div>
            <div class="w-100"></div>
            <div class="card-footer w-100 text-muted">
                Footer stating cats are CUTE little animals
            </div>
        </div>
    )
}

export default Card;