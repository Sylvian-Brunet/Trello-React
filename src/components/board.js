import React from 'react';
import Theme from './theme.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [],
            nextThemeId: 1
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
            }
        )
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
                                <Theme id={"theme_" + theme.id} name={theme.name} />
                            ))}

                            <div className="col-lg-3 mb-3">
                                <button type="button" className="btn btn-primary w-100 h-100" onClick={this.addTheme}>Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;