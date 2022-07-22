import tips from "../database/tips.js";


const model = {

    aleatorio : () => {
    const sort = Math.floor(Math.random() * tips.length)
    return tips.filter(e => e.id == sort)
    },

    allTips : () => {
    return tips
    },

    dicaId : (id) => {
    return tips.filter(e => e.id == id)
    },

    adicionarDica : (dica) => {
        const newDica = {
            id : tips.length,
            ...dica
        } 
        tips.push(newDica)
        return newDica.id
    }

}

export default model
