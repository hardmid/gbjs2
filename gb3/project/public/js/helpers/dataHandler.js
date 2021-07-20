export default {
    _url: './api/v1/',

    getCatalog(errorCallback) {
        return fetch(`${this._url}catalogData.json`)
            .then((response) => {
                if(response.ok) {
                    return response.json()
                } else {
                    return errorCallback()
                }
            })
            .then((data) => data)
            .catch((error) => {
                return errorCallback()
            })
    },

    getCart(errorCallback) {
        return fetch(`${this._url}getCart.json`)
            .then((response) => {
                if(response.ok) {
                    return response.json()
                } else {
                    return errorCallback(response.status)
                }
            })
            .then((data) => data)
            .catch((error) => {
                return errorCallback(error)
            })
    },

    addToCart(errorCallback, data) {
        return fetch(`${url}addToCart`, {
            method: 'POST',
            body: data
        })
        .then((response) => {
            if(response.ok) {
                return true;
            } else {
                return errorCallback(response.status)
            }
        })
        .catch((error) => {
            return errorCallback(error)
        })
    },

    deleteFromCart(errorCallback, id) {
        return fetch(`${url}deleteFromCart`, {
            method: 'DELETE',
            body: {id: id}
        })
        .then((response) => {
            if(response.ok) {
                return true;
            } else {
                return errorCallback(response.status)
            }
        })
        .catch((error) => {
            return errorCallback(error)
        })
    }
}

// const x = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok')
//     }, 2000)
// })
// .then((data) => {
//     console.log(data)
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ok2')
//         }, 2000)
//     })
// })
// .then((data) => {
//     console.log(data, 'then2')
// })
// .catch((e) => {
//     console.log(e, 'rej')
// })

// console.log(x)
