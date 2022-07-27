import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import styles from './ProjectsBoard.module.scss'
import ProjectCard from 'components/ProjectCard/ProjectCard'

const ProjectsBoard = ({ projects }) => {
  const styleImage = useCallback(
    (project) => ({
      backgroundImage: `url(${project.image}) no-repeat center center`,
      backgroundSize: 'cover',
    }),
    []
  )

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Saiba mais sobre os últimos projetos em que trabalhei:
      </p>
      <div className={styles.content}>
        {projects.map((project) => (
          <ProjectCard project={project} className={styles.item} />
        ))}
      </div>
    </div>
  )
}

ProjectsBoard.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
}

ProjectsBoard.defaultProps = {
  title: '',
}

export default ProjectsBoard
