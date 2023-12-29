import { FC } from "react"
import styles from '../styles/header.module.css'
import { Link } from "@remix-run/react";

const LogoLink = <Link to={'/admin'}><h2 className="text-xl font-medium">Remix</h2></Link>;
const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div>
                {LogoLink}
            </div>
            <div>
                <div className="flex items-center">
                    <p className="text-white border-s border-gray-300 ml-8">a</p>
                    <div className="ml-4">
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header