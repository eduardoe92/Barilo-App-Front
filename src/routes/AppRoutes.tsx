import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "@/pages/Landing";
import AuthPage from "@/pages/AuthPage";
import Home from "@/pages/Home";
import PlanTrip from "@/pages/PlanTrip";
import Error from "@/pages/Error";
import Access from "@/pages/Access";
import CreateTrip from "@/pages/CreateTrip";
import Group from "@/pages/Group";
import Crowdfunding, { CrowdfundingDonor } from "@/pages/Crowdfunding";
import CrowdfundingForm from "@/pages/CrowdfundingForm";
import MercadoPago from "@/pages/MercadoPago";
import Header from "@/components/Header";
import Payment from "@/pages/Payment";
import PaymentMethod from "@/pages/PaymentMethod";
import PaymentMethodCard from "@/pages/PaymentMethodCard";
import Destinations from "@/pages/Destinations";
import AppFooter from "@/components/AppFooter";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "@/components/profile/EditProfile";
import ProfileSettings from "@/components/profile/ProfileSettings";
import HelpCenter from "@/pages/helpCenter";
import Language from "@/components/profile/Language";
import { useAuth } from "@/context/AuthProvider";
import Activities from "@/pages/Activities";
import Restaurants from "@/pages/Restaurants";
import ActivityDetailPage from "@/pages/ActivitiesDetailPage";
import TripComponent from "@/components/TripComponent";
import SideProfile from "@/components/profile/SideProfile";
import PaymentEnd from "@/pages/PaymentEnd";

function AppRoutes() {
  const location = useLocation();
  const { token } = useAuth();

  const showHeaderFooterRoutes = [
    /^\/home$/,
    /^\/editProfile$/,
    /^\/profileSettings$/,
    /^\/help-center$/,
    /^\/language$/,
    /^\/group$/,
    /^\/access-group$/,
    /^\/crowdfunding$/,
    /^\/crowdfundingForm$/,
    /^\/mercadopago$/,
    /^\/payment$/,
    /^\/payment-end$/,
    /^\/create-trip$/,
    /^\/destinations$/,
    /^\/activities$/,
    /^\/restaurants$/,
    /^\/activity\/\d+$/,
    /^\/trip-group+$/,
    /^\/payment-method+$/,
    /^\/payment-method-card+$/,
    /^\/crowdfunding-donor+$/,
  ];

  const shouldShowHeaderFooter = () => {
    return showHeaderFooterRoutes.some((pattern) => pattern.test(location.pathname));
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
      {shouldShowHeaderFooter() && <Header />}
      <div className="flex flex-grow">
        {shouldShowHeaderFooter() && (
          <div className="flex-shrink-0 w-14">
            <SideProfile />
          </div>
        )}
        <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home token={token} />} />
          <Route path="/crowdfunding" element={<Crowdfunding />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/language" element={<Language />} />
          <Route path="/trip-group" element={<TripComponent />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/group" element={<Group />} />
          <Route path="/access-group" element={<Access />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/payment-method-card" element={<PaymentMethodCard />} />
          <Route path="/payment-end" element={<PaymentEnd />} />
          <Route path="/crowdfundingForm" element={<CrowdfundingForm />} />
          <Route path="/mercadopago" element={<MercadoPago />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityDetailPage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/crowdfunding-donor" element={<CrowdfundingDonor />} />
        </Route>
        <Route path="*" element={<Error />} />
        </Routes>
        </main>
      </div>
      {shouldShowHeaderFooter() && <AppFooter />}
    </div>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default AppWrapper;
