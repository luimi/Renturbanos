const api = "https://wa.me/"
const phone = "573014236639"

const getUrlApiWithMessage = (message) => {
    return `${api}${phone}/?text=${encodeURI(message)}`
}

const openWhatsApp = (message) => {
    return () => {
        window.open(getUrlApiWithMessage(message), '_blank');
    }
}

export {getUrlApiWithMessage, openWhatsApp}