import { HashRouter as Router, Link } from "react-router-dom"

function Feeling () {

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>
                Feeling?
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <Router>     
                <Link to="/understanding">
                    <button>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Feeling