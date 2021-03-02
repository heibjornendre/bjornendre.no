import styles from './Footer.module.scss'

function Footer({name, description, links}) {
    return (
        <footer className={styles.footer}>
            <ul className={styles.thedude}>
                <li>{name}</li>
                <li>{description}</li>
            </ul>
            {links &&
                <ul className={styles.links}>
                        {links.map((link) => (
                            <li key={link.url}>
                                <a href={link.url} title={link.title}>{link.name}</a>
                            </li>
                        ))}
                </ul>
            }
        </footer>
    )
}

Footer.defaultProps = {
    name: 'name',
    description: 'description',
    links: [
        {
            name: 'some link',
            title: 'some link',
            url: 'http://someurl.com'
        }
    ]
}

export default Footer