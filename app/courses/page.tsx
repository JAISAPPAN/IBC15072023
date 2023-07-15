import React from 'react'
import CourseHero from '../components/courseHeroCompo'
import CoursePageWriteUps from '../components/coursePageWriteUps'
import CourseAccordion from '../components/courseAccordionCompo'

export default function CoursesPage() {
  return (
    <div>
      <CourseHero/>
      <CoursePageWriteUps/>
      <CourseAccordion/>
    </div>
  )
}
