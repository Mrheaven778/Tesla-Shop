import { Footer } from "@/components";
import SideBar from "@/components/ui/sideBar/SideBar";
import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu/>
            <SideBar/>
            <div className="px-0 sm:px-10">
            {children}
            </div>
            <Footer/>
        </main>
    );
}