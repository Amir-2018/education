const ListCards = (props) => {
   const docs = props.docs ; 
   const title = props.title ; 
    return ( 

        <section id="pricing" class="bg-light mt-10">
        <div class="container-lg">
          <div class="text-center">
            <h2>{title}</h2>
            <p class="lead text-muted">Look at your {title}</p>
          </div>
    
          <div class="row my-5 g-0 align-items-center justify-content-center">
          {docs.map((doc)=>(
            <div class="col-8 col-lg-3">
              <div class="card border-0">
                <div class="card-body text-center py-4">
                  <h4 class="card-title">{doc.title}</h4>
                  <p class="lead card-subtitle">{doc.author}</p>
                  <p class="card-text mx-5 text-muted d-none d-lg-block">{ doc.body}</p>
                  <a href="/specialiste" class="btn btn-outline-primary btn-lg mt-3">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          ))}
            </div>
            </div>
      </section>

     );
}
 
export default ListCards;