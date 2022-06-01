import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
// install the es7 by dsznajder to use certain commands
// rfce is the shorthand, start with an underscore 
// to ommit the import statement. It may not always be
// necessary to use an import statement
