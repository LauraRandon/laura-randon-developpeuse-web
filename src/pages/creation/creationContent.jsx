import React from 'react';
import { useParams } from 'react-router-dom';
import creations from '../../assets/data/creation';
import NoMatchContent from '../noMatch/noMatchContent';
import Collapse from '../../components/collaspe/collaspe';
import './creation.css';

const CreationPage = () => {

    const { id } = useParams()
    const creation = creations.find(creation => creation.id === id)
    if (creation === undefined) { 
        return (
        <NoMatchContent />)
    }

    return(
        <section key={creation.id} className='creation-section'>
            <div className='div-creation-subtitle'>
                <h1 className='creation-subtitle'> {creation.name} </h1>
            </div>
            <div className='div-creation-img'>
                <img src={creation.cover} alt={creation.name + ' - ' + creation.title + ' by Laura Randon '} className="creation-img" />
            </div>
            <div className='div-creation-info'>
                <div className='div-creation-info-2'>
                    <h2 className='creation-info-h2'> {creation.title} </h2>
                    <p className='creation-info-guide'> {creation.guide} </p>
                </div>
                <div className='div-creation-info-3'>
                {creation.language.map((languages, i) => (
                    <p key={i} className='creation-info-language'> {languages} </p>
                ))}
                </div>
            </div>
            <article className='article-creation-content'>
                <div className='div-creation-content-description'>
                    <Collapse
                        title='Description'
                        content= {creation.description.map((descriptions, i) => (
                            <p key={i} className='creation-content-description'> {descriptions} </p>
                        ))}
                    />
                </div>
                
                <div className='div-creation-content-evaluation'>
                    <Collapse
                        title='Évaluation'
                        content= {creation.evaluation.map((evaluations, i) => (
                            <p key={i} className='creation-content-evaluation'> {evaluations} </p>
                        ))}
                    />
                </div>
            </article>
            <article className='article-creation-link'>
                <div className='div-creation-link'>
                    <a href={creation.lienSite} target='_blank' rel='noreferrer' className='creation-link-site'>Parcourir le site web</a>
                </div>
                <div className='div-creation-link'>
                    <a href={creation.lienGithub} target='_blank' rel='noreferrer' className='creation-link-github'>Parcourir le code sur Github</a>
                </div>
            </article>
        </section>
    )

    
    
}

export default CreationPage;