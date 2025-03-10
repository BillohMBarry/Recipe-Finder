import { useState } from "react"

/**
 * The Voting component is responsible for rendering a voting poll for users to rate the authenticity of a recipe.
 * The component uses the `useState` hook to manage the state of the number of upvotes and downvotes for the recipe, and the state of whether the recipe is considered authentic or not.
 */
function Voting({setIsAuthentic}) {
    const [votes, setVotes] = useState({upVotes: 0, downVotes: 0})
  

    // The calculateApprovalRate function calculates the approval rate of the recipe based on the number of upvotes and downvotes.
    const calculateApprovalRate = () => {
        const totalVotes = votes.upVotes + votes.downVotes
        if(totalVotes === 0) return 0
        return (votes.upVotes / totalVotes) * 100
    }
    // The handleVotes function is called when a user clicks on the upvote or downvote button. It updates the state of the votes and the state of whether the recipe is considered authentic or not.
    const handleVotes = (voteType) => {
        if(!isVotingDisabled()) {
            const newVotes = {...votes, 
                [voteType]: votes[voteType] + 1
            }
            setVotes(newVotes)
            
            const approvalRate = (newVotes.upVotes / (newVotes.upVotes + newVotes.downVotes)) * 100
            setIsAuthentic(approvalRate >= 70 && newVotes.upVotes >= 70)
        }
    }
    // disabled the voting buttons if the total number of votes is greater than or equal to 100.
    const isVotingDisabled = () => {
        return (votes.upVotes + votes.downVotes) >= 100
    }
  return (
    <>
        <section className="voting-poll">
            <h4>Voting on Recipe Authenticity</h4>
            <div className="voting-stats">
                <p>{`Approval Rate: ${calculateApprovalRate().toFixed(1)}%`}</p>
                <p>{`Total votes: ${votes.upVotes + votes.downVotes}`}</p>
            </div>
            <div className="voting-buttons">
                <button 
                    onClick={() => handleVotes('upVotes')}
                    disabled={isVotingDisabled()}
                    style={{opacity: isVotingDisabled() ? 0.5 : 1, cursor: isVotingDisabled() ? 'not-allowed' : 'pointer'}}
                > 👍 Authentic ({votes.upVotes})</button>
                <button 
                  onClick={() => handleVotes('downVotes')}
                  disabled={isVotingDisabled()}
                  style={{opacity: isVotingDisabled() ? 0.5 : 1, cursor: isVotingDisabled() ? 'not-allowed' : 'pointer'}}
                >👎 Not Authentic ({votes.downVotes})</button>
            </div>
                          
        </section>
    </>
  )
}

export default Voting
