export default function ChangeLang() {

    return (
        <div className="flex items-center ml-8">
            <div
                className="
                    font-gilroy font-medium
                    text-16
                    leading-19
                    text-main-black
                    "
            >
                Язык:
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
                Русский
            </a>
        </div>
    )
}