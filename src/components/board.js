import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [{
                objectifs: [{
                    tasks: []
                }]
            }]
        };
    }
    render() {
        return (
            <div class="container-fuild">
                <div class="row">
                    <div class="col-12">
                        <div class="shadow p-3">
                            <button type="button" class="button" data-bs-toggle="modal" data-bs-target="#addTheme">Ajouter un thème</button>
                            <div class="modal fade" id="addTheme" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5">Ajouter un thème</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body"></div>
                                        <div class="modal-footer">
                                            <button type="button" class="button" data-bs-dismiss="modal">Annuler</button>
                                            <button type="button" class="button">Ajouter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;