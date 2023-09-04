import Image from "next/image";

export default function Project({title,text,url}) {
    return (
        <div className="bg-bg1 dark:bg-bg1Dark grid lg:grid-col-4 md:grid-col-2 m-10">
            <div>
                <h1 className="text-xl text-primary dark:text-primaryDark">{title}</h1>
            </div>
            <p className="text-right col-start-1 col-span-1 w-3/4 text-primary dark:text-primaryDark">
            {text}
            </p>
            <p className="col-start-2">
                <Image
                    src={url}
                    width={300}
                    height={300}
                    alt="PApple Stock Bollinger Bands"
                    className="inset-0" />
            </p>
        </div>
    )
}