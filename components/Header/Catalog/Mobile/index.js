import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import CatalogMobileIcon from '../../../../assets/img/catalog-mobile-icon.svg'


export default function HeaderCatalogMobile() {
    const catalog = [
        {
            title: 'Автозапчасти',
            subCategories: [
                {
                    title: 'Шины',
                    content: [
                        {
                            title: 'Обода колеса и их части',
                            imageURL: '/assets/img/card-1.png',
                            href: '/'
                        },
                        {
                            title: 'Обода колеса и их части',
                            imageURL: '/assets/img/card-1.png',
                            href: '/'
                        },
                        {
                            title: 'Обода колеса и их части',
                            imageURL: '/assets/img/card-1.png',
                            href: '/'
                        }
                    ]
                },
                {
                    title: 'Шины',
                    content: [
                        {
                            title: 'Обода колеса и их части',
                            imageURL: '/assets/img/card-1.png',
                            href: '/'
                        }
                    ]
                }
            ]
        },

    ]

    return (
        <div className="catalog-menu">
            <div className="nav">
                <nav>
                    <a href="javascript:void(0);" className="mobile-menu-trigger">
                        <CatalogMobileIcon
                            className="
                                fill-main-black
                                group-focus:fill-main-orange
                                group-hover:fill-main-orange
                                transition
                                duration-500
                            "
                        />
                        <span
                            className="
                                text-14
                                leading-16
                                font-gilroy font-medium
                                text-main-black
                                group-focus:text-main-orange
                                group-hover:text-main-orange
                                transition
                                duration-500
                                ml-8
                            "
                        >
                            Каталог
                        </span>
                    </a>


                    <ul className="menu menu-bar">


                        {
                            catalog.map((itm, idx) => {

                                return (
                                    <li key={`catalogMenu-${idx}`}>
                                        {/* Первый выпадающий список */}
                                        <a
                                            href="javascript:void(0);"
                                            className="menu-link menu-bar-link"
                                            aria-haspopup="true"
                                            role="button"
                                        >
                                            {itm.title}
                                        </a>

                                        <ul className="mega-menu mega-menu--multiLevel">
                                            {itm.subCategories.map((subItem, subIdx) => {
                                                return (
                                                    <li key={`catalogMenu_sub-${subIdx}`}>
                                                        {/* Второй (правый) выпадающий список */}
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="menu-link mega-menu-link"
                                                            aria-haspopup="true"
                                                            role="button"
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                        <ul className="menu menu-list result-items">
                                                            {subItem.content.map((subItemContent, subItemContentIdx) => {
                                                                return (
                                                                    <li key={`catalogMenu_sub-Content-${subItemContentIdx}`}>
                                                                        {/* Список самих товаров */}
                                                                        <Link href={subItemContent.href} passHref>
                                                                            <div className="menu-link menu-list-link">
                                                                                <div
                                                                                    className="
                                                                                            border-1 border-gray-1000
                                                                                            bg-white
                                                                                            container-img
                                                                                            flex
                                                                                            items-center
                                                                                            justify-center
                                                                                        "
                                                                                >
                                                                                    <Image
                                                                                        src={subItemContent.imageURL}
                                                                                        alt={subItemContent.title}
                                                                                        objectFit="cover"
                                                                                        width={110}
                                                                                        height={110}

                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    className="
                                                                                        text-16
                                                                                        desktop:text-18
                                                                                        leading-28
                                                                                        font-gilroy font-medium
                                                                                        text-black
                                                                                        "
                                                                                >
                                                                                    {subItemContent.title}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            })
                        }


                    </ul>
                </nav>
            </div>
        </div>
    )
}