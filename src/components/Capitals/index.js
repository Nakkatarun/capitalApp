import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onCountryChange = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountryName = () => {
    const {capitalId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    return filteredCountry.country
  }

  render() {
    const {capitalId} = this.state

    const countryName = this.getCountryName(capitalId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <ul className="list-container">
            <select
              className="options-list"
              value={capitalId}
              onChange={this.onCountryChange}
            >
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option value={capitalId} key={eachCountryAndCapital.id}>
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label-el">is capital of which country?</p>
          </ul>
          <p className="country">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
