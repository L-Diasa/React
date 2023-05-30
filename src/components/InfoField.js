import React from 'react';

export default class InfoField extends React.Component {
    render() {
        const { title, content} = this.props

        return (
            <div>
                <p className='info-title'>{title}</p>
                <p className='info-content'>{content}</p>
            </div>
        );
    }
}
