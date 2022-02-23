import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import CatalogIcon from '../../../../assets/img/catalog-icon.svg'


export default function HeaderCatalogDesktop() {
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
                    title: 'Рули',
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
                    <ul className="menu menu-bar">
                        <li>
                            <button
                                type='button'
                                className="
                                    menu-link menu-bar-link
                                    button
                                    text-18
                                    leading-19
                                    bg-main-orange
                                    hover:bg-main-black
                                    focus:bg-main-black
                                    transition
                                    duration-500
                                    flex
                                    px-32
                                    py-16
                                    flex
                                    items-center
                                    text-white
                                    font-medium
                                "
                                aria-haspopup="true"
                            >
                                <CatalogIcon />
                                <span className="ml-16 leading-20"> Каталог </span>
                            </button>


                            <ul className="mega-menu mega-menu--multiLevel">
                                {
                                    catalog.map((itm, idx) => {

                                        return (
                                            <li key={`catalogMenu-${idx}`}>
                                                {/* Первый выпадающий список */}
                                                <a
                                                    href="javascript:void(0);"
                                                    className="menu-link mega-menu-link"
                                                    aria-haspopup="true"
                                                    role="button"
                                                >
                                                    {itm.title}
                                                </a>

                                                <ul className="menu menu-list">
                                                    {itm.subCategories.map((subItem, subIdx) => {
                                                        return (
                                                            <li key={`catalogMenu_sub-${subIdx}`}>
                                                                {/* Второй (правый) выпадающий список */}
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    className="menu-link menu-list-link"
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
                                                                                            text-18
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
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}