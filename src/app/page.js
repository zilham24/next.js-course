// src/app/page.js
import styles from './course.module.css';

export default function PopularCourses() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Popular Courses</h2>
      <p className={styles.description}>
        A selection of the best courses most in demand by participants from all over the world. 
        Develop your skills with leading programs designed for a variety of needs and career levels.
      </p>
      <div className={styles.cardsContainer}>
        <CourseCard
          imageSrc="laptop.png"
          role="Fullstack Developer"
          courseTitle="Basic Html, Basic Css & Java Script"
          classes="24 Classes"
          videos="24 Video"
        />
        <CourseCard
          imageSrc="laptop.png"
          role="Content Creator"
          courseTitle="Basics Of Becoming a Content Creator"
          classes="24 Classes"
          videos="24 Video"
        />
        <CourseCard
          imageSrc="laptop.png"
          role="UI/UX Design"
          courseTitle="Basic Html, Basic Css & Java Script"
          classes="24 Classes"
          videos="24 Video"
        />
      </div>
    </div>
  );
}

function CourseCard({ imageSrc, role, courseTitle, classes, videos }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={role} className={styles.cardImage} />
      <div className={styles.cardHeader}>
        <span className={styles.roleBadge}>{role}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{courseTitle}</h3>
        <div className={styles.details}>
          <span>
            <img src="buku.png" alt="Classes Icon" className={styles.icon} />
            {classes}
          </span>
          |
          <span>
            <img src="video.png" alt="Video Icon" className={styles.icon} />
            {videos}
          </span>
        </div>
        <button className={styles.checkButton}>Check Now</button>
      </div>
    </div>
  );
}




