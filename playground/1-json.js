const fs = require('fs')

const dataJSON = fs.readFileSync('hello.json').toString()
const data = JSON.parse(dataJSON)
const datas = data.filter(function(title){
    return title.name !== 'ha' && title.name !== 'thu'
})
console.log(datas.length)
console.log(datas)