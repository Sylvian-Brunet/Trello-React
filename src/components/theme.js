import React from 'react';

class Theme extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="bg-white shadow rounded">
                    <div className="p-3">
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default Theme;