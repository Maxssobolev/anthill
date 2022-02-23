import Link from 'next/link'

import { useSelector } from 'react-redux'

//components
import Search from '../Search/Search'
import ChangeCity from '../ChangeCity/ChangeCity'
import ChangeLang from '../ChangeLang/ChangeLang'
//icons
import BurgerIcon from '../../assets/img/burger-menu.svg'
import TelegramIcon from '../../assets/img/telegram-icon.svg'
import WhatsappIcon from '../../assets/img/whatsapp-icon.svg'
import ProfileIcon from '../../assets/img/profile-icon.svg'
import ProfileMobileIcon from '../../assets/img/profile-mobile-icon.svg'
import FavouritesIcon from '../../assets/img/favourites-icon.svg'
import CartIcon from '../../assets/img/cart-icon.svg'
import LogoMobileIcon from '../../assets/img/logo-mobile.svg'
import LogoIcon from '../../assets/img/logo.svg'



export default function Header() {
    const menuList = [
        { title: 'О нас', link: '/' },
        { title: 'Предложение', link: '/' },
        { title: 'Возможности', link: '/' },
        { title: 'Условия использования', link: '/' },
        { title: 'Ответы на вопросы', link: '/' },
        { title: 'Контакты', link: '/' },
    ]
    const user = useSelector(state => state.user)

    return (
        <header className="relative bg-white">
            <div className="bg-main-black py-8 hidden desktop:flex">
                <div className="header-top container flex justify-end">
                    <Link href="/" passHref>
                        <TelegramIcon
                            className="hover:fill-main-orange fill-white transition duration-500"
                        />
                    </Link>
                    <Link href="/" passHref>
                        <WhatsappIcon
                            className=" ml-24 hover:fill-main-orange fill-white transition duration-500"
                        />
                    </Link>
                </div>
            </div>

            {/* ROW WITH SEARCH AND CATALOG */}
            <div className="container py-8 flex items-center justify-between">
                <Link href="/" passHref>
                    <LogoIcon className="hidden desktop:flex" />
                </Link>
                <div className="flex items-center desktop:w-full">
                    <Link href="/" passHref>
                        <BurgerIcon
                            className="
                                menu-mobile desktop:hidden
                                fill-main-black
                                hover:fill-main-orange
                                transition
                                duration-500
                            "
                        />
                    </Link>
                    <div className="hidden items-center w-full justify-center desktop:flex">
                        {/* HEADER DESKTOP */}
                        <Search />
                        <div className="flex items-center mx-24">
                            <ChangeCity />
                            <ChangeLang />
                        </div>
                    </div>
                    <Search type='mobile' />
                </div>
                <Link href="/" passHref>
                    <LogoMobileIcon className="desktop:hidden" />
                </Link>
                <div className="flex items-center">
                    <Link
                        href={user.isAuth ? '/profile' : '/login'}
                        passHref
                    >
                        <span className="desktop:mx-16 mx-8">
                            <ProfileIcon
                                className="
                                    hidden
                                    desktop:flex
                                    fill-main-black
                                    hover:fill-main-orange
                                    transition
                                    duration-500
                                "

                            />
                            <ProfileMobileIcon
                                className="
                                desktop:hidden
                                fill-main-black
                                hover:fill-main-orange
                                transition
                                duration-500
                              "
                            />
                        </span>

                    </Link>
                    <Link href="/" passHref>
                        <FavouritesIcon
                            className="
                                mx-16 hidden desktop:flex
                                fill-main-black
                                hover:fill-main-orange
                                transition
                                duration-500
                            "
                        />
                    </Link>

                    <div className="desktop:ml-16 ml-8">
                        <CartIcon
                            className="
                                hidden
                                desktop:flex
                                fill-main-black
                                hover:fill-main-orange
                                transition
                                duration-500
                          "
                            width="27"
                            height="30"
                        />

                        <CartIcon
                            //here is mobile version of this icon
                            className="
                                desktop:hidden
                                fill-main-black
                                hover:fill-main-orange
                                transition
                                duration-500
                            "
                            width="16"
                            height="18"
                        />
                    </div>
                </div>
            </div>


            {/* MENU LIST */}
            <div className="bg-gray-100 hidden desktop:flex">
                <nav className="container">
                    <ul className="flex justify-around items-center py-18">
                        {
                            menuList.map((itm, idx) => {
                                return (
                                    <li key={`menu__item-${idx}`}>
                                        <Link
                                            href={itm.link}
                                            passHref
                                        >
                                            <span
                                                className="
                                                text-16
                                                leading-19
                                                text-main-black
                                                focus:text-main-orange
                                                hover:text-main-orange
                                                font-gilroy font-medium
                                                transition
                                                duration-500
                                            ">
                                                {itm.title}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            {/* MOBILE VERSION OF SECOND ROW WITH CATALOG */}
            <div
                className="
                    border-t-1 border-b-1
                    py-24
                    border-gray-300
                    desktop:hidden
                    container
                    flex
                    justify-between
                    items-center
                "
            >
                {/* HEADER MOBILE */}

                <ChangeCity type='mobile' />
            </div>
        </header >
    )
}