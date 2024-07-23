import Poster from '../models/posters.model.js'

export const getPosters = async (req, res) => {
    try{
        const poster = await Poster.findAll();
        res.send(poster);
    }catch(error){
        res.send('error')
    }
}

export const getPoster = async (req, res) => {
    try{
        const poster = await Poster.findAll({
            where: {
            id: req.params.id
            },
        });
        res.send(poster);
    }catch(error){
        res.send('error')
    }
}

export const postPosters = async (req, res) => {
    const {movie, year, description, director, dirfoto, timecode, genre} = req.body
    try{
        const poster = await Poster.create({
            movie,
            year,
            description,
            director,
            dirfoto,
            timecode,
            genre
        })
        res.send(poster)
    }catch(error){
        res.send(error)
    }
}

export const putPosters = async (req, res) => {
    const {movie, year, description, director, dirfoto, timecode, image, genre} = req.body
    try{
        await Poster.update({
            movie,
            year,
            description,
            director,
            dirfoto,
            timecode,
            image,
            genre
        },
        {where: {
            id: req.params.id
            }
        })
        res.send('Poster updated')
    }catch(error){
        res.send('error')
    }
}

export const deletePosters = async (req, res) => {
    try{
        await Poster.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send("Poster "+ req.params.id + " deleted")
    }catch(error){
        res.send('error')
    }
}

export const postImage = async (req, res) => {
    console.log(req.file)
    res.send('file uploaded')
    // try{
    //     await Poster.update({
    //         image: req.file.filename
    //     },
    //     {where: {
    //         id: req.params.id
    //         }
    //     })
    //     res.send('Image uploaded')
    // }catch(error){
    //     res.send('error')
    //     console.log(error)
    // }
}