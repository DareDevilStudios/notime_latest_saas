import Brands from '@/components/common/Brands'

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import Pricing from '@/components/common/Pricing'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'

import React from 'react'
import Questionnaire from '@/components/uiElements/Questionnare'
export const metadata = {
    title: 'Mambership plans || Educrat - Professional LMS Online Education Course NextJS Template',
    description:
        'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',

}

export default async function page() {
    const data = await getData();
    // console.log("data",data)
    return (
        <div className="main-content  ">
            <Preloader/>

            <Header/>
            <div >

                <Questionnaire questions={data}/>

            </div>
        </div>

)
}

// fetch data from /api/gemini using getData function
async function getData() {
    const res = await fetch(`http://localhost:3000/api/gemini`)
    const data = await res.json()
    console.log("checking",data)
    return data
}

