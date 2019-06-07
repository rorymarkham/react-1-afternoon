import React, {Component} from 'react'

class EvenAndOdd extends Component {

    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignEvensAndOdds(userInput) {
        let arr = userInput
        let evens = []
        let odds = []

        for ( let i = 0; i < arr.length; i++ ) {
           if ( arr[i] % 2 === 0 ) {
              evens.push(arr[i])
            } else {
              odds.push(arr[i])
            }
        }
        
        this.setState({ evenArray: evens, oddArray: odds})
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
               
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
               
                <button className='confirmationButton' onClick={() => {this.assignEvensAndOdds(this.state.userInput) }}> CLICK </button>
                
                <span className='resultsBox'>EVEN: {(this.state.evenArray)}</span>
                <span className='resultsBox'>ODD: {(this.state.oddArray)}</span>
            </div>
            
        )
    }
}

export default EvenAndOdd