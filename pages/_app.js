import PropTypes from 'prop-types';
import { GlobalStyles } from 'twin.macro';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <GlobalStyles />
            <Component {...pageProps} />
        </div>
    );
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};

export default MyApp;
