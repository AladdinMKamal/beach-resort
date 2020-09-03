import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Coctails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea eius, cupiditate tempora deleniti ipsam porro consectetur magnam perspiciatis? Ipsam fuga tempore laudantium consectetur tempora corporis sequi voluptatibus deleniti exercitationem.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea eius, cupiditate tempora deleniti ipsam porro consectetur magnam perspiciatis? Ipsam fuga tempore laudantium consectetur tempora corporis sequi voluptatibus deleniti exercitationem.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea eius, cupiditate tempora deleniti ipsam porro consectetur magnam perspiciatis? Ipsam fuga tempore laudantium consectetur tempora corporis sequi voluptatibus deleniti exercitationem.'
            },
            {
                icon: <FaBeer />,
                title: 'free coctails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea eius, cupiditate tempora deleniti ipsam porro consectetur magnam perspiciatis? Ipsam fuga tempore laudantium consectetur tempora corporis sequi voluptatibus deleniti exercitationem.'
            }
        ]

    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}


export default Services;