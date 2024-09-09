"use client"
import { useRouter } from 'next/router';

const DashboarRoute = () => {
    const router = useRouter();

    // useEffect(() => {
        const routing = (routerName) => {
            router.push(`/dashboard/${routerName}`)
        }
    // }, [router])

    return (
        <ul>
            <li onClick={() => routing('')} className="block py-2 px-4 hover:bg-[#0a2839] text-white font-semibold">
                Home
            </li>
            <li onClick={() => routing('all_users')} className="block py-2 px-4 hover:bg-[#0a2839] text-white font-semibold">
                All Users
            </li>
            <li onClick={() => routing('launch_event_form')} className="block py-2 px-4 hover:bg-[#0a2839] text-white font-semibold">
                Launch New Event
            </li>
        </ul>
    );
};

export default DashboarRoute;