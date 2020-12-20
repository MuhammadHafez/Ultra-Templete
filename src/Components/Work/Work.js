import React, { Component } from 'react';
import { WorkStation, WorkTitle, Span, Part, Icon, PartTitle, Line, PartDesc } from './WorkStyle.js';
import Axios from 'axios';

class Work extends Component {
    state = {
        Works: []
    }

    componentDidMount() {
        Axios.get('./Json/data.json').then(response => {
            this.setState({
                Works: response.data.works
            });
        }
        );
    }


    render() {

        let res = this.state.Works
        let myWorks = res.map((iter, index) => {
            return (
                <Part key={iter.id} first={index}>
                    <Icon className={iter.icon_name}></Icon>
                    <PartTitle>{iter.title}</PartTitle>
                    <Line className="line" />
                    <PartDesc className="part-desc">
                        {iter.body}
                    </PartDesc>
                </Part>
            )
        })


        return (
            <WorkStation>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {myWorks}
                </div>
            </WorkStation>

        )
    }
}

export default Work;