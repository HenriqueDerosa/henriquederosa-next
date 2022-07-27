import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './LinksList.module.scss'

const LinksList = ({ title, links }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {links.map((link) => (
        <div className={styles.item}>
          <Link key={link.id} href={link.url}>
            <a className={styles.label}>{link.title}</a>
          </Link>
          <p className={styles.date}>September 1st</p>
        </div>
      ))}
    </div>
  )
}

LinksList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

LinksList.defaultProps = {
  title: '',
}

export default LinksList
