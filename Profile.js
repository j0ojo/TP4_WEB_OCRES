import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './personnes.js';


const Page_Profile = ({donnees})  => { // donnees == items
    return (
        
        <div className = "profile">
                
                
                const {id,nom,prenom,img,date_n,dernier_tweet } = element ;
               
                return(
                    <div key={id}>
                    <img src={img} alt={nom} className="photo"></img>
                    <p>
                        <span className = "nom">{nom}</span>
                        <span className = "prenom">{prenom}</span>
                    </p>
                    <h2>{date_n}</h2>
                    <div className="post-container">
                    <p>{dernier_tweet}</p>
                    </div>
                    </div>
                );
            )
            
        </div>
        
);
}
/*class Page extends React.Component {


    const tab = {nom, prenom, date_n, dernier_tweet, img }


    render() {
        return(
<div className="profile">
   
 <img src="jacques.jpg" alt=""/>      
 
 </div>
 );

}
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
    );
*/