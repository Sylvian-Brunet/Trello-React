import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="bg-white rounded shadow p-2 mb-2">
                <div className="">{this.props.card.name}</div>
            </div>
        );
    }
}

export default Card;