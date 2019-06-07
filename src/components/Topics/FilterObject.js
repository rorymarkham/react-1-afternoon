import React, {Component} from 'react'

class FilterObject extends Component {

    constructor(){
        super()

        this.state = {
            guitars: [
                {
                    brand: 'Gibson',
                    model: 'Les Paul',
                    year: 2012,
                },
                {
                    brand: 'Pure Salem',
                    model: 'Bruiser',
                    year: 2018,
                },
                {
                    brand: 'Fender',
                    model: 'Stratocaster',
                    year: 1978
                }
            ],

            userInput: '',
            filterdGuitars: []
        }
    }
    
    handleChange(val) {
        this.setState({userInput: val})
    }



    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>UNFILTERED</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton'>CLICK</button>
                <span className='resultsBox filterObjectRB'>FILTERED</span>
            </div>
        )
    }
}

export default FilterObject