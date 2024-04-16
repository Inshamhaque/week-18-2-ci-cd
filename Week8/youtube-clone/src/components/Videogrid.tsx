import { Videocard } from "./Videocard"

const videos = [{
      title: "How I learnt Web3 and became Rich", 
      image :"/image.png",
      thumbImage: "/harkirat_1.jpg",
      views :"100K",
      timestamp:"2 days ago",
      author :"Hakirat Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    },
    {
        title: "How I learnt AI and became Rich", 
        image :"/image.png",
        thumbImage: "/harkirat_1.jpg",
        views :"100K",
        timestamp:"5 days ago",
        author :"dookie Singh"
    }
]
export const Videogrid = () =>{
    return(
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid grid-cols-4">
            {videos.map((video)=>{
                return(
                    <Videocard 
                    title = {video.title} 
                    image = {video.image}
                    thumbImage = {video.thumbImage}
                    views = {video.views}
                    timestamp = {video.timestamp}
                    author = {video.author}
                    />
                )
            })}
        </div>
    )
}