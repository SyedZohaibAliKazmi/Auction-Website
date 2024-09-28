import './Loading.css'
import loading from './pree.gif'

function Loading() {

    return(
        <div className="loading-container">
        <img src={loading} alt="Loading..." />
        <h3>Loading...</h3>
    </div>
    )
    
}

export default Loading