import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae provident alias expedita inventore? Quas hic incidunt rerum perspiciatis, aliquid veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda!</p>
           <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ducimus. Totam earum impedit, vel ipsa distinctio aperiam. Dolore, eum minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sapiente accusamus nesciunt beatae numquam quo alias amet doloremque consectetur adipisci..</p>
            <b className='text-gray-800 '> OUR MISSION</b>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sit sint soluta, alias saepe tempore officiis harum dolores enim aliquam delectus, omnis dolore blanditiis, facere iusto ipsa assumenda itaque eius.</p>
          </div>

        </div>

        <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/> 
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-r-0'> 
            <b>Quality Assurance :</b>
            <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, amet illum vel tempora ipsum fuga consectetur mollitia obcaecati impedit. Doloremque.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-r-0'> 
            <b>Convinence :</b>
            <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, amet illum vel tempora ipsum fuga consectetur mollitia obcaecati impedit. Doloremque.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '> 
            <b>Exceptional Customer Service :</b>
            <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, amet illum vel tempora ipsum fuga consectetur mollitia obcaecati impedit. Doloremque.</p>
          </div>

        </div>
        <NewsletterBox/>

      </div>
    </div>
  )
}

export default About