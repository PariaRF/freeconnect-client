import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import DarkModeProvider from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmitedProjects from "./ui/SubmitedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./ui/AdminDashboard";
import Users from "./pages/Users";
import { SidebarProvider } from "./context/SidebarContext";
import AboutUs from "./pages/AboutUs";
import MainLayout from "./ui/MainLayout";
import Contact from "./pages/Contact";

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <SidebarProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster position="top-left" />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmitedProjects />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmitedProjects />} />
            </Route>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </SidebarProvider>
    </DarkModeProvider>
  );
}

export default App;
