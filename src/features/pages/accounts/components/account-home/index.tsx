import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavHeader from "../../../../../components/nav-header";
import Account from "../account";
import Styles from "./account-home.module.scss";
import Nav from "./components/account-navs";
import ActionsNavs from "./components/actions-navs";
import CreateAccountPopup from "./components/create-account-popup";

interface Props {}

const AccountsHome: React.FC<Props> = (props) => {
  const [shouldShowAddAccountPopup, setShouldShowAddAccountPopup] =
    useState(false);

  const closeCreateAccountPopup = () => {
    setShouldShowAddAccountPopup(false);
  };

  const openCreateAccountPopup = () => {
    setShouldShowAddAccountPopup(true);
  };
  return (
    <div className='page'>
      <NavHeader title='Account' link='/home' />
      <Nav />
      <Account
        accountName='Account#1'
        accountAddress='[Track:0x123....12er]'
        isActive
      />
      <Account
        accountName='Account#2'
        accountAddress='[Track:0x123....12er]'
        isActive={false}
      />
      <ActionsNavs openCreateAccountPopup={openCreateAccountPopup} />
      {shouldShowAddAccountPopup ? (
        <CreateAccountPopup closePopup={closeCreateAccountPopup} />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default AccountsHome;
