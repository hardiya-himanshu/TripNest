import React from 'react'
import '../css/categories_full_page.css'
import { Link } from 'react-router-dom'
import {close} from '../javascript/index'
import {ahmdbd,beijing,jerusalem2,rio,mexicocity,miami,sydney,antarctica2,london,athens,auckland,berlin,cairo,nairobi} from '../javascript/index'
import Categories_FullPage_Cards from './Categories_FullPage_Cards'

function Categories_Full_Card() {
  return (
    <div className='categories_fullpage_section'>
      <div className="cfp_content">
       <Link to='/'>
            <img className='cfp_close' src={close} alt="" />
       </Link>
        <div className="continents">
            <div className="continent asia">
                <div className="conti_title">
                ASIA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/ahmedabad'>
                    <Categories_FullPage_Cards cat_card_img={ahmdbd} cat_card_text="AHMEDABAD"/>
                    </Link>
                    <Link to='/categories/beijing'>
                    <Categories_FullPage_Cards cat_card_img={beijing} cat_card_text="BEIJING"/>
                    </Link>
                    <Link to='/categories/jerusalem'>
                    <Categories_FullPage_Cards cat_card_img={jerusalem2} cat_card_text="JERUSALEM"/>
                    </Link>
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                AFRICA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/cairo'>
                    <Categories_FullPage_Cards cat_card_img={cairo} cat_card_text="CAIRO"/>
                    </Link>
                    <Link to='/categories/nairobi'>
                    <Categories_FullPage_Cards cat_card_img={nairobi} cat_card_text="NAIROBI"/>
                    </Link>
                    
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                EUROPE
                </div>
                <div className="conti_cards">
                    <Link to='/categories/athens'>
                    <Categories_FullPage_Cards cat_card_img={athens} cat_card_text="ATHENS"/>
                    </Link>
                    <Link to='/categories/berlin'>
                    <Categories_FullPage_Cards cat_card_img={berlin} cat_card_text="BERLIN"/>
                    </Link>
                    <Link to='/categories/london'>
                    <Categories_FullPage_Cards cat_card_img={london} cat_card_text="LONDON"/>
                    </Link>
                    
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                ANTARCTICA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/mcmurdo'>
                    <Categories_FullPage_Cards cat_card_img={antarctica2} cat_card_text="MCMURDO"/>
                    </Link>
                    
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                OCEANIA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/auckland'>
                    <Categories_FullPage_Cards cat_card_img={auckland} cat_card_text="AUCKLAND"/>
                    </Link>
                    <Link to='/categories/sydney'>
                    <Categories_FullPage_Cards cat_card_img={sydney} cat_card_text="SYDNEY"/>
                    </Link>
                    
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                NORTH AMERICA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/mexicocity'>
                    <Categories_FullPage_Cards cat_card_img={mexicocity} cat_card_text="MEXICO CITY"/>
                    </Link>
                    <Link to='/categories/miami'>
                    <Categories_FullPage_Cards cat_card_img={miami} cat_card_text="MIAMI"/>
                    </Link>
                    
                </div>
            </div>
            <div className="continent ">
                <div className="conti_title">
                SOUTH AMERICA
                </div>
                <div className="conti_cards">
                    <Link to='/categories/rio'>
                    <Categories_FullPage_Cards cat_card_img={rio} cat_card_text="RIO"/>
                    </Link>
                    
                </div>
            </div>
        </div>
    
        </div>
    </div>
  )
}

export default Categories_Full_Card
