import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-18-plus about-icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Dev Junior
            </span>
        </div>

        <div className="about__box">
        <i class="uil uil-medal about-icon "></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>

        <div className="about__box">
        <i class="uil uil-headphones-alt about-icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle"> Online 24/7</span>
        </div>
    </div>
  )
}

export default Info