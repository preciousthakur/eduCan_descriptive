// import Image from "next/image";
import ProductOwnerModule from "@/components/ProductOwnerModule";
import SuperAdminModule from "@/components/SuperAdminModule";
import SchoolAdminModule from "@/components/SchoolAdminModule";
import TeacherModule from "@/components/TeacherModule";
import StudentModule from "@/components/StudentModule";
import ParentModule from "@/components/ParentModule";
import CommonModule from "@/components/CommonModule";
import Banner from "@/Common/Banner";

// const HomePage = dynamic(() => import("@/components/homepage/HomePage"), { ssr: false });

export default function Home() {
  return (
    <main className="font-sans min-h-screen w-full">
      <Banner />
      <ProductOwnerModule />
      <SuperAdminModule />
      <SchoolAdminModule />
      <TeacherModule />
      <StudentModule />
      <ParentModule />
      <CommonModule />
    </main>
  );
}
