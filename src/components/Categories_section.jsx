import React from 'react'
import '../css/categories.css'
import Categories_card from './categories_card'
import antarctica from '../assets/antarctica.jpg'
import na from '../assets/na.webp'
import sa from '../assets/sa.png'
import europe from '../assets/europe.jpg'
import asia from '../assets/asia.jpg'
import africa from '../assets/africa.jpg'
import oceania from '../assets/oceania.jpg'

function Categories_section() {
  return (
    <div className='categories_section'>
        <div className="categories_title">
            CATEGORIES
        </div>
        <div className="categories_content">
            <div className="categories_drop_down">
                BY CONTINENT
            </div>
            <div className="categories_grid grid grid-cols-4 grid-rows-3 gap-4">
                <Categories_card className="categories_card_section col-span-3 " categories_card_name="ASIA" categories_card_image={asia} categories_card_nameclass="categories_card_name categories_card_name_asia"/>
                <Categories_card className="categories_card_section" categories_card_name="AFRICA" categories_card_image={africa}  categories_card_nameclass="categories_card_name"/>
                <Categories_card className="categories_card_section" categories_card_name="EUROPE" categories_card_image={europe}  categories_card_nameclass="categories_card_name"/>
                <Categories_card className="categories_card_section" categories_card_name="ANTARCTICA" categories_card_image={antarctica}  categories_card_nameclass="categories_card_name categories_card_name_antarctica"/>
                <Categories_card className="categories_card_section col-span-2" categories_card_name="OCEANIA" categories_card_image={oceania}  categories_card_nameclass="categories_card_name categories_card_name_oceania"/>
                <Categories_card className="categories_card_section col-span-2" categories_card_name="NORTH AMERICA" categories_card_image={na}  categories_card_nameclass="categories_card_name"/>
                <Categories_card className="categories_card_section col-span-2" categories_card_name="SOUTH AMERICA" categories_card_image={sa}  categories_card_nameclass="categories_card_name"/>
            </div>
        </div>
    </div>
  )
}

export default Categories_section
