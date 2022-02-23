import SearchIcon from '../../assets/img/search-icon.svg'
import SearchMobileIcon from '../../assets/img/search-mobile-icon.svg'

export default function Search({ type }) {
    switch (type) {
        case 'mobile':
            return (
                <a href="" className="desktop:hidden ml-24">
                    <SearchMobileIcon
                        className="
                            fill-main-black
                            hover:fill-main-orange
                            transition
                            duration-500
                        "
                    />
                </a>
            )
        default:
            //desktop
            return (
                <div className="header-search relative group">
                    <input
                        type="text"
                        className="
                            w-full
                            outline-none
                            text-16
                            leading-19
                            font-gilroy font-medium
                            border-1 border-gray
                            placeholder-gray-200
                            group-hover:border-main-orange
                            group-focus:border-main-orange
                            transition
                            duration-500
                        "
                        placeholder="Поиск"
                    />
                    <SearchIcon
                        className="
                            absolute
                            right-16
                            top-half
                            transform
                            -translate-y-1/2
                            group-hover:stroke-main-orange
                            stroke-main-black
                            transition
                            duration-500
                        "
                    />
                </div>
            )
    }

}