
const stateDefaultImg = './img/products/black.jpg';

export const stateImgCar = (state = stateDefaultImg, action) => {

    switch(action.type){
        case 'CHANGE_COLOR':{
          state = `./img/products/${action.newColor}.jpg`;
          return state; 
        }
      default : return state;
    }
}