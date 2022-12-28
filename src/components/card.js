import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="mb-2">
                <div className="bg-white rounded shadow p-2 position-relative">
                    <div className="">{this.props.card.name}</div>
                    <button type="button" className="button button-card"><i className="bi bi-three-dots"></i></button>
                </div>
            </div>
        );
    }
}

export default Card;