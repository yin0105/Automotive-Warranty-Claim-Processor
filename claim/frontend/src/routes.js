import Dashboard from "views/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlertPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts.jsx";
import Calendar from "views/Calendar.jsx";
import UserPage from "views/Pages/UserPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import LogoutPage from "views/Pages/LogoutPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";
import ScheduleList from "views/Schedules/ScheduleList";
import AddSchedule from "views/Schedules/AddSchedule";
import ScheduleStatus from "views/Schedules/ScheduleStatus";
import ScheduleListUser from "views/Schedules/ScheduleListUser"

import RepairOrderList from "views/RepairOrders/RepairOrderList";
import AddRepairOrder from "views/RepairOrders/AddRepairOrder";

var routes = [
  {
    path: "/dashboard",
    layout: "/frontend/admin",
    name: "Dashboard",
    icon: "pe-7s-graph",
    category: ["admin",],
    component: ScheduleStatus
  },  
  {
    path: "/dashboard",
    layout: "/frontend/dealership",
    name: "Dashboard",
    icon: "pe-7s-graph",
    category: ["dealership",],
    component: ScheduleStatus
  },

  {
    path: "/repair_order",
    layout: "/frontend/dealership",
    name: "Upload Repair Order",
    icon: "pe-7s-note2",
    category: ["dealership",],
    component: RepairOrderList
  },
  {
    path: "/upload_pdf",
    layout: "/frontend/dealership",
    name: "Upload Repair Order",
    icon: "pe-7s-note2",
    category: [],
    component: AddRepairOrder
  },

  // {
  //   path: "/add_schedule",
  //   layout: "/frontend/admin",
  //   name: "Add Schedule",
  //   mini: "AS",
  //   redirect: true,
  //   component: AddSchedule
  // },
  // {
  //   path: "/charts",
  //   layout: "/frontend/admin",
  //   name: "Users",
  //   icon: "pe-7s-users",
  //   component: Charts
  // },
  {
    path: "/login-page",
    layout: "/frontend/auth",
    name: "Login",
    icon: "pe-7s-users",
    category: [],
    component: LoginPage
  },
  {
    path: "/logout-page",
    layout: "/frontend/auth",
    name: "Log out",
    icon: "pe-7s-next-2",
    category: ["admin", "dealership",],
    component: LogoutPage
  },
  
  // {
  //   path: "/register-page",
  //   layout: "/frontend/auth",
  //   name: "Register",
  //   icon: "pe-7s-date",
  //   component: RegisterPage
  // },
  // {
  //   path: "/home",
  //   layout: "/frontend/user",
  //   name: "ScheduleListUser",
  //   icon: "pe-7s-date",
  //   redirect: true,
  //   component: ScheduleListUser
  // },
  // {
  //   path: "/collection_page",
  //   layout: "/frontend/user",
  //   name: "CollectionPage",
  //   icon: "pe-7s-date",
  //   redirect: true,
  //   component: CollectionPage
  // },
];
export default routes;
