import { Sidebar } from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { useSelector } from 'react-redux'
function DashSidebar() {
    const {currentUser} = useSelector((state) => state.user);
  return (
    <Sidebar>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item active icon={HiUser} label={currentUser.roles[0].name ? "User" : "Admin"} labelColor='dark'> 
                    Profile
                </Sidebar.Item>
                <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer'> 
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar