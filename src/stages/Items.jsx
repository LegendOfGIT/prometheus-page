import React from 'react';
import Axios from 'axios';

export default class Items extends React.Component {
    componentDidMount() {
        Axios.get('http://localhost:3002/information-items')
            .then(response => {
                if(200 === response.status) {
                    this.setState({ informationItems: response.data.items });
                    console.log('oh henlo!');
                }
            })
            .catch(() => {
                //  nothing to do here
            })
    }

    render() {
        if (!this.state || !this.state.informationItems) {
            return null;
        }

        return (
            <div className={'informationItemsContainer'}>
                {
                    this.state.informationItems.map(informationItem => {
                        const { _id, link } = informationItem;
                        const titleImage = informationItem['title-image'] || '';

                        if (!titleImage) {
                            return null;
                        }

                        return (
                            <div className={'informationItem'}>
                                <a href={link} target={_id}>
                                    <img className={'informationItem__image'} src={titleImage} loading={'lazy'} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
};
