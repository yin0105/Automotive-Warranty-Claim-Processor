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
];
export default routes;
