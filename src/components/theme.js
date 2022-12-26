import React from 'react';

class Theme extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="col-lg-3 mb-3">
                <div className="bg-white shadow rounded p-2">
                    <div className="d-flex justify-content-between">
                        <input type="text" className="todo w-75" defaultValue={this.props.name}></input>
                        <button type="button" className="btn w-25"><i className="bi bi-three-dots"></i></button>
                    </div>
                    <div className="">
                        {/* Render cards here */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Theme;