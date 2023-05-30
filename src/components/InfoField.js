import React from 'react';

export default class InfoField extends React.Component {
    render() {
        const { title, content} = this.props

        return (
            <div>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        );
    }
}
