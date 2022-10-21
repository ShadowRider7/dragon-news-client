import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is our Terms and Conditions.</h3>
            <span>Go back to <Link to="/resister">Resister</Link></span>
        </div>
    );
};

export default TermsAndConditions;