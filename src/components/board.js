import React from 'react';
import Theme from './theme.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [],
            nextThemeId: 1,
            nextCardId: 1,
            nextTaskId: 1
        };
    }

    addTheme = () => {
        this.setState(
            {
                themes: this.state.themes.concat([
                    {
                        id: this.state.nextThemeId,
                        name: "todo",
                        cards: []
                    }
                ]),
                nextThemeId: this.state.nextThemeId + 1
            }, () => {
                console.log(this.state);
            }
        );
    }

    addCard = (event, idTheme) => {
        let themes = this.state.themes;
        let theme = themes[idTheme - 1];
        
        let card = {
            id: this.state.nextCardId,
            name: "todo",
            tasks: [],
            categories: []
        };

        theme.cards = theme.cards.concat([card]);
        themes[idTheme - 1] = theme;

        this.setState({
            themes: themes,
            nextCardId: this.state.nextCardId + 1
        }, () => {
            console.log(this.state);
        });
    }
    
    render() {
        return (
            <div className="container-fuild">
                <div className="row">
                    <div className="col-12">
                        <div className="shadow p-3">

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row p-2" id="themes_list">
                            {this.state.themes.map(theme => (
                                <Theme key={"theme_" + theme.id} theme={theme} onClickAddCard={event => this.addCard(event, theme.id)} />
                            ))}

                            <div className="col-lg-3 mb-3">
                                <button type="button" className="button w-100" onClick={this.addTheme}><i className="bi bi-plus-lg me-2"></i>Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;