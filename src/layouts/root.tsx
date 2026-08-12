import { Outlet } from "react-router";
import Navbar from "../components/navbar";

export default function RootLayout() {
    return (
        <div className="flex flex-col">
            <Navbar />

            <main className="mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )
}
