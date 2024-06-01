import React from 'react'
import { AboutFeatures, assets, videosWeld } from '../../assets/assets'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-hero">
                <div className="line"></div>
                <div className="image">
                    <p className="text-shorter">{AboutFeatures[0].title}</p>
                </div>
            </div>
            <section className="wrapper">
                <div className="wrapper-items">
                    <p className='wrapper-body '>"{AboutFeatures[0].content}"
                        <h6><span>welcome all!</span></h6>
                        <div className="yellow-line"></div>
                    </p>
                    <div className="image-wrapper wrapper-body">
                        <img src={assets.Jush} alt="CEO" />
                        <h5><span>C.E.O BlessedFabricators</span></h5>
                    </div>
                </div>
            </section>
            <section className="history">
                <div className="history-container">
                    <div className="history-body text-shorter">
                        <h1>our History</h1>
                        <p className='text-shorter'>Blessed Fabricators, situated in the heart of Lucky Summer, has a captivating history shaped by its visionary leadership and unwavering dedication. Founded with a profound appreciation for the artistry of metalwork, the company embarked on its journey with a mission to redefine welding beyond its technical aspects, elevating it to an esteemed form of craftsmanship.

                            Guided by a commitment to quality and innovation, Blessed Fabricators, under its CEO's astute direction, has evolved into a renowned entity within the industry. With a keen eye for detail and an emphasis on excellence, the company has earned the trust and loyalty of a diverse clientele.

                            Embedded within the community, Blessed Fabricators not only strives for business success but also endeavors to make a meaningful impact. By providing employment opportunities and fostering economic growth locally, the company embodies a spirit of responsibility and stewardship.

                            Through its relentless pursuit of excellence and dedication to its craft, Blessed Fabricators continues to shape the landscape of metalwork fabrication in Lucky Summer and beyond, leaving an indelible mark on the industry.</p>
                    </div>
                    <div className="history-body">
                        <video className='history-video' src={videosWeld.Videoweld2} autoPlay loop controls>
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
