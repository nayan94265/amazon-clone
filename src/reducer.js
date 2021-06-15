export const initialState = {
    basket : [
        {
        id:"6",
        name:"juicer",
        price:"2500",
        info:"A juicer, also known as a juice extractor, is a tool used to extract juice from fruits, herbs, leafy greens and other types of vegetables in a process called juicing.",
        rating:"5",
        image:"https://m.media-amazon.com/images/I/71meaaMcT-L._AC_.jpg"



        }
    ],
    user:null,
    
};


const reducer = (state,action) => {

    switch(action.type){
        case 'Add_to_Basket':
            return {
            ...state,
             basket:[...state.basket,action.item]
                   };
        
        case 'Remove_from_Basket':
            let newbasket = [...state.basket];
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id);
            
            //   console.log(index);
            if (index >= 0){
                newbasket.splice(index,1);
                // console.log(newbasket);
            }
            else{
                console.warn(`Can't romove the item `);   
            }
            return {
                ...state,
                basket : newbasket,
            };
        default:
            return state;
    }
};

export default reducer;