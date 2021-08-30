import React from 'react';
import { FpmFreze, MinosAgri, Fuzinar } from './FrezeList';
import FrezeProducts from './FrezeProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const TraktorskeFreze = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>FPM Traktorske Freze</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompanija FPM Agromehanika je najveći proizvođač poljoprivrednih mašina u Jugoistočnoj Evropi, sa
                        tradicijom od skoro 60 godina.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {FpmFreze.map(el => (
                        <FrezeProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <h2>Minos-Agri</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {MinosAgri.map(el => (
                        <FrezeProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <h2>Fužinar Slovenija</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Fuzinar.map(el => (
                        <FrezeProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default TraktorskeFreze;