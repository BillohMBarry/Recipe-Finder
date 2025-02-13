import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
const RecipeDetails = () => {
    const params = useParams()
    console.log(params)
    useEffect(() => {
        const details = async () => {
            try {
                const respond = await fetch(`api/items/${params.id}`)
                const respondData = await respond.json()
                console.log(respondData)
            } catch (error) {
                console.log(error)
            }
        }
        details()
    },[params.id])
    return (
        <>
          <h1>Recipes Detail page</h1>
        </>
    );
}

export default RecipeDetails;
