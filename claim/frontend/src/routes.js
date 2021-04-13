
import LoginPage from "views/Pages/LoginPage.jsx";
import LogoutPage from "views/Pages/LogoutPage.jsx";
import ScheduleStatus from "views/Schedules/ScheduleStatus";
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
