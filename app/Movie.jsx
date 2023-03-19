import Link from "next/link"
import Image from "next/image"
export default function Movie({title,id,poster_path,release_date}){
    const imagePath="https://image.tmdb.org/t/p/original"
    return(
        <div>
            <Link href={`/${id}`}>
              <Image src={imagePath+poster_path} width={400} height={400} alt={title}/>
            </Link>
            <h1 className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>
            <h2>{release_date}</h2>
        </div>
    )
}