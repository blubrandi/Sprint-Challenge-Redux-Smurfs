import React from 'react'

import Smurf from './Smurf'

class SmurfList extends React.Component {
    render() {
        return (
            <ul>
            {this.props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </ul>
        )
    }
}

export default SmurfList