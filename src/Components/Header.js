import backgroundlg from '../Assets/rick-and-morty-lg.png'
import backgroundmd from '../Assets/rick-and-morty-md.png'

const Header = () => {
    return (
        <div className='header-container'>
            <img className='cover-header' src={backgroundlg} alt="rick andmorty" />
            <img className='cover-header-md' src={backgroundmd} alt="rick andmorty" />
        </div>
    );
};

export default Header;