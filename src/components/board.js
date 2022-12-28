import React from 'react';
import Theme from './theme.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [
                {
                    id: 1,
                    name: "À faire",
                    cards: []
                },
                {
                    id: 2,
                    name: "En cours",
                    cards: []
                },
                {
                    id: 3,
                    name: "Terminée",
                    cards: []
                }
            ],
            nextThemeId: 4,
            nextCardId: 1,
            nextTaskId: 1
        };
    }

    addTheme = () => {
        this.setState({
            themes: this.state.themes.concat([
                {
                    id: this.state.nextThemeId,
                    name: "todo",
                    cards: []
                }
            ]),
            nextThemeId: this.state.nextThemeId + 1
        });
    }

    addCard = (event, idTheme) => {
        let themes = this.state.themes;
        let theme = themes[idTheme - 1];
        
        let card = {
            id: this.state.nextCardId,
            name: "todo",
            tasks: [],
            labels: [],
            deadLine: null
        };

        theme.cards = theme.cards.concat([card]);
        themes[idTheme - 1] = theme;

        this.setState({
            themes: themes,
            nextCardId: this.state.nextCardId + 1
        });
    }
    
    render() {
        return (
            <div className="bg-blight">
                <div className="row g-0 w-100">
                    <div className="col-12">
                        <div className="shadow p-3">
                            <h6 className="m-0">Trello Like</h6>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row m-0 py-2" id="themes_list">
                            {this.state.themes.map(theme => (
                                <Theme key={"theme_" + theme.id} theme={theme} onClickAddCard={event => this.addCard(event, theme.id)} />
                            ))}

                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
                                <button type="button" className="button w-100" onClick={this.addTheme}><i className="bi bi-plus-lg me-2"></i>Ajouter un autre thème</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;