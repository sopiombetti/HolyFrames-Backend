import {Router} from 'express';
import {getPosters, postPosters, putPosters, deletePosters, getPoster, postImage} from '../controllers/posters.controller.js'
import upload from '../imagesConfig.js'

const router = Router()

router.get('/poster', getPosters)
router.get('/poster/:id', getPoster)
router.post('/poster', postPosters)
router.put('/poster/:id', putPosters)
router.delete('/poster/:id', deletePosters)
router.post('/uploadImage/:id', upload.single('file'), postImage)

export default router;