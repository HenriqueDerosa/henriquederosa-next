import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import styles from './ProjectCard.module.scss'
import classNames from 'classnames'

const ProjectCard = ({ project, className }) => {
  return (
    <button
      type="button"
      key={project.id}
      href={project.url}
      className={classNames(styles.item, className)}
    >
      <p className={styles.title}>{project.title}</p>
      {project.company && (
        <p>
          <i>Trabalhando com {project.company}</i>
        </p>
      )}
      <p className={styles.description}>{project.description}</p>
      <div className={styles.image}>
        <Image
          objectFit="cover"
          layout="fill"
          src="/minhaconsagracao.png"
          alt={project.title}
        />
      </div>
    </button>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  className: PropTypes.string,
}

export default ProjectCard
