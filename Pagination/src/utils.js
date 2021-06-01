const paginate = (followers) => {
    const followerPerPage= 9
    const pages = Math.ceil(followers.length / followerPerPage)
    console.log(pages)
    const newArray = Array.from({length : pages}, (_, index) => {
        const start = index * followerPerPage
        return followers.slice(start, start+ followerPerPage)
        
    })
    return newArray
}

export default paginate
