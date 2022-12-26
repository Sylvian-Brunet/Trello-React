import React from 'react';
import Theme from './theme.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [
                {   
                    id: 1,
                    name: "test",
                    objectives: []
                }
            ]
        };
    }

    addTheme = (event, themeName = "TODO") => {
        this.setState(
            {
                themes: this.state.themes.concat([
                    {
                        id: this.state.themes[this.state.themes.length - 1].id + 1,
                        name: themeName,
                        objectives: []
                    }
                ])
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
                        <div className="row" id="themes_list">
                            {this.state.themes.map(theme => {
                                <Theme id={"theme_" + theme.id} name={theme.name} />
                            })}

                            {/* Themes component should be render there ...*/}

                            <div className="col-lg-4">
                                <button type="button" className="btn btn-primary w-100" onClick={this.addTheme}>Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;