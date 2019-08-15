import Types from './types';

const upadateImageIndex = (data) => ({
    type : Types.UPDATE_IMAGE_INDEX,
    data : data
})

const swapImagesAction = () => ({
    type : Types.SWAP_IMAGES
})

export default {
    upadateImageIndex,
    swapImagesAction
}