import { FaHome, FaMoneyBill } from "react-icons/fa";
import { FaCirclePlus, FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-around px-2 py-3 border-t-4 bg-inactive-button-bg border-primary-celeste">
      <Link to="/home">
        <FaHome size={35} className="hover:scale-110 text-primary-celeste" />
      </Link>
      <Link to="/group">
        <FaPeopleGroup
          size={35}
          className="hover:scale-110 text-primary-celeste"
        />
      </Link>
      <Link to="/trip-group">
        <FaCirclePlus
          size={35}
          className="hover:scale-110 text-primary-celeste"
        />
      </Link>
      <Link to="/payment">
        <FaMoneyBill
          size={35}
          className="hover:scale-110 text-primary-celeste"
        />
      </Link>
    </div>
  );
};

export default AppFooter;
