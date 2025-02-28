import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const detailsStyle = {
    padding: "20px"
}
const RecipeDetails = () => {
    const [Voting, setVoting] = useState(0)
    const [Details, setDeatils] = useState(null)
    const {id} = useParams()
//    useEffect(() => {
//        const getDetails = async () => {
//         try {
//             const respond = await fetch(`/api/data/${id}`)
//             const data = await respond.json()
//             setDeatils(data)
//             console.log(data)
//         } catch (error) {
//           console.log(error)  
//         }
//        }
//        getDetails()
//    },[])

    return (
        
        <>
          <h1 className='headings'>Recipes Detail page</h1>
          <div className="details-container" style={detailsStyle}>
            <img src={Details && Details.imageUrl} alt="" />
            <div className="details">
                <h2>{Details && Details.name}</h2>
                    <h6>Description</h6>
                <p>{Details && Details.description}</p>
                    <h6>Ingredients</h6>
                {Details && Details.Ingredients.map(ingredient => (
                    <ul key={nanoid()}>
                        <li>{ingredient}</li>
                    </ul>
                ))
                }
            
            </div>
            <div className="voting-poll">
                <h4>Voting on Ingredient Authenticity</h4>
                <p>{Voting}</p>
                {Voting.length < 70 ?  <p>{Voting}</p> : Voting.length > 70 }
                <button onClick={() => setVoting(count => count + 1)}>Thump Up</button>
                <button onClick={() => setVoting(count => count - 1)}>Thump Down</button>

            </div>
          </div>
        </>
    );
}

export default RecipeDetails;
