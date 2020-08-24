import React from 'react';
import Input from '../../../../components/shared/input/input.components';

// import { withFirebase } from '../../../components/Firebase';
import { withFirebase } from '../../../../contexts/Firebase';
import './logout.styles.scss';

const Logout = ({ firebase }) => (
  <div className="signout">
    <Input type="button" onClick={firebase.doSignOut} value="Sign Out" />
  </div>
);

export default withFirebase(Logout);
