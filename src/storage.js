let storage = window.localStorage
export function saveStorage(list) {
    console.log(list)
    // 清空
    storage.clear()
    storage.setItem('list', list)
}
export function getStorage() {
    if (storage.getItem('list') === null || storage.getItem('list') === '') return []
    else return storage.getItem('list').split(',').map(item => parseInt(item))
}

