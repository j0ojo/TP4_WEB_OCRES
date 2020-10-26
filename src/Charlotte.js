import React from "react";


function Charlotte() {

  const p1 = {
    
    nom:"DANIER",
    prenom:"Charlotte",
    date_n:"12/11/1999",
    img:'charlotte',
    dernier_tweet:"Je m'ennuie",
 }


  return (
    /*<div className="charlotte">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Charlotte</h1>*/
            <p>
    Nom : {p1.nom}
    Prénom : {p1.prenom}
    Date de naissance : {p1.date_n}
    Actu : {p1.dernier_tweet}

            </p>
        /*  </div>
        </div>
      </div>
    </div>*/
  );
}
export default Charlotte;