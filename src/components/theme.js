import React from 'react';
import Card from './card.js';

class Theme extends React.Component {
    render() {
        return (
            <div id={this.props.theme.name} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="bg-light shadow rounded p-2">
                    <div className="d-flex justify-content-between">
                        <input type="text" className="input-theme w-75" defaultValue={this.props.theme.name}></input>
                        <button type="button" className="button"><i className="bi bi-three-dots"></i></button>
                    </div>
                    <div className="mt-2">
                        {this.props.theme.cards.map(card => (
                            <Card key={card.id} card={card} />
                        ))}
                    </div>
                    <div className="mt-2">
                        <button type="button" className="button" onClick={this.props.onClickAddCard}><i className="bi bi-plus-lg me-2"></i>Ajouter une carte</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Theme;