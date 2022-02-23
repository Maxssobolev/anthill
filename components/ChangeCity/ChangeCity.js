export default function ChangeCity({ type }) {


    switch (type) {
        case 'mobile':
            return (
                <div className="flex items-center mr-8">
                    <div
                        className="
                            font-gilroy font-medium
                            desktop:text-16
                            text-14
                            desktop:leading-19
                            leading-16
                            text-main-black
                        "
                    >
                        Город:
                    </div>
                    <a
                        href=""
                        className="
                            font-gilroy font-medium
                            desktop:text-16
                            text-14
                            desktop:leading-19
                            leading-16
                            text-main-orange
                            underline
                            ml-8
                            hover:no-underline
                            focus:no-underline
                            transition
                            duration-500
                        "
                    >
                        Алматы
                    </a>
                </div>
            )
        default:
            return (
                <div className="flex items-center mr-8">
                    <div
                        className="
                            font-gilroy font-medium
                            text-16
                            leading-19
                            text-main-black
                            "
                    >
                        Город:
                    </div>
                    <a
                        href=""
                        className="
                            font-gilroy font-medium
                            text-16
                            leading-19
                            text-main-orange
                            underline
                            ml-8
                            hover:no-underline
                            focus:no-underline
                            transition
                            duration-500
                            "
                    >
                        Алматы
                    </a>
                </div>
            )
    }
}