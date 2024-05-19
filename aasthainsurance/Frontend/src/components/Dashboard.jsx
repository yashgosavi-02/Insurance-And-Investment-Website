import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import DashSidebar from "./DashSidebar"
import DashProfile from "./DashProfile"
function Dashboard() {
    const location = useLocation()
    const [tab, setTab] = useState('')
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        if (tabFromUrl) {
            setTab(tabFromUrl)
        }
    }, [location.search]);
  return (
    <div>
        <div className="">
            {/* sidebar */}
            <DashSidebar />
        </div>
        {/* profile */}
        {tab === 'profile' && <DashProfile />}
    </div>
  )
}

export default Dashboard