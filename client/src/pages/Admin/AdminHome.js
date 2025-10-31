import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to the Blood Bank App Administration Dashboard. As the
            administrator, you play a crucial role in overseeing the management
            of blood donations, inventory, and distribution. This platform
            allows you to monitor blood inventory, manage donor information,
            track donations, facilitate blood requests, and generate detailed
            reports. Your efforts ensure that we can efficiently meet the needs
            of hospitals and patients, saving lives and making a significant
            impact on our community. Thank you for your dedication and hard work
            in ensuring the smooth operation of our blood bank.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
