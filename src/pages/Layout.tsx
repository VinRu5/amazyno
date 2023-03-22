import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './Layout.scss';


export default function Layout(){
    return (
        <div className="layout-custom container-xl">
            <Navbar/>
            <Outlet/>
        </div>
    );
}